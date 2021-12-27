import React from 'react';
import {Link} from 'react-router-dom'; 
import '../css/NavBar.css'

function NavBar(){
    return(
        <div className='navBar'>  
        <ul>
            <li>
                <Link to="/">< button type="button" class="button">Home</button></Link>
            </li>
            <li>
                <Link to="/about">< button type="button" class="button">About</button></Link>
            </li>
            <li>
                <Link to="/projects"><button type="button" class="button">Projects</button></Link>
            </li>
            <li>
                <Link to="/contact"><button type="button" class="button">Contact</button></Link>
            </li>
        </ul>
        </div>
    )
}

export default NavBar;
