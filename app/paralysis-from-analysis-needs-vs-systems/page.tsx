import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ClipboardCheck, ShieldCheck } from "lucide-react";
import { StrategicSurveyForm } from "../components/StrategicSurveyForm";
import { contactEmail } from "../site-data";
import { paralysisFromAnalysisSurvey } from "../surveys/survey-data";

export const metadata: Metadata = {
  title: paralysisFromAnalysisSurvey.title,
  description:
    "Apex Governance Group survey for separating true organizational needs from inherited systems, analysis paralysis, and tool-first modernization assumptions.",
};

export default function ParalysisFromAnalysisSurveyPage() {
  const survey = paralysisFromAnalysisSurvey;

  return (
    <main>
      <section className="page-hero page-hero--seal page-hero--survey">
        <div className="container page-hero__inner">
          <p className="eyebrow">{survey.eyebrow}</p>
          <h1>{survey.title}</h1>
          <p>{survey.description}</p>
          <div className="page-hero__actions">
            <a className="button button--primary" href="#survey">
              <ClipboardCheck size={18} aria-hidden="true" />
              Begin survey
            </a>
            <Link className="button button--quiet-on-dark" href="/">
              <ArrowLeft size={18} aria-hidden="true" />
              Back to masthead
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--steel">
        <div className="container survey-brief">
          <article className="survey-brief__panel">
            <p className="eyebrow">Target Audience</p>
            <h2>{survey.audience}</h2>
            <p>{survey.operatingIntent}</p>
          </article>
          <article className="survey-brief__panel survey-brief__panel--dark">
            <ShieldCheck size={26} aria-hidden="true" />
            <h2>Why AGG is asking.</h2>
            <p>{survey.promise}</p>
          </article>
        </div>
      </section>

      <section className="section" id="survey">
        <div className="container survey-layout">
          <div className="section-heading">
            <p className="eyebrow">Operational Survey</p>
            <h2>Separate the real requirement from the system assumed to solve it.</h2>
            <p>
              These questions are designed to draw out usable information AGG can convert into
              requirements, priorities, architecture, governance, delivery options, and measurable
              next actions.
            </p>
          </div>
          <StrategicSurveyForm contactEmail={contactEmail} survey={survey} />
        </div>
      </section>
    </main>
  );
}
