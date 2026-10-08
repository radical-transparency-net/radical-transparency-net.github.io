import { Tenet, ComparisonColumn } from '../types';

export const tenetsData: Tenet[] = [
  {
    number: "TENET 01",
    title: "Auditable Provenance",
    description: "Every semantic crosswalk and entity alignment is cryptographically signed and open for peer inspection, utilizing PROV-O ontology specifications to track origin, curator, and modification history.",
    specLabel: "Signature Layer",
    specValue: "W3C PROV-O",
    icon: "verified_user",
  },
  {
    number: "TENET 02",
    title: "Declarative Conformity",
    description: "Profiles explicitly declare structural and semantic invariants, avoiding hidden translation assumptions. Systems evaluate machine-readable SHACL shapes rather than guessing schema bounds.",
    specLabel: "Specification",
    specValue: "SHACL Core",
    icon: "fact_check",
  },
  {
    number: "TENET 03",
    title: "Decentralized Linksets",
    description: "Reusable mapping datasets (linksets) versioned as public goods rather than locked in proprietary data silos. Cross-domain relationships are stored as persistent, resolvable RDF triplestores.",
    specLabel: "Publishing Spec",
    specValue: "VoID / DCAT-3",
    icon: "hub",
  },
  {
    number: "TENET 04",
    title: "Continuous Community",
    description: "Alignment actions with transparent issue-tracking governance, public RFC cycles, automated regression test suites, and participatory dispute resolution for ontological discrepancies.",
    specLabel: "Governance Cycle",
    specValue: "Open RFC Mode",
    icon: "published_with_changes",
  },
];

export const comparisonMatrixData: {
  closedCrosswalks: ComparisonColumn;
  radicalTransparency: ComparisonColumn;
} = {
  closedCrosswalks: {
    title: "Traditional Closed Crosswalks",
    badge: "Deprecated Paradigms",
    badgeType: "deprecated",
    items: [
      {
        title: "Opaque Mapping Definitions",
        description: "Equivalences buried inside Python/Java ETL scripts, undocumented spreadsheets, or private API layers with zero machine-readable lineage.",
      },
      {
        title: "Silent Breakages Unmonitored",
        description: "Upstream taxonomy updates degrade translations quietly. Downstream consumers experience silent null queries or semantic drift without alerts.",
      },
      {
        title: "Single Point of Failure",
        description: "Centrally maintained translation brokers create vendor lock-in, recurring infrastructure costs, and single-institution gatekeeping.",
      },
    ],
    impactLabel: "Impact on European Science",
    impactText: "High risk of irreproducible science, unresolvable citations, and wasted duplicated effort across member states.",
  },
  radicalTransparency: {
    title: "Radical Transparency Model",
    badge: "EOSC Standard Baseline",
    badgeType: "standard",
    items: [
      {
        title: "Public RDF Linksets",
        description: "Canonical triples published with unambiguous SKOS mapping properties (exactMatch, closeMatch) and machine-accessible PURLs.",
      },
      {
        title: "Automated Validation Runs",
        description: "Continuous CI/CD semantic pipelines test mappings against evolving ontologies; breaking changes generate automated GitHub notifications and rollbacks.",
      },
      {
        title: "Peer-Audited Alignment Histories",
        description: "Distributed git lineage lets any research community fork, suggest patches, and evaluate consensus metrics through open peer review.",
      },
    ],
    impactLabel: "Impact on European Science",
    impactText: "Guaranteed long-term reproducibility, autonomous interoperability between national clusters, and full adherence to the EOSC Interoperability Framework.",
  },
};

export const sampleLineageTurtle = `@prefix void: <http://rdfs.org/ns/void#> .
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix eosc: <https://purl.org/eosc/interop/terms#> .

<https://purl.org/eosc/linksets/env-life-v2> a void:Linkset ;
    void:subjectsTarget   <https://vocabs.lter-europe.net/env_thes> ;
    void:objectsTarget    <http://purl.obolibrary.org/obo/envo.owl> ;
    void:linkPredicate    <http://www.w3.org/2004/02/skos/core#exactMatch> ;
    eosc:conformityProfile <https://purl.org/eosc/profiles/v2/strict-shacl> ;
    prov:wasGeneratedBy   [ prov:wasAssociatedWith <https://orcid.org/0000-0002-1825-0097> ;
                            prov:endedAtTime "2025-03-01T10:00:00Z"^^xsd:dateTime ] .`;
