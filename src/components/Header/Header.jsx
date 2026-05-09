import Link from 'next/link';
import styles from './Header.module.css';
import { Search } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoIcon}>🍴</span>
            Fry<span className={styles.logoLight}>cuisine</span>
          </Link>
        </div>
        
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <button className={styles.searchButton}>
            <Search size={18} />
          </button>
        </div>
      </div>
      
      <nav className={styles.nav}>
        <div className={`container ${styles.navContainer}`}>
          <Link href="/" className={styles.active}>Home</Link>
          <Link href="/trending">Trending food</Link>
          <Link href="/recipes">Recipes</Link>
          <Link href="/world-cuisine">World cuisine</Link>
          <Link href="/street-food">Street food</Link>
          <Link href="/diet-healthy">Diet & healthy</Link>
          <Link href="/food-blog">Food blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
