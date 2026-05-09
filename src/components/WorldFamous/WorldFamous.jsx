import Image from 'next/image';
import styles from './WorldFamous.module.css';

const worldFamousData = [
  {
    id: 1,
    country: 'India',
    dish: 'Chicken Biryani',
    flag: '🇮🇳',
    image: '/images/biryani_1778275574832.png',
  },
  {
    id: 2,
    country: 'South Korea',
    dish: 'Bibimbap',
    flag: '🇰🇷',
    image: '/images/bibimbap_1778275591463.png',
  },
  {
    id: 3,
    country: 'Italy',
    dish: 'Pizza Margherita',
    flag: '🇮🇹',
    image: '/images/pizza_1778275609331.png',
  }
];

export default function WorldFamous() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          <span className={styles.line}></span>
          World Famous Culinary
          <span className={styles.line}></span>
        </h2>
        
        <div className={styles.grid}>
          {worldFamousData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.dish} 
                  fill
                  className={styles.image}
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className={styles.content}>
                <div className={styles.countryBadge}>
                  <span className={styles.flag}>{item.flag}</span> {item.country}
                </div>
                <h3 className={styles.dish}>{item.dish}</h3>
                <button className={styles.readBtn}>READ...</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
