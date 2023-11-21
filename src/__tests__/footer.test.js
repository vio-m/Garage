import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../components/footer';

describe('Footer Component', () => {
  it('renders contact information', () => {
    render(<Footer />);
    
    // Replace these selectors with the actual elements in your Footer component
    const nameElement = screen.getByText('John Doe');
    const addressElement = screen.getByText('123 Main St, Anytown USA');
    const emailElement = screen.getByText('johndoe@example.com');
    const phoneElement = screen.getByText('(123) 456-7890');

    expect(nameElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
  });

  it('changes map scale on hover', () => {
    render(<Footer />);
    
    // Replace these selectors with the actual elements in your Footer component
    const mapImage = screen.getByAltText('Map');

    fireEvent.mouseEnter(mapImage);
    expect(mapImage).toHaveStyle('transform: scale(4)');

    fireEvent.mouseLeave(mapImage);
    expect(mapImage).toHaveStyle('transform: scale(3)');
  });
});

