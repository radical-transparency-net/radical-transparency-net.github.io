import React, { useState } from 'react';
import { upcomingEventsData } from '../../data/community';

export const EventCards: React.FC = () => {
  const [registeredEvents, setRegisteredEvents] = useState<Record<string, boolean>>({});

  const handleAction = (eventId: string) => {
    setRegisteredEvents((prev) => ({ ...prev, [eventId]: true }));
  };

  return (
    <section className="w-full">
      <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col lg:flex-row items-center justify-between gap-space-lg border border-surface-container-high/40">
        <div className="flex flex-col gap-space-xs max-w-xl">
          <div className="inline-flex items-center gap-1 font-badge-caps text-badge-caps uppercase tracking-wider text-secondary font-semibold">
            <span className="material-symbols-outlined text-[16px]">calendar_month</span>
            <span>Live Community Engagements</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
            Upcoming Community Webinars & Sprints
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Join practical sessions with Open Science architects to validate linksets, resolve SPARQL queries, and review schema updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full lg:w-auto shrink-0">
          {upcomingEventsData.map((event) => {
            const isRegistered = registeredEvents[event.id];

            return (
              <div
                key={event.id}
                className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-space-md min-w-[300px] border border-surface-container-high/40"
              >
                <div className="flex flex-col gap-space-xs">
                  <div className="flex items-center justify-between">
                    <span className={`px-space-xs py-0.5 rounded bg-surface-container-high ${event.tagColor || 'text-secondary'} font-badge-caps text-badge-caps uppercase font-semibold`}>
                      {event.type}
                    </span>
                    <span className="font-label-code-sm text-label-code-sm text-outline">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-on-surface mt-1 font-semibold">
                    {event.title}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-space-xs border-t border-surface-container-high/20">
                  <span className="inline-flex items-center gap-1.5 font-label-code-sm text-label-code-sm text-outline">
                    {event.locationOrStatus.toLowerCase().includes('open') && (
                      <span className="h-2 w-2 rounded-full bg-on-tertiary-container animate-ping" />
                    )}
                    <span>{event.locationOrStatus}</span>
                  </span>

                  <button
                    onClick={() => handleAction(event.id)}
                    disabled={isRegistered}
                    className={`px-space-md py-1.5 rounded font-body-sm text-body-sm font-semibold transition-colors ${
                      isRegistered
                        ? 'bg-surface-container-high text-on-surface-variant cursor-default'
                        : 'bg-primary text-on-primary hover:bg-inverse-surface shadow-sm'
                    }`}
                  >
                    {isRegistered ? 'Seat Confirmed' : event.actionText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
