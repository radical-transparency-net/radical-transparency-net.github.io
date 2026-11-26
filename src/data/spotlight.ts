import { StatItem, ProposalSpotlight } from '../types';

export const pulseStatsData: StatItem[] = [
  {
    value: '10',
    label: 'Linkset Usage Patterns (RT-P01–10)',
    icon: 'hub',
    color: 'text-on-tertiary-container',
  },
  {
    value: '3',
    label: 'Tools in Beta Development',
    icon: 'construction',
    color: 'text-secondary',
  },
  {
    value: '1 Draft',
    label: 'RDF Vocabulary (rtwl: v0.1.0)',
    icon: 'schema',
    color: 'text-on-surface',
  },
  {
    value: 'CC-BY 4.0',
    label: 'Open Specs & Public Code',
    icon: 'lock_open',
    color: 'text-on-tertiary-container',
  },
];

export const proposalSpotlightsData: ProposalSpotlight[] = [
  {
    id: 'spotlight-patterns',
    category: 'Core Specification',
    fileType: 'ReSpec / Markdown',
    title: 'Linkset Usage Patterns (RT-P01 to RT-P10)',
    description:
      'Formalizes the Declare step of Radical Transparency across HTTP Link headers, RFC 9264 linksets, ResourceSync sitemaps, and client-side sidecars.',
    uri: '/#/patterns',
    status: 'Active Specification',
    statusColor: 'text-on-tertiary-container',
    docUrl: 'https://radical-transparency-net.github.io/spec-linkset-usage-patterns/',
  },
  {
    id: 'spotlight-tools',
    category: 'Beta Tooling',
    fileType: 'Web / Docker / CLI',
    title: 'webmap-ER, Testbed & wrx Extractor',
    description:
      'Three beta-stage tools for visual pattern triage, reproducible 30-strategy LOD compliance testing, and cascading URI-to-RDF extraction.',
    uri: '/#/tools',
    status: 'Beta — Not Fully Released',
    statusColor: 'text-secondary',
    docUrl: 'https://github.com/radical-transparency-net',
  },
  {
    id: 'spotlight-semantic-assets',
    category: 'Semantic Assets',
    fileType: 'Turtle / JSON-LD',
    title: 'Web Linking Vocabulary (rtwl:)',
    description:
      'Lossless RDF reification for observed RFC 8288 Web Links and RFC 9264 Linksets published under https://w3id.org/rt/ns/weblink#.',
    uri: '/#/semantic-assets',
    status: 'v0.1.0-draft · Under Development',
    statusColor: 'text-on-surface',
    docUrl: 'https://radical-transparency-net.github.io/semantic-assets/weblink/',
  },
];
