import officeHoursIcon from './../../../assets/icons/contact-icons/office-hours-icon.svg';
import locationIcon from './../../../assets/icons/contact-icons/location-icon.svg';
import AccentedHeading from '../../ui/molecules/AccentedHeading/AccentedHeading';
import phoneIcon from './../../../assets/icons/contact-icons/phone-icon.svg';
import emailIcon from './../../../assets/icons/contact-icons/email-icon.svg';
import contactBgImg from './../../../assets/images/contact-hero-image.png';
import HeroSection from '../../ui/organisms/HeroSection/HeroSection';
import ContactForm from '../../ui/molecules/ContactForm/ContactForm';
import ImageText from '../../ui/organisms/ImageText/ImageText';
import mapImg from '../../../assets/images/map-img.png';
import Header from '../../ui/organisms/Header/Header';
import Footer from '../../ui/organisms/Footer/Footer';
import styles from './ContactUsTemplate.module.sass';
import H2 from '../../ui/atoms/headings/H2/H2';
import P from '../../ui/atoms/P/P';


const ContactUsTemplate = () => 
{
    return ( 
        <div className={styles.contactUs}>
            <Header/>

            <HeroSection
                title={<>You There! <br></br> Let's Have A Talk</>}
                bgImg={contactBgImg}
            />

            <div className={styles.contactInfoAndForm}>
                <div className={styles.contactInfo}>
                    <AccentedHeading accentStyles={{ width: '40%'}} headingStyles={{margin: 0}}><H2>Get In Touch!</H2></AccentedHeading>
                    <P className={styles.contactDescription}>Well,what are you waiting for? Don’t let that car issue ruin your day. Have a story to share with us, let’s hear it. We gat you!</P>

                    <div className={styles.contactInfoItems}>
                        <div className={styles.contactItem}>
                            <img src={locationIcon} alt="" />
                            <div className={styles.content}>
                                <div className={styles.heading}>Address:</div>
                                <div className={styles.description}>382, Ikorodu Road, Near KICC Church, Mende Maryland, Lagos, Nigeria</div>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <img src={phoneIcon} alt="" />
                            <div className={styles.content}>
                                <div className={styles.heading}>Phone:</div>
                                <div className={styles.description}>+234 1 4755490, 8111903, (0) 8027378181, 8036672223, 2348158192303</div>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <img src={emailIcon} alt="" />
                            <div className={styles.content}>
                                <div className={styles.heading}>Email:</div>
                                <div className={styles.description}>enquiry@firstclassautocentreng.com, workshopmgr@firstclassautocentreng.com</div>
                            </div>
                        </div>
                        <div className={styles.contactItem}>
                            <img src={officeHoursIcon} alt="" />
                            <div className={styles.content}>
                                <div className={styles.heading}>Office hours:</div>
                                <div className={styles.description}>
                                    <span style={{display: "inline-block"}}>Weekdays:  9am–4pm </span><br></br>
                                    <span style={{display: "inline-block"}}>Saturday 9am–4pm</span><br></br>
                                    <span style={{display: "inline-block"}}>Sunday Closed</span> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.contactForm}>
                    <div className={styles.form}>
                        <ContactForm/>
                    </div>
                </div>
            </div>

            <div className={styles.howToFindUs}>
                <ImageText img={mapImg} id={styles.talkToUsImage} contentBG="linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%)">
                
                    <AccentedHeading
                        accentStyles={{ width: '48%'}}
                        headingStyles={{alignItems: 'flex-start'}}
                    >
                        <H2>How To Find Us</H2>
                    </AccentedHeading>
                    <P>
                        Our team is made us of experts in the field of...... Let us serve you a worthwhile experoience.....
                        Let us help you solve your car issues.... egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                        In blandit ullamcorper egestas convallis nisl, arcu quam lacus. Ut at enim egestas pharetra massa. 
                        Interdum a ipsum amet quam at ac. 
                 </P>
            </ImageText>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ContactUsTemplate;