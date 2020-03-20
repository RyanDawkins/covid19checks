import React from 'react';
import './App.css';
import IncomeForm from './calculator/IncomeForm'
import Disclaimer from './disclaimer/Disclaimer';

function App() {
  return (
    <div className="App">
      <Disclaimer />
      <header className="App-header">
        <IncomeForm />
      </header>
    </div>
  );
}

export default App;
