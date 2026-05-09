"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { TrendingUp, Clock, Eye, Flame } from 'lucide-react';
import styles from './TrendingPage.module.css';

const categories = ["All", "Desserts", "Healthy", "Street Food", "Traditional"];

const trendingItems = [
  {
    id: 1,
    title: "Viral Dubai Chocolate Bar",
    category: "Desserts",
    views: "2.4M",
    time: "15 mins",
    image: "/images/trending_2_1778272749318.png",
    score: 98,
    isLarge: true,
  },
  {
    id: 2,
    title: "Korean Cheese Corn Dog",
    category: "Street Food",
    views: "1.8M",
    time: "30 mins",
    image: "/images/trending_1_1778272716978.png",
    score: 95,
  },
  {
    id: 3,
    title: "Matcha Lava Croissant",
    category: "Desserts",
    views: "1.2M",
    time: "45 mins",
    image: "/images/trending_3_1778272749254.png",
    score: 92,
  },
  {
    id: 4,
    title: "High Protein Chicken Bowl",
    category: "Healthy",
    views: "900K",
    time: "20 mins",
    image: "/images/weight_loss_1778276272820.png",
    score: 89,
    isTall: true,
  },
  {
    id: 5,
    title: "Authentic Paneer Tikka",
    category: "Traditional",
    views: "1.5M",
    time: "40 mins",
    image: "/images/paneer_tikka_1778276007182.png",
    score: 94,
  },
  {
    id: 6,
    title: "Classic Margherita Pizza",
    category: "Street Food",
    views: "2.1M",
    time: "25 mins",
    image: "/images/pizza_1778275609331.png",
    score: 96,
  },
  {
    id: 7,
    title: "Keto Friendly Salmon",
    category: "Healthy",
    views: "850K",
    time: "20 mins",
    image: "/images/keto_diet_1778276302928.png",
    score: 88,
  },
  {
    id: 8,
    title: "Matcha Cheesecake",
    category: "Desserts",
    views: "1.1M",
    time: "1 hour",
    image: "/images/trending_6_1778275788503.png",
    score: 91,
  }
];

export default function TrendingPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? trendingItems 
    : trendingItems.filter(item => item.category === activeCategory);

  return (
    <main className={styles.main}>
      <Header />
      
      {/* Page Hero */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>
              <Flame size={16} /> Hot Right Now
            </span>
            <h1 className={styles.heroTitle}>Trending Culinary Masterpieces</h1>
            <p className={styles.heroSubtitle}>
              Discover what the internet is cooking right now. From viral street food 
              to aesthetic desserts, here are the most sought-after recipes of the week.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className={styles.filterSection}>
        <div className="container">
          <div className={styles.filterContainer}>
            {categories.map((cat) => (
              <button 
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Box Grid */}
      <section className={styles.gridSection}>
        <div className={`container ${styles.gridContainer}`}>
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`
                ${styles.bentoCard} 
                ${item.isLarge ? styles.bentoLarge : ''} 
                ${item.isTall ? styles.bentoTall : ''}
              `}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  className={styles.image}
                  style={{objectFit: 'cover'}}
                />
                <div className={styles.scoreBadge}>
                  <TrendingUp size={14} /> {item.score}
                </div>
              </div>
              <div className={styles.cardContent}>
                <span className={styles.category}>{item.category}</span>
                <h3 className={styles.title}>{item.title}</h3>
                <div className={styles.meta}>
                  <span className={styles.metaItem}><Eye size={14} /> {item.views}</span>
                  <span className={styles.metaItem}><Clock size={14} /> {item.time}</span>
                </div>
              </div>
            </div>
          ))}
          
          {filteredItems.length === 0 && (
            <div className={styles.emptyState}>
              <p>No trending items found for this category right now.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
