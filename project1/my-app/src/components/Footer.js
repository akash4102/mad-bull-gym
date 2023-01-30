import React from 'react'

const Footer = () => {
  const d= new Date();
  let year= d.getFullYear();
  return (
    <footer style={{
        textAlign: "center",
        backgroundColor: "black",
        padding: "3%",
        color: "white"
    }}>
        <p>All Rights Reserved</p>
        <p>&copy; Copyright {year}</p>
        
    </footer>
  )
}

export default Footer