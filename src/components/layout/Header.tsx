import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { siteConfig } from '../../data/siteConfig';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-surface-container-high/40">
      <div className="h-16 max-w-[1440px] mx-auto px-margin-mobile sm:px-margin flex items-center justify-between gap-space-sm sm:gap-space-md">
        {/* Brand Link */}
        <Link to="/" className="flex items-center gap-space-sm shrink-0 group">
          <img
            src="./assets/branding/rt-logo.svg"
            alt="Radical Transparency logo"
            className="w-9 h-9 shrink-0"
          />
          <div className="flex items-center gap-space-xs">
            <span className="font-title-md text-title-md text-on-surface tracking-tight font-semibold whitespace-nowrap">
              {siteConfig.title}
            </span>
            <span className="hidden sm:inline-block px-space-xs py-0.5 rounded bg-surface-container text-on-tertiary-container font-badge-caps text-badge-caps uppercase tracking-wider">
              Interop
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-xs text-body-md font-body-md">
          {siteConfig.navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `px-space-sm py-1.5 rounded transition-colors whitespace-nowrap ${
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

        {/* GitHub and Primary Action */}
        <div className="flex items-center gap-space-sm shrink-0">
          <a
            className="hidden sm:flex items-center gap-1.5 px-space-sm py-1.5 rounded text-body-sm font-label-code-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors whitespace-nowrap"
            href={siteConfig.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
            title="Radical Transparency Network on GitHub"
          >
            <span className="material-symbols-outlined text-[18px]">code</span>
            <span>GitHub</span>
          </a>

          <Link
            to="/patterns"
            className="hidden sm:inline-flex items-center justify-center px-space-md py-1.5 rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors shadow-sm whitespace-nowrap"
          >
            Explore Patterns
          </Link>

          {/* Mobile menu toggle button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-1.5 rounded text-on-surface-variant hover:bg-surface-container transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="material-symbols-outlined text-[24px]">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-lowest border-b border-surface-container-high px-margin-mobile sm:px-margin py-space-md flex flex-col gap-space-sm shadow-md">
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
            <span>GitHub Organization</span>
          </a>
        </div>
      )}
    </header>
  );
};
