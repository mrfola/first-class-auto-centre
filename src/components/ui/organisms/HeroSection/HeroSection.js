import styles from './HeroSection.module.sass';
import H1 from '../../atoms/headings/H1/H1';

const HeroSection = ({title, bgImg}) =>
{
    return ( 
        <div className={styles.heroSection} style={{backgroundImage: `url(${bgImg})`}}>
            <H1>{title}</H1>
        </div>
     );
}
 
export default HeroSection;