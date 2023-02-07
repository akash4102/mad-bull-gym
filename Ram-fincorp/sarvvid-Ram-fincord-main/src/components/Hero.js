import React from 'react';
import { useState } from 'react';
import "../Styles/Hero.css";

const  Hero= () => {
  const [number, setNumber] = useState("");
  function handleChange(e){
    setNumber(e.target.value)
  }
  function handleClick(){
    if(number.length===10){
      alert("got it");
      setNumber("");
    }
    else{
      alert("please enter valid number")
    }
  }
  return (
    <div className='main'>
        <div className='container'>
            <div>
                <p className='name'>Welcome to Ram Fincorp Company</p>
                <p className='tag-line'>Build Your Better <br />Financial Future</p>
            </div>
            <div className='main-div'>
                <input type="tel" placeholder='Phone Number' className='input-area' value={number} onChange={handleChange}/>
                <button className='btn' onClick={handleClick}>Submit</button>
            </div>
        </div>  
    </div>
  )
}

export default Hero;