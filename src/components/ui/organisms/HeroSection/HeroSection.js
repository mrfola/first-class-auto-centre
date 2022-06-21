import styles from './HeroSection.module.sass';
import H1 from '../../atoms/headings/H1/H1';

const HeroSection = () => {
    return ( 
        <div className={styles.heroSection}>
            <H1>Get To Know Us</H1>
        </div>
     );
}
 
export default HeroSection;