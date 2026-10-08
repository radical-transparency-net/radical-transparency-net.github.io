import { StatItem, ProposalSpotlight } from '../types';

export const pulseStatsData: StatItem[] = [
  {
    value: "7 Core",
    label: "(DRAFT) Architectural Docs",
    icon: "description",
    color: "text-on-surface",
  },
  {
    value: "Active",
    label: "(DRAFT) Alignment Protocols",
    icon: "sync_alt",
    color: "text-secondary",
  },
  {
    value: "Open Spec",
    label: "(DRAFT) Compliant Linksets",
    icon: "fact_check",
    color: "text-on-tertiary-container",
  },
  {
    value: "100%",
    label: "(DRAFT) Open Access & Code",
    icon: "lock_open",
    color: "text-on-surface",
  },
];

export const proposalSpotlightsData: ProposalSpotlight[] = [
  {
    id: "spotlight-01",
    category: "(DRAFT) Proposal Core",
    fileType: "markdown",
    title: "Lorem Ipsum: Rationale & Motivation",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    uri: "URI: /proposals/001-lorem-motivation",
    status: "(DRAFT) Status: Adopted Baseline",
    statusColor: "text-on-tertiary-container",
    docUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency",
  },
  {
    id: "spotlight-02",
    category: "(DRAFT) Interoperability Model",
    fileType: "schema",
    title: "Lorem Ipsum: Conformity Profiles Spec",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
    uri: "URI: /proposals/002-lorem-conformity",
    status: "(DRAFT) Status: Active RFC",
    statusColor: "text-secondary",
    docUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency",
  },
  {
    id: "spotlight-03",
    category: "(DRAFT) Triplestore Spec",
    fileType: "sparql/dcat",
    title: "Lorem Ipsum: Linkset Patterns",
    description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    uri: "URI: /proposals/003-lorem-linksets",
    status: "(DRAFT) Status: Stable v1.1",
    statusColor: "text-on-tertiary-container",
    docUrl: "https://github.com/eosc-semantic-interop/if-solutions-proposals/tree/main/proposals/radical-transparency",
  },
];
