import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buyerRoleProfiles, commercialComparisonRows } from "../site-data";

export const metadata: Metadata = {
  title: "Buyer Roles and First-Move Fit",
  description:
    "Role-based Apex Governance Group buying guidance for executives, operators, data leaders, workforce sponsors, PMOs, knowledge owners, investors, and strategic partners.",
};

export default function BuyerRolesPage() {
  return (
    <main>
      <section className="page-hero page-hero--navy">
        <div className="container page-hero__inner">
          <p className="eyebrow">Buyer Fit</p>
          <h1>Start from the role carrying the decision.</h1>
          <p>
            AGG routes buyers by the executive pressure they are carrying. The
            right first move depends on who owns the decision, what must change,
            and what proof the organization needs before scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Role Profiles</p>
            <h2>What each buyer usually wants from AGG first.</h2>
          </div>
          <div className="role-profile-grid">
            {buyerRoleProfiles.map((profile) => (
              <article className="role-profile-card" key={profile.slug}>
                <profile.icon size={24} aria-hidden="true" />
                <p className="eyebrow">{profile.audience}</p>
                <h2>{profile.title}</h2>
                <p>{profile.decisionPressure}</p>
                <ul className="mini-list">
                  {profile.wants.map((want) => (
                    <li key={want}>{want}</li>
                  ))}
                </ul>
                <Link className="text-link" href={profile.route}>
                  {profile.firstMove}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Commercial Comparison</p>
            <h2>Which first move should a buyer choose?</h2>
            <p>
              Starting anchors are planning signals. Final price, timeline, and
              terms depend on scope, access, scale, and acceptance criteria.
            </p>
          </div>
          <div className="comparison-table-shell">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Problem</th>
                  <th scope="col">Best first move</th>
                  <th scope="col">Anchor</th>
                  <th scope="col">Timeline</th>
                  <th scope="col">Inputs</th>
                  <th scope="col">Final outputs</th>
                  <th scope="col">When not to buy</th>
                </tr>
              </thead>
              <tbody>
                {commercialComparisonRows.map((row) => (
                  <tr key={row.bestFirstMove}>
                    <th scope="row">{row.problem}</th>
                    <td>{row.bestFirstMove}</td>
                    <td>{row.anchor}</td>
                    <td>{row.timeline}</td>
                    <td>{row.requiredInputs}</td>
                    <td>{row.finalOutputs}</td>
                    <td>{row.whenNotToBuy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
