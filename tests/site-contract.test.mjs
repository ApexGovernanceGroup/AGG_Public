import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function read(path) {
  return readFile(new URL(`../${path}`, import.meta.url), "utf8");
}

function cssBlock(css, selector) {
  const start = css.indexOf(`${selector} {`);
  assert.notEqual(start, -1, `${selector} block is missing`);
  const open = css.indexOf("{", start);
  let depth = 0;
  for (let index = open; index < css.length; index += 1) {
    if (css[index] === "{") depth += 1;
    if (css[index] === "}") depth -= 1;
    if (depth === 0) return css.slice(open + 1, index);
  }
  throw new Error(`${selector} block is not closed`);
}

test("AGG public site contract is present", async () => {
  const [
    home,
    layout,
    siteHeader,
    sideNavigation,
    services,
    methodology,
    solutions,
    doctrine,
    academy,
    clientOnboarding,
    clientPortal,
    clientPortalDashboard,
    clientPortalProfile,
    clientServices,
    clientServicesGate,
    clientServicesCommandCenter,
    clientConfigurationCard,
    clientLedSelfDeterminationCards,
    heroSolutionLanes,
    alabamaTopographicBackdrop,
    packageInclusionsComponent,
    clientServicesAuth,
    clientServicesAccessRoute,
    clientServicesLogoutRoute,
    checkoutRoute,
    clientOnboardingRoute,
    clientOnboardingRecords,
    clientConfigurationsRoute,
    clientConfigurationRecords,
    insights,
    about,
    contact,
    engage,
    investorOpportunities,
    investorQuickSheet,
    investorQuickSheetRoute,
    surveyData,
    strategicSurveyForm,
    insidePerspectiveSurvey,
    paralysisSurvey,
    sitemap,
    robots,
    data,
    commerce,
    envExample,
  ] =
    await Promise.all([
      read("app/page.tsx"),
      read("app/layout.tsx"),
      read("app/components/SiteHeader.tsx"),
      read("app/components/SideNavigation.tsx"),
      read("app/services/page.tsx"),
      read("app/methodology/page.tsx"),
      read("app/solutions/page.tsx"),
      read("app/doctrine/page.tsx"),
      read("app/academy/page.tsx"),
      read("app/client-onboarding/page.tsx"),
      read("app/client-portal/page.tsx"),
      read("app/components/ClientPortalDashboard.tsx"),
      read("app/client-portal/profile.ts"),
      read("app/client-services/page.tsx"),
      read("app/client-services/ClientServicesGate.tsx"),
      read("app/components/ClientServicesCommandCenter.tsx"),
      read("app/components/ClientConfigurationCard.tsx"),
      read("app/components/ClientLedSelfDeterminationCards.tsx"),
      read("app/components/HeroSolutionLanes.tsx"),
      read("app/components/AlabamaTopographicBackdrop.tsx"),
      read("app/components/PackageInclusions.tsx"),
      read("app/client-services/auth.ts"),
      read("app/api/client-services/access/route.ts"),
      read("app/api/client-services/logout/route.ts"),
      read("app/api/checkout/route.ts"),
      read("app/api/client-onboarding/route.ts"),
      read("app/client-onboarding/records.ts"),
      read("app/api/client-configurations/route.ts"),
      read("app/client-configurations/records.ts"),
      read("app/insights/page.tsx"),
      read("app/about/page.tsx"),
      read("app/contact/page.tsx"),
      read("app/engage/page.tsx"),
      read("app/investor-opportunities/page.tsx"),
      read("public/agg-investor-quick-sheet.html"),
      read("app/agg-investor-quick-sheet/page.tsx"),
      read("app/surveys/survey-data.ts"),
      read("app/components/StrategicSurveyForm.tsx"),
      read("app/inside-perspective-human-cost-executive-management/page.tsx"),
      read("app/paralysis-from-analysis-needs-vs-systems/page.tsx"),
      read("app/sitemap.ts"),
      read("app/robots.ts"),
      read("app/site-data.ts"),
      read("app/commerce.ts"),
      read(".env.example"),
    ]);

  const combined = [
    home,
    layout,
    siteHeader,
    sideNavigation,
    services,
    methodology,
    solutions,
    doctrine,
    academy,
    clientOnboarding,
    clientPortal,
    clientPortalDashboard,
    clientPortalProfile,
    clientServices,
    clientServicesGate,
    clientServicesCommandCenter,
    clientConfigurationCard,
    clientLedSelfDeterminationCards,
    alabamaTopographicBackdrop,
    packageInclusionsComponent,
    clientServicesAuth,
    clientServicesAccessRoute,
    clientServicesLogoutRoute,
    checkoutRoute,
    clientOnboardingRoute,
    clientOnboardingRecords,
    clientConfigurationsRoute,
    clientConfigurationRecords,
    insights,
    about,
    contact,
    engage,
    investorOpportunities,
    investorQuickSheet,
    investorQuickSheetRoute,
    surveyData,
    strategicSurveyForm,
    insidePerspectiveSurvey,
    paralysisSurvey,
    sitemap,
    robots,
    data,
    commerce,
    envExample,
  ].join("\n");
  const sideNavData = data.slice(
    data.indexOf("export const sideNavItems"),
    data.indexOf("export const navItems"),
  );
  const configurationPositionsData = data.slice(
    data.indexOf("positions: ["),
    data.indexOf("] satisfies KaigedConfigurationPosition[]"),
  );
  const academyTracksData = data.slice(
    data.indexOf("export const academyTracks"),
    data.indexOf("export const academyFormats"),
  );
  const academyProgramOutcomesData = data.slice(
    data.indexOf("export const academyProgramOutcomes"),
    data.indexOf("export const academyTracks"),
  );
  const purchaseLibraryItemsData = data.slice(
    data.indexOf("export const purchaseLibraryItems"),
    data.indexOf("export type EducationDeliveryOption"),
  );
  const educationDeliveryOptionsData = data.slice(
    data.indexOf("export const educationDeliveryOptions"),
    data.indexOf("export type LongTermEngagementOption"),
  );
  const longTermEngagementOptionsData = data.slice(
    data.indexOf("export const longTermEngagementOptions"),
    data.indexOf("export type ProductCatalogGroup"),
  );
  const solutionDeliveryBridgeData = data.slice(
    data.indexOf("export const solutionDeliveryBridge"),
    data.indexOf("export const packageInclusions"),
  );
  const configurationPositionBlocks = configurationPositionsData
    .split(/\r?\n    \{\r?\n      id: "/)
    .slice(1);

  assert.match(combined, /Apex Governance Group/);
  assert.match(combined, /Advantage Is Engineered/);
  assert.match(combined, /Not Inherited/);
  assert.match(data, /mastheadLines:\s*\["Advantage Is Engineered",\s*"Not Inherited"\]/);
  assert.match(home, /brandStandard\.tier2\.mastheadLines\.map/);
  assert.match(
    combined,
    /Advantage is intelligent application of institutional Knowledge, Strategy, and Governance to achieve Velocity:/,
  );
  assert.match(home, /Request the executive diagnostic/);
  assert.match(home, /See how an engagement runs/);
  assert.match(home, /Our Formal Process/);
  assert.match(home, /Apex Academy/);
  assert.match(home, /Services \| Apex Digital Store/);
  assert.match(home, /hero__secondary-actions/);
  assert.match(home, /solutionSurveyActions/);
  assert.match(home, /hero__solution-survey-actions/);
  assert.doesNotMatch(home, /mastheadSurveyActions/);
  assert.doesNotMatch(home, /hero__survey-actions/);
  assert.match(
    home,
    /hero__pillar-copy[\s\S]*hero__solution-survey-actions[\s\S]*hero__pillar-heading/,
  );
  assert.match(home, /insidePerspectiveSurvey\.slug/);
  assert.match(home, /paralysisFromAnalysisSurvey\.slug/);
  assert.match(surveyData, /Inside Perspective: The Human Cost of Executive Management\./);
  assert.match(surveyData, /Paralysis from Analysis: A True Needs vs\. Systems Approach/);
  assert.match(surveyData, /Visionaries, founders, CEOs, CFOs, COOs, and C-suite personnel/);
  assert.match(surveyData, /customizes, innovates, and engineers solutions directly from client need/);
  assert.equal((surveyData.match(/\n        prompt:/g) ?? []).length, 16);
  assert.equal((surveyData.match(/\n        actionUse:/g) ?? []).length, 16);
  assert.match(strategicSurveyForm, /"use client"/);
  assert.match(strategicSurveyForm, /new FormData\(form\)/);
  assert.match(strategicSurveyForm, /mailto:\$\{contactEmail\}/);
  assert.match(strategicSurveyForm, /window\.location\.href = href/);
  assert.match(strategicSurveyForm, /should not include passwords, protected client data/);
  assert.match(insidePerspectiveSurvey, /insidePerspectiveSurvey/);
  assert.match(insidePerspectiveSurvey, /StrategicSurveyForm contactEmail=\{contactEmail\} survey=\{survey\}/);
  assert.match(paralysisSurvey, /paralysisFromAnalysisSurvey/);
  assert.match(paralysisSurvey, /StrategicSurveyForm contactEmail=\{contactEmail\} survey=\{survey\}/);
  assert.match(home, /operatingSurfaceSignals/);
  assert.match(home, /Executive Operating Surface/);
  assert.match(home, /A cleaner front door for serious work/);
  assert.match(home, /Readable at executive speed/);
  assert.match(home, /Depth without noise/);
  assert.match(home, /surface-command/);
  assert.match(home, /surface-signal-card/);
  assert.match(home, /solutionPillarIntro\.headingLines\.map/);
  assert.match(home, /hero__pillar-intro/);
  assert.match(home, /HeroSolutionLanes lanes=\{solutionDeliveryBridge\.lanes\}/);
  assert.match(heroSolutionLanes, /lanes\.map/);
  assert.match(heroSolutionLanes, /aria-expanded=\{isActive\}/);
  assert.match(heroSolutionLanes, /hero__solution-lane-title/);
  assert.match(heroSolutionLanes, /hero__solution-popout/);
  assert.match(heroSolutionLanes, /scrollIntoView/);
  assert.match(heroSolutionLanes, /Close lane detail/);
  assert.match(home, /hero__solution-bridge/);
  assert.equal((solutionDeliveryBridgeData.match(/label:\s*"/g) ?? []).length, 8);
  assert.equal((solutionDeliveryBridgeData.match(/detail:\s*"/g) ?? []).length, 8);
  assert.match(combined, /Apex Solutions are addressed through eight operating lanes/i);
  assert.match(combined, /imbued with Knowledge, Strategy, Governance, and Velocity/i);
  assert.match(combined, /Assessment/);
  assert.match(combined, /Architecture/);
  assert.match(combined, /Infrastructure/);
  assert.match(combined, /Governing Control/);
  assert.match(combined, /Sustainment/);
  assert.match(combined, /Change Management/);
  assert.match(combined, /Innovation & Modernization/);
  assert.match(combined, /Futures/);
  assert.match(combined, /custom-tailored solutions for each client/i);
  assert.match(combined, /crafted first from the client's own organic systems/i);
  assert.match(combined, /We engineer holistic solutions before introducing a commercial option/i);
  assert.match(data, /export const strategicDoctrine/);
  assert.match(home, /section--doctrine/);
  assert.match(home, /doctrine-band__sequence/);
  assert.match(doctrine, /strategicDoctrine\.values\.map/);
  assert.match(doctrine, /strategicDoctrine\.priorities\.map/);
  assert.match(doctrine, /strategicDoctrine\.pillars\.map/);
  assert.match(doctrine, /strategicDoctrine\.keyTasks\.map/);
  assert.match(combined, /Corporate Strategic Doctrine/);
  assert.match(combined, /Apex Governance Group partners with clients, strategic partners, and community governments/);
  assert.match(combined, /The client possesses the architecture, infrastructure, governance, operational cognition/);
  assert.match(combined, /Apex does not seek merely to deliver a product to the client/);
  assert.match(combined, /People Always/);
  assert.match(combined, /Integrity of Knowledge/);
  assert.match(combined, /Full Spectrum Readiness/);
  assert.match(combined, /Operational Cognition/);
  assert.match(combined, /Sustain Decision Advantage/);
  assert.match(sitemap, /"\/client-onboarding"/);
  assert.match(sitemap, /"\/doctrine"/);
  assert.match(sitemap, /"\/investor-opportunities"/);
  assert.match(sitemap, /"\/inside-perspective-human-cost-executive-management"/);
  assert.match(sitemap, /"\/paralysis-from-analysis-needs-vs-systems"/);
  assert.match(layout, /<AlabamaTopographicBackdrop \/>/);
  assert.match(alabamaTopographicBackdrop, /prefers-reduced-motion: reduce/);
  assert.match(alabamaTopographicBackdrop, /requestAnimationFrame/);
  assert.match(alabamaTopographicBackdrop, /scrollProgress/);
  assert.match(alabamaTopographicBackdrop, /root\.scrollHeight - window\.innerHeight/);
  assert.match(alabamaTopographicBackdrop, /window\.innerWidth \* 0\.18/);
  assert.match(alabamaTopographicBackdrop, /window\.innerHeight \* 0\.46/);
  assert.match(alabamaTopographicBackdrop, /--alabama-contour-y/);
  assert.match(alabamaTopographicBackdrop, /passive:\s*true/);
  assert.match(combined, /Apex Solutions/);
  assert.match(combined, /are all comprised of:/);
  assert.match(combined, /Most enterprises are not short on capability\. They are short on coherence/i);
  assert.match(combined, /Four programs, four owners, four roadmaps/i);
  assert.match(combined, /licenses already on the books/i);
  assert.match(combined, /We install the decision architecture inside enterprises/i);
  assert.match(combined, /After-action learning, source records, and expert judgment become decision material/i);
  assert.match(combined, /Vision is converted into priorities, measures, owners, and sequenced work/i);
  assert.match(combined, /speed does not outrun legitimacy/i);
  assert.match(combined, /evidence travels with the task/i);
  assert.match(cssBlock(await read("app/globals.css"), ".hero__metrics div"), /justify-content:\s*flex-start/);
  assert.match(home, /brandStandard\.tier4\.paragraphs\.map/);
  assert.doesNotMatch(home, /Client Access/);
  assert.doesNotMatch(home, /Delivery Commitments/);
  assert.match(home, /item\.displayPrice/);
  assert.match(
    combined,
    /Executive Engineered Solutions scaled for Corporate \| SMB \| Government \| Defense Industries/,
  );
  assert.match(combined, /Engineering Organizational Advantage/);
  assert.match(combined, /Engineering Organic Solutions to Achieve Organizational Advantage/);
  assert.match(combined, /Governance Architecture/);
  assert.match(combined, /Knowledge Systems/);
  assert.match(combined, /Apex Academy/);
  assert.match(combined, /Custom Solution for Singular Needs/);
  assert.match(combined, /Not every organizational need requires enterprise-scale transformation/);
  assert.match(combined, /Policy memo or content strategy/);
  assert.match(combined, /Division or program governing-document set/);
  assert.match(combined, /Self-design architecture, performance assessment, or project management checklist/);
  assert.match(combined, /until it does exactly what the work requires/);
  assert.match(combined, /Example work products/);
  assert.match(combined, /Decision-rights matrix/);
  assert.match(combined, /Knowledge taxonomy and metadata profile/);
  assert.match(combined, /Objective-to-task traceability map/);
  assert.match(combined, /COA comparison brief/);
  assert.match(combined, /RCOA \(Recommended Course of Action\) brief/);
  assert.match(combined, /MOP\/MOE\/KPI\/KRI dictionary/);
  assert.match(combined, /Repository operating model/);
  assert.match(combined, /Data Analytics, Analysis, Architecture, and Application/);
  assert.match(combined, /Analytics requirements and question map/);
  assert.match(combined, /Data architecture and lineage profile/);
  assert.match(combined, /Application roadmap and decision dashboard/);
  assert.match(combined, /Low-to-Medium System, Application Coding, and Custom Design/);
  assert.match(combined, /low-to-medium complexity system\/application coding/);
  assert.match(combined, /Scoped system or application feature build/);
  assert.match(combined, /Custom interface, workflow, or dashboard design/);
  assert.match(combined, /Technical handoff and maintenance notes/);
  assert.match(combined, /Centers of Gravity/);
  assert.match(combined, /Critical capability and vulnerability map/);
  assert.match(combined, /Communities of Practice/);
  assert.match(combined, /Community-of-practice charter/);
  assert.match(combined, /Repository Establishment, Governance, and Sustainment/);
  assert.match(combined, /Repository establishment plan/);
  assert.match(combined, /Sustainment backlog and stewardship cadence/);
  assert.match(combined, /Private cohort syllabus/);
  assert.match(combined, /service-work-grid/);
  assert.match(combined, /service-work-card/);
  assert.match(combined, /Executive Service Decision Path/);
  assert.match(services, /className="services-hero__title"/);
  assert.match(services, /Services, products, sprints, and seminars for governed advantage\./);
  assert.match(combined, /Buy the first move, then scale only what proves useful/);
  assert.match(combined, /diagnose, architect, install, and sustain/);
  assert.match(combined, /Scope Gate/);
  assert.match(combined, /Evidence Gate/);
  assert.match(combined, /Control Gate/);
  assert.match(combined, /Transfer Gate/);
  assert.match(combined, /ISO-Strengthened Quality Logic/);
  assert.match(combined, /certification-neutral controls/i);
  assert.match(combined, /Catalog Detail/);
  assert.match(combined, /Open the layer that matches the\s+decision you are making/);
  assert.match(combined, /Methodology/);
  assert.match(combined, /\/methodology/);
  assert.match(
    combined,
    /Assessment\. Architecture\. Infrastructure\. Governance\. Change\s+Management\. Hand Off\. Measured Improvement\./,
  );
  assert.doesNotMatch(
    combined,
    /Assessment, architecture, governance, execution, and proof/,
  );
  assert.match(combined, /root cause of an issue,[\s\S]*vulnerability, or gap/);
  assert.match(combined, /executable tasks that achieve intent/);
  assert.match(combined, /topNavItems/);
  assert.match(combined, /sideNavItems/);
  assert.match(combined, /Floating primary navigation/);
  assert.match(siteHeader, /Masthead navigation/);
  assert.match(siteHeader, /topNavItems\.length > 0/);
  assert.match(siteHeader, /topNavItems\.map/);
  assert.match(siteHeader, /Client login/);
  assert.match(siteHeader, /Direct Engagement/);
  assert.match(siteHeader, /Investor Opportunities/);
  assert.match(siteHeader, /Apex Admin/);
  assert.match(siteHeader, /\/investor-opportunities/);
  assert.match(siteHeader, /\/client-services\?role=admin/);
  assert.match(siteHeader, /LockKeyhole/);
  assert.match(siteHeader, /Landmark/);
  assert.match(siteHeader, /ShieldCheck/);
  assert.match(
    siteHeader,
    /href="\/client-services"[\s\S]*Client login[\s\S]*href="\/engage"[\s\S]*Direct Engagement[\s\S]*href="\/investor-opportunities"[\s\S]*Investor Opportunities[\s\S]*href="\/client-services\?role=admin"[\s\S]*Apex Admin/,
  );
  assert.doesNotMatch(siteHeader, /navItems\.map/);
  assert.match(sideNavigation, /sideNavItems\.map/);
  assert.match(data, /export const topNavItems: NavItem\[\] = \[\];/);
  assert.doesNotMatch(sideNavData, /href: "\/client-portal"/);
  assert.match(sideNavData, /href: "\/client-onboarding", label: "Onboarding", icon: ClipboardCheck/);
  assert.match(sideNavData, /href: "\/doctrine", label: "Doctrine", icon: BookOpenCheck/);
  assert.match(
    data,
    /sideNavItems: NavItem\[\] = \[[\s\S]*href: "\/about", label: "About", icon: Landmark[\s\S]*href: "\/contact", label: "Contact", icon: Mail[\s\S]*href: "\/insights", label: "Insights", icon: Newspaper/,
  );
  assert.match(investorOpportunities, /export const metadata: Metadata/);
  assert.match(investorOpportunities, /Investor Opportunities/);
  assert.match(investorOpportunities, /Request investor briefing/);
  assert.match(investorOpportunities, /investorQuickSheetHref = "\/agg-investor-quick-sheet"/);
  assert.match(investorOpportunities, /AGG Quick Sheet \.html/);
  assert.match(investorOpportunities, /Branded one-page investor reference/);
  assert.match(investorQuickSheetRoute, /redirect\("\/agg-investor-quick-sheet\.html"\)/);
  assert.match(sitemap, /"\/agg-investor-quick-sheet"/);
  assert.match(investorQuickSheet, /AGG Investor Quick Sheet \| Apex Governance Group/);
  assert.match(investorQuickSheet, /Apex Governance Group/);
  assert.match(investorQuickSheet, /Investor Quick Sheet \| Preliminary private-discussion reference/);
  assert.match(investorQuickSheet, /Current Business Valuation/);
  assert.match(investorQuickSheet, /\$1\.6M-\$3\.2M/);
  assert.match(investorQuickSheet, /\$2\.4M/);
  assert.match(investorQuickSheet, /Strategic share pool/);
  assert.match(investorQuickSheet, /25% block reference/);
  assert.match(investorQuickSheet, /Growth Expectations/);
  assert.match(investorQuickSheet, /Practical application of investment capital/);
  assert.match(investorQuickSheet, /Capital Application Model/);
  assert.match(investorQuickSheet, /100% of all\s+accepted investment capital raised/);
  assert.match(investorQuickSheet, /Twenty-five percent \(25%\) of all accepted\s+investment capital raised is proposed as non-refundable commitment capital/);
  assert.match(investorQuickSheet, /30-30-20-14-5-1 growth model/);
  assert.match(investorQuickSheet, /Modernization, transformation, innovation, and interoperability/);
  assert.match(investorQuickSheet, /Research, development, expansion, and application of emerging technologies/);
  assert.match(investorQuickSheet, /Marketing, strategic partnerships, strategic communications/);
  assert.match(investorQuickSheet, /Talent cultivation and management/);
  assert.match(investorQuickSheet, /Talent, reserve, buy-back, and market perspective/);
  assert.match(investorQuickSheet, /investor buy-back planning, and market perspective investment/);
  assert.match(investorQuickSheet, /Administrative fees/);
  assert.match(investorQuickSheet, /Examples: license-ready product sheets/);
  assert.match(investorQuickSheet, /Examples: governed AI labs/);
  assert.match(investorQuickSheet, /Examples: investor deck refinement/);
  assert.match(investorQuickSheet, /Examples: advisor bench/);
  assert.match(investorQuickSheet, /Examples: operating cadence/);
  assert.match(investorQuickSheet, /Examples: account administration/);
  assert.match(investorQuickSheet, /Investment Lifecycle/);
  assert.match(investorQuickSheet, /What the process looks like/);
  assert.match(investorQuickSheet, /Divestiture of Funds/);
  assert.match(investorQuickSheet, /period not to exceed 72 months/);
  assert.match(investorQuickSheet, /five percent \(5%\) interest/);
  assert.match(investorQuickSheet, /twenty-five percent \(25%\) non-refundable/);
  assert.match(investorQuickSheet, /AGG will not subordinate,\s+impair, or supplant/);
  assert.match(investorQuickSheet, /Potential investor\/client gains/);
  assert.match(investorQuickSheet, /Investor\/client risk/);
  assert.match(investorQuickSheet, /AGG gains/);
  assert.match(investorQuickSheet, /AGG risk/);
  assert.match(investorQuickSheet, /not a securities\s+offering/i);
  assert.match(investorQuickSheet, /not a certified appraisal or guaranteed enterprise value/);
  assert.match(investorQuickSheet, /apex@apexgovernancegroup\.com/);
  assert.equal((investorQuickSheet.match(/class="allocation-card"/g) ?? []).length, 6);
  assert.equal((investorQuickSheet.match(/<em>Examples:/g) ?? []).length, 6);
  assert.equal((investorQuickSheet.match(/class="timeline-step"/g) ?? []).length, 8);
  assert.match(investorQuickSheet, /--shadow-lift/);
  assert.match(investorQuickSheet, /\.hero::before/);
  assert.match(investorQuickSheet, /@keyframes surface-scan/);
  assert.match(investorQuickSheet, /\.allocation-card::after/);
  assert.match(investorQuickSheet, /\.capital-terms-grid/);
  assert.match(investorQuickSheet, /\.meta-qaqc/);
  assert.match(investorQuickSheet, /prefers-reduced-motion/);
  assert.match(investorOpportunities, /This page is not a securities offering/);
  assert.match(investorOpportunities, /not an\s+offer to sell securities/i);
  assert.match(investorOpportunities, /promise of dividends/);
  assert.match(investorOpportunities, /certified valuation/);
  assert.match(investorOpportunities, /25% share availability/);
  assert.match(investorOpportunities, /Current Investment Availability/);
  assert.match(investorOpportunities, /Apex Governance Group currently has investment opportunities available/);
  assert.match(investorOpportunities, /Schedule an engagement to discuss your investment goals and requirements/);
  assert.match(investorOpportunities, /mutually beneficial strategic partnership/);
  assert.match(investorOpportunities, /investor\s+expectations for the relationship moving forward/);
  assert.match(investorOpportunities, /Schedule investor engagement/);
  assert.equal((investorOpportunities.match(/investorEngagementTopics\.map/g) ?? []).length, 1);
  assert.match(investorOpportunities, /Preliminary ISO-Aligned Valuation/);
  assert.match(investorOpportunities, /\$1\.6M-\$3\.2M/);
  assert.match(investorOpportunities, /\$2\.4M/);
  assert.match(investorOpportunities, /strategic share pool/);
  assert.match(investorOpportunities, /\$400K-\$800K/);
  assert.match(investorOpportunities, /ISO 10668-style transparency/);
  assert.match(investorOpportunities, /ISO 56005-style attention to IP/);
  assert.match(investorOpportunities, /ISO 31000-style risk adjustment/);
  assert.match(investorOpportunities, /Replacement-cost floor/);
  assert.match(investorOpportunities, /New-money post-money reference/);
  assert.match(investorOpportunities, /approximately \$533K-\$1\.07M/);
  assert.match(investorOpportunities, /Custom Investable Opportunities/);
  assert.match(investorOpportunities, /Invest in the company, a concept, a product, or the futures work inside AGG/);
  assert.match(investorOpportunities, /Company-Level Ownership/);
  assert.match(investorOpportunities, /Concept or Product Stake/);
  assert.match(investorOpportunities, /Institutional Knowledge and MetaKnowledge/);
  assert.match(investorOpportunities, /Data Governance and Analytics Architecture/);
  assert.match(investorOpportunities, /AI, Automation, and Emerging Technology Governance/);
  assert.match(investorOpportunities, /Strategic Planning, Risk, and Operational Proof/);
  assert.match(investorOpportunities, /Research projection/);
  assert.match(investorOpportunities, /Line of effort/);
  assert.doesNotMatch(investorOpportunities, /Line of effect/);
  assert.match(investorOpportunities, /Line of action/);
  assert.match(investorOpportunities, /Futures preparedness/);
  assert.match(investorOpportunities, /Engineered Advantage:/);
  assert.match(investorOpportunities, /Investor Voice/);
  assert.match(investorOpportunities, /Every accepted investment is designed to include a strategic voice/);
  assert.match(investorOpportunities, /Investor Council or observer-style strategic forum/);
  assert.match(investorOpportunities, /add their fingerprints to AGG&apos;s organizational direction/);
  assert.equal((investorOpportunities.match(/valuationMetrics\.map/g) ?? []).length, 1);
  assert.equal((investorOpportunities.match(/valuationBasis\.map/g) ?? []).length, 1);
  assert.equal((investorOpportunities.match(/valuationMethodRows\.map/g) ?? []).length, 1);
  assert.equal((investorOpportunities.match(/capitalStructureNotes\.map/g) ?? []).length, 1);
  assert.equal((investorOpportunities.match(/customInvestmentLanes\.map/g) ?? []).length, 1);
  assert.equal((investorOpportunities.match(/investorSteeringRights\.map/g) ?? []).length, 1);
  assert.equal((investorOpportunities.match(/lineOfEffort:/g) ?? []).length, 6);
  assert.equal((investorOpportunities.match(/engineeredAdvantage:/g) ?? []).length, 6);
  assert.match(investorOpportunities, /Traditional Company Ownership Stake \| Dividend Paying/);
  assert.match(investorOpportunities, /Staked Individual IP Ownership Percentage \| Dividend Paying/);
  assert.match(investorOpportunities, /Short Term - 3 Year/);
  assert.match(investorOpportunities, /Mid Term - 6 Year/);
  assert.match(investorOpportunities, /Long Term - 10 Year\+/);
  assert.match(investorOpportunities, /Knowledge Management/);
  assert.match(investorOpportunities, /Institutional Knowledge Preservation/);
  assert.match(investorOpportunities, /MetaKnowledge/);
  assert.match(investorOpportunities, /Data Governance/);
  assert.match(investorOpportunities, /AI \| Automation Governance/);
  assert.match(investorOpportunities, /Long Range Strategic Planning/);
  assert.match(investorOpportunities, /Enterprise Governance/);
  assert.match(investorOpportunities, /Risk Mitigation & Reduction/);
  assert.match(investorOpportunities, /Enterprise Measurement, Assessment, Implementation, & Operationalization/);
  assert.match(investorOpportunities, /3 Year \| 2029/);
  assert.match(investorOpportunities, /6 Year \| 2032/);
  assert.match(investorOpportunities, /10 Year \| 2036/);
  assert.match(investorOpportunities, /15 Year \| 2041\+/);
  assert.match(investorOpportunities, /marketBasisInvestmentLabel = "Current Market Capital Valuation:"/);
  assert.match(investorOpportunities, /year3: "Expected Growth over 3 years"/);
  assert.match(investorOpportunities, /year6: "Expected Growth over 6 years"/);
  assert.match(investorOpportunities, /year10: "Expected Growth over 10 years"/);
  assert.match(investorOpportunities, /year15: "Expected Growth over 15 years"/);
  assert.match(investorOpportunities, /function ForecastInvestmentCell/);
  assert.equal((investorOpportunities.match(/<ForecastInvestmentCell/g) ?? []).length, 5);
  assert.match(investorOpportunities, /conservative public\s+market proxy/);
  assert.match(investorOpportunities, /15-year view is a planning extrapolation/);
  assert.match(investorOpportunities, /Conservative 2026 market proxy: ~\$38\.6B/);
  assert.match(investorOpportunities, /Conservative 2029 estimate: ~\$51\.4B/);
  assert.match(investorOpportunities, /Conservative 2026 market proxy: ~\$82\.9B/);
  assert.match(investorOpportunities, /Conservative 2041\+ planning estimate: ~\$346\.4B/);
  assert.match(investorOpportunities, /Conservative 2026 market proxy: ~\$20\.4B/);
  assert.match(investorOpportunities, /Conservative 2036 estimate: ~\$89\.9B/);
  assert.match(investorOpportunities, /Evidence and Standards Basis/);
  assert.match(investorOpportunities, /ISO 10668:2010/);
  assert.match(investorOpportunities, /ISO 56005:2020/);
  assert.match(investorOpportunities, /ISO 31000:2018/);
  assert.match(investorOpportunities, /U\.S\. SEC/);
  assert.match(investorOpportunities, /360iResearch/);
  assert.match(investorOpportunities, /Grand View Research/);
  assert.match(investorOpportunities, /ResearchAndMarkets \/ Technavio/);
  assert.match(investorOpportunities, /MarketsandMarkets/);
  assert.match(investorOpportunities, /MarketsandMarkets via GlobeNewswire/);
  assert.match(investorOpportunities, /Enterprise Content Management Market forecast/);
  assert.match(investorOpportunities, /Metadata Management Tools forecast/);
  assert.match(investorOpportunities, /Strategy Management Software forecast/);
  assert.match(investorOpportunities, /Enterprise GRC Market forecast/);
  assert.match(investorOpportunities, /Enterprise Risk Management forecast/);
  assert.match(investorOpportunities, /Enterprise Performance Management forecast/);
  assert.match(investorOpportunities, /Investor briefing deck and founder call/);
  assert.match(investorOpportunities, /Confidential information review under NDA/);
  assert.equal((investorOpportunities.match(/domain: "/g) ?? []).length, 9);
  assert.ok((investorOpportunities.match(/title: "/g) ?? []).length >= 5);
  assert.match(combined, /Apex Academy/);
  assert.match(combined, /Professional Development/);
  assert.match(combined, /Labor Force Certification/);
  assert.match(combined, /Individual & Collective Skills Training/);
  assert.match(combined, /Knowledge Management Ecosystems/);
  assert.match(combined, /Data Governance Application/);
  assert.match(combined, /Artificial Intelligence/);
  assert.match(combined, /Automation/);
  assert.match(combined, /Innovation & Interoperability/);
  assert.match(combined, /Enterprise Strategic Planning/);
  assert.match(academy, /academyProgramOutcomes\.map/);
  assert.match(academy, /academyTopicDomains\.map/);
  assert.match(home, /academyProgramOutcomes\.map/);
  assert.equal((academyProgramOutcomesData.match(/title: "/g) ?? []).length, 3);
  assert.match(combined, /The KAIGED\|S Approach/);
  assert.match(combined, /Six lanes for governed digital operating capability/);
  assert.match(combined, /Enterprise knowledge management systems/);
  assert.match(combined, /AI and automation integration/);
  assert.match(combined, /Data governance development and application/);
  assert.match(combined, /Repository operations for controlled products/);
  assert.match(combined, /Ecosystem capitalization/);
  assert.equal((academyTracksData.match(/code: "/g) ?? []).length, 6);
  assert.match(combined, /Client Portal/);
  assert.match(combined, /Client-Led Self-Determination/);
  assert.match(combined, /Six fixed positions\. Client-selected terms\. One configured engagement shape/);
  assert.match(combined, /The KAIGES\|D approach empowers each client/);
  assert.match(combined, /parameters, expectations, personal priorities, and products/);
  assert.match(combined, /global leadership in intelligent engineered solutions/);
  assert.match(combined, /active author of the experience/);
  assert.match(combined, /self-determined, client-led partnership experience/);
  assert.match(combined, /product-delivery controls on your terms/);
  assert.match(combined, /ClientLedSelfDeterminationCards/);
  assert.match(combined, /agg-public-client-led-self-determination-v1/);
  assert.match(combined, /kaigedClientConfiguration\.positions/);
  assert.match(combined, /Client-Led Self-Determination word bank/);
  assert.match(combined, /15,625 selectable configurations/);
  assert.match(combined, /K-A-I-G-E-S\|D definitions/);
  assert.match(combined, /Expanded Term Bank/);
  assert.match(combined, /kaigedClientConfiguration\.count/);
  assert.match(combined, /solution expectations, evidence, and delivery control/);
  assert.match(combined, /Keystone/);
  assert.match(combined, /Knowledge Continuity/);
  assert.match(combined, /Alignment/);
  assert.match(combined, /Accountability/);
  assert.match(combined, /Intake/);
  assert.match(combined, /Interoperability/);
  assert.match(combined, /Guardrails/);
  assert.match(combined, /Goals/);
  assert.match(combined, /Evidence/);
  assert.match(combined, /Experience/);
  assert.match(combined, /Sustainment/);
  assert.match(combined, /Deployment/);
  assert.match(combined, /Term \{position\.selectedIndex \+ 1\} of \{position\.options\.length\}/);
  assert.match(combined, /Next: \{nextOption\.term\}/);
  assert.equal(configurationPositionBlocks.length, 6);
  assert.equal(
    (configurationPositionsData.match(/\r?\n          term: "/g) ?? []).length,
    30,
  );
  for (const positionBlock of configurationPositionBlocks) {
    assert.equal((positionBlock.match(/\r?\n          term: "/g) ?? []).length, 5);
  }
  assert.match(combined, /Output/);
  assert.match(combined, /Engagement/);
  assert.match(combined, /Personal priority/);
  assert.match(combined, /Chosen attributes listed by letter/);
  assert.match(combined, /Generated Review/);
  assert.match(combined, /Configuration narrative/);
  assert.match(combined, /Generated review of selected configuration/);
  assert.match(combined, /Defining Principles/);
  assert.match(combined, /Attributes/);
  assert.match(combined, /Engagement Style/);
  assert.match(combined, /Package inclusions/);
  assert.match(combined, /hybrid, in-person, and remote customer work/i);
  assert.match(combined, /staged secure portal access for communication, status updates, and delivery visibility/i);
  assert.match(combined, /root-cause analysis findings/i);
  assert.match(combined, /Solution recommendation white paper/i);
  assert.match(combined, /Minimum of three benchmark check-ins/i);
  assert.match(combined, /organizational change management campaign plan/i);
  assert.match(combined, /12 months or six direct engagements/i);
  assert.match(engage, /<PackageInclusions inclusions=\{packageInclusions\} \/>/);
  assert.match(packageInclusionsComponent, /"use client"/);
  assert.match(packageInclusionsComponent, /aria-expanded=\{isOpen\}/);
  assert.match(packageInclusionsComponent, /role="region"/);
  assert.match(combined, /End-State Products/);
  assert.match(combined, /Client Priorities/);
  assert.match(combined, /formatAttributeLine/);
  assert.match(combined, /buildConfigurationRecord/);
  assert.match(combined, /Record selection/);
  assert.match(combined, /Awaiting server record/);
  assert.match(combined, /Local selection changed since the last server record/);
  assert.match(combined, /Server record saved/);
  assert.match(combined, /\/api\/client-configurations/);
  assert.match(combined, /position-locked/);
  assert.match(combined, /position-unlocked/);
  assert.match(combined, /carry-to-engagement/);
  assert.match(combined, /public-client-led-self-determination/);
  assert.match(clientConfigurationsRoute, /runtime\s*=\s*"nodejs"/);
  assert.match(clientConfigurationsRoute, /MAX_BODY_BYTES/);
  assert.match(clientConfigurationsRoute, /invalid_origin/);
  assert.match(clientConfigurationsRoute, /rate_limited/);
  assert.match(clientConfigurationsRoute, /appendKaigesConfigurationRecord/);
  assert.match(clientConfigurationsRoute, /REQUIRED_REVIEW_SECTIONS/);
  assert.match(clientConfigurationsRoute, /\^KAIGE\[SD\]\$/);
  assert.match(clientConfigurationsRoute, /word_position_mismatch/);
  assert.match(clientConfigurationsRoute, /record_unavailable/);
  assert.match(clientConfigurationsRoute, /write-only/);
  assert.match(clientConfigurationRecords, /KAIGES_RECORD_FILE\s*=\s*"kaiges-public-configurations\.jsonl"/);
  assert.match(clientConfigurationRecords, /AGG_INTAKE_RECORD_DIR/);
  assert.match(clientConfigurationRecords, /\.tmp/);
  assert.match(clientConfigurationRecords, /appendFile/);
  assert.match(clientConfigurationRecords, /appendKaigesConfigurationRecord/);
  assert.match(clientConfigurationRecords, /readRecentKaigesConfigurationRecords/);
  assert.match(clientConfigurationRecords, /kaigesRecordDirectory/);
  assert.match(clientServices, /readRecentKaigesConfigurationRecords/);
  assert.match(clientServices, /Server-readable KAIGES\|D intake records/);
  assert.match(clientServices, /Configuration Records/);
  assert.match(clientServices, /Generated review/);
  assert.match(clientServices, /No server-readable public configuration records/);
  assert.match(envExample, /AGG_INTAKE_RECORD_DIR=/);
  assert.match(combined, /Carry to engagement/);
  assert.match(combined, /word-bank term/);
  assert.match(combined, /Pause sequence/);
  assert.match(combined, /Resume sequence/);
  assert.match(combined, /POSITION_ROTATION_OFFSET_MS\s*=\s*3000/);
  assert.match(combined, /nextSequentialUnlockedPosition/);
  assert.match(combined, /rotationCursorRef/);
  assert.match(combined, /selectionStateRef/);
  assert.match(combined, /kaigedTerminalAlternates/);
  assert.match(combined, /Current client shape/);
  assert.match(combined, /KAIGES/);
  assert.match(combined, /KAIGED/);
  assert.match(combined, /aria-live="polite"/);
  assert.match(combined, /Kinetic/);
  assert.match(combined, /Adaptive/);
  assert.match(combined, /Artificial Intelligence/);
  assert.match(combined, /Architecture/);
  assert.match(combined, /Intelligence/);
  assert.match(combined, /Innovation/);
  assert.match(combined, /Integration/);
  assert.match(combined, /Growth/);
  assert.match(combined, /Guidance/);
  assert.match(combined, /Execution/);
  assert.match(combined, /Scalability/);
  assert.match(combined, /Solutions/);
  assert.match(combined, /Delivery/);
  assert.match(combined, /Governance/);
  assert.match(combined, /Engineering/);
  assert.match(combined, /Enablement/);
  assert.match(combined, /Client-Led Self-Determination word bank/);
  assert.match(combined, /Private workforce education/i);
  assert.match(combined, /Client Onboarding/);
  assert.match(combined, /Register first\. Then enter the client login gate\./);
  assert.match(combined, /Register before checkout/);
  assert.match(combined, /Submit registration/);
  assert.match(combined, /\/api\/client-onboarding/);
  assert.match(clientOnboarding, /name="organization"/);
  assert.match(clientOnboarding, /name="contactName"/);
  assert.match(clientOnboarding, /name="email"/);
  assert.match(clientOnboarding, /name="intent"/);
  assert.match(clientOnboarding, /name="accessNeed"/);
  assert.match(clientOnboarding, /name="consent"/);
  assert.doesNotMatch(clientOnboarding, /name="password"/);
  assert.match(clientOnboardingRoute, /runtime\s*=\s*"nodejs"/);
  assert.match(clientOnboardingRoute, /MAX_BODY_BYTES/);
  assert.match(clientOnboardingRoute, /VALID_INTENTS/);
  assert.match(clientOnboardingRoute, /sourceIsAllowed/);
  assert.match(clientOnboardingRoute, /rateLimitAllows/);
  assert.match(clientOnboardingRoute, /appendClientOnboardingRecord/);
  assert.match(clientOnboardingRoute, /record-unavailable/);
  assert.match(clientOnboardingRoute, /write-only/);
  assert.match(clientOnboardingRecords, /CLIENT_ONBOARDING_RECORD_FILE\s*=\s*"client-onboarding-registrations\.jsonl"/);
  assert.match(clientOnboardingRecords, /readRecentClientOnboardingRecords/);
  assert.match(clientOnboardingRecords, /appendClientOnboardingRecord/);
  assert.match(combined, /Client Portal/);
  assert.match(combined, /\/client-portal/);
  assert.match(combined, /Client Services/);
  assert.match(combined, /\/client-services/);
  assert.match(combined, /ClientServicesGate/);
  assert.match(clientServicesGate, /name="username"/);
  assert.match(clientServicesGate, /name="password"/);
  assert.match(clientServicesGate, /name="returnTo"/);
  assert.match(clientServicesGate, /Open dashboard portal/);
  assert.match(clientServicesGate, /Credential Protected/);
  assert.match(clientServicesGate, /Client login or password was not accepted/);
  assert.match(clientServicesGate, /Validated clients open a dashboard/);
  assert.match(clientServices, /readRecentClientOnboardingRecords/);
  assert.match(clientServices, /Onboarding Queue/);
  assert.match(clientServices, /Client registrations awaiting AGG review/);
  assert.match(clientServicesGate, /Onboarding registration received/);
  assert.match(clientServicesGate, /Apex Admin access/);
  assert.match(clientServices, /params\?\.returnTo === "\/client-services\?role=admin"/);
  assert.match(clientServices, /returnTo=\{adminEntry \? "\/client-services\?role=admin" : "\/client-portal"\}/);
  assert.match(combined, /Credential Protected/);
  assert.match(combined, /ClientServicesCommandCenter/);
  assert.match(combined, /Command Center/);
  assert.match(combined, /Start Project/);
  assert.match(combined, /Run Audit/);
  assert.match(combined, /agg-client-services-command-center-v1/);
  assert.match(combined, /onContextMenu/);
  assert.match(combined, /openContextCard/);
  assert.match(combined, /buildAudit/);
  assert.match(combined, /localStorage/);
  assert.match(combined, /recommendations/);
  assert.match(combined, /nextSteps/);
  assert.match(combined, /ClientConfigurationCard/);
  assert.match(combined, /Client Configuration Card/);
  assert.match(combined, /Ruled 04 Sep 2026/);
  assert.match(combined, /Client-Led Self-Determination/);
  assert.match(combined, /Client-configured/);
  assert.match(combined, /Pause cycling/);
  assert.match(combined, /Restore default/);
  assert.match(combined, /Lock in/);
  assert.match(combined, /Unlock to revise/);
  assert.match(combined, /LOCKED/);
  assert.match(combined, /ready to commit/);
  assert.match(combined, /agg-client-led-self-determination-v1/);
  assert.match(combined, /setInterval/);
  assert.match(combined, /Client Relations Method/);
  assert.match(combined, /The client selects; the structure does not move/);
  assert.match(combined, /Artificial Intelligence is naming automation and decision support/);
  assert.match(combined, /Architecture is naming operating structure/);
  assert.match(combined, /Default Configuration/);
  assert.match(combined, /Five stages, each with an exit criterion/);
  assert.match(combined, /Client-Led Self-Determination Unified Architecture/);
  assert.match(combined, /One client-facing architecture/i);
  assert.match(combined, /K-META/);
  assert.match(combined, /K-EXPOSE/);
  assert.match(combined, /K-ENTRY/);
  assert.match(combined, /K-EXIT/);
  assert.match(combined, /K-BUILD/);
  assert.match(combined, /K-VAULT/);
  assert.match(combined, /K-AGENT/);
  assert.match(combined, /K-ACADEMY/);
  assert.match(combined, /K-SUSTAIN/);
  assert.match(combined, /Shape D/);
  assert.match(combined, /Shape S/);
  assert.match(combined, /A lifecycle, not a label/);
  assert.match(combined, /Sustainment - we stay/);
  assert.match(combined, /Delivery - we finish and leave/);
  assert.match(combined, /Sequence is fixed/);
  assert.match(combined, /A configuration travels whole/);
  assert.match(combined, /The election is recorded/);
  assert.match(combined, /S is the default ending/);
  assert.match(combined, /registrability opinion/);
  assert.match(combined, /Enterprise Architecture V4/);
  assert.match(combined, /owned in the Apex codebase/i);
  assert.match(combined, /CLIENT_SERVICES_COOKIE/);
  assert.match(combined, /clientServicesSessionToken/);
  assert.match(combined, /isClientServicesCredential/);
  assert.match(combined, /isClientServicesConfigured/);
  assert.match(combined, /DEVELOPMENT_USERNAME_SHA256/);
  assert.match(combined, /DEVELOPMENT_PASSWORD_SHA256/);
  assert.match(combined, /CLIENT_SERVICES_USERNAME/);
  assert.match(combined, /CLIENT_SERVICES_USERNAME_SHA256/);
  assert.match(combined, /return isProduction\(\) \? null : DEVELOPMENT_PASSWORD_SHA256/);
  assert.match(clientServicesAuth, /return isProduction\(\) \? null : DEVELOPMENT_USERNAME_SHA256/);
  assert.match(clientServicesAuth, /usernameHash/);
  assert.match(clientServicesAuth, /passwordHash/);
  assert.match(clientServicesAuth, /sessionSecret/);
  assert.match(combined, /httpOnly:\s*true/);
  assert.match(clientServicesAuth, /path:\s*"\/"/);
  assert.match(clientServicesAccessRoute, /requestOrigin/);
  assert.match(clientServicesAccessRoute, /headers\.get\("host"\)/);
  assert.match(clientServicesAccessRoute, /resolveReturnPath/);
  assert.match(clientServicesAccessRoute, /searchParams\.set\("role", "admin"\)/);
  assert.match(clientServicesAccessRoute, /\/client-portal/);
  assert.match(clientServicesAccessRoute, /\/client-services\?role=admin/);
  assert.match(clientServicesLogoutRoute, /requestOrigin/);
  assert.match(clientServicesLogoutRoute, /headers\.get\("host"\)/);
  assert.match(combined, /disallow:\s*\["\/client-services",\s*"\/client-portal"\]/);
  assert.doesNotMatch(sitemap, /\/client-portal/);
  assert.match(clientPortal, /hasClientServicesAccess/);
  assert.match(clientPortal, /getClientPortalProfile/);
  assert.match(clientPortal, /Credentialed portal session active/);
  assert.match(clientPortal, /Dashboard visibility for commissioned AGG client services/);
  assert.doesNotMatch(combined, /Client Portal Preview/);
  assert.doesNotMatch(combined, /Preview data only/);
  assert.doesNotMatch(combined, /Public, non-operational preview/i);
  assert.match(clientPortalDashboard, /Full Client Administration Data/);
  assert.match(clientPortalDashboard, /Assigned Apex Employee/);
  assert.match(clientPortalDashboard, /Primary Contact/);
  assert.match(clientPortalDashboard, /Billing Contact/);
  assert.match(clientPortalDashboard, /Technical Contact/);
  assert.match(clientPortalDashboard, /Commissioned Services/);
  assert.match(clientPortalDashboard, /Current service status/);
  assert.match(clientPortalProfile, /CLIENT_PORTAL_APEX_EMPLOYEE_NAME/);
  assert.match(clientPortalProfile, /CLIENT_PORTAL_PRIMARY_CONTACT_PHONE/);
  assert.match(clientPortalProfile, /CLIENT_PORTAL_SERVICE_1_STATUS/);
  assert.match(envExample, /CLIENT_SERVICES_USERNAME=/);
  assert.match(envExample, /CLIENT_PORTAL_CLIENT_ORGANIZATION=/);
  assert.match(envExample, /CLIENT_PORTAL_APEX_EMPLOYEE_PHONE=/);
  assert.match(combined, /Current Progress/);
  assert.match(combined, /Project Efforts, Programs, and Actions/);
  assert.match(combined, /Chats and Comments/);
  assert.match(combined, /Open communication/);
  assert.match(
    combined,
    /AI, automation, data\s+governance, repository operations, and ecosystem development/i,
  );
  assert.match(combined, /GitHub-ready/);
  assert.match(combined, /ApexGovernanceGroup\/AGG_Public/);
  assert.match(combined, /AGG public repository/);
  assert.doesNotMatch(combined, /ApexG207\/Agentic_Systems/);
  assert.doesNotMatch(combined, /Agentic Systems repository/);
  assert.match(combined, /apexgov56\.sharepoint\.com/);
  assert.match(combined, /Tenant boundary for SharePoint and OneDrive workspaces/);
  assert.match(combined, /Insights connect to the public AGG repository and intake-governed records boundary/);
  assert.match(combined, /Boundary signal only/);
  assert.match(combined, /records\s+controls are confirmed during intake/);
  assert.match(combined, /About the Founder/);
  assert.match(combined, /Benjamin Bragdon/);
  assert.match(combined, /Founder & Chief Executive Officer/);
  assert.match(combined, /https:\/\/www\.linkedin\.com\/in\/benjamin-bragdon/);
  assert.match(combined, /Connect on LinkedIn/);
  assert.match(combined, /founderProfile/);
  assert.match(combined, /founder-spotlight/);
  assert.match(combined, /NEXT_PUBLIC_FOUNDER_LINKEDIN_URL/);
  assert.match(combined, /Executive Diagnostic Brief/);
  assert.match(combined, /Continuity Exposure Assessment/);
  assert.match(combined, /Governed Product Kit/);
  assert.match(combined, /Apex Academy Private Lab/);
  assert.match(combined, /Governance Design Sprint/);
  assert.match(combined, /Executive Advisory Retainer/);
  assert.match(combined, /Data analytics architecture and application map/);
  assert.match(combined, /Data Analytics Architecture and Application Sprint/);
  assert.match(combined, /Centers of Gravity and Community of Practice Sprint/);
  assert.match(home, /Six ways to start/);
  assert.match(combined, /Workbook-Derived Storefront/);
  assert.match(combined, /149 proposed product patterns/);
  assert.match(combined, /Seminars and Sprints/);
  assert.match(combined, /Customization Levers/);
  assert.match(combined, /Client Purchase Library/);
  assert.match(combined, /plain-speak product names first/);
  assert.match(combined, /Download after purchase/);
  assert.match(combined, /Request download access/);
  assert.match(combined, /client-portal activation/);
  assert.match(combined, /Get a clear first decision/);
  assert.match(combined, /Find knowledge-loss risk/);
  assert.match(combined, /Build a ready-to-use policy, SOP, or checklist kit/);
  assert.match(combined, /Train a private team or cohort/);
  assert.match(combined, /Design the operating model/);
  assert.match(combined, /Keep executive support on call/);
  assert.match(engage, /purchaseLibraryItems\.map/);
  assert.match(engage, /packagesById\.get\(libraryItem\.packageId\)/);
  assert.match(engage, /href=\{`#storefront-\$\{packageItem\.id\}`\}/);
  assert.match(engage, /id=\{`storefront-\$\{item\.id\}`\}/);
  assert.equal((purchaseLibraryItemsData.match(/packageId:\s*"/g) ?? []).length, 6);
  assert.equal((purchaseLibraryItemsData.match(/downloadSummary:\s*"/g) ?? []).length, 6);
  assert.match(combined, /Education, Credentialing, and Long-Term Support/);
  assert.match(combined, /in-person, remote-distance learning, and hybrid\s+professional education/);
  assert.match(combined, /certification support, credentialing\s+evidence, advisory retainers, and 6-12 month solution contracts/);
  assert.match(combined, /In-Person Professional Education/);
  assert.match(combined, /Remote-Distance Learning/);
  assert.match(combined, /Hybrid Professional Education/);
  assert.match(combined, /Certification and Credentialing Services/);
  assert.match(combined, /Third-party certification mapping when separately scoped/);
  assert.match(engage, /educationDeliveryOptions\.map/);
  assert.equal((educationDeliveryOptionsData.match(/title:\s*"/g) ?? []).length, 4);
  assert.match(combined, /Retainers and 6-12 Month Contracts/);
  assert.match(combined, /Six-Month Solution Contract/);
  assert.match(combined, /Twelve-Month Sustainment Contract/);
  assert.match(combined, /Monthly retainer/);
  assert.match(engage, /longTermEngagementOptions\.map/);
  assert.match(engage, /\/client-onboarding\?intent=long-term-solution/);
  assert.equal((longTermEngagementOptionsData.match(/term:\s*"/g) ?? []).length, 3);
  assert.match(home, /Scale, scope, and pricing/);
  assert.match(combined, /Pricing Principle/);
  assert.match(combined, /Pricing is based on scale, not content depth/);
  assert.match(combined, /Product\s+pricing is\s+based\s+on scale, not depth of content/i);
  assert.match(combined, /Scale basis/);
  assert.match(combined, /One sponsor group, one operating problem, one decision brief/);
  assert.match(combined, /Audience or cohort size/);
  assert.match(combined, /Number of workflows, service lines, or operating domains/);
  assert.match(combined, /Organic, not acquired/);
  assert.match(combined, /Calibrated, not templated/);
  assert.match(combined, /Measured, not asserted/);
  assert.match(combined, /Automated where it earns its keep/);
  assert.match(combined, /Capability you keep, not a dependency you renew/);
  assert.match(combined, /No required new tooling/);
  assert.match(combined, /Assessment opens; proof closes/);
  assert.match(combined, /AGG brings the architecture\. The client keeps the toolset/);
  assert.match(combined, /does not sell, resell, broker, or require tooling/);
  assert.match(combined, /apex@apexgovernancegroup\.com/);
  assert.doesNotMatch(combined, /contact@apexgovernancegroup\.com/);
  assert.match(checkoutRoute, /export async function POST/);
  assert.match(checkoutRoute, /checkoutPayloadFrom/);
  assert.match(checkoutRoute, /registration_required/);
  assert.match(checkoutRoute, /metadata\[onboarding_record_id\]/);
  assert.doesNotMatch(combined, /execution cadence/i);
  const servicesCss = await read("app/globals.css");
  assert.match(servicesCss, /service-decision-grid/);
  assert.match(servicesCss, /service-quality-grid/);
  assert.match(servicesCss, /service-accordion/);
});

test("brand assets and palette are wired", async () => {
  const [
    layout,
    css,
    maineContours,
    maineSmokeContours,
    alabamaContours,
    alabamaSmokeContours,
    alabamaMapLabels,
    alabamaTopographicBackdrop,
  ] = await Promise.all([
    read("app/layout.tsx"),
    read("app/globals.css"),
    read("public/brand/maine-topographic-contours.svg"),
    read("public/brand/maine-topographic-contours-smoke.svg"),
    read("public/brand/alabama-topographic-contours.svg"),
    read("public/brand/alabama-topographic-contours-smoke.svg"),
    read("public/brand/alabama-map-labels.svg"),
    read("app/components/AlabamaTopographicBackdrop.tsx"),
  ]);

  assert.match(layout, /apex-governance-group-symbol\.png/);
  assert.match(css, /--onyx:\s*#0c0c0c/i);
  assert.match(css, /--graphite:\s*#3e4346/i);
  assert.match(css, /--platinum:\s*#c3c2bd/i);
  assert.match(css, /--navy:\s*#172c3f/i);
  assert.match(css, /--bronze:\s*#88623c/i);
  assert.match(css, /--oxblood:\s*#793735/i);
  assert.match(css, /--black:\s*var\(--onyx\)/);
  assert.match(css, /--masthead:\s*var\(--onyx\)/);
  assert.match(css, /--charcoal:\s*var\(--graphite\)/);
  assert.match(css, /--silver:\s*var\(--platinum\)/);
  assert.match(css, /--maroon:\s*var\(--oxblood\)/);
  assert.match(css, /--alabama-map-labels:\s*url\("\/brand\/alabama-map-labels\.svg"\)/);
  assert.match(css, /--alabama-topographic-contours:\s*url\("\/brand\/alabama-topographic-contours\.svg"\)/);
  assert.match(css, /--alabama-topographic-contours-smoke:\s*url\("\/brand\/alabama-topographic-contours-smoke\.svg"\)/);
  assert.match(css, /--alabama-contour-line-color:\s*#88623c/i);
  assert.match(css, /--alabama-map-label-color:\s*#172c3f/i);
  assert.match(css, /--alabama-water-label-color:\s*#2f5d50/i);
  assert.match(css, /--alabama-map-scale:\s*clamp\(1500px,\s*156vw,\s*2800px\)/);
  assert.match(css, /--alabama-map-mobile-scale:\s*1180px/);
  assert.match(css, /--maine-topographic-contours:\s*var\(--alabama-topographic-contours\)/);
  assert.match(css, /--maine-topographic-contours-smoke:\s*var\(--alabama-topographic-contours-smoke\)/);
  assert.match(css, /--alabama-contour-x:\s*0px/);
  assert.match(css, /--alabama-contour-y:\s*0px/);
  assert.match(css, /\.site-topography-backdrop\s*{/);
  assert.match(css, /border-radius:\s*50%/);
  assert.match(maineContours, /Maine topographic contour accent, oxblood/);
  assert.match(maineContours, /clipPath id="maine-outline"/);
  assert.match(maineContours, /stroke="#793735"/);
  assert.match(maineSmokeContours, /Maine topographic contour accent, smoke gray/);
  assert.match(maineSmokeContours, /clipPath id="maine-outline-smoke"/);
  assert.match(maineSmokeContours, /stroke="#C3C2BD"/);
  assert.match(alabamaContours, /Alabama topographic contour accent, independent bronze/);
  assert.match(alabamaContours, /clipPath id="alabama-outline"/);
  assert.match(alabamaContours, /stroke="#88623C"/);
  assert.match(alabamaSmokeContours, /Alabama topographic contour accent, smoke gray/);
  assert.match(alabamaSmokeContours, /clipPath id="alabama-outline-smoke"/);
  assert.match(alabamaSmokeContours, /stroke="#C3C2BD"/);
  assert.match(alabamaMapLabels, /Alabama cartographic city and water feature labels/);
  assert.match(alabamaMapLabels, /city-label/);
  assert.match(alabamaMapLabels, /water-label/);
  assert.match(alabamaMapLabels, /fill: #172c3f/);
  assert.match(alabamaMapLabels, /fill: #2f5d50/);
  assert.match(alabamaMapLabels, /Huntsville/);
  assert.match(alabamaMapLabels, /Birmingham/);
  assert.match(alabamaMapLabels, /Montgomery/);
  assert.match(alabamaMapLabels, /Mobile/);
  assert.match(alabamaMapLabels, /Tennessee River/);
  assert.match(alabamaMapLabels, /Coosa River/);
  assert.match(alabamaMapLabels, /Alabama River/);
  assert.match(alabamaMapLabels, /Mobile Bay/);
  assert.match(alabamaMapLabels, /Gulf of Mexico/);
  assert.match(layout, /AlabamaTopographicBackdrop/);
  assert.match(alabamaTopographicBackdrop, /window\.addEventListener\("scroll", requestUpdate, \{ passive: true \}\)/);
  assert.match(alabamaTopographicBackdrop, /window\.removeEventListener\("scroll", requestUpdate\)/);
  const siteTopographyBackdrop = cssBlock(css, ".site-topography-backdrop");
  assert.match(siteTopographyBackdrop, /position:\s*fixed/);
  assert.match(siteTopographyBackdrop, /inset:\s*-38vh -52vw/);
  assert.match(siteTopographyBackdrop, /pointer-events:\s*none/);
  assert.match(siteTopographyBackdrop, /background-image:[\s\S]*?var\(--alabama-map-labels\)/);
  assert.match(siteTopographyBackdrop, /background-image:[\s\S]*?var\(--alabama-topographic-contours\)/);
  assert.match(siteTopographyBackdrop, /calc\(50% \+ var\(--alabama-contour-x\)\)/);
  assert.match(siteTopographyBackdrop, /calc\(50% \+ var\(--alabama-contour-y\)\)/);
  assert.match(siteTopographyBackdrop, /var\(--alabama-contour-y\)/);
  assert.match(siteTopographyBackdrop, /var\(--alabama-map-scale\) auto/);
  assert.match(siteTopographyBackdrop, /opacity:\s*0\.2/);
  assert.match(siteTopographyBackdrop, /will-change:\s*background-position/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*?\.site-topography-backdrop/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.doctrine-command,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.doctrine-sequence\s*{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.site-topography-backdrop\s*{[^}]*inset:\s*-32vh -58vw/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.site-topography-backdrop\s*{[^}]*var\(--alabama-map-mobile-scale\) auto/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.site-topography-backdrop\s*{[^}]*opacity:\s*0\.15/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.doctrine-sequence\s*{[^}]*grid-template-columns:\s*1fr/);

  const symbolUrl = new URL(
    "../public/brand/apex-governance-group-symbol.png",
    import.meta.url,
  );
  const symbol160Url = new URL(
    "../public/brand/apex-governance-group-symbol-160.webp",
    import.meta.url,
  );
  const symbol320Url = new URL(
    "../public/brand/apex-governance-group-symbol-320.webp",
    import.meta.url,
  );
  const symbol640Url = new URL(
    "../public/brand/apex-governance-group-symbol-640.webp",
    import.meta.url,
  );
  const symbol1024Url = new URL(
    "../public/brand/apex-governance-group-symbol-1024.webp",
    import.meta.url,
  );
  await Promise.all([
    access(symbolUrl),
    access(symbol160Url),
    access(symbol320Url),
    access(symbol640Url),
    access(symbol1024Url),
  ]);

  const symbol = await readFile(symbolUrl);
  assert.equal(symbol.toString("ascii", 1, 4), "PNG");
  assert.equal(symbol.readUInt32BE(16), symbol.readUInt32BE(20));
  assert.ok(symbol.readUInt32BE(16) >= 1000);
  assert.equal(symbol[25], 6);
  assert.equal(symbol.readUInt32BE(16), 1200);
  assert.match(css, /--agg-seal-small:\s*image-set/);
  assert.match(css, /--agg-seal-large:\s*image-set/);
  assert.match(css, /apex-governance-group-symbol-160\.webp/);
  assert.match(css, /apex-governance-group-symbol-1024\.webp/);
});

test("masthead keeps distressed backdrop separate from clean symbol", async () => {
  const css = await read("app/globals.css");
  const heroTexture = cssBlock(css, ".hero::before");
  const heroSymbol = cssBlock(css, ".hero::after");
  const body = cssBlock(css, "body");
  const selection = cssBlock(css, "::selection");
  const surfaceSection = cssBlock(css, ".section--surface");
  const surfaceCommand = cssBlock(css, ".surface-command");
  const surfaceSharedPanel = cssBlock(css, ".surface-command__panel,\n.surface-signal-card");
  const surfaceCommandPanelLight = cssBlock(
    css,
    ".surface-command__panel::before,\n.surface-signal-card::before",
  );
  const surfaceCommandPanelSweep = cssBlock(css, ".surface-command__panel::after");
  const surfaceSignalGrid = cssBlock(css, ".surface-signal-grid");
  const surfaceSignalCard = cssBlock(css, ".surface-signal-card");
  const sharedPerspective = cssBlock(css, ".hero,\n.page-hero,\n.section--dark,\n.callout");
  const pageHeroInnerRail = cssBlock(css, ".page-hero__inner::before");
  const heroContentContrast = cssBlock(css, ".hero__content::before");
  const brandLockup = cssBlock(css, ".brand-lockup");
  const brandTagline = cssBlock(css, ".brand-text span");
  const siteHeaderActions = cssBlock(css, ".site-header__actions");
  const buttonAdmin = cssBlock(css, ".button--admin");
  const buttonInvestor = cssBlock(css, ".button--investor");
  const buttonSurveyHuman = cssBlock(css, ".button--survey-human");
  const buttonSurveySystems = cssBlock(css, ".button--survey-systems");
  const darkSection = cssBlock(css, ".section--dark");
  const darkSectionContour = cssBlock(css, ".section--dark::before");
  const heroMetrics = cssBlock(css, ".hero__metrics");
  const heroMetricContour = cssBlock(css, ".hero__metrics div::before");
  const heroHeadline = cssBlock(css, ".hero h1");
  const heroHeadlineClass = cssBlock(css, ".hero__headline");
  const heroHeadlineSpan = cssBlock(css, ".hero__headline span");
  const heroReadableCopy = cssBlock(css, ".hero__statement,\n.hero__lede,\n.hero .eyebrow");
  const proseParagraph = cssBlock(css, ".prose p");
  const heroStatement = cssBlock(css, ".hero__statement");
  const heroLede = cssBlock(css, ".hero__lede");
  const heroSecondaryActions = cssBlock(css, ".hero__secondary-actions");
  const heroSecondaryActionButtons = cssBlock(css, ".hero__secondary-actions .button");
  const heroSolutionSurveyActions = cssBlock(css, ".hero__solution-survey-actions");
  const heroSolutionSurveyActionButtons = cssBlock(css, ".hero__solution-survey-actions .button");
  const heroPillarIntro = cssBlock(css, ".hero__pillar-intro");
  const heroPillarCopy = cssBlock(css, ".hero__pillar-copy");
  const heroPillarHeading = cssBlock(css, ".hero__pillar-heading");
  const heroPillarHeadingSpan = cssBlock(css, ".hero__pillar-heading span");
  const heroPillarHeadingSecondLine = cssBlock(css, ".hero__pillar-heading span + span");
  const heroSolutionBridge = cssBlock(css, ".hero__solution-bridge");
  const heroSolutionBridgeLede = cssBlock(css, ".hero__solution-bridge-lede");
  const heroSolutionSelector = cssBlock(css, ".hero__solution-selector");
  const heroSolutionLanes = cssBlock(css, ".hero__solution-lanes");
  const heroSolutionLane = cssBlock(css, "button.hero__solution-lane");
  const heroSolutionLaneContour = cssBlock(css, "button.hero__solution-lane::before");
  const heroSolutionLaneHover = cssBlock(
    css,
    "button.hero__solution-lane:hover,\nbutton.hero__solution-lane:focus-visible",
  );
  const heroSolutionLaneActive = cssBlock(css, "button.hero__solution-lane.is-active");
  const heroSolutionLaneNumber = cssBlock(css, ".hero__solution-lane-number");
  const heroSolutionLaneTitle = cssBlock(css, ".hero__solution-lane-title");
  const heroSolutionPopout = cssBlock(css, ".hero__solution-popout");
  const heroSolutionPopoutContour = cssBlock(css, ".hero__solution-popout::before");
  const heroSolutionPopoutClose = cssBlock(css, ".hero__solution-popout-close");
  const heroSolutionPopoutTitle = cssBlock(css, ".hero__solution-popout h3");
  const heroSolutionPopoutCopy = cssBlock(css, ".hero__solution-popout p");
  const heroMetricCard = cssBlock(css, ".hero__metrics div");
  const sideNav = cssBlock(css, ".site-side-nav");
  const sideNavLinks = cssBlock(css, ".site-side-nav__links");
  const sideNavAnchor = cssBlock(css, ".site-side-nav a");
  const commitmentCard = cssBlock(css, ".commitment-card");
  const kaigesGrid = cssBlock(css, ".kaiges-grid");
  const kaigesToolbar = cssBlock(css, ".kaiges-toolbar");
  const kaigesCard = cssBlock(css, ".kaiges-card");
  const kaigesCardSelect = cssBlock(css, ".kaiges-card__select");
  const kaigesCardFlip = cssBlock(css, ".kaiges-card__flip");
  const kaigesCardLetter = cssBlock(css, ".kaiges-card__letter");
  const kaigesCardOptionMeta = cssBlock(css, ".kaiges-card__option-meta");
  const kaigesLockChip = cssBlock(css, ".kaiges-lock-chip");
  const kaigesLockedChip = cssBlock(css, ".kaiges-lock-chip.is-locked");
  const kaigesTermBank = cssBlock(css, ".kaiges-term-bank");
  const kaigesTermBankCount = cssBlock(css, ".kaiges-term-bank__count");
  const kaigesTermBankGrid = cssBlock(css, ".kaiges-term-bank__grid");
  const kaigesTermColumn = cssBlock(css, ".kaiges-term-column");
  const kaigesSelectedTerm = cssBlock(css, ".kaiges-term-column li.is-selected");
  const kaigesElectionPanel = cssBlock(css, ".kaiges-election-panel");
  const kaigesSelectedAttributes = cssBlock(css, ".kaiges-selected-attributes");
  const kaigesSelectedAttribute = cssBlock(css, ".kaiges-selected-attributes li");
  const kaigesPreferenceGrid = cssBlock(css, ".kaiges-preference-grid");
  const kaigesPressedPreference = cssBlock(css, ".kaiges-preference button[aria-pressed=\"true\"]");
  const kaigesGeneratedPanel = cssBlock(css, ".kaiges-generated-panel");
  const kaigesGeneratedReview = cssBlock(css, ".kaiges-generated-review");
  const kaigesRecordActions = cssBlock(css, ".kaiges-record-actions");
  const kaigesRecordStatus = cssBlock(css, ".kaiges-record-status");
  const kaigesSavedStatus = cssBlock(css, ".kaiges-record-status.is-saved");
  const kaigesErrorStatus = cssBlock(css, ".kaiges-record-status.is-error");
  const kaigesListItem = cssBlock(css, ".kaiges-list__item");
  const pricingCardTop = cssBlock(css, ".pricing-card__top");
  const pricingCardTopValue = cssBlock(css, ".pricing-card__top strong");
  const pricingCardActions = cssBlock(css, ".pricing-card__actions");
  const pricingCardActionsForm = cssBlock(css, ".pricing-card__actions form");
  const storefrontProductIndex = cssBlock(css, ".storefront-product-index");
  const storefrontProductIndexItem = cssBlock(css, ".storefront-product-index__item");
  const pricingCardSaleStatus = cssBlock(css, ".pricing-card__sale-status");
  const saleBadge = cssBlock(css, ".sale-badge");
  const purchaseLibraryGrid = cssBlock(css, ".purchase-library-grid");
  const purchaseLibraryCard = cssBlock(css, ".purchase-library-card");
  const purchaseLibraryCardActions = cssBlock(css, ".purchase-library-card__actions");
  const deliveryLibraryGrid = cssBlock(css, ".delivery-library-grid");
  const deliveryOptionCard = cssBlock(css, ".delivery-option-card");
  const contractOptionGrid = cssBlock(css, ".contract-option-grid");
  const contractOptionCard = cssBlock(css, ".contract-option-card");
  const investorAlert = cssBlock(css, ".investor-alert");
  const investorQuickSheetLink = cssBlock(css, ".investor-quick-sheet-link");
  const investorQuickSheetAnchor = cssBlock(css, ".investor-quick-sheet-link a");
  const investorAvailability = cssBlock(css, ".investor-availability");
  const investorSignalGrid = cssBlock(css, ".investor-signal-grid");
  const valuationMetricGrid = cssBlock(css, ".valuation-metric-grid");
  const valuationMetricCard = cssBlock(css, ".valuation-metric-card");
  const valuationBasisGrid = cssBlock(css, ".valuation-basis-grid");
  const valuationBasisCard = cssBlock(css, ".valuation-basis-card");
  const valuationMethod = cssBlock(css, ".valuation-method");
  const valuationMethodPanelArticle = cssBlock(css, ".valuation-method__panel article");
  const capitalStructureGrid = cssBlock(css, ".capital-structure-grid");
  const capitalStructureCard = cssBlock(css, ".capital-structure-card");
  const researchLaneGrid = cssBlock(css, ".research-lane-grid");
  const investorSteering = cssBlock(css, ".investor-steering");
  const investmentPathGrid = cssBlock(css, ".investment-path-grid");
  const investmentPathCard = cssBlock(css, ".investment-path-card");
  const forecastWindowGrid = cssBlock(css, ".forecast-window-grid");
  const forecastWindowCard = cssBlock(css, ".forecast-window-card");
  const forecastTableShell = cssBlock(css, ".forecast-table-shell");
  const forecastTable = cssBlock(css, ".forecast-table");
  const forecastTableCells = cssBlock(css, ".forecast-table th,\n.forecast-table td");
  const forecastTableCell = cssBlock(css, ".forecast-table__cell");
  const forecastTableCellStrong = cssBlock(css, ".forecast-table__cell strong");
  const evidenceSourceGrid = cssBlock(css, ".evidence-source-grid");
  const evidenceSourceCard = cssBlock(css, ".evidence-source-card");
  const integrationGrid = cssBlock(css, ".integration-grid");
  const integrationCard = cssBlock(css, ".integration-card");
  const founderSpotlight = cssBlock(css, ".founder-spotlight");
  const founderProfile = cssBlock(css, ".founder-spotlight__profile");
  const founderProofList = cssBlock(css, ".founder-proof-list");
  const founderFocusListItem = cssBlock(css, ".founder-focus li");
  const packageInclusionsTrigger = cssBlock(css, ".package-inclusions__trigger");
  const packageInclusionsCard = cssBlock(css, ".package-inclusions__card");
  const packageInclusionsTop = cssBlock(css, ".package-inclusions__top");
  const packageInclusionsClose = cssBlock(css, ".package-inclusions__close");
  const packageInclusionsList = cssBlock(css, ".package-inclusions__card ul");
  const onboardingPath = cssBlock(css, ".onboarding-path");
  const onboardingSelectedPackage = cssBlock(css, ".onboarding-selected-package");
  const onboardingFormGrid = cssBlock(css, ".onboarding-form__grid");
  const onboardingFormTrap = cssBlock(css, ".onboarding-form__trap");
  const onboardingAcknowledgement = cssBlock(css, ".onboarding-form__acknowledgement");
  const onboardingFormActions = cssBlock(css, ".onboarding-form__actions");
  const methodologyGrid = cssBlock(css, ".methodology-grid");
  const methodologyCard = cssBlock(css, ".methodology-card");
  const configurationHero = cssBlock(css, ".configuration-hero");
  const configurationConsole = cssBlock(css, ".configuration-console");
  const configurationConsoleContour = cssBlock(css, ".configuration-console::before");
  const configurationPositionGrid = cssBlock(css, ".configuration-position-grid");
  const configurationPositionCard = cssBlock(css, ".configuration-position-card");
  const configurationLockChip = cssBlock(css, ".configuration-lock-chip");
  const configurationLockedChip = cssBlock(css, ".configuration-lock-chip.is-locked");
  const configurationLockGrid = cssBlock(css, ".configuration-lock-grid");
  const clientConfigurationRecordsPanel = cssBlock(css, ".client-configuration-records");
  const clientConfigurationRecordsHeading = cssBlock(css, ".client-configuration-records__heading");
  const configurationRecordGrid = cssBlock(css, ".configuration-record-grid");
  const configurationRecordCard = cssBlock(css, ".configuration-record-card");
  const configurationRecordPre = cssBlock(css, ".configuration-record-card pre");
  const onboardingRecordGrid = cssBlock(css, ".onboarding-record-grid");
  const onboardingRecordCard = cssBlock(css, ".onboarding-record-card");
  const configurationRelationGrid = cssBlock(css, ".configuration-relation-grid");
  const configurationLayerGrid = cssBlock(css, ".configuration-layer-grid");
  const configurationProductTable = cssBlock(css, ".configuration-product-table div");
  const configurationStageGrid = cssBlock(css, ".configuration-stage-grid");
  const configurationStageCard = cssBlock(css, ".configuration-stage-card");
  const configurationRuleGrid = cssBlock(css, ".configuration-rule-grid");
  const configurationConditionGrid = cssBlock(css, ".configuration-condition-grid");
  const configurationMeasureGrid = cssBlock(css, ".configuration-measure-grid");
  const configurationRulingGrid = cssBlock(css, ".configuration-ruling-grid");
  const commandStatusGrid = cssBlock(css, ".command-status-grid");
  const commandGrid = cssBlock(css, ".command-grid");
  const commandCell = cssBlock(css, ".command-cell");
  const commandOutputGrid = cssBlock(css, ".command-output-grid");
  const commandContextCard = cssBlock(css, ".command-context-card");
  const commandContextContour = cssBlock(css, ".command-context-card::before");
  const darkStackContour = cssBlock(css, ".section--dark .stack-list__item::before");
  const clientAccessGrid = cssBlock(css, ".client-access-grid");
  const clientAccessCard = cssBlock(css, ".client-access-card");
  const protectedAccessShell = cssBlock(css, ".protected-access-shell");
  const clientServicesGrid = cssBlock(css, ".client-services-grid");
  const clientServiceCard = cssBlock(css, ".client-service-card");
  const portalShell = cssBlock(css, ".portal-shell");
  const portalSummary = cssBlock(css, ".portal-summary");
  const portalStatGrid = cssBlock(css, ".portal-stat-grid");
  const portalAdminGrid = cssBlock(css, ".portal-admin-grid");
  const portalContactGrid = cssBlock(css, ".portal-contact-grid");
  const portalAdminList = cssBlock(css, ".portal-admin-list");
  const portalCommissionItem = cssBlock(css, ".portal-commission-item");
  const portalWorkLayout = cssBlock(css, ".portal-work-layout");
  const pageHeroTexture = cssBlock(css, ".page-hero::before");
  const pageHeroSymbol = cssBlock(css, ".page-hero::after");
  const servicesHeroTitle = cssBlock(css, ".page-hero .services-hero__title");
  const surveyBrief = cssBlock(css, ".survey-brief");
  const surveyForm = cssBlock(css, ".survey-form");
  const surveyFormContact = cssBlock(css, ".survey-form__contact");
  const surveyQuestionList = cssBlock(css, ".survey-question-list");
  const surveyQuestionNumber = cssBlock(css, ".survey-question-card__number");

  assert.match(css, /--shadow-raised:/);
  assert.match(css, /--shadow-command:/);
  assert.match(css, /--surface-light:/);
  assert.match(css, /--surface-dark:/);
  assert.match(body, /text-rendering:\s*optimizeLegibility/);
  assert.match(body, /-webkit-font-smoothing:\s*antialiased/);
  assert.match(selection, /background:\s*rgba\(136,\s*98,\s*60,\s*0\.24\)/);
  assert.match(surfaceSection, /overflow:\s*hidden/);
  assert.match(surfaceCommand, /grid-template-columns:\s*minmax\(0,\s*0\.92fr\)\s*minmax\(0,\s*1\.08fr\)/);
  assert.match(surfaceCommand, /perspective:\s*1300px/);
  assert.match(surfaceSharedPanel, /transform-style:\s*preserve-3d/);
  assert.match(surfaceSharedPanel, /box-shadow:\s*var\(--shadow-raised\)/);
  assert.match(surfaceCommandPanelLight, /var\(--maine-topographic-contours\)/);
  assert.match(surfaceCommandPanelSweep, /linear-gradient\(90deg,\s*transparent,\s*rgba\(136,\s*98,\s*60,\s*0\.72\),\s*transparent\)/);
  assert.match(surfaceSignalGrid, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(surfaceSignalCard, /transition:[\s\S]*?transform 180ms ease/);
  assert.match(sharedPerspective, /perspective:\s*1400px/);
  assert.match(pageHeroInnerRail, /linear-gradient\(180deg,\s*transparent,\s*rgba\(136,\s*98,\s*60,\s*0\.82\),\s*transparent\)/);
  assert.match(css, /@media \(hover:\s*hover\)[\s\S]*?transform:\s*translate3d\(0,\s*-5px,\s*18px\)/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*no-preference\)[\s\S]*?animation:\s*executive-surface-sweep 9s ease-in-out infinite alternate/);
  assert.match(css, /@keyframes executive-surface-sweep/);
  assert.match(css, /@keyframes executive-field-drift/);
  assert.match(css, /@media \(prefers-reduced-motion:\s*reduce\)[\s\S]*?animation:\s*none/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.surface-command,[\s\S]*?\.surface-signal-grid\s*{[^}]*grid-template-columns:\s*1fr/);
  assert.match(heroHeadline, /font-size:\s*clamp\(2\.05rem,\s*3\.8vw,\s*3\.2rem\)/);
  assert.match(heroContentContrast, /z-index:\s*-1/);
  assert.match(heroContentContrast, /radial-gradient\(ellipse at 28% 28%,\s*rgba\(5,\s*5,\s*5,\s*0\.96\)/);
  assert.match(heroContentContrast, /linear-gradient\(90deg,\s*rgba\(5,\s*5,\s*5,\s*0\.82\)/);
  assert.match(heroHeadlineClass, /0 2px 14px rgba\(0,\s*0,\s*0,\s*0\.92\)/);
  assert.match(heroHeadlineClass, /0 0 42px rgba\(0,\s*0,\s*0,\s*0\.64\)/);
  assert.match(heroReadableCopy, /0 2px 12px rgba\(0,\s*0,\s*0,\s*0\.84\)/);
  assert.match(heroReadableCopy, /0 0 34px rgba\(0,\s*0,\s*0,\s*0\.58\)/);
  assert.match(heroHeadlineSpan, /display:\s*block/);
  assert.match(heroHeadlineSpan, /white-space:\s*nowrap/);
  assert.match(proseParagraph, /text-indent:\s*1\.35em/);
  assert.match(heroStatement, /font-size:\s*clamp\(1\.22rem,\s*2\.1vw,\s*1\.85rem\)/);
  assert.match(heroLede, /font-size:\s*clamp\(1rem,\s*1\.35vw,\s*1\.12rem\)/);
  assert.match(heroSecondaryActions, /max-width:\s*700px/);
  assert.match(heroSecondaryActions, /margin:\s*12px 0 0/);
  assert.match(heroSecondaryActionButtons, /min-height:\s*42px/);
  assert.match(heroSecondaryActionButtons, /font-size:\s*0\.86rem/);
  assert.match(buttonSurveyHuman, /rgba\(121,\s*55,\s*53,\s*0\.96\)/);
  assert.match(buttonSurveyHuman, /color:\s*var\(--paper\)/);
  assert.match(buttonSurveySystems, /rgba\(244,\s*241,\s*234,\s*0\.96\)/);
  assert.match(buttonSurveySystems, /color:\s*var\(--navy\)/);
  assert.match(heroSolutionSurveyActions, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(heroSolutionSurveyActions, /max-width:\s*760px/);
  assert.match(heroSolutionSurveyActions, /margin:\s*0 auto 18px/);
  assert.match(heroSolutionSurveyActionButtons, /justify-content:\s*flex-start/);
  assert.match(heroSolutionSurveyActionButtons, /min-height:\s*62px/);
  assert.match(heroPillarIntro, /text-align:\s*center/);
  assert.match(heroPillarIntro, /margin:\s*clamp\(128px,\s*15svh,\s*164px\)\s*auto\s*0/);
  assert.match(heroPillarCopy, /max-width:\s*760px/);
  assert.match(heroPillarCopy, /line-height:\s*1\.6/);
  assert.match(heroPillarHeading, /font-family:\s*Georgia,\s*"Times New Roman",\s*serif/);
  assert.match(heroPillarHeadingSpan, /display:\s*block/);
  assert.match(heroPillarHeadingSecondLine, /font-family:\s*"Archivo",\s*"Aptos",\s*"Segoe UI",\s*Arial,\s*sans-serif/);
  assert.match(heroPillarHeadingSecondLine, /font-size:\s*0\.56em/);
  assert.match(heroPillarHeadingSecondLine, /font-weight:\s*400/);
  assert.match(heroSolutionBridge, /max-width:\s*1120px/);
  assert.match(heroSolutionBridge, /margin:\s*clamp\(26px,\s*4svh,\s*42px\)\s*auto\s*0/);
  assert.match(heroSolutionBridgeLede, /max-width:\s*820px/);
  assert.match(heroSolutionBridgeLede, /text-align:\s*center/);
  assert.match(heroSolutionSelector, /gap:\s*12px/);
  assert.match(heroSolutionLanes, /max-width:\s*980px/);
  assert.match(heroSolutionLanes, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(heroSolutionLanes, /gap:\s*10px/);
  assert.match(heroSolutionLane, /min-height:\s*76px/);
  assert.match(heroSolutionLane, /align-content:\s*center/);
  assert.match(heroSolutionLane, /justify-items:\s*center/);
  assert.match(heroSolutionLane, /gap:\s*8px/);
  assert.match(heroSolutionLane, /border:\s*1px solid rgba\(244,\s*241,\s*234,\s*0\.24\)/);
  assert.match(heroSolutionLane, /padding:\s*10px/);
  assert.match(heroSolutionLane, /transition:[\s\S]*?transform 0\.18s ease/);
  assert.match(heroSolutionLaneContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(heroSolutionLaneContour, /opacity:\s*0\.12/);
  assert.match(heroSolutionLaneHover, /transform:\s*translateY\(-3px\)/);
  assert.match(heroSolutionLaneHover, /border-color:\s*rgba\(136,\s*98,\s*60,\s*0\.72\)/);
  assert.match(heroSolutionLaneActive, /border-color:\s*rgba\(136,\s*98,\s*60,\s*0\.9\)/);
  assert.match(heroSolutionLaneNumber, /place-items:\s*center/);
  assert.match(heroSolutionLaneNumber, /width:\s*38px/);
  assert.match(heroSolutionLaneTitle, /display:\s*block/);
  assert.match(heroSolutionLaneTitle, /font-weight:\s*900/);
  assert.match(heroSolutionLaneTitle, /line-height:\s*1\.15/);
  assert.match(heroSolutionLaneTitle, /overflow-wrap:\s*anywhere/);
  assert.match(heroSolutionLaneTitle, /text-align:\s*center/);
  assert.match(heroSolutionLaneTitle, /text-transform:\s*uppercase/);
  assert.match(heroSolutionPopout, /max-width:\s*860px/);
  assert.match(heroSolutionPopout, /animation:\s*hero-solution-pop 0\.18s ease-out both/);
  assert.match(heroSolutionPopoutContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(heroSolutionPopoutClose, /width:\s*34px/);
  assert.match(heroSolutionPopoutTitle, /text-transform:\s*uppercase/);
  assert.match(heroSolutionPopoutCopy, /line-height:\s*1\.58/);
  assert.match(css, /@keyframes hero-solution-pop/);
  assert.match(brandLockup, /flex:\s*1 1 380px/);
  assert.match(brandLockup, /min-width:\s*0/);
  assert.match(brandTagline, /max-width:\s*420px/);
  assert.match(brandTagline, /line-height:\s*1\.15/);
  assert.match(siteHeaderActions, /overflow-x:\s*auto/);
  assert.match(siteHeaderActions, /scrollbar-width:\s*none/);
  assert.match(buttonAdmin, /border-color:\s*rgba\(121,\s*55,\s*53,\s*0\.36\)/);
  assert.match(buttonAdmin, /color:\s*var\(--oxblood\)/);
  assert.match(buttonInvestor, /border-color:\s*rgba\(136,\s*98,\s*60,\s*0\.42\)/);
  assert.match(buttonInvestor, /color:\s*var\(--bronze-dark\)/);
  assert.match(darkSection, /isolation:\s*isolate/);
  assert.match(darkSection, /overflow:\s*hidden/);
  assert.match(darkSectionContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(darkSectionContour, /opacity:\s*0\.1/);
  assert.match(heroMetricCard, /text-align:\s*center/);
  assert.match(heroMetricCard, /justify-content:\s*flex-start/);
  assert.match(heroMetricCard, /isolation:\s*isolate/);
  assert.match(heroMetricContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(heroMetricContour, /opacity:\s*0\.18/);
  assert.match(surveyBrief, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*minmax\(300px,\s*0\.58fr\)/);
  assert.match(surveyForm, /box-shadow:\s*var\(--shadow-raised\)/);
  assert.match(surveyFormContact, /grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(surveyQuestionList, /list-style:\s*none/);
  assert.match(
    css,
    /\.survey-question-card\s*{[^}]*display:\s*grid;[^}]*grid-template-columns:\s*58px minmax\(0,\s*1fr\)/,
  );
  assert.match(surveyQuestionNumber, /place-items:\s*center/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.hero__solution-survey-actions,[\s\S]*?\.survey-brief,[\s\S]*?\.survey-form__contact\s*{[^}]*grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.survey-question-card\s*{[^}]*grid-template-columns:\s*1fr/);
  assert.match(pricingCardTop, /align-items:\s*start/);
  assert.match(pricingCardTopValue, /max-width:\s*12rem/);
  assert.match(pricingCardTopValue, /font-size:\s*0\.92rem/);
  assert.match(pricingCardTopValue, /text-align:\s*right/);
  assert.match(pricingCardActions, /margin-top:\s*auto/);
  assert.match(pricingCardActionsForm, /margin-top:\s*0/);
  assert.match(storefrontProductIndex, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(storefrontProductIndexItem, /min-height:\s*122px/);
  assert.match(storefrontProductIndexItem, /border-left:\s*4px solid var\(--bronze\)/);
  assert.match(pricingCardSaleStatus, /display:\s*flex/);
  assert.match(pricingCardSaleStatus, /flex-wrap:\s*wrap/);
  assert.match(saleBadge, /text-transform:\s*uppercase/);
  assert.match(purchaseLibraryGrid, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(purchaseLibraryCard, /min-height:\s*420px/);
  assert.match(purchaseLibraryCard, /border-left:\s*5px solid var\(--navy\)/);
  assert.match(purchaseLibraryCardActions, /justify-content:\s*space-between/);
  assert.match(deliveryLibraryGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(deliveryOptionCard, /min-height:\s*430px/);
  assert.match(contractOptionGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(contractOptionCard, /min-height:\s*360px/);
  assert.match(contractOptionCard, /border-left:\s*5px solid var\(--bronze\)/);
  assert.match(investorAlert, /grid-template-columns:\s*auto 1fr/);
  assert.match(investorAlert, /border-left:\s*5px solid var\(--oxblood\)/);
  assert.match(investorQuickSheetLink, /display:\s*flex/);
  assert.match(investorQuickSheetLink, /max-width:\s*780px/);
  assert.match(investorQuickSheetAnchor, /border-radius:\s*999px/);
  assert.match(investorQuickSheetAnchor, /text-transform:\s*uppercase/);
  assert.match(investorAvailability, /grid-template-columns:\s*minmax\(0,\s*0\.92fr\)\s*minmax\(260px,\s*0\.78fr\)\s*auto/);
  assert.match(investorAvailability, /border-left:\s*5px solid var\(--bronze\)/);
  assert.match(investorSignalGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(valuationMetricGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(valuationMetricCard, /min-height:\s*230px/);
  assert.match(valuationMetricCard, /border-top:\s*5px solid rgba\(136,\s*98,\s*60,\s*0\.72\)/);
  assert.match(valuationBasisGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(valuationBasisCard, /min-height:\s*344px/);
  assert.match(valuationMethod, /grid-template-columns:\s*minmax\(0,\s*0\.42fr\)\s*minmax\(0,\s*0\.58fr\)/);
  assert.match(valuationMethodPanelArticle, /grid-template-columns:\s*76px 1fr/);
  assert.match(capitalStructureGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(capitalStructureCard, /border-left:\s*5px solid rgba\(136,\s*98,\s*60,\s*0\.62\)/);
  assert.match(researchLaneGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /\.research-lane-card\s*{[^}]*min-height:\s*720px/);
  assert.match(css, /\.research-lane-card__heading\s*{[^}]*display:\s*flex/);
  assert.match(css, /\.research-lane-card__heading\s*{[^}]*text-align:\s*left/);
  assert.match(css, /\.research-lane-card__heading h3\s*{[^}]*text-align:\s*left/);
  assert.match(css, /\.research-lane-card dt\s*{[^}]*text-align:\s*left/);
  assert.match(css, /\.research-lane-card dd\s*{[^}]*text-indent:\s*2\.1rem/);
  assert.match(css, /\.research-lane-card__advantage h4\s*{[^}]*text-align:\s*left/);
  assert.match(css, /\.research-lane-card__advantage ul\s*{[^}]*padding-left:\s*1\.2rem/);
  assert.match(investorSteering, /grid-template-columns:\s*minmax\(0,\s*0\.88fr\)\s*minmax\(320px,\s*0\.72fr\)/);
  assert.match(css, /\.investor-steering__panel\s*{[^}]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.06\)/);
  assert.match(investmentPathGrid, /grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(investmentPathCard, /min-height:\s*430px/);
  assert.match(investmentPathCard, /border-top:\s*5px solid rgba\(136,\s*98,\s*60,\s*0\.7\)/);
  assert.match(forecastWindowGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(forecastWindowCard, /min-height:\s*260px/);
  assert.match(forecastWindowCard, /background:\s*rgba\(255,\s*255,\s*255,\s*0\.06\)/);
  assert.match(forecastTableShell, /overflow-x:\s*auto/);
  assert.match(forecastTable, /min-width:\s*1180px/);
  assert.match(forecastTableCells, /vertical-align:\s*middle/);
  assert.match(forecastTableCells, /text-align:\s*center/);
  assert.match(forecastTableCell, /display:\s*flex/);
  assert.match(forecastTableCell, /min-height:\s*212px/);
  assert.match(forecastTableCell, /align-items:\s*center/);
  assert.match(forecastTableCell, /flex-direction:\s*column/);
  assert.match(forecastTableCell, /justify-content:\s*center/);
  assert.match(forecastTableCell, /text-align:\s*center/);
  assert.match(forecastTableCellStrong, /margin-top:\s*0/);
  assert.match(forecastTableCellStrong, /font-weight:\s*950/);
  assert.match(forecastTableCellStrong, /text-align:\s*center/);
  assert.match(evidenceSourceGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(evidenceSourceCard, /min-height:\s*170px/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.storefront-product-index,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.purchase-library-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.delivery-library-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.contract-option-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.investor-availability,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.investor-quick-sheet-link\s*{[^}]*flex-direction:\s*column/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.investor-signal-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.valuation-metric-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.valuation-method,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.research-lane-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.investor-steering,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.investment-path-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.forecast-window-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.evidence-source-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(integrationGrid, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(integrationCard, /background:\s*rgba\(255,\s*255,\s*255,\s*0\.06\)/);
  assert.match(integrationCard, /min-height:\s*284px/);
  assert.match(founderSpotlight, /grid-template-columns:\s*minmax\(0,\s*0\.95fr\)\s*minmax\(320px,\s*0\.55fr\)/);
  assert.match(founderProfile, /background:\s*rgba\(244,\s*241,\s*234,\s*0\.08\)/);
  assert.match(founderProofList, /margin:\s*0/);
  assert.match(founderFocusListItem, /grid-template-columns:\s*auto 1fr/);
  assert.match(packageInclusionsTrigger, /justify-content:\s*center/);
  assert.match(packageInclusionsCard, /animation:\s*package-inclusions-pop 0\.16s ease-out/);
  assert.match(packageInclusionsTop, /justify-content:\s*space-between/);
  assert.match(packageInclusionsClose, /width:\s*32px/);
  assert.match(packageInclusionsList, /list-style:\s*none/);
  assert.match(onboardingPath, /grid-template-columns:\s*minmax\(0,\s*0\.48fr\)\s*minmax\(0,\s*0\.52fr\)/);
  assert.match(onboardingSelectedPackage, /grid-template-columns:\s*auto 1fr auto/);
  assert.match(onboardingFormGrid, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(onboardingFormTrap, /left:\s*-10000px/);
  assert.match(onboardingAcknowledgement, /align-items:\s*flex-start/);
  assert.match(onboardingFormActions, /flex-wrap:\s*wrap/);
  assert.match(sideNav, /position:\s*sticky/);
  assert.match(sideNavLinks, /overflow-x:\s*auto/);
  assert.match(sideNavAnchor, /min-height:\s*42px/);
  assert.match(css, /@media \(min-width:\s*1420px\)[\s\S]*?\.site-side-nav\s*{[^}]*position:\s*fixed/);
  assert.match(css, /@media \(min-width:\s*1420px\)[\s\S]*?\.site-side-nav\s*{[^}]*width:\s*146px/);
  assert.match(css, /@media \(min-width:\s*1420px\)[\s\S]*?\.site-side-nav__inner\s*{[^}]*min-width:\s*0/);
  assert.match(css, /@media \(min-width:\s*1420px\)[\s\S]*?\.site-side-nav__links\s*{[^}]*width:\s*100%/);
  assert.match(css, /@media \(min-width:\s*1420px\)[\s\S]*?\.site-side-nav a\s*{[^}]*overflow-wrap:\s*normal/);
  assert.match(css, /@media \(min-width:\s*1420px\)[\s\S]*?\.site-side-nav a\s*{[^}]*word-break:\s*normal/);
  assert.match(methodologyGrid, /grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(methodologyCard, /min-height:\s*384px/);
  assert.match(commandStatusGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(commandGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(commandCell, /min-height:\s*340px/);
  assert.match(commandOutputGrid, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*minmax\(280px,\s*0\.38fr\)/);
  assert.match(commandContextCard, /background:\s*rgba\(12,\s*12,\s*12,\s*0\.78\)/);
  assert.match(commandContextCard, /backdrop-filter:\s*blur\(16px\)/);
  assert.match(commandContextContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(commandContextContour, /opacity:\s*0\.24/);
  assert.match(darkStackContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(css, /\.section--dark \.service-card::before,[\s\S]*?background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(css, /\.configuration-position-card::before,[\s\S]*?background-image:\s*var\(--maine-topographic-contours\)/);
  assert.match(css, /background-image:\s*var\(--maine-topographic-contours\);\s*background-position:\s*right -138px top -110px;\s*background-repeat:\s*no-repeat;\s*background-size:\s*min\(520px,\s*112%\) auto;\s*opacity:\s*0\.14/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.command-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.configuration-position-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.onboarding-form__grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.onboarding-record-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.portal-admin-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.portal-commission-item,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.configuration-layer-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.configuration-condition-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.command-cell,[\s\S]*?min-height:\s*auto/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.configuration-stage-card,[\s\S]*?min-height:\s*auto/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.onboarding-selected-package\s*{[^}]*grid-template-columns:\s*1fr/);
  assert.match(commitmentCard, /grid-template-columns:\s*auto 1fr/);
  assert.match(kaigesGrid, /grid-template-columns:\s*repeat\(6,\s*minmax\(190px,\s*1fr\)\)/);
  assert.match(kaigesGrid, /overflow-x:\s*auto/);
  assert.match(kaigesGrid, /scroll-snap-type:\s*x proximity/);
  assert.match(kaigesToolbar, /justify-content:\s*space-between/);
  assert.match(kaigesCard, /min-height:\s*382px/);
  assert.match(kaigesCard, /border:\s*2px solid rgba\(23,\s*44,\s*63,\s*0\.22\)/);
  assert.match(kaigesCard, /transition:[\s\S]*?transform 0\.18s ease/);
  assert.match(kaigesCardSelect, /min-height:\s*294px/);
  assert.match(kaigesCardFlip, /animation:\s*kaiges-card-flip 460ms ease both/);
  assert.match(kaigesCardLetter, /min-width:\s*76px/);
  assert.match(kaigesCardLetter, /min-height:\s*76px/);
  assert.match(kaigesCardLetter, /text-align:\s*center/);
  assert.match(kaigesCardOptionMeta, /margin-top:\s*auto/);
  assert.match(kaigesCardOptionMeta, /border-top:\s*1px solid rgba\(12,\s*12,\s*12,\s*0\.1\)/);
  assert.match(css, /@keyframes kaiges-card-flip/);
  assert.match(kaigesLockChip, /text-transform:\s*uppercase/);
  assert.match(kaigesLockedChip, /background:\s*var\(--navy\)/);
  assert.match(kaigesTermBank, /margin-top:\s*20px/);
  assert.match(kaigesTermBankCount, /border-radius:\s*999px/);
  assert.match(kaigesTermBankCount, /text-transform:\s*uppercase/);
  assert.match(kaigesTermBankGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(kaigesTermColumn, /align-content:\s*start/);
  assert.match(kaigesSelectedTerm, /box-shadow:\s*inset 3px 0 0 rgba\(136,\s*98,\s*60,\s*0\.62\)/);
  assert.match(kaigesElectionPanel, /grid-template-columns:\s*minmax\(0,\s*0\.86fr\)\s*minmax\(300px,\s*1\.14fr\)/);
  assert.match(kaigesSelectedAttributes, /list-style:\s*none/);
  assert.match(kaigesSelectedAttribute, /grid-template-columns:\s*auto 1fr/);
  assert.match(kaigesPreferenceGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(kaigesPressedPreference, /background:\s*rgba\(23,\s*44,\s*63,\s*0\.1\)/);
  assert.match(kaigesGeneratedPanel, /grid-template-columns:\s*minmax\(260px,\s*0\.36fr\)\s*minmax\(0,\s*0\.64fr\)/);
  assert.match(kaigesGeneratedReview, /min-height:\s*310px/);
  assert.match(kaigesGeneratedReview, /resize:\s*vertical/);
  assert.match(kaigesRecordActions, /justify-content:\s*flex-end/);
  assert.match(kaigesRecordStatus, /grid-column:\s*1 \/ -1/);
  assert.match(kaigesRecordStatus, /text-transform:\s*uppercase/);
  assert.match(kaigesSavedStatus, /color:\s*var\(--navy\)/);
  assert.match(kaigesErrorStatus, /color:\s*var\(--oxblood\)/);
  assert.match(kaigesListItem, /grid-template-columns:\s*auto 1fr/);
  assert.match(configurationHero, /background:\s*rgba\(244,\s*241,\s*234,\s*0\.94\)/);
  assert.match(configurationConsole, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*auto/);
  assert.match(configurationConsole, /background:\s*rgba\(12,\s*12,\s*12,\s*0\.92\)/);
  assert.match(configurationConsoleContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(configurationConsoleContour, /opacity:\s*0\.22/);
  assert.match(configurationPositionGrid, /grid-template-columns:\s*repeat\(6,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationPositionCard, /min-height:\s*310px/);
  assert.match(configurationLockChip, /justify-content:\s*center/);
  assert.match(configurationLockChip, /text-transform:\s*uppercase/);
  assert.match(configurationLockedChip, /background:\s*var\(--navy\)/);
  assert.match(configurationLockedChip, /color:\s*var\(--paper\)/);
  assert.match(configurationLockGrid, /grid-template-columns:\s*minmax\(0,\s*0\.36fr\)\s*minmax\(0,\s*0\.64fr\)/);
  assert.match(clientConfigurationRecordsPanel, /margin:\s*28px 0/);
  assert.match(clientConfigurationRecordsHeading, /justify-content:\s*space-between/);
  assert.match(configurationRecordGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationRecordCard, /min-height:\s*430px/);
  assert.match(configurationRecordPre, /white-space:\s*pre-wrap/);
  assert.match(onboardingRecordGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(onboardingRecordCard, /min-height:\s*360px/);
  assert.match(configurationRelationGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationLayerGrid, /grid-template-columns:\s*repeat\(6,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationProductTable, /min-width:\s*880px/);
  assert.match(configurationProductTable, /grid-template-columns:\s*minmax\(92px,\s*0\.7fr\)\s*minmax\(260px,\s*2fr\)\s*minmax\(118px,\s*0\.9fr\)\s*minmax\(150px,\s*1\.1fr\)\s*minmax\(142px,\s*1fr\)/);
  assert.match(configurationStageGrid, /grid-template-columns:\s*repeat\(5,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationStageCard, /min-height:\s*540px/);
  assert.match(configurationRuleGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationConditionGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationMeasureGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(configurationRulingGrid, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(clientAccessGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(clientAccessCard, /min-height:\s*260px/);
  assert.match(protectedAccessShell, /grid-template-columns:\s*minmax\(0,\s*0\.92fr\)\s*minmax\(0,\s*1\.08fr\)/);
  assert.match(clientServicesGrid, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(clientServiceCard, /min-height:\s*430px/);
  assert.match(portalShell, /grid-template-columns:\s*minmax\(238px,\s*0\.32fr\)\s*minmax\(0,\s*1fr\)/);
  assert.match(portalSummary, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*minmax\(210px,\s*0\.34fr\)/);
  assert.match(portalStatGrid, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(portalAdminGrid, /grid-template-columns:\s*minmax\(0,\s*1\.15fr\)\s*minmax\(280px,\s*0\.85fr\)/);
  assert.match(portalContactGrid, /grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(portalAdminList, /grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(portalCommissionItem, /grid-template-columns:\s*minmax\(220px,\s*0\.48fr\)\s*minmax\(0,\s*1fr\)/);
  assert.match(portalWorkLayout, /grid-template-columns:\s*minmax\(0,\s*1fr\)\s*minmax\(280px,\s*0\.38fr\)/);
  assert.match(css, /background-image:\s*var\(--maine-topographic-contours\)/);
  assert.match(heroTexture, /repeating-linear-gradient/);
  assert.doesNotMatch(heroTexture, /apex-governance-group-symbol\.png/);
  assert.match(heroSymbol, /var\(--agg-seal-large\)/);
  assert.match(heroSymbol, /top clamp\(146px,\s*17svh,\s*166px\)/);
  assert.doesNotMatch(heroSymbol, /linear-gradient|radial-gradient|repeating-linear-gradient/);
  assert.doesNotMatch(heroSymbol, /filter\s*:/);
  assert.match(heroMetrics, /margin:\s*24px auto 0/);
  assert.match(css, /@media \(max-width:\s*1200px\)[\s\S]*?\.hero::after\s*{[^}]*top clamp\(126px,\s*15svh,\s*148px\)/);
  assert.match(css, /@media \(max-width:\s*1200px\)[\s\S]*?\.hero__pillar-intro\s*{[^}]*margin-top:\s*220px/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.hero::after\s*{[^}]*top 118px/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.hero__solution-lanes\s*{[^}]*max-width:\s*680px[\s\S]*?grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?button\.hero__solution-lane\s*{[^}]*min-height:\s*82px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero h1\s*{[^}]*font-size:\s*clamp\(1\.32rem,\s*5\.7vw,\s*1\.52rem\)/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__pillar-intro\s*{[^}]*margin-top:\s*46px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__solution-bridge\s*{[^}]*margin-top:\s*24px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__solution-lanes\s*{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?button\.hero__solution-lane\s*{[^}]*min-height:\s*86px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__actions,[\s\S]*?\.hero__secondary-actions\s*{[^}]*width:\s*100%/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__actions \.button,[\s\S]*?\.hero__secondary-actions \.button\s*{[^}]*white-space:\s*normal/);
  assert.match(pageHeroTexture, /repeating-linear-gradient/);
  assert.doesNotMatch(pageHeroTexture, /apex-governance-group-symbol\.png/);
  assert.match(pageHeroSymbol, /var\(--agg-seal-large\)/);
  assert.doesNotMatch(pageHeroSymbol, /linear-gradient|radial-gradient|repeating-linear-gradient/);
  assert.doesNotMatch(pageHeroSymbol, /filter\s*:/);
  assert.match(servicesHeroTitle, /font-size:\s*clamp\(2\.05rem,\s*3\.8vw,\s*3\.2rem\)/);
  assert.doesNotMatch(
    css,
    /\.hero::before\s*{[^}]*apex-governance-group-symbol\.png/,
  );
  assert.doesNotMatch(
    css,
    /\.page-hero(?:--navy|--seal)?::before\s*{[^}]*apex-governance-group-symbol\.png/,
  );
});

test("checkout keeps price authority on the server", async () => {
  const [route, commerce, engage] = await Promise.all([
    read("app/api/checkout/route.ts"),
    read("app/commerce.ts"),
    read("app/engage/page.tsx"),
  ]);

  assert.match(route, /process\.env\.STRIPE_SECRET_KEY/);
  assert.match(route, /sourceIsAllowed/);
  assert.match(route, /checkoutPayloadFrom\(request\)/);
  assert.match(route, /registration_required/);
  assert.match(route, /getEngagementPackage\(payload\.packageId\)/);
  assert.match(route, /selectedPackage\.unitAmount/);
  assert.match(route, /https:\/\/api\.stripe\.com\/v1\/checkout\/sessions/);
  assert.match(route, /metadata\[onboarding_record_id\]/);
  assert.doesNotMatch(route, /body\.amount|form\?\.get\("amount"\)/);
  assert.match(commerce, /displayPrice:\s*"Market & Scale Value"/);
  assert.doesNotMatch(commerce, /displayPrice:\s*"\$/);
  assert.match(commerce, /unitAmount:\s*250000/);
  assert.match(commerce, /unitAmount:\s*350000/);
  assert.match(commerce, /unitAmount:\s*450000/);
  assert.match(commerce, /unitAmount:\s*650000/);
  assert.match(commerce, /unitAmount:\s*950000/);
  assert.match(commerce, /unitAmount:\s*1800000/);
  assert.match(engage, /\/client-onboarding\?intent=product-purchase&packageId=/);
  assert.match(engage, /checkoutConfigured/);
  assert.match(engage, /Products For Sale/);
  assert.match(engage, /Digital storefront products for sale/);
  assert.match(engage, /six checkout-backed\s+AGG products/i);
  assert.match(engage, /Scoping Families/);
  assert.match(engage, /not separate\s+checkout-backed products/i);
  assert.match(engage, /item\.sku/);
  assert.match(engage, /sale-badge/);
  assert.match(commerce, /sku:\s*"AGG-DS-001"/);
  assert.match(commerce, /sku:\s*"AGG-DS-006"/);
  assert.equal((commerce.match(/saleStatus:\s*"For sale - registration-controlled checkout"/g) ?? []).length, 6);
  assert.match(engage, /Register before checkout/);
  assert.doesNotMatch(engage, /Start secure checkout/);
  assert.match(engage, /PackageInclusions/);
});

test("security and public-readiness controls are configured", async () => {
  const [nextConfig, worker, robots, sitemap, clientServicesAuth, intakeRoute] =
    await Promise.all([
      read("next.config.ts"),
      read("worker/index.ts"),
      read("app/robots.ts"),
      read("app/sitemap.ts"),
      read("app/client-services/auth.ts"),
      read("app/api/client-configurations/route.ts"),
    ]);

  assert.match(nextConfig, /Content-Security-Policy/);
  assert.match(nextConfig, /Strict-Transport-Security/);
  assert.match(nextConfig, /X-Frame-Options/);
  assert.match(nextConfig, /Permissions-Policy/);
  assert.match(nextConfig, /poweredByHeader:\s*false/);
  assert.match(nextConfig, /apexgov\.ai/);
  assert.match(nextConfig, /https:\/\/www\.apexgov\.ai\/:path\*/);

  assert.match(worker, /SECURITY_HEADERS/);
  assert.match(worker, /hardenResponse/);
  assert.match(worker, /Cache-Control/);
  assert.match(worker, /max-age=31536000, immutable/);
  assert.match(worker, /url\.hostname === "apexgov\.ai"/);
  assert.match(worker, /Response\.redirect\(url\.toString\(\), 308\)/);

  assert.match(robots, /"\/client-services",\s*"\/client-portal"/);
  assert.doesNotMatch(sitemap, /client-portal/);
  assert.match(clientServicesAuth, /return isProduction\(\) \? null : DEVELOPMENT_USERNAME_SHA256/);
  assert.match(clientServicesAuth, /return isProduction\(\) \? null : DEVELOPMENT_PASSWORD_SHA256/);
  assert.match(intakeRoute, /MAX_BODY_BYTES/);
  assert.match(intakeRoute, /contentTypeIsJson/);
  assert.match(intakeRoute, /declaredBodyExceedsLimit/);
  assert.match(intakeRoute, /unsupported_media_type/);
  assert.match(intakeRoute, /sourceIsAllowed/);
  assert.match(intakeRoute, /rateLimitAllows/);
  assert.match(intakeRoute, /Cache-Control": "no-store"/);
});

test("starter artifacts are removed and GitHub operations are present", async () => {
  const [page, layout, packageJson, workflow, issueTemplate, readme] =
    await Promise.all([
      read("app/page.tsx"),
      read("app/layout.tsx"),
      read("package.json"),
      read(".github/workflows/ci.yml"),
      read(".github/ISSUE_TEMPLATE/engagement-intake.md"),
      read("README.md"),
    ]);

  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|next\/font\/google/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton|WRANGLER_LOG_PATH=/);
  assert.match(packageJson, /"name": "apex-governance-group"/);
  assert.match(workflow, /npm run build/);
  assert.match(issueTemplate, /## Decision Required/);
  assert.match(readme, /Stripe Activation/);
  assert.match(readme, /GitHub Integration/);
});
