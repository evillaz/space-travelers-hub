import React from 'react';
import { useSelector } from 'react-redux';
import { render } from '@testing-library/react';
import ProfileView from '../components/ProfileView';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('ProfileView.jsx', () => {
  it('Testing of ProfileView.jsx', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({
      missions: {
        missions: [
          { mission_id: 1, mission_name: 'Mission 1', reserved: true },
          { mission_id: 2, mission_name: 'Mission 2', reserved: false },
        ],
      },
      rocket: {
        RocketDatile: [
          { id: 1, name: 'Rocket 1', reserved: true },
          { id: 2, name: 'Rocket 2', reserved: false },
        ],
      },
    }));
    const { container } = render(<ProfileView />);
    expect(container).toMatchSnapshot();
  });
});
