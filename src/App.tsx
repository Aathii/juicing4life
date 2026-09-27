import {
  ArrowLeft,
  BookOpen,
  Clock,
  Heart,
  Instagram,
  Leaf,
  MapPin,
  Phone,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'
import { useEffect, type ReactNode } from 'react'
import Navbar from './components/Navbar'
import FadeIn from './components/FadeIn'
import AnimatedHeading from './components/AnimatedHeading'
import Reveal from './components/Reveal'
import WordReveal from './components/WordReveal'
import { BASE, HOME_HREF, MENU_HREF, STORY_HREF, VISIT_HREF } from './paths'

const PHONE = '647-673-2018'
const PHONE_HREF = 'tel:+16476732018'
const INSTAGRAM_URL = 'https://www.instagram.com/juicing4life_/'
const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=1921+Eglinton+Avenue+East+Toronto+ON+M1L+2L6'
const VIDEO_URL = `${BASE}1781194513269_AQPliBqHun1Kkexn2qAnDkkEL_x9vtAT6LmHLWcqR6xWyvI7FVh8shC.mp4`
const LOGO_URL = `${BASE}juicing4life-logo.png`

const images = {
  cane:
    'https://images.squarespace-cdn.com/content/v1/63d0da0b7a1eed0108662c5a/37f3aa07-f07b-4c50-8045-72d22227453e/Screenshot+2023-05-20+10.51.13+AM.png?format=1500w',
  family:
    'https://images.squarespace-cdn.com/content/v1/63d0da0b7a1eed0108662c5a/60cd1eca-a5e9-4b0f-b3f0-8a085591dcc3/IMG_5504.jpg?format=1500w',
  team:
    'https://images.squarespace-cdn.com/content/v1/63d0da0b7a1eed0108662c5a/472047f9-6919-4046-b4c2-f14d66743503/IMG_5045.jpg?format=1500w',
  grandson:
    'https://images.squarespace-cdn.com/content/v1/63d0da0b7a1eed0108662c5a/8ef5801f-6473-4777-bc85-d5e3d2457c0c/IMG_3069+%281%29.jpg?format=1500w',
}

const menuItems = [
  {
    name: 'Cane Juice',
    price: 'Small $5 / Medium $6 / Large $8',
    detail:
      'All-natural sugar cane juice pressed fresh with no added sugar. 1L bottles are available for $15.',
    accent: 'bg-[#eef8cf]',
  },
  {
    name: 'Coconut Water',
    price: '$5 each',
    detail: 'Cold coconut water, naturally rich in potassium and vitamin C.',
    accent: 'bg-[#fff3bf]',
  },
  {
    name: 'Carrot and Beet',
    price: 'Small $6 / Medium $7',
    detail:
      'Daily-prepped carrot and beet juice with a bright, earthy finish. 1L bottles are $18.',
    accent: 'bg-[#ffe1ce]',
  },
  {
    name: 'Fruit Shakes',
    price: 'Small $6 / Medium $7 / Large $8',
    detail:
      'Pick any two fruits blended with cane juice. Mango, strawberry, banana, pineapple, and soursop are available.',
    accent: 'bg-[#f7e4ff]',
  },
]

const addOns = [
  'Lime or lemon',
  'Ginger',
  'Black salt',
  'Condensed milk',
  'Protein powder +$1',
]

const storySteps = [
  {
    title: 'The Beginning',
    name: 'Tyler "The Coconut Man"',
    image: images.family,
    copy:
      'Tyler started Juicing4Life in 2000 with a simple dream: bring the taste, care, and craft of Georgetown, Guyana to Toronto. Weekend after weekend, he built the booth around fresh cane, coconuts, and a standard of hospitality that regulars still remember.',
  },
  {
    title: 'The Middle',
    name: 'Sabrina "The Daughter"',
    image: images.team,
    copy:
      'Sabrina helped shape the operation from the beginning, keeping the booth moving while raising a family and supporting the work behind the scenes. Her role turned Juicing4Life from one person standing at the cane press into a family rhythm.',
  },
  {
    title: 'Never the End',
    name: 'Andrew "The Grandson"',
    image: images.grandson,
    copy:
      'Andrew grew up at the market, learning the business through weekend shifts, customer conversations, and cane-shaving competitions with cousins. Now he carries the same values forward: treat people right, make it fresh, and keep the family story alive.',
  },
]

function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'dark'
}) {
  const base =
    'premium-button inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-[#f5b72e] focus:ring-offset-2'
  const styles = {
    primary:
      'bg-[#f7b733] text-[#263915] shadow-[0_16px_36px_rgba(135,92,12,0.22)] hover:bg-[#ffc95b] focus:ring-offset-[#fff8e7]',
    secondary:
      'border border-[#d9c59a] bg-white/82 text-[#31431b] shadow-[0_12px_30px_rgba(91,68,24,0.12)] hover:bg-white focus:ring-offset-[#fff8e7]',
    dark:
      'bg-[#2f4b1d] text-white shadow-[0_16px_36px_rgba(30,54,17,0.25)] hover:bg-[#3f6127] focus:ring-offset-[#fff8e7]',
  }

  return (
    <a className={`${base} ${styles[variant]}`} href={href}>
      {children}
    </a>
  )
}

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string
  title: string
  copy?: string
}) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6a8f28]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#263915] md:text-5xl">
        <WordReveal text={title} />
      </h2>
      {copy ? (
        <p className="mt-4 text-base leading-7 text-[#6e644e]">{copy}</p>
      ) : null}
    </Reveal>
  )
}

function HomePage() {
  // The page renders after the browser has already looked for #menu or #visit,
  // so links to those sections from the story page need the jump done here.
  useEffect(() => {
    const id = window.location.hash.slice(1)
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])

  return (
    <div className="min-h-screen bg-[#fff8e7] text-[#263915]">
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#f8e7b7]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />

        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar currentPage="home" logoUrl={LOGO_URL} phoneHref={PHONE_HREF} />

          <div className="flex flex-1 items-end px-5 pb-10 md:px-12 lg:px-16 lg:pb-14">
            <div className="mx-auto grid w-full max-w-7xl gap-6 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
              <FadeIn delay={120} duration={700}>
                <div className="hero-panel max-w-3xl rounded-lg p-5 md:p-7 lg:p-8">
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <img
                      src={LOGO_URL}
                      alt="Juicing4Life logo"
                      className="h-16 w-16 rounded-full bg-[#fff7d6] object-cover shadow-md"
                    />
                    <div className="brand-pill inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-bold uppercase tracking-[0.16em]">
                      <Leaf size={16} aria-hidden="true" />
                      Fresh cane. Cold coconuts. Weekend energy.
                    </div>
                  </div>

                  <AnimatedHeading
                    text="Juicing4Life"
                    className="text-5xl font-semibold leading-[0.95] text-[#263915] md:text-7xl lg:text-8xl"
                  />

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d523c] md:text-xl">
                    Sugar cane juice, coconut water, fruit shakes, and family
                    tradition made fresh at 1921 Eglinton Avenue East.
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <ButtonLink href={PHONE_HREF}>
                      <Phone size={18} aria-hidden="true" />
                      Call to order
                    </ButtonLink>
                    <ButtonLink href="#menu" variant="secondary">
                      <ShoppingBag size={18} aria-hidden="true" />
                      View menu
                    </ButtonLink>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={900} duration={900}>
                <div className="stacked-info rounded-lg p-4">
                  <div className="grid gap-3">
                    <InfoTile
                      icon={<Clock size={21} />}
                      label="Hours"
                      title="10am - 6pm"
                      detail="Saturday and Sunday"
                    />
                    <InfoTile
                      icon={<MapPin size={21} />}
                      label="Location"
                      title="Scarborough, ON"
                      detail="1921 Eglinton Avenue East"
                    />
                    <InfoTile
                      icon={<Heart size={21} />}
                      label="Made fresh"
                      title="Cane, coconuts, shakes"
                      detail="Family-owned since 2000"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <main>
        <section id="menu" className="px-5 py-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Menu"
              title="Pressed, poured, and blended fresh."
              copy="The favourites from Juicing4Life, organized so families can scan quickly and order ahead without friction."
            />

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {menuItems.map((item, index) => (
                <Reveal key={item.name} className="h-full" delay={index * 90}>
                  <article className="menu-card h-full rounded-lg p-5">
                    <div className={`h-2 w-16 rounded-full ${item.accent}`} />
                    <h3 className="mt-5 text-2xl font-semibold text-[#263915]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm font-bold text-[#b97a14]">
                      {item.price}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#6e644e]">
                      {item.detail}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
              <Reveal className="image-frame overflow-hidden rounded-lg">
                <img
                  src={images.cane}
                  alt="Juicing4Life sugar cane menu visual"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </Reveal>

              <div className="grid gap-5 sm:grid-cols-2">
                <Reveal className="h-full" delay={120}>
                  <div className="highlight-card h-full rounded-lg p-6">
                    <Sparkles className="text-[#b87b0f]" size={28} />
                    <h3 className="mt-5 text-2xl font-semibold">
                      The Mighty Protein
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[#6e644e]">
                      A fruit, nut, and isolate shake built for a fuller boost
                      before the day gets moving.
                    </p>
                  </div>
                </Reveal>
                <Reveal className="h-full" delay={210}>
                  <div className="menu-card h-full rounded-lg p-6">
                    <h3 className="text-2xl font-semibold">Add-ons</h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {addOns.map((addOn, index) => (
                        <span
                          key={addOn}
                          className="chip rounded-lg bg-[#f3f8d8] px-3 py-2 text-sm font-medium text-[#3c541e]"
                          style={{ transitionDelay: `${index * 35}ms` }}
                        >
                          {addOn}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
                <Reveal className="sm:col-span-2" delay={300}>
                  <div className="order-strip rounded-lg p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold">
                          Call-ahead takeout
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-[#6e644e]">
                          Short on time? Call the booth and order cane,
                          coconuts, or shakes before you arrive.
                        </p>
                      </div>
                      <ButtonLink href={PHONE_HREF} variant="dark">
                        <Phone size={18} aria-hidden="true" />
                        {PHONE}
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        <section className="story-teaser px-5 py-20 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal className="grid grid-cols-2 gap-4">
              <img
                src={images.family}
                alt="Juicing4Life family at the booth"
                className="h-72 w-full rounded-lg object-cover shadow-lg md:h-96"
              />
              <img
                src={images.team}
                alt="Juicing4Life team member preparing fresh juice"
                className="mt-10 h-72 w-full rounded-lg object-cover shadow-lg md:h-96"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6a8f28]">
                Three generations
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[#263915] md:text-5xl">
                <WordReveal text="The heart of the brand gets its own page." />
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#6e644e]">
                Juicing4Life is not just a menu. It is Tyler, Sabrina, Andrew,
                and a weekend family rhythm that started with roots in
                Georgetown, Guyana.
              </p>
              <div className="mt-7">
                <ButtonLink href={STORY_HREF} variant="dark">
                  <BookOpen size={18} aria-hidden="true" />
                  Read the story
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>

        <VisitSection />
      </main>

      <SiteFooter />
    </div>
  )
}

function StoryPage() {
  return (
    <div className="min-h-screen bg-[#fff8e7] text-[#263915]">
      <Navbar currentPage="story" logoUrl={LOGO_URL} phoneHref={PHONE_HREF} />

      <main>
        <section className="px-5 pb-12 pt-14 md:px-12 md:pt-20 lg:px-16">
          <div className="mx-auto max-w-7xl">
            <a
              href={HOME_HREF}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#6a8f28] transition-colors hover:text-[#3c541e]"
            >
              <ArrowLeft size={18} aria-hidden="true" />
              Back to home
            </a>

            <Reveal className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
              <div>
                <div className="flex items-center gap-4">
                  <img
                    src={LOGO_URL}
                    alt="Juicing4Life logo"
                    className="h-20 w-20 rounded-full bg-[#fff7d6] object-cover shadow-md"
                  />
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6a8f28]">
                    Who are we
                  </p>
                </div>
                <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[0.96] text-[#263915] md:text-7xl">
                  <WordReveal text="Three generations down, and still made fresh." />
                </h1>
              </div>
              <p className="max-w-2xl text-lg leading-8 text-[#6e644e]">
                The Juicing4Life story is the reason the menu feels personal:
                a family booth, a Guyanese beginning, and a promise to keep
                serving cane, coconuts, and shakes with care.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="px-5 pb-20 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {storySteps.map((step, index) => (
              <Reveal key={step.title} className="h-full" delay={index * 120}>
                <article className="story-card h-full rounded-lg p-4">
                  <img
                    src={step.image}
                    alt={`${step.name} story image`}
                    className="h-72 w-full rounded-lg object-cover"
                  />
                  <div className="p-2 pt-5">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#6a8f28]">
                      {step.title}
                    </p>
                    <h2 className="mt-2 text-2xl font-semibold text-[#263915]">
                      {step.name}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-[#6e644e]">
                      {step.copy}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="story-teaser px-5 py-20 md:px-12 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <Reveal className="image-frame overflow-hidden rounded-lg">
              <img
                src={images.grandson}
                alt="Juicing4Life team member smiling at the market"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6a8f28]">
                What carries forward
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[#263915] md:text-5xl">
                <WordReveal text="A weekend stop that feels like being remembered." />
              </h2>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={MENU_HREF} variant="dark">
                  <ShoppingBag size={18} aria-hidden="true" />
                  View menu
                </ButtonLink>
                <ButtonLink href={PHONE_HREF} variant="secondary">
                  <Phone size={18} aria-hidden="true" />
                  Call {PHONE}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

function InfoTile({
  icon,
  label,
  title,
  detail,
}: {
  icon: ReactNode
  label: string
  title: string
  detail: string
}) {
  return (
    <div className="rounded-lg bg-white/88 p-4 shadow-[0_12px_30px_rgba(83,61,18,0.16)] ring-1 ring-[#e9d9ad]">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-[#edf7cd] p-2 text-[#6a8f28]">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-[#887b5f]">{label}</p>
          <p className="text-lg font-semibold text-[#263915]">{title}</p>
          <p className="text-sm text-[#6e644e]">{detail}</p>
        </div>
      </div>
    </div>
  )
}

function VisitSection() {
  return (
    <section id="visit" className="px-5 py-20 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-stretch">
        <Reveal className="visit-card rounded-lg p-6 md:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#6a8f28]">
            Visit
          </p>
          <h2 className="mt-3 text-4xl font-semibold leading-tight text-[#263915] md:text-5xl">
            <WordReveal text="Find Juicing4Life on weekends in Scarborough." />
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={MAPS_URL}
              className="rounded-lg bg-white/78 p-5 shadow-sm ring-1 ring-[#e5d2a5] transition-colors hover:bg-white"
            >
              <MapPin className="text-[#6a8f28]" size={24} />
              <p className="mt-4 text-lg font-semibold">
                1921 Eglinton Avenue East
              </p>
              <p className="mt-1 text-sm text-[#6e644e]">
                Toronto, ON M1L 2L6
              </p>
            </a>
            <div className="rounded-lg bg-white/78 p-5 shadow-sm ring-1 ring-[#e5d2a5]">
              <Clock className="text-[#6a8f28]" size={24} />
              <p className="mt-4 text-lg font-semibold">10am - 6pm</p>
              <p className="mt-1 text-sm text-[#6e644e]">Weekends only</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={PHONE_HREF} variant="dark">
              <Phone size={18} aria-hidden="true" />
              Call {PHONE}
            </ButtonLink>
            <ButtonLink href={INSTAGRAM_URL} variant="secondary">
              <Instagram size={18} aria-hidden="true" />
              Instagram
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal className="image-frame overflow-hidden rounded-lg" delay={120}>
          <img
            src={images.grandson}
            alt="Juicing4Life team member smiling at the market"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </Reveal>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#ead8aa] bg-[#fff3cf] px-5 py-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6e644e] md:flex-row md:items-center md:justify-between">
        <a href={HOME_HREF} className="flex items-center gap-3 font-semibold text-[#263915]">
          <img
            src={LOGO_URL}
            alt="Juicing4Life logo"
            className="h-10 w-10 rounded-full object-cover"
          />
          Juicing4Life
        </a>
        <div className="flex flex-wrap gap-4">
          <a href={MENU_HREF} className="hover:text-[#263915]">
            Menu
          </a>
          <a href={STORY_HREF} className="hover:text-[#263915]">
            Story
          </a>
          <a href={VISIT_HREF} className="hover:text-[#263915]">
            Visit
          </a>
          <a href={PHONE_HREF} className="hover:text-[#263915]">
            {PHONE}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '')

  if (pathname === `${BASE}story`) {
    return <StoryPage />
  }

  return <HomePage />
}
