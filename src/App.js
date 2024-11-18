import React, { useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Controls from './components/Controls';

const DIRECTIONS = ['North', 'East', 'South', 'West'];

function App() {
  const [robot, setRobot] = useState({ x: 0, y: 0, direction: 'North' });

  const moveForward = () => {
    setRobot((prev) => {
      const { x, y, direction } = prev;
      let newX = x, newY = y;

      if (direction === 'North' && y < 4) newY++;
      if (direction === 'South' && y > 0) newY--;
      if (direction === 'East' && x < 4) newX++;
      if (direction === 'West' && x > 0) newX--;

      return { ...prev, x: newX, y: newY };
    });
  };

  const rotate = (rotation) => {
    setRobot((prev) => {
      const currentIndex = DIRECTIONS.indexOf(prev.direction);
      const newIndex = (currentIndex + rotation + DIRECTIONS.length) % DIRECTIONS.length;
      return { ...prev, direction: DIRECTIONS[newIndex] };
    });
  };

  return (
    <div className="app">
      <h1>Robot Simulator for Bellroy</h1>
      <Grid robot={robot} />
      <Controls moveForward={moveForward} rotate={rotate} />
    </div>
  );
}

export default App;
