import styles from './ImageText.module.sass';
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';

const ImageText = ({img, children, rowReverse = false, contentBG = false, showImageOnMobile=false   , ...rest}) => 
{
    const [customStyles, setCustomStyles] = useState({});
    const [contentCustomStyles, setContentCustomStyles] = useState({});
    const [showImageImgStyle, setShowImageImgStyle] = useState(css``);
    const [showImageImgTextStyle, setShowImageImgTextStyle] = useState(css`
    @media (max-width: 650px) 
    {
        background: ${contentBG ? contentBG : 'inherit'};
        flex-direction:column-reverse!important;
    }`);
    const [showImageContentStyle, setShowImageContentStyle] = useState(css``);

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

        if(showImageOnMobile)
        {
            setShowImageImgStyle(css`
            @media (max-width: 650px) 
            {
                margin-top: 20px;
                width: 100%;
                display: block!important;
            }`);

            setShowImageContentStyle(css`background: transparent!important`);

        }

    }, [rowReverse, contentBG, showImageOnMobile]);
    // 
    return (
            <div className={styles.imageText} {...rest} style={customStyles} css={showImageImgTextStyle}>
                <img src={img} css={showImageImgStyle}  />
                <div className={styles.content} style={contentCustomStyles} css={showImageContentStyle}>
                    {children}
                </div>
            </div>
     );
}
 
export default ImageText;