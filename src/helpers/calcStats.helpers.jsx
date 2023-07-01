import React, { Component } from 'react';
import { matchesResultOption } from '../constants/matches.constants.js';

class ClubStats extends Component {
  calcClubStat(clubStat = {}, scores = [], matchResult) {
    const defaultStat = {
      ...clubStat,
      mp: clubStat.mp + 1,
      gf: clubStat.gf + scores[0],
      ga: clubStat.ga + scores[1],
    };

    defaultStat.gd = defaultStat.gf - defaultStat.ga;

    switch (matchResult) {
      case matchesResultOption.WIN:
        defaultStat.w = clubStat.w + 1;
        defaultStat.pts = clubStat.pts + 3;
        break;
      case matchesResultOption.LOSE:
        defaultStat.l = clubStat.l + 1;
        break;
      case matchesResultOption.DRAW:
        defaultStat.d = clubStat.d + 1;
        defaultStat.pts = clubStat.pts + 1;
        break;
    }

    return defaultStat;
  }

  render() {
    // Usage example
    const clubStat = {
      mp: 10,
      gf: 20,
      ga: 15,
      gd: 5,
      w: 6,
      l: 3,
      d: 1,
      pts: 19,
    };

    const scores = [2, 1];
    const matchResult = matchesResultOption.WIN;

    const updatedClubStat = this.calcClubStat(clubStat, scores, matchResult);

    return <div>Updated Club Stat: {JSON.stringify(updatedClubStat)}</div>;
  }
}

export default ClubStats;
