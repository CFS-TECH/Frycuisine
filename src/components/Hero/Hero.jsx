import styles from './Hero.module.css';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>
          Explore Trending, Global & Healthy Food at FryCuisine
        </h1>
        <p className={styles.subtitle}>
          From viral food trends and world-famous dishes to healthy diets and easy recipes — everything about food in one place.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>
            World cuisine <ArrowRight size={16} />
          </button>
          <button className={styles.secondaryBtn}>
            Diet Food <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
