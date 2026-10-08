import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/40 shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-desktop mb-space-xl">
          {/* Brand & Mission column */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-lg">
            <div className="flex items-center gap-space-sm">
              <div className="w-7 h-7 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-xs tracking-wider">
                RT
              </div>
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                Radical Transparency Network
              </span>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed max-w-md">
              EOSC Semantic Interoperability architecture delivering authoritative, machine-actionable conformity profiles, triplestore linksets, and open scientific data governance.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider">
                EOSC Core Aligned
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-secondary font-badge-caps text-badge-caps uppercase tracking-wider">
                CC-BY 4.0
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider">
                FAIR Verified
              </span>
            </div>
          </div>

          {/* Interoperability Column */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Interoperability
            </span>
            <Link to="/developer" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Conformity Profiles
            </Link>
            <Link to="/developer" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Linksets Documentation
            </Link>
            <Link to="/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Persistent URI Directory
            </Link>
            <Link to="/developer" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Crosswalk Registries
            </Link>
          </div>

          {/* Framework & Governance Column */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Framework & Governance
            </span>
            <Link to="/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Open Data Licensing
            </Link>
            <Link to="/community" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Federated Nodes
            </Link>
            <Link to="/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Provenance Standards (PROV-O)
            </Link>
            <a
              href={siteConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              GitHub Proposals
            </a>
          </div>

          {/* Stay Informed Form */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Stay Informed
            </span>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-space-xs">
              Subscribe to semantic interoperability releases, RFCs, and governance alerts.
            </p>
            <form className="flex flex-col gap-space-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-space-xs">
                <input
                  className="h-9 px-space-sm rounded bg-surface-container text-on-surface placeholder:text-outline text-body-sm font-body-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary/20 border border-outline-variant/30"
                  placeholder="researcher@domain.eu"
                  type="email"
                />
                <button
                  className="h-9 px-space-md rounded bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-inverse-surface transition-colors shrink-0"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <span className="text-[11px] text-outline">
                EOSC Community Privacy Principles apply.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-space-lg border-t border-surface-container-high/40 flex flex-col sm:flex-row items-center justify-between gap-space-md text-body-sm font-body-sm text-outline">
          <p>© European Open Science Cloud (EOSC) Semantic Interoperability Task Force. Open Access.</p>
          <div className="flex items-center gap-space-lg">
            <span className="hover:text-on-surface cursor-pointer transition-colors">Legal Notice</span>
            <span className="hover:text-on-surface cursor-pointer transition-colors">Accessibility</span>
            <span className="hover:text-on-surface cursor-pointer transition-colors">FAIR Compliance Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
