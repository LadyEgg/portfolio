import React from 'react'
import '../css/About.css'

function About() {
    return(
    <div>
        <div className='about'><h1> About Me </h1></div>
        <div className='para'><p> Hello, I am a graduate from Lehman College with a Bachelors in Computer Graphics Imaging. My goals for the future are to learn python! </p></div>
        <div className='link'> <a href="https://docs.google.com/document/d/1T_dPWRn61vrEX_dPqYGXkSLUwAaEa-I_FZCYdAR1cCs/edit?usp=sharing" download>Resume!</a></div>
    </div>
    )
}

export default About;
