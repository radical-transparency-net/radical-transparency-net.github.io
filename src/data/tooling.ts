import { SpecCard, SdkItem, ValidationProfile } from '../types';

export const cliTerminalData = {
  command: "npx @lorem/rt-cli validate --linkset ./lorem/sample.ttl --profile ./lorem/profile.json --verbose",
  infoMessage: "[LOREM] Resolving lorem ipsum schema & constraints...",
  outputLines: [
    "> Checking lorem mapping table: 1,234 predicates",
    "> Validating lorem resolution matrix: OK (200)",
  ],
  passBadge: "LOREM: PASS (Lorem Ipsum Audit)",
  duration: "42ms",
};

export const specCardsData: SpecCard[] = [
  {
    id: "spec-01",
    badge: "Lorem · Ipsum · Spec",
    title: "Lorem Ipsum Conformity Engine",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    targetUri: "example.org/lorem/cp/v1/core.shacl",
    specUrl: "#/developer",
    icon: "verified_user",
  },
  {
    id: "spec-02",
    badge: "Lorem · Linkset · Pattern",
    title: "Lorem Ipsum Linkset Patterns",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa. Vestibulum lacinia arcu eget nulla.",
    targetUri: "example.org/lorem/linkset-adapter",
    specUrl: "#/developer",
    icon: "hub",
  },
  {
    id: "spec-03",
    badge: "Lorem · Automation · Workflow",
    title: "Lorem Ipsum Action Automations",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    targetUri: "actions/lorem-check@v1",
    specUrl: "#/developer",
    icon: "sync_alt",
  },
];

export const sdkCardsData: SdkItem[] = [
  {
    langCode: "Py",
    name: "lorem-rt-py",
    version: "v1.0.0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet.",
    installCmd: "pip install lorem-rt-py",
    docsUrl: "#",
    badgeText: "PyPI · Placeholder",
  },
  {
    langCode: "Rs",
    name: "lorem-core-rs",
    version: "v0.1.0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris massa. Vestibulum lacinia arcu eget nulla per conubia nostra.",
    installCmd: "cargo add lorem-core-rs",
    docsUrl: "#",
    badgeText: "crates.io · Placeholder",
  },
  {
    langCode: "TS",
    name: "@lorem/rt-sdk",
    version: "v1.0.0",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
    installCmd: "npm install @lorem/rt-sdk",
    docsUrl: "#",
    badgeText: "npm · Placeholder",
  },
];

export const playgroundProfilesData: ValidationProfile[] = [
  {
    id: "lorem-profile-01",
    name: "Lorem Ipsum Profile Alpha (SHACL)",
    defaultCode: `@prefix lorem: <http://example.org/lorem/ns#> .
@prefix ipsum: <http://example.org/ipsum/ns#> .
@prefix dolor: <http://example.org/dolor/terms#> .

<http://example.org/lorem/linkset/sample-01>
    a lorem:Linkset ;
    dolor:title "Lorem Ipsum Alignment Declaration" ;
    dolor:license <https://creativecommons.org/licenses/by/4.0/> ;
    lorem:subjectsTarget <http://example.org/vocab/alpha> ;
    lorem:objectsTarget <http://example.org/vocab/beta> ;
    lorem:linkPredicate ipsum:exactMatch ;
    lorem:triples 1234 ;
    lorem:transparencyRating "A+"^^lorem:Grade .`,
    checks: [
      { name: "Lorem Target Class Check", detail: "lorem:Linkset conforms to shape #LoremShape", status: "pass" },
      { name: "Lorem License Declaration", detail: "Lorem Ipsum IRI validated (200 OK)", status: "pass" },
      { name: "Lorem Lineage Verification", detail: "Lorem hash verified on git remote", status: "pass" },
      { name: "Lorem Closure Health", detail: "0 contradictions detected in 1,234 mappings", status: "pass" },
    ],
  },
  {
    id: "lorem-profile-02",
    name: "Lorem Ipsum Profile Beta (Matrix)",
    defaultCode: `@prefix lorem: <http://example.org/lorem/ns#> .
@prefix ipsum: <http://example.org/ipsum/ns#> .

<http://example.org/lorem/mapping/sample-02>
    a lorem:MappingSet ;
    lorem:mapping_set_id "http://example.org/lorem/set-02" ;
    lorem:license <https://creativecommons.org/licenses/by/4.0/> ;
    lorem:tool "lorem-cli v1.0.0" .`,
    checks: [
      { name: "Lorem Required Headers", detail: "mapping_set_id and license declared", status: "pass" },
      { name: "Lorem Predicate Validity", detail: "Lorem properties verified against schema", status: "pass" },
      { name: "Lorem Score Bounds", detail: "All confidence scores normalized between [0.0, 1.0]", status: "pass" },
    ],
  },
  {
    id: "lorem-profile-03",
    name: "Lorem Ipsum Profile Gamma (Minimum)",
    defaultCode: `@prefix lorem: <http://example.org/lorem/ns#> .

<http://example.org/lorem/linkset/basic-sample>
    a lorem:Linkset ;
    lorem:subjectsTarget <http://example.org/dataset/alpha> ;
    lorem:objectsTarget <http://example.org/dataset/beta> .`,
    checks: [
      { name: "Lorem Minimum Targets", detail: "subjectsTarget and objectsTarget resolved", status: "pass" },
      { name: "Lorem Endpoint Resolution", detail: "Endpoint metadata online with HTTP 200", status: "pass" },
    ],
  },
];
