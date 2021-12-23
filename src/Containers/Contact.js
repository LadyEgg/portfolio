import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Contact.css'

function Contact() {
    let navigate = useNavigate()
    return(
    <div >
        <h1> Contact Me </h1>
        
        <form
        onSubmit={() => {
            navigate('/Home')
        }} 
        >
            <p> Enter your Name.</p>
            <input type="text"></input>
            <p> Enter your Email.</p>
            <input type="email"></input>
            <p> Leave a message!</p>
            <input type="text"></input>
            <br />
            <input type="submit"></input>
        </form>
        </div>
    )
}

export default Contact;
