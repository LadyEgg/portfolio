import React from 'react';
import {Link} from 'react-router-dom'; 
import '../css/NavBar.css'

function NavBar(){
    return(
        <div className='NavBar'>
            
        <ul>
            <li>
                <Link to="/"><button>Home</button></Link>
            </li>
            <li>
                <Link to="/about"><button>About</button></Link>
            </li>
            <li>
                <Link to="/projects"><button>Projects</button></Link>
            </li>
            <li>
                <Link to="/contact"><button>Contact</button></Link>
            </li>
        </ul>
        </div>
    )
}

export default NavBar;
