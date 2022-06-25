import styles from './Input.module.sass';

const Input = ({...rest}) => 
{
    return ( 
        <input {...rest} />
     );
}
 
export default Input;