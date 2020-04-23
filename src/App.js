import React, {useEffect, useState} from 'react';
import './App.css';
import CurrencyRow from './currencyRow';


const Base_URL = 'https://api.exchangeratesapi.io/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  console.log(currencyOptions)


  useEffect(()=>{
    fetch(Base_URL)
    .then(res => res.json())
    .then(data => {
      setCurrencyOptions([data.base, ...Object.keys(data.rates)])
    })
  }, [])
  
  return (
    <>
      <h1>Currency converter</h1>
      <CurrencyRow />
      <div className='equals'>= </div>
      <CurrencyRow />

    </>
  );
}

export default App;
