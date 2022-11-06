import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header>
            <Link className='logo' to='/'>Best Flix</Link>
            <Link className='favoritos' to='/favoritos'>My movies</Link>
        </header>
    )
}

export default Header;