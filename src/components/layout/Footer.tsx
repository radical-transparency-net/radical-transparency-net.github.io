import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-surface-container-high/40 shadow-[0_-1px_8px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-gutter-desktop mb-space-xl">
          {/* Brand & VLIZ Organization Column */}
          <div className="lg:col-span-2 flex flex-col gap-space-md pr-space-lg">
            <div className="flex items-center gap-space-sm">
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            {/* Lorem Ipsumified Pills */}
            <div className="flex flex-wrap items-center gap-space-xs">
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider">
                Lorem Ipsum A
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-secondary font-badge-caps text-badge-caps uppercase tracking-wider">
                Lorem Ipsum B
              </span>
              <span className="px-space-sm py-0.5 rounded bg-surface-container text-on-surface font-badge-caps text-badge-caps uppercase tracking-wider">
                Lorem Ipsum C
              </span>
            </div>
          </div>

          {/* Links Column 1 (Lorem Ipsum) */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Lorem Section I
            </span>
            <a href="#/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem ipsum dolor 01
            </a>
            <a href="#/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem ipsum dolor 02
            </a>
            <a href="#/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem ipsum dolor 03
            </a>
            <a href="#/theory" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem ipsum dolor 04
            </a>
          </div>

          {/* Links Column 2 (Lorem Ipsum) */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Lorem Section II
            </span>
            <a href="#/community" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem consectetuer 01
            </a>
            <a href="#/community" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem consectetuer 02
            </a>
            <a href="#/community" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem consectetuer 03
            </a>
            <a href="#/community" className="text-body-md font-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Lorem consectetuer 04
            </a>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface mb-space-xs font-semibold">
              Lorem Newsletter
            </span>
            <p className="text-body-sm font-body-sm text-on-surface-variant mb-space-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
            </p>
            <form className="flex flex-col gap-space-xs" onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center gap-space-xs">
                <input
                  className="h-9 px-space-sm rounded bg-surface-container text-on-surface placeholder:text-outline text-body-sm font-body-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary/20 border border-outline-variant/30"
                  placeholder="lorem.ipsum@vliz.be"
                  type="email"
                />
                <button
                  className="h-9 px-space-md rounded bg-primary text-on-primary font-body-sm text-body-sm font-medium hover:bg-inverse-surface transition-colors shrink-0"
                  type="submit"
                >
                  Join
                </button>
              </div>
              <span className="text-[11px] text-outline">
                VLIZ Legal Notice & Privacy Policy apply.
              </span>
            </form>
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
              Legal Notice & Privacy Policy
            </a>
          </p>
          <div className="flex items-center gap-space-lg">
            <span className="hover:text-on-surface cursor-pointer transition-colors">Lorem Notice</span>
            <span className="hover:text-on-surface cursor-pointer transition-colors">Lorem Accessibility</span>
            <span className="hover:text-on-surface cursor-pointer transition-colors">Lorem Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
