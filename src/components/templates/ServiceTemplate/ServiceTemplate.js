import refurbishingAndBBImage from './../../../assets/images/services/refurbishing-and-auto-body-building.png';
import autoRepairAndServicingImage from './../../../assets/images/services/auto-repair-and-servicing.png';
import paintServicesImage from './../../../assets/images/services/paint-services.png';
import scheduleACarImage from './../../../assets/images/schedule-a-car-image.jpg';
import AccentedHeading from '../../ui/molecules/AccentedHeading/AccentedHeading';
import serviceHeroBg from './../../../assets/images/services-hero-image.png';
import salesImage from './../../../assets/images/services/sales.png';
import HeroSection from '../../ui/organisms/HeroSection/HeroSection';
import visionImage from './../../../assets/images/vision-image.png';
import ImageText from '../../ui/organisms/ImageText/ImageText';
import Footer from '../../ui/organisms/Footer/Footer';
import Header from '../../ui/organisms/Header/Header';
import styles from './ServiceTemplate.module.sass';
import Button from '../../ui/atoms/Button/Button';
import H2 from '../../ui/atoms/headings/H2/H2';
import P from '../../ui/atoms/P/P';



const ServiceTemplate = () => 
{
    return ( 
        <div className={styles.serviceTemplate}>
            <Header/>
            <HeroSection
              title="The Best Service When Your Car Is At its Worst"
              bgImg = {serviceHeroBg}
              />
              <div className={styles.whatWeOffer}>
                <AccentedHeading accentStyles={{ width: '35%'}}><H2>What We Offer</H2></AccentedHeading>
                <div className={styles.content}>
                <P>
                    Sem tristique leo id quam. Tempus tortor nec, porta gravida curabitur et etiam nisl. Egestas duis sit eu consectetur ipsum. Sagittis, iaculis tincidunt molestie duis amet maecenas vitae. Urna, a lobortis cursus nunc. Neque eget nec eget augue. Imperdiet ac felis aliquet enim consequat, cursus pretium non rhoncus.
                    Mattis vitae nisl dui, nibh diam nunc. Diam id ut proin maecenas dapibus ut metus, blandit vitae. Pulvinar sit fermentum sed proin at fusce integer id. Convallis etiam varius lectus cursus ultrices vitae. Diam, dis pulvinar netus eget pharetra a. At elementum eu nunc non. In nibh eget velit turpis cum vitae scelerisque convallis. Convallis ut pretium aliquam nibh venenatis fringilla. Ut dapibus lobortis turpis metus.
                    Sem tristique leo id quam. Tempus tortor nec, porta gravida curabitur et etiam nisl. Egestas duis sit eu consectetur ipsum. Sagittis, iaculis tincidunt molestie duis amet maecenas vitae. Urna, a lobortis cursus nunc. Neque eget nec eget augue. Imperdiet ac felis aliquet enim consequat, cursus pretium non rhoncus.
                    <br></br> <br></br>
                    Our Services include:
                </P>   
                <ol>
                    <li>Auto Repair</li>
                    <li>Refurbishing</li>
                    <li>Paint Services</li>
                    <li>Auto-Servicing</li>
                    <li>Sales</li>
                </ol>
               
                </div>
              </div>
              <div className={styles.services}>
                <ImageText img={autoRepairAndServicingImage} showImageOnMobile={true} contentBG="linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%)">
                    <AccentedHeading
                        accentStyles={{ width: '83px'}}
                        headingStyles={{alignItems: 'flex-start'}}
                    >
                        <H2>{"Auto-Repair & "}<br/> {"Servicing"}</H2>
                    </AccentedHeading>
                    <P>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus.
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac.
                    </P>
                </ImageText>
                <ImageText img={refurbishingAndBBImage} rowReverse={true} showImageOnMobile={true}>
                    <AccentedHeading
                        accentStyles={{ width: '83px'}}
                        headingStyles={{alignItems: 'flex-start'}}
                    >
                        <H2>{`Refurbishing &`}<br></br> {`Auto Body Building`}</H2>
                    </AccentedHeading>
                    <P>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        <br/><br/>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        <br/><br/>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        <br/><br/>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                    </P>
                </ImageText>
                <ImageText img={paintServicesImage} showImageOnMobile={true} contentBG="linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%);">
                    <AccentedHeading
                        accentStyles={{ width: '83px'}}
                        headingStyles={{alignItems: 'flex-start'}}
                    >
                        <H2>Paint Services</H2>
                    </AccentedHeading>
                    <P>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus.
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac.
                    </P>
                </ImageText>
                <ImageText img={salesImage} rowReverse={true} showImageOnMobile={true} contentBG="linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%);">
                    <AccentedHeading
                        accentStyles={{ width: '87%'}}
                        headingStyles={{alignItems: 'flex-start'}}
                    >
                        <H2>Sales</H2>
                    </AccentedHeading>
                    <P>
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus.
                        Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac.
                    </P>
                </ImageText>
            </div>
            <ImageText img={scheduleACarImage} id={styles.scheduleACar}>
                
                <AccentedHeading
                    accentStyles={{ width: '23%'}}
                    headingStyles={{alignItems: 'flex-start'}}
                >
                    <H2>Schedule A Car Service</H2>
                </AccentedHeading>
                <P>
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                    Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                    Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac.  
                </P>
                <Button>Book Now</Button>
            </ImageText>
            <Footer/>
        </div>
     );
}
 
export default ServiceTemplate;