import React, { useState } from 'react';
import { cliTerminalData } from '../../data/tooling';

export const CliTerminal: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cliTerminalData.command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="flex flex-col shadow-xl rounded-xl overflow-hidden bg-primary-container text-on-primary border border-outline/30">
      {/* Terminal Title Bar */}
      <div className="px-space-md py-space-sm bg-inverse-surface flex items-center justify-between border-b border-outline/20">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-error inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="font-label-code-sm text-label-code-sm text-primary-fixed-dim ml-2 flex items-center gap-1 font-mono">
            <span className="material-symbols-outlined text-[14px]">terminal</span>
            bash — rt-cli-session
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 text-primary-fixed-dim hover:text-on-primary transition-colors text-label-code-sm font-label-code-sm px-2.5 py-1 rounded bg-primary-container hover:bg-secondary"
          aria-label="Copy CLI command"
        >
          <span className="material-symbols-outlined text-[14px]">
            {copied ? 'check' : 'content_copy'}
          </span>
          <span className="text-xs">{copied ? 'Copied' : 'Copy CLI'}</span>
        </button>
      </div>

      {/* Terminal Execution Body */}
      <div className="p-space-md font-label-code-sm text-label-code-sm flex flex-col gap-2 overflow-x-auto leading-relaxed font-mono text-xs">
        <div className="flex items-center gap-2 text-primary-fixed-dim">
          <span className="text-emerald-400 select-none">$</span>
          <span className="text-on-primary font-bold">npx @eosc-interop/rt-cli validate \</span>
        </div>
        <div className="pl-4 text-emerald-300 font-medium">
          --linkset ./mappings/chem-mesh.ttl \
        </div>
        <div className="pl-4 text-emerald-300 font-medium">
          --conformity ./profiles/v1.json <span className="text-primary-fixed-dim">--verbose</span>
        </div>

        <div className="pt-2 text-outline flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping" />
          <span>{cliTerminalData.infoMessage}</span>
        </div>

        {cliTerminalData.outputLines.map((line, idx) => (
          <div key={idx} className="text-primary-fixed-dim font-light">
            {line}
          </div>
        ))}

        <div className="mt-2 p-2 rounded bg-tertiary-container text-emerald-300 flex items-center justify-between border border-emerald-500/20">
          <span className="flex items-center gap-1.5 font-bold">
            <span className="material-symbols-outlined text-[16px] text-emerald-400">check_circle</span>
            {cliTerminalData.passBadge}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-primary-fixed-dim">
            {cliTerminalData.duration}
          </span>
        </div>
      </div>
    </div>
  );
};
