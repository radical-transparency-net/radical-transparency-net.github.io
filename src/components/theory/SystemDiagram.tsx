import React from 'react';

export const SystemDiagram: React.FC = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
      {/* 7-col System Context Diagram - Lorem Ipsumified */}
      <div className="lg:col-span-7 bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/40 flex flex-col justify-between overflow-hidden relative">
        <div className="flex flex-col gap-space-sm z-10">
          <div className="flex items-center gap-space-xs text-secondary font-label-code-sm text-label-code-sm font-semibold">
            <span className="material-symbols-outlined text-[16px]">schema</span>
            <span>(DRAFT) SYSTEM CONTEXT DIAGRAM</span>
          </div>
          <h2 className="text-headline-sm font-headline-sm text-on-surface font-bold">
            (DRAFT) Lorem Ipsum: From Point-to-Point Pipelines to Interlinked Triplestores
          </h2>
          <p className="text-body-md font-body-md text-on-surface-variant max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.
          </p>
        </div>

        {/* Inline Visual Architectural SVG Mini-Graphic */}
        <div className="my-space-md w-full py-4 bg-surface-container-low rounded-lg flex items-center justify-center z-10 border border-surface-container-high/40">
          <svg className="w-full max-w-[540px] h-32" fill="none" viewBox="0 0 540 120" xmlns="http://www.w3.org/2000/svg">
            {/* Domain A */}
            <rect className="fill-surface-container-high stroke-outline-variant" height="50" rx="6" strokeWidth="1" width="110" x="10" y="35" />
            <text className="fill-on-surface font-title-md text-[11px] font-bold" textAnchor="middle" x="65" y="58">Lorem Node A</text>
            <text className="fill-outline font-label-code-sm text-[9px]" textAnchor="middle" x="65" y="73">lorem-ap-v1</text>

            {/* Arrow 1 */}
            <path d="M125 60 L180 60" stroke="#0051d5" strokeDasharray="4 2" strokeWidth="2" />
            <polygon fill="#0051d5" points="185,60 178,56 178,64" />

            {/* Radical Linkset Hub */}
            <rect className="fill-surface-container-lowest stroke-secondary" height="80" rx="8" strokeWidth="1.5" width="160" x="190" y="20" />
            <circle className="fill-surface-container-high" cx="270" cy="45" r="14" />
            <text className="fill-on-tertiary-container font-label-code-sm text-[12px] font-bold" textAnchor="middle" x="270" y="49">LOREM</text>
            <text className="fill-on-surface font-title-md text-[11px] font-bold" textAnchor="middle" x="270" y="73">Lorem Linkset Hub</text>
            <text className="fill-outline font-label-code-sm text-[9px]" textAnchor="middle" x="270" y="86">Lorem-O Signed</text>

            {/* Arrow 2 */}
            <path d="M355 60 L410 60" stroke="#0051d5" strokeDasharray="4 2" strokeWidth="2" />
            <polygon fill="#0051d5" points="415,60 408,56 408,64" />

            {/* Domain B */}
            <rect className="fill-surface-container-high stroke-outline-variant" height="50" rx="6" strokeWidth="1" width="110" x="420" y="35" />
            <text className="fill-on-surface font-title-md text-[11px] font-bold" textAnchor="middle" x="475" y="58">Lorem Node B</text>
            <text className="fill-outline font-label-code-sm text-[9px]" textAnchor="middle" x="475" y="73">lorem-schema-v2</text>
          </svg>
        </div>

        <div className="flex items-center gap-space-md text-label-code-sm font-label-code-sm text-outline z-10">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            Lorem SHACL Validated
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-on-tertiary-container" />
            Lorem Silo Retention
          </span>
        </div>
      </div>

      {/* 5-col Editorial Imagery Card */}
      <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-sm border border-surface-container-high/40 relative min-h-[320px] bg-primary-container">
        <img
          className="w-full h-full object-cover opacity-60"
          alt="European scientific research laboratory computing facility"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs_TdYstvextXpk6Jg_UBTYOEVrVQ5UKVmeWFZLj_Zo7FScAXuPxAbu5cupqE664J5_qJukCYrKN6qO8BoHx8_hjUro6m4GPNUVya2TjpBKzfHWuRx_lZu58XyV8L7J7d97KLb-rrFjQtsyi_czBupPK4U7edZxFiI3yW4P2ZzO3J5PHI4vFWYYy7HgrEkHa7y-6hwxfXsXg9GoAdeKIMCO_Au10_wdDOexH4vQCg_"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/60 to-transparent flex flex-col justify-end p-space-lg text-surface-container-lowest">
          <span className="font-badge-caps text-badge-caps text-tertiary-fixed uppercase tracking-wider mb-space-xs font-semibold">
            (DRAFT) Sovereign Data Governance
          </span>
          <h3 className="font-headline-sm text-headline-sm mb-space-xs font-bold text-white">
            (DRAFT) Trust Rooted in Verifiable Evidence
          </h3>
          <p className="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
            (DRAFT) By shifting from undocumented implicit assumptions to declarative conformity specifications, inter-institutional federation becomes resilient against personnel transitions and API rot.
          </p>
        </div>
      </div>
    </section>
  );
};
