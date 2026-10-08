import { SpecCard, SdkItem, ValidationProfile } from '../types';

export const cliTerminalData = {
  command: "npx @eosc-interop/rt-cli validate --linkset ./mappings/chem-mesh.ttl --conformity ./profiles/v1.json --verbose",
  infoMessage: "[INFO] Resolving VoID linkset schema & SHACL constraints...",
  outputLines: [
    "> Checking SSSOM mapping table: 1,842 predicates",
    "> Validating DOI / PURL resolution matrix: OK (200)",
  ],
  passBadge: "CONFORMITY: PASS (100% Provenance Audit)",
  duration: "98ms",
};

export const specCardsData: SpecCard[] = [
  {
    id: "spec-01",
    badge: "SHACL · ShEx · JSON-LD",
    title: "Conformity Profiles Engine",
    description: "Strict shape topologies guaranteeing semantic fidelity, schema parity, and required licensing tags across all federation nodes before publication.",
    targetUri: "purl.org/eosc/cp/v2.1/core.shacl",
    specUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals",
    icon: "verified_user",
  },
  {
    id: "spec-02",
    badge: "VoID · SSSOM · SPARQL",
    title: "Linkset Usage Patterns",
    description: "Architectural blueprints to serialize VoID partition linksets, SSSOM TSV mapping tables, and construct SPARQL 1.1 query graphs with deterministic URIs.",
    targetUri: "eosc-interop/void-sssom-adapter",
    specUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals",
    icon: "hub",
  },
  {
    id: "spec-03",
    badge: "CI / CD · GitHub Actions",
    title: "Alignment Actions Automations",
    description: "Drop-in GitHub Action workflows executing semantic regression testing, triple drift analysis, and provenance hashes whenever target vocabularies bump versions.",
    targetUri: "actions/eosc-semantic-check@v2",
    specUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals",
    icon: "sync_alt",
  },
];

export const sdkCardsData: SdkItem[] = [
  {
    langCode: "Py",
    name: "eosc-rt-py",
    version: "v1.8.2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet.",
    installCmd: "pip install eosc-rt-py",
    docsUrl: "#",
    badgeText: "PyPI · Placeholder",
  },
  {
    langCode: "Rs",
    name: "rt-core-rs",
    version: "v0.9.4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra.",
    installCmd: "cargo add rt-core-rs",
    docsUrl: "#",
    badgeText: "crates.io · Placeholder",
  },
  {
    langCode: "TS",
    name: "@eosc-interop/rt-sdk",
    version: "v2.4.0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh felis tempor.",
    installCmd: "npm install @eosc-interop/rt-sdk",
    docsUrl: "#",
    badgeText: "npm · Placeholder",
  },
];

export const playgroundProfilesData: ValidationProfile[] = [
  {
    id: "eosc-core-v2.1",
    name: "EOSC-Semantic-Core v2.1 (Full SHACL)",
    defaultCode: `@prefix void: <http://rdfs.org/ns/void#> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .
@prefix dct: <http://purl.org/dc/terms/> .
@prefix eosc: <http://purl.org/eosc/interop/terms/> .

<https://purl.org/eosc/linksets/mesh-chebi-2025>
    a void:Linkset ;
    dct:title "MeSH to ChEBI Radical Transparency Alignment" ;
    dct:license <https://creativecommons.org/licenses/by/4.0/> ;
    void:subjectsTarget <http://id.nlm.nih.gov/mesh> ;
    void:objectsTarget <http://purl.obolibrary.org/obo/chebi> ;
    void:linkPredicate skos:exactMatch ;
    void:triples 1842 ;
    eosc:provenanceChain <https://github.com/eosc-semantic-interop/crosswalk-chem/commit/7a2f1b> ;
    eosc:transparencyRating "A+"^^eosc:ConformityGrade .`,
    checks: [
      { name: "SHACL Target Class Check", detail: "void:Linkset conforms to shape #EoscLinksetShape", status: "pass" },
      { name: "Open Data License Enforced", detail: "CC-BY 4.0 (Authoritative IRI validated)", status: "pass" },
      { name: "Immutable Lineage Tracking", detail: "SHA-1 Git commit verified on github remote", status: "pass" },
      { name: "Transitive Closure Health", detail: "0 circular contradictions detected in 1,842 mappings", status: "pass" },
    ],
  },
  {
    id: "sssom-strict",
    name: "SSSOM Strict Metadata Matrix 1.0",
    defaultCode: `@prefix sssom: <https://w3id.org/sssom/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

<https://purl.org/eosc/sssom/mapping-01>
    a sssom:MappingSet ;
    sssom:mapping_set_id "https://purl.org/eosc/sssom/chem-01" ;
    sssom:license "https://creativecommons.org/licenses/by/4.0/" ;
    sssom:mapping_tool "rt-cli v2.4.0" .`,
    checks: [
      { name: "SSSOM Required Headers", detail: "mapping_set_id and license fields declared", status: "pass" },
      { name: "Predicate Terminology Validity", detail: "SKOS mapping properties verified against schema", status: "pass" },
      { name: "Confidence Score Bounds", detail: "All similarity scores normalized between [0.0, 1.0]", status: "pass" },
    ],
  },
  {
    id: "void-federation",
    name: "VoID Transitive Linkset Minimum",
    defaultCode: `@prefix void: <http://rdfs.org/ns/void#> .

<https://purl.org/eosc/linksets/basic-sample>
    a void:Linkset ;
    void:subjectsTarget <https://example.org/datasetA> ;
    void:objectsTarget <https://example.org/datasetB> .`,
    checks: [
      { name: "VoID Minimum Targets", detail: "subjectsTarget and objectsTarget resolved", status: "pass" },
      { name: "SPARQL Endpoint Resolution", detail: "Endpoint metadata online with HTTP 200", status: "pass" },
    ],
  },
];
