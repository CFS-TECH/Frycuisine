import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import RecipesContent from './RecipesContent';
import styles from './RecipesPage.module.css';

export const metadata = {
  title: "All Recipes | FryCuisine",
  description: "Explore our collection of easy, world-famous, and healthy recipes.",
};

export default function RecipesPage() {
  return (
    <main className={styles.main}>
      <Header />
      
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Master Your Kitchen</h1>
          <p className={styles.heroSubtitle}>Discover hundreds of chef-curated recipes for every occasion.</p>
        </div>
      </section>

      <RecipesContent />

      <Footer />
    </main>
  );
}
