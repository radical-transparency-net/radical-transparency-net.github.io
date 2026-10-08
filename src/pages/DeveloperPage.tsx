import React from 'react';
import { DevHubHero } from '../components/developer/DevHubHero';
import { SpecsGrid } from '../components/developer/SpecsGrid';
import { ValidatorPlayground } from '../components/developer/ValidatorPlayground';
import { SdkCards } from '../components/developer/SdkCards';
import { ContributionSteps } from '../components/developer/ContributionSteps';

export const DeveloperPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      <DevHubHero />
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        <SpecsGrid />
        <ValidatorPlayground />
        <SdkCards />
        <ContributionSteps />
      </div>
    </div>
  );
};

export default DeveloperPage;
