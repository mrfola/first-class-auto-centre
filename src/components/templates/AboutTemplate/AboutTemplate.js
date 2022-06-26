import AchievementBanner from "../../ui/organisms/AchievementBanner/AchievementBanner";
import AccentedHeading from "../../ui/molecules/AccentedHeading/AccentedHeading";
import talkToUsImage from './../../../assets/images/talk-to-us-image.png';
import aboutHeroBg from './../../../assets/images/about-hero-image.png';
import missionImage from './../../../assets/images/mission-image.png';
import HeroSection from "../../ui/organisms/HeroSection/HeroSection";
import visionImage from './../../../assets/images/vision-image.png';
import ImageText from "../../ui/organisms/ImageText/ImageText";
import TeamCard from "../../ui/organisms/TeamCard/TeamCard";
import ceoImg from './../../../assets/images/ceo-img.png';
import Footer from "../../ui/organisms/Footer/Footer";
import Header from "../../ui/organisms/Header/Header";
import Button from "../../ui/atoms/Button/Button";
import styles from './AboutTemplate.module.sass';
import H2 from "../../ui/atoms/headings/H2/H2";
import P from "../../ui/atoms/P/P";


const AboutTemplate = () => 
{
    return ( 
        <div>
            <Header/>

            <HeroSection
                title="Get To Know Us"
                bgImg = {aboutHeroBg}
            />

            <div className={styles.history}>
                <AccentedHeading><H2>Our History</H2></AccentedHeading>
                <P>
                    Sem tristique leo id quam. Tempus tortor nec, porta gravida curabitur et etiam nisl. 
                    Egestas duis sit eu consectetur ipsum. Sagittis, iaculis tincidunt molestie duis amet maecenas vitae.
                    Urna, a lobortis cursus nunc. Neque eget nec eget augue. Imperdiet ac felis aliquet enim consequat, 
                    cursus pretium non rhoncus. Mattis vitae nisl dui, nibh diam nunc. Diam id ut proin maecenas dapibus
                     ut metus, blandit vitae. Pulvinar sit fermentum sed proin at fusce integer id. Convallis etiam varius
                      lectus cursus ultrices vitae. Diam, dis pulvinar netus eget pharetra a. At elementum eu nunc non. 
                      In nibh eget velit turpis cum vitae scelerisque convallis. Convallis ut pretium aliquam nibh venenatis 
                      fringilla. Ut dapibus lobortis turpis metus.
                </P>
            </div>

            <ImageText img={missionImage} contentBG="linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%)">
                <AccentedHeading
                    accentStyles={{ width: '83px'}}
                    headingStyles={{alignItems: 'flex-start'}}
                >
                    <H2>Our Mission</H2>
                </AccentedHeading>
                <P>
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                    Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus.
                    Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac.
                </P>
            </ImageText>

            <ImageText img={visionImage} rowReverse={true}>
                <AccentedHeading
                    accentStyles={{ width: '83px'}}
                    headingStyles={{alignItems: 'flex-start'}}
                >
                    <H2>Our Vision</H2>
                </AccentedHeading>
                <P>
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus. 
                    Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus.
                    Ut at enim egestas pharetra massa. Interdum a ipsum amet quam at ac.
                </P>
            </ImageText>

            <AchievementBanner/>

            <div className={styles.meetTheTeam}>
                <AccentedHeading accentStyles={{ width: '63%'}}><H2>Meet The Team</H2></AccentedHeading>

                <div className={styles.content}>
                    <TeamCard 
                        id={styles.teamCard1}
                        data= {{name: "John Doe", job: "C.E.O", phoneNumber: "08048281168", email: "johndoeeeeeeeeeeeeeee@gmail.com"}}
                        img = {{src: ceoImg}}
                    />
                    <TeamCard 
                        id={styles.teamCard2}
                        data= {{name: "John Doe", job: "C.E.O", phoneNumber: "08048281168", email: "johndoe@gmail.com"}}
                        img = {{src: ceoImg}}
                    />
                    <TeamCard 
                        id={styles.teamCard3}
                        data= {{name: "John Doe", job: "C.E.O", phoneNumber: "08048281168", email: "johndoe@gmail.com"}}
                        img = {{src: ceoImg}}
                    />
                    <TeamCard 
                        id={styles.teamCard4}
                        data= {{name: "John Doe", job: "C.E.O", phoneNumber: "08048281168", email: "johndoe@gmail.com"}}
                        img = {{src: ceoImg}}
                    />
                    <TeamCard 
                        id={styles.teamCard5}
                        data= {{name: "John Doe", job: "C.E.O", phoneNumber: "08048281168", email: "johndoe@gmail.com"}}
                        img = {{src: ceoImg}}
                    />
                    <TeamCard 
                        id={styles.teamCard6}
                        data= {{name: "John Doe", job: "C.E.O", phoneNumber: "08048281168", email: "johndoe@gmail.com"}}
                        img = {{src: ceoImg}}
                    />

                </div>
                
            </div>

            <ImageText img={talkToUsImage} id={styles.talkToUsImage} contentBG="linear-gradient(347.73deg, #414147 -422.44%, #1F232C 179.69%)">
                
                <AccentedHeading
                    accentStyles={{ width: '48%'}}
                    headingStyles={{alignItems: 'flex-start'}}
                >
                    <H2>Talk To Us</H2>
                </AccentedHeading>
                <P>
                    Our team is made us of experts in the field of...... Let us serve you a worthwhile experoience.....
                    Let us help you solve your car issues.... egestas pharetra massa. Interdum a ipsum amet quam at ac. 
                    In blandit ullamcorper egestas convallis nisl, arcu quam lacus. Ut at enim egestas pharetra massa. 
                    Interdum a ipsum amet quam at ac. 
                </P>
                <Button>Book Now</Button>
            </ImageText>

            <Footer/>

        </div>
     );
}
 
export default AboutTemplate;