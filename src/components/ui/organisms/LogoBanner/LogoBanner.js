
import {logoBannerArray} from '../../../../helpers/routes';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import {Navigation, FreeMode } from "swiper";
import styles from './LogoBanner.module.sass';
import {v4 as uuidv4} from "uuid";
import './logoSwiperSlider.sass';


const LogoBanner = () => 
{
    return ( 
        <div className={styles.logoBanner} id="logo-swiper">
            <div className={styles.content}>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                freeMode={true}
                navigation={{prevEl:"", nextEl: ""}}
                loop= {true}  
                modules={[Navigation, FreeMode]}
                className="mySwiper"
            >
                {logoBannerArray.map((icon) => 
                {
                return <SwiperSlide key={uuidv4()}><img src={icon.src} alt={icon.alt} /></SwiperSlide>
                })}
            </Swiper>
            </div>
        </div>
     );
}
 
export default LogoBanner;


// const GallerySlider = () =>
// {


//   return (
//     <div className={styles.gallerySlider}>
//         <div className={styles.content}>
//             <Swiper
//                 slidesPerView={"auto"}
//                 centeredSlides={true}
//                 navigation={{prevEl:"" nextEl: ""
//                 }}
               
//                 loop= {true}  
//                 modules={[Navigation]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//                 <SwiperSlide><img src={image1}/></SwiperSlide>
//             </Swiper>

//         </div>
        
//     </div>
//   );
// }

 
// export default GallerySlider ;