import { useEffect, useState } from 'react';
import styles from './ImageText.module.sass';

const ImageText = ({img, children, rowReverse = false, gradientBG = false, ...rest}) => 
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

        if(gradientBG)
        {
            setContentCustomStyles((previousStyles) => 
            {
                return {...previousStyles, background: "linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%)"}
            });
        }

    }, [rowReverse, gradientBG]);

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