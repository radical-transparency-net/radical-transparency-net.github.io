import React from 'react';
import { CliTerminal } from './CliTerminal';

export const DevHubHero: React.FC = () => {
  return (
    <section className="w-full bg-surface-container-low py-space-xl border-b border-surface-container-high/40">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Main Hero Copy (7 cols) - Lorem Ipsumified */}
          <div className="lg:col-span-7 flex flex-col gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider w-fit border border-outline-variant/30">
              <span className="w-1.5 h-1.5 rounded-full bg-on-tertiary-container animate-pulse" />
              (DRAFT) Lorem Ipsum · Spec v1.0
            </div>
            <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-tight">
              (DRAFT) Lorem Ipsum: Developer Hub & Tooling
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* Metric Highlights Strip */}
            <div className="grid grid-cols-3 gap-space-md mt-space-md pt-space-md bg-surface-container-lowest border border-surface-container-high/40 rounded-xl p-space-md max-w-xl shadow-sm">
              <div className="flex flex-col">
                <span className="font-label-code-md text-label-code-md text-outline uppercase tracking-wider text-xs">
                  Lorem Metric 01
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  1,234
                </span>
                <span className="font-body-sm text-body-sm text-on-tertiary-container flex items-center gap-0.5 mt-0.5 font-medium">
                  <span className="material-symbols-outlined text-[14px]">verified</span> Lorem SHACL
                </span>
              </div>
              <div className="flex flex-col border-x border-surface-container px-space-sm">
                <span className="font-label-code-md text-label-code-md text-outline uppercase tracking-wider text-xs">
                  Lorem Engine
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  1.2ms
                </span>
                <span className="font-body-sm text-body-sm text-secondary font-medium mt-0.5">
                  Lorem WASM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-code-md text-label-code-md text-outline uppercase tracking-wider text-xs">
                  Lorem Profiles
                </span>
                <span className="font-headline-md text-headline-md text-on-surface font-bold">
                  567+
                </span>
                <span className="font-body-sm text-body-sm text-outline mt-0.5">
                  Lorem PURLs
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Terminal Widget (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <CliTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
