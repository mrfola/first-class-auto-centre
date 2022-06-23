import image1 from './../../../../assets/images/gallery/image1.png';
import prevBtn from './../../../../assets/icons/prev-btn.svg';
import nextBtn from './../../../../assets/icons/next-btn.svg';
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import styles from './GallerySlider.module.sass';
import { Pagination, Navigation } from "swiper";
import React, { useRef } from "react";
import './swiperslider.sass';

// import required modules

const GallerySlider = () =>
{
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

  return (
    <div className={styles.gallerySlider} id="gallery-swiper">
        <div className={styles.swiperButtonPrev} ref={navigationPrevRef}>
            <img src={prevBtn}/>
        </div>
        <div className={styles.swiperButtonNext} ref={navigationNextRef}>
            <img src={nextBtn}/>
        </div>

        <div className={styles.content}>
            <Swiper
                slidesPerView={"auto"}
                centeredSlides={true}
                pagination={{clickable: true,}}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                loop= {true}  
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
                <SwiperSlide><img src={image1}/></SwiperSlide>
            </Swiper>

        </div>
        
    </div>
  );
}

 
export default GallerySlider ;