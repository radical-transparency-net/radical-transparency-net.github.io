import React, { useState } from 'react';
import { playgroundProfilesData } from '../../data/tooling';

export const ValidatorPlayground: React.FC = () => {
  const [selectedProfileId, setSelectedProfileId] = useState<string>('eosc-core-v2.1');
  const currentProfile = playgroundProfilesData.find((p) => p.id === selectedProfileId) || playgroundProfilesData[0];

  const [code, setCode] = useState<string>(currentProfile.defaultCode);
  const [isValidating, setIsValidating] = useState<boolean>(false);
  const [validationDone, setValidationDone] = useState<boolean>(true);

  const handleProfileChange = (newId: string) => {
    setSelectedProfileId(newId);
    const prof = playgroundProfilesData.find((p) => p.id === newId);
    if (prof) {
      setCode(prof.defaultCode);
    }
  };

  const handleReset = () => {
    setCode(currentProfile.defaultCode);
    setValidationDone(true);
  };

  const handleRunValidation = () => {
    setIsValidating(true);
    setTimeout(() => {
      setIsValidating(false);
      setValidationDone(true);
    }, 400);
  };

  return (
    <section className="w-full" id="playground-section">
      <div className="flex flex-col gap-space-xs mb-space-lg">
        <div className="flex items-center gap-space-sm">
          <span className="material-symbols-outlined text-secondary text-[24px]">
            science
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-bold">
            Interactive Linkset Validator Playground
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
          Execute client-side conformity assertions against Turtle/RDF statements. Validate metadata completeness, PURL resolution endpoints, and license compliance instantaneously.
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-md border border-surface-container-high/40 overflow-hidden flex flex-col">
        {/* Playground Controls Bar */}
        <div className="px-space-md py-space-sm bg-surface-container-low border-b border-surface-container-high/40 flex flex-wrap items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-md">
            <label className="font-label-code-sm text-label-code-sm text-outline uppercase tracking-wider flex items-center gap-1.5 font-semibold text-xs">
              <span>Profile Standard:</span>
              <select
                className="h-8 px-2 rounded bg-surface-container-lowest text-on-surface text-body-sm font-label-code-sm focus:outline-none focus:ring-2 focus:ring-secondary border border-outline-variant/30"
                value={selectedProfileId}
                onChange={(e) => handleProfileChange(e.target.value)}
              >
                {playgroundProfilesData.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <span className="hidden sm:inline text-outline-variant">|</span>
            <span className="font-label-code-sm text-label-code-sm text-outline hidden sm:flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">memory</span>
              Engine: Rust WASM (Core v0.9.4)
            </span>
          </div>

          <div className="flex items-center gap-space-sm">
            <button
              onClick={handleReset}
              className="px-space-sm py-1 rounded hover:bg-surface-container text-body-sm font-body-sm text-on-surface-variant transition-colors flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">restart_alt</span>
              Reset Snippet
            </button>
            <button
              onClick={handleRunValidation}
              disabled={isValidating}
              className="px-space-md py-1.5 rounded bg-secondary text-on-secondary font-body-sm text-body-sm font-semibold hover:bg-secondary-container transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-[18px]">
                {isValidating ? 'sync' : 'play_arrow'}
              </span>
              <span>{isValidating ? 'Validating...' : 'Run Validation'}</span>
            </button>
          </div>
        </div>

        {/* Playground Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
          {/* Turtle Input Pane (7 cols) */}
          <div className="lg:col-span-7 p-space-md bg-surface-container-lowest border-r border-surface-container-high/40 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="font-label-code-sm text-label-code-sm text-outline uppercase font-mono text-xs">
                linkset-input.ttl (RDF / Turtle)
              </span>
              <span className="font-label-code-sm text-label-code-sm text-on-tertiary-container font-semibold">
                Editable
              </span>
            </div>
            <textarea
              className="w-full flex-1 p-space-sm rounded bg-surface-container-low font-label-code-sm text-label-code-sm text-on-surface resize-none focus:outline-none focus:ring-2 focus:ring-secondary/40 leading-relaxed min-h-[300px] font-mono border border-surface-container-high/40"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              spellCheck={false}
            />
          </div>

          {/* Validation Output & Inspector Pane (5 cols) */}
          <div className="lg:col-span-5 p-space-md bg-surface-container-low/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-code-sm text-label-code-sm text-outline uppercase font-mono text-xs">
                  Conformity Report
                </span>
                <div className="px-space-sm py-0.5 rounded bg-tertiary-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider flex items-center gap-1 border border-on-tertiary-container/30">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span>
                  <span>PASS (100% Provenance)</span>
                </div>
              </div>

              {/* Report Check List */}
              <div className="flex flex-col gap-space-xs mt-space-md font-body-sm text-body-sm">
                {validationDone &&
                  currentProfile.checks.map((check, idx) => (
                    <div
                      key={idx}
                      className="p-space-sm rounded bg-surface-container-lowest flex items-start gap-space-xs shadow-sm border border-surface-container-high/30"
                    >
                      <span className="material-symbols-outlined text-on-tertiary-container text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div className="flex flex-col">
                        <span className="font-medium text-on-surface">
                          {check.name}
                        </span>
                        <span className="text-outline text-label-code-sm font-label-code-sm text-xs font-mono">
                          {check.detail}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Bottom Action within Playground */}
            <div className="mt-space-md pt-space-md border-t border-surface-container-high/40 flex items-center justify-between">
              <span className="font-label-code-sm text-label-code-sm text-outline text-xs font-mono">
                SHACL Execution: 12ms
              </span>
              <button
                onClick={() => alert('Exporting SHACL JSON-LD Validation Report')}
                className="font-body-sm text-body-sm font-semibold text-secondary hover:underline flex items-center gap-1"
              >
                <span>Export Report (JSON-LD)</span>
                <span className="material-symbols-outlined text-[16px]">download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
