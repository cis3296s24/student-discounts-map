import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Test suite for the App component.
 * @test {App}
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
