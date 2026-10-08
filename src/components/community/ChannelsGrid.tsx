import React, { useState } from 'react';
import { stakeholderChannelsData } from '../../data/community';

export const ChannelsGrid: React.FC = () => {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Data Steward / Research Software Engineer');
  const [consent, setConsent] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      setIsSubscribed(true);
    }
  };

  return (
    <section className="w-full mt-space-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
        {/* Left Column: Channels Grid (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-widest font-semibold">
              (DRAFT) Multi-Channel Operations
            </span>
            <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
              (DRAFT) Stakeholder Engagement Channels & Feedback Loops
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              (DRAFT) Continuous communication pipelines ensuring two-way dialogue between the Task Force and the scientific ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {stakeholderChannelsData.map((channel, idx) => (
              <div
                key={idx}
                className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-sm border border-surface-container-high/40 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-space-sm">
                  <div className={`p-2.5 rounded-lg ${channel.iconBgColor} shrink-0`}>
                    <span className="material-symbols-outlined text-[24px]">
                      {channel.icon}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-title-md text-title-md text-on-surface font-semibold">
                      {channel.title}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-relaxed">
                      {channel.description}
                    </p>
                  </div>
                </div>

                <div className="pt-space-xs flex items-center justify-between border-t border-surface-container-high/20 mt-1">
                  <span className="font-label-code-sm text-label-code-sm text-outline">
                    {channel.metaText}
                  </span>
                  <a
                    className={`font-body-sm text-body-sm font-semibold hover:underline inline-flex items-center gap-1 ${
                      channel.accentColor || 'text-secondary'
                    }`}
                    href={channel.url}
                    target={channel.url.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <span>{channel.ctaText}</span>
                    <span className="material-symbols-outlined text-[14px]">
                      {channel.url.startsWith('http') ? 'open_in_new' : 'arrow_forward'}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Digest Newsletter Box (5 cols) */}
        <div className="lg:col-span-5 flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-md border border-surface-container-high/40">
          <div className="flex items-center gap-space-xs mb-space-xs">
            <span className="px-space-xs py-0.5 rounded bg-surface-container text-secondary font-badge-caps text-badge-caps uppercase font-semibold">
              (DRAFT) Monthly Dispatch
            </span>
            <span className="font-label-code-sm text-label-code-sm text-outline">
              Direct to Inbox
            </span>
          </div>

          <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
            (DRAFT) Subscribe to the Transparency Digest
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
            (DRAFT) A concise monthly bulletin detailing semantic crosswalk approvals, governance milestones, RFC comment windows, and interoperability case studies.
          </p>

          {isSubscribed ? (
            <div className="p-space-md rounded-lg bg-surface-container-high border border-on-tertiary-container/30 text-on-tertiary-container font-label-code-sm flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-on-tertiary-container">
                  check_circle
                </span>
                <span className="font-semibold text-sm">
                  Registration Logged Successfully!
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                A verification token and welcome briefing have been dispatched to <strong className="text-on-surface">{email}</strong>.
              </p>
              <button
                onClick={() => {
                  setIsSubscribed(false);
                  setEmail('');
                  setConsent(false);
                }}
                className="mt-2 text-xs text-secondary hover:underline self-start font-semibold"
              >
                Register another address
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-space-sm">
              <div className="flex flex-col gap-1">
                <label className="font-label-code-sm text-label-code-sm text-on-surface font-semibold">
                  Institutional Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="dr.alex.meyer@mpg.de"
                  required
                  className="h-10 px-space-sm rounded bg-surface-container-low text-on-surface placeholder:text-outline text-body-sm font-body-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-label-code-sm text-label-code-sm text-on-surface font-semibold">
                  Primary Stakeholder Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="h-10 px-space-sm rounded bg-surface-container-low text-on-surface text-body-sm font-body-sm border border-outline-variant/30 focus:outline-none focus:ring-2 focus:ring-secondary/30"
                >
                  <option>Data Steward / Research Software Engineer</option>
                  <option>Principal Investigator / Senior Scientist</option>
                  <option>Institutional Library Director / Dean</option>
                  <option>EOSC Node Operator / Infrastructure Lead</option>
                  <option>Policy Maker / EU Project Officer</option>
                </select>
              </div>

              <div className="flex items-start gap-space-xs pt-space-xs">
                <input
                  type="checkbox"
                  id="digest-consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  required
                  className="mt-1 h-4 w-4 rounded text-secondary focus:ring-secondary/20"
                />
                <label htmlFor="digest-consent" className="font-body-sm text-body-sm text-on-surface-variant cursor-pointer">
                  I agree to receive communications regarding Open Science & Radical Transparency releases in compliance with EU GDPR.
                </label>
              </div>

              <button
                type="submit"
                className="mt-space-sm h-10 px-space-md rounded bg-primary text-on-primary font-body-sm text-body-sm font-semibold hover:bg-inverse-surface transition-colors flex items-center justify-center gap-space-xs shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">mark_email_read</span>
                <span>Join Transparency Network</span>
              </button>
            </form>
          )}

          <div className="mt-space-md pt-space-md border-t border-surface-container-high/40 flex items-center justify-between text-outline font-label-code-sm text-label-code-sm">
            <span>Volume: ~1 email / mo</span>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};
