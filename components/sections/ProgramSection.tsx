// src/components/sections/ProgramsSection.tsx
'use client';

import { ProgramCard } from '@/components/ui/ProgramCard';
// Asumsi komponen BlurText & CountUp sudah disalin dari reactbits.dev
// import BlurText from '@/components/reactbits/BlurText';

const PROGRAMS = [
  {
    titleAr: 'التعليم والتحفيظ',
    titleId: 'Pendidikan & Tahfidz',
    items: [
      'PAUD & TK ISLAM TERPADU',
      'SDIT & SMPIT MADANI',
      'RUMAH TAHFIDZ AL-QUR\'AN',
      'TAHSIN & TALAQQI BERSANAD',
      'BEASISWA SANTRI PENGHAFAL',
    ],
  },
  {
    titleAr: 'الدعوة والبحوث',
    titleId: 'Dakwah & Kajian',
    items: [
      'KAJIAN KITAB TURATS',
      'MAJLIS TAKLIM RUTIN',
      'DAKWAH DIGITAL & MEDIA',
      'PELATIHAN DAI MUDA',
      'KONSULTASI SYARIAH',
    ],
  },
  {
    titleAr: 'العمل الاجتماعي',
    titleId: 'Sosial & ZISWAF',
    items: [
      'BAITUL MAAL MADANI',
      'SANTUNAN YATIM & DHUAFA',
      'LAYANAN AMBULANS GRATIS',
      'TANGGAP BENCANA ALAM',
      'WAKAF PRODUKTIF UMAT',
    ],
  },
  {
    titleAr: 'تمكين المجتمع',
    titleId: 'Pemberdayaan Umat',
    items: [
      'KLINIK PRATAMA SYARIAH',
      'INKUBATOR EKONOMI SYARIAH',
      'PELATIHAN KEMANDIRIAN',
      'PERPUSTAKAAN ISLAM',
      'PEMBINAAN MUALAF',
    ],
  },
];

export function ProgramsSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      {/* Header Bilingual dengan Aksen Diamond Ungu */}
      <div className="mb-16 flex flex-col items-end text-right">
        <div className="flex items-center gap-3">
          <h2 className="font-arabic text-3xl font-bold text-zinc-600 md:text-4xl">
            برامجنا وخدماتنا
          </h2>
          <span className="h-2.5 w-2.5 rotate-45 bg-purple-500 shadow-[0_0_12px_#a855f7]" />
        </div>
        <h3 className="-mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
          Program &amp; Layanan Yayasan
        </h3>
      </div>

      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Dekorasi Objek 3D / Visual Kaca Melayang di Pojok Kiri Atas */}
        <div className="pointer-events-none relative flex items-center justify-center md:-mt-16">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-white/15">
            {/* Ganti div ini dengan <Spline /> atau model 3D kaligrafi/lentera chrome */}
            <div className="h-48 w-48 rounded-3xl bg-gradient-to-tr from-zinc-800 via-zinc-200 to-purple-300/40 opacity-90 shadow-[0_0_60px_rgba(168,85,247,0.2)] backdrop-blur-xl rotate-12" />
          </div>
        </div>

        {/* Kartu Pertama Sejajar di Kanan */}
        <div className="flex items-center">
          <div className="w-full">
            <ProgramCard {...PROGRAMS[0]} alignHeader="right" />
          </div>
        </div>

        {/* Kartu Lainnya */}
        {PROGRAMS.slice(1).map((prog, index) => (
          <ProgramCard
            key={index}
            {...prog}
            alignHeader={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
}