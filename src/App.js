import './App.css';
import Input from "./Input";
import ProcentSection from "./ProcentSection"
import Logo from "./assets/images/logo.svg"
import ResultAmount from "./ResultAmount"
import ResetButton from "./ResetButton"
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <img src={Logo}/>
      <div className='container'>
          <div className='calculate-side'>
              <Input/>
              <ProcentSection/>
              <Input/>
          </div>
          <div className='calculated-side'>
            <div className='main-calculated'>
              <ResultAmount/>
              <ResultAmount/>
            </div>
              <ResetButton/>
          </div>
      </div>
    </div>
  );
}

export default App;
