import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MissionsTable from '../components/MissionsTable';

const mockMissions = [
  {
    mission_id: 1,
    mission_name: 'Mission 1',
    description: 'Mission 1 description',
    reserved: false,
  },
  {
    mission_id: 2,
    mission_name: 'Mission 2',
    description: 'Mission 2 description',
    reserved: true,
  },
];

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

const mockStore = {
  missions: { missions: mockMissions },
};

describe('MissionsTable', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback(mockStore));
    render(<MissionsTable />);
  });

  it('should render the component with correct headers', () => {
    const missionHeader = screen.getByText('Mission');
    const descriptionHeader = screen.getByText('Description');
    const statusHeader = screen.getByText('Status');

    expect(missionHeader).toBeInTheDocument();
    expect(descriptionHeader).toBeInTheDocument();
    expect(statusHeader).toBeInTheDocument();
  });
});
