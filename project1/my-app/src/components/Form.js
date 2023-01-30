import React from 'react';
import { useState } from 'react';

const Form = () => {
    const [form, setForm] = useState({
        first: '',
        last: '',
        phone: '',
        email: '',
      });


  return (
    <div>
        <h1 style={{
            textAlign: "center",
            fontSize: "50px",
        }}>Free MemberShip for 30 days</h1>
        <h1 style={{
            textAlign: "center",
            fontSize: "40px",
            marginTop: "2%"
        }}>Contact Us</h1>
        <form 
            style={{
                display: "flex",
                flexDirection: 'column',
                width: "60%",
                margin: "20%",
                marginTop: "5%",

            }}
            onSubmit={(e)=>{
                e.preventDefault();
            }}
        >
            <input 
                style={{
                    marginBottom: "10px",
                    height: "35px",
                    textAlign: "center",
                    fontSize: "20px",
                    borderRadius: "10px",
                }}
                name="first"
                type="text" 
                placeholder='First Name'
                onChange={(e)=>{
                    setForm({
                        ...form,
                        first: e.target.value
                    })
                }}
                value={form.first}
            />
            <input 
                style={{
                    marginBottom: "10px",
                    height: "35px",
                    textAlign: "center",
                    fontSize: "20px",
                    borderRadius: "10px",
                }}
                name="second"
                type="text" 
                placeholder='Last Name'
                onChange={(e)=>{
                    setForm({
                        ...form,
                        last: e.target.value
                    })
                }}
                value={form.last}
            />
            <input 
                style={{
                    marginBottom: "10px",
                    height: "35px",
                    textAlign: "center",
                    fontSize: "20px",
                    borderRadius: "10px",
                }}
                name="phone"
                type="text" 
                placeholder='Phone Number'
                onChange={(e)=>{
                    setForm({
                        ...form,
                        phone: e.target.value
                    })
                }}
                value={form.phone}
            />
            <input 
                style={{
                    marginBottom: "10px",
                    height: "35px",
                    textAlign: "center",
                    fontSize: "20px",
                    borderRadius: "10px",
                }}
                name="email"
                type="email" 
                placeholder='Email Address'
                onChange={(e)=>{
                    setForm({
                        ...form,
                        email: e.target.value
                    })
                }}
                value={form.email}
            />
            <button
                style={{
                    marginBottom: "10px",
                    height: "50px",
                    textAlign: "center",
                    fontSize: "20px",
                    backgroundColor: "blue",
                    border: 'none',
                    borderRadius: "10px",
                }}
                onClick={()=>{
                    console.log(form);
                }}
            >
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form;