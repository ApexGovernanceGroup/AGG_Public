import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  ClipboardCheck,
  FileText,
  Landmark,
  Layers3,
  LineChart,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { contactEmail, site } from "../site-data";

export const metadata: Metadata = {
  title: "Investor Opportunities",
  description:
    "Investor opportunity pathways for Apex Governance Group, including ownership, IP-linked participation, dividend-oriented structures, and long-range market forecasting across knowledge management, data governance, AI governance, strategic planning, enterprise governance, risk reduction, and measurement.",
};

const investorBriefingHref = `mailto:${contactEmail}?subject=${encodeURIComponent(
  "Apex Governance Group Investor Opportunities Briefing",
)}`;

const marketSignals = [
  {
    value: "3 / 6 / 10 / 15",
    label: "forecast horizons",
    note: "Near-term entry, platform expansion, category maturity, and long-range institutional adoption.",
  },
  {
    value: "9",
    label: "growth domains",
    note: "KM, institutional knowledge, metaknowledge, data governance, AI governance, planning, enterprise governance, risk, and measurement.",
  },
  {
    value: "5",
    label: "investment pathways",
    note: "Company ownership, IP-linked participation, three-year growth, six-year scaling, and ten-year-plus strategic positioning.",
  },
] as const;

const investorEngagementTopics = [
  "Investment goals, requirements, horizon, and preferred participation model",
  "Path to a mutually beneficial strategic partnership with AGG ownership",
  "Investor expectations, communication cadence, diligence sequence, and decision points",
] as const;

const valuationMetrics = [
  {
    value: "$1.6M-$3.2M",
    label: "preliminary planning valuation",
    note: "A modest investor-discussion range before audited financials, a certified valuation, or definitive offering documents.",
  },
  {
    value: "$2.4M",
    label: "working midpoint",
    note: "A planning anchor for diligence discussion, not a promise of enterprise value, liquidity, or future return.",
  },
  {
    value: "25%",
    label: "strategic share pool",
    note: "Up to one quarter of company ownership may be discussed for qualified, agreement-controlled private investment.",
  },
  {
    value: "$400K-$800K",
    label: "25% block reference",
    note: "Illustrative existing-equity value of the 25% pool before negotiated discounts, premiums, rights, and transaction structure.",
  },
] as const;

const valuationBasis = [
  {
    title: "Current IP and product library",
    basis:
      "AGG has a growing base of proprietary doctrine, KAIGED|S configuration logic, academy tracks, service catalog architecture, storefront products, governance kits, repository models, policy templates, assessment tools, and delivery methods.",
    method:
      "Weighted as replacement-cost and IP-option value because the assets can support services, licensing, education, custom builds, and long-horizon productization.",
    icon: FileText,
  },
  {
    title: "Commercial readiness",
    basis:
      "The public site, investor page, client onboarding flow, digital storefront, registration-controlled checkout posture, client portal concept, and service/product taxonomy create a usable commercial operating surface.",
    method:
      "Weighted as market-readiness value because AGG has moved beyond idea-only posture into packaged offers, visible client pathways, and measurable delivery architecture.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Market adjacency",
    basis:
      "AGG sits across knowledge management, data governance, AI governance, enterprise governance, risk reduction, strategic planning, academy training, and operational measurement.",
    method:
      "Weighted as opportunity value because several adjacent markets show durable growth, but AGG revenue conversion still requires customer proof, pricing discipline, and repeatable delivery.",
    icon: LineChart,
  },
  {
    title: "Risk-adjusted discount",
    basis:
      "AGG remains early stage. A final value requires financial statements, customer traction, IP schedules, cap table, operating agreement review, liabilities, revenue quality, and counsel-approved investment terms.",
    method:
      "Weighted as a risk reduction factor under an ISO 31000-style lens: identify, analyze, evaluate, treat, monitor, and communicate the investment risk before terms bind.",
    icon: ShieldCheck,
  },
] as const;

const valuationMethodRows = [
  {
    factor: "Replacement-cost floor",
    weight: "35%",
    rationale:
      "Reflects the cost, time, expertise, and coordination required to recreate the current AGG IP library, site architecture, service/product catalog, academy content, and governance methods.",
  },
  {
    factor: "Market opportunity",
    weight: "30%",
    rationale:
      "Reflects demand adjacency to KM, data governance, AI governance, eGRC, strategic planning, automation governance, and implementation measurement.",
  },
  {
    factor: "Commercial readiness",
    weight: "20%",
    rationale:
      "Reflects the degree to which AGG assets are already packaged into public pages, client pathways, storefront products, delivery language, and investor-facing architecture.",
  },
  {
    factor: "Risk adjustment",
    weight: "15%",
    rationale:
      "Discounts for early-stage revenue proof, founder dependence, unsigned investment terms, unregistered IP protections, liquidity limits, and required counsel review.",
  },
] as const;

const capitalStructureNotes = [
  {
    title: "Existing-equity reference",
    detail:
      "If the 25% pool is treated as a block of current company value, the preliminary reference range is $400K-$800K before negotiated rights, discounts, premiums, and diligence outcomes.",
  },
  {
    title: "New-money post-money reference",
    detail:
      "If the 25% pool is issued as new capital for a 25% post-money ownership position, the same planning range implies approximately $533K-$1.07M in strategic capital, subject to final structuring.",
  },
  {
    title: "Final terms control",
    detail:
      "Share class, voting rights, investor council rights, information rights, transfer limits, dividends, buyout rights, and dilution treatment must be written, reviewed, and accepted before any investment binds.",
  },
] as const;

const customInvestmentLanes = [
  {
    title: "Company-Level Ownership",
    projection:
      "Exposure to the full AGG operating thesis: products, services, academy, consulting, licensing, retained advisory, and future technology readiness.",
    lineOfEffect:
      "Build enterprise value through repeatable offers, client trust, protected IP, leadership access, and recurring strategic relationships.",
    lineOfAction:
      "Fund commercialization, legal/IP protection, sales enablement, product packaging, operating systems, and investor reporting discipline.",
    futures:
      "Preparedness focus: governance-as-infrastructure, AI-enabled delivery operations, investor-ready controls, and product-line scalability.",
    icon: Building2,
  },
  {
    title: "Concept or Product Stake",
    projection:
      "Focused participation in a defined concept, framework, product family, academy module, playbook, software layer, or implementation toolkit.",
    lineOfEffect:
      "Convert a discrete idea into a marketable asset with ownership logic, revenue attribution, use rights, update cadence, and measurable demand tests.",
    lineOfAction:
      "Build the concept charter, IP schedule, prototype, buyer profile, pricing logic, pilot plan, and launch evidence package.",
    futures:
      "Preparedness focus: reusable product architecture, licensing options, AI-assisted customization, and partner-channel readiness.",
    icon: Layers3,
  },
  {
    title: "Institutional Knowledge and MetaKnowledge",
    projection:
      "Knowledge management, institutional preservation, and metaknowledge are likely to grow as AI adoption exposes source quality, lineage, and continuity gaps.",
    lineOfEffect:
      "Make organizational knowledge traceable, transferable, authoritative, confidence-rated, and useful for leadership decisions.",
    lineOfAction:
      "Fund taxonomies, repository models, continuity products, expert-capture methods, knowledge lineage, and retrieval evaluation packages.",
    futures:
      "Preparedness focus: AI-ready institutional memory, source-of-truth controls, expert-departure protection, and decision reconstruction.",
    icon: FileText,
  },
  {
    title: "Data Governance and Analytics Architecture",
    projection:
      "Data governance and analytics demand should continue rising as enterprises need trusted data, quality rules, lineage, dashboards, and decision-grade measurement.",
    lineOfEffect:
      "Move clients from scattered reporting into governed analytics, clear stewardship, trusted definitions, and action-linked measures.",
    lineOfAction:
      "Fund data governance kits, analytics question maps, dashboard templates, lineage profiles, and measurement architecture products.",
    futures:
      "Preparedness focus: governed data products, AI-ready datasets, risk-aware dashboards, and evidence-backed performance control.",
    icon: BarChart3,
  },
  {
    title: "AI, Automation, and Emerging Technology Governance",
    projection:
      "AI governance and automation controls are likely to remain high-growth as enterprises move from experimentation to regulated, monitored, auditable adoption.",
    lineOfEffect:
      "Give leaders control over model use, human review, automation boundaries, authority delegation, risk records, and accountable adoption.",
    lineOfAction:
      "Fund AI governance playbooks, automation registers, agent-use policies, assurance cases, control libraries, and readiness assessments.",
    futures:
      "Preparedness focus: agentic workflow governance, model-risk evidence, human-in-the-loop protocols, and autonomous process assurance.",
    icon: ShieldCheck,
  },
  {
    title: "Strategic Planning, Risk, and Operational Proof",
    projection:
      "Enterprise governance, GRC, strategy execution, risk reduction, and performance management are converging into measurable operating systems.",
    lineOfEffect:
      "Translate strategy into governed work, visible risk treatment, owner accountability, decision cadence, and proof of improvement.",
    lineOfAction:
      "Fund planning kits, risk registers, operating dashboards, scorecards, MOP/MOE/KPI libraries, implementation sprints, and improvement loops.",
    futures:
      "Preparedness focus: living strategy systems, governance control towers, continuous assessment, and evidence-linked transformation.",
    icon: TrendingUp,
  },
] as const;

const investorSteeringRights = [
  "Investor Council or observer-style strategic forum defined by written agreement",
  "Direct executive leadership communication cadence appropriate to the investment class",
  "Input into research priorities, product-market tests, futures readiness, and roadmap sequencing",
  "Visibility into milestone logic, use-of-funds narratives, risk registers, and investor reporting",
] as const;

const investmentPathways = [
  {
    title: "Traditional Company Ownership Stake | Dividend Paying",
    summary:
      "Equity-oriented participation in AGG growth, governance, brand, operating model, commercial relationships, and enterprise value.",
    terms:
      "Structured through written agreements. Dividend participation is subject to authorization, company performance, reserve requirements, tax treatment, and ownership terms.",
    investorFit:
      "Investors seeking broad exposure to AGG as a company, not only one product or one intellectual-property line.",
    icon: Building2,
  },
  {
    title: "Staked Individual IP Ownership Percentage | Dividend Paying",
    summary:
      "Participation tied to a defined AGG intellectual-property asset, product family, academy program, framework, toolkit, or licensed method.",
    terms:
      "IP-linked economics require an IP schedule, ownership percentage, use rights, revenue definition, expense treatment, dividend or distribution rule, and sunset or buyout language.",
    investorFit:
      "Investors seeking focused exposure to a specific product, framework, curriculum, software component, or licensing stream.",
    icon: FileText,
  },
  {
    title: "Short Term - 3 Year",
    summary:
      "Capital aligned to productization, customer validation, investor-ready controls, storefront maturity, academy packaging, and early recurring revenue channels.",
    terms:
      "Best suited for bounded capital deployment against measurable milestones, documented use of funds, and near-term conversion events.",
    investorFit:
      "Investors prioritizing time-bounded traction, evidence, early market positioning, and disciplined downside control.",
    icon: CalendarClock,
  },
  {
    title: "Mid Term - 6 Year",
    summary:
      "Capital aligned to platformization, licensing, training ecosystems, repeatable delivery, partner channels, and multi-year enterprise adoption.",
    terms:
      "Best suited for investors comfortable with capability buildout, channel development, product-library maturation, and governance-led recurring services.",
    investorFit:
      "Investors seeking growth through a disciplined portfolio of services, products, education, licensing, and retained advisory work.",
    icon: TrendingUp,
  },
  {
    title: "Long Term - 10 Year+",
    summary:
      "Strategic participation in AGG's long-horizon thesis: organizations will need governed knowledge, governed AI, institutional memory, and measurable operating control as durable infrastructure.",
    terms:
      "Best suited for investors who understand compound value from institutional IP, academy credential pathways, advisory relationships, licensing, and governance architecture.",
    investorFit:
      "Investors seeking patient exposure to a category that may become core enterprise infrastructure rather than discretionary consulting.",
    icon: Landmark,
  },
] as const;

const forecastRows = [
  {
    domain: "Knowledge Management",
    basis:
      "KM software forecasts point to durable double-digit growth as knowledge sharing, discovery, decision support, virtual agents, and cloud KM become normal enterprise infrastructure.",
    year3:
      "Repository cleanup, AI-search readiness, taxonomy, ownership, and decision-support use cases become immediate budget items.",
    year6:
      "KM shifts from documentation storage into operational knowledge flow, decision support, and workforce continuity.",
    year10:
      "Institutional memory becomes a managed enterprise asset with product, education, and governance revenue potential.",
    year15:
      "Competitive advantage depends on preserving expert knowledge across people, automated systems, partners, and leadership transitions.",
  },
  {
    domain: "Institutional Knowledge Preservation",
    basis:
      "Demographic turnover, distributed work, transformation fatigue, and AI training needs increase demand for controlled knowledge capture and transfer.",
    year3:
      "Leaders fund capture of critical know-how, SOPs, role knowledge, lessons learned, and continuity records.",
    year6:
      "Preservation becomes a standard part of onboarding, succession, risk, compliance, and modernization programs.",
    year10:
      "Knowledge preservation merges with workforce development, AI governance, records management, and enterprise resilience.",
    year15:
      "Institutions treat knowledge loss as an operational risk that requires measurable controls and periodic assurance.",
  },
  {
    domain: "MetaKnowledge",
    basis:
      "Metaknowledge means knowledge about knowledge: source, owner, lineage, confidence, uncertainty, authority, decision use, and expiration.",
    year3:
      "AI use exposes weak source control, making lineage, confidence, and authoritative-record tagging more valuable.",
    year6:
      "Metaknowledge becomes a premium layer for trusted AI retrieval, audit-ready analysis, and decision reconstruction.",
    year10:
      "Organizations differentiate by proving not just what they know, but how they know it and when it should change.",
    year15:
      "Metaknowledge becomes the control plane for institutional memory, model use, evidence quality, and automated decisions.",
  },
  {
    domain: "Data Governance",
    basis:
      "Public market estimates show the data governance market expanding rapidly through 2030 as privacy, quality, lineage, and AI readiness requirements intensify.",
    year3:
      "Clients need definitions, ownership, stewardship, quality rules, lineage, access, and compliance-linked data controls.",
    year6:
      "Data governance becomes a default prerequisite for AI, automation, analytics, and regulated decision support.",
    year10:
      "Governed data products, stewardship models, and traceable analytics become core enterprise operating infrastructure.",
    year15:
      "Mature organizations compete on trusted data ecosystems rather than isolated dashboards or one-off analytics.",
  },
  {
    domain: "AI | Automation Governance",
    basis:
      "AI governance and intelligent process automation forecasts show high growth as enterprises move from experimentation to controlled adoption.",
    year3:
      "AI policies, model-use controls, human review, prompt standards, automation inventories, and audit trails become urgent.",
    year6:
      "AI governance integrates with risk, data governance, cyber, legal, procurement, workforce training, and operating reviews.",
    year10:
      "Governed automation portfolios become recurring enterprise programs with continuous assessment and improvement.",
    year15:
      "Organizations require governance over autonomous workflows, non-human actors, delegated decisions, and machine-generated evidence.",
  },
  {
    domain: "Long Range Strategic Planning",
    basis:
      "Strategic planning software and planning-adjacent markets are expanding as organizations need horizon scanning, scenario logic, portfolio alignment, and execution tracking.",
    year3:
      "Leaders need faster planning cycles, objective-to-task traceability, decision criteria, and measurable execution paths.",
    year6:
      "Planning shifts from annual documents to living strategic operating systems tied to data, risk, and measures.",
    year10:
      "Foresight, investment logic, governance, portfolio control, and enterprise measurement converge into one discipline.",
    year15:
      "Strategic planning becomes persistent decision architecture rather than episodic senior-leader offsites.",
  },
  {
    domain: "Enterprise Governance",
    basis:
      "GRC and security-GRC forecasts show durable growth as regulatory pressure, cyber exposure, third-party risk, and AI oversight expand.",
    year3:
      "Enterprises rationalize policies, decision rights, authorities, risks, controls, and exception processes.",
    year6:
      "Governance becomes more integrated, automated, evidence-linked, and embedded in daily workflows.",
    year10:
      "Governance architecture becomes a marketable operating system for complex organizations.",
    year15:
      "Institutional trust depends on visible control of authority, risk, data, automation, and performance.",
  },
  {
    domain: "Risk Mitigation & Reduction",
    basis:
      "Risk-management and GRC markets continue to grow as enterprises face operational, regulatory, cyber, AI, workforce, and supplier risk.",
    year3:
      "Clients fund risk registers, issue controls, action trackers, assurance cases, and corrective-action visibility.",
    year6:
      "Risk programs shift from compliance reporting into operating intelligence and preventive controls.",
    year10:
      "Risk reduction links directly to strategy, data, AI, knowledge continuity, and performance management.",
    year15:
      "The premium shifts to organizations that can prove risk treatment reduced exposure, burden, and decision delay.",
  },
  {
    domain: "Enterprise Measurement, Assessment, Implementation, & Operationalization",
    basis:
      "Performance-management, business-process-management, and intelligent automation markets support demand for measurable execution, dashboards, process control, and proof of improvement.",
    year3:
      "Organizations need baseline assessments, MOP/MOE/KPI dictionaries, dashboards, and implementation scorecards.",
    year6:
      "Measurement becomes part of the delivery fabric: every initiative requires proof, cadence, thresholds, and owners.",
    year10:
      "Operationalization becomes a repeatable product family: assess, architect, govern, implement, measure, improve.",
    year15:
      "Enterprises reward providers that can prove implementation changed performance rather than merely delivered artifacts.",
  },
] as const;

const evidenceSources = [
  {
    label: "Brand valuation requirements",
    source: "ISO 10668:2010",
    href: "https://committee.iso.org/cms/live/live/en/sites/isoorg/contents/news/2020/03/Ref2486/metadataStore/standard-reference-1@/46032.html?browse=ics",
  },
  {
    label: "Innovation IP management guidance",
    source: "ISO 56005:2020",
    href: "https://www.iso.org/standard/72761.html",
  },
  {
    label: "Risk management guidance",
    source: "ISO 31000:2018",
    href: "https://www.iso.org/standard/65694.html",
  },
  {
    label: "General solicitation guidance",
    source: "U.S. SEC",
    href: "https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/general-solicitation",
  },
  {
    label: "Knowledge Management Software Market forecast",
    source: "360iResearch",
    href: "https://www.360iresearch.com/library/intelligence/knowledge-management-software",
  },
  {
    label: "Data Governance Market forecast",
    source: "Grand View Research",
    href: "https://www.grandviewresearch.com/industry-analysis/data-governance-market-report",
  },
  {
    label: "AI Governance Market forecast",
    source: "MarketsandMarkets",
    href: "https://www.marketsandmarkets.com/PressReleases/ai-governance.asp",
  },
  {
    label: "Intelligent Process Automation Market forecast",
    source: "Grand View Research",
    href: "https://www.grandviewresearch.com/industry-analysis/intelligent-process-automation-market",
  },
  {
    label: "Security GRC Software forecast",
    source: "IDC via MarketResearch.com",
    href: "https://www.marketresearch.com/IDC-v2477/Forecast-Worldwide-Security-Governance-Risk-46333536/",
  },
  {
    label: "Governance, Risk Management, and Compliance forecast",
    source: "The Business Research Company",
    href: "https://www.thebusinessresearchcompany.com/report/governance-risk-management-and-compliance-market-global-report",
  },
  {
    label: "Business Process Management forecast",
    source: "Grand View Research",
    href: "https://www.grandviewresearch.com/industry-analysis/business-process-management-bpm-market",
  },
  {
    label: "Strategic Planning Software forecast",
    source: "Verified Market Research",
    href: "https://www.verifiedmarketresearch.com/product/strategic-planning-software-market/",
  },
] as const;

const diligenceItems = [
  "Investor briefing deck and founder call",
  "Confidential information review under NDA",
  "Use-of-funds plan and milestone logic",
  "IP schedule for product, curriculum, framework, and toolkit assets",
  "Revenue definition, cost treatment, distribution logic, and reporting cadence",
  "Offering documents, counsel review, and written consent before any binding investment",
] as const;

export default function InvestorOpportunitiesPage() {
  return (
    <main>
      <section className="page-hero page-hero--seal">
        <div className="container page-hero__inner">
          <p className="eyebrow">Investor Opportunities</p>
          <h1>Invest in the governance layer enterprises need before intelligence can scale.</h1>
          <p>
            {site.name} is building a commercial operating position at the intersection of
            institutional knowledge, data governance, AI and automation governance,
            enterprise planning, risk reduction, measurement, and operationalization.
          </p>
          <div className="page-hero__actions">
            <a className="button button--primary" href={investorBriefingHref}>
              <BadgeDollarSign size={18} aria-hidden="true" />
              Request investor briefing
            </a>
            <Link className="button button--quiet-on-dark" href="/engage">
              <ArrowRight size={17} aria-hidden="true" />
              Review commercial engine
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="investor-alert" role="note" aria-label="Investor communications boundary">
            <ShieldCheck size={24} aria-hidden="true" />
            <div>
              <p className="eyebrow">Investor Communications Boundary</p>
              <h2>This page is not a securities offering.</h2>
              <p>
                This page is an invitation to request a private investor briefing. It is not an
                offer to sell securities, a solicitation to buy securities, a promise of dividends,
                a certified valuation, or legal, tax, accounting, or investment advice. Any
                valuation range, 25% share availability, investor council participation,
                investment, ownership, dividend, IP participation, distribution, voting,
                governance, or return right must be documented in a written agreement accepted
                by AGG ownership and reviewed through appropriate professional counsel.
              </p>
            </div>
          </div>
          <div className="investor-availability" aria-label="Current investment availability">
            <div>
              <p className="eyebrow">Current Investment Availability</p>
              <h2>AGG is available for private investor engagement.</h2>
              <p>
                Apex Governance Group currently has investment opportunities available.
                Schedule an engagement to discuss your investment goals and requirements,
                the path to a mutually beneficial strategic partnership, and investor
                expectations for the relationship moving forward.
              </p>
            </div>
            <ul className="mini-list">
              {investorEngagementTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <a className="button button--primary" href={investorBriefingHref}>
              <BadgeDollarSign size={18} aria-hidden="true" />
              Schedule investor engagement
            </a>
          </div>
          <div className="investor-signal-grid" aria-label="Investor opportunity summary">
            {marketSignals.map((signal) => (
              <article className="investor-signal" key={signal.label}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
                <p>{signal.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Preliminary ISO-Aligned Valuation</p>
            <h2>A modest valuation frame for investor discussion.</h2>
            <p>
              AGG&apos;s preliminary valuation is built as a planning model, not a certified
              appraisal. The method uses ISO 10668-style transparency for valuation objective,
              basis, method, sources, and assumptions; ISO 56005-style attention to IP
              management; and ISO 31000-style risk adjustment before any term sheet is considered.
            </p>
          </div>
          <div className="valuation-metric-grid" aria-label="Preliminary valuation summary">
            {valuationMetrics.map((metric) => (
              <article className="valuation-metric-card" key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
                <p>{metric.note}</p>
              </article>
            ))}
          </div>
          <div className="valuation-basis-grid" aria-label="Valuation basis">
            {valuationBasis.map((item) => (
              <article className="valuation-basis-card" key={item.title}>
                <item.icon size={24} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.basis}</p>
                <p>{item.method}</p>
              </article>
            ))}
          </div>
          <div className="valuation-method">
            <div className="valuation-method__narrative">
              <p className="eyebrow">Valuation Logic</p>
              <h3>Why the range is deliberately conservative.</h3>
              <p>
                AGG has visible IP, structured commercial offers, a product library, a client
                engagement surface, and a market thesis. The valuation remains modest because
                investor diligence still needs audited or reviewed financials, signed customer
                evidence, IP schedules, operating agreement review, cap table confirmation,
                liabilities, revenue attribution, and final securities counsel.
              </p>
            </div>
            <div className="valuation-method__panel">
              {valuationMethodRows.map((row) => (
                <article key={row.factor}>
                  <span>{row.weight}</span>
                  <div>
                    <h4>{row.factor}</h4>
                    <p>{row.rationale}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="capital-structure-grid" aria-label="25 percent share pool structure">
            {capitalStructureNotes.map((note) => (
              <article className="capital-structure-card" key={note.title}>
                <h3>{note.title}</h3>
                <p>{note.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Custom Investable Opportunities</p>
            <h2>Invest in the company, a concept, a product, or the futures work inside AGG.</h2>
            <p>
              Investors may pursue company-level exposure or a customized opportunity tied to a
              defined concept, product, IP family, research projection, line of effect, line of
              action, or futures emerging-technology preparedness lane.
            </p>
          </div>
          <div className="research-lane-grid" aria-label="Custom investor research and futures lanes">
            {customInvestmentLanes.map((lane) => (
              <article className="research-lane-card" key={lane.title}>
                <lane.icon size={25} aria-hidden="true" />
                <h3>{lane.title}</h3>
                <dl>
                  <div>
                    <dt>Research projection</dt>
                    <dd>{lane.projection}</dd>
                  </div>
                  <div>
                    <dt>Line of effect</dt>
                    <dd>{lane.lineOfEffect}</dd>
                  </div>
                  <div>
                    <dt>Line of action</dt>
                    <dd>{lane.lineOfAction}</dd>
                  </div>
                  <div>
                    <dt>Futures preparedness</dt>
                    <dd>{lane.futures}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container investor-steering">
          <div>
            <p className="eyebrow">Investor Voice</p>
            <h2>Every accepted investment is designed to include a strategic voice.</h2>
            <p>
              AGG investment is not intended to be passive capital only. Accepted investors can
              help shape the direction of the organization, the product portfolio, and the future
              technology thesis through a written participation structure that preserves AGG
              ownership authority while giving investors meaningful access and influence.
            </p>
          </div>
          <div className="investor-steering__panel">
            <ul className="check-list">
              {investorSteeringRights.map((right) => (
                <li key={right}>{right}</li>
              ))}
            </ul>
            <p>
              Participation rights are advisory unless the executed agreement grants formal
              voting, board, observer, consent, or information rights. The goal is clear:
              investors can add their fingerprints to AGG&apos;s organizational direction without
              creating unmanaged operating control.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Investment Types</p>
            <h2>Multiple ways to align capital with AGG growth.</h2>
            <p>
              Investment structures can be shaped around company-level ownership,
              individual IP economics, or time-bounded growth horizons. Each path
              requires written terms, governance, reporting, and AGG ownership approval.
            </p>
          </div>
          <div className="investment-path-grid">
            {investmentPathways.map((pathway) => (
              <article className="investment-path-card" key={pathway.title}>
                <pathway.icon size={26} aria-hidden="true" />
                <h3>{pathway.title}</h3>
                <p>{pathway.summary}</p>
                <dl>
                  <div>
                    <dt>Term logic</dt>
                    <dd>{pathway.terms}</dd>
                  </div>
                  <div>
                    <dt>Investor fit</dt>
                    <dd>{pathway.investorFit}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Market Thesis</p>
            <h2>AGG is positioned where several enterprise markets are converging.</h2>
          </div>
          <div className="prose">
            <p>
              The opportunity is not a single software category. It is a convergence zone:
              organizations need to preserve what they know, govern the data and AI they use,
              translate strategy into executable work, reduce risk, and prove measurable improvement.
            </p>
            <p>
              AGG&apos;s investable thesis is that enterprises will spend more over the next 3, 6,
              10, and 15 years on governed knowledge, governed automation, decision architecture,
              and operational proof because unmanaged information and unmanaged AI will increase
              cost, risk, and executive exposure.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Forecast Windows</p>
            <h2>Basic market forecast by time horizon.</h2>
            <p>
              The horizon model is directional. It combines public market forecasts with AGG&apos;s
              operating thesis and should be validated during investor diligence before any
              transaction is considered.
            </p>
          </div>
          <div className="forecast-window-grid" aria-label="Forecast horizon model">
            <article className="forecast-window-card">
              <BarChart3 size={23} aria-hidden="true" />
              <span>3 Year | 2029</span>
              <h3>Demand capture</h3>
              <p>Convert urgent client pain into packaged diagnostics, academy cohorts, product kits, and governed implementation sprints.</p>
            </article>
            <article className="forecast-window-card">
              <LineChart size={23} aria-hidden="true" />
              <span>6 Year | 2032</span>
              <h3>Platform maturity</h3>
              <p>Expand repeatable service lines, licensing, training, repository discipline, investor reporting, and IP-level revenue tracking.</p>
            </article>
            <article className="forecast-window-card">
              <Layers3 size={23} aria-hidden="true" />
              <span>10 Year | 2036</span>
              <h3>Category authority</h3>
              <p>Position AGG as a recognized authority for institutional knowledge, governed AI, enterprise governance, and measurable implementation.</p>
            </article>
            <article className="forecast-window-card">
              <BriefcaseBusiness size={23} aria-hidden="true" />
              <span>15 Year | 2041+</span>
              <h3>Institutional infrastructure</h3>
              <p>Build long-range enterprise value through owned IP, partner channels, academy credential paths, and governance architecture adoption.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Market Forecast Domains</p>
            <h2>Where growth pressure may create AGG opportunity.</h2>
            <p>
              Forecasts below are plain-language working assumptions for investor discussion,
              not guaranteed revenue projections. They are intended to help investors see how
              AGG&apos;s service, product, academy, and IP portfolio can map against durable demand.
            </p>
          </div>
          <div className="forecast-table-shell">
            <table className="forecast-table">
              <thead>
                <tr>
                  <th scope="col">Domain</th>
                  <th scope="col">Market Basis</th>
                  <th scope="col">3 Year | 2029</th>
                  <th scope="col">6 Year | 2032</th>
                  <th scope="col">10 Year | 2036</th>
                  <th scope="col">15 Year | 2041+</th>
                </tr>
              </thead>
              <tbody>
                {forecastRows.map((row) => (
                  <tr key={row.domain}>
                    <th scope="row">{row.domain}</th>
                    <td>{row.basis}</td>
                    <td>{row.year3}</td>
                    <td>{row.year6}</td>
                    <td>{row.year10}</td>
                    <td>{row.year15}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Evidence and Standards Basis</p>
            <h2>Public sources used to ground the valuation and forecast frame.</h2>
            <p>
              These sources do not prove AGG revenue or certify AGG&apos;s valuation. They provide
              standards context, investor-communication caution, and market pressure in adjacent
              categories that AGG can translate into products, services, education, licensing,
              and implementation support.
            </p>
          </div>
          <div className="evidence-source-grid">
            {evidenceSources.map((source) => (
              <a
                className="evidence-source-card"
                href={source.href}
                key={source.href}
                rel="noreferrer"
                target="_blank"
              >
                <ClipboardCheck size={20} aria-hidden="true" />
                <span>{source.source}</span>
                <strong>{source.label}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--center">
          <div>
            <p className="eyebrow">Investor Diligence</p>
            <h2>Move from interest to terms through a controlled diligence path.</h2>
          </div>
          <div className="investor-diligence">
            <ul className="check-list">
              {diligenceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a className="button button--primary" href={investorBriefingHref}>
              <BadgeDollarSign size={18} aria-hidden="true" />
              Request investor briefing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
