import { useEffect, useState } from 'react';
import styles from './ImageText.module.sass';

const ImageText = ({img, children, rowReverse = false, contentBG = false, ...rest}) => 
{
    const [customStyles, setCustomStyles] = useState({});
    const [contentCustomStyles, setContentCustomStyles] = useState({});


    useEffect(() => 
    {
        if(rowReverse)
        {
            setCustomStyles((previousStyles) => 
            {
                return {...previousStyles, flexDirection: "row-reverse"}
            });
        }

        if(contentBG)
        {
            setContentCustomStyles((previousStyles) => 
            {
                return {...previousStyles, background: contentBG}
            });
        }

    }, [rowReverse, contentBG]);

    return ( 
        <div className={styles.imageText} {...rest} style={customStyles} >
                <img src={img} />
                <div className={styles.content} style={contentCustomStyles}>
                    {children}
                </div>
        </div>
     );
}
 
export default ImageText;