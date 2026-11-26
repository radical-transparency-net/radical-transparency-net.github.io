import React from 'react';
import { Link } from 'react-router-dom';
import { communityResourcesData } from '../data/community';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';

export const CommunityPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <Badge variant="secondary">Collaboration &amp; Provenance</Badge>
            <Badge variant="outline">Open Source · CC-BY 4.0</Badge>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md max-w-4xl">
            Community &amp; Governance
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl">
            Radical Transparency is developed openly in alignment with European research infrastructures (EOSC, OGC, CODATA/CDIF, FAIR Signposting) and stewarded at VLIZ.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
          {communityResourcesData.map((item) => (
            <Card key={item.id} className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-space-xs mb-space-sm">
                  <Badge variant="teal">{item.category}</Badge>
                  <span className="material-symbols-outlined text-secondary text-[22px]">
                    {item.icon}
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-space-xs">
                  {item.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-space-lg">
                  {item.description}
                </p>
              </div>

              <div className="pt-space-md border-t border-surface-container-high/30">
                {item.isExternal ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-body-sm text-body-sm font-semibold text-secondary hover:underline"
                  >
                    <span>{item.ctaLabel}</span>
                    <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                  </a>
                ) : (
                  <Link
                    to={item.url}
                    className="inline-flex items-center gap-1.5 font-body-sm text-body-sm font-semibold text-secondary hover:underline"
                  >
                    <span>{item.ctaLabel}</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </Link>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
