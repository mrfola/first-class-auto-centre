import P from '../../atoms/P/P';
import styles from './TestimonialCard.module.sass';
import testimonialImg from './../../../../assets/images/testimonial-img.png';

const TestimonialCard = ({...rest}) => 
{
    return ( 
        <div className={styles.testimonialCard} {...rest}>
            <img src={testimonialImg} alt="Image of a person" />
            <div className={styles.content}>
                <P className={styles.testimonial}>
                    Orem amet, semper dui, adipiscing dignissim ultricies scelerisque fermentum. 
                    Quam maecenas feugiat neque, turpis id convallis at. A scelerisque risus tristique elementum
                     lorem neque id. 
                </P>
                <div className={styles.author}>
                    <span className={styles.name}>Wade Warren</span>
                    <span className={styles.position}>Marketing Coordinator</span>
                </div>
            </div>
        </div>
     );
}
 
export default TestimonialCard;