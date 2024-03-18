// MatchSchedule.client.js
"use client";
import React, { useState, useEffect } from 'react';
import EditableTimeCell from './EditableTimeCell.client';
import dynamic from 'next/dynamic';

const defaultMatchSchedule = [
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Mosquitoes', awayTeam: 'Hyenas', location: 'SLU' },
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Mosquitoes', awayTeam: 'Emus', location: 'SLU' },
  { date: 'Sat, Mar 2', time: '9:00 AM', homeTeam: 'Mosquitoes', awayTeam: 'Liverpool', location: 'SLU' },
  { date: 'Sat, Mar 2', time: '11:30 AM', homeTeam: 'Mosquitoes', awayTeam: 'Grasskickers', location: 'SLU' },
  { date: 'Sun, Mar 3', time: '9:30 AM', homeTeam: 'Mosquitoes', awayTeam: 'PCFC', location: 'SLU' },
  { date: 'Sat, Mar 9', time: '6:30 AM', homeTeam: 'Mosquitoes', awayTeam: 'Mockingbirds', location: 'SLU' },
];

const PageA = dynamic(() => import('./Mosquitoes'));
const PageB = dynamic(() => import('./Hyenas'));
const PageC = dynamic(() => import('./Emus'));


const MatchSchedule = () => {
  const [matches, setMatches] = useState([]);
  const [selectedPage, setSelectedPage] = useState('TEAMS');

  useEffect(() => {
    const loadedMatches = defaultMatchSchedule.map(match => {
      const storedTimeKey = `matchTime-${match.homeTeam}-${match.awayTeam}`;
      const storedTime = localStorage.getItem(storedTimeKey);

      const storedDateKey = `matchDate-${match.homeTeam}-${match.awayTeam}`;
      const storedDate = localStorage.getItem(storedDateKey);

      return{
         ...match, 
         time: storedTime ? storedTime : match.time,
         date: storedDate ? storedDate : match.date
        };
    });
    setMatches(loadedMatches);
  }, []);

  const renderContentBasedOnSelection = () => {
    switch (selectedPage) {
      case 'Mosquitoes':
        return <PageA />;
      case 'Hyenas':
        return <PageB />;
      case 'Emus':
        return <PageC />;
      default:
        return (
          <table>
          <tbody>
          <td style={{ fontSize: '2em', color: 'black'}}>Match</td>
          <td style={{ fontSize: '2em', color: 'black' }}>Time</td>
            {matches.map((match, index) => (
              <tr key={index}>
                <td>
                  {match.homeTeam}
                  <br />
                  V.S.
                  <br />
                  {match.awayTeam}
                </td>
                <td>
                  <br />
                  <EditableTimeCell match={match} />
                  @
                  <br />
                  {match.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            )
        }
  };

  return (
    <div>
    <select 
      value={selectedPage} 
      onChange={(e) => setSelectedPage(e.target.value)}
      style={{
        fontSize: '20px', 
        height: '50px',
        width: '200px',
        padding: '5px',
        borderRadius: '5px',
      }}
    >
        <option value="">TEAMS</option>
        <option value="Mosquitoes">Mosquitoes</option>
        <option value="Hyenas">Hyenas</option>
        <option value="Emus">Emus</option>
      </select>

      {renderContentBasedOnSelection()}
    </div>
  );
};

export default MatchSchedule;
