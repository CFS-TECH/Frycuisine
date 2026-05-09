import Image from 'next/image';
import styles from './Diet.module.css';

const dietData = [
  {
    id: 1,
    title: 'Weight Loss Diet Food',
    description: '1500 kcal daily meal plan. Start your journey with these delicious, low-calorie recipes that keep you full all day.',
    image: '/images/weight_loss_1778276272820.png',
  },
  {
    id: 2,
    title: 'High Protein Diet Meals',
    description: 'Perfect for muscle building. Easy meal preps featuring lean meats, quinoa, and essential vegetables.',
    image: '/images/high_protein_1778276287950.png',
  },
  {
    id: 3,
    title: 'Keto Diet Plan',
    description: 'High-fat, low-carb options. Discover tasty keto-friendly dishes like avocado bowls and salmon.',
    image: '/images/keto_diet_1778276302928.png',
  }
];

export default function Diet() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          DIET & HEALTHY FOOD
          <span className={styles.subtitle}>Options</span>
        </h2>
        
        <div className={styles.grid}>
          {dietData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className={styles.image}
                  style={{objectFit: 'cover'}}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <button className={styles.exploreBtn}>EXPLORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
