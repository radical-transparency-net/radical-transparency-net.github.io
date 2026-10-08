import React from 'react';
import { TheoryHero } from '../components/theory/TheoryHero';
import { SystemDiagram } from '../components/theory/SystemDiagram';
import { PillarsGrid } from '../components/theory/PillarsGrid';
import { ComparisonMatrix } from '../components/theory/ComparisonMatrix';
import { MotivationSection } from '../components/theory/MotivationSection';
import { LineageInspector } from '../components/theory/LineageInspector';

export const TheoryPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      <TheoryHero />
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        <SystemDiagram />
        <PillarsGrid />
        <ComparisonMatrix />
        <MotivationSection />
        <LineageInspector />
      </div>
    </div>
  );
};

export default TheoryPage;
