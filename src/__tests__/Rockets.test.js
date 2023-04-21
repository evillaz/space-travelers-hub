import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import Rockets from '../routes/Rockets';
import { reserveActive, cancelReserve } from '../Redux/RocketsSlice/RocketSlice';

jest.mock('react-redux');

describe('Rockets Component', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      rocket: {
        RocketDatile: [
          {
            name: 'rocket1',
            description: 'Rocket 1 Description',
            image: 'rocket1.jpg',
            reserved: false,
          },
          {
            name: 'rocket2',
            description: 'Rocket 2 Description',
            image: 'rocket2.jpg',
            reserved: true,
          },
        ],
      },
    }));
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('Should render Rockets on the Screen', () => {
    const { getByText, getAllByAltText } = render(<Rockets />);
    const rocketNames = getAllByAltText(/rocket/).map((element) => element.getAttribute('alt'));
    expect(rocketNames).toEqual(['rocket1', 'rocket2']);
    expect(getByText('Rocket 1 Description')).toBeInTheDocument();
    expect(getByText('Rocket 2 Description')).toBeInTheDocument();
  });

  test('Should dispatch cancelReserve action when cancel reservation button is clicked', () => {
    const { getByText } = render(<Rockets />);
    const cancelButton = getByText('cancel Reservation');
    fireEvent.click(cancelButton);
    expect(mockDispatch).toHaveBeenCalledWith(cancelReserve('rocket2'));
  });

  test('Should dispatch reserveActive action when reserve rocket button is clicked', () => {
    const { getByText } = render(<Rockets />);
    const reserveButton = getByText('Reserve Rocket');
    fireEvent.click(reserveButton);
    expect(mockDispatch).toHaveBeenCalledWith(reserveActive('rocket1'));
  });
});
