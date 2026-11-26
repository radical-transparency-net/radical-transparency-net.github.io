import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/40 shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-desktop mb-space-xl">
          {/* Brand & VLIZ Organization Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-lg">
            <div className="flex items-center gap-space-md">
              <a
                href="https://vliz.be/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-85"
                title="VLIZ - Flanders Marine Institute"
              >
                <img
                  src="./assets/vliz-logo.png"
                  alt="VLIZ Logo"
                  className="h-10 w-auto object-contain"
                />
              </a>
            </div>
            <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed max-w-md">
              Radical Transparency Network is developed at the Flanders Marine Institute (VLIZ) to make web-scale semantic interoperability explicit, verifiable, and measurable using open IETF and W3C standards.
            </p>
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider">
                Declare · Verify · Quantify
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-secondary font-badge-caps text-badge-caps uppercase tracking-wider">
                RFC 8288 / 9264
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider">
                {siteConfig.license}
              </span>
            </div>
          </div>

          {/* Column 1: Specifications */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Specifications
            </span>
            <a href="#/patterns" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Patterns Overview (RT-P01–10)
            </a>
            <a
              href={siteConfig.respecUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              ReSpec Specification
            </a>
            <a href="#/semantic-assets" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Semantic Assets (rtwl:)
            </a>
          </div>

          {/* Column 2: Beta Tooling */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Beta Tooling
            </span>
            <a href="#/tools" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Tools Overview
            </a>
            <a href="#/tools/webmap-er" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              webmap-ER (Beta)
            </a>
            <a href="#/tools/lod-docker-webserver" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              lod_docker_webserver (Beta)
            </a>
            <a href="#/tools/wrx" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              wrx Extractor (Beta)
            </a>
          </div>

          {/* Column 3: Network */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Network
            </span>
            <a
              href={siteConfig.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              GitHub Organization
            </a>
            <a href="#/community" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Community &amp; Origins
            </a>
            <a
              href="https://github.com/radical-transparency-net/visuals-branding-design"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors"
            >
              Visual Branding Assets
            </a>
          </div>
        </div>

        {/* Bottom Attribution with VLIZ Legal Notice */}
        <div className="pt-space-lg border-t border-surface-container-high/40 flex flex-col sm:flex-row items-center justify-between gap-space-md text-body-sm font-body-sm text-outline">
          <p>
            © VLIZ – InnovOcean Campus, Jacobsenstraat 1, 8400 Oostende, Belgium |{' '}
            <a
              href="https://vliz.be/en/legal-notice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:underline font-medium"
            >
              Legal Notice &amp; Privacy Policy
            </a>
          </p>
          <div className="flex items-center gap-space-lg font-label-code-sm text-label-code-sm">
            <span>{siteConfig.version}</span>
            <span>{siteConfig.license}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
