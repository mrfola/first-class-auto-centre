import { phoneIcon, emailIcon } from '../../../../helpers/routes';
import styles from './TeamCard.module.sass';
import H3 from '../../atoms/headings/H3/H3';
import P from '../../atoms/P/P';

const TeamCard = ({img, data, ...rest}) => 
{
    return ( 
        <div className={styles.teamCard} {...rest}>
            <img src={img.src} alt={img.alt} />
            <div className={styles.data}>
                <H3>{data.name}</H3>
                <div className={styles.jobContainer}><span className={styles.accent}></span><P>{data.job}</P></div>
                <div className={styles.dataContainer}>
                    <img src={phoneIcon}/>
                    <P>{data.phoneNumber}</P>
                </div>
                <div className={styles.dataContainer}>
                    <img src={emailIcon}/>
                    <P>{data.email}</P>
                </div>
            </div>
        </div>
     );
}
 
export default TeamCard;