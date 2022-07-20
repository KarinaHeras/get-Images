import React from 'react';
import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react';
import Albums from '../Components/Albums/Albums'


describe('Albums', () => {
  it('renders appropriately', () => {
    render(<Albums />)
    expect(screen.getByText(/albums/i)).toBeInTheDocument()
  })
 })