/* 

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../components/navbar';
import { ChatContext } from '../components/ChatContext';


jest.mock('../components/ChatContext', () => ({
    ChatContext: {
      chatActive: false,
      setChatActive: jest.fn(),
    },
  }));


test('Navbar renders correctly', () => {
  render(<Navbar />);
  // Check if the Navbar component renders without errors
  expect(screen.getByText('AutoFixer')).toBeInTheDocument();
});

test('Navbar expands and collapses when clicking the burger icon', () => {
  render(<Navbar />);
  const burgerIcon = screen.getByTestId('burger-icon');

  // Navbar should be collapsed initially
  expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();

  // Click the burger icon to expand
  fireEvent.click(burgerIcon);
  expect(screen.getByTestId('close-icon')).toBeInTheDocument();

  // Click the close icon to collapse
  fireEvent.click(screen.getByTestId('close-icon'));
  expect(screen.queryByTestId('close-icon')).not.toBeInTheDocument();
});

*/