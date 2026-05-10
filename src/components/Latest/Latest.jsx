import Image from 'next/image';
import styles from './Latest.module.css';

const galleryItems = [
  { 
    id: 1, 
    src: '/images/mexican_tacos.png', 
    alt: 'Mexican Tacos',
    category: 'Trending Food',
    date: 'Jan 20',
    title: 'Mexican Tacos Street Food',
    desc: 'Spicy fillings wrapped in soft tortillas for perfect flavor.',
    size: 'large',
    overlay: true,
    className: 'item1'
  },
  { 
    id: 2, 
    src: '/images/avocado_salad.png', 
    alt: 'Avocado Salad',
    category: 'Food Facts',
    date: 'Jan 19',
    title: 'Power of Avocado Salad',
    desc: 'Rich in healthy fats and essential nutrients.',
    size: 'small',
    overlay: false,
    className: 'item2'
  },
  { 
    id: 5, 
    src: '/images/samosa_chaat.png', 
    alt: 'Spicy Samosa Chaat',
    category: 'Street Food',
    date: 'Jan 20',
    title: 'Spicy Samosa Chaat',
    desc: 'Tangy, spicy, crunchy Indian favorite snack.',
    size: 'medium',
    overlay: false,
    className: 'item5'
  },
  { 
    id: 3, 
    src: '/images/trending_3_1778272749254.png', 
    alt: 'Chocolate Lava Cake',
    category: 'Famous Food',
    date: 'Jan 20',
    title: 'Chocolate Lava Cake Love',
    desc: 'Warm molten chocolate dessert loved worldwide.',
    size: 'small',
    overlay: false,
    className: 'item3'
  },
  { 
    id: 4, 
    src: '/images/pasta_alfredo.png', 
    alt: 'Creamy Pasta Alfredo',
    category: 'Trending Food',
    date: 'Jan 20',
    title: 'Creamy Pasta Alfredo',
    desc: 'Classic Italian comfort food with rich flavor.',
    size: 'small',
    overlay: false,
    className: 'item4'
  },
  { 
    id: 6, 
    src: '/images/cheese_burger.png', 
    alt: 'Cheese Burst Burger',
    category: 'Trending Food',
    date: 'Jan 20',
    title: 'Cheese Burst Burger',
    desc: 'Loaded with melted cheese and juicy crispy layers.',
    size: 'small',
    overlay: false,
    className: 'item6'
  },
  { 
    id: 7, 
    src: '/images/chicken_ramen.png', 
    alt: 'Spicy Chicken Ramen',
    category: 'Famous Food',
    date: 'Jan 20',
    title: 'Spicy Chicken Ramen',
    desc: 'Hot flavorful broth with tender noodles and topping.',
    size: 'medium',
    overlay: false,
    className: 'item7'
  },
  { 
    id: 8, 
    src: '/images/trending_5_1778275774098.png', 
    alt: 'Steamed Veg Momos',
    category: 'Street Food',
    date: 'Jan 20',
    title: 'Steamed Veg Momos',
    desc: 'Soft dumplings filled with fresh vegetables and spices.',
    size: 'small',
    overlay: false,
    className: 'item8'
  },
  { 
    id: 9, 
    src: '/images/smoothie_bowl.png', 
    alt: 'Oats & Fruit Breakfast Bowl',
    category: 'Diet Tips',
    date: 'Jan 20',
    title: 'Oats & Fruit Breakfast Bowl',
    desc: 'Light, healthy breakfast for better digestion & weight control.',
    size: 'small',
    overlay: false,
    className: 'item9'
  },
  { 
    id: 11, 
    src: '/images/mushroom_pasta.png', 
    alt: 'Creamy Mushroom Pasta',
    category: 'Trending Food',
    date: 'Jan 20',
    title: 'Creamy Mushroom Pasta',
    desc: 'Rich mushroom pasta with herbs for a comforting bite.',
    size: 'medium',
    overlay: false,
    className: 'item11'
  },
  { 
    id: 10, 
    src: '/images/high_protein_1778276287950.png', 
    alt: 'Sprouts Salad Bowl',
    category: 'Diet Tips',
    date: 'Jan 20',
    title: 'Sprouts Salad Bowl',
    desc: 'Protein-rich sprouts with fresh veggies for a healthy meal.',
    size: 'small',
    overlay: false,
    className: 'item10'
  },
  { 
    id: 12, 
    src: '/images/weight_loss_1778276272820.png', 
    alt: 'Loaded Veggie Cheese Sandwich',
    category: 'Trending Food',
    date: 'Jan 20',
    title: 'Loaded Veggie Cheese Sandwich',
    desc: 'Crispy grilled sandwich filled with veggies and melted cheese.',
    size: 'small',
    overlay: false,
    className: 'item12'
  },
  { 
    id: 13, 
    src: '/images/dark_chocolate.png', 
    alt: 'Dark Chocolate',
    category: 'Food Facts',
    date: 'Jan 20',
    title: 'Dark Chocolate',
    desc: 'Packed with antioxidants that support heart health naturally.',
    size: 'small',
    overlay: false,
    className: 'item13'
  },
  { 
    id: 14, 
    src: '/images/biryani_1778275574832.png', 
    alt: 'Hyderabadi Biryani',
    category: 'Famous Food',
    date: 'Jan 20',
    title: 'Hyderabadi Biryani',
    desc: 'A royal dish known for aromatic spices loved worldwide.',
    size: 'small',
    overlay: false,
    className: 'item14'
  },
];

export default function Latest() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.sectionTitle}>
          Latest from <span className={styles.cursiveText}>Frycuisine</span>
        </h2>
        
        <div className={styles.bentoGrid}>
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className={`${styles.gridItem} ${styles[item.size]} ${styles[item.className]} ${item.overlay ? styles.withOverlay : ''}`}
            >
              <div className={styles.imageWrapper}>
                <Image 
                  src={item.src} 
                  alt={item.alt} 
                  fill
                  className={styles.image}
                  style={{objectFit: 'cover'}}
                />
                {item.overlay && (
                  <div className={styles.overlayContent}>
                    <p className={styles.itemMeta}>{item.category} . {item.date}</p>
                    <h3 className={styles.itemTitleOverlay}>{item.title}</h3>
                    <p className={styles.itemDescOverlay}>{item.desc}</p>
                  </div>
                )}
              </div>
              
              {!item.overlay && (
                <div className={styles.itemContent}>
                  <p className={styles.itemMeta}>{item.category} , {item.date}</p>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
