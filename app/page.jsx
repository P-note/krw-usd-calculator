'use client';

import Card from "@/components/card";
import { useEffect, useState} from 'react';

export default function Home() {

  const currency = 1300;

  const [USDval, setUSD] = useState(0);
  const [KRWval, setKRW] = useState(0);

  // useEffect(() => {
  //   setKRW(USDval * currency);
  // }, [USDval]);

  // useEffect(() => {
  //   setUSD(KRWval / currency);
  // }, [KRWval]);

  const handleChange = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    
    if(name === "USD"){
      setUSD(value);
      setKRW(value * currency);
    }else{
      setKRW(value);
      setUSD(value/currency);
    }
    // console.log(USDval, KRWval)
  }

  const handleClick = (e) => {
    e.target.value = ""
    if(e.target.id == "USD"){
      setUSD(0);    
    }
    else{
      setKRW(0);
    }
  }

  return (
    <section className="w-full flex-center flex-row align-middle">
      <Card 
        name="USD"
        exchange = {USDval}
        handleChange = {handleChange}
        handleClick = {handleClick}
      />
      <Card 
        name="KRW"
        exchange = {KRWval}
        handleChange = {handleChange}
        handleClick = {handleClick}
      />
    </section>
  );
}
