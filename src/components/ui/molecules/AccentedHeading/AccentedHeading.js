import styles from './AccentedHeading.module.sass';

const AccentedHeading = ({accentStyles, headingStyles, children, ...rest}) => 
{
    /* accentStyles should be of the form: 
        {
            width: 80%, //Defaults to 80%. Should ideally be a percentage but px, em and pt will work 
            color: #CE0003, //Defaults to #CE0003
            height: 5px, // Defaults to 5px 
            align-items: center, //Defaults to center  
        }

    */
    

    return ( 
        <div className={styles.accentedHeading} style={headingStyles} {...rest}>
            <span>{children}</span>
            <span className={styles.accent} style={accentStyles}></span>
        </div>
     );
}
 
export default AccentedHeading;