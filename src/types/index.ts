// ==========================================
// Radical Transparency Network — Shared Types
// ==========================================

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface SiteConfig {
  title: string;
  tagline: string;
  description: string;
  githubUrl: string;
  proposalsUrl: string;
  version: string;
  specStatus: string;
  license: string;
  navLinks: NavLinkItem[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
  color?: string;
}

export interface ProposalSpotlight {
  id: string;
  category: string;
  fileType: string;
  title: string;
  description: string;
  uri: string;
  status: string;
  statusColor?: string;
  docUrl: string;
}

export interface RoleAction {
  tag: string;
  color: string;
  icon: string;
  title: string;
  body: string;
  cta: string;
  url?: string;
}

export interface RoleReading {
  guide: string;
  color: string;
  title: string;
  desc: string;
  url?: string;
}

export interface RoleProfile {
  id: string;
  name: string;
  kicker: string;
  title: string;
  desc: string;
  timeEstimate: string;
  snippet: string;
  statusText: string;
  actions: RoleAction[];
  reading: RoleReading[];
}

export interface Tenet {
  number: string;
  title: string;
  description: string;
  specLabel: string;
  specValue: string;
  icon: string;
}

export interface ComparisonItem {
  title: string;
  description: string;
}

export interface ComparisonColumn {
  title: string;
  badge: string;
  badgeType: 'deprecated' | 'standard';
  items: ComparisonItem[];
  impactLabel: string;
  impactText: string;
}

export interface SpecCard {
  id: string;
  badge: string;
  title: string;
  description: string;
  targetUri: string;
  specUrl: string;
  icon: string;
  badgeColor?: string;
}

export interface SdkItem {
  langCode: string;
  name: string;
  version: string;
  description: string;
  installCmd: string;
  docsUrl: string;
  badgeText: string;
}

export interface ValidationCheck {
  name: string;
  detail: string;
  status: 'pass' | 'fail';
}

export interface ValidationProfile {
  id: string;
  name: string;
  defaultCode: string;
  checks: ValidationCheck[];
}

export interface PlaybookItem {
  icon: string;
  title: string;
  description: string;
}

export interface PlaybookTrack {
  id: string;
  trackCode: string;
  badge: string;
  badgeColor?: string;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  items: PlaybookItem[];
  ctaText: string;
}

export interface EventItem {
  id: string;
  type: string;
  date: string;
  title: string;
  description: string;
  locationOrStatus: string;
  actionText: string;
  tagColor?: string;
}

export interface MilestoneItem {
  title: string;
  status: 'done' | 'active' | 'pending' | 'locked';
}

export interface RoadmapPhase {
  phaseNumber: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'planned';
  statusLabel: string;
  title: string;
  period: string;
  description: string;
  milestones: MilestoneItem[];
}

export interface ChannelItem {
  icon: string;
  iconBgColor?: string;
  title: string;
  description: string;
  metaText: string;
  ctaText: string;
  url: string;
  accentColor?: string;
}
