import React from 'react';
import './Grid.css';
import northIcon from '../assets/north.png';
import southIcon from '../assets/south.png';
import eastIcon from '../assets/east.png';
import westIcon from '../assets/west.png';

const directionIcons = {
  North: northIcon,
  South: southIcon,
  East: eastIcon,
  West: westIcon,
};

const Grid = ({ robot }) => {
  const cells = [];

  for (let row = 4; row >= 0; row--) {
    for (let col = 0; col <= 4; col++) {
      const isRobot = robot.x === col && robot.y === row;
      cells.push(
        <div key={`${col}-${row}`} className="grid-cell">
          {isRobot && (
            <div className="robot">
              <img
                src={directionIcons[robot.direction]}
                alt={robot.direction}
                className="direction-icon"
              />
            </div>
          )}
        </div>
      );
    }
  }

  return <div className="grid">{cells}</div>;
};

export default Grid;
