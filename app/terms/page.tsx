import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const terms = [
  {
    id: "1",
    title: "Scope of Services",
    descriptions: [
      {
        text: "The Developer agrees to design, develop, and deliver a website as outlined in the proposal or agreement document signed by both parties.",
      },
    ],
  },
  {
    id: "2",
    title: "Client Responsibilities",
    descriptions: [
      {
        text: "Provide all necessary content (text, images, logos, etc.)",
      },
      {
        text: "Respond to communications in a timely manner",
      },
      {
        text: "Review and approve work within agreed timelines",
      },
    ],
  },
  {
    id: "3",
    title: "Fees and Payment",
    descriptions: [
      {
        text: "A deposit of 50% is required before work begins.",
      },
      {
        text: "The remaining balance is due upon project completion or as specified in the invoice schedule.",
      },
      {
        text: "Late payments may incur additional fees.",
      },
    ],
  },
  {
    id: "4",
    title: "Revisions",
    descriptions: [
      {
        text: "Two rounds of revisions are included.",
      },
      {
        text: "Additional revisions beyond the included rounds will be billed at standard hourly rates.",
      },
    ],
  },
  {
    id: "5",
    title: "Timeline",
    descriptions: [
      {
        text: "Delays caused by the Client (e.g., late content submission) may result in timeline extensions.",
      },
    ],
  },
  {
    id: "6",
    title: "Ownership and Rights",
    descriptions: [
      {
        text: "Upon full payment, the Client will own the final website.",
      },
      {
        text: "The Developer retains the right to display the project in portfolios and promotional materials.",
      },
    ],
  },
  {
    id: "7",
    title: "Confidentiality",
    descriptions: [
      {
        text: "Both parties agree to keep confidential any proprietary information shared during the project.",
      },
    ],
  },
  {
    id: "8",
    title: "Warranty and Support",
    descriptions: [
      {
        text: "The Developer provides a 30-day warranty for bug fixes after launch.",
      },
      {
        text: "Ongoing maintenance and support can be provided under a separate agreement.",
      },
    ],
  },
  {
    id: "9",
    title: "Termination",
    descriptions: [
      {
        text: "Either party may terminate the agreement with written notice.",
      },
      {
        text: "If terminated, the Client agrees to pay for all work completed up to the date of termination.",
      },
    ],
  },
  {
    id: "10",
    title: "Limitation of Liability",
    descriptions: [
      {
        text: "The Developer is not liable for any indirect or consequential damages arising from the use of the website.",
      },
    ],
  },
];

export default function TermsConditions() {
  const lastUpdated = "January 19, 2026";

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-6 py-12 md:py-20">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
            Terms and Conditions
          </h1>
          <div className="items-center justify-center gap-2 text-muted-foreground bg-secondary/50 inline-flex px-4 py-1.5 rounded-full text-sm mx-auto backdrop-blur-sm">
            <Clock className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            These terms and conditions outline the rules and regulations for the
            use of ZeroOnee&apos;s Website and Services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {terms.map((term) => (
            <div
              key={term.id}
              className="group bg-card/50 backdrop-blur-sm border rounded-[20px] p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                  {term.id}
                </div>
                <h3 className="text-lg font-semibold tracking-tight leading-snug">
                  {term.title}
                </h3>
              </div>
              <ul className="space-y-2 pl-3">
                {term.descriptions.map((desc, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground leading-relaxed flex gap-2"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-primary/40 mt-2 shrink-0" />
                    <span>{desc.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
