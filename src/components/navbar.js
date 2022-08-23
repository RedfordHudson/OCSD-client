import { Link } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar () {

    const pages = ['home','vision','team','faculty','partners',
            'sponsors','products','timeline','blog','donate','contacts']

    const loadLinks = () => {
        return pages.map(page => {return (
            <Link to={'/'+page}
                key={'link-'+page}>
                {page}
            </Link>
        )})
    }

    return (  
        <ul id='navbar'>
            {loadLinks()}
        </ul>
    );
}

export default Navbar;