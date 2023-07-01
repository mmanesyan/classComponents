import React, { Component } from 'react';
import aplClubs from '../assets/data/leagues/apl.json';
import aplMatches from '../assets/data/matches/apl.json';
import { matchesResultOption } from '../constants/matches.constants.js';
import getClubsStat from './matches.services.jsx';

class Table extends Component {
  getTable() {
    const clubStats = getClubsStat(aplMatches.matches, matchesResultOption);

    return Object.keys(clubStats)
      .map((clubName) => {
        const { code } = aplClubs.clubs.find(({ name }) => name === clubName);

        return {
          name: clubName,
          image: code,
          stats: clubStats[clubName],
        };
      })
      .sort((a, b) => b.stats.pts - a.stats.pts);
  }

  render() {
    // Usage example
    const tableData = this.getTable();

    return (
      <div>
        <h1>League Table</h1>
        <table>
          <thead>
            <tr>
              <th>Position</th>
              <th>Club</th>
              <th>Image</th>
              <th>Matches Played</th>
              <th>Wins</th>
              <th>Draws</th>
              <th>Losses</th>
              <th>Goals For</th>
              <th>Goals Against</th>
              <th>Goal Difference</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((club, index) => (
              <tr key={club.name}>
                <td>{index + 1}</td>
                <td>{club.name}</td>
                <td>
                  <img src={club.image} alt={club.name} />
                </td>
                <td>{club.stats.mp}</td>
                <td>{club.stats.w}</td>
                <td>{club.stats.d}</td>
                <td>{club.stats.l}</td>
                <td>{club.stats.gf}</td>
                <td>{club.stats.ga}</td>
                <td>{club.stats.gd}</td>
                <td>{club.stats.pts}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
