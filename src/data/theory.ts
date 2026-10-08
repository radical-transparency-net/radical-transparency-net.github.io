import { Tenet, ComparisonColumn } from '../types';

export const tenetsData: Tenet[] = [
  {
    number: "TENET 01",
    title: "(DRAFT) Auditable Provenance",
    description: "(DRAFT) Every semantic crosswalk and entity alignment is cryptographically signed and open for peer inspection, utilizing PROV-O ontology specifications to track origin, curator, and modification history.",
    specLabel: "(DRAFT) Signature Layer",
    specValue: "W3C PROV-O",
    icon: "verified_user",
  },
  {
    number: "TENET 02",
    title: "(DRAFT) Declarative Conformity",
    description: "(DRAFT) Profiles explicitly declare structural and semantic invariants, avoiding hidden translation assumptions. Systems evaluate machine-readable SHACL shapes rather than guessing schema bounds.",
    specLabel: "(DRAFT) Specification",
    specValue: "SHACL Core",
    icon: "fact_check",
  },
  {
    number: "TENET 03",
    title: "(DRAFT) Decentralized Linksets",
    description: "(DRAFT) Reusable mapping datasets (linksets) versioned as public goods rather than locked in proprietary data silos. Cross-domain relationships are stored as persistent, resolvable RDF triplestores.",
    specLabel: "(DRAFT) Publishing Spec",
    specValue: "VoID / DCAT-3",
    icon: "hub",
  },
  {
    number: "TENET 04",
    title: "(DRAFT) Continuous Community",
    description: "(DRAFT) Alignment actions with transparent issue-tracking governance, public RFC cycles, automated regression test suites, and participatory dispute resolution for ontological discrepancies.",
    specLabel: "(DRAFT) Governance Cycle",
    specValue: "Open RFC Mode",
    icon: "published_with_changes",
  },
];

export const comparisonMatrixData: {
  closedCrosswalks: ComparisonColumn;
  radicalTransparency: ComparisonColumn;
} = {
  closedCrosswalks: {
    title: "(DRAFT) Traditional Closed Crosswalks",
    badge: "(DRAFT) Deprecated Paradigms",
    badgeType: "deprecated",
    items: [
      {
        title: "(DRAFT) Opaque Mapping Definitions",
        description: "Equivalences buried inside Python/Java ETL scripts, undocumented spreadsheets, or private API layers with zero machine-readable lineage.",
      },
      {
        title: "(DRAFT) Silent Breakages Unmonitored",
        description: "Upstream taxonomy updates degrade translations quietly. Downstream consumers experience silent null queries or semantic drift without alerts.",
      },
      {
        title: "(DRAFT) Single Point of Failure",
        description: "Centrally maintained translation brokers create vendor lock-in, recurring infrastructure costs, and single-institution gatekeeping.",
      },
    ],
    impactLabel: "(DRAFT) Impact on Open Science",
    impactText: "(DRAFT) High risk of irreproducible science, unresolvable citations, and wasted duplicated effort across organizations.",
  },
  radicalTransparency: {
    title: "(DRAFT) Radical Transparency Model",
    badge: "(DRAFT) Standard Baseline",
    badgeType: "standard",
    items: [
      {
        title: "(DRAFT) Public RDF Linksets",
        description: "Canonical triples published with unambiguous SKOS mapping properties (exactMatch, closeMatch) and machine-accessible PURLs.",
      },
      {
        title: "(DRAFT) Automated Validation Runs",
        description: "Continuous CI/CD semantic pipelines test mappings against evolving ontologies; breaking changes generate automated GitHub notifications and rollbacks.",
      },
      {
        title: "(DRAFT) Peer-Audited Alignment Histories",
        description: "Distributed git lineage lets any research community fork, suggest patches, and evaluate consensus metrics through open peer review.",
      },
    ],
    impactLabel: "(DRAFT) Impact on Open Science",
    impactText: "(DRAFT) Guaranteed long-term reproducibility, autonomous interoperability between national clusters, and full adherence to open science frameworks.",
  },
};

export const sampleLineageTurtle = `@prefix lorem: <http://example.org/lorem/ns#> .
@prefix ipsum: <http://example.org/ipsum/ns#> .
@prefix dolor: <http://example.org/dolor/terms#> .

<http://example.org/lorem/linkset/sample-01> a lorem:LoremLinkset ;
    lorem:subjectsTarget    <http://example.org/vocab/lorem-a> ;
    lorem:objectsTarget     <http://example.org/vocab/ipsum-b> ;
    lorem:linkPredicate     <http://www.w3.org/2004/02/skos/core#exactMatch> ;
    dolor:conformityProfile <http://example.org/profiles/lorem-shacl> ;
    ipsum:wasGeneratedBy    [ ipsum:wasAssociatedWith <http://example.org/author/lorem-curator> ;
                              ipsum:endedAtTime "2026-10-08T00:00:00Z"^^xsd:dateTime ] .`;
