import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { useState } from 'react';

function Navbar () {

    const [navbarFlag, toggleNavbarFlag] = useState(false);
    const mediaPath = process.env.PUBLIC_URL+'/media/';

    const logos = () => {
        const partners = ['OCSD','PJHM','UCI'];

        return <ul id='logos'>
            {partners.map(partner => {return <li key={partner}>
                <img src={mediaPath+'/logos/'+partner+'.jpg'}
                    alt={partner} />
            </li>})}
        </ul>
    }

    const navbar = () => {
        const pages = ['home','vision','team','faculty','partners',
            'sponsors','products','timeline','blog','donate','contacts']

        return <div id='navbar'>
            <ul>
                {pages.map(page => {return (
                    <Link to={'/'+page}
                        key={'link-'+page}>
                        {page.toUpperCase()}
                    </Link>)})}
            </ul>
        </div> 
    }

    const revealNavbar = () => {
        toggleNavbarFlag(!navbarFlag);

        var state = navbarFlag ? 'hidden' : 'visible'
        document.getElementById('navbar').style.setProperty('visibility',state)
        document.getElementById('background-filter').style.setProperty('visibility',state)
        
        state = navbarFlag ? 'scroll' : 'hidden'
        document.body.style.setProperty('overflow',state)
    }

    return (  
        <div id='header'>
            {logos()}
            <div id='background-filter'/>
            {navbar()}

            <div class='reveal-navbar'
                onClick={revealNavbar}>
                <div>
                    Menu
                </div>
            </div>
        </div>
    );
}

export default Navbar;