

import { FeaturesSectionDemo } from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import { HeroParallaxDemo } from "@/components/HeroParallex";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import { HeroScrollDemo } from "@/components/Scroll";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import { TimelineDemo } from "@/components/Timeline";




export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <HeroParallaxDemo/>
      <TimelineDemo/>
      <MusicSchoolTestimonials />
     <HeroScrollDemo/>
     <FeaturesSectionDemo/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
