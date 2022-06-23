import styles from './Header.module.sass';
import Button from '../../atoms/Button/Button';
import { logo } from '../../../../helpers/routes';
import { Link } from 'react-router-dom';
const Header = () => 
{
    let path = document.location.pathname;

    return ( 
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <nav className={styles.links}>
                <ul>
                    <li className={path == "/" ? styles.active: ""}><Link to="/">Home</Link></li>
                    <li  className={path == "/about" ? styles.active: ""}><Link to="/about">About</Link></li>
                    <li  className={path == "/services" ? styles.active: ""}><Link to="/services">Services</Link></li>
                    <li  className={path == "/contact" ? styles.active: ""}><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <Button>Book Now</Button>
        </div>
     );
}
 
export default Header;