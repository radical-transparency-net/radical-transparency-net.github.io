import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/common/Card';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <Card hoverEffect={false} className="max-w-2xl mx-auto text-center py-space-xl">
        <span className="material-symbols-outlined text-[40px] text-secondary mb-space-sm">
          explore_off
        </span>
        <h1 className="font-headline-lg text-headline-lg text-on-surface mb-space-sm">
          Page Not Found
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-lg">
          The requested portal route does not exist. Return to the home page or browse the Linkset Usage Patterns overview.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-space-md">
          <Link
            to="/"
            className="px-space-md py-2 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors"
          >
            Back to Home
          </Link>
          <Link
            to="/patterns"
            className="px-space-md py-2 rounded bg-surface-container text-on-surface font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors"
          >
            Browse RT-Patterns
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFoundPage;
