import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


// test('display counter text', () => {
//   render(<App />);

//   expect(screen.getByTestId("counter-text")).toHaveTextContent("0");
// });

test('increment counter', () => {
  render(<App />);

  const btnIncrement = screen.getByTestId("btn-increment");
  fireEvent.click(btnIncrement);

  expect(screen.getByTestId("counter-text")).toHaveTextContent("1");
});

test('decrement counter', () => {
  render(<App />);

  const btnDecrement = screen.getByTestId("btn-decrement");
  fireEvent.click(btnDecrement);

  expect(screen.getByTestId("counter-text")).toHaveTextContent("-1");
});

test('increment twice counter', () => {
  render(<App />);

  const btnIncrement = screen.getByTestId("btn-increment");
  fireEvent.click(btnIncrement);
  fireEvent.click(btnIncrement);
  expect(screen.getByTestId("counter-text")).toHaveTextContent("2");
});


test('decrement twice counter', () => {
  render(<App />);

  const btnDecrement = screen.getByTestId("btn-decrement");
  fireEvent.click(btnDecrement);
  fireEvent.click(btnDecrement);

  expect(screen.getByTestId("counter-text")).toHaveTextContent("-2");
});

