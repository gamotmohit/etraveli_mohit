import { render, screen } from '@testing-library/react';
import waitUntil from 'async-wait-until';
import App from './App';

test('renders UI loaded Search input on screen', () => {
  render(<App />);
  expect(screen.queryByTestId('test_movie_search')).toBeInTheDocument();
});

test('renders UI loaded sort button on screen', () => {
  render(<App />);
  expect(screen.queryByTestId('test_movie_sort_button')).toBeInTheDocument();
});

test('renders loading data from api text', () => {
  render(<App />);   
  expect(screen.queryByTestId('test_movie_loading_text')).toHaveTextContent('Fetching data from server....');
});

test('renders movie list data from api', async () => {
  render(<App />);
  waitUntil(() => expect(screen.queryByTestId('test_movie_sort_button')).toBeInTheDocument());
});
