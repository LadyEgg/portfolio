import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../css/Contact.css'

function Contact() {
    let navigate = useNavigate()
    return(
    <div >
        <div className='con'><h1> Contact Me </h1></div>
       <div className='person'><p>michelle.otero0900@gmail.com </p></div>
        <form
        onSubmit={() => {
            navigate(<p> Hey! Your message sent! </p>)
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
