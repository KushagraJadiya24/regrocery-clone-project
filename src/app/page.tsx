import Navbar from '@/components/sections/navbar';
import HeroSection from '@/components/sections/hero-section';
import NavigationTabs from '@/components/sections/navigation-tabs';
import ProductCarousel from '@/components/sections/product-carousel';
import AnimatedMarquee from '@/components/sections/animated-marquee';
import ContentCardLoop from '@/components/sections/content-card-loop';
import CategoryNavigation from '@/components/sections/category-navigation';
import OrderOptions from '@/components/sections/order-options';
import InstagramFeed from '@/components/sections/instagram-feed';
import Footer from '@/components/sections/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F5F1ED]">
      <Navbar />
      <HeroSection />
      <NavigationTabs />
      <ProductCarousel />
      <AnimatedMarquee />
      <ContentCardLoop />
      <CategoryNavigation />
      <OrderOptions />
      <InstagramFeed />
      <Footer />
    </main>
  );
}