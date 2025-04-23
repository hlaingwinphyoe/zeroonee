const terms = [
    {
    id: "I",
      title: "Scope of Services",
      descriptions:
        [
            {
                text: "The Developer agrees to design, develop, and deliver a website as outlined in the proposal or agreement document signed by both parties."
            }
        ]
    },
    {
        id: "II",
        title: "Client Responsibilities the client agrees to:",
        descriptions:
          [
              {
                  text: "Provide all necessary content (text, images, logos, etc.)",
              },
              {
                text: "Respond to communications in a timely manner",
            },
            {
                text: "Review and approve work within agreed timelines",
            }
          ]
      },
      {
        id: "III",
        title: "Fees and Payment",
        descriptions:
          [
              {
                  text: "A deposit of [50]% is required before work begins."
              },
              {
                text: "The remaining balance is due upon project completion or as specified in the invoice schedule."
            },
            {
                text: "Late payments may incur additional fees."
            }
          ]
      },
      {
        id: "IV",
        title: "Revisions",
        descriptions:
          [
              {
                  text: "rounds of revisions are included."
              },
              {
                text: "Additional revisions beyond the included rounds will be billed at [depend on features ] per hour."
            },
          ]
      },
      {
        id: "V",
        title: "Timeline",
        descriptions:
          [
              {
                  text: "Delays caused by the Client (e.g., late content submission) may result in timeline extensions."
              },
          ]
      },
      {
        id: "VI",
        title: "Ownership and Rights",
        descriptions:
          [
              {
                  text: "Upon full payment, the Client will own the final website."
              },
              {
                text: "The Developer retains the right to display the project in portfolios and promotional materials."
            },
          ]
      },
      {
        id: "VII",
        title: "Confidentiality",
        descriptions:
          [
              {
                  text: "Both parties agree to keep confidential any proprietary information shared during the project."
              },
          ]
      },
      {
        id: "VIII",
        title: "Warranty and Support",
        descriptions:
          [
              {
                  text: "The Developer provides a [30]-day warranty for bug fixes after launch."
              },
              {
                text: "Ongoing maintenance and support can be provided under a separate agreement."
            },
          ]
      },
      {
        id: "IX",
        title: "Termination",
        descriptions:
          [
              {
                  text: "Either party may terminate the agreement with written notice."
              },
              {
                text: "If terminated, the Client agrees to pay for all work completed up to the date of termination."
            },
          ]
      },
      {
        id: "X",
        title: "Limitation of Liability",
        descriptions:
          [
              {
                  text: "The Developer is not liable for any indirect or consequential damages arising from the use of the website."
              },
          ]
      },
  ];
  
  const TermsConditions = () => {
    return (
      <div
        id="terms"
        className="min-h-screen flex items-center justify-center px-6 py-12 xs:py-20"
      >
        <div className="max-w-screen-lg">
          <h2 className="text-3xl xs:text-4xl md:text-5xl !leading-[1.15] font-bold tracking-tight text-center">
            Terms and Conditions
          </h2>
          <p className="mt-3 xs:text-lg text-center text-muted-foreground">
          These terms and conditions outline the rules and regulations for the use of ZeroOnee&apos;s Website and Services.
          </p>
  
          <div className="mt-12 grid md:grid-cols-2 bg-background rounded-xl overflow-hidden outline outline-[1px] outline-border outline-offset-[-1px]">
            {terms.map((term) => (
                <div key={term.id} className="border p-6 -mt-px -ml-px">
                    <div className="h-8 w-8 xs:h-10 xs:w-10 flex items-center justify-center rounded-full bg-accent">
                    <span className="text-lg font-bold">{term.id}</span>
                    </div>
                    <div className="mt-3 mb-2 flex items-start gap-2 text-lg xs:text-[1.35rem] font-semibold tracking-tight">
                    <span>{term.title}</span>
                    </div>
                    <ul className="pl-5">
                    {term.descriptions.map((desc, index) => (
                        <li key={index} className="text-sm xs:text-base list-disc">
                        {desc.text}
                        </li>
                    ))}
                    </ul>
                </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsConditions;
  