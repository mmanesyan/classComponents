import React, { Component } from 'react';
import { calcClubStat } from '../helpers/calcStats.helpers.jsx';

class ClubsStats extends Component {
  getClubsStat(matches = [], { WIN, DRAW, LOSE }) {
    const defaultStat = {
      mp: 0,
      w: 0,
      d: 0,
      l: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      pts: 0,
    };

    return matches.reduce((acc, { team1, team2, score }) => {
      const team1Stat = acc[team1] ?? { ...defaultStat };
      const team2Stat = acc[team2] ?? { ...defaultStat };

      const [team1Score, team2Score] = score.ft;

      const clubsResult = {
        team1: DRAW,
        team2: DRAW,
      };

      if (team1Score > team2Score) {
        clubsResult.team1 = WIN;
        clubsResult.team2 = LOSE;
      } else if (team1Score < team2Score) {
        clubsResult.team1 = LOSE;
        clubsResult.team2 = WIN;
      }

      acc[team1] = calcClubStat(team1Stat, [team1Score, team2Score], clubsResult.team1);
      acc[team2] = calcClubStat(team2Stat, [team2Score, team1Score], clubsResult.team2);

      return acc;
    }, {});
  }

  render() {
    // Usage example
    const matchesData = [
      {
        team1: 'TeamA',
        team2: 'TeamB',
        score: { ft: [2, 1] },
      },
      // Add more matches here...
    ];

    const matchesResultOption = {
      WIN: 'WIN',
      DRAW: 'DRAW',
      LOSE: 'LOSE',
    };

    const clubsStats = this.getClubsStat(matchesData, matchesResultOption);

    return <div>Clubs Stats: {JSON.stringify(clubsStats)}</div>;
  }
}

export default ClubsStats;
