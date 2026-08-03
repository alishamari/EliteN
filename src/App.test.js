// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NFTGrid title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NFTGrid/i);
    expect(titleElement).toBeInTheDocument();
});
