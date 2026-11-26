import React from 'react';

export const SystemDiagram: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
      {/* 7-col System Context Diagram */}
      <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/40 flex flex-col justify-between overflow-hidden relative">
        <div className="flex flex-col gap-space-sm z-10">
          <div className="flex items-center gap-space-xs text-secondary font-label-code-sm text-label-code-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">schema</span>
            <span>SYSTEM CONTEXT DIAGRAM</span>
          </div>
          <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold">
            From Assumed Compatibility to Explicit Linksets
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Resources publish RFC 8288 Link headers and RFC 9264 linksets so autonomous clients can resolve profiles and representations deterministically.
          </p>
        </div>

        {/* Inline Visual Architectural SVG Mini-Graphic */}
        <div className="my-space-md w-full py-4 bg-surface-container-low rounded-lg flex items-center justify-center z-10 border border-surface-container-high/40">
          <svg className="w-full max-w-[540px] h-32" fill="none" viewBox="0 0 540 120" xmlns="http://www.w3.org/2000/svg">
            <rect className="fill-surface-container-high stroke-outline-variant" height="50" rx="6" strokeWidth="1" width="110" x="10" y="35" />
            <text className="fill-on-surface font-title-md text-[11px] font-bold" textAnchor="middle" x="65" y="58">Resource URI</text>
            <text className="fill-outline font-label-code-sm text-[9px]" textAnchor="middle" x="65" y="73">rel="linkset"</text>

            <path d="M125 60 L180 60" stroke="#0051d5" strokeDasharray="4 2" strokeWidth="2" />
            <polygon fill="#0051d5" points="185,60 178,56 178,64" />

            <rect className="fill-surface-container-lowest stroke-secondary" height="80" rx="8" strokeWidth="1.5" width="160" x="190" y="20" />
            <circle className="fill-surface-container-high" cx="270" cy="45" r="14" />
            <text className="fill-on-tertiary-container font-label-code-sm text-[12px] font-bold" textAnchor="middle" x="270" y="49">RT</text>
            <text className="fill-on-surface font-title-md text-[11px] font-bold" textAnchor="middle" x="270" y="73">RFC 9264 Linkset</text>
            <text className="fill-outline font-label-code-sm text-[9px]" textAnchor="middle" x="270" y="86">RT-P01 to RT-P10</text>

            <path d="M355 60 L410 60" stroke="#0051d5" strokeDasharray="4 2" strokeWidth="2" />
            <polygon fill="#0051d5" points="415,60 408,56 408,64" />

            <rect className="fill-surface-container-high stroke-outline-variant" height="50" rx="6" strokeWidth="1" width="110" x="420" y="35" />
            <text className="fill-on-surface font-title-md text-[11px] font-bold" textAnchor="middle" x="475" y="58">Profile URI</text>
            <text className="fill-outline font-label-code-sm text-[9px]" textAnchor="middle" x="475" y="73">rel="profile"</text>
          </svg>
        </div>

        <div className="flex items-center gap-space-md text-label-code-sm font-label-code-sm text-outline z-10">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            RFC 6906 Profile Declaration
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container" />
            RFC 9264 Linksets
          </span>
        </div>
      </div>

      {/* 5-col Editorial Card */}
      <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm border border-surface-container-high/40 relative min-h-[320px] bg-primary-container flex flex-col justify-between p-space-lg">
        <div className="bg-surface-container-lowest/95 rounded-lg p-space-sm">
          <img
            className="w-full h-36 object-contain"
            alt="Radical Transparency patterns overview diagram"
            src="./assets/patterns/rt-patterns-overview.svg"
          />
        </div>
        <div className="flex flex-col justify-end pt-space-md text-surface-container-lowest">
          <span className="font-badge-caps text-badge-caps text-tertiary-fixed uppercase tracking-wider mb-space-xs font-semibold">
            Declared Interoperability
          </span>
          <h3 className="font-headline-sm text-headline-sm mb-space-xs font-bold text-white">
            Evidence-Driven Discovery
          </h3>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
            Shifting from implicit assumptions to explicit HTTP and linkset declarations lets automated crawlers and clients verify conformity directly.
          </p>
        </div>
      </div>
    </section>
  );
};
