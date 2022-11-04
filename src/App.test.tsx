import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('Enigma App React Lib Testing', () => {
  test('renders Enigma Layout', () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      }))
    });
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });
})
