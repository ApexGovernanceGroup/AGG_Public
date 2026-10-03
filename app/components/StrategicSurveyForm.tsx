"use client";

import { FormEvent, useState } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import type { StrategicSurveyDefinition } from "../surveys/survey-data";

type StrategicSurveyFormProps = {
  contactEmail: string;
  survey: StrategicSurveyDefinition;
};

function valueFrom(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function StrategicSurveyForm({
  contactEmail,
  survey,
}: StrategicSurveyFormProps) {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    if (valueFrom(formData, "website")) {
      setStatus("Survey blocked by the public-form validation check.");
      return;
    }

    const contactLines = [
      `Name: ${valueFrom(formData, "name")}`,
      `Organization: ${valueFrom(formData, "organization")}`,
      `Role: ${valueFrom(formData, "role")}`,
      `Email: ${valueFrom(formData, "email")}`,
      `Preferred follow-up: ${valueFrom(formData, "followUp")}`,
    ];

    const answerLines = survey.questions.flatMap((question, index) => [
      "",
      `${index + 1}. ${question.prompt}`,
      valueFrom(formData, question.id) || "[No response provided]",
    ]);

    const body = [
      `Survey: ${survey.title}`,
      "",
      "Respondent",
      ...contactLines,
      "",
      "Survey Responses",
      ...answerLines,
      "",
      "Acknowledgement",
      "Respondent was instructed not to submit passwords, protected client data, controlled information, payment information, or proprietary files through this public survey.",
    ].join("\n");

    const subject = `AGG Survey Response - ${survey.shortTitle}`;
    const href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus("Your email client should open with the survey response prepared for AGG review.");
  }

  return (
    <form className="onboarding-form survey-form" onSubmit={handleSubmit}>
      <input
        autoComplete="off"
        className="onboarding-form__trap"
        name="website"
        tabIndex={-1}
        type="text"
      />

      {status && (
        <div className="status-banner status-banner--compact" role="status">
          <ShieldCheck size={18} aria-hidden="true" />
          <span>{status}</span>
        </div>
      )}

      <div className="onboarding-form__grid survey-form__contact">
        <label>
          Name
          <input autoComplete="name" maxLength={140} name="name" required type="text" />
        </label>
        <label>
          Organization
          <input
            autoComplete="organization"
            maxLength={160}
            name="organization"
            required
            type="text"
          />
        </label>
        <label>
          Role / title
          <input
            autoComplete="organization-title"
            maxLength={160}
            name="role"
            required
            type="text"
          />
        </label>
        <label>
          Work email
          <input autoComplete="email" maxLength={180} name="email" required type="email" />
        </label>
        <label>
          Preferred follow-up
          <select name="followUp" required defaultValue="executive-call">
            <option value="executive-call">Executive call</option>
            <option value="written-response">Written response</option>
            <option value="diagnostic-session">Diagnostic session</option>
            <option value="no-follow-up-yet">No follow-up yet</option>
          </select>
        </label>
      </div>

      <ol className="survey-question-list">
        {survey.questions.map((question, index) => (
          <li className="survey-question-card" key={question.id}>
            <span className="survey-question-card__number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <label>
              {question.prompt}
              <textarea
                maxLength={1800}
                name={question.id}
                placeholder="Answer in plain language. Include the pressure, cause, impact, owner, timing, and what useful support would look like."
                required
              />
            </label>
            <p>
              <strong>Operational use:</strong> {question.actionUse}
            </p>
          </li>
        ))}
      </ol>

      <label className="onboarding-form__acknowledgement">
        <input name="consent" required type="checkbox" value="acknowledged" />
        <span>
          I understand this public survey should not include passwords, protected client data,
          controlled information, payment information, proprietary files, or confidential records.
        </span>
      </label>

      <div className="onboarding-form__actions">
        <button className="button button--primary" type="submit">
          <Mail size={18} aria-hidden="true" />
          Send survey to AGG
        </button>
      </div>
    </form>
  );
}
