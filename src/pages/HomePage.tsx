import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { TriageDoors } from '../components/home/TriageDoors';
import { PulseStats } from '../components/home/PulseStats';
import { SpotlightGrid } from '../components/home/SpotlightGrid';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroBanner />
      <TriageDoors />
      <PulseStats />
      <SpotlightGrid />
    </div>
  );
};

export default HomePage;
