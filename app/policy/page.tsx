import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  Shield,
  Lock,
  Eye,
  FileText,
  Mail,
} from "lucide-react";

export default function PolicyPage() {
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
            Privacy Policy
          </h1>
          <div className="items-center justify-center gap-2 text-muted-foreground bg-secondary/50 inline-flex px-4 py-1.5 rounded-full text-sm mx-auto backdrop-blur-sm">
            <Clock className="w-4 h-4" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>

        <div className="space-y-10 prose prose-gray dark:prose-invert max-w-none">
          {/* Introduction */}
          <section className="bg-card/50 backdrop-blur-sm border rounded-[20px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold m-0">Introduction</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to our Privacy Policy. At ZeroOnee, we respect your
              privacy and are committed to protecting your personal data. This
              privacy policy will inform you as to how we look after your
              personal data when you visit our website (regardless of where you
              visit it from) and tell you about your privacy rights and how the
              law protects you.
            </p>
            <div className="mt-4 p-4 bg-secondary/50 rounded-lg text-sm text-muted-foreground border-l-4 border-primary">
              Please read this privacy policy carefully to understand our views
              and practices regarding your personal data and how we will treat
              it.
            </div>
          </section>

          {/* Information We Collect */}
          <section className="bg-card/50 backdrop-blur-sm border rounded-[20px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <Eye className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-2xl font-semibold m-0">
                Information We Collect
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We may collect, use, store and transfer different kinds of
              personal data about you which we have grouped together follows:
            </p>
            <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
              <li className="flex gap-3 items-start p-3 rounded-lg bg-background/50 border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <strong className="block text-foreground text-sm mb-1">
                    Identity Data
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    Includes first name, middle name, last name, username or
                    similar identifier.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start p-3 rounded-lg bg-background/50 border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <strong className="block text-foreground text-sm mb-1">
                    Contact Data
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    Includes billing address, delivery address, email address
                    and telephone numbers.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start p-3 rounded-lg bg-background/50 border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <strong className="block text-foreground text-sm mb-1">
                    Technical Data
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    Includes internet protocol (IP) address, your login data,
                    browser type and version.
                  </span>
                </div>
              </li>
              <li className="flex gap-3 items-start p-3 rounded-lg bg-background/50 border">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <div>
                  <strong className="block text-foreground text-sm mb-1">
                    Usage Data
                  </strong>
                  <span className="text-sm text-muted-foreground">
                    Includes information about how you use our website, products
                    and services.
                  </span>
                </div>
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="bg-card/50 backdrop-blur-sm border rounded-[20px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Shield className="w-6 h-6 text-green-500" />
              </div>
              <h2 className="text-2xl font-semibold m-0">
                How We Use Your Information
              </h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We will only use your personal data when the law allows us to.
              Most commonly, we will use your personal data in the following
              circumstances:
            </p>
            <ul className="space-y-3 list-disc pl-5 text-muted-foreground">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
              <li>
                Where we need to comply with a legal or regulatory obligation.
              </li>
            </ul>
          </section>

          {/* Security */}
          <section className="bg-card/50 backdrop-blur-sm border rounded-[20px] p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-orange-500/10 rounded-lg">
                <Lock className="w-6 h-6 text-orange-500" />
              </div>
              <h2 className="text-2xl font-semibold m-0">Data Security</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              We have put in place appropriate security measures to prevent your
              personal data from being accidentally lost, used or accessed in an
              unauthorized way, altered or disclosed. In addition, we limit
              access to your personal data to those employees, agents,
              contractors and other third parties who have a business need to
              know.
            </p>
            <p className="text-muted-foreground">
              They will only process your personal data on our instructions and
              they are subject to a duty of confidentiality.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-[20px] p-8 shadow-sm text-center">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold mb-3">
              Questions or Concerns?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              If you have any questions about this privacy policy or our privacy
              practices, please contact us via email.
            </p>
            <a
              href="mailto:admin@zeroonee.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/25"
            >
              Contact Privacy Team
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
