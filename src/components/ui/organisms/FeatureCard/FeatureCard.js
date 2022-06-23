import styles from './FeatureCard.module.sass';
import P from '../../atoms/P/P';
import { affordablePricesIcon } from '../../../../helpers/routes';

const FeatureCard = () => 
{
    return ( 
        <div className={styles.featureCard}>
            <img src={affordablePricesIcon}/>
            <P className={styles.heading}>Affordable Prices</P>
            <P className={styles.description}>Faucibus fusce sollicitudin parturient quisque amet sed nunc consequat diam. Duis nunc ut vel sit metus sit.</P>
        </div>
     );
}
 
export default FeatureCard;