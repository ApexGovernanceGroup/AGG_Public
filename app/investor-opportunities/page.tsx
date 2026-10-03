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
                or legal, tax, accounting, or investment advice. Any investment, ownership,
                dividend, IP participation, distribution, or return right must be documented in a
                written agreement accepted by AGG ownership and reviewed through appropriate
                professional counsel.
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
            <p className="eyebrow">Evidence Basis</p>
            <h2>Public sources used to ground the forecast frame.</h2>
            <p>
              These sources do not prove AGG revenue. They show market pressure in adjacent
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
