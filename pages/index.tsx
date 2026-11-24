// pages/index.tsx
import Head from 'next/head';
import Image from 'next/image';
// Impor komponen dari folder components/reactbits (sesuaikan path setelah salin dari reactbits.dev)
// import SpotlightCard from '../components/reactbits/SpotlightCard';
// import BlurText from '../components/reactbits/BlurText';
// import CountUp from '../components/reactbits/CountUp';

const BIDANG_KHIDMAT = [
  {
    titleAr: 'العمل الاجتماعي',
    titleId: 'Sosial & Kemanusiaan',
    items: [
      'PANTI ASUHAN BERBASIS ASRAMA',
      'PENYANTUNAN YATIM & PIATU',
      'PENDAMPINGAN KAUM DHUAFA',
      'BAITUL MAAL & ZISWAF',
      'LAYANAN SOSIAL MASYARAKAT',
    ],
  },
  {
    titleAr: 'التعليم والتحفيظ',
    titleId: 'Pendidikan & Tahfidz',
    items: [
      'PROGRAM TAHFIDZ AL-QUR\'AN',
      'PENDIDIKAN ISLAM TERPADU',
      'BEASISWA ANAK ASUH BERPRESTASI',
      'PEMBINAAN KARAKTER & ADAB',
      'TAHSIN & KAJIAN KITAB',
    ],
  },
  {
    titleAr: 'الدعوة والإرشاد',
    titleId: 'Dakwah & Syiar Islam',
    items: [
      'MAJLIS TAKLIM PURWODADI',
      'DAKWAH DIGITAL & MEDIA ISLAM',
      'KADERISASI DAI & PENGABDI',
      'SYIAR HARI BESAR ISLAM',
      'EDUKASI KELUARGA SAKINAH',
    ],
  },
  {
    titleAr: 'التحول المؤسسي',
    titleId: 'Transformasi 2006–2026',
    items: [
      'BERAWAL DARI YAYASAN YATAMA GROBOGAN',
      '2 DEKADE KHIDMAT DI GROBOGAN',
      'PERLUASAN CAKUPAN PELAYANAN',
      'TATA KELOLA MODERN & PROFESIONAL',
      'PUSAT PENCERAHAN UMAT',
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-zinc-100 selection:bg-[#FFCC00] selection:text-[#083B73]">
      <Head>
        <title>Yayasan Islamic Centre Madani | مؤسسة المركز الإسلامي المدني</title>
        <meta
          name="description"
          content="Yayasan Islamic Centre Madani (Transformasi Yayasan Yatama Grobogan 2006–2026) bergerak di bidang sosial, dakwah, dan pendidikan Islam."
        />
      </Head>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D0D0F]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            {/* Simpan file logo di public/src/logo-mark-white.png */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 p-1.5">
              <Image
                src="/src/logo-mark-white.png"
                alt="Logo Islamic Centre Madani"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-bold tracking-wide text-white">
                ISLAMIC CENTRE MADANI
              </p>
              <p className="font-arabic text-xs text-[#FFCC00]">
                مؤسسة المركز الإسلامي المدني
              </p>
            </div>
          </div>

          <nav className="hidden gap-8 text-xs font-medium uppercase tracking-wider text-zinc-400 md:flex">
            <a href="#tentang" className="transition hover:text-white">Tentang</a>
            <a href="#program" className="transition hover:text-white">Bidang Khidmat</a>
            <a href="#filosofi" className="transition hover:text-white">Filosofi Logo</a>
            <a href="#donasi" className="transition hover:text-white">Kemitraan</a>
          </nav>

          <a
            href="#donasi"
            className="rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/10 px-4 py-2 text-xs font-semibold text-[#FFCC00] transition hover:bg-[#FFCC00] hover:text-[#083B73]"
          >
            Salurkan Donasi
          </a>
        </div>
      </header>

      <main>
        {/* SECTION 1: HERO & SEJARAH TRANSFORMASI (2006–2026) */}
        <section id="tentang" className="relative mx-auto max-w-6xl px-6 pt-20 pb-24">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs text-zinc-300">
                <span className="h-2 w-2 rotate-45 bg-[#FFCC00]" />
                <span>Dua Dekade Pengabdian (2006 – 2026) • Purwodadi, Grobogan</span>
              </div>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Yayasan{' '}
                <span className="bg-gradient-to-r from-[#FFCC00] via-amber-200 to-white bg-clip-text text-transparent">
                  Islamic Centre Madani
                </span>
              </h1>
              <p className="font-arabic mt-2 text-2xl font-semibold text-[#FFCC00]/90">
                مؤسسة المركز الإسلامي المدني
              </p>

              <p className="mt-6 text-sm leading-relaxed text-zinc-300 md:text-base">
                Merupakan yayasan yang bergerak di bidang <strong className="text-white">sosial, dakwah, dan pendidikan Islam</strong>. Perjalanan yayasan ini berawal dari <em className="text-zinc-200">Yayasan Yatama Grobogan</em> yang telah berkhidmat dalam pelayanan sosial sejak tahun 2006.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Berawal dari kepedulian terhadap penyantunan, pengasuhan, dan pendampingan anak-anak yatim, piatu, dan dhuafa di wilayah Grobogan dan sekitarnya, pada tahun 2026 dilakukan transformasi kelembagaan menjadi Yayasan Islamic Centre Madani sebagai langkah perluasan bidang pengabdian kepada masyarakat.
              </p>

              {/* Statistik Singkat */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">2006</p>
                  <p className="text-xs text-zinc-400">Awal Berkhidmat</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#FFCC00]">20+ Tahun</p>
                  <p className="text-xs text-zinc-400">Dedikasi Sosial</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400">2026</p>
                  <p className="text-xs text-zinc-400">Transformasi Madani</p>
                </div>
              </div>
            </div>

            {/* Visual Kartu Kaca 3D Emblem Logo */}
            <div className="relative flex items-center justify-center lg:col-span-5">
              <div className="relative flex h-80 w-80 items-center justify-center rounded-full border border-white/15 bg-gradient-to-b from-[#083B73]/30 to-transparent p-8 backdrop-blur-xl">
                <div className="absolute -inset-2 rounded-full border border-dashed border-[#FFCC00]/20" />
                <Image
                  src="/src/logo-primary.png"
                  alt="Primary Logo Islamic Centre Madani"
                  width={220}
                  height={220}
                  className="drop-shadow-[0_0_35px_rgba(255,204,0,0.25)]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: BIDANG KHIDMAT (GAYA TABBED-BORDER REFERENSI) */}
        <section id="program" className="mx-auto max-w-5xl px-6 py-20">
          <div className="mb-16 flex flex-col items-end text-right">
            <div className="flex items-center gap-3">
              <h2 className="font-arabic text-3xl font-bold text-zinc-600 md:text-4xl">
                مجالات الخدمة
              </h2>
              <span className="h-2.5 w-2.5 rotate-45 bg-[#FFCC00] shadow-[0_0_12px_#FFCC00]" />
            </div>
            <h3 className="-mt-2 text-2xl font-bold text-white md:text-3xl">
              Bidang Khidmat &amp; Program Utama
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {BIDANG_KHIDMAT.map((bidang, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl border border-white/15 bg-[#121214]/90 p-7 pt-10 backdrop-blur-md transition-all duration-300 hover:border-[#FFCC00]/50"
              >
                {/* Tab Judul Memotong Garis Atas */}
                <div
                  className={`absolute -top-3.5 bg-[#0D0D0F] px-3 text-sm font-semibold text-white ${
                    idx % 2 === 0 ? 'right-6' : 'left-6'
                  }`}
                >
                  <span className="font-arabic text-[#FFCC00]">{bidang.titleAr}</span>
                  <span className="mx-2 text-white/25">|</span>
                  <span>{bidang.titleId}</span>
                </div>

                <ul className="space-y-3 text-center text-xs font-medium tracking-wider text-zinc-300">
                  {bidang.items.map((item, i) => (
                    <li key={i} className="transition-colors group-hover:text-white">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: KONSEP & FILOSOFI IDENTITAS LOGO */}
        <section id="filosofi" className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-12 flex flex-col items-end text-right">
            <div className="flex items-center gap-3">
              <h2 className="font-arabic text-3xl font-bold text-zinc-600">
                فلسفة الهوية
              </h2>
              <span className="h-2.5 w-2.5 rotate-45 bg-emerald-500" />
            </div>
            <h3 className="-mt-2 text-2xl font-bold text-white">
              Filosofi Identitas Visual
            </h3>
          </div>

          <div className="relative rounded-2xl border border-white/15 bg-[#121214] p-8 md:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#083B73]/25 p-6 md:col-span-5">
                <span className="font-arabic text-6xl font-bold text-[#FFCC00]">م</span>
                <p className="mt-3 text-center text-xs font-medium text-zinc-300">
                  Stilasi Huruf Hijaiyah <em>Mim</em> (م)
                  <br />
                  Inisial <strong>Markaz Islami Madani (MIM)</strong>
                </p>
              </div>
              <div className="md:col-span-7">
                <h4 className="text-lg font-bold text-white">
                  Pancaran Cahaya Pencerahan &amp; Harapan
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  Identitas visual dikembangkan melalui stilasi kaligrafi huruf hijaiyah <strong className="text-zinc-200">Mim (م)</strong> sebagai inisial dari <em>Markaz Islami Madani</em>. Bentuknya dipadukan dengan pancaran cahaya matahari sebagai simbol pencerahan ilmu, harapan masa depan bagi anak-anak asuh, serta semangat pengabdian sosial yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: PROGRAM KEMITRAAN & DONASI */}
        <section id="donasi" className="mx-auto max-w-4xl px-6 py-20">
          <div className="mb-10 flex flex-col items-end text-right">
            <div className="flex items-center gap-3">
              <h2 className="font-arabic text-3xl font-bold text-zinc-600">
                طرق التعاون والوقف
              </h2>
              <span className="h-2.5 w-2.5 rotate-45 bg-[#FFCC00]" />
            </div>
            <h3 className="-mt-2 text-2xl font-bold text-white">
              Program Kemitraan &amp; Sedekah
            </h3>
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Orang Tua Asuh Santri & Yatim',
                desc: 'Dukungan biaya pendidikan, pengasuhan asrama, dan kebutuhan harian anak-anak yatim, piatu, dan dhuafa.',
              },
              {
                title: 'Wakaf Pendidikan & Tahfidz Al-Qur\'an',
                desc: 'Pengembangan sarana belajar, asrama tahfidz, dan fasilitas pusat kegiatan Islamic Centre Madani.',
              },
              {
                title: 'Infaq Operasional Dakwah & Sosial',
                desc: 'Dukungan program majelis taklim, santunan masyarakat sekitar Grobogan, dan layanan sosial umat.',
              },
            ].map((pkg, idx) => (
              <div key={idx} className="group">
                <h4 className="text-lg font-bold text-white transition group-hover:text-[#FFCC00]">
                  {pkg.title}
                </h4>
                <div className="mt-2 flex items-center gap-3 rounded-lg border border-white/10 bg-[#141417] px-4 py-3">
                  <span className="h-3 w-3 shrink-0 rotate-45 bg-[#FFCC00]" />
                  <p className="text-xs text-zinc-300 md:text-sm">{pkg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Yayasan Islamic Centre Madani — Purwodadi, Grobogan.</p>
      </footer>
    </div>
  );
}