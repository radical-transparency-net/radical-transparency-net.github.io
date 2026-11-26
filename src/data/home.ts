import { TriageDoorItem } from '../types';

export const triageDoorsData: TriageDoorItem[] = [
  {
    id: 'door-patterns',
    number: '01',
    category: 'Declare Specification',
    icon: 'hub',
    title: 'RT Linkset Usage Patterns (RT-P01 to RT-P10)',
    description:
      'Explore the ten foundational web-linking patterns that make profile conformity, content negotiation menus, subsetting APIs, and detached sidecars explicit.',
    checkpoints: [
      'RT-P01 to RT-P05: Resource & API Declarations',
      'RT-P06 to RT-P09: Discovery, Split-up & Releases',
      'RT-P10: Client-Side Detached Local Storage',
    ],
    cta: 'Browse RT-Patterns',
    ctaPath: '/patterns',
    accentVariant: 'teal',
  },
  {
    id: 'door-tools',
    number: '02',
    category: 'Beta Development',
    icon: 'construction',
    title: 'Ecosystem Tooling (Not Yet Fully Released)',
    description:
      'Inspect early-stage browser, Docker, and CLI tools being built around the RT patterns. All listed tools remain in active beta development.',
    checkpoints: [
      'webmap-ER: Visual Link Diagnostics & Wizard',
      'lod_docker_webserver: 30-Strategy Testbed',
      'wrx: Cascading URI-to-RDF Extractor',
    ],
    cta: 'Explore Beta Tools',
    ctaPath: '/tools',
    accentVariant: 'secondary',
  },
  {
    id: 'door-semantic-assets',
    number: '03',
    category: 'RDF Vocabularies',
    icon: 'schema',
    title: 'Semantic Assets & Web Linking Vocabulary',
    description:
      'Access dereferenceable RDF vocabularies and linksets, starting with the v0.1.0-draft Radical Transparency Web Linking Vocabulary (rtwl:).',
    checkpoints: [
      'rtwl: Canonical Namespace (w3id.org)',
      'Turtle, JSON-LD & RFC 9264 Linkset Variants',
      'Ongoing Ontology Development on GitHub',
    ],
    cta: 'View Semantic Assets',
    ctaPath: '/semantic-assets',
    accentVariant: 'primary',
  },
];
