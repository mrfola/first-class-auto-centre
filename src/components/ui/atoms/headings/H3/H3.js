import styles from './H3.module.sass';

const H3 = ({children}) => 
{
    return ( <h3 className={styles.h3}>{children}</h3> );
}
 
export default H3;