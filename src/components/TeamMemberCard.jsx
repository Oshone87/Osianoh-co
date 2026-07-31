import React from 'react';
import { User } from 'lucide-react';

export default function TeamMemberCard({
  name,
  role,
  credentials,
  bio,
  initials,
  photoUrl,
  experience,
}) {
  return (
    <div className="bg-white rounded-lg border border-neutral-border p-6 sm:p-8 flex flex-col justify-between hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-accent/30 group-hover:bg-accent transition-colors duration-300" />
      
      <div>
        {/* Photo / Avatar Placeholder Slot */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-20 h-20 rounded-full bg-neutral-light border-2 border-neutral-border flex items-center justify-center text-primary font-bold text-xl shadow-inner group-hover:border-accent transition-colors">
            {/* 
              SWAPPABLE REAL PHOTO SLOT:
              Uncomment the <img> tag below and provide the photoUrl when real headshots are available.
            */}
            {photoUrl ? (
              <img 
                src={photoUrl} 
                alt={`${name}`} 
                className="w-full h-full rounded-full object-cover" 
              />
            ) : (
              <span className="flex items-center gap-1">
                {initials || <User className="w-8 h-8 text-primary/70" />}
              </span>
            )}
          </div>

          <div>
            <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors leading-tight">
              {name}
            </h3>
            {credentials && (
              <p className="text-xs font-semibold text-accent uppercase tracking-wider mt-1">
                {credentials}
              </p>
            )}
            {role && (
              <p className="text-sm font-medium text-neutral-mid mt-0.5">
                {role}
              </p>
            )}
          </div>
        </div>

        {experience && (
          <div className="inline-block px-3 py-1 bg-neutral-light rounded text-xs font-semibold text-primary mb-4 border border-neutral-border">
            {experience}
          </div>
        )}

        <div className="h-0.5 w-12 bg-accent/40 group-hover:w-20 transition-all duration-300 mb-4" />

        <p className="text-neutral-mid text-sm sm:text-base leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}
