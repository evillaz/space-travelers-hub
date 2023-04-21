import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import MissionsList from '../components/MissionsList';

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

describe('MissionsList', () => {
  beforeEach(() => {
    useSelector.mockImplementation((callback) => callback(mockStore));
    render(<MissionsList />);
  });

  test('renders list of missions with join and leave buttons', () => {
    const missionItems = screen.getAllByRole('row');
    expect(missionItems).toHaveLength(mockMissions.length);

    missionItems.forEach((missionItem, index) => {
      const mission = mockMissions[index];

      const missionName = screen.getByText(mission.mission_name);
      expect(missionName).toBeInTheDocument();

      const missionDescription = screen.getByText(mission.description);
      expect(missionDescription).toBeInTheDocument();

      const leaveButton = missionItem.querySelector('.mission-button.reserved');

      if (mission.reserved) {
        expect(leaveButton).toBeInTheDocument();
      } else {
        expect(leaveButton).not.toBeInTheDocument();
      }
    });
  });
});
