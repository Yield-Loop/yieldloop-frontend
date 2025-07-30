// Landing Page Components (uncomment as you implement each section)
import HeroSection from '@/components/landing/HeroSection';
// import AboutSection from '@/components/landing/AboutSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
// import StatsSection from '@/components/landing/StatsSection';

// Layout Components
// import Header from '@/components/layout/Header';
import HowItWorks from '@/components/landing/HowItWorks';
import HowLqd from '@/components/landing/HowLqd';
import {Footer} from '@/components/layout/Footer';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      {/* <Header /> */}

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section - Main banner with CTA buttons */}
        <HeroSection />

        {/* About Section - Explanation of YieldLoop */}
        {/* <AboutSection /> */}

        {/* Features Section - Key features showcase */}
        <FeaturesSection />

        {/* Stats Section - Key metrics and numbers */}
        {/* <StatsSection /> */}

       
        
        {/* How It Works Section */}
        <HowItWorks />

         {/* How Liquid Restaking Section */}
         <HowLqd />
      </main>
     <Footer />
    </div>
  );
}
