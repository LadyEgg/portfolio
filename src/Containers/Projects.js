import React from 'react'
import '../css/Projects.css'

function Projects() {
    return(
    <div>
        <div className="projects"><h1> Projects </h1></div>
        <div className="eliza-image"></div>
        <div className="eliza-name"> <h2> Project Eliza</h2></div>
        <div className="eliza-description"><p>Project Eliza. Eclipse IDE was used to put together this scripted bot.</p></div>
        <div className="mine-image"></div>
        <div className="mine-name"><h2>MineSweeper</h2></div>
        <div className="mine-description"><p>Minesweeper. Eclipse IDE was used to code a simple game of minesweeper.</p></div>
    </div>
    )
}

export default Projects;
