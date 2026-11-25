import Head from 'next/head';
import { BookOpen, HeartHandshake, Sparkles } from 'lucide-react';
import AnimatedContent from './components/AnimatedContent';
import CardNav from './components/CardNav';

const FEATURE_CARDS = [
  {
    icon: HeartHandshake,
    title: 'Sosial & Pengasuhan Yatim',
    description:
      'Berawal dari Yayasan Yatama Grobogan sejak tahun 2006 dalam penyantunan, pengasuhan, dan pendampingan anak yatim, piatu, serta dhuafa di Grobogan dan sekitarnya.',
    badgeClass: 'bg-[#134377]/10 text-[#134377] border-[#134377]/20',
    iconClass: 'text-[#134377]',
  },
  {
    icon: BookOpen,
    title: 'Pendidikan Islam',
    description:
      'Pembinaan karakter, pendidikan keislaman, dan penguatan kualitas generasi asuh agar tumbuh mandiri dan berakhlak.',
    badgeClass: 'bg-[#0F5C33]/10 text-[#0F5C33] border-[#0F5C33]/20',
    iconClass: 'text-[#0F5C33]',
  },
  {
    icon: Sparkles,
    title: 'Dakwah & Transformasi 2026',
    description:
      'Bertransformasi menjadi Yayasan Islamic Centre Madani (مؤسسة المركز الإسلامي المدني) pada 2026 untuk memperluas bidang pengabdian kepada masyarakat.',
    badgeClass: 'bg-[#F7C616]/20 text-[#0F5C33] border-[#F7C616]/50',
    iconClass: 'text-[#134377]',
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Yayasan Islamic Centre Madani | مؤسسة المركز الإسلامي المدني</title>
        <meta
          name="description"
          content="Yayasan Islamic Centre Madani (مؤسسة المركز الإسلامي المدني) bergerak di bidang sosial, dakwah, dan pendidikan Islam—transformasi dari Yayasan Yatama Grobogan sejak 2006 menuju 2026."
        />
      </Head>

      <div className="min-h-screen bg-[#FFFFFF] text-[#134377] selection:bg-[#F7C616] selection:text-[#134377]">
        <header className="sticky top-0 z-50 px-6 pt-4">
          <CardNav
            theme="light"
            surface="glass"
            logo="/src/Islamic%20Centre%20Madani.png"
            logoAlt="Logo Yayasan Islamic Centre Madani"
            logoHref="/"
            cta={{
              label: 'Donate it',
              href: '#program',
              bgColor: '#134377',
              hoverBgColor: '#F7C616',
              activeBgColor: '#F7C616',
            }}
          />
        </header>

        <main className="px-6 py-16">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <AnimatedContent
              trigger="mount"
              distance={40}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              stagger={0.12}
              className="flex max-w-3xl flex-col items-center text-center"
            >
              <h1
                title="Yayasan Islamic Centre Madani"
                className="mt-4 flex items-center justify-center"
              >
                <img
                  src="/src/Islamic%20Centre%20Madani.png"
                  alt="Yayasan Islamic Centre Madani"
                  className="h-24 w-auto object-contain sm:h-32"
                />
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Merupakan yayasan yang bergerak di bidang sosial, dakwah, dan pendidikan Islam.
                Perjalanan yayasan ini berawal dari Yayasan Yatama Grobogan yang telah berkhidmat
                dalam pelayanan sosial sejak tahun 2006.
              </p>
            </AnimatedContent>

            <AnimatedContent
              id="program"
              trigger="mount"
              distance={40}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              stagger={0.12}
              delay={0.15}
              className="mt-14 grid w-full grid-cols-1 gap-5 md:grid-cols-3"
            >
              {FEATURE_CARDS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-slate-200 bg-slate-50/70 p-7 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#134377]/40 hover:bg-[#FFFFFF] hover:shadow-md"
                  >
                    <div
                      className={`mb-6 flex h-11 w-11 items-center justify-center rounded-xl border ${item.badgeClass}`}
                    >
                      <IconComponent className={`h-5 w-5 ${item.iconClass}`} />
                    </div>

                    <h2 className="text-lg font-semibold text-[#134377]">
                      {item.title}
                    </h2>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </AnimatedContent>

            <AnimatedContent
              trigger="mount"
              distance={40}
              duration={0.8}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              stagger={0.12}
              delay={0.25}
              className="mt-12 w-full max-w-2xl border-t border-slate-200 pt-6 text-center"
            >
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                Berawal dari kepedulian terhadap penyantunan, pengasuhan, dan pendampingan
                anak-anak yatim, piatu, dan dhuafa di wilayah Grobogan dan sekitarnya, pada tahun
                2026 dilakukan transformasi kelembagaan menjadi{' '}
                <span className="font-semibold text-[#134377]">
                  Yayasan Islamic Centre Madani
                </span>{' '}
                sebagai langkah perluasan bidang pengabdian kepada masyarakat.
              </p>
            </AnimatedContent>
          </div>
        </main>
      </div>
    </>
  );
}