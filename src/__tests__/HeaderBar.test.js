import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeaderBar from '../components/HeaderBar';

describe('HeaderBar', () => {
  it('Testing of HeaderBar.jsx', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <HeaderBar />
      </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
