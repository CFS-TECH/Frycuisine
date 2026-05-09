import Image from 'next/image';
import styles from './Categories.module.css';

const categoriesData = [
  { id: 1, name: 'Desert / Sweet', image: '/images/trending_6_1778275788503.png' },
  { id: 2, name: 'Fast Food', image: '/images/pizza_1778275609331.png' },
  { id: 3, name: 'Soup & Broth', image: '/images/dal_makhani_1778276021980.png' },
  { id: 4, name: 'Rice / Biryani', image: '/images/biryani_1778275574832.png' },
  { id: 5, name: 'Chocolate', image: '/images/trending_2_1778272749318.png' },
  { id: 6, name: 'Snacks', image: '/images/trending_3_1778272749254.png' },
  { id: 7, name: 'Breakfast', image: '/images/trending_5_1778275774098.png' },
  { id: 8, name: 'Traditional', image: '/images/paneer_tikka_1778276007182.png' },
  { id: 9, name: 'Healthy / Diet', image: '/images/weight_loss_1778276272820.png' },
  { id: 10, name: 'Street Food', image: '/images/trending_1_1778272716978.png' },
];

export default function Categories() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          EXPLORE FOOD BY
          <span className={styles.subtitle}>Category</span>
        </h2>
        
        <div className={styles.grid}>
          {categoriesData.map((category) => (
            <div key={category.id} className={styles.item}>
              <div className={styles.imageContainer}>
                <Image 
                  src={category.image} 
                  alt={category.name} 
                  fill
                  className={styles.image}
                  style={{objectFit: 'cover'}}
                />
              </div>
              <p className={styles.name}>{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
