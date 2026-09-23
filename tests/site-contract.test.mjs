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
    siteHeader,
    sideNavigation,
    services,
    methodology,
    solutions,
    academy,
    clientPortal,
    clientPortalDashboard,
    clientServices,
    clientServicesCommandCenter,
    clientConfigurationCard,
    clientLedSelfDeterminationCards,
    packageInclusionsComponent,
    clientServicesAuth,
    clientServicesAccessRoute,
    clientServicesLogoutRoute,
    clientConfigurationsRoute,
    clientConfigurationRecords,
    insights,
    about,
    contact,
    engage,
    sitemap,
    robots,
    data,
    commerce,
    envExample,
  ] =
    await Promise.all([
      read("app/page.tsx"),
      read("app/components/SiteHeader.tsx"),
      read("app/components/SideNavigation.tsx"),
      read("app/services/page.tsx"),
      read("app/methodology/page.tsx"),
      read("app/solutions/page.tsx"),
      read("app/academy/page.tsx"),
      read("app/client-portal/page.tsx"),
      read("app/components/ClientPortalDashboard.tsx"),
      read("app/client-services/page.tsx"),
      read("app/components/ClientServicesCommandCenter.tsx"),
      read("app/components/ClientConfigurationCard.tsx"),
      read("app/components/ClientLedSelfDeterminationCards.tsx"),
      read("app/components/PackageInclusions.tsx"),
      read("app/client-services/auth.ts"),
      read("app/api/client-services/access/route.ts"),
      read("app/api/client-services/logout/route.ts"),
      read("app/api/client-configurations/route.ts"),
      read("app/client-configurations/records.ts"),
      read("app/insights/page.tsx"),
      read("app/about/page.tsx"),
      read("app/contact/page.tsx"),
      read("app/engage/page.tsx"),
      read("app/sitemap.ts"),
      read("app/robots.ts"),
      read("app/site-data.ts"),
      read("app/commerce.ts"),
      read(".env.example"),
    ]);

  const combined = [
    home,
    siteHeader,
    sideNavigation,
    services,
    methodology,
    solutions,
    academy,
    clientPortal,
    clientPortalDashboard,
    clientServices,
    clientServicesCommandCenter,
    clientConfigurationCard,
    clientLedSelfDeterminationCards,
    packageInclusionsComponent,
    clientServicesAuth,
    clientServicesAccessRoute,
    clientServicesLogoutRoute,
    clientConfigurationsRoute,
    clientConfigurationRecords,
    insights,
    about,
    contact,
    engage,
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
  assert.match(home, /solutionPillarIntro\.headingLines\.map/);
  assert.match(home, /hero__pillar-intro/);
  assert.match(home, /solutionDeliveryBridge\.lanes\.map/);
  assert.match(home, /hero__solution-bridge/);
  assert.equal((solutionDeliveryBridgeData.match(/label:\s*"/g) ?? []).length, 8);
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
  assert.match(siteHeader, /LockKeyhole/);
  assert.doesNotMatch(siteHeader, /navItems\.map/);
  assert.match(sideNavigation, /sideNavItems\.map/);
  assert.match(data, /export const topNavItems: NavItem\[\] = \[\];/);
  assert.doesNotMatch(sideNavData, /href: "\/client-portal"/);
  assert.match(
    data,
    /sideNavItems: NavItem\[\] = \[[\s\S]*href: "\/about", label: "About", icon: Landmark[\s\S]*href: "\/contact", label: "Contact", icon: Mail[\s\S]*href: "\/insights", label: "Insights", icon: Newspaper/,
  );
  assert.match(combined, /Apex Academy/);
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
  assert.match(combined, /Client Engagement/);
  assert.match(combined, /Client Portal/);
  assert.match(combined, /\/client-portal/);
  assert.match(combined, /Client Services/);
  assert.match(combined, /\/client-services/);
  assert.match(combined, /Password Protected/);
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
  assert.match(combined, /isClientServicesConfigured/);
  assert.match(combined, /DEVELOPMENT_PASSWORD_SHA256/);
  assert.match(combined, /return isProduction\(\) \? null : DEVELOPMENT_PASSWORD_SHA256/);
  assert.match(combined, /httpOnly:\s*true/);
  assert.match(clientServicesAccessRoute, /requestOrigin/);
  assert.match(clientServicesAccessRoute, /headers\.get\("host"\)/);
  assert.match(clientServicesLogoutRoute, /requestOrigin/);
  assert.match(clientServicesLogoutRoute, /headers\.get\("host"\)/);
  assert.match(combined, /disallow:\s*\["\/client-services",\s*"\/client-portal"\]/);
  assert.doesNotMatch(sitemap, /\/client-portal/);
  assert.match(combined, /Client Portal Preview/);
  assert.match(combined, /Preview data only/);
  assert.match(combined, /Public, non-operational preview/i);
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
  assert.match(home, /Scale, scope, and pricing/);
  assert.match(combined, /Pricing Principle/);
  assert.match(combined, /Pricing is based on scale, not content depth/);
  assert.match(combined, /Product\s+pricing is\s+based on scale, not depth of content/i);
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
  assert.match(combined, /\/api\/checkout/);
  assert.doesNotMatch(combined, /execution cadence/i);
  const servicesCss = await read("app/globals.css");
  assert.match(servicesCss, /service-decision-grid/);
  assert.match(servicesCss, /service-quality-grid/);
  assert.match(servicesCss, /service-accordion/);
});

test("brand assets and palette are wired", async () => {
  const [layout, css, maineContours, maineSmokeContours] = await Promise.all([
    read("app/layout.tsx"),
    read("app/globals.css"),
    read("public/brand/maine-topographic-contours.svg"),
    read("public/brand/maine-topographic-contours-smoke.svg"),
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
  assert.match(css, /--maine-topographic-contours:\s*url\("\/brand\/maine-topographic-contours\.svg"\)/);
  assert.match(css, /--maine-topographic-contours-smoke:\s*url\("\/brand\/maine-topographic-contours-smoke\.svg"\)/);
  assert.match(css, /border-radius:\s*50%/);
  assert.match(maineContours, /Maine topographic contour accent, oxblood/);
  assert.match(maineContours, /clipPath id="maine-outline"/);
  assert.match(maineContours, /stroke="#793735"/);
  assert.match(maineSmokeContours, /Maine topographic contour accent, smoke gray/);
  assert.match(maineSmokeContours, /clipPath id="maine-outline-smoke"/);
  assert.match(maineSmokeContours, /stroke="#C3C2BD"/);

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
  const heroContentContrast = cssBlock(css, ".hero__content::before");
  const brandLockup = cssBlock(css, ".brand-lockup");
  const brandTagline = cssBlock(css, ".brand-text span");
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
  const heroPillarIntro = cssBlock(css, ".hero__pillar-intro");
  const heroPillarCopy = cssBlock(css, ".hero__pillar-copy");
  const heroPillarHeading = cssBlock(css, ".hero__pillar-heading");
  const heroPillarHeadingSpan = cssBlock(css, ".hero__pillar-heading span");
  const heroPillarHeadingSecondLine = cssBlock(css, ".hero__pillar-heading span + span");
  const heroSolutionBridge = cssBlock(css, ".hero__solution-bridge");
  const heroSolutionBridgeLede = cssBlock(css, ".hero__solution-bridge-lede");
  const heroSolutionLanes = cssBlock(css, ".hero__solution-lanes");
  const heroSolutionLane = cssBlock(css, ".hero__solution-lane");
  const heroSolutionLaneContour = cssBlock(css, ".hero__solution-lane::before");
  const heroSolutionLaneHover = cssBlock(css, ".hero__solution-lane:hover");
  const heroSolutionLaneIndex = cssBlock(css, ".hero__solution-lane span");
  const heroSolutionLaneTitle = cssBlock(css, ".hero__solution-lane h3");
  const heroSolutionLaneCopy = cssBlock(css, ".hero__solution-lane p");
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
  const portalWorkLayout = cssBlock(css, ".portal-work-layout");
  const pageHeroTexture = cssBlock(css, ".page-hero::before");
  const pageHeroSymbol = cssBlock(css, ".page-hero::after");
  const servicesHeroTitle = cssBlock(css, ".page-hero .services-hero__title");

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
  assert.match(heroSolutionLanes, /grid-template-columns:\s*repeat\(4,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(heroSolutionLane, /grid-template-columns:\s*auto 1fr/);
  assert.match(heroSolutionLane, /min-height:\s*150px/);
  assert.match(heroSolutionLane, /border:\s*1px solid rgba\(244,\s*241,\s*234,\s*0\.24\)/);
  assert.match(heroSolutionLane, /transition:[\s\S]*?transform 0\.18s ease/);
  assert.match(heroSolutionLaneContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(heroSolutionLaneContour, /opacity:\s*0\.11/);
  assert.match(heroSolutionLaneHover, /transform:\s*translateY\(-3px\)/);
  assert.match(heroSolutionLaneHover, /border-color:\s*rgba\(136,\s*98,\s*60,\s*0\.66\)/);
  assert.match(heroSolutionLaneIndex, /place-items:\s*center/);
  assert.match(heroSolutionLaneTitle, /font-size:\s*0\.84rem/);
  assert.match(heroSolutionLaneTitle, /text-transform:\s*uppercase/);
  assert.match(heroSolutionLaneCopy, /line-height:\s*1\.48/);
  assert.match(brandLockup, /flex:\s*1 1 380px/);
  assert.match(brandLockup, /min-width:\s*0/);
  assert.match(brandTagline, /max-width:\s*420px/);
  assert.match(brandTagline, /line-height:\s*1\.15/);
  assert.match(darkSection, /isolation:\s*isolate/);
  assert.match(darkSection, /overflow:\s*hidden/);
  assert.match(darkSectionContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(darkSectionContour, /opacity:\s*0\.1/);
  assert.match(heroMetricCard, /text-align:\s*center/);
  assert.match(heroMetricCard, /justify-content:\s*flex-start/);
  assert.match(heroMetricCard, /isolation:\s*isolate/);
  assert.match(heroMetricContour, /background-image:\s*var\(--maine-topographic-contours-smoke\)/);
  assert.match(heroMetricContour, /opacity:\s*0\.18/);
  assert.match(pricingCardTop, /align-items:\s*start/);
  assert.match(pricingCardTopValue, /max-width:\s*12rem/);
  assert.match(pricingCardTopValue, /font-size:\s*0\.92rem/);
  assert.match(pricingCardTopValue, /text-align:\s*right/);
  assert.match(pricingCardActions, /margin-top:\s*auto/);
  assert.match(pricingCardActionsForm, /margin-top:\s*0/);
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
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.configuration-layer-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.configuration-condition-grid,[\s\S]*?grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.command-cell,[\s\S]*?min-height:\s*auto/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.configuration-stage-card,[\s\S]*?min-height:\s*auto/);
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
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.hero__solution-lanes\s*{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\)/);
  assert.match(css, /@media \(max-width:\s*980px\)[\s\S]*?\.hero__solution-lane\s*{[^}]*min-height:\s*132px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero h1\s*{[^}]*font-size:\s*clamp\(1\.32rem,\s*5\.7vw,\s*1\.52rem\)/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__pillar-intro\s*{[^}]*margin-top:\s*46px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__solution-bridge\s*{[^}]*margin-top:\s*24px/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__solution-lanes\s*{[^}]*grid-template-columns:\s*1fr/);
  assert.match(css, /@media \(max-width:\s*680px\)[\s\S]*?\.hero__solution-lane\s*{[^}]*min-height:\s*auto/);
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
  assert.match(route, /getEngagementPackage\(await packageIdFrom\(request\)\)/);
  assert.match(route, /selectedPackage\.unitAmount/);
  assert.match(route, /https:\/\/api\.stripe\.com\/v1\/checkout\/sessions/);
  assert.doesNotMatch(route, /body\.amount|form\?\.get\("amount"\)/);
  assert.match(commerce, /displayPrice:\s*"Market & Scale Value"/);
  assert.doesNotMatch(commerce, /displayPrice:\s*"\$/);
  assert.match(commerce, /unitAmount:\s*250000/);
  assert.match(commerce, /unitAmount:\s*350000/);
  assert.match(commerce, /unitAmount:\s*450000/);
  assert.match(commerce, /unitAmount:\s*650000/);
  assert.match(commerce, /unitAmount:\s*950000/);
  assert.match(commerce, /unitAmount:\s*1800000/);
  assert.match(engage, /name="packageId" value=\{item\.id\}/);
  assert.match(engage, /checkoutConfigured/);
  assert.match(engage, /Start secure checkout/);
  assert.match(engage, /Request intake activation/);
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
