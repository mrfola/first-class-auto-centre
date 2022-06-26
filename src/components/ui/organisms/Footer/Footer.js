import { logo, facebookIcon, twitterIcon, instagramIcon } from '../../../../helpers/routes';
import H3 from '../../atoms/headings/H3/H3';
import styles from './Footer.module.sass';
import { Link } from 'react-router-dom';
import P from '../../atoms/P/P';
import AccentedHeading from '../../molecules/AccentedHeading/AccentedHeading';

const Footer = () => 
{
    return ( 
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.addressAndLogo}>
                    <img src={logo} />
                    <P className={styles.address}>382, Ikorodu Road, Near KICC Church, Mende Maryland, Lagos, Nigeria</P>
                </div>
                <div className={styles.linksAndSocials}>
                    <div className={styles.links}>
                        <AccentedHeading style={{margin: 0}}><H3>Useful Links</H3></AccentedHeading>
                        <div className={styles.content}>
                            <Link to="/">Home</Link>
                            <Link to="/service">Our Services</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <AccentedHeading style={{margin: 0}}><H3>Follow Us</H3></AccentedHeading>
                        <div className={styles.content}>
                            <img src={facebookIcon}/>
                            <img src={twitterIcon}/>
                            <img src={instagramIcon}/>
                        </div>
                    </div>
                </div>  
            </div>
            <div className={styles.divider}></div>
            <div className={styles.copyright}>© 2022 First Class Auto Centre. All rights reserved.</div>
        </div>
     );
}
 
export default Footer;