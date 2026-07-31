import React from 'react';
import PageBanner from '../components/PageBanner';
import SectionHeading from '../components/SectionHeading';
import TeamMemberCard from '../components/TeamMemberCard';
import { Award, Briefcase, CheckCircle, ShieldCheck } from 'lucide-react';
import { useDocumentTitle } from '../utils/useDocumentTitle';

export default function Team() {
  useDocumentTitle('Team');

  const managementTeam = [
    {
      name: 'Elijah A. Osianor',
      credentials: 'PhD, FCA, FCTI, IFRE',
      role: 'Managing Consultant / Lead Partner',
      experience: '30+ Years Experience',
      initials: 'EO',
      photoUrl: null, // Replace with '/images/team/elijah-osianor.jpg' when available
      bio: 'Over 30 years of comprehensive leadership spanning Statutory Audit, Corporate Taxation, Forensic Accounting, Corporate Finance, and Executive Management Advisory across public and private sectors.',
    },
    {
      name: 'Bello Abdulkadir Abu',
      credentials: 'ACCA, CPA, AMNIN, MBA',
      role: 'Partner / Senior Consultant',
      experience: '19+ Years Experience',
      initials: 'BA',
      photoUrl: null, // Replace with '/images/team/bello-abu.jpg' when available
      bio: '19+ years of distinguished experience in commercial banking, corporate finance, statutory financial reporting, risk assessment, and institutional compliance.',
    },
    {
      name: 'Otoyo E. Emah',
      credentials: 'ACA, ACTI',
      role: 'Partner',
      experience: '20+ Years Experience',
      initials: 'OE',
      photoUrl: null, // Replace with '/images/team/otoyo-emah.jpg' when available
      bio: '20+ years specializing in turnaround management, organizational change, risk advisory, tax strategy, and corporate restructuring for high-growth enterprises.',
    },
    {
      name: 'Francis Bassey',
      credentials: 'B.Sc., FCA, ACTI',
      role: 'Head of Audit & Finance',
      experience: '18+ Years Experience',
      initials: 'FB',
      photoUrl: null, // Replace with '/images/team/francis-bassey.jpg' when available
      bio: 'Versatile Audit and Finance Department leader with extensive technical expertise in financial accounting systems, IT audit integration, and taxation.',
    },
  ];

  const keyStaff = [
    {
      name: 'Adeola Okunola',
      qualification: 'ACA',
      department: 'Audit & Consultancy',
      experience: '15 Years Experience',
      role: 'Senior Audit Manager',
    },
    {
      name: 'Christian Emedo',
      qualification: 'ACA, ACTI',
      department: 'Taxation & Regulatory',
      experience: '10 Years Experience',
      role: 'Tax Advisory Specialist',
    },
    {
      name: 'James M. James',
      qualification: 'ACA',
      department: 'Information Technology & Systems Audit',
      experience: '12 Years Experience',
      role: 'Systems Audit Manager',
    },
    {
      name: 'Clement Danson',
      qualification: 'HND',
      department: 'Administration & Operations',
      experience: '16 Years Experience',
      role: 'Head of Operations',
    },
    {
      name: 'Moses Udoh',
      qualification: 'HND',
      department: 'Audit & Quality Assurance',
      experience: '19 Years Experience',
      role: 'Senior Field Supervisor',
    },
  ];

  return (
    <div className="animate-fade-in">
      
      {/* PAGE BANNER */}
      <PageBanner
        title="Our Management & Staff"
        subtitle="Meet the seasoned professionals and chartered accountants driving excellence and value for our clients."
        breadcrumb="Team"
      />

      {/* MANAGEMENT TEAM GRID */}
      <section className="py-16 sm:py-20 bg-neutral-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Leadership"
            title="Management Consultants & Partners"
            subtitle="Distinguished financial leaders with decades of hands-on technical and strategic experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {managementTeam.map((member, index) => (
              <TeamMemberCard
                key={index}
                name={member.name}
                credentials={member.credentials}
                role={member.role}
                experience={member.experience}
                bio={member.bio}
                initials={member.initials}
                photoUrl={member.photoUrl}
              />
            ))}
          </div>

        </div>
      </section>

      {/* KEY STAFF PROFILES SECTION */}
      <section className="py-20 bg-white border-t border-neutral-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Technical Staff"
            title="Professional Execution Specialists"
            subtitle="Our dedicated team of qualified managers, supervisors, and administrative personnel ensuring seamless project delivery."
          />

          <div className="bg-neutral-light rounded-xl border border-neutral-border overflow-hidden shadow-soft-blue">
            <div className="px-6 py-4 bg-primary text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-accent" />
                <h3 className="font-bold text-lg">Senior Technical & Support Roster</h3>
              </div>
              <span className="text-xs font-semibold text-accent uppercase tracking-wider hidden sm:inline">
                Verified Credentials
              </span>
            </div>

            <div className="divide-y divide-neutral-border">
              {keyStaff.map((staff, idx) => (
                <div 
                  key={idx} 
                  className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-accent font-bold text-base shrink-0 mt-1">
                      {staff.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-lg font-bold text-primary">{staff.name}</h4>
                        <span className="px-2 py-0.5 bg-accent/10 text-accent text-xs font-extrabold rounded uppercase">
                          {staff.qualification}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-neutral-mid mt-0.5">
                        {staff.role} • <span className="text-primary font-normal">{staff.department}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-start md:self-center">
                    <span className="px-3 py-1 bg-white border border-neutral-border text-xs font-bold text-primary rounded-full shadow-sm">
                      {staff.experience}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* TEAM QUALIFICATION STRIP */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <ShieldCheck className="w-12 h-12 text-accent mx-auto" />
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            Continuous Professional Education & Technical Versatility
          </h3>
          <p className="text-neutral-light/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Every member of Elijah Osianor & Co. undergoes mandatory continuous professional training in modern auditing software, tax law revisions, IFRS compliance, and internal control frameworks to deliver uncompromised quality.
          </p>
        </div>
      </section>

    </div>
  );
}
