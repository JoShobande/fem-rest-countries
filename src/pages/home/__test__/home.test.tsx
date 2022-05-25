import {fireEvent, render, screen } from '@testing-library/react';
import Home from '../home';
import {rest} from 'msw'
import { setupServer } from 'msw/node'
import { BrowserRouter, Router, useLocation } from 'react-router-dom';
import { createBrowserHistory} from 'history'




const server = setupServer(
    rest.get('https://restcountries.com/v2/all', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{
            name: 'Afghanistan', 
        }]),
      )
    }),
    rest.get('https://restcountries.com/v2/name/austria', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{
            name: 'Austria', 
        }]),
      )
    }),

    rest.get('https://restcountries.com/v2/region/africa', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([{
            region: 'Africa', 
        }]),
      )
    }),
)

const MockHome= () => {
  const history = createBrowserHistory()
  return(
      <Router location={history.location} navigator={history} >
        <Home/>   
      </Router>
  )
}


beforeAll(()=>server.listen())
afterAll(()=>server.close())
afterEach(()=>server.resetHandlers())

test('should render input element', () => {
    render(<MockHome />)
    const InputElement = screen.getByPlaceholderText('Search for a country...');
    expect(InputElement).toBeInTheDocument();
});

test('should render select element', () => {
    render(<MockHome />)
    const selectElement = screen.getByTestId('region-select')
    expect(selectElement).toBeInTheDocument();
});

test('should render the first country', async () => {
    render(<MockHome />)
    const countryElementName = await screen.findByTestId('country-item-0')
    expect(countryElementName).toBeInTheDocument();
});

test('It should render countries based on search keyword', async() => {
    render (<MockHome/>)
    const InputValue = screen.getByPlaceholderText('Search for a country...') as HTMLInputElement
    expect(InputValue.value).toBe('')
    fireEvent.change(InputValue, {target: {value: 'Austria'}})
    const countryElement = await screen.findByTestId('country-item-0')
    expect(countryElement.innerHTML).toBe('Austria');   
})

test('should toggle region options', () => {
  render(<MockHome />)
  const selectElement = screen.getByTestId('region-select')
  fireEvent.click(selectElement)
  const optionElement = screen.getByTestId('options')
  expect(optionElement).toBeInTheDocument();
  fireEvent.click(selectElement)
  expect(optionElement).not.toBeInTheDocument()
});

test('It should render countries based filter option', async() => {
  render (<MockHome/>)
  const selectElement = await screen.getByTestId('region-select')
  fireEvent.click(selectElement)
  const regionList = await screen.getByTestId("region-list-0")
  fireEvent.click(regionList)
  const regionElement = await screen.findByTestId('region-item-0')
  expect(regionElement.innerHTML).toBe('Africa');   
})

test("redirects to specific country page", async() => {
  const history = createBrowserHistory();
  render (<MockHome/>)
  const  country = await screen.findByText("Afghanistan")
  fireEvent.click(country)
  expect(history.location.pathname).toBe("/Afghanistan");
});


      

