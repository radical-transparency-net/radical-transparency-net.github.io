import React from 'react';
import { HeroBanner } from '../components/home/HeroBanner';
import { TriageDoors } from '../components/home/TriageDoors';
import { PulseStats } from '../components/home/PulseStats';
import { RoleFinder } from '../components/home/RoleFinder';
import { SpotlightGrid } from '../components/home/SpotlightGrid';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      <HeroBanner />
      <TriageDoors />
      <PulseStats />
      <RoleFinder />
      <SpotlightGrid />
    </div>
  );
};

export default HomePage;
