// src/components/ui/ProgramCard.tsx
import React from 'react';

interface ProgramCardProps {
  titleAr: string;
  titleId: string;
  items: string[];
  alignHeader?: 'left' | 'right';
}

export function ProgramCard({
  titleAr,
  titleId,
  items,
  alignHeader = 'right',
}: ProgramCardProps) {
  return (
    <div className="relative rounded-2xl border border-white/15 bg-[#121214]/90 p-6 pt-9 backdrop-blur-md transition-colors duration-300 hover:border-purple-500/50">
      {/* Tab Judul yang memotong garis border atas */}
      <div
        className={`absolute -top-3.5 bg-[#0D0D0F] px-3 text-sm font-semibold tracking-wide text-white ${
          alignHeader === 'right' ? 'right-6' : 'left-6'
        }`}
      >
        <span className="font-arabic text-purple-400">{titleAr}</span>
        <span className="mx-2 text-white/30">|</span>
        <span>{titleId}</span>
      </div>

      <ul className="space-y-2.5 text-center text-xs font-medium uppercase tracking-wider text-zinc-300">
        {items.map((item, idx) => (
          <li
            key={idx}
            className="transition-colors hover:text-white"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}