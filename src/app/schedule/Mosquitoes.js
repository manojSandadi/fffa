import React from 'react';

const defaultMatchSchedule = [
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Mosquitoes', awayTeam: 'Hyenas', location: 'SLU' },
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Mosquitoes', awayTeam: 'Emus', location: 'SLU' },
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Mosquitoes', awayTeam: 'Liverpool', location: 'SLU' },
  { date: 'Sat, Mar 2', time: '11:30 AM', homeTeam: 'Mosquitoes', awayTeam: 'Grasskickers', location: 'SLU' },
  { date: 'Sun, Mar 3', time: '9:30 AM', homeTeam: 'Mosquitoes', awayTeam: 'PCFC', location: 'SLU' },
  { date: 'Sat, Mar 9', time: '6:30 AM', homeTeam: 'Mosquitoes', awayTeam: 'Mockingbirds', location: 'SLU' },
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
