import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { PatternsPage } from './pages/PatternsPage';
import { PatternDetailPage } from './pages/PatternDetailPage';
import { ToolsPage } from './pages/ToolsPage';
import { ToolDetailPage } from './pages/ToolDetailPage';
import { SemanticAssetsPage } from './pages/SemanticAssetsPage';
import { CommunityPage } from './pages/CommunityPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md antialiased">
        <Header />
        <main className="flex-1 w-full pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/patterns" element={<PatternsPage />} />
            <Route path="/patterns/:id" element={<PatternDetailPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/:id" element={<ToolDetailPage />} />
            <Route path="/semantic-assets" element={<SemanticAssetsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/theory" element={<Navigate to="/patterns" replace />} />
            <Route path="/developer" element={<Navigate to="/tools" replace />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
