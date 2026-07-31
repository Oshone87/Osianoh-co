import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Button from '../components/Button';
import { 
  Target, 
  Eye, 
  Compass, 
  Clock, 
  CreditCard, 
  ShieldAlert, 
  CheckCircle, 
  ArrowRight,
  Award
} from 'lucide-react';
import { useDocumentTitle } from '../utils/useDocumentTitle';

export default function About() {
  useDocumentTitle('About');

  const pillars = [
    {
      icon: Target,
      title: 'Our Objectives',
      desc: 'To render high-quality personalized services to our clients, enhance their corporate image, and add significant value and profitability to their operations.',
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To be a leading professional advisory and accountancy firm recognized for excellence in the delivery of high-quality professional management services.',
    },
    {
      icon: Compass,
      title: 'Our Mission',
      desc: 'To provide unique, high-quality professional services that meet international standards, enabling our clients to realize their growth, financial compliance, and operational goals.',
    },
  ];

  const clienteleSectors = [
    'Manufacturing',
    'Government Parastatals',
    'Trading Companies',
    'Securities & Investment',
    'Pharmaceutical & Hospitals',
    'Communications',
    'Engineering & Construction',
    'Oil & Gas',
    'Banking & Insurance',
    'Shipping, Clearing, Aviation & Transport',
    'Hotels & Clubs',
    'Printing & Publishing',
    'Service-Oriented Organizations',
  ];

  return (
    <div className="animate-fade-in">
      
      {/* PAGE BANNER */}
      <PageBanner
        title="About Elijah Osianor & Co."
        subtitle="Institutional chartered accountants & management consultants dedicated to precision, integrity, and client growth."
        breadcrumb="About Us"
      />

      {/* FIRM OVERVIEW SECTION */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold text-xs uppercase tracking-wider">
                <Award className="w-4 h-4" />
                Firm Profile
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary leading-tight">
                Empowering Organizations with Multi-Disciplinary Professional Rigor
              </h2>

              <div className="space-y-4 text-neutral-mid text-base sm:text-lg leading-relaxed">
                <p>
                  <strong>Elijah Osianor & Co.</strong> is a premier Chartered Accountancy and management advisory firm established to provide multi-disciplinary, client-oriented professional services to private and public companies and organizations across various sectors.
                </p>
                <p>
                  With over 30 years of combined partner experience across statutory audit, corporate tax strategy, forensic accounting, and strategic management consulting, we maintain a steadfast commitment to professional ethics and global quality standards.
                </p>
                <p>
                  Our practice is built on deep technical knowledge, institutional authority, and personalized client attention, ensuring every client receives tailored advisory that drives compliance and bottom-line value.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-neutral-light border border-neutral-border rounded-xl p-8 shadow-soft-blue space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                <h3 className="text-2xl font-bold text-primary">Why Work With Us?</h3>
                
                <ul className="space-y-4">
                  {[
                    'Registered & Certified Chartered Accountants (FCA, FCTI)',
                    'Deep regulatory expertise in Nigerian tax and statutory laws',
                    'Proven track record across 13 major industry sectors',
                    'Strict compliance with international reporting standards',
                    'Direct partner involvement in every engagement',
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-semibold text-primary">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OBJECTIVES, VISION & MISSION CARDS */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Our Core Foundations"
            title="Objectives, Vision & Mission"
            subtitle="The strategic principles guiding our engagement with every client enterprise."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => {
              const IconComp = pillar.icon;
              return (
                <Card key={index} topAccent={true} className="flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center mb-6 shadow-md">
                      <IconComp className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-neutral-mid text-base leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* FEES & ENGAGEMENT TERMS BLOCK */}
      <section className="py-20 bg-white border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Transparent Engagements"
            title="Fees & Duration Terms"
            subtitle="Our fee structure is structured around clarity, fairness, and predictable project milestones."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Fee Basis Card */}
            <Card className="flex items-start gap-6 border-l-4 border-l-primary">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Time & Category Basis</h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  Professional fees are calculated based on time spent by each category of professional staff involved in the assignment. Fees are transparently negotiated and agreed upon before work commences.
                </p>
              </div>
            </Card>

            {/* Payment Terms Card */}
            <Card className="flex items-start gap-6 border-l-4 border-l-accent">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-primary">Standard Payment Terms</h3>
                <p className="text-neutral-mid text-sm leading-relaxed">
                  Our engagement terms generally require <strong>80% advance payment</strong> upon contract signing to mobilize audit/advisory resources, and <strong>20% upon draft report submission</strong> and completion.
                </p>
              </div>
            </Card>

          </div>

        </div>
      </section>

      {/* CLIENTELE SECTORS GRID & CONFIDENTIALITY */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Industry Coverage"
            title="Our Extensive Clientele Reach"
            subtitle="We serve corporate entities, public institutions, and high-growth organizations across diverse industries."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {clienteleSectors.map((sector, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg border border-neutral-border hover:border-accent hover:shadow-soft-blue transition-all flex items-center gap-3"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-bold text-primary">{sector}</span>
              </div>
            ))}
          </div>

          {/* Confidentiality Notice Banner */}
          <div className="bg-primary text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/20 rounded-lg text-accent shrink-0">
                <ShieldAlert className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-1">Strict Client Confidentiality Assured</h4>
                <p className="text-neutral-light/80 text-sm max-w-2xl">
                  In compliance with professional ethics, specific client names are protected under strict non-disclosure policies. References are provided upon formal engagement request.
                </p>
              </div>
            </div>

            <Button to="/contact" variant="accent" icon={ArrowRight} className="shrink-0">
              Request References
            </Button>
          </div>

        </div>
      </section>

    </div>
  );
}
