import { SemanticAsset } from '../types';

export const semanticAssetsRepoUrl =
  'https://github.com/radical-transparency-net/semantic-assets';

export const semanticAssetsDevNotice = {
  label: 'Under Development',
  title: 'Ontologies & Vocabularies Under Active Development',
  body:
    'The Radical Transparency semantic assets suite (vocabularies, ontologies, and dereferenceable term definitions) is still under active development. Follow progress, inspect published drafts, and contribute via the GitHub repository.',
};

export const semanticAssetsData: SemanticAsset[] = [
  {
    id: 'rtwl',
    prefix: 'rtwl',
    name: 'Radical Transparency Web Linking Vocabulary',
    version: '0.1.0-draft',
    status: 'Draft Vocabulary (v0.1.0-draft)',
    namespaceUri: 'https://w3id.org/rt/ns/weblink#',
    docsUrl: 'https://radical-transparency-net.github.io/semantic-assets/weblink/',
    repoUrl: 'https://github.com/radical-transparency-net/semantic-assets/tree/main/weblink',
    description:
      'A lightweight RDF reification vocabulary for factually recording observed RFC 8288 Web Links and RFC 9264 Linksets—capturing anchor, link relation, target URI, and arbitrary target attributes—without inventing non-existent terms under existing W3C namespaces.',
    terms: {
      classes: ['rtwl:WebLink', 'rtwl:TargetAttribute', 'rtwl:Linkset'],
      properties: [
        'rtwl:anchor',
        'rtwl:href',
        'rtwl:rel',
        'rtwl:attribute',
        'rtwl:key',
        'rtwl:value',
        'rtwl:link',
      ],
    },
    representations: [
      {
        label: 'Human Documentation',
        format: 'text/html',
        url: 'https://radical-transparency-net.github.io/semantic-assets/weblink/',
      },
      {
        label: 'Turtle Serialization',
        format: 'text/turtle',
        url: 'https://radical-transparency-net.github.io/semantic-assets/weblink/weblink.ttl',
      },
      {
        label: 'JSON-LD Serialization',
        format: 'application/ld+json',
        url: 'https://radical-transparency-net.github.io/semantic-assets/weblink/weblink.jsonld',
      },
      {
        label: 'RFC 9264 Linkset (JSON)',
        format: 'application/linkset+json',
        url: 'https://radical-transparency-net.github.io/semantic-assets/weblink/weblink.linkset.json',
      },
      {
        label: 'Example Observed Links',
        format: 'text/turtle',
        url: 'https://radical-transparency-net.github.io/semantic-assets/weblink/examples/observed-links.ttl',
      },
    ],
    notes:
      'Persistent identifier routing is configured under w3id.org (ids/rt) with 303 See Other content negotiation and Link headers exposing the RT-P03 variant menu.',
  },
];
