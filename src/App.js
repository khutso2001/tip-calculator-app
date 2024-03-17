import './App.css';
import Input from "./Input";
import ProcentSection from "./ProcentSection"
import Logo from "./assets/images/logo.svg"
import ResultAmountTip from "./ResultAmountTip"
import ResetButton from "./ResetButton"
import { useEffect, useState } from 'react';
import InputPerson from "./InputPerson"
import ResultAmountTotal from "./ResultAmountTotal"
function App() {
 const [bill, setBill]=useState('0');
 const [person,setPerson]=useState('0');
 const [procent, setProcent]=useState('0');
 const [tipAmount,setTipAmount]=useState('0');
 const [total, setTotal]=useState('0');

  useEffect (()=>{
   if (bill>0 && procent>0 && person>0){
      setTipAmount(bill*(procent / 100));
      setTotal( bill+tipAmount)
   }
  },[bill,procent,person,tipAmount])

  

  return (
    <div className="App">
      <img src={Logo}/>
      <div className='container'>
          <div className='calculate-side'>
              <Input 
                bill={bill}
                setBill={setBill}
              />
              <ProcentSection 
                setProcent={setProcent} 
                procent={procent}
              />
              <InputPerson 
                person={person}
                setPerson={setPerson}
              />
               
          </div>
          <div className='calculated-side'>
            <div className='main-calculated'>
              <ResultAmountTip amount="Total"
                person={person}
                tipAmount={tipAmount}
                setipAmount={setTipAmount}
              />
              <ResultAmountTotal amount="Tip Amount"
                person={person}
                total={total}
                setTotal={setTotal}
              />
            </div>
              <ResetButton 
              
            />
          </div>
      </div>
    </div>
  );
}

export default App;
