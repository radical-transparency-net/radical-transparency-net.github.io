import { SpecCard, SdkItem, ValidationProfile } from '../types';

export const cliTerminalData = {
  command: 'bun run wrx.js --all --extend-links --profile https://example.org/dataset',
  infoMessage: '[wrx] Cascading discovery across content negotiation, headers, linksets, and sitemaps...',
  outputLines: [
    '> Checking HTTP Link headers & RFC 9264 linksets',
    '> Extracting modeled web-link relations & profile URIs',
  ],
  passBadge: 'Beta CLI (wrx)',
  duration: 'beta',
};

export const specCardsData: SpecCard[] = [
  {
    id: 'spec-01',
    badge: 'RT-P01 · Profile Declaration',
    title: 'Profile Conformity Declarations',
    description: 'Declare resource conformity via RFC 6906 rel="profile" and dereferenceable profile metadata.',
    targetUri: 'https://radical-transparency-net.github.io/spec-linkset-usage-patterns/#rt-p01',
    specUrl: '#/patterns/rt-p01',
    icon: 'verified_user',
  },
  {
    id: 'spec-02',
    badge: 'RT-P03 · Variant Menu',
    title: 'Content Negotiation Menu',
    description: 'Expose available representations and rel="self" identity anchors via RFC 9264 linksets.',
    targetUri: 'https://radical-transparency-net.github.io/spec-linkset-usage-patterns/#rt-p03',
    specUrl: '#/patterns/rt-p03',
    icon: 'hub',
  },
  {
    id: 'spec-03',
    badge: 'rtwl: · Vocabulary',
    title: 'Web Linking Vocabulary (rtwl:)',
    description: 'RDF reification classes and properties for observed RFC 8288 and RFC 9264 links.',
    targetUri: 'https://w3id.org/rt/ns/weblink#',
    specUrl: '#/semantic-assets',
    icon: 'schema',
  },
];

export const sdkCardsData: SdkItem[] = [
  {
    langCode: 'TS',
    name: 'wrx (Beta)',
    version: 'Beta',
    description: 'TypeScript/Bun URI-to-RDF extraction library and CLI supporting cascading discovery.',
    installCmd: 'bun run wrx.js --help',
    docsUrl: '#/tools/wrx',
    badgeText: 'GitHub · Beta',
  },
  {
    langCode: 'UI',
    name: 'webmap-ER (Beta)',
    version: 'Beta',
    description: 'Browser-based RT-Pattern auditor and linkset generation workbench.',
    installCmd: 'https://radical-transparency-net.github.io/webmap-ER/',
    docsUrl: '#/tools/webmap-er',
    badgeText: 'Web App · Beta',
  },
  {
    langCode: 'DK',
    name: 'lod_docker_webserver (Beta)',
    version: 'Beta',
    description: 'Containerized Nginx testbed serving 150 simulated pages across 30 LOD discovery strategies.',
    installCmd: 'docker compose up --build',
    docsUrl: '#/tools/lod-docker-webserver',
    badgeText: 'Docker · Beta',
  },
];

export const playgroundProfilesData: ValidationProfile[] = [
  {
    id: 'rt-profile-01',
    name: 'RT-P01 Profile Declaration (HTTP Link)',
    defaultCode: `Link: <https://semiceu.github.io/DCAT-AP/>; rel="profile"
Link: <http://www.w3.org/ns/dx/prof/Profile>; rel="type"`,
    checks: [
      { name: 'Profile Relation', detail: 'RFC 6906 rel="profile" present', status: 'pass' },
      { name: 'Profile Typing', detail: 'dx-prof:Profile rel="type" declared', status: 'pass' },
    ],
  },
  {
    id: 'rt-profile-02',
    name: 'RT-P03 Linkset Menu (JSON)',
    defaultCode: `{
  "linkset": [
    {
      "anchor": "https://marineinfo.org/id/institute/36",
      "alternate": [{ "href": "https://marineinfo.org/id/institute/36.ttl", "type": "text/turtle" }]
    }
  ]
}`,
    checks: [
      { name: 'Anchor Declared', detail: 'RFC 9264 anchor URI present', status: 'pass' },
      { name: 'Alternate Target', detail: 'Variant media type declared', status: 'pass' },
    ],
  },
];
