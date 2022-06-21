import styles from './H2.module.sass';

const H2 = ({children}) => 
{
    return ( <h2 className={styles.h2}>{children}</h2> );
}
 
export default H2;