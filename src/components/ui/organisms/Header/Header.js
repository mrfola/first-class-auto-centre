import styles from './Header.module.sass';
import Button from '../../atoms/Button/Button';
import { logo } from '../../../../helpers/routes';
const Header = () => {

    return ( 
        <div className={styles.header}>
            <img className={styles.logo} src={logo} />
            <nav className={styles.links}>
                <ul>
                    <li className={styles.active}>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <Button>Book Now</Button>
        </div>
     );
}
 
export default Header;