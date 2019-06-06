import React from 'react';
import './App.css';
import Buttons from './components/ButtonComponents/Buttons';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className='contain'>
         <CalculatorDisplay />
         <ActionButton />
         <Buttons />
    </div>
  );
};

export default App;
