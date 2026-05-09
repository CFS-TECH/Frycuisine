import Image from 'next/image';
import styles from './Recipes.module.css';

const recipesData = [
  {
    id: 1,
    title: 'Chicken Tikka Masala',
    date: 'January 5, 2026',
    description: 'The creamy classic tomato-based curry with tender, spiced chicken pieces. A worldwide favorite.',
    image: '/images/chicken_tikka_1778275975221.png',
  },
  {
    id: 2,
    title: 'Beef Stroganoff',
    date: 'January 6, 2026',
    description: 'A comforting Russian dish of sautéed pieces of beef served in a smetana (sour cream) sauce.',
    image: '/images/beef_stroganoff_1778275991832.png',
  },
  {
    id: 3,
    title: 'Authentic Paneer Tikka',
    date: 'January 7, 2026',
    description: 'Chunks of paneer marinated in spices and grilled in a tandoor. The perfect vegetarian appetizer.',
    image: '/images/paneer_tikka_1778276007182.png',
  },
  {
    id: 4,
    title: 'Dal Makhani & Rice',
    date: 'January 8, 2026',
    description: 'A creamy, rich, and flavorful lentil dish that slow cooks for hours to perfection.',
    image: '/images/dal_makhani_1778276021980.png',
  },
  {
    id: 5,
    title: 'Classic Margherita Pizza',
    date: 'January 9, 2026',
    description: 'A simple yet perfect Italian classic featuring fresh tomatoes, mozzarella, and basil on a crisp crust.',
    image: '/images/pizza_1778275609331.png',
  },
  {
    id: 6,
    title: 'Korean Bibimbap',
    date: 'January 10, 2026',
    description: 'A colorful and healthy mixed rice bowl topped with sautéed vegetables, chili paste, and a fried egg.',
    image: '/images/bibimbap_1778275591463.png',
  }
];

export default function Recipes() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>
          RECIPES SECTION
        </h2>
        
        <div className={styles.list}>
          {recipesData.map((item, index) => (
            <div key={item.id} className={`${styles.item} ${index % 2 !== 0 ? styles.itemReverse : ''}`}>
              <div className={styles.content}>
                <p className={styles.date}>{item.date}</p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
                <a href="#" className={styles.readMore}>READ MORE...</a>
              </div>
              <div className={styles.imageWrapper}>
                <div className={styles.imageContainer}>
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    className={styles.image}
                    style={{objectFit: 'cover'}}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
