import Head from 'next/head';
import { ArrowDown, BookOpen, HeartHandshake, Sparkles } from 'lucide-react';
import AnimatedContent from './components/AnimatedContent';
import CardNav from './components/CardNav';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack';

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

const STACK_ITEMS = [
  {
    src: '/src/Brand Guideline/Logo Profile.png',
    alt: 'Logo Profile',
  },
  {
    src: '/src/Brand Guideline/Primary Logo.png',
    alt: 'Primary Logo',
  },
  {
    src: '/src/Brand Guideline/Secondary Logo.png',
    alt: 'Secondary Logo',
  },
  {
    src: '/src/Brand Guideline/Concept Logo.png',
    alt: 'Concept Logo',
  },
  {
    src: '/src/Brand Guideline/Clear Space.png',
    alt: 'Clear Space',
  },
  {
    src: '/src/Brand Guideline/Logotype.png',
    alt: 'Logo Type',
  },
  {
    src: '/src/Brand Guideline/Our Color.png',
    alt: 'Our Color',
  },
  {
    src: '/src/Brand Guideline/Typography.png',
    alt: 'Typography',
  },
  {
    src: '/src/Brand Guideline/Visual Graphic.png',
    alt: 'Visual Graphic',
  },
  {
    src: '/src/Brand Guideline/Patterns.png',
    alt: 'Pattern',
  },
  {
    src: '/src/Brand Guideline/Mockup.png',
    alt: 'Mockup',
  },
  {
    src: '/src/Brand Guideline/Mockup-1.png',
    alt: 'Mockup 1',
  },
  {
    src: '/src/Brand Guideline/Mockup-2.png',
    alt: 'Mockup 2',
  },
  {
    src: '/src/Brand Guideline/Mockup-3.png',
    alt: 'Mockup 3',
  },
  {
    src: '/src/Brand Guideline/Mockup 1.png',
    alt: 'Mockup 4',
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

      <div className="relative min-h-screen bg-[#FFFFFF] text-[#134377] selection:bg-[#F7C616] selection:text-[#134377]">
        {/* Ornamen BG */}
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#134377]/[0.03] blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#F7C616]/[0.06] blur-3xl" />
          <img
            src="/src/%D9%85.svg"
            alt=""
            aria-hidden="true"
            className="absolute -right-6 bottom-0 h-64 w-64 object-contain opacity-60 sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem]"
          />
        </div>

        {/* Navbar */}
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
              textColor: '#FFFFFF',
              hoverTextColor: '#134377',
            }}
          />
        </header>

        <main className="relative z-10">
          {/* SECTION HOME */}
          <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 pb-20">
            <AnimatedContent
              trigger="mount"
              distance={40}
              duration={0.85}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              stagger={0.12}
              className="flex max-w-3xl flex-col items-center text-center"
            >
              <span className="inline-flex items-center rounded-full border border-[#134377]/15 bg-[#134377]/[0.04] px-4 py-1 text-xs font-semibold tracking-wider text-[#134377]">
                مؤسسة المركز الإسلامي المدني
              </span>

              <h1
                title="Yayasan Islamic Centre Madani"
                className="mt-5 flex items-center justify-center"
              >
                <img
                  src="/src/Islamic%20Centre%20Madani.png"
                  alt="Yayasan Islamic Centre Madani"
                  className="h-24 w-auto object-contain sm:h-32 md:h-36"
                />
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                Merupakan yayasan yang bergerak di bidang sosial, dakwah, dan pendidikan Islam.
                Perjalanan yayasan ini berawal dari Yayasan Yatama Grobogan yang telah berkhidmat
                dalam pelayanan sosial sejak tahun 2006.
              </p>

              <a
                href="#jejak-perjalanan"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-[#134377]/20 bg-white px-5 py-2.5 text-sm font-semibold text-[#134377] shadow-xs transition-all duration-300 hover:border-[#134377] hover:bg-[#134377] hover:text-white"
              >
                Jejak Perjalanan
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </AnimatedContent>

            <AnimatedContent
              id="program"
              trigger="mount"
              distance={40}
              duration={0.85}
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
                    className="rounded-2xl border border-slate-200 bg-white/95 p-7 shadow-xs backdrop-blur-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#134377]/40 hover:bg-[#FFFFFF] hover:shadow-md"
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
          </section>

          {/* SECTION SCROLL STACK */}
          <section
            id="jejak-perjalanan"
            aria-labelledby="scroll-stack-heading"
            className="mx-auto w-full max-w-4xl px-6 pt-12 pb-28"
          >
            <div className="mb-10 text-center">
              <span className="inline-block rounded-full bg-[#134377]/10 px-4 py-1 text-xs font-semibold tracking-wide text-[#134377]">
                Jejak Perjalanan
              </span>
              <h2
                id="scroll-stack-heading"
                className="mt-3 text-2xl font-bold text-[#134377] sm:text-4xl"
              >
                Dari Yatama Grobogan Menuju Madani
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Berawal dari kepedulian terhadap penyantunan, pengasuhan, dan pendampingan
                anak-anak yatim, piatu, dan dhuafa di wilayah Grobogan dan sekitarnya, pada tahun
                2026 dilakukan transformasi kelembagaan menjadi{' '}
                <span className="font-semibold text-[#134377]">
                  Yayasan Islamic Centre Madani
                </span>{' '}
                sebagai langkah perluasan bidang pengabdian kepada masyarakat.
              </p>
            </div>

            <div className="w-full">
              <ScrollStack useWindowScroll>
                {STACK_ITEMS.map((item, idx) => (
                  <ScrollStackItem
                    key={idx}
                    itemClassName="!p-0 !h-auto overflow-hidden bg-transparent"
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="block h-full w-full object-cover"
                    />
                  </ScrollStackItem>
                ))}
              </ScrollStack>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}