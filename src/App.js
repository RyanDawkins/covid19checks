import React from 'react';
import './App.css';
import IncomeForm from './calculator/IncomeForm'
import Disclaimer from './disclaimer/Disclaimer';
import LanguageSwitcher from './language-switcher/LanguageSwitcher';

function App() {
  return (
    <div className="App">
      <Disclaimer />
      <header className="App-header">
        <LanguageSwitcher />
        <IncomeForm />
      </header>
    </div>
  );
}

export default App;
