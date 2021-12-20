import React from 'react';
import {Link} from 'react-router-dom'; 

function NavBar(){
    return(
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
    )
}

export default NavBar;
