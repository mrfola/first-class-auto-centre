import styles from './P.module.sass';

const P = ({children, ...rest}) => 
{
    return ( 
        <p className={styles.p} {...rest}>{children}</p>
     );
}
 
export default P;