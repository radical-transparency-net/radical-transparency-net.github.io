import { Tenet, ComparisonColumn } from '../types';

export const tenetsData: Tenet[] = [
  {
    number: 'TENET 01',
    title: 'Explicit Declarations',
    description:
      'Digital assets publish profile conformity, variant menus, and structural links directly in HTTP headers, RFC 9264 linksets, and sitemaps.',
    specLabel: 'Foundation',
    specValue: 'RT-P01–P10',
    icon: 'verified_user',
  },
  {
    number: 'TENET 02',
    title: 'Independent Verification',
    description:
      'Profile URIs resolve to dereferenceable descriptions so clients can test conformance deterministically instead of guessing schemas.',
    specLabel: 'Relation',
    specValue: 'RFC 6906',
    icon: 'fact_check',
  },
  {
    number: 'TENET 03',
    title: 'Standardized Linksets',
    description:
      'Variant menus, API contexts, and split fragments reuse RFC 9264 JSON and text linkset formats across transport and local storage.',
    specLabel: 'Transport',
    specValue: 'RFC 9264',
    icon: 'hub',
  },
  {
    number: 'TENET 04',
    title: 'Measurable Progress',
    description:
      'Objective verification traces allow infrastructures to track interoperability adoption over time using open standards.',
    specLabel: 'Lifecycle',
    specValue: 'Declare · Verify · Quantify',
    icon: 'published_with_changes',
  },
];

export const comparisonMatrixData: {
  closedCrosswalks: ComparisonColumn;
  radicalTransparency: ComparisonColumn;
} = {
  closedCrosswalks: {
    title: 'Assumed Compatibility',
    badge: 'Implicit Assumptions',
    badgeType: 'deprecated',
    items: [
      {
        title: 'Undocumented Payloads',
        description:
          'Consumers infer schemas and units from heuristics or private documentation rather than machine-readable profile headers.',
      },
      {
        title: 'Broken Redirection Chains',
        description:
          'HTTP 303 redirects strand machine agents on a single variant without visibility into alternative formats or conceptual identity.',
      },
      {
        title: 'Detached File Context',
        description:
          'Downloaded datasets lose HTTP transport headers, leaving only ambiguous syntax extensions on disk.',
      },
    ],
    impactLabel: 'Operational Cost',
    impactText: 'Statistical guesswork, fragile scrapers, and loss of provenance across automated pipelines.',
  },
  radicalTransparency: {
    title: 'Radical Transparency Declare Layer',
    badge: 'RT-P01 to RT-P10',
    badgeType: 'standard',
    items: [
      {
        title: 'Explicit Profile & Variant Links',
        description:
          'RFC 6906 rel="profile" and RFC 9264 variant menus expose norms and representations directly at the transport layer.',
      },
      {
        title: 'Restored Identity Anchors',
        description:
          'rel="self", rel="cite-as", and rel="collection" keep fragments, PIDs, and API endpoints linked.',
      },
      {
        title: 'Non-Invasive Local Sidecars',
        description:
          'RT-P10 preserves global profile and license assertions beside downloaded payloads via *.ls.json sidecars.',
      },
    ],
    impactLabel: 'Operational Outcome',
    impactText: 'Deterministic discovery and verifiable conformance across crawlers, APIs, and local storage.',
  },
};

export const sampleLineageTurtle = `@prefix rtwl: <https://w3id.org/rt/ns/weblink#> .

_:link1 a rtwl:WebLink ;
    rtwl:anchor <https://marineinfo.org/id/dataset/90> ;
    rtwl:rel "profile" ;
    rtwl:href <https://semiceu.github.io/DCAT-AP/> .`;
