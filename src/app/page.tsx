// Landing Page Components (uncomment as you implement each section)
// import HeroSection from '@/components/landing/HeroSection';
// import AboutSection from '@/components/landing/AboutSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
// import StatsSection from '@/components/landing/StatsSection';
// import CTASection from '@/components/landing/CTASection';

// Layout Components
// import Header from '@/components/layout/Header';
import {Footer} from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      {/* <Header /> */}

      {/* Main Landing Page Content */}
      <main className="flex-1">
        {/* Hero Section - Main banner with CTA buttons */}
        {/* <HeroSection /> */}

        {/* About Section - Explanation of YieldLoop */}
        {/* <AboutSection /> */}

        {/* Features Section - Key features showcase */}
        <FeaturesSection />

        {/* Stats Section - Key metrics and numbers */}
        {/* <StatsSection /> */}

        {/* Call to Action Section - Final CTA */}
        {/* <CTASection /> */}

        {/* Temporary placeholder - remove when implementing above */}
        <div className="h-64 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">YieldLoop</h1>
            <p className="text-xl text-gray-600 mb-8">Landing Page Structure Ready</p>
            <p className="text-sm text-gray-500">
              Uncomment sections above to start implementing
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
