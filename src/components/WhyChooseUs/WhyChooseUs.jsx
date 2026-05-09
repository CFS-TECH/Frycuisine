import Image from 'next/image';
import styles from './WhyChooseUs.module.css';

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageCol}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/weight_loss_1778276272820.png" 
              alt="Fresh food bowl" 
              fill
              className={styles.image}
              style={{objectFit: 'cover'}}
            />
          </div>
        </div>
        
        <div className={styles.textCol}>
          <h2 className={styles.title}>Why Food Lovers Choose FryCuisine</h2>
          <p className={styles.description}>
            FryCuisine is your ultimate destination for all things food. We believe that cooking should be an enjoyable experience, not a chore. Our team of expert chefs and food enthusiasts curate the most trending, delicious, and healthy recipes from around the globe just for you.
          </p>
          <p className={styles.description}>
            Whether you are looking for a quick street food snack, a rich traditional main course, or a strict diet plan, FryCuisine provides step-by-step guides, beautiful photography, and the secrets to making every meal memorable. Join our community of food lovers today!
          </p>
        </div>
      </div>
    </section>
  );
}
