import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <main className="homeBody">
        {/*<img /> insert picture here */}
        <h2>How to Play The Game</h2>
        <div className="instructions">
          <p>
            Step 1: Invite the person you would like to play against
          </p>
          <p>
            Step 2: Place your ships onto the board by typing in the coordinates that you would like. They must be the starting coordinate and the ending coordinate.
          </p>
          <p>
            Step 3: To fire at your opponent, type in the coordinate that you would like to fire at. If it misses, a (insert color here) pin will appear on that spot. If it hits, a (insert color here) pin will appear on that spot.
          </p>
          <p>
            Step 4: Play until one of you sinks all the other player&apos;s ships.
          </p>
          <p>
            Step 5: Congratulations. You now know how to play an online version of battle ship. Now, go out there and sink all the ships you can.
          </p>
        </div>
      </main>
    );
  }
}