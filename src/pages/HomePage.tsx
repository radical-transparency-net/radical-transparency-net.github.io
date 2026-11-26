import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { PulseStats } from '../components/home/PulseStats';
import { OverviewNarrativeSection } from '../components/home/OverviewNarrativeSection';
import { ReadingPathsSection } from '../components/home/ReadingPathsSection';
import { TriageDoors } from '../components/home/TriageDoors';
import { SpotlightGrid } from '../components/home/SpotlightGrid';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroBanner />
      <PulseStats />
      <OverviewNarrativeSection />
      <ReadingPathsSection />
      <TriageDoors />
      <SpotlightGrid />
    </div>
  );
};

export default HomePage;
