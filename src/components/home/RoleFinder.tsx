import React, { useState } from 'react';
import { rolesData } from '../../data/roles';
import { Link } from 'react-router-dom';

export const RoleFinder: React.FC = () => {
  const roleKeys = Object.keys(rolesData);
  const [activeRoleKey, setActiveRoleKey] = useState<string>('steward');
  const [copied, setCopied] = useState(false);

  const activeRole = rolesData[activeRoleKey] || rolesData['steward'];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeRole.snippet).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto px-margin py-space-xl w-full">
      {/* Header and status indicator */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
        <div>
          <div className="flex items-center gap-space-xs font-badge-caps text-badge-caps uppercase tracking-wider text-secondary mb-space-xs font-semibold">
            <span className="material-symbols-outlined text-[15px]">tune</span>
            (DRAFT) Tailored Workflow Engine
          </div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            (DRAFT) Instant Role Finder
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            (DRAFT) Select your scientific or technical capacity to reveal immediate, actionable starting points.
          </p>
        </div>

        {/* Live Filter Status Indicator */}
        <div className="flex items-center gap-space-xs font-label-code-sm text-label-code-sm text-on-surface-variant px-space-md py-1.5 rounded-full bg-surface-container">
          <span className="w-2 h-2 rounded-full bg-secondary" />
          <span>
            Viewing recommendations for: <strong className="text-on-surface">{activeRole.name}</strong>
          </span>
        </div>
      </div>

      {/* Role Filter Pill Strip */}
      <div className="flex flex-wrap items-center gap-space-xs mb-space-lg">
        {roleKeys.map((key) => {
          const role = rolesData[key];
          const isActive = activeRoleKey === key;
          return (
            <button
              key={key}
              onClick={() => setActiveRoleKey(key)}
              className={`px-space-md py-2 rounded-lg font-title-md text-title-md transition-all ${
                isActive
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {role.name}
            </button>
          );
        })}
      </div>

      {/* Dynamic Role Workspace Display */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-stretch">
        {/* Left Content (8 cols) */}
        <div className="lg:col-span-8 flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high/40">
          <div>
            <div className="flex items-center justify-between pb-space-md mb-space-md bg-surface-container-low rounded-lg p-space-md">
              <div>
                <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-secondary">
                  {activeRole.kicker}
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mt-1">
                  {activeRole.title}
                </h3>
              </div>
              <span className="font-label-code-sm text-label-code-sm px-space-sm py-1 rounded bg-surface-container text-on-surface-variant">
                {activeRole.timeEstimate}
              </span>
            </div>

            <p className="font-body-md text-body-md text-on-surface mb-space-lg leading-relaxed">
              {activeRole.desc}
            </p>

            {/* Dynamic Sub-Action Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md mb-space-lg">
              {activeRole.actions.map((action, idx) => (
                <div
                  key={idx}
                  className="p-space-md rounded-lg bg-surface-container-low flex flex-col justify-between"
                >
                  <div>
                    <div className={`flex items-center gap-space-xs mb-space-xs ${action.color} font-label-code-sm text-label-code-sm`}>
                      <span className="material-symbols-outlined text-[16px]">
                        {action.icon}
                      </span>
                      <span>{action.tag}</span>
                    </div>
                    <h4 className="font-title-md text-title-md text-on-surface mb-1 font-semibold">
                      {action.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {action.body}
                    </p>
                  </div>
                  <a
                    href={action.url || '#'}
                    className={`mt-space-md inline-flex items-center gap-1 font-label-code-sm text-label-code-sm ${action.color} font-semibold hover:underline`}
                  >
                    {action.cta}
                    <span className="material-symbols-outlined text-[14px]">
                      chevron_right
                    </span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* CLI / Snippet Bar */}
          <div className="p-space-md rounded-lg bg-primary-container text-on-primary font-label-code-sm text-label-code-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm overflow-x-auto w-full">
              <span className="text-outline select-none">$</span>
              <code className="text-secondary-fixed whitespace-pre font-mono">
                {activeRole.snippet}
              </code>
            </div>
            <button
              onClick={handleCopy}
              className="px-space-sm py-1 rounded bg-inverse-surface hover:bg-outline-variant hover:text-on-surface text-on-primary font-body-sm text-body-sm transition-colors shrink-0 flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[14px]">
                {copied ? 'check' : 'content_copy'}
              </span>
              <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>
        </div>

        {/* Right Content: Curated Fast-Track & Visual (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm border border-surface-container-high/40">
          <div>
            <div className="flex items-center gap-space-xs mb-space-md">
              <span className="material-symbols-outlined text-secondary text-[20px]">
                auto_stories
              </span>
              <span className="font-title-md text-title-md text-on-surface font-semibold">
                (DRAFT) Curated Fast-Track
              </span>
            </div>

            {/* Semantic Graph SVG Micro-Visual */}
            <div className="w-full h-36 rounded-lg bg-surface-container flex items-center justify-center p-space-sm mb-space-md overflow-hidden relative">
              <svg
                className="w-full h-full text-secondary"
                fill="none"
                viewBox="0 0 300 120"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 60 H 120 M160 60 H 240 M140 40 V 20 M140 80 V 100"
                  stroke="currentColor"
                  strokeDasharray="4 4"
                  strokeOpacity="0.3"
                  strokeWidth="2"
                />
                <circle
                  cx="40"
                  cy="60"
                  fill="#0051d5"
                  fillOpacity="0.1"
                  r="22"
                  stroke="#0051d5"
                  strokeWidth="2"
                />
                <text
                  className="font-label-code-sm text-[10px]"
                  fill="#0b1c30"
                  fontWeight="600"
                  textAnchor="middle"
                  x="40"
                  y="64"
                >
                  SUBJ
                </text>
                <rect
                  fill="#000000"
                  height="36"
                  rx="6"
                  width="60"
                  x="110"
                  y="42"
                />
                <text
                  className="font-label-code-sm text-[9px]"
                  fill="#ffffff"
                  fontWeight="600"
                  textAnchor="middle"
                  x="140"
                  y="64"
                >
                  skos:exact
                </text>
                <circle
                  cx="240"
                  cy="60"
                  fill="#0c9488"
                  fillOpacity="0.1"
                  r="22"
                  stroke="#0c9488"
                  strokeWidth="2"
                />
                <text
                  className="font-label-code-sm text-[10px]"
                  fill="#0b1c30"
                  fontWeight="600"
                  textAnchor="middle"
                  x="240"
                  y="64"
                >
                  OBJ
                </text>
              </svg>
              <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-surface-container-lowest font-label-code-sm text-[10px] text-outline border border-outline-variant/30">
                RDF Linkset Graph
              </div>
            </div>

            {/* Reading list */}
            <div className="space-y-space-sm">
              {activeRole.reading.map((item, idx) => (
                <div
                  key={idx}
                  className="block p-space-sm rounded hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <div className={`font-label-code-sm text-label-code-sm ${item.color} font-semibold`}>
                    {item.guide}
                  </div>
                  <div className="font-title-md text-title-md text-on-surface font-medium">
                    {item.title}
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/community"
            className="mt-space-md w-full inline-flex items-center justify-center py-2.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
          >
            (DRAFT) Download Role Handbook
          </Link>
        </div>
      </div>
    </div>
  );
};
