import React from 'react'

const Footer = () => {
  return (
    <div style={{
        backgroundColor: "#1C82AD",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        paddingTop: "20px",
        paddingBottom: "20px",
        fontSize: "20px"
    }}>
        <div style={{ paddingLeft: "30px", paddingRight: "20px"}}>
            © Copyright 2021 by Ram Fincorp & website managed By R.K. Bansal Finance Private Limited 
        </div>
        <div>
            <span style={{ paddingLeft: "20px", paddingRight: "30px"}}>facebook</span>
            <span style={{ paddingLeft: "30px", paddingRight: "20px"}}>instagram</span>
        </div>
    </div>
  )
}

export default Footer