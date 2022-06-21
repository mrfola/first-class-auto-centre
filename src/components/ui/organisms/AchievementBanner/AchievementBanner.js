import styles from './AchievementBanner.module.sass'

const AchievementBanner = () => 
{
    return ( 
        <div className={styles.achievementBanner}>
            <div className={styles.achievementBlock}>
                <span className={styles.title}>X+</span>
                <span className={styles.subtitle}>Years Of Experience</span>
            </div>
            <div className={styles.achievementBlock}>
                <span className={styles.title}>100%</span>
                <span className={styles.subtitle}>Customer Satisfaction</span>
            </div>
            <div className={styles.achievementBlock}>
                <span className={styles.title}>1000+</span>
                <span className={styles.subtitle}>Vehicles Repaired</span>
            </div>
        </div>
     );
}
 
export default AchievementBanner;