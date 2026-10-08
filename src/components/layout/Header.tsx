import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container-high/40">
      <div className="h-16 max-w-[1440px] mx-auto px-margin flex items-center justify-between gap-space-md">
        {/* Brand Link */}
        <Link to="/" className="flex items-center gap-space-md shrink-0 group">
          <div className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center font-bold text-sm tracking-wider shadow-sm group-hover:bg-secondary transition-colors">
            RT
          </div>
          <div className="flex items-center gap-space-sm">
            <span className="font-title-md text-title-md text-on-surface tracking-tight font-semibold">
              (DRAFT) Radical Transparency
            </span>
            <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider">
              (DRAFT) Interop
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-space-xs text-body-md font-body-md">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-space-sm py-1.5 rounded transition-colors ${
                  isActive
                    ? 'bg-surface-container-high text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Search, GitHub, and Action Button */}
        <div className="flex items-center gap-space-sm shrink-0">
          <div className="relative hidden md:flex items-center">
            <span className="material-symbols-outlined absolute left-2.5 text-outline text-[18px] pointer-events-none">
              search
            </span>
            <input
              className="h-9 pl-8 pr-space-sm rounded bg-surface-container-lowest text-on-surface placeholder:text-outline text-body-sm font-body-sm w-48 lg:w-56 focus:outline-none focus:ring-2 focus:ring-secondary/30 border border-outline-variant/30"
              placeholder="Search schemas, PURLs..."
              type="search"
            />
          </div>

          <a
            className="hidden sm:flex items-center gap-1.5 px-space-sm py-1.5 rounded text-body-sm font-label-code-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            title="GitHub Proposals Repository"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span>GitHub</span>
          </a>

          <Link
            to="/community"
            className="inline-flex items-center justify-center px-space-md py-1.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm"
          >
            (DRAFT) Get Involved
          </Link>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-1.5 rounded text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest border-b border-surface-container-high px-margin py-space-md flex flex-col gap-space-sm shadow-md animate-fadeIn">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `px-space-md py-2 rounded text-body-md transition-colors ${
                  isActive
                    ? 'bg-surface-container text-on-surface font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="flex items-center gap-2 px-space-md py-2 rounded text-body-md text-secondary font-medium"
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[20px]">code</span>
            <span>GitHub Proposals</span>
          </a>
        </div>
      )}
    </header>
  );
};
