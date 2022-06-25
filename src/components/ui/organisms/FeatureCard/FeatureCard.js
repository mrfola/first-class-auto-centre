import styles from './FeatureCard.module.sass';
import P from '../../atoms/P/P';

const FeatureCard = ({title, description, img}) => 
{
    return ( 
        <div className={styles.featureCard}>
            <img src={img}/>
            <P className={styles.heading}>{title}</P>
            <P className={styles.description}>{description}</P>
        </div>
     );
}
 
export default FeatureCard;