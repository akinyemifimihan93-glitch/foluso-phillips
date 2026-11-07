
import Image from "next/image";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-[#17191B] text-[#F3F0E9]">

      {/* Navigation */}
      
<nav aria-label="Main navigation" className="sticky top-0 z-50 border-b border-white/10 bg-[#17191B]/95 backdrop-blur-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-6 md:px-8 lg:px-12">

    {/* Logo */}
    <a
      href="#top"
      aria-label="Foluso Phillips — home"
      className="font-serif text-3xl tracking-tight text-[#F3F0E9]"
    >
      FOP<span className="text-[#B69A70]">.</span>
    </a>

    {/* Navigation Links */}
   <div className="hidden items-center gap-5 text-xs uppercase tracking-[0.1em] text-[#F3F0E9] lg:gap-7 lg:text-sm md:flex">
      <a
        href="#about"
        className="transition-colors duration-300 hover:text-[#B69A70]"
      >
        About
      </a>

      <a
        href="#journey"
        className="transition-colors duration-300 hover:text-[#B69A70]"
      >
        Journey
      </a>

      <a
        href="#voice"
        className="transition-colors duration-300 hover:text-[#B69A70]"
      >
        The Voice
      </a>

      <a
        href="#perspectives"
        className="transition-colors duration-300 hover:text-[#B69A70]"
      >
        Perspectives
      </a>

      <a
        href="#contact"
        className="transition-colors duration-300 hover:text-[#B69A70]"
      >
        Contact
      </a>
    </div>

    <details className="group relative md:hidden">
  <summary className="flex cursor-pointer list-none items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#F3F0E9] [&::-webkit-details-marker]:hidden">
    <span>Menu</span>
    <span className="text-xl text-[#B69A70] group-open:hidden">
      +
    </span>
    <span className="hidden text-xl text-[#B69A70] group-open:inline">
      −
    </span>
  </summary>

  <div className="absolute right-0 top-full z-50 mt-6 flex min-w-48 flex-col gap-6 border border-white/10 bg-[#17191B] p-6 shadow-2xl">
    <a href="#about" className="text-sm text-[#F3F0E9] hover:text-[#B69A70]">
      About
    </a>
    <a href="#journey" className="text-sm text-[#F3F0E9] hover:text-[#B69A70]">
      Journey
    </a>
    <a href="#voice" className="text-sm text-[#F3F0E9] hover:text-[#B69A70]">
      The Voice
    </a>
    <a href="#perspectives" className="text-sm text-[#F3F0E9] hover:text-[#B69A70]">
      Perspectives
    </a>
    <a href="#contact" className="text-sm text-[#F3F0E9] hover:text-[#B69A70]">
      Contact
    </a>
  </div>
</details>

  </div>
</nav>

      {/* Hero Section */}
     
<section className="relative overflow-hidden bg-[#17191B]">
  
<div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-12 sm:gap-12 md:px-12 lg:min-h-[85vh] lg:grid-cols-2 lg:gap-16 lg:py-16">


    {/* Hero Text */}
   <div className="editorial-reveal order-1 relative z-10 lg:order-1">
      <p className="mb-8 text-xs font-medium uppercase tracking-[0.3em] text-[#B69A70]">
        Foluso Olajide Phillips
      </p>

      <h1 className="font-serif text-5xl leading-[1.08] tracking-tight text-[#F3F0E9] md:text-7xl">
        A life of
        <br />
        impact.
        <br />
        <span className="italic text-[#B69A70]">
          A voice for
          <br />
          the future.
        </span>
      </h1>

      <p className="mt-8 max-w-md text-base leading-relaxed text-[#B9B9B4] md:text-lg">
        Leadership. Enterprise. People. Purpose.
      </p>

      <a
        href="#journey"
        className="mt-10 inline-flex items-center gap-4 border-b border-[#B69A70] pb-3 text-xs uppercase tracking-[0.2em] text-[#F3F0E9] transition-colors hover:text-[#B69A70]"
      >
        Explore the Journey
        <span aria-hidden="true">↗</span>
      </a>
    </div>

    {/* Hero Portrait */}
    <div className="relative order-2 lg:order-2">
      


      <div className="relative w-full overflow-hidden rounded-2xl">
        <img
          src="/foluso-phillips.png"
          alt="Portrait of Foluso Phillips"
          className="block h-auto w-full"
        />
      </div>

      <p className="mt-5 text-right text-xs uppercase tracking-[0.2em] text-[#B69A70]">
        The Journey Continues — FOP
      </p>
    </div>

  </div>
</section>


      {/* About Section */}
      
<section
  id="about"
  className="relative overflow-hidden bg-[#F3F0E9] px-6 py-24 text-[#17191B] md:px-12 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    <div className="mb-10 flex items-center gap-4">
      <span className="h-px w-12 bg-[#B69A70]" />
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6F5C43]">
        THE STORY
      </p>
    </div>

    <div className="grid gap-12 border-t border-[#17191B]/15 pt-10 md:gap-16 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
      <div>
        <h2 className="font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.08] tracking-tight md:text-7xl">
          A journey
          <br />
          defined by
          <br />
          <span className="italic text-[#6F5C43]">
            purpose.
          </span>
        </h2>

        <p className="mt-8 font-serif text-2xl leading-snug md:mt-10 md:text-3xl">
          A legacy built
          <br />
          through impact.
        </p>
      </div>

      <div className="flex flex-col justify-center lg:border-l lg:border-[#17191B]/15 lg:pl-12">
        <p className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6F5C43]">
          Leadership / Enterprise / People
        </p>

        <p className="font-serif text-2xl leading-relaxed text-[#17191B] md:text-3xl">
          An industrial economist and qualified accountant, Foluso Olajide Phillips began his professional career at Coopers & Lybrand in the United Kingdom.
        </p>

        <p className="mt-6 max-w-lg text-base leading-8 text-[#555555]">
          He went on to serve as Group General Manager, Finance at SCOA Group from 1990 to 1992, before founding Phillips Consulting Limited in 1992. His work has also reached into national economic dialogue as a former Chairman of the Nigeria Economic Summit Group.
        </p>

        <p className="mt-5 max-w-lg text-base leading-8 text-[#555555]">
          Across these roles, the story is not only one of institutions and enterprise, but of the people, capabilities, and ideas that shape them.
        </p>

        <div className="mt-10 flex items-center gap-4 md:mt-12">
          <span className="h-px w-12 bg-[#B69A70]" />
          <span className="text-xs uppercase tracking-[0.2em] text-[#6F5C43]">
            The Journey Continues
          </span>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Journey Section */}
      <section
        id="journey"
        aria-labelledby="journey-heading"
        className="bg-[#17191B] px-6 py-24 text-[#F3F0E9] md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-[#B69A70]" />
            <p className="text-xs uppercase tracking-[0.3em] text-[#B69A70]">
              A career in perspective
            </p>
          </div>

          <div className="mb-14 grid gap-6 border-t border-white/15 pt-10 md:mb-20 md:pt-14 lg:grid-cols-[1fr_0.7fr] lg:items-end lg:gap-16">
            <h2
              id="journey-heading"
              className="max-w-3xl font-serif text-[clamp(2.5rem,8vw,5rem)] leading-[1.08] tracking-tight"
            >
              The making of an
              <br />
              <span className="italic text-[#B69A70]">enduring legacy.</span>
            </h2>
            <p className="max-w-lg text-base leading-8 text-[#B9B9B4] md:text-lg">
              A professional journey shaped by economic thinking, institutional work, and a place in Nigeria&apos;s national economic conversation.
            </p>
          </div>

          <ol className="grid gap-0 md:grid-cols-4 md:gap-6 lg:gap-10">
            <li className="relative border-l border-[#B69A70]/50 pb-10 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#B69A70] md:left-0 md:top-[-5px]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#B69A70]">
                Professional foundation
              </p>
              <h3 className="mt-4 font-serif text-2xl">Economics & accountancy</h3>
              <p className="mt-3 text-sm leading-7 text-[#B9B9B4]">
                An industrial economist and qualified accountant, with professional experience at Coopers & Lybrand in the United Kingdom.
              </p>
            </li>
            <li className="relative border-l border-[#B69A70]/50 pb-10 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#B69A70] md:left-0 md:top-[-5px]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#B69A70]">
                1990–1992
              </p>
              <h3 className="mt-4 font-serif text-2xl">SCOA Group</h3>
              <p className="mt-3 text-sm leading-7 text-[#B9B9B4]">
                Served as Group General Manager, Finance.
              </p>
            </li>
            <li className="relative border-l border-[#B69A70]/50 pb-10 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#B69A70] md:left-0 md:top-[-5px]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#B69A70]">
                1992
              </p>
              <h3 className="mt-4 font-serif text-2xl">Phillips Consulting</h3>
              <p className="mt-3 text-sm leading-7 text-[#B9B9B4]">
                Founded Phillips Consulting Limited.
              </p>
            </li>
            <li className="relative border-l border-[#B69A70]/50 pb-10 pl-7 last:pb-0 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-[#B69A70] md:left-0 md:top-[-5px]" />
              <p className="text-xs uppercase tracking-[0.2em] text-[#B69A70]">
                National economic leadership
              </p>
              <h3 className="mt-4 font-serif text-2xl">Nigeria Economic Summit Group</h3>
              <p className="mt-3 text-sm leading-7 text-[#B9B9B4]">
                Served as a former Chairman of the Nigeria Economic Summit Group.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* The Voice Section */}
      <section
        id="voice"
        aria-labelledby="voice-heading"
        className="bg-[#F3F0E9] px-6 py-24 text-[#17191B] md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center gap-4">
            <span aria-hidden="true" className="h-px w-12 bg-[#B69A70]" />
            <p className="text-xs uppercase tracking-[0.3em] text-[#6F5C43]">
              Public conversations
            </p>
          </div>

          <div className="grid gap-8 border-t border-[#17191B]/15 pt-10 md:pt-14 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16">
            <h2
              id="voice-heading"
              className="max-w-4xl font-serif text-[clamp(2.5rem,7.5vw,5rem)] leading-[1.08] tracking-tight"
            >
              A voice that reaches
              <br />
              beyond the
              <span className="italic text-[#6F5C43]"> boardroom.</span>
            </h2>
            <p className="max-w-xl text-base leading-8 text-[#555555] md:text-lg">
              From boardrooms to public conversations, Foluso Phillips continues to share perspectives shaped by decades of experience. Through interviews, speaking engagements, and conversations about enterprise, leadership, and the future of work, his ideas offer valuable lessons for a new generation navigating a changing world.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-3 md:gap-6">
            <a
              href="https://www.youtube.com/watch?v=iu_cPhXlW38"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-80 flex-col justify-between border border-[#17191B]/15 bg-[#EAE6DD] p-6 transition-colors duration-300 hover:border-[#B69A70] hover:bg-[#E5DFD3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F5C43] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-[#6F5C43]">
                  FATE Foundation · YouTube
                </span>
                <span aria-hidden="true" className="font-serif text-3xl italic text-[#B69A70]">
                  01
                </span>
              </div>
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#6F5C43]">
                  Enterprise & resilience
                </p>
                <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                  Journeys in Entrepreneurship
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#555555]">
                  A conversation on entrepreneurship, resilience, sustainable business, and lessons from experience.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 border-b border-[#B69A70] pb-2 text-xs uppercase tracking-[0.16em] text-[#17191B]">
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <a
              href="https://businessday.ng/life-arts/article/meet-foluso-phillips-the-economist-who-built-a-consulting-institution-and-never-stopped-believing-in-people/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-80 flex-col justify-between border border-[#17191B]/15 bg-[#EAE6DD] p-6 transition-colors duration-300 hover:border-[#B69A70] hover:bg-[#E5DFD3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F5C43] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-[#6F5C43]">
                  BusinessDay · Profile
                </span>
                <span aria-hidden="true" className="font-serif text-3xl italic text-[#B69A70]">
                  02
                </span>
              </div>
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#6F5C43]">
                  People & opportunity
                </p>
                <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                  A belief in people and their potential
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#555555]">
                  A profile that considers young people, skills, changing career opportunities, and developing talent.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 border-b border-[#B69A70] pb-2 text-xs uppercase tracking-[0.16em] text-[#17191B]">
                  Read on BusinessDay <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/posts/niserofficial_throwbackthursday-activity-7417581739746820096-z1Uz"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-80 flex-col justify-between border border-[#17191B]/15 bg-[#EAE6DD] p-6 transition-colors duration-300 hover:border-[#B69A70] hover:bg-[#E5DFD3] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6F5C43] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.18em] text-[#6F5C43]">
                  NISER · LinkedIn
                </span>
                <span aria-hidden="true" className="font-serif text-3xl italic text-[#B69A70]">
                  03
                </span>
              </div>
              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[#6F5C43]">
                  Leadership & culture
                </p>
                <h3 className="font-serif text-2xl leading-tight md:text-3xl">
                  Leadership, culture and a changing workforce
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#555555]">
                  A NISER discussion on organisational culture, behaviour, trust, and adapting how organisations work.
                </p>
                <span className="mt-6 inline-flex items-center gap-3 border-b border-[#B69A70] pb-2 text-xs uppercase tracking-[0.16em] text-[#17191B]">
                  View on LinkedIn <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* The Next Generation Section */}
      <section
        id="next-generation"
        aria-labelledby="next-generation-heading"
        className="relative overflow-hidden bg-[#242320] px-6 py-24 text-[#F3F0E9] md:px-12 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#B69A70]">
              People, possibility, progress
            </p>
            <h2
              id="next-generation-heading"
              className="font-serif text-[clamp(2.8rem,8vw,5.5rem)] leading-[1.05] tracking-tight"
            >
              The next generation
              <br />
              <span className="italic text-[#B69A70]">is the legacy.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <p className="font-serif text-2xl leading-relaxed md:text-3xl">
              What people are able to learn, build, and become is part of what endures.
            </p>
            <p className="mt-6 text-base leading-8 text-[#C7C4BD]">
              Public reporting on Phillips&apos;s perspectives has raised questions about young people&apos;s skills, career opportunities, and a changing world of work. For a generation shaping Africa&apos;s next chapter, those questions are immediate: which capabilities to build, where meaningful opportunity can grow, and how institutions can make room for talent to thrive.
            </p>
            <p className="mt-5 text-base leading-8 text-[#C7C4BD]">
              This is an editorial reflection on the relevance of those themes—not a claim of a formal mentorship programme or a specific personal initiative.
            </p>
            <a
              href="https://businessday.ng/life-arts/article/meet-foluso-phillips-the-economist-who-built-a-consulting-institution-and-never-stopped-believing-in-people/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 border-b border-[#B69A70] pb-2 text-xs uppercase tracking-[0.16em] text-[#F3F0E9] transition-colors hover:text-[#B69A70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B69A70]"
            >
              Read the BusinessDay profile <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
      {/* Perspectives Section */}
      <section
        id="perspectives"
        className="bg-[#17191B] px-6 py-24 text-[#F3F0E9] md:px-12 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

    {/* Section Label */}
    <div className="mb-10 flex items-center gap-5">
      <span className="h-px w-12 bg-[#B69A70]" />
      <p className="text-xs uppercase tracking-[0.3em] text-[#B69A70]">
        02 / Ideas & Perspectives
      </p>
    </div>

    {/* Section Heading */}
    <div className="mb-14 flex flex-col justify-between gap-8 md:mb-16 md:flex-row md:items-end">
      <h2 className="max-w-3xl font-serif text-[clamp(2.4rem,8vw,4.5rem)] leading-[1.08] tracking-tight md:text-7xl">
        Ideas that
        <br />
        <span className="italic text-[#B69A70]">
          inspire progress.
        </span>
      </h2>

      <p className="max-w-xs text-base leading-7 text-[#B9B9B4]">
        Exploring leadership, enterprise, human potential,
        and the future of Africa.
      </p>
    </div>

    {/* Editorial Themes */}
    <div className="grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">

      {/* Theme 01 */}
      <article className="group border-t border-[#B69A70]/40 pt-5 md:pt-6">
        <span className="text-[0.6875rem] tracking-[0.2em] text-[#B69A70]">
          01 / LEADERSHIP
        </span>

        <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-white/5 bg-[#30332F] md:mt-7">
          <Image
            src="/leadership.png"
            alt="Foluso Phillips speaking at a lectern"
            width={1536}
            height={1024}
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#17191B]/10" />
        </div>

        <h3 className="mt-6 font-serif text-2xl leading-tight md:mt-7 md:text-3xl">
          Leadership & Legacy
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-7 text-[#B9B9B4] md:mt-4 md:text-base">
          The responsibilities and choices that help institutions endure and create lasting value.
        </p>
      </article>

      {/* Theme 02 */}
      <article className="group border-t border-[#B69A70]/40 pt-5 md:pt-6">
        <span className="text-[0.6875rem] tracking-[0.2em] text-[#B69A70]">
          02 / ENTERPRISE
        </span>

        <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-white/5 bg-[#39352F] md:mt-7">
          <Image
            src="/enterprise.png"
            alt="Portrait of Foluso Phillips in a suit"
            width={1660}
            height={947}
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#17191B]/10" />
        </div>

        <h3 className="mt-6 font-serif text-2xl leading-tight md:mt-7 md:text-3xl">
          Enterprise & Innovation
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-7 text-[#B9B9B4] md:mt-4 md:text-base">
          The work of building sound organisations and finding room for thoughtful innovation.
        </p>
      </article>

      {/* Theme 03 */}
      <article className="group border-t border-[#B69A70]/40 pt-5 md:pt-6">
        <span className="text-[0.6875rem] tracking-[0.2em] text-[#B69A70]">
          03 / PEOPLE
        </span>

        <div className="relative mt-6 aspect-[4/3] overflow-hidden border border-white/5 bg-[#30352F] md:mt-7">
          <Image
            src="/people.jpeg"
            alt="Foluso Phillips standing with another person at an event"
            width={554}
            height={554}
            sizes="(min-width: 1280px) 384px, (min-width: 768px) 33vw, 100vw"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#17191B]/10" />
        </div>

        <h3 className="mt-6 font-serif text-2xl leading-tight md:mt-7 md:text-3xl">
          People & Potential
        </h3>

        <p className="mt-3 max-w-sm text-sm leading-7 text-[#B9B9B4] md:mt-4 md:text-base">
          The human capabilities that make organisational change and long-term progress possible.
        </p>
      </article>

    </div>
  </div>
</section>
      {/* Contact Section */}
      
<section
  id="contact"
  className="relative overflow-hidden bg-[#F3F0E9] px-6 py-24 text-[#17191B] md:px-12 md:py-32"
>
  <div className="mx-auto max-w-7xl">

    {/* Section Label */}
    <div className="mb-12 flex items-center gap-4 md:mb-14">
      <span className="h-px w-12 bg-[#B69A70]" />
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#6F5C43]">
        03 / Connect
      </p>
    </div>

    {/* Main Statement */}
    <div className="grid gap-8 border-t border-[#17191B]/15 pt-10 md:pt-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
      <h2 className="max-w-4xl font-serif text-[clamp(2.35rem,7vw,5.5rem)] leading-[1.08] tracking-tight md:text-7xl">
        The next chapter
        <br />
        begins with a
        <br />
        <span className="italic text-[#6F5C43]">conversation.</span>
      </h2>

      <p className="max-w-xl text-base leading-8 text-[#555555] md:text-lg lg:pb-2">
        Ideas, collaborations, and conversations that move
        people and institutions forward.
      </p>
    </div>

    {/* Closing Detail */}
    <div className="mt-16 flex flex-col justify-between gap-5 border-t border-[#17191B]/20 pt-6 md:mt-20 md:flex-row md:items-center md:gap-6 md:pt-8">
      <p className="text-xs uppercase tracking-[0.2em] text-[#6F5C43]">
        Foluso Olajide Phillips
      </p>

      <p className="font-serif text-xl italic text-[#17191B]">
        A life of impact. A voice for the future.
      </p>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#17191B] px-6 py-10 text-[#B9B9B4] md:px-12 md:py-12">
        <div className="mx-auto max-w-7xl">
          <p className="pt-6 text-center text-xs leading-6 text-[#999994]">
            Independent website concept for Foluso Phillips. Not an official website.
          </p>
        </div>
      </footer>

    </main>
  );
}
