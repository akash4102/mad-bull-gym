import React from 'react';
import Lottie from 'react-lottie';
import animationData from "../lotties/dead-lift.json"

export default function App() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div style={{
        width: "100%",
        height: "500px",
        display: "flex",
        flexDirection: "row"
      }}>
        <div style={{
            width: "50%",
            textAlign: "center",
            display: "grid",
            placeContent: "center",
            fontSize: "70px",
        }}>
            Welcome To Our Gym
        </div>
        <div style={{
            width: "50%"
        }}>
            <Lottie 
                options={defaultOptions}
                height={500}
                width={500}
            />
        </div>
      </div>
    );
  }