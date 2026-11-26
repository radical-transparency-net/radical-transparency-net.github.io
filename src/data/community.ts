import {
  CommunityResource,
  PlaybookTrack,
  EventItem,
  RoadmapPhase,
  ChannelItem,
} from '../types';

export const communityResourcesData: CommunityResource[] = [
  {
    id: 'github-org',
    title: 'Radical Transparency Network on GitHub',
    category: 'Open Collaboration',
    description:
      'All specifications, beta tools, semantic assets, and branding repositories are maintained publicly on GitHub. Open issues, review discussions, and pull requests are welcomed across every repository.',
    icon: 'code',
    url: 'https://github.com/radical-transparency-net',
    ctaLabel: 'Explore GitHub Organization',
    isExternal: true,
  },
  {
    id: 'vliz-stewardship',
    title: 'Flanders Marine Institute (VLIZ)',
    category: 'Institutional Stewardship',
    description:
      'Maintained by the Open Science team at VLIZ (Oostende, Belgium), building on operational linked open data infrastructure such as MarineInfo.org and WoRMS.',
    icon: 'public',
    url: 'https://vliz.be/en',
    ctaLabel: 'Visit VLIZ',
    isExternal: true,
  },
  {
    id: 'spec-alignment',
    title: 'Cross-Standard Alignment & Feedback',
    category: 'Specification Governance',
    description:
      'Contribute technical review comments, alignment notes (OGC, CODATA/CDIF, FAIR Signposting), and pull requests directly on the canonical Linkset Usage Patterns repository.',
    icon: 'hub',
    url: 'https://github.com/radical-transparency-net/spec-linkset-usage-patterns',
    ctaLabel: 'Open Patterns Repository',
    isExternal: true,
  },
  {
    id: 'visual-branding',
    title: 'Visual Branding & Design Guidelines',
    category: 'Identity & Reuse',
    description:
      'Access the deterministic Brugse Schelprand monochrome lace logo generator, responsive LOD SVG masters, and brand specifications for reuse across companion tools and presentations.',
    icon: 'palette',
    url: 'https://github.com/radical-transparency-net/visuals-branding-design',
    ctaLabel: 'Browse Branding Repo',
    isExternal: true,
  },
];

// Preserved empty/clean exports for unmounted src/components/community/* components
export const playbookTracksData: PlaybookTrack[] = [];
export const upcomingEventsData: EventItem[] = [];
export const roadmapPhasesData: RoadmapPhase[] = [];
export const stakeholderChannelsData: ChannelItem[] = [
  {
    icon: 'code',
    iconBgColor: 'bg-surface-container-high text-secondary',
    title: 'GitHub Organization',
    description: 'Public repositories for specifications, beta tooling, and semantic assets.',
    metaText: 'radical-transparency-net',
    ctaText: 'Open GitHub',
    url: 'https://github.com/radical-transparency-net',
    accentColor: 'text-secondary',
  },
];
