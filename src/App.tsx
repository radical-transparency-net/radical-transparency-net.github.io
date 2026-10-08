import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { TheoryPage } from './pages/TheoryPage';
import { DeveloperPage } from './pages/DeveloperPage';
import { CommunityPage } from './pages/CommunityPage';

export const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-background text-on-surface flex flex-col font-body-md antialiased">
        <Header />
        <main className="flex-1 w-full pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/theory" element={<TheoryPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/community" element={<CommunityPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
