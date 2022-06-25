import styles from './Button.module.sass';

const Button = ({children, ...rest}) => 
{
    return <button className={styles.button} {...rest}>{children}</button>;
}
 
export default Button;