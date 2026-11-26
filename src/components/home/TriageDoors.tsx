import React from 'react';
import { Link } from 'react-router-dom';
import { triageDoorsData } from '../../data/home';

const variantStyles = {
  teal: {
    text: 'text-on-tertiary-container',
    btn: 'bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary',
  },
  secondary: {
    text: 'text-secondary',
    btn: 'bg-secondary text-on-secondary hover:bg-secondary-container',
  },
  primary: {
    text: 'text-on-surface',
    btn: 'bg-surface-container text-on-surface hover:bg-primary hover:text-on-primary',
  },
};

export const TriageDoors: React.FC = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-margin py-space-xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
        {triageDoorsData.map((door) => {
          const style = variantStyles[door.accentVariant];
          return (
            <div
              key={door.id}
              className="flex flex-col justify-between rounded-xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all duration-200 group border border-surface-container-high/40"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-space-xs mb-space-md">
                  <span
                    className={`px-space-sm py-0.5 rounded bg-surface-container ${style.text} font-badge-caps text-badge-caps uppercase tracking-wider font-semibold`}
                  >
                    {door.category}
                  </span>
                  <span className="font-label-code-sm text-label-code-sm text-outline">
                    {door.number}
                  </span>
                </div>
                <div
                  className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center ${style.text} mb-space-md group-hover:scale-105 transition-transform`}
                >
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
                  {door.checkpoints.map((check) => (
                    <li key={check} className="flex items-center gap-1.5">
                      <span className={style.text}>✓</span> {check}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                to={door.ctaPath}
                className={`w-full inline-flex items-center justify-between px-space-md py-2.5 rounded font-title-md text-title-md transition-colors ${style.btn}`}
              >
                <span>{door.cta}</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
