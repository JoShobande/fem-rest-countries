import { render, screen } from '@testing-library/react';
import Header from '../header';


test('renders where in the world text', () => {
  render(<Header/>)
  const headerElement = screen.getByRole('heading');
  expect(headerElement.textContent).toBe('Where in the world?');
});
