import React from 'react';
import { Link } from 'react-router-dom';

export const TriageDoors: React.FC = () => {
  const doors = [
    {
      id: "door-01",
      number: "01",
      category: "(DRAFT) Exploration & Theory",
      categoryColor: "text-on-tertiary-container",
      icon: "visibility",
      iconColor: "text-on-tertiary-container",
      title: "(DRAFT) New to the Concept? What is Radical Transparency?",
      description: "(DRAFT) Grasp the foundational pillars: provenance traceability, open governance rationales, FAIR evolution, and the architectural motivation paper.",
      checkpoints: [
        "(DRAFT) FAIR Data Evolution",
        "(DRAFT) Motivation Whitepaper",
        "(DRAFT) High-Level Principles",
      ],
      checkColor: "text-on-tertiary-container",
      cta: "(DRAFT) Start Learning Path",
      ctaPath: "/theory",
      btnClass: "bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary",
    },
    {
      id: "door-02",
      number: "02",
      category: "(DRAFT) Engineering & Spec",
      categoryColor: "text-secondary",
      icon: "terminal",
      iconColor: "text-secondary",
      title: "(DRAFT) Building & Integrating? Developer & Technical Hub",
      description: "(DRAFT) Ready-to-run tooling: JSON-LD conformity profiles, Linkset Usage Patterns, Alignment Actions CLI/APIs, and OpenAPI/RDF verification pipelines.",
      checkpoints: [
        "(DRAFT) Linkset Usage Patterns",
        "(DRAFT) Alignment CLI & Triplestores",
        "(DRAFT) JSON-LD & SHACL Schemas",
      ],
      checkColor: "text-secondary",
      cta: "(DRAFT) Explore Dev Tooling",
      ctaPath: "/developer",
      btnClass: "bg-secondary text-on-secondary hover:bg-secondary-container",
    },
    {
      id: "door-03",
      number: "03",
      category: "(DRAFT) Advocacy & Mobilization",
      categoryColor: "text-on-surface",
      icon: "groups",
      iconColor: "text-on-surface",
      title: "(DRAFT) Educate & Mobilize? Community, Playbooks & Roadmap",
      description: "(DRAFT) Empower your institution with peer training circles, curated pilot case studies, onboarding curricula, and strategic 4-phase milestone roadmaps.",
      checkpoints: [
        "(DRAFT) Peer-to-Peer Cohorts",
        "(DRAFT) Institutional Adoption Kits",
        "(DRAFT) Strategic 4-Phase Roadmap",
      ],
      checkColor: "text-on-surface",
      cta: "(DRAFT) Join Community Circle",
      ctaPath: "/community",
      btnClass: "bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary",
    },
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {doors.map((door) => (
          <div
            key={door.id}
            className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-surface-container-high/40"
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between gap-space-xs mb-space-md">
                <span
                  className={`px-space-sm py-0.5 rounded bg-surface-container ${door.categoryColor} font-badge-caps text-badge-caps uppercase tracking-wider font-semibold`}
                >
                  {door.category}
                </span>
                <span className="font-label-code-sm text-label-code-sm text-outline">
                  {door.number}
                </span>
              </div>
              <div className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ${door.iconColor} mb-space-md group-hover:scale-105 transition-transform`}>
                <span className="material-symbols-outlined text-[24px]">
                  {door.icon}
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs leading-snug font-bold">
                {door.title}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
                {door.description}
              </p>
              <ul className="flex flex-col gap-1.5 mb-space-lg font-label-code-sm text-label-code-sm text-outline">
                {door.checkpoints.map((check, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className={door.checkColor}>✓</span> {check}
                  </li>
                ))}
              </ul>
            </div>
            <Link
              to={door.ctaPath}
              className={`w-full inline-flex items-center justify-between px-space-md py-2.5 rounded font-title-md text-title-md transition-colors ${door.btnClass}`}
            >
              <span>{door.cta}</span>
              <span className="material-symbols-outlined text-[18px]">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
