import React from 'react';
import { Link } from 'react-router-dom';
import { homeHeroData } from '../../data/home';
import { siteConfig } from '../../data/siteConfig';

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-on-tertiary-container/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="flex flex-col md:flex-row md:items-start gap-space-lg max-w-5xl">
          <img
            src="./assets/branding/rt-logo.svg"
            alt="Radical Transparency Brugse Schelprand logo"
            className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 mt-1"
          />
          <div>
            <span className="inline-block px-space-sm py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider mb-space-sm">
              Declare · Verify · Quantify
            </span>
            <h1 className="font-display-hero text-headline-lg sm:text-display-hero text-on-surface tracking-tight mb-space-md">
              {homeHeroData.title}
            </h1>
            <blockquote className="border-l-4 border-secondary pl-space-md py-space-xs mb-space-md font-headline-sm text-headline-sm text-on-surface leading-snug font-medium">
              {homeHeroData.quote}
            </blockquote>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-space-lg">
              {homeHeroData.lead}
            </p>
            <div className="flex flex-wrap items-center gap-space-md">
              <Link
                to="/patterns"
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
              >
                <span>Explore RT-Patterns (RT-P01–10)</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a
                href={siteConfig.respecUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-surface-container-lowest text-on-surface border border-outline-variant/40 font-body-sm text-body-sm font-semibold hover:bg-surface-container transition-colors"
              >
                <span>Read Normative ReSpec</span>
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </a>
              <a
                href={homeHeroData.positionPaperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-surface-container text-secondary font-body-sm text-body-sm font-semibold hover:bg-surface-container-high transition-colors"
              >
                <span>Position Paper (PDF)</span>
                <span className="material-symbols-outlined text-[18px]">description</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
