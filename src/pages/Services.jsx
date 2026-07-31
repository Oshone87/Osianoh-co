import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { 
  FileCheck, 
  Receipt, 
  Calculator, 
  Search, 
  PieChart, 
  ShieldAlert, 
  FileSearch, 
  TrendingUp, 
  GraduationCap, 
  FileText, 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Phone,
  HelpCircle
} from 'lucide-react';
import { useDocumentTitle } from '../utils/useDocumentTitle';

export default function Services() {
  useDocumentTitle('Services');

  // State to manage which accordion item is expanded (null for all closed, or index)
  const [openIndex, setOpenIndex] = useState(0); // First expanded by default

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const servicesList = [
    {
      icon: FileCheck,
      title: '1. Audit & Assurance Services',
      shortDesc: 'Comprehensive statutory and non-statutory audit solutions designed to build stakeholder confidence and ensure statutory compliance.',
      details: [
        'Statutory Financial Statement Audits for public and private companies in compliance with IFRS and local regulatory bodies.',
        'Special Purpose Audits and Value-For-Money (VFM) reviews tailored for specific operational or investor inquiries.',
        'Revenue & Expenditure Audits for government agencies, NGOs, and corporate entities.',
        'Internal Control Reviews & Financial Risk Assessment to eliminate reporting vulnerabilities.',
        'Joint Venture & Regulatory Compliance Audit reporting.',
      ],
    },
    {
      icon: Receipt,
      title: '2. Tax Services',
      shortDesc: 'Strategic tax planning, regulatory management, and dispute resolution to minimize tax exposure legally.',
      details: [
        'Corporate Income Tax (CIT), Value Added Tax (VAT), and Withholding Tax (WHT) planning and monthly filings.',
        'Personal Income Tax (PAYE) management and executive tax planning.',
        'Representation and defense during Tax Audits, Investigations, and Queries from Federal (FIRS) and State Revenue Authorities (LIRS).',
        'Obtaining Tax Clearance Certificates (TCC) and statutory tax health checks.',
        'Pioneer Status Tax Relief advisory and Transfer Pricing documentation guidance.',
      ],
    },
    {
      icon: Calculator,
      title: '3. Accounting Services',
      shortDesc: 'End-to-end bookkeeping, cloud accounting integration, and financial reporting systems for businesses of all scales.',
      details: [
        'Outsourced Bookkeeping and Maintenance of General Ledger & Subsidiary Books.',
        'Preparation of Monthly, Quarterly, and Annual Management Accounts & Financial Statements.',
        'Payroll Computation, Payslip Generation, and Statutory Pension/NHF/NSITF Remittances.',
        'Fixed Asset Register Setup, Depreciation Schedule Maintenance, and Physical Asset Verification.',
        'Accounting Software Selection, Setup, and Migration (Sage, QuickBooks, Tally).',
      ],
    },
    {
      icon: Search,
      title: '4. Forensic Audit Services',
      shortDesc: 'Rigorous investigation into financial discrepancies, fraud allegations, and white-collar irregularities.',
      details: [
        'Corporate Fraud Investigation and Embezzlement Tracing.',
        'Quantification of Financial Losses for Litigation and Alternative Dispute Resolution (ADR).',
        'Expert Witness Testimony in court proceedings and tribunal hearings.',
        'Post-Incident Fraud Vulnerability Assessment and Internal Control Strengthening.',
        'Asset Tracing and Financial Reconstruction for disputed accounts.',
      ],
    },
    {
      icon: PieChart,
      title: '5. Management Accounting Services',
      shortDesc: 'Actionable financial intelligence, cost control, and strategic planning tools for executive decision-makers.',
      details: [
        'Budget Formulation, Implementation, and Variance Analysis.',
        'Cost Accounting Systems Design to track operational overheads and product profitability.',
        'Cash Flow Forecasting, Working Capital Optimization, and Liquidity Management.',
        'Break-even Analysis and Capital Expenditure (CAPEX) Feasibility Evaluation.',
        'Executive Dashboard & Performance Indicator (KPI) Reporting.',
      ],
    },
    {
      icon: ShieldAlert,
      title: '6. Internal Audit Services',
      shortDesc: 'Proactive internal control evaluations to safeguard corporate assets and streamline operational workflows.',
      details: [
        'Outsourced and Co-Sourced Internal Audit Department Management.',
        'Design and Implementation of Standard Operating Procedures (SOPs) and Internal Controls.',
        'Risk-Based Operational Audits across procurement, inventory, sales, and IT systems.',
        'Compliance Monitoring against Industry Regulations and Corporate Governance Frameworks.',
        'Fraud Risk Exposure Audits and Prevention Systems Implementation.',
      ],
    },
    {
      icon: FileSearch,
      title: '7. Investigations',
      shortDesc: 'Specialized due diligence and targeted factual inquiries for corporate transactions and internal concerns.',
      details: [
        'Pre-Acquisition Financial Due Diligence for Mergers & Acquisitions.',
        'Targeted Background Financial Checks on potential partners, vendors, and key personnel.',
        'Special Fact-Finding Inquiries into operational bottlenecks or inventory shrinkage.',
        'Regulatory Compliance Inquiries and Whistleblower Allegation Verification.',
      ],
    },
    {
      icon: TrendingUp,
      title: '8. Financial Advisory Services',
      shortDesc: 'Expert guidance on corporate restructuring, capital allocation, business valuation, and growth strategy.',
      details: [
        'Corporate Restructuring, Turnaround Management, and Financial Reorganization.',
        'Independent Business Valuation for equity sales, partner buyouts, or investments.',
        'Project Financing Appraisal and Preparation of Bankable Business Plans.',
        'Working Capital Advisory and Debt Restructuring / Refinancing Negotiation.',
      ],
    },
    {
      icon: GraduationCap,
      title: '9. Human Resources Training Services',
      shortDesc: 'Empowering client personnel with practical financial, accounting, and regulatory compliance skills.',
      details: [
        'Customized In-House Workshops on Modern Accounting Principles and IFRS.',
        'Executive Financial Literacy Training for Non-Financial Managers.',
        'Tax Compliance and Statutory Deductions Training for HR/Payroll Staff.',
        'Accounting Software Training (QuickBooks, Sage) for internal finance teams.',
        'Designing Finance & Internal Control Policy Manuals.',
      ],
    },
    {
      icon: FileText,
      title: '10. Secretarial Services',
      shortDesc: 'Ensuring seamless Corporate Affairs Commission (CAC) compliance and statutory governance administration.',
      details: [
        'Corporate Affairs Commission (CAC) Annual Returns Filing and Company Searches.',
        'Maintenance of Statutory Books, Register of Directors, Shareholders, and Mortgages.',
        'Board Meeting Support, Agenda Drafting, and Official Minute Taking.',
        'Share Capital Increase, Allotment, and Statutory Changes in Corporate Governance.',
      ],
    },
    {
      icon: Lightbulb,
      title: '11. Consultancy Services',
      shortDesc: 'Holistic business strategy, feasibility studies, and operational optimization for sustainable profitability.',
      details: [
        'Strategic Business Planning and Commercial Feasibility Studies.',
        'Organizational Structuring, Departmental Workflow Design, and Job Roles Definition.',
        'Enterprise Risk Management (ERM) Framework Development.',
        'Change Management and Growth Strategy Advisory for Scaling Enterprises.',
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      
      {/* PAGE BANNER */}
      <PageBanner
        title="Our Practice Areas & Services"
        subtitle="11 specialized accounting, audit, tax, and management consulting domains delivered to international standards."
        breadcrumb="Services"
      />

      {/* ACCORDION SERVICES LIST SECTION */}
      <section className="py-16 sm:py-20 bg-neutral-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Detailed Spectrum"
            title="Interactive Service Breakdown"
            subtitle="Click on any service area below to expand its full scope of deliverables and specialized sub-services."
          />

          <div className="space-y-4">
            {servicesList.map((service, index) => {
              const IconComponent = service.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'border-accent shadow-card-hover ring-1 ring-accent/20' 
                      : 'border-neutral-border hover:border-accent/40 shadow-sm'
                  }`}
                >
                  {/* Header / Clickable Toggle */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 text-left flex items-start sm:items-center justify-between gap-4 focus:outline-none focus:bg-neutral-light/50 transition-colors"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-accent text-white' : 'bg-primary text-white'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold transition-colors ${
                          isOpen ? 'text-accent' : 'text-primary'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-neutral-mid text-xs sm:text-sm mt-0.5 max-w-2xl line-clamp-1 sm:line-clamp-none">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className={`p-2 rounded-full shrink-0 transition-all ${
                      isOpen ? 'bg-accent/10 text-accent' : 'bg-neutral-light text-primary'
                    }`}>
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </button>

                  {/* Expandable Body */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-border/60 bg-neutral-light/30 animate-slide-down">
                      <p className="text-neutral-mid text-sm mb-4 font-normal">
                        {service.shortDesc}
                      </p>
                      <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-3">
                        Key Deliverables & Scope:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.details.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-sm text-primary font-medium">
                            <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 pt-4 border-t border-neutral-border flex justify-end">
                        <Button to="/contact" variant="accent" size="sm" icon={Phone}>
                          Inquire About This Service
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* BOTTOM ADVISORY CTA BANNER */}
      <section className="py-16 bg-white border-t border-neutral-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="w-14 h-14 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto border border-accent/30">
            <HelpCircle className="w-8 h-8" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Not sure which service scope fits your business needs?
          </h2>

          <p className="text-neutral-mid text-base sm:text-lg max-w-2xl mx-auto">
            Our lead consultants are available for a preliminary diagnostic call to review your financial structure, tax posture, or audit requirements.
          </p>

          <div>
            <Button to="/contact" variant="primary" size="lg" icon={Phone}>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
