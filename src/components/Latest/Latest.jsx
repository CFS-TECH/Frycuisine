import Image from 'next/image';
import styles from './Latest.module.css';

const galleryImages = [
  { id: 1, src: '/images/hero_bg_1778272695533.png', alt: 'Delicious pasta' },
  { id: 2, src: '/images/trending_1_1778272716978.png', alt: 'Korean Corn Dogs' },
  { id: 3, src: '/images/biryani_1778275574832.png', alt: 'Chicken Biryani' },
  { id: 4, src: '/images/beef_stroganoff_1778275991832.png', alt: 'Beef Stroganoff' },
  { id: 5, src: '/images/trending_5_1778275774098.png', alt: 'Croissant' },
  { id: 6, src: '/images/pizza_1778275609331.png', alt: 'Pizza Margherita' },
  { id: 7, src: '/images/trending_3_1778272749254.png', alt: 'Momos' },
  { id: 8, src: '/images/high_protein_1778276287950.png', alt: 'High Protein Meal' },
  { id: 9, src: '/images/paneer_tikka_1778276007182.png', alt: 'Paneer Tikka' },
  { id: 10, src: '/images/keto_diet_1778276302928.png', alt: 'Keto Diet Meal' },
];

export default function Latest() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          Latest from <span className={styles.cursiveText}>Frycuisine</span>
        </h2>
        
        <div className={styles.gallery}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.imageWrapper}>
              <Image 
                src={image.src} 
                alt={image.alt} 
                fill
                className={styles.image}
                style={{objectFit: 'cover'}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
