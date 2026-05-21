import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import CateringSection from "@/components/CateringSection";
import TrackSection from "@/components/TrackSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <CateringSection />
      <TrackSection />
      <ReviewsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
