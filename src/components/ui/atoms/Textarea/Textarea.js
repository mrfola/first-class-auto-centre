import styles from './Textarea.module.sass';

const Textarea = ({children, ...rest}) => 
{
    return ( 
        <textarea {...rest}></textarea>
     );
}
 
export default Textarea;