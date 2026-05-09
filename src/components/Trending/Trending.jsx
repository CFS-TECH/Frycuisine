import Image from 'next/image';
import styles from './Trending.module.css';

const trendingData = [
  {
    id: 1,
    title: 'Korean Corn Dogs',
    date: 'January 1, 2026',
    category: 'Trending',
    description: 'Crispy outside, cheesy inside! Golden fried corn dogs with gooey cheese and bold Korean flavors.',
    image: '/images/trending_1_1778272716978.png'
  },
  {
    id: 2,
    title: 'Dubai Chocolate Bar',
    date: 'January 1, 2026',
    category: 'Trending',
    description: 'Luxury in every bite. Rich chocolate layered with premium fillings inspired by Dubai desserts.',
    image: '/images/trending_2_1778272749318.png'
  },
  {
    id: 3,
    title: 'Viral Street Momo',
    date: 'January 2, 2026',
    category: 'Trending',
    description: 'The internet\'s favorite street snack. Juicy Momo tossed in spicy sauces, full of desi street-style flavor.',
    image: '/images/trending_3_1778272749254.png'
  },
  {
    id: 4,
    title: 'Japanese Soufflé Pancakes',
    date: 'January 2, 2026',
    category: 'Trending',
    description: 'Soft, fluffy & cloud-like. Light-as-air pancakes that melt in your mouth with every bite.',
    image: '/images/trending_1_1778272716978.png' // re-using image 1 as placeholder for 4
  },
  {
    id: 5,
    title: 'Viral Croissant Roll',
    date: 'January 3, 2026',
    category: 'Trending',
    description: 'The famous circular New York style croissant roll filled with rich pistachio cream, dripping and delicious.',
    image: '/images/trending_5_1778275774098.png'
  },
  {
    id: 6,
    title: 'Matcha Basque Cheesecake',
    date: 'January 4, 2026',
    category: 'Trending',
    description: 'Creamy Matcha Basque Burnt Cheesecake with a caramelized top and gooey vibrant green center.',
    image: '/images/trending_6_1778275788503.png'
  }
];

export default function Trending() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>TRENDING FOOD RIGHT NOW</h2>
        
        <div className={styles.grid}>
          {trendingData.map((item) => (
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
                <p className={styles.meta}>
                  {item.date} <span>{item.category}</span>
                </p>
                <p className={styles.description}>{item.description}</p>
                <a href="#" className={styles.readMore}>READ MORE...</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
