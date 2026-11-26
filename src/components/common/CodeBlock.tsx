import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  multiline?: boolean;
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'bash',
  multiline,
  className = '',
}) => {
  const [copied, setCopied] = useState(false);
  const isMultiline = multiline ?? code.includes('\n');

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (isMultiline) {
    return (
      <div className={`rounded-lg bg-primary-container text-on-primary font-label-code-sm text-label-code-sm overflow-hidden ${className}`}>
        <div className="flex items-center justify-between px-space-md py-space-xs border-b border-outline/20">
          <span className="font-badge-caps text-badge-caps uppercase tracking-wider text-outline">
            {language}
          </span>
          <button
            onClick={handleCopy}
            className="px-space-sm py-1 rounded bg-inverse-surface hover:bg-outline-variant hover:text-on-surface text-on-primary font-body-sm text-body-sm transition-colors shrink-0 flex items-center gap-1"
            aria-label="Copy to clipboard"
          >
            <span className="material-symbols-outlined text-[15px]">
              {copied ? 'check' : 'content_copy'}
            </span>
            <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
        <pre className="p-space-md overflow-x-auto whitespace-pre leading-relaxed">
          <code className="text-secondary-fixed">{code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div className={`p-space-md rounded-lg bg-primary-container text-on-primary font-label-code-sm text-label-code-sm flex items-center justify-between gap-space-sm ${className}`}>
      <div className="flex items-center gap-space-sm overflow-x-auto w-full">
        {language === 'bash' && <span className="text-outline select-none">$</span>}
        <code className="text-secondary-fixed whitespace-pre">{code}</code>
      </div>
      <button
        onClick={handleCopy}
        className="px-space-sm py-1 rounded bg-inverse-surface hover:bg-outline-variant hover:text-on-surface text-on-primary font-body-sm text-body-sm transition-colors shrink-0 flex items-center gap-1"
        aria-label="Copy to clipboard"
      >
        <span className="material-symbols-outlined text-[15px]">
          {copied ? 'check' : 'content_copy'}
        </span>
        <span className="text-xs">{copied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
};
