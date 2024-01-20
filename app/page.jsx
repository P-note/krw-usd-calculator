'use client';

import Card from "@/components/card";
import { useEffect, useState} from 'react';

export default function Home() {

  const [USDval, setUSD] = useState(0);
  const [KRWval, setKRW] = useState(0);

  useEffect(()=>{
    const exchangeUSD = ()=>{
        setUSD(KRWval/1000);
    }

    exchangeUSD();
  }, [KRWval])

  useEffect(()=>{
    const exchangeKRW = ()=>{
        setKRW(USDval * 1000);
    }

    exchangeKRW();
  }, [USDval])  

  const handleChange = (e) => {
    const name = e.target.placeholder;
    const value = e.target.value;
    // console.log(name, value);
    if(name === "input usd here"){
      // setKRW(value * 1000);
      setUSD(value);
    }else{
      // setUSD(value / 1000);
      setKRW(value);
    }
    console.log(USDval, KRWval)
  }

  return (
    <section className="w-full flex-center flex-row justify-center">
      <Card 
        name="USD"
        exchange = {USDval}
        handleChange = {handleChange}
      />
      <Card 
        name="KRW"
        exchange = {KRWval}
        handleChange = {handleChange}
      />
    </section>
  );
}
