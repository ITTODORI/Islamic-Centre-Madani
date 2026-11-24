// src/components/sections/ManhajTimelineSection.tsx
const STEPS = [
  {
    stepAr: 'التعارف والتسجيل',
    stepId: 'Ta\'aruf & Pemetaan',
    desc: 'Mengenal potensi santri dan jamaah, memetakan kebutuhan pendidikan serta pembinaan dasar keislaman.',
    align: 'left',
  },
  {
    stepAr: 'التربية والتأهيل',
    stepId: 'Tarbiyah & Pembinaan',
    desc: 'Proses belajar terstruktur meliputi tahsin, tahfidz, pemahaman akidah, dan adab Islami.',
    align: 'right',
  },
  {
    stepAr: 'التزكية والعمل',
    stepId: 'Tazkiyah & Pengamalan',
    desc: 'Pembiasaan ibadah harian, qiyamul lail, dan pembentukan karakter berakhlakul karimah.',
    align: 'left',
  },
  {
    stepAr: 'الخدمة والدعوة',
    stepId: 'Khidmah & Pengabdian',
    desc: 'Menerjunkan kader dan santri untuk berkontribusi aktif dalam dakwah dan sosial kemasyarakatan.',
    align: 'right',
  },
];

export function ManhajTimelineSection() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <div className="mb-12 flex flex-col items-end text-right">
        <div className="flex items-center gap-3">
          <h2 className="font-arabic text-3xl font-bold text-zinc-600">
            منهجية التربية
          </h2>
          <span className="h-2.5 w-2.5 rotate-45 bg-purple-500" />
        </div>
        <h3 className="-mt-2 text-2xl font-bold text-white">
          Manhaj Pembinaan (4 Pilar Madani)
        </h3>
        <div className="mt-4 rounded-full border border-purple-400/40 bg-purple-600/80 px-5 py-1.5 text-xs font-medium text-white shadow-[0_0_20px_rgba(147,51,234,0.4)]">
          Sistem pembinaan terpadu, terukur, dan berkelanjutan
        </div>
      </div>

      <div className="space-y-14">
        {STEPS.map((item, idx) => {
          const isLeft = item.align === 'left';
          return (
            <div
              key={idx}
              className="relative rounded-2xl border border-white/15 bg-[#121214] p-8 md:p-10"
            >
              {/* Placeholder Objek 3D Chrome yang menembus tepi kartu */}
              <div
                className={`hidden md:flex absolute -top-6 h-44 w-32 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-b from-white/30 to-zinc-800/40 backdrop-blur-md shadow-2xl ${
                  isLeft ? 'left-8' : 'right-8'
                }`}
              >
                <span className="text-3xl font-bold text-white/80">
                  0{idx + 1}
                </span>
              </div>

              <div
                className={`flex flex-col ${
                  isLeft
                    ? 'md:pl-44 md:text-right'
                    : 'md:pr-44 md:text-left'
                }`}
              >
                <h4 className="text-lg font-bold text-white">
                  <span className="font-arabic text-purple-400">
                    {item.stepAr}
                  </span>{' '}
                  — {item.stepId}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}