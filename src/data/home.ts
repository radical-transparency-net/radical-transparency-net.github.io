import {
  HomeLifecycleStep,
  HomeReadingPath,
  HomeStandardGroup,
  TriageDoorItem,
} from '../types';

export const homeHeroData = {
  title: 'Radical Transparency',
  quote:
    '"When public money is invested in interoperability across projects, how can we guide its spending without preventing innovative evolution and objectively demonstrate what has actually been achieved?"',
  lead:
    'Bridging independent interoperability efforts into three sequential, interdependent steps—formalizing the foundational Declare layer through 10 Linkset Usage Patterns (RT-P01 to RT-P10) governed by the principle of Maximum Boredom.',
  positionPaperUrl:
    'https://open-science.vliz.be/papers/2026-radical-transparency-position/2026-radical-transparency-position.pdf',
};

export const homeLifecycleSteps: HomeLifecycleStep[] = [
  {
    number: '01',
    title: 'Declare',
    description:
      'One central, solid mechanism to make structural navigation paths and technical standardisation choices explicit, findable, and machine-actionable directly in HTTP headers, RFC 9264 linksets, and sitemaps.',
  },
  {
    number: '02',
    title: 'Verify',
    description:
      'Opening up to formal approaches to describe the details of those declared choices, so conformance can be independently and automatically verified without statistical guesswork.',
  },
  {
    number: '03',
    title: 'Quantify',
    description:
      'Leading towards an objective measurement of interoperability—allowing stakeholders to track verification outcomes and adoption trends, compare ex-ante and ex-post states, and guide future investments.',
  },
];

export const homeProblemStatement = {
  assumedCompatibility:
    'Data exchange today remains constrained by "assumed compatibility"—the fragile belief that systems "inside the room" share implicit schemas, coordinate reference systems, vocabularies, and units. When consumed outside that room by crawlers, harvesters, or AI agents, that assumption collapses into statistical guesswork, broken chains, and semantic drift.',
  declareDefinition:
    'Radical Transparency’s Declare step extends OSI-stack header discipline to HTTP APIs and semantic resources: data producers explicitly declare structural, semantic, and relational conformity via RFC 8288 Link headers, RFC 9264 linksets, and ResourceSync sitemaps—shifting presentation and contextualization to user agents.',
};

export const homePositionPaper = {
  citation:
    'Portier, M., Ulrichts, B., Decruw, C., Baggali, H., Nielandt, J., Goley, J., Van Maldeghem, L., Exter, K., Delvenne, C., & Tyberghein, L. (2026). Radical Transparency: A Vision for Scalable Interoperability. Flanders Marine Institute (VLIZ).',
  url: 'https://open-science.vliz.be/papers/2026-radical-transparency-position/2026-radical-transparency-position.pdf',
};

export const homeReadingPaths: HomeReadingPath[] = [
  {
    id: 'path-a',
    code: 'Path A',
    audience: 'Data Stewards & Repository Curators',
    focus: 'Asset Publishing',
    steps: [
      { patternId: 'rt-p01', summary: 'Declare which profile your datasets conform to.' },
      { patternId: 'rt-p03', summary: 'Expose format and schema variants explicitly instead of hiding behind server headers.' },
      { patternId: 'rt-p04', summary: 'Let automated clients retrieve payloads directly from PIDs alongside metadata descriptions.' },
      { patternId: 'rt-p09', summary: 'Link immutable release DOIs to conceptual "latest" series.' },
    ],
  },
  {
    id: 'path-b',
    code: 'Path B',
    audience: 'API Architects & Systems Engineers',
    focus: 'High-Throughput Services',
    steps: [
      { patternId: 'rt-p01', summary: 'Declare what profile your APIs and API outputs conform to.' },
      { patternId: 'rt-p05', summary: 'Anchor dynamic query slices back to parent datasets and RFC 9727 API descriptions.' },
      { patternId: 'rt-p08', summary: 'Split metadata link trees when linksets grow beyond practical HTTP payload sizes.' },
      { patternId: 'rt-p07', summary: 'Expose OGC Records or DCAT catalogs as primary discovery gateways.' },
    ],
  },
  {
    id: 'path-c',
    code: 'Path C',
    audience: 'Harvesters, Crawlers & AI Agent Developers',
    focus: 'Consumption & Federation',
    steps: [
      { patternId: 'rt-p06', summary: 'Discover resources host-wide via /robots.txt and ResourceSync-augmented sitemaps.' },
      { patternId: 'rt-p01', summary: 'Recognize data and service conformance to select processing stacks or measure adoption.' },
      { patternId: 'rt-p07', summary: 'Detect specialized catalogs and LDES endpoints to avoid brute-force crawls.' },
      { patternId: 'rt-p02', summary: 'Infer broad standard compliance recursively from specific profile declarations.' },
    ],
  },
  {
    id: 'path-d',
    code: 'Path D',
    audience: 'Client-Side & Tooling Developers',
    focus: 'Data at Rest',
    steps: [
      { patternId: 'rt-p10', summary: 'Preserve provenance, licensing, and profile links alongside downloaded files via *.ls.json sidecars and xattr.' },
      { patternId: 'rt-p01', summary: 'Resolve global profile targets referenced by local sidecar linksets.' },
    ],
  },
];

export const homeFoundationalStandards: HomeStandardGroup[] = [
  {
    category: 'IETF RFCs (Protocol Backbone)',
    items: [
      { label: 'RFC 8288', detail: 'Web Linking', url: 'https://www.rfc-editor.org/info/rfc8288' },
      { label: 'RFC 6906', detail: 'The profile Link Relation', url: 'https://www.rfc-editor.org/info/rfc6906' },
      { label: 'RFC 9264', detail: 'Linkset Media Types', url: 'https://www.rfc-editor.org/info/rfc9264' },
      { label: 'RFC 9727', detail: 'api-catalog', url: 'https://www.rfc-editor.org/info/rfc9727' },
      { label: 'RFC 5829', detail: 'Version Navigation', url: 'https://www.rfc-editor.org/info/rfc5829' },
      { label: 'RFC 6573', detail: 'Item & Collection', url: 'https://www.rfc-editor.org/info/rfc6573' },
    ],
  },
  {
    category: 'Web Discovery & Semantics',
    items: [
      { label: 'OAI ResourceSync', detail: 'Z39.99 <rs:ln> Sitemaps', url: 'https://www.openarchives.org/rs/1.1/resourcesync' },
      { label: 'FAIR Signposting', detail: 'Scholarly Link Patterns', url: 'https://signposting.org/' },
      { label: 'Sitemaps.org', detail: 'Host-wide Crawl Index', url: 'https://www.sitemaps.org/protocol.html' },
      { label: 'W3C DX-PROF', detail: 'Profiles Vocabulary', url: 'https://www.w3.org/TR/dx-prof/' },
      { label: 'Schema.org', detail: 'hasPart Composition', url: 'https://schema.org/' },
    ],
  },
];

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
