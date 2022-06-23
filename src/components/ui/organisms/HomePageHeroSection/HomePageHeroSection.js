import P from '../../atoms/P/P';
import H1 from '../../atoms/headings/H1/H1';
import Button from '../../atoms/Button/Button';
import styles from './HomePageHeroSection.module.sass';

const HomePageHeroSection = () => 
{
    return ( 
        <div className={styles.heroSection}>
            <div className={styles.heroSectionContainer}>
                <div className={styles.content}>
                    <H1>Designed For An Amazing Experience</H1>
                    <P className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus ipsum eleifend diam porta quis.</P>
                    <Button>Book Now</Button>
                </div>
                <div className={styles.companyFeatures}>
                    <div className={styles.companyFeature}>
                        <span className={styles.heading}>Trusted</span>
                        <span className={styles.subtitle}>Our Service</span>
                    </div>
                    <div className={styles.companyFeature}>
                        <span className={styles.heading}>Easy To Access</span>
                        <span className={styles.subtitle}>Our Location</span>
                    </div>
                    <div className={styles.companyFeature}>
                        <span className={styles.heading}>Contact Us</span>
                        <span className={styles.subtitle}>We Care</span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomePageHeroSection;