import React from 'react';
import PageBanner from '../components/PageBanner';
import Card from '../components/Card';
import { MapPin, Phone, Mail, Clock, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useDocumentTitle } from '../utils/useDocumentTitle';

export default function Contact() {
  useDocumentTitle('Contact');

  return (
    <div className="animate-fade-in">
      
      {/* PAGE BANNER */}
      <PageBanner
        title="Get in Touch"
        subtitle="Contact our office for inquiries, audit engagements, or professional advisory consultations."
        breadcrumb="Contact"
      />

      {/* TWO-COLUMN CONTACT SECTION */}
      <section className="py-16 sm:py-24 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Column: Contact Info Card (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <Card className="h-full flex flex-col justify-between border-t-4 border-t-accent shadow-card-hover">
                
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 text-accent font-bold text-xs uppercase tracking-wider rounded-full mb-3">
                      <Award className="w-4 h-4" />
                      Official Corporate Office
                    </div>
                    <h2 className="text-3xl font-extrabold text-primary">
                      Elijah Osianor & Co.
                    </h2>
                    <p className="text-sm font-semibold text-accent uppercase tracking-wider mt-0.5">
                      Chartered Accountants
                    </p>
                  </div>

                  <div className="space-y-6 border-t border-neutral-border pt-6">
                    
                    {/* Address Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                        <MapPin className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-mid">
                          Physical Address
                        </h3>
                        <p className="text-base font-bold text-primary leading-snug">
                          Suite 32-33, 2nd Floor, Distinct Plaza, 
                          <br />
                          19 Kudirat Abiola Way, Oregun, Ikeja, Lagos State
                        </p>
                      </div>
                    </div>

                    {/* Phone Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-mid">
                          Direct Telephone
                        </h3>
                        <a 
                          href="tel:08089990866" 
                          className="text-lg font-extrabold text-primary hover:text-accent transition-colors block"
                        >
                          0808 999 0866
                        </a>
                      </div>
                    </div>

                    {/* Email Block */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                        <Mail className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-mid">
                          Electronic Mail
                        </h3>
                        <a 
                          href="mailto:osianor@yahoo.com" 
                          className="text-lg font-extrabold text-primary hover:text-accent transition-colors block"
                        >
                          osianor@yahoo.com
                        </a>
                      </div>
                    </div>

                    {/* Office Hours */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary text-white flex items-center justify-center shrink-0 shadow-md">
                        <Clock className="w-6 h-6 text-accent" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-mid">
                          Official Office Hours
                        </h3>
                        <p className="text-sm font-semibold text-primary">
                          Monday – Friday: 8:00 AM – 5:00 PM
                        </p>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-border flex items-center gap-2 text-xs text-neutral-mid font-medium">
                  <ShieldCheck className="w-4 h-4 text-accent" />
                  <span>Prompt consultation responses guaranteed for all written inquiries.</span>
                </div>

              </Card>
            </div>

            {/* Right Column: Decorative Brand Graphic Panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="h-full min-h-[380px] bg-primary text-white rounded-xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl border border-primary-dark">
                {/* Abstract geometric background graphics matching brand palette */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent/30 opacity-90" />
                <div className="absolute -right-16 -bottom-16 w-64 h-64 rounded-full bg-accent/20 blur-2xl pointer-events-none" />
                <div className="absolute top-1/4 -left-12 w-48 h-48 rounded-full bg-primary-light/40 blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-6">
                  <div className="w-14 h-14 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                    <MapPin className="w-8 h-8" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    Strategic Location in the Heart of Lagos Business Hub
                  </h3>

                  <p className="text-neutral-light/80 text-sm sm:text-base leading-relaxed">
                    Situated in Ikeja, Oregun, our office is accessible to corporate headquarters, government ministries, and commercial enterprises across Lagos State and nation-wide.
                  </p>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/15 space-y-3">
                  {[
                    'Direct Partner Consultation',
                    'Confidential Document Handling',
                    'Flexible Engagement Terms',
                    'Prompt Response Times',
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-light">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
