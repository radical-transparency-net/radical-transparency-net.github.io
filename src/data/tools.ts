import { ToolItem } from '../types';

export const toolsBetaNotice = {
  label: 'Beta Development',
  title: 'Tools in Active Beta Development — Not Yet Fully Released',
  message:
    'These tools are not yet fully released and remain in beta development. Interfaces, CLI flags, output formats, and pattern coverage may change before a stable release.',
};

export const toolsData: ToolItem[] = [
  {
    id: 'webmap-er',
    name: 'webmap-ER',
    tagline: 'Visual RT-Pattern Diagnostics & Remediation Workbench',
    status: 'Beta — Not Fully Released',
    category: 'Browser Application',
    summary:
      'A browser-based diagnostic and authoring workbench that helps data stewards inspect web-linking topologies, detect RT-pattern gaps, and generate conforming link configurations.',
    description:
      'webmap-ER ("Emergency Room") runs entirely client-side as a static web application. In Resource-First ER Triage mode, it probes a target URI using embedded wrx extraction, scores declared link relations against Radical Transparency expectations, and walks users through a didactic questionnaire to diagnose missing declarations. In Pattern-Driven Wizard mode, users construct pattern-compliant configurations from scratch and export HTTP Link headers, RFC 9264 linksets, XML sitemaps with link hints, rt-test YAML checks, or IT remediation tickets.',
    capabilities: [
      'Client-side URI probing and interactive link-topology graph visualization',
      'Resource-First ER Triage and Pattern-Driven Wizard authoring modes',
      'Built-in dataset presets (ARMS-MBON, EurOBIS, North Sea Sensor Buoy) for zero-typing exploration',
      'Shareable session history encoded in the URL fragment (#gz=...) with undo/redo',
      'Exportable HTTP Link headers, RFC 9264 JSON linksets, sitemaps, rt-test YAML, and IT tickets',
    ],
    quickstartTitle: 'Open Live Beta App or Run Locally',
    quickstartLanguage: 'bash',
    quickstartSnippet: `git clone https://github.com/radical-transparency-net/webmap-ER.git
cd webmap-ER
npm install
npm run dev`,
    relatedPatternIds: ['rt-p01', 'rt-p03', 'rt-p04', 'rt-p05', 'rt-p06', 'rt-p08'],
    repoUrl: 'https://github.com/radical-transparency-net/webmap-ER',
    liveUrl: 'https://radical-transparency-net.github.io/webmap-ER/',
  },
  {
    id: 'lod-docker-webserver',
    name: 'lod_docker_webserver',
    tagline: 'Containerized LOD Discovery & Compliance Testbed',
    status: 'Beta — Not Fully Released',
    category: 'Docker Testbed',
    summary:
      'A Dockerized Nginx and static-site generator testbed serving 150 simulated resources across 30 Linked Open Data discovery strategies for reproducible crawler testing.',
    description:
      'lod_docker_webserver generates and serves a deterministic benchmark environment covering a 2×2 discovery taxonomy: Resource-Level vs. Domain-Level discovery crossed with Direct RDF vs. Inferenced RDF extraction. Served behind Nginx with explicit content-negotiation headers, .well-known/lod-catalog, OAI-ORE resource maps, sitemaps, and RSS/Atom feeds, it acts as the ground-truth test target for extraction engines such as wrx.',
    capabilities: [
      'Generates 150 simulated resource pages covering 30 distinct LOD discovery strategies',
      'Implements a 2×2 classification matrix (Resource vs. Domain × Direct vs. Inferenced RDF)',
      'Preconfigured Nginx routing, MIME types, and HTTP Link / content-negotiation headers',
      'Exposes .well-known/lod-catalog, resource-map.json, sitemap.xml, robots.txt, and RSS/Atom feeds',
      'Reproducible single-command Docker Compose deployment on port 8080',
    ],
    quickstartTitle: 'Build & Run Containerized Testbed with Docker Compose',
    quickstartLanguage: 'bash',
    quickstartSnippet: `git clone https://github.com/radical-transparency-net/lod_docker_webserver.git
cd lod_docker_webserver
docker compose up --build
# Testbed dashboard available at http://localhost:8080/`,
    relatedPatternIds: ['rt-p01', 'rt-p03', 'rt-p06', 'rt-p07'],
    repoUrl: 'https://github.com/radical-transparency-net/lod_docker_webserver',
  },
  {
    id: 'wrx',
    name: 'wrx',
    tagline: 'Cascading URI-to-RDF Metadata & Link Relation Extractor',
    status: 'Beta — Not Fully Released',
    category: 'CLI & TypeScript Library (Bun)',
    summary:
      'A TypeScript/Bun library and CLI tool that navigates from any web URI to RDF metadata and typed web-link relations via a cascading discovery pipeline.',
    description:
      'wrx (Web Resource Extraction) implements a cascading discovery pipeline across HTTP resources: content negotiation (RDF serializations), FAIR Signposting HTTP Link headers and HTML <link> tags, RFC 9264 linkset resolution, embedded HTML RDF scripts, and sitemap/DCAT fallbacks. In addition to extractRDF(uri), it exports extractLinkRelations(uri) to harvest modeled web-link relations (such as describedby, cite-as, item, license, and author) and report discovered profile URIs.',
    capabilities: [
      'Cascading extraction across content negotiation, HTTP/HTML Signposting, RFC 9264 linksets, embedded RDF, and sitemaps',
      'CLI modes for first-match discovery, exhaustive inspection (--all), and file serialization (--output)',
      'Profile discovery (--profile) across Link headers, link-extension attributes, and rel="profile" targets',
      'Web-link relation harvesting via extractLinkRelations(uri) and --extend-links output',
      'Companion browser playground hosted on GitHub Pages for inspecting extraction traces and provenance',
    ],
    quickstartTitle: 'Run wrx CLI (Bun Runtime)',
    quickstartLanguage: 'bash',
    quickstartSnippet: `# First-match RDF extraction
bun run wrx.js https://example.org/dataset

# Explore all strategies with profile and link-relation reporting
bun run wrx.js --all --extend-links --profile https://example.org/dataset`,
    relatedPatternIds: ['rt-p01', 'rt-p02', 'rt-p03', 'rt-p04', 'rt-p06'],
    repoUrl: 'https://github.com/radical-transparency-net/wrx',
    liveUrl: 'https://radical-transparency-net.github.io/wrx/',
  },
];

export function getToolById(id: string): ToolItem | undefined {
  const normalized = id.trim().toLowerCase();
  return toolsData.find((t) => t.id === normalized);
}
