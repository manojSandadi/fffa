import React from 'react';

const defaultMatchSchedule = [
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Emus', awayTeam: 'Mosquitoes', location: 'SLU' },
];

const PageA = () => {
  return (
    <div>
      <h2>Match Schedule</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {defaultMatchSchedule.map((match, index) => (
            <tr key={index}>
              <td>{match.date}</td>
              <td>{match.time}</td>
              <td>{match.homeTeam}</td>
              <td>{match.awayTeam}</td>
              <td>{match.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PageA;
