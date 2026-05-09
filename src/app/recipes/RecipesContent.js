"use client";
import { useState } from 'react';
import styles from './RecipesPage.module.css';
import { Clock, Users, Flame, ChevronRight } from 'lucide-react';

const RECIPES_DATA = [
  {
    id: 1,
    title: "Classic Margherita Pizza",
    category: "Dinner",
    time: "45 min",
    serves: "2-4",
    calories: "280 kcal",
    difficulty: "Medium",
    image: "/images/pizza_1778275609331.png",
  },
  {
    id: 2,
    title: "Authentic Chicken Biryani",
    category: "Dinner",
    time: "1.5 hours",
    serves: "4-6",
    calories: "450 kcal",
    difficulty: "Hard",
    image: "/images/biryani_1778275574832.png",
  },
  {
    id: 3,
    title: "Avocado Toast with Poached Egg",
    category: "Breakfast",
    time: "15 min",
    serves: "1",
    calories: "320 kcal",
    difficulty: "Easy",
    image: "/images/trending_2_1778272749318.png",
  },
  {
    id: 4,
    title: "Bibimbap Korean Bowl",
    category: "Lunch",
    time: "30 min",
    serves: "2",
    calories: "380 kcal",
    difficulty: "Medium",
    image: "/images/bibimbap_1778275591463.png",
  },
  {
    id: 5,
    title: "Mixed Berry Smoothie Bowl",
    category: "Breakfast",
    time: "10 min",
    serves: "1",
    calories: "210 kcal",
    difficulty: "Easy",
    image: "/images/smoothie_bowl.png",
  },
  {
    id: 6,
    title: "Japanese Fluffy Pancakes",
    category: "Breakfast",
    time: "25 min",
    serves: "2",
    calories: "340 kcal",
    difficulty: "Medium",
    image: "/images/trending_1_1778272716978.png",
  },
  {
    id: 7,
    title: "Grilled Salmon with Asparagus",
    category: "Lunch",
    time: "20 min",
    serves: "2",
    calories: "290 kcal",
    difficulty: "Easy",
    image: "/images/grilled_salmon.png",
  },
  {
    id: 8,
    title: "Homemade Chocolate Lava Cake",
    category: "Snacks",
    time: "35 min",
    serves: "2",
    calories: "410 kcal",
    difficulty: "Medium",
    image: "/images/trending_3_1778272749254.png",
  }
];

const CATEGORIES = ["All", "Breakfast", "Lunch", "Dinner", "Snacks"];

export default function RecipesContent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredRecipes = activeCategory === "All" 
    ? RECIPES_DATA 
    : RECIPES_DATA.filter(recipe => recipe.category === activeCategory);

  return (
    <div className={`container ${styles.contentWrapper}`}>
      <div className={styles.filterBar}>
        {CATEGORIES.map(cat => (
          <button 
            key={cat}
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className={styles.recipeGrid}>
        {filteredRecipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <div className={styles.imageWrapper}>
              <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
              <div className={styles.categoryBadge}>{recipe.category}</div>
            </div>
            
            <div className={styles.recipeDetails}>
              <div className={styles.metaInfo}>
                <span className={styles.metaItem}><Clock size={14} /> {recipe.time}</span>
                <span className={styles.metaItem}><Users size={14} /> {recipe.serves}</span>
                <span className={styles.metaItem}><Flame size={14} /> {recipe.calories}</span>
              </div>
              
              <h3 className={styles.recipeTitle}>{recipe.title}</h3>
              
              <div className={styles.cardFooter}>
                <span className={`${styles.difficulty} ${styles[recipe.difficulty.toLowerCase()]}`}>
                  {recipe.difficulty}
                </span>
                <button className={styles.viewBtn}>
                  View Recipe <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
