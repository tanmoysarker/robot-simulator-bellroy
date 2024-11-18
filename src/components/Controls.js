import React from 'react';
import './Controls.css';

const Controls = ({ moveForward, rotate }) => (
  <div className="controls">
    <button onClick={() => rotate(-1)}>Rotate Left</button>
    <button onClick={moveForward}>Move Forward</button>
    <button onClick={() => rotate(1)}>Rotate Right</button>
  </div>
);

export default Controls;
