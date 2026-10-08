import React, { useState } from 'react';
import { roadmapPhasesData } from '../../data/community';
import { MilestoneItem } from '../../types';

export const RoadmapTimeline: React.FC = () => {
  const [viewMode, setViewMode] = useState<'timeline' | 'kanban'>('timeline');

  const getStatusIcon = (status: MilestoneItem['status']) => {
    switch (status) {
      case 'done':
        return <span className="material-symbols-outlined text-[18px] text-on-tertiary-container shrink-0">check_circle</span>;
      case 'active':
        return <span className="material-symbols-outlined text-[18px] text-secondary shrink-0 animate-spin">sync</span>;
      case 'pending':
        return <span className="material-symbols-outlined text-[18px] text-outline shrink-0">hourglass_empty</span>;
      case 'locked':
      default:
        return <span className="material-symbols-outlined text-[18px] text-outline shrink-0">lock</span>;
    }
  };

  const getPhaseBorderTop = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-t-4 border-t-on-tertiary-container';
      case 'in-progress':
        return 'border-t-4 border-t-secondary';
      case 'upcoming':
        return 'border-t-4 border-t-outline-variant';
      default:
        return 'border-t-4 border-t-surface-container-high';
    }
  };

  return (
    <section className="flex flex-col gap-space-lg w-full pt-space-md">
      {/* Section Header with View Toggle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-sm border-b border-surface-container-high/40">
        <div>
          <span className="font-badge-caps text-badge-caps text-secondary uppercase tracking-widest font-semibold">
            (DRAFT) Track 02 • Strategic Governance
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            (DRAFT) The Radical Transparency Strategic Roadmap
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed max-w-3xl">
            (DRAFT) A transparent, timeline-backed dissemination strategy tracking milestone deliverables across research infrastructures.
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-lg bg-surface-container border border-surface-container-high/60 shrink-0">
          <button
            onClick={() => setViewMode('timeline')}
            className={`flex items-center gap-1.5 px-space-sm py-1.5 rounded font-body-sm text-body-sm font-semibold transition-all ${
              viewMode === 'timeline'
                ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">view_timeline</span>
            <span>Timeline View</span>
          </button>
          <button
            onClick={() => setViewMode('kanban')}
            className={`flex items-center gap-1.5 px-space-sm py-1.5 rounded font-body-sm text-body-sm font-semibold transition-all ${
              viewMode === 'kanban'
                ? 'bg-surface-container-lowest text-on-surface shadow-sm'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined text-[16px]">view_kanban</span>
            <span>Kanban View</span>
          </button>
        </div>
      </div>

      {/* Render Mode: Timeline */}
      {viewMode === 'timeline' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop">
          {roadmapPhasesData.map((phase) => (
            <div
              key={phase.phaseNumber}
              className={`flex flex-col p-space-lg rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative overflow-hidden border border-surface-container-high/40 ${getPhaseBorderTop(
                phase.status
              )}`}
            >
              <div className="flex items-center justify-between mb-space-sm mt-1">
                <span className="px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-code-sm text-label-code-sm font-bold">
                  {phase.phaseNumber}
                </span>
                <span
                  className={`font-badge-caps text-badge-caps uppercase font-semibold px-space-xs py-0.5 rounded ${
                    phase.status === 'completed'
                      ? 'bg-surface-container-high text-on-tertiary-container'
                      : phase.status === 'in-progress'
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-surface-container text-outline'
                  }`}
                >
                  {phase.statusLabel}
                </span>
              </div>

              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs font-bold">
                {phase.title}
              </h3>
              <span className={`font-label-code-sm text-label-code-sm mb-space-md ${
                phase.status === 'in-progress' ? 'text-secondary font-semibold' : 'text-outline'
              }`}>
                {phase.period}
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                {phase.description}
              </p>

              {/* Milestones checklist */}
              <div className="flex flex-col gap-space-xs mt-auto pt-space-sm border-t border-surface-container-high/30">
                {phase.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 p-space-xs rounded font-body-sm text-body-sm transition-colors ${
                      milestone.status === 'active'
                        ? 'bg-surface-container-high text-on-surface font-semibold'
                        : 'bg-surface-container-low text-on-surface-variant'
                    }`}
                  >
                    {getStatusIcon(milestone.status)}
                    <span className="truncate">{milestone.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Render Mode: Kanban Board */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-desktop bg-surface-container-low p-space-md rounded-2xl border border-surface-container-high/40">
          {roadmapPhasesData.map((phase) => (
            <div
              key={phase.phaseNumber}
              className="flex flex-col gap-space-sm bg-surface-container/60 p-space-md rounded-xl border border-surface-container-high/40"
            >
              {/* Column Header */}
              <div className="flex items-center justify-between pb-space-xs border-b border-surface-container-high/60">
                <div className="flex items-center gap-2">
                  <span className="font-label-code-sm text-label-code-sm font-bold text-on-surface">
                    {phase.phaseNumber}
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
                    {phase.milestones.length}
                  </span>
                </div>
                <span
                  className={`text-[11px] font-semibold uppercase px-2 py-0.5 rounded ${
                    phase.status === 'completed'
                      ? 'bg-on-tertiary-container/10 text-on-tertiary-container'
                      : phase.status === 'in-progress'
                      ? 'bg-secondary/15 text-secondary'
                      : 'bg-surface-container-high text-outline'
                  }`}
                >
                  {phase.statusLabel}
                </span>
              </div>

              <div className="text-xs text-outline font-label-code-sm">
                {phase.period} • {phase.title}
              </div>

              {/* Kanban Task Cards */}
              <div className="flex flex-col gap-space-xs mt-1">
                {phase.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className="p-space-sm rounded-lg bg-surface-container-lowest border border-surface-container-high/50 shadow-sm flex flex-col gap-1.5 hover:shadow transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-outline">
                        TASK-{phase.phaseNumber.replace('PHASE ', '')}0{idx + 1}
                      </span>
                      {getStatusIcon(milestone.status)}
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface font-medium leading-snug">
                      {milestone.title}
                    </p>
                    <div className="flex items-center justify-between pt-1 border-t border-surface-container-high/20 text-[11px] text-on-surface-variant">
                      <span className="capitalize">{milestone.status}</span>
                      <span className="font-mono text-[10px] text-outline">v2026.RT</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
