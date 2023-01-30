import React from 'react';
import LottieFile from './LottieFile';
import Form from './Form';

const Main = () => {
  return (
    <div style={{
      width: "100%",
      height: "100%",
      background: "#1A120B",
      color: "white"
    }}>
      <div style={{
        padding: "50px"
      }}>
        <LottieFile />
      </div>
    </div>
  )
}

export default Main