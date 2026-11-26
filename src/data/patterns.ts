import { PatternItem } from '../types';

const RESPEC_BASE = 'https://radical-transparency-net.github.io/spec-linkset-usage-patterns/';
const GITHUB_SPEC_BASE = 'https://github.com/radical-transparency-net/spec-linkset-usage-patterns/blob/main/';

export const patternsOverviewMeta = {
  title: 'Linkset Usage Patterns (RT-P01 to RT-P10)',
  subtitle:
    'Formalizing the foundational Declare step of Radical Transparency using HTTP Web Linking (RFC 8288), RFC 9264 Linksets, Profile Declarations (RFC 6906), and ResourceSync Sitemaps.',
  steps: [
    {
      step: '01 · Declare',
      title: 'Explicit Machine-Actionable Signals',
      description:
        'Publish structural navigation paths, profile conformity assertions, and variant menus directly in HTTP Link headers, RFC 9264 linksets, and sitemaps.',
    },
    {
      step: '02 · Verify',
      title: 'Automated Conformance Checking',
      description:
        'Resolve declared profile descriptions and validation shapes so independent clients can test conformance rather than relying on statistical guesswork.',
    },
    {
      step: '03 · Quantify',
      title: 'Measurable Interoperability Progress',
      description:
        'Track verification outcomes and pattern adoption across infrastructures to compare ex-ante and ex-post interoperability states objectively.',
    },
  ],
  respecUrl: RESPEC_BASE,
  repoUrl: 'https://github.com/radical-transparency-net/spec-linkset-usage-patterns',
  overviewSvgPath: './assets/patterns/rt-patterns-overview.svg',
  subjectsSvgPath: './assets/patterns/rt-patterns-profile-subjects.svg',
};

export const patternsData: PatternItem[] = [
  {
    id: 'rt-p01',
    code: 'RT-P01',
    title: 'Profile Conformity Declarations',
    shortSummary: 'Explicitly declare which profile a resource conforms to using rel="profile" and dereferenceable profile metadata.',
    goal:
      'Resolve the interoperability paradox by mandating a definitive, automated mechanism to detect non-interoperability and compatibility gaps through explicit conformity-to-profile declarations.',
    motivation:
      'Broad standards leave many optional parameters and unrestricted payloads. Narrowing expectations to an explicit Profile URI in HTTP Link headers extends the OSI-stack header discipline to HTTP APIs and semantic resources, replacing assumed compatibility with verifiable declarations.',
    svgPath: './assets/patterns/rt-p01-profile-declaration.svg',
    encodingTitle: 'Layered HTTP Link Declaration (@LVL0 to @LVL2)',
    encodingLanguage: 'http',
    encodingSnippet: `# @LVL0 — From <resource-uri> as anchor:
Link: <profile-uri>; rel=profile

# @LVL1 — From <profile-uri> as anchor:
Link: <http://www.w3.org/ns/dx/prof/Profile>; rel=type

# @LVL2 — From <profile-uri> as anchor:
Link: <http://www.w3.org/ns/dx/prof/Profile>; rel=type
Link: <profile-description-uri>; rel=describedby`,
    linkRelations: ['rel="profile"', 'rel="type"', 'rel="describedby"'],
    standards: ['RFC 6906', 'RFC 6903', 'W3C DX-PROF', 'W3C POWDER-DR', 'OGC API', 'CDIF v1.1'],
    relatedPatternIds: ['rt-p02', 'rt-p03', 'rt-p06', 'rt-p09'],
    respecUrl: `${RESPEC_BASE}#rt-p01`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p01-profile-declaration.md`,
  },
  {
    id: 'rt-p02',
    code: 'RT-P02',
    title: 'Profile Composition',
    shortSummary: 'Compose granular profiles via rel="http://schema.org/hasPart" so clients infer inherited conformance automatically.',
    goal:
      'Enable granular detection of compatibility and non-conformance through a recursive hierarchy of composed profile declarations, keeping profile creation low-cost while supporting cross-domain alignment.',
    motivation:
      'Anyone can mint a domain-specific profile URI under RT-P01 without waiting for a central committee. By linking composite profiles to member profiles via schema:hasPart (distinct from structural rel="item" containment), automated agents recursively infer conformance to all included member profiles.',
    svgPath: './assets/patterns/rt-p02-profile-composition.svg',
    encodingTitle: 'HTTP Link Header Composition & Inference',
    encodingLanguage: 'http',
    encodingSnippet: `# From <resource-uri> as anchor:
Link: <composite-profile-uri>; rel=profile

# From <composite-profile-uri> as anchor:
Link: <member-01-profile-uri>; rel=http://schema.org/hasPart,
      <member-02-profile-uri>; rel=http://schema.org/hasPart`,
    linkRelations: ['rel="http://schema.org/hasPart"', 'rel="profile"', 'rel="type"', 'rel="describedby"'],
    standards: ['Schema.org hasPart', 'RFC 6906', 'RFC 6903', 'W3C DX-PROF', 'W3C POWDER-DR'],
    relatedPatternIds: ['rt-p01', 'rt-p09'],
    respecUrl: `${RESPEC_BASE}#rt-p02`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p02-profile-composition.md`,
  },
  {
    id: 'rt-p03',
    code: 'RT-P03',
    title: 'Content Negotiation Menu',
    shortSummary: 'Expose all available representation variants and anchor variants back to their conceptual URI via rel="self".',
    goal:
      'Resolve the hidden nature of HTTP content negotiation by exposing the full menu of available representations (media type, language, profile) and preserving identity across 303 redirects.',
    motivation:
      'Standard HTTP Accept negotiation is half-sided: a client requests one preference and receives a single response or 303 redirect without seeing what else exists ("Broken Chain"). Linking variants back with rel="self" and sharing an RFC 9264 variant-menu linkset preserves conceptual context.',
    svgPath: './assets/patterns/rt-p03-content-negotiation-menu.svg',
    encodingTitle: 'RFC 9264 Variant Menu Linkset (application/linkset+json)',
    encodingLanguage: 'json',
    encodingSnippet: `{
  "linkset": [
    {
      "anchor": "https://marineinfo.org/id/institute/36",
      "alternate": [
        { "href": "https://marineinfo.org/id/institute/36.ttl", "type": "text/turtle; charset=utf-8" },
        { "href": "https://marineinfo.org/id/institute/36.jsonld", "type": "application/ld+json" },
        { "href": "https://marineinfo.org/id/institute/36.html", "type": "text/html; charset=utf-8" }
      ]
    },
    {
      "anchor": "https://marineinfo.org/id/institute/36.ttl",
      "self": [{ "href": "https://marineinfo.org/id/institute/36" }]
    }
  ]
}`,
    linkRelations: ['rel="self"', 'rel="alternate"', 'rel="linkset"', 'rel="canonical"'],
    standards: ['RFC 9264', 'RFC 8288', 'RFC 4287', 'RFC 6596'],
    relatedPatternIds: ['rt-p01', 'rt-p04', 'rt-p06', 'rt-p08'],
    respecUrl: `${RESPEC_BASE}#rt-p03`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p03-content-negotiation-menu.md`,
  },
  {
    id: 'rt-p04',
    code: 'RT-P04',
    title: 'No Landing (Intermediate) Page Solution',
    shortSummary: 'Link core content, PIDs, and metadata descriptions symmetrically with rel="cite-as", rel="describedby", and rel="describes".',
    goal:
      'Enable machine-actionability and persistent citation for digital resources without forcing an intermediate HTML landing page between a PID and the actual data payload.',
    motivation:
      'Resolving a DOI to a human-only HTML landing page forces robots into extra hops and HTML scraping, while direct content downloads lose PID and metadata context. Using rel="cite-as", rel="describedby", and rel="describes" makes PID targets, metadata descriptions, and data downloads equal entry points.',
    svgPath: './assets/patterns/rt-p04-no-landing-page-solution.svg',
    encodingTitle: 'Symmetric Content, PID & Description Linking',
    encodingLanguage: 'http',
    encodingSnippet: `# From <core-content-uri> as anchor:
Link: <resource-pid-uri>; rel=cite-as
Link: <ma-description-uri>; rel=describedby; type="application/ld+json"

# From <ma-description-uri> as anchor:
Link: <core-content-uri>; rel=describes`,
    linkRelations: ['rel="cite-as"', 'rel="describedby"', 'rel="describes"', 'rel="alternate"', 'rel="linkset"'],
    standards: ['RFC 8574', 'RFC 6892', 'W3C POWDER-DR', 'RFC 9264', 'FAIR Signposting'],
    relatedPatternIds: ['rt-p01', 'rt-p03', 'rt-p05'],
    respecUrl: `${RESPEC_BASE}#rt-p04`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p04-no-landing-page-solution.md`,
  },
  {
    id: 'rt-p05',
    code: 'RT-P05',
    title: 'Subsetting API',
    shortSummary: 'Anchor filtered API slice URIs back to the base API (rel="collection") and source dataset PID (rel="cite-as").',
    goal:
      'Anchor every API data fragment or filtered query URI back to its API base endpoint ("how") and conceptual dataset PID ("what") to prevent semantic drift.',
    motivation:
      'A standalone query URL often lacks licensing, provenance, or OpenAPI capability pointers, forcing agents into guesswork. Connecting fragments to the base API via rel="collection" and attaching an RFC 9727/8631 linkset yields a boring, deterministic discovery chain.',
    svgPath: './assets/patterns/rt-p05-subsetting-api.svg',
    encodingTitle: 'Fragment Anchor & API Linkset Declaration',
    encodingLanguage: 'http',
    encodingSnippet: `# From <fragment-api-uri> as anchor:
Link: <base-api-uri>; rel=collection
Link: <core-api-linkset>; rel=linkset

# From <base-api-uri> as anchor (or inside <core-api-linkset>):
Link: <dataset-pid-uri>; rel=cite-as
Link: </.well-known/api-catalog>; rel=api-catalog
Link: <machine-readable-api-description>; rel=service-desc
Link: <profile-uri>; rel=profile`,
    linkRelations: [
      'rel="collection"',
      'rel="cite-as"',
      'rel="api-catalog"',
      'rel="service-desc"',
      'rel="service-doc"',
      'rel="service-meta"',
      'rel="status"',
      'rel="profile"',
    ],
    standards: ['RFC 6573', 'RFC 8574', 'RFC 9727', 'RFC 8631', 'RFC 9264'],
    relatedPatternIds: ['rt-p01', 'rt-p04', 'rt-p07', 'rt-p08', 'rt-p09'],
    respecUrl: `${RESPEC_BASE}#rt-p05`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p05-subsetting-api.md`,
  },
  {
    id: 'rt-p06',
    code: 'RT-P06',
    title: 'Hostwide Resource Discovery',
    shortSummary: 'Embed lean ResourceSync <rs:ln> link-relation pointers inside sitemap.xml for static or header-constrained hosts.',
    goal:
      'Provide a host-wide entry point to discover and harvest link relations and linksets when providers lack HTTP-header control or need a domain crawl bootstrap.',
    motivation:
      'Resource-level headers require knowing a starting URI and controlling server response headers. Annotating standard sitemap.xml entries (linked from robots.txt) with ResourceSync <rs:ln> elements exposes rel="linkset" and rel="profile" across static hosts with minimal overhead.',
    svgPath: './assets/patterns/rt-p06-hostwide-discovery.svg',
    encodingTitle: 'ResourceSync Sitemap (Signmap) Discovery',
    encodingLanguage: 'xml',
    encodingSnippet: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:rs="http://www.openarchives.org/rs/terms/">
  <url>
    <loc>https://marineinfo.org/id/institute/36</loc>
    <rs:ln rel="linkset"
           href="https://marineinfo.org/id/institute/36-ls.json"
           type="application/linkset+json" />
  </url>
</urlset>`,
    linkRelations: ['rel="linkset"', 'rel="profile"', 'rel="api-catalog"', 'rel="alternate"'],
    standards: ['OAI ResourceSync (Z39.99)', 'Sitemaps.org', 'RFC 9264', 'RFC 8288', 'Signmaps'],
    relatedPatternIds: ['rt-p01', 'rt-p03', 'rt-p07'],
    respecUrl: `${RESPEC_BASE}#rt-p06`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p06-hostwide-discovery.md`,
  },
  {
    id: 'rt-p07',
    code: 'RT-P07',
    title: 'Catalogue Assisted Resource Exposure',
    shortSummary: 'Hand over large-scale discovery from sitemap-index.xml to typed catalogs, LDES feeds, and RFC 9727 API catalogs.',
    goal:
      'Delegate granular discovery of large or dynamic collections from host-wide sitemaps to specialized catalogs, event streams (LDES), or query APIs marked with rel="profile" and rel="api-catalog".',
    motivation:
      'Single sitemaps cap at 50,000 entries and cannot support spatial or query-based filtering. Using a sitemapindex with <rs:ln> hand-over links to an RFC 9727 api-catalog and profiled feed endpoints lets general crawlers index cleanly while specialized harvesters switch to the native protocol.',
    svgPath: './assets/patterns/rt-p07-catalog-assistance.svg',
    encodingTitle: 'Sitemap Index Hand-Over to API Catalog & Profiled Feeds',
    encodingLanguage: 'xml',
    encodingSnippet: `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
              xmlns:rs="http://www.openarchives.org/rs/terms/">
  <sitemap>
    <loc>https://marineinfo.org/.well-known/api-catalog/api-sitemap.xml</loc>
    <rs:ln rel="self"
           href="https://marineinfo.org/.well-known/api-catalog"
           type="application/linkset+json" />
  </sitemap>
  <sitemap>
    <loc>https://marineinfo.org/sitemaps/dataset-sitemap.xml</loc>
    <rs:ln rel="self" href="https://marineinfo.org/feed/dataset" />
    <rs:ln rel="api-catalog" href="https://marineinfo.org/.well-known/api-catalog" />
  </sitemap>
</sitemapindex>`,
    linkRelations: ['rel="api-catalog"', 'rel="profile"', 'rel="collection"', 'rel="self"', 'rel="alternate"', 'rel="item"'],
    standards: ['RFC 9727', 'OAI ResourceSync', 'Sitemaps.org', 'RFC 6906', 'RFC 6573'],
    relatedPatternIds: ['rt-p01', 'rt-p03', 'rt-p05', 'rt-p06'],
    respecUrl: `${RESPEC_BASE}#rt-p07`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p07-catalog-assistance.md`,
  },
  {
    id: 'rt-p08',
    code: 'RT-P08',
    title: 'Large Linkset Split-up',
    shortSummary: 'Decompose monolithic linksets into cacheable, role-specific fragments using rel="item" and rel="collection".',
    goal:
      'Provide a standardized way to split large or multi-pattern linksets into smaller, specialized, independently cacheable linkset fragments without breaking the resource navigation map.',
    motivation:
      'When a resource weaves multiple RT patterns (profiles, conneg menus, API links), one monolithic linkset can hinder parser memory and cache invalidation. Delegating from a Master Linkset via rel="item" and linking child fragments back via rel="collection" isolates concerns cleanly.',
    svgPath: './assets/patterns/rt-p08-large-linksets.svg',
    encodingTitle: 'Master Linkset Delegation (rel="item" / rel="collection")',
    encodingLanguage: 'json',
    encodingSnippet: `{
  "linkset": [
    {
      "anchor": "https://marineinfo.org/id/institute/36",
      "item": [
        {
          "href": "https://marineinfo.org/id/institute/36/profiles.ls.json",
          "type": "application/linkset+json",
          "title": "Conformity & Profile Declarations (RT-P01/P02)"
        },
        {
          "href": "https://marineinfo.org/id/institute/36/variants.ls.json",
          "type": "application/linkset+json",
          "title": "Content Negotiation Menu (RT-P03)"
        }
      ]
    }
  ]
}`,
    linkRelations: ['rel="linkset"', 'rel="item"', 'rel="collection"'],
    standards: ['RFC 9264', 'RFC 6573', 'RFC 8288'],
    relatedPatternIds: ['rt-p01', 'rt-p02', 'rt-p03', 'rt-p05'],
    respecUrl: `${RESPEC_BASE}#rt-p08`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p08-large-linksets.md`,
  },
  {
    id: 'rt-p09',
    code: 'RT-P09',
    title: 'Release Linking',
    shortSummary: 'Navigate conceptual series, immutable releases, and version history using RFC 5829 relations.',
    goal:
      'Enable machine-actionable navigation across a resource lifecycle by linking conceptual series URIs, current releases, immutable snapshot PIDs, and predecessor versions.',
    motivation:
      'Agents need to distinguish a live "Series DOI" from an immutable "Release DOI" and detect whether a URI points to the latest or a superseded snapshot. Using RFC 5829 relations (latest-version, version-history, predecessor-version) plus schema:hasPart for versioned profiles bridges stability and evolution.',
    svgPath: './assets/patterns/rt-p09-release-links.svg',
    encodingTitle: 'Series & Release Linksets (RFC 5829)',
    encodingLanguage: 'json',
    encodingSnippet: `{
  "linkset": [
    {
      "anchor": "https://marineinfo.org/id/dataset/90/v2.1",
      "cite-as": [{ "href": "https://doi.org/10.14284/90.v2.1" }],
      "collection": [{ "href": "https://marineinfo.org/id/dataset/90" }],
      "predecessor-version": [{ "href": "https://marineinfo.org/id/dataset/90/v2.0" }],
      "version-history": [{ "href": "https://marineinfo.org/id/dataset/90/history" }]
    }
  ]
}`,
    linkRelations: ['rel="latest-version"', 'rel="version-history"', 'rel="predecessor-version"', 'rel="cite-as"', 'rel="collection"'],
    standards: ['RFC 5829', 'RFC 8574', 'RFC 6573', 'RFC 9264'],
    relatedPatternIds: ['rt-p01', 'rt-p02', 'rt-p05'],
    respecUrl: `${RESPEC_BASE}#rt-p09`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p09-release-links.md`,
  },
  {
    id: 'rt-p10',
    code: 'RT-P10',
    title: 'Detached Local Storage',
    shortSummary: 'Preserve web profiles, PIDs, and licenses for downloaded files using deterministic *.ls.json sidecar linksets.',
    goal:
      'Prevent the loss of profile compliance, provenance, and web identity when a digital asset is detached from HTTP transport onto a local filesystem without modifying the binary payload.',
    motivation:
      'Once downloaded, a file loses its HTTP headers and relies only on ambiguous syntax extensions (.json, .ttl, .csv), while mutating the file breaks checksums and legacy tools. Writing a deterministic [filename].[ext].ls.json RFC 9264 sidecar (and optional user.linkset xattr) preserves global context non-invasively.',
    cautionNote:
      'Reader’s caution: Unlike RT-P01 through RT-P09 (server-side web discovery patterns), RT-P10 is a client-side filesystem pattern for download tools, browser extensions, and local data pipelines.',
    textDiagram: `Local Filesystem Directory:
+-- filename.ext                 <-- Raw downloaded payload (untouched)
+-- filename.ext.ls.json         <-- Deterministic Sidecar (JSON Linkset, RFC 9264)
          |
          +-- anchor: "./filename.ext"
          +-- rel="profile" ------> [ <profile-uri> ]
          +-- rel="cite-as" ------> [ <doi-deref-uri> ]
          +-- rel="license" ------> [ <license-uri> ]`,
    encodingTitle: 'Deterministic Sidecar File (aphia-record-36.json.ls.json)',
    encodingLanguage: 'json',
    encodingSnippet: `{
  "linkset": [
    {
      "anchor": "./aphia-record-36.json",
      "profile": [{ "href": "https://marinespecies.org/ns/profiles/aphia-record+json" }],
      "cite-as": [{ "href": "https://doi.org/10.14284/170" }],
      "license": [{ "href": "https://creativecommons.org/licenses/by/4.0/" }],
      "alternate": [
        {
          "href": "https://marinespecies.org/id/taxname/36",
          "type": "text/turtle"
        }
      ]
    }
  ]
}`,
    linkRelations: ['rel="profile"', 'rel="cite-as"', 'rel="license"', 'rel="alternate"'],
    standards: ['RFC 9264', 'RFC 8574', 'POSIX xattr (user.linkset)'],
    relatedPatternIds: ['rt-p01', 'rt-p03', 'rt-p04'],
    respecUrl: `${RESPEC_BASE}#rt-p10`,
    githubSourceUrl: `${GITHUB_SPEC_BASE}rt-p10-detached-local-storage.md`,
  },
];

export function getPatternById(id: string): PatternItem | undefined {
  const normalized = id.trim().toLowerCase();
  return patternsData.find((p) => p.id === normalized);
}

export function getAdjacentPatterns(id: string): {
  prev: PatternItem | null;
  next: PatternItem | null;
} {
  const normalized = id.trim().toLowerCase();
  const index = patternsData.findIndex((p) => p.id === normalized);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? patternsData[index - 1] : null,
    next: index < patternsData.length - 1 ? patternsData[index + 1] : null,
  };
}
