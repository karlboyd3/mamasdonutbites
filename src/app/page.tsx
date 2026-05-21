import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CateringSection from "@/components/CateringSection";
import TrackSection from "@/components/TrackSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CateringSection />
      <TrackSection />
      <ReviewsSection />
      <GallerySection />
      <Footer />
    </main>
  );
}
