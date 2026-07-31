import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Clock, 
  Users, 
  ShieldCheck, 
  Target, 
  FileCheck, 
  Receipt, 
  Calculator, 
  Search, 
  TrendingUp, 
  Lightbulb, 
  ArrowRight, 
  Building2, 
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import { useDocumentTitle } from '../utils/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home');

  const whyChooseUs = [
    {
      icon: Clock,
      title: '30+ Years Experience',
      desc: 'Three decades of steadfast reliability and expert financial leadership across diverse economic climates.',
    },
    {
      icon: Users,
      title: 'Multi-Disciplinary Expertise',
      desc: 'A seasoned team of Chartered Accountants, Tax Professionals, and Forensic Consultants delivering holistic solutions.',
    },
    {
      icon: ShieldCheck,
      title: 'Confidentiality & Integrity',
      desc: 'Strict adherence to global professional ethics, international auditing standards, and absolute client privacy.',
    },
    {
      icon: Target,
      title: 'Client-Focused Delivery',
      desc: 'Tailored financial advisory designed to enhance corporate value, profitability, and operational efficiency.',
    },
  ];

  const servicesPreview = [
    {
      icon: FileCheck,
      title: 'Audit & Assurance',
      desc: 'Statutory and special audits ensuring rigorous compliance, accuracy, and operational transparency.',
    },
    {
      icon: Receipt,
      title: 'Tax Services',
      desc: 'Strategic tax planning, regulatory compliance, corporate tax returns, and dispute management.',
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      desc: 'Full-cycle bookkeeping, financial statement preparation, and payroll system administration.',
    },
    {
      icon: Search,
      title: 'Forensic Audit',
      desc: 'In-depth financial investigation, fraud risk evaluation, and expert witness support.',
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      desc: 'Corporate finance restructuring, capital appraisal, and strategic growth planning.',
    },
    {
      icon: Lightbulb,
      title: 'Consultancy Services',
      desc: 'Management advisory focusing on internal controls, risk management, and organizational change.',
    },
  ];

  const sectors = [
    'Manufacturing',
    'Banking & Insurance',
    'Oil & Gas',
    'Government Parastatals',
    'Pharmaceutical & Hospitals',
    'Communications',
    'Engineering & Construction',
    'Securities & Investment',
    'Shipping & Aviation',
    'Hotels & Clubs',
    'Printing & Publishing',
    'Trading & Services',
  ];

  return (
    <div className="animate-fade-in">
      
      {/* HERO SECTION */}
      <section className="relative bg-primary text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        {/* Subtle background overlay and gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent/30 opacity-95" />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary-light/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
           

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-none text-white">
              Trusted Financial & Advisory <span className="text-accent">Excellence</span>
            </h1>

            <p className="text-lg sm:text-xl text-neutral-light/90 leading-relaxed font-normal">
              Elijah Osianor & Co. provides unique, multi-disciplinary client-oriented services meeting international standards for private and public organizations across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button to="/services" variant="accent" size="lg" icon={ArrowRight}>
                Our Services
              </Button>
              <Button to="/contact" variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-10 border-t border-white/15 mt-8 text-neutral-light/80">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">30+ Years</span>
                <span className="text-xs sm:text-sm text-accent font-medium">Industry Presence</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">100%</span>
                <span className="text-xs sm:text-sm text-accent font-medium">Client Confidentiality</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl sm:text-3xl font-extrabold text-white">11+ Areas</span>
                <span className="text-xs sm:text-sm text-accent font-medium">Core Professional Services</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Decades of Institutional Trust & Rigor"
            subtitle="We combine deep technical audit expertise with strategic consulting to protect and grow your corporate value."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => {
              const IconComp = item.icon;
              return (
                <Card key={index} topAccent={true} className="flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6">
                      <IconComp className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-neutral-mid text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>

        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-20 bg-white border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Core Competencies"
            title="Comprehensive Services Spectrum"
            subtitle="Tailored accounting, audit, tax, and advisory solutions designed for complex corporate landscapes."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {servicesPreview.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <Card key={idx} className="group flex flex-col justify-between hover:border-accent">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold text-neutral-mid uppercase tracking-widest">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-neutral-mid text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <Link 
                    to="/services" 
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-dark transition-colors"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button to="/services" variant="accent" size="lg" icon={ArrowRight}>
              View All 11 Services Spectrum
            </Button>
          </div>

        </div>
      </section>

      {/* FIRM INTRO MISSION STRIP */}
      <section className="py-16 bg-neutral-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mx-auto shadow-md">
            <Building2 className="w-7 h-7 text-accent" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Dedicated to High-Quality Professional Standards
          </h2>

          <p className="text-lg text-neutral-mid leading-relaxed italic">
            "Our firm exists to render unique, high-quality professional services meeting international standards, enabling our clients to realize their profitability, growth, and governance potential."
          </p>

          <div>
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors text-base"
            >
              <span>Learn More About Our History & Firm Profile</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CLIENTELE SECTORS BAND */}
      <section className="py-16 bg-primary/5 border-y border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-mid">
              Institutional Footprint
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mt-1">
              Trusted Across Key Economic Sectors
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {sectors.map((sector, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-border text-sm font-semibold text-primary shadow-sm hover:border-accent hover:text-accent transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                {sector}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* CLOSING CTA BANNER */}
      <section className="relative bg-gradient-to-r from-primary via-primary-dark to-accent text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Let's discuss how we can add value to your business
          </h2>

          <p className="text-lg sm:text-xl text-neutral-light/90 max-w-2xl mx-auto">
            Partner with proven Chartered Accountants and management consultants committed to precision, compliance, and profitability.
          </p>

          <div className="pt-2">
            <Button to="/contact" variant="white" size="lg" icon={ArrowRight}>
              Get in Touch Today
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
