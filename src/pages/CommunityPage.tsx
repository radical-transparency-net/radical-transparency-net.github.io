import React from 'react';
import { CommunityHero } from '../components/community/CommunityHero';
import { PlaybookTracks } from '../components/community/PlaybookTracks';
import { EventCards } from '../components/community/EventCards';
import { RoadmapTimeline } from '../components/community/RoadmapTimeline';
import { ChannelsGrid } from '../components/community/ChannelsGrid';

export const CommunityPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Header */}
      <CommunityHero />

      {/* Main Content Layout */}
      <div className="max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col gap-space-xl w-full">
        {/* Track 01: Educational & Community Enablement */}
        <PlaybookTracks />

        {/* Live Engagements / Upcoming Webinars & Sprints */}
        <EventCards />

        {/* Track 02: Strategic Governance & Roadmap */}
        <RoadmapTimeline />

        {/* Multi-Channel Operations & Transparency Digest */}
        <ChannelsGrid />
      </div>
    </div>
  );
};
