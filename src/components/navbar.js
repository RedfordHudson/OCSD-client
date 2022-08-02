import { Link } from 'react-router-dom';

function Navbar () {

    const pages = ['home','team','faculty','blog',
        'contact','donate','philosophy','ocsd']

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