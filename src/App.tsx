import { useState } from 'react';
import { PortfolioArticle } from './data/portfolioData';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WorkArchiveSection } from './components/WorkArchiveSection';
import { BeatsAndCareerSection } from './components/BeatsAndCareerSection';
import { SelfIntroSection } from './components/SelfIntroSection';
import { Footer } from './components/Footer';
import { ArticleModal } from './components/ArticleModal';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<PortfolioArticle | null>(null);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main>
        <HeroSection />
        <WorkArchiveSection onSelectArticle={setSelectedArticle} />
        <BeatsAndCareerSection />
        <SelfIntroSection />
      </main>
      <Footer />
      <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </div>
  );
}
