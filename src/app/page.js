import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Trending from '@/components/Trending/Trending';
import WorldFamous from '@/components/WorldFamous/WorldFamous';
import Recipes from '@/components/Recipes/Recipes';
import Diet from '@/components/Diet/Diet';
import Categories from '@/components/Categories/Categories';
import Latest from '@/components/Latest/Latest';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Trending />
      <WorldFamous />
      <Recipes />
      <Diet />
      <Categories />
      <Latest />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}

