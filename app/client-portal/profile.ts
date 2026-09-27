import { contactEmail } from "../site-data";

export type PortalContact = {
  name: string;
  role: string;
  email: string;
  phone: string;
};

export type PortalCommissionedService = {
  serviceId: string;
  name: string;
  status: string;
  phase: string;
  assignedOwner: string;
  nextMilestone: string;
};

export type ClientPortalProfile = {
  client: {
    organization: string;
    clientId: string;
    accountStatus: string;
    accessTier: string;
    onboardingRecordId: string;
    executiveSponsor: string;
    reportingCadence: string;
    dataSteward: string;
    primaryContact: PortalContact;
    billingContact: PortalContact;
    technicalContact: PortalContact;
    authorizedUsers: string[];
  };
  assignedApexEmployee: {
    name: string;
    title: string;
    email: string;
    phone: string;
    office: string;
    responseWindow: string;
    escalationEmail: string;
  };
  commissionedServices: PortalCommissionedService[];
};

export function getClientPortalProfile(): ClientPortalProfile {
  const organization = envValue("CLIENT_PORTAL_CLIENT_ORGANIZATION", "Client Command Cell");
  const assignedOwner = envValue(
    "CLIENT_PORTAL_APEX_EMPLOYEE_NAME",
    "Apex Client Success Lead",
  );
  const assignedTitle = envValue(
    "CLIENT_PORTAL_APEX_EMPLOYEE_TITLE",
    "Assigned Apex Employee",
  );

  return {
    client: {
      organization,
      clientId: envValue("CLIENT_PORTAL_CLIENT_ID", "AGG-CLIENT-STAGED"),
      accountStatus: envValue("CLIENT_PORTAL_ACCOUNT_STATUS", "Credential controlled"),
      accessTier: envValue("CLIENT_PORTAL_ACCESS_TIER", "Client dashboard"),
      onboardingRecordId: envValue("CLIENT_PORTAL_ONBOARDING_RECORD_ID", "Assigned after onboarding"),
      executiveSponsor: envValue("CLIENT_PORTAL_EXECUTIVE_SPONSOR", "Executive Sponsor"),
      reportingCadence: envValue("CLIENT_PORTAL_REPORTING_CADENCE", "Weekly status cycle"),
      dataSteward: envValue("CLIENT_PORTAL_DATA_STEWARD", "Client Data Steward"),
      primaryContact: {
        name: envValue("CLIENT_PORTAL_PRIMARY_CONTACT_NAME", "Primary Client Contact"),
        role: envValue("CLIENT_PORTAL_PRIMARY_CONTACT_ROLE", "Authorized client representative"),
        email: envValue("CLIENT_PORTAL_PRIMARY_CONTACT_EMAIL", "client-contact@example.com"),
        phone: envValue("CLIENT_PORTAL_PRIMARY_CONTACT_PHONE", "On file after activation"),
      },
      billingContact: {
        name: envValue("CLIENT_PORTAL_BILLING_CONTACT_NAME", "Billing Contact"),
        role: envValue("CLIENT_PORTAL_BILLING_CONTACT_ROLE", "Commercial administration"),
        email: envValue("CLIENT_PORTAL_BILLING_CONTACT_EMAIL", "billing-contact@example.com"),
        phone: envValue("CLIENT_PORTAL_BILLING_CONTACT_PHONE", "On file after activation"),
      },
      technicalContact: {
        name: envValue("CLIENT_PORTAL_TECHNICAL_CONTACT_NAME", "Technical Contact"),
        role: envValue("CLIENT_PORTAL_TECHNICAL_CONTACT_ROLE", "Systems and access coordination"),
        email: envValue("CLIENT_PORTAL_TECHNICAL_CONTACT_EMAIL", "technical-contact@example.com"),
        phone: envValue("CLIENT_PORTAL_TECHNICAL_CONTACT_PHONE", "On file after activation"),
      },
      authorizedUsers: envList("CLIENT_PORTAL_AUTHORIZED_USERS", [
        "Executive Sponsor",
        "Primary Client Contact",
        "Client PMO",
      ]),
    },
    assignedApexEmployee: {
      name: assignedOwner,
      title: assignedTitle,
      email: envValue("CLIENT_PORTAL_APEX_EMPLOYEE_EMAIL", contactEmail),
      phone: envValue("CLIENT_PORTAL_APEX_EMPLOYEE_PHONE", "Provided in the executed engagement record"),
      office: envValue("CLIENT_PORTAL_APEX_EMPLOYEE_OFFICE", "Apex Governance Group"),
      responseWindow: envValue("CLIENT_PORTAL_APEX_RESPONSE_WINDOW", "One business day for active clients"),
      escalationEmail: envValue("CLIENT_PORTAL_APEX_ESCALATION_EMAIL", contactEmail),
    },
    commissionedServices: [
      {
        serviceId: envValue("CLIENT_PORTAL_SERVICE_1_ID", "AGG-SVC-001"),
        name: envValue(
          "CLIENT_PORTAL_SERVICE_1_NAME",
          "Governance Operating Model Installation",
        ),
        status: envValue("CLIENT_PORTAL_SERVICE_1_STATUS", "On Track"),
        phase: envValue("CLIENT_PORTAL_SERVICE_1_PHASE", "Sprint 02 - Operating Rhythm"),
        assignedOwner,
        nextMilestone: envValue(
          "CLIENT_PORTAL_SERVICE_1_NEXT_MILESTONE",
          "Confirm action owners and close stale dependencies.",
        ),
      },
      {
        serviceId: envValue("CLIENT_PORTAL_SERVICE_2_ID", "AGG-SVC-002"),
        name: envValue("CLIENT_PORTAL_SERVICE_2_NAME", "AI, Automation, and DG Workforce Pathway"),
        status: envValue("CLIENT_PORTAL_SERVICE_2_STATUS", "Watch"),
        phase: envValue("CLIENT_PORTAL_SERVICE_2_PHASE", "Cohort Design"),
        assignedOwner,
        nextMilestone: envValue(
          "CLIENT_PORTAL_SERVICE_2_NEXT_MILESTONE",
          "Lock module order for AI, automation, data governance, repository, and ecosystem tracks.",
        ),
      },
    ],
  };
}

function envValue(key: string, fallback: string): string {
  const value = process.env[key]?.trim();
  return value || fallback;
}

function envList(key: string, fallback: string[]): string[] {
  const value = process.env[key]?.trim();
  if (!value) return fallback;

  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}
