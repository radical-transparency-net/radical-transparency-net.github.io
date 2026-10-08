import { PlaybookTrack, EventItem, RoadmapPhase, ChannelItem } from '../types';

export const playbookTracksData: PlaybookTrack[] = [
  {
    id: "track-a",
    trackCode: "Track A",
    badge: "(DRAFT) Institutional",
    badgeColor: "text-secondary",
    title: "(DRAFT) For Research Institutions & Libraries",
    description: "(DRAFT) Architectural playbooks for academic leadership, research managers, and technical library teams operationalizing cross-border compliance.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHStto0BR7ibRd_YAMS6aV6pwe0MJjCKan76SH0qtPku2BKKjioJi-pA8gNsDY-tunphCmnNl0EEGaGvIjJcmsOC9818iz9Haz0f9lsao8LCm5fkcKBeJfUybNNTRBQ0dnUBYTmuiLENlFESQxRd9tz8Pfp3XEEiyz3Jqb2cJXVkb4zTC6C6IulPjdMbqragUxywORxnXH__JUv9Dx123xDrM1leHV8Rf4bzyM1Afr",
    imageAlt: "Research institution library",
    items: [
      {
        icon: "verified_user",
        title: "Lorem Ipsum Audit Playbook",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pellentesque.",
      },
      {
        icon: "policy",
        title: "Lorem Ipsum Licensing Checklists",
        description: "Curabitur sodales ligula in libero. Sed dignissim lacinia nunc curabitur.",
      },
      {
        icon: "school",
        title: "Lorem Ipsum Certification Modules",
        description: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus aenean leo.",
      },
    ],
    ctaText: "(DRAFT) Access Institutional Kit",
  },
  {
    id: "track-b",
    trackCode: "Track B",
    badge: "(DRAFT) Domain Science",
    badgeColor: "text-on-tertiary-container",
    title: "(DRAFT) For Domain Scientists & Working Groups",
    description: "(DRAFT) Direct semantic pipelines designed for disciplinary working groups needing actionable linksets and vocabulary reconciliation.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9_716_zmQH_upJKjBaS117rsBA45KfNZ2hJMgC31VIpJclDYmZIShy7RdVDZUPzQjd0W4OI9KL-brev0IaOzD7_GsSJ8n-i7bN2lY4gJ8FWx02vVXuWc2Y2cVJ-EIvf7nhjLs7bCiAAxWNBaPDKGH9YldCCwLH29l-1zOewF_vyebYs1R7PclyIsYREJqogTQH4MA_uv4xH6_xwkupXtrlxFPahnf6REYvn4GqtNn",
    imageAlt: "Domain science research",
    items: [
      {
        icon: "schema",
        title: "Lorem Ipsum Formulation Guides",
        description: "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum aenean.",
      },
      {
        icon: "rate_review",
        title: "Lorem Ipsum Peer-Review Procedures",
        description: "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi nam.",
      },
      {
        icon: "event",
        title: "Lorem Ipsum Working Group Clinics",
        description: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu enim.",
      },
    ],
    ctaText: "(DRAFT) Explore Domain Playbook",
  },
  {
    id: "track-c",
    trackCode: "Track C",
    badge: "(DRAFT) Advocacy",
    badgeColor: "text-secondary",
    title: "(DRAFT) For Open Science Champions",
    description: "(DRAFT) Outreach collateral, narrative templates, and presentation assets enabling community evangelists to present Radical Transparency locally.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgYokTWgOGUszfqSGLVyjvLMQl74pDCIG47UbfbTtMTSAYb9C46XYnnCrcJSTm2pixkG0rk4rJY5w1HBsku4zAelC_1dZaa1WTYJxm6b3y67w0IdJiX6p9H1GTVAv3E2cfj1kQJ-KlK9ypHqwqfjpo0bl_mtCUlP_bKCLUeiTMMtia45qOXGLtOoQXR-WdJZJX3uBv64_DJXp7WffIvQKURSaXvGn8mHm7NaSna4f2",
    imageAlt: "Open science champions",
    items: [
      {
        icon: "slideshow",
        title: "Lorem Ipsum Keynote Slide Decks",
        description: "Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna sed.",
      },
      {
        icon: "summarize",
        title: "Lorem Ipsum Briefing One-Pagers",
        description: "Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus phasellus.",
      },
      {
        icon: "groups",
        title: "Lorem Ipsum Meetup Runbooks",
        description: "Praesent adipiscing. Integer tincidunt. Cras dapibus. Vivamus elementum.",
      },
    ],
    ctaText: "(DRAFT) Download Champion Kit (.zip)",
  },
];

export const upcomingEventsData: EventItem[] = [
  {
    id: "event-01",
    type: "Webinar",
    date: "Oct 24, 2026",
    title: "Lorem Ipsum: Demystifying Semantic Interoperability",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    locationOrStatus: "(DRAFT) Registration Open",
    actionText: "(DRAFT) Register",
    tagColor: "text-on-tertiary-container",
  },
  {
    id: "event-02",
    type: "Hybrid Hackathon",
    date: "Nov 12, 2026",
    title: "Lorem Ipsum: Hands-on Linkset Curation Hackathon",
    description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    locationOrStatus: "(DRAFT) Hybrid / Online",
    actionText: "(DRAFT) Apply for Seat",
    tagColor: "text-secondary",
  },
];

export const roadmapPhasesData: RoadmapPhase[] = [
  {
    phaseNumber: "PHASE 01",
    status: "completed",
    statusLabel: "(DRAFT) Completed",
    title: "(DRAFT) Foundation & Awareness",
    period: "Q1 - Q2 2026",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
    milestones: [
      { title: "Lorem Ipsum Proposal Launch", status: "done" },
      { title: "Lorem Ipsum Symposium Plenary", status: "done" },
      { title: "Lorem Ipsum Whitepaper v1.0", status: "done" },
      { title: "Lorem Ipsum Beta CLI Tooling", status: "done" },
    ],
  },
  {
    phaseNumber: "PHASE 02",
    status: "in-progress",
    statusLabel: "(DRAFT) In Progress",
    title: "(DRAFT) Pilot Adoptions & Early Birds",
    period: "Q3 2026 (Active)",
    description: "Sed cursus ante dapibus diam. Sed nisi nulla quis sem at nibh elementum imperdiet.",
    milestones: [
      { title: "Lorem Ipsum Cluster Ingestion", status: "active" },
      { title: "Lorem Ipsum Data Triplestore Linkset", status: "active" },
      { title: "Lorem Ipsum Social Sciences Pilot", status: "pending" },
      { title: "Lorem Ipsum Automated Regression Test", status: "pending" },
    ],
  },
  {
    phaseNumber: "PHASE 03",
    status: "upcoming",
    statusLabel: "(DRAFT) Upcoming",
    title: "(DRAFT) Multi-Stakeholder Evangelism",
    period: "Q4 2026",
    description: "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    milestones: [
      { title: "Lorem Ipsum National Agency Briefs", status: "pending" },
      { title: "Lorem Ipsum Compliance Dashboards", status: "pending" },
      { title: "Lorem Ipsum Pan-European Webinar Series", status: "pending" },
      { title: "Lorem Ipsum Federation Showcase", status: "pending" },
    ],
  },
  {
    phaseNumber: "PHASE 04",
    status: "planned",
    statusLabel: "(DRAFT) Target Baseline",
    title: "(DRAFT) Standardization & Integration",
    period: "2027+",
    description: "Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.",
    milestones: [
      { title: "Lorem Ipsum Core Baseline Spec", status: "locked" },
      { title: "Lorem Ipsum Working Group Liaison", status: "locked" },
      { title: "Lorem Ipsum Autonomous Schema Resolvers", status: "locked" },
      { title: "Lorem Ipsum Global Research Graph Ingestion", status: "locked" },
    ],
  },
];

export const stakeholderChannelsData: ChannelItem[] = [
  {
    icon: "forum",
    iconBgColor: "bg-surface-container-high text-secondary",
    title: "(DRAFT) Bi-Weekly Open Office Hours",
    description: "(DRAFT) Live voice & screen sharing on Discord & Matrix every alternate Thursday at 14:00 CET.",
    metaText: "(DRAFT) Next: Thu, 14:00 CET",
    ctaText: "(DRAFT) Join Server",
    url: "#",
    accentColor: "text-secondary",
  },
  {
    icon: "task_alt",
    iconBgColor: "bg-surface-container-high text-on-tertiary-container",
    title: "(DRAFT) GitHub Discussions Triage",
    description: "(DRAFT) Public triage board tracking Requests for Comment (RFC), ontology issues, and bugs.",
    metaText: "(DRAFT) SLA: < 48h Response",
    ctaText: "(DRAFT) View Board",
    url: "https://github.com/eosc-semantic-interop/if-solutions-proposals",
    accentColor: "text-on-tertiary-container",
  },
  {
    icon: "newspaper",
    iconBgColor: "bg-surface-container-high text-on-surface",
    title: "(DRAFT) Press & Media Kit",
    description: "(DRAFT) Download vector logos, brand architecture diagrams, and editorial guidelines.",
    metaText: "(DRAFT) Assets: SVG / PDF / EPS",
    ctaText: "(DRAFT) Media Kit (48MB)",
    url: "#",
    accentColor: "text-on-surface",
  },
  {
    icon: "share",
    iconBgColor: "bg-surface-container-high text-secondary",
    title: "(DRAFT) Social & Mastodon Relay",
    description: "(DRAFT) Real-time alerts for releases, pull request merges, and compliance notices.",
    metaText: "@radical_transparency@fediscience.org",
    ctaText: "(DRAFT) Follow Feed",
    url: "#",
    accentColor: "text-secondary",
  },
];
