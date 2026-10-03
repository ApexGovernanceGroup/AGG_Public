const ITERATIONS_PER_CAMPAIGN = 10_000;

const variableMenu = {
  buyerArchetypes: [
    { id: "executive-decision", weight: 0.24, baseIntent: 0.54, value: 2500 },
    { id: "governed-product", weight: 0.18, baseIntent: 0.5, value: 4500 },
    { id: "knowledge-continuity", weight: 0.17, baseIntent: 0.49, value: 3500 },
    { id: "analytics-governance", weight: 0.16, baseIntent: 0.46, value: 9500 },
    { id: "academy-lab", weight: 0.13, baseIntent: 0.44, value: 6500 },
    { id: "advisory-retainer", weight: 0.12, baseIntent: 0.38, value: 18000 },
  ],
  campaignVariables: {
    buyerRouting: [0, 0.06, 0.1, 0.14],
    proofLibrary: [0, 0.04, 0.08, 0.12],
    priceAnchorClarity: [-0.04, 0, 0.06, 0.1],
    firstFourteenDaysClarity: [0, 0.04, 0.07],
    adminExposurePenalty: [0, -0.03, -0.06],
    investorDistractionPenalty: [0, -0.02, -0.05],
    securityTrust: [0, 0.03, 0.06],
    mobileClarity: [-0.03, 0, 0.04],
  },
  campaignSet: [
    {
      id: "baseline-current",
      buyerRouting: 0.02,
      proofLibrary: 0.01,
      priceAnchorClarity: -0.02,
      firstFourteenDaysClarity: 0.01,
      adminExposurePenalty: -0.05,
      investorDistractionPenalty: -0.04,
      securityTrust: 0.03,
      mobileClarity: 0,
    },
    {
      id: "buyer-first-services",
      buyerRouting: 0.14,
      proofLibrary: 0.08,
      priceAnchorClarity: 0.08,
      firstFourteenDaysClarity: 0.07,
      adminExposurePenalty: -0.01,
      investorDistractionPenalty: -0.01,
      securityTrust: 0.05,
      mobileClarity: 0.03,
    },
    {
      id: "proof-led-commercial",
      buyerRouting: 0.1,
      proofLibrary: 0.12,
      priceAnchorClarity: 0.09,
      firstFourteenDaysClarity: 0.06,
      adminExposurePenalty: -0.01,
      investorDistractionPenalty: -0.01,
      securityTrust: 0.06,
      mobileClarity: 0.03,
    },
    {
      id: "founder-trust-briefing",
      buyerRouting: 0.08,
      proofLibrary: 0.08,
      priceAnchorClarity: 0.06,
      firstFourteenDaysClarity: 0.07,
      adminExposurePenalty: -0.01,
      investorDistractionPenalty: -0.01,
      securityTrust: 0.06,
      mobileClarity: 0.02,
    },
    {
      id: "academy-and-continuity",
      buyerRouting: 0.1,
      proofLibrary: 0.1,
      priceAnchorClarity: 0.07,
      firstFourteenDaysClarity: 0.05,
      adminExposurePenalty: -0.01,
      investorDistractionPenalty: -0.01,
      securityTrust: 0.05,
      mobileClarity: 0.03,
      archetypeBias: ["knowledge-continuity", "academy-lab"],
    },
    {
      id: "retainer-conversion",
      buyerRouting: 0.09,
      proofLibrary: 0.1,
      priceAnchorClarity: 0.1,
      firstFourteenDaysClarity: 0.07,
      adminExposurePenalty: -0.01,
      investorDistractionPenalty: -0.01,
      securityTrust: 0.06,
      mobileClarity: 0.03,
      archetypeBias: ["advisory-retainer", "analytics-governance"],
    },
  ],
};

function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (1664525 * state + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
}

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function weightedPick(items, rng, bias = []) {
  const adjusted = items.map((item) => ({
    ...item,
    adjustedWeight: item.weight * (bias.includes(item.id) ? 1.55 : 1),
  }));
  const total = adjusted.reduce((sum, item) => sum + item.adjustedWeight, 0);
  let draw = rng() * total;
  for (const item of adjusted) {
    draw -= item.adjustedWeight;
    if (draw <= 0) return item;
  }
  return adjusted.at(-1);
}

function simulateCampaign(campaign, seed) {
  const rng = createRng(seed);
  const outcomes = {
    campaign: campaign.id,
    visitors: ITERATIONS_PER_CAMPAIGN,
    qualifiedLeads: 0,
    onboardingStarts: 0,
    briefingRequests: 0,
    expectedPipeline: 0,
    trustFailures: 0,
  };

  for (let index = 0; index < ITERATIONS_PER_CAMPAIGN; index += 1) {
    const buyer = weightedPick(
      variableMenu.buyerArchetypes,
      rng,
      campaign.archetypeBias ?? [],
    );
    const noise = (rng() - 0.5) * 0.1;
    const trustScore = clamp(
      0.56 +
        campaign.proofLibrary +
        campaign.securityTrust +
        campaign.firstFourteenDaysClarity +
        campaign.adminExposurePenalty +
        campaign.investorDistractionPenalty +
        noise,
    );
    const clarityScore = clamp(
      0.5 +
        campaign.buyerRouting +
        campaign.priceAnchorClarity +
        campaign.mobileClarity +
        campaign.firstFourteenDaysClarity +
        noise,
    );
    const intent = clamp(
      buyer.baseIntent +
        campaign.buyerRouting +
        campaign.proofLibrary +
        campaign.priceAnchorClarity +
        campaign.securityTrust +
        campaign.adminExposurePenalty +
        campaign.investorDistractionPenalty +
        noise,
    );

    const qualifiedLead = rng() < intent * trustScore * clarityScore;
    const onboardingStart = qualifiedLead && rng() < clamp(0.58 + campaign.priceAnchorClarity);
    const briefingRequest =
      qualifiedLead && rng() < clamp(0.38 + campaign.firstFourteenDaysClarity + campaign.proofLibrary);

    if (trustScore < 0.48) outcomes.trustFailures += 1;
    if (qualifiedLead) outcomes.qualifiedLeads += 1;
    if (onboardingStart) outcomes.onboardingStarts += 1;
    if (briefingRequest) outcomes.briefingRequests += 1;
    if (onboardingStart) outcomes.expectedPipeline += buyer.value;
  }

  return {
    ...outcomes,
    qualifiedLeadRate: outcomes.qualifiedLeads / outcomes.visitors,
    onboardingRate: outcomes.onboardingStarts / outcomes.visitors,
    briefingRate: outcomes.briefingRequests / outcomes.visitors,
    trustFailureRate: outcomes.trustFailures / outcomes.visitors,
  };
}

function formatPercent(value) {
  return `${(value * 100).toFixed(2)}%`;
}

const results = variableMenu.campaignSet.map((campaign, index) =>
  simulateCampaign(campaign, 20261003 + index * 9973),
);

const ranked = [...results].sort((left, right) => right.expectedPipeline - left.expectedPipeline);

console.log("AGG Executive Revenue Wargame");
console.log(`Iterations per campaign: ${ITERATIONS_PER_CAMPAIGN}`);
console.log(`Total simulations: ${ITERATIONS_PER_CAMPAIGN * variableMenu.campaignSet.length}`);
console.log("Variable menu:");
console.log(JSON.stringify(variableMenu.campaignVariables, null, 2));
console.table(
  ranked.map((result) => ({
    campaign: result.campaign,
    qualifiedLeadRate: formatPercent(result.qualifiedLeadRate),
    onboardingRate: formatPercent(result.onboardingRate),
    briefingRate: formatPercent(result.briefingRate),
    trustFailureRate: formatPercent(result.trustFailureRate),
    expectedPipeline: `$${result.expectedPipeline.toLocaleString("en-US")}`,
  })),
);

const baseline = results.find((result) => result.campaign === "baseline-current");
const best = ranked[0];
console.log(
  JSON.stringify(
    {
      decision: "Favor buyer-first services, proof-led commercial evidence, public planning anchors, and reduced admin/investor distraction.",
      baseline: baseline?.campaign,
      bestCampaign: best.campaign,
      expectedPipelineLift:
        baseline && baseline.expectedPipeline
          ? `${(((best.expectedPipeline - baseline.expectedPipeline) / baseline.expectedPipeline) * 100).toFixed(1)}%`
          : "n/a",
      caveat:
        "Model is a deterministic planning wargame, not observed market analytics. Replace assumptions with CRM, checkout, and briefing data as AGG collects live conversion evidence.",
    },
    null,
    2,
  ),
);
