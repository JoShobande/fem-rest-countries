import { render, screen } from '@testing-library/react';
import Home from '../home';




test('should render input element', () => {
    render(<Home />)
    const InputElement = screen.getByPlaceholderText('Search for a country...');
    expect(InputElement).toBeInTheDocument();
});

test('should render select element', () => {
    render(<Home />)
    const selectElement = screen.getByTestId('region-select')
    expect(selectElement).toBeInTheDocument();
});
      

