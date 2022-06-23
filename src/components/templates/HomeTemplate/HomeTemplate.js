import P from '../../ui/atoms/P/P';
import H2 from '../../ui/atoms/headings/H2/H2';
import styles from './HomeTemplate.module.sass';
import Button from '../../ui/atoms/Button/Button';
import Header from "../../ui/organisms/Header/Header";
import Footer from "../../ui/organisms/Footer/Footer";
import ImageText from "../../ui/organisms/ImageText/ImageText";
import LogoBanner from '../../ui/organisms/LogoBanner/LogoBanner';
import FeatureCard from "../../ui/organisms/FeatureCard/FeatureCard";
import ourProcessImage from './../../../assets/images/our-process-image.png';
import AccentedHeading from '../../ui/molecules/AccentedHeading/AccentedHeading';
import TestimonialCard from '../../ui/organisms/TestimonialCard/TestimonialCard';
import HomePageHeroSection from "../../ui/organisms/HomePageHeroSection/HomePageHeroSection";
import GallerySlider from '../../ui/organisms/GallerySlider/GallerySlider';

const HomeTemplate = () => 
{
    return ( 
        <div className={styles.home}>
            <Header/>

            <HomePageHeroSection/>

            <div className={styles.whyUs}>
                <AccentedHeading><H2>Why Us?</H2></AccentedHeading>
                <div className={styles.content}>
                    <FeatureCard/>
                    <FeatureCard/>
                    <FeatureCard/>
                </div>
            </div>

            <LogoBanner/>

            <div className={styles.testimonials}>
                <span className={styles.preheading}>Testimonial</span>
                <AccentedHeading
                    accentStyles={{ width: '29%'}}
                    headingStyles={{alignItems: 'flex-start', margin: 0}}
                ><H2>What Clients Say</H2></AccentedHeading>

                <div className={styles.content}>
                    <TestimonialCard/>
                    <TestimonialCard/>
                    <TestimonialCard/>
                </div>
            </div>

            <div className={styles.gallery}>
                <AccentedHeading><H2>Gallery</H2></AccentedHeading>
                <GallerySlider/>
            </div>

            <ImageText img={ourProcessImage} id={styles.ourProcessImage} contentBG="linear-gradient(360deg, #1F232C -16.72%, #414147 200%)">
                
                <AccentedHeading
                    accentStyles={{ width: '40%'}}
                    headingStyles={{alignItems: 'flex-start'}}
                >
                    <H2>Our Process</H2>
                </AccentedHeading>
                <div className={styles.ourProcess}>

                    <div className={styles.process}>
                        <span className={styles.number}><span>1</span></span>
                        <span className={styles.content}>
                            <span className={styles.heading}>Viverra viverra diam turpis non quis eget quis.</span>
                            <span className={styles.body}>
                                Viverra viverra diam turpis non quis eget quis.
                                Viverra viverra diam turpis non quis eget quis.
                                Viverra viverra diam turpis non quis eget quis.
                            </span>
                        </span>
                    </div>

                    <div className={styles.process}>
                        <span className={styles.number}><span>2</span></span>
                        <span className={styles.content}>
                            <span className={styles.heading}>Viverra viverra diam turpis non quis eget quis.</span>
                            <span className={styles.body}>
                                Viverra viverra diam turpis non quis eget quis.
                                Viverra viverra diam turpis non quis eget quis.
                                Viverra viverra diam turpis non quis eget quis.
                            </span>
                        </span>
                    </div>
                    
                    <div className={styles.process}>
                        <span className={styles.number}><span>3</span></span>
                        <span className={styles.content}>
                            <span className={styles.heading}>Viverra viverra diam turpis non quis eget quis.</span>
                            <span className={styles.body}>
                                Viverra viverra diam turpis non quis eget quis.
                                Viverra viverra diam turpis non quis eget quis.
                                Viverra viverra diam turpis non quis eget quis.
                            </span>
                        </span>
                    </div>

                </div>
                <Button>Book Now</Button>
            </ImageText>

            <Footer/>
        </div>
     );
}
 
export default HomeTemplate;