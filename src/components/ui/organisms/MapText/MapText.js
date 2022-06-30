import ShowMap from './../../../templates/ShowMap/ShowMap';
import { useEffect, useState } from 'react';
import styles from './MapText.module.sass';
import './mapStyle.sass';

const MapText = ({map, children, rowReverse = false, contentBG = false, ...rest}) => 
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
                <div className={styles.map}><ShowMap/></div>
                <div className={styles.content} style={contentCustomStyles}>
                    {children}
                </div>
        </div>
     );
}
 
export default MapText;