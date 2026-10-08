import React, { useState } from 'react';
import { sdkCardsData } from '../../data/tooling';

export const SdkCards: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (cmd: string, index: number) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-sm">
        <div className="flex flex-col">
          <span className="font-label-code-sm text-label-code-sm text-secondary uppercase tracking-wider font-semibold">
            (DRAFT) Lorem Toolchains
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            (DRAFT) Lorem Ipsum: Client Libraries
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {sdkCardsData.map((sdk, idx) => (
          <div
            key={idx}
            className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm border border-surface-container-high/40 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded bg-surface-container flex items-center justify-center font-bold text-secondary text-sm font-mono">
                    {sdk.langCode}
                  </span>
                  <span className="font-title-md text-title-md text-on-surface font-semibold">
                    {sdk.name}
                  </span>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-badge-caps text-badge-caps font-mono">
                  {sdk.version}
                </span>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                {sdk.description}
              </p>

              <div className="bg-primary-container text-on-primary rounded p-space-sm font-label-code-sm text-label-code-sm flex items-center justify-between mb-space-md font-mono text-xs border border-outline/20">
                <code className="truncate">{sdk.installCmd}</code>
                <span
                  className="material-symbols-outlined text-[16px] text-outline cursor-pointer hover:text-on-primary transition-colors shrink-0 ml-1"
                  onClick={() => handleCopy(sdk.installCmd, idx)}
                  title="Copy command"
                >
                  {copiedIndex === idx ? 'check' : 'content_copy'}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between text-body-sm font-body-sm pt-space-xs border-t border-surface-container-high/30">
              <span className="text-secondary font-semibold hover:underline flex items-center gap-1 cursor-pointer">
                <span>Lorem Docs</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </span>
              <span className="text-outline text-label-code-sm font-label-code-sm text-xs font-mono">
                {sdk.badgeText}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
