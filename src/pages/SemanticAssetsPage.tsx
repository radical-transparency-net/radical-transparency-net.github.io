import React from 'react';
import {
  semanticAssetsData,
  semanticAssetsDevNotice,
  semanticAssetsRepoUrl,
} from '../data/semanticAssets';
import { SemanticAssetCard } from '../components/semantic-assets/SemanticAssetCard';
import { Badge } from '../components/common/Badge';

export const SemanticAssetsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full pb-space-xl">
      {/* Hero Band */}
      <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
            <Badge variant="teal">RDF Vocabularies &amp; Ontologies</Badge>
            <Badge variant="outline">{semanticAssetsDevNotice.label}</Badge>
          </div>
          <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight mb-space-md max-w-4xl">
            Semantic Assets
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-3xl mb-space-lg">
            Dereferenceable RDF vocabularies, managed terms, and content-negotiated linkset representations maintained under the Radical Transparency Network.
          </p>
          <a
            href={semanticAssetsRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-space-md py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span>radical-transparency-net/semantic-assets on GitHub</span>
          </a>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        {/* Development Status Notice */}
        <div className="rounded-xl bg-surface-container border border-secondary/30 p-space-lg flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
          <div className="flex items-start gap-space-md">
            <span className="material-symbols-outlined text-secondary text-[24px] shrink-0">
              schema
            </span>
            <div>
              <h2 className="font-title-md text-title-md text-on-surface font-bold mb-1">
                {semanticAssetsDevNotice.title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {semanticAssetsDevNotice.body}
              </p>
            </div>
          </div>
          <a
            href={semanticAssetsRepoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-space-md py-2 rounded bg-surface-container-lowest text-secondary font-body-sm text-body-sm font-semibold border border-outline-variant/40 hover:bg-surface-container-high transition-colors shrink-0"
          >
            <span>Open Repository</span>
            <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>

        {/* Published Draft Assets */}
        <section className="flex flex-col gap-space-lg">
          {semanticAssetsData.map((asset) => (
            <SemanticAssetCard key={asset.id} asset={asset} />
          ))}
        </section>
      </div>
    </div>
  );
};

export default SemanticAssetsPage;
