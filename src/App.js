import React, { useState } from 'react';

import "./App.scss";
import Calculator from './Components/Calculator';

const btnContent = [
  ['C','←', '÷'],
  [7, 8, 9, 'x'],
  [6, 5, 4, '-'],
  [3, 2, 1, '+'],
  ['', 0, '=']
]

function App() {
  return (
    <>
      <Calculator props = {btnContent} />
    </>
  );
};

export default App