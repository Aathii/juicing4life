import { Phone } from 'lucide-react'
import { HOME_HREF, MENU_HREF, STORY_HREF, VISIT_HREF } from '../paths'

interface NavbarProps {
  phoneHref: string
  logoUrl: string
  currentPage?: 'home' | 'story'
}

export default function Navbar({
  phoneHref,
  logoUrl,
  currentPage = 'home',
}: NavbarProps) {
  const links = [
    { label: 'Menu', href: MENU_HREF, active: false },
    { label: 'Story', href: STORY_HREF, active: currentPage === 'story' },
    { label: 'Visit', href: VISIT_HREF, active: false },
  ]

  return (
    <div className="px-5 pt-5 md:px-12 lg:px-16">
      <nav className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-lg px-3 py-3 md:px-4">
        <a href={HOME_HREF} className="flex min-w-0 items-center gap-3">
          <img
            src={logoUrl}
            alt="Juicing4Life logo"
            className="h-12 w-12 rounded-full bg-[#fff7d6] object-cover shadow-sm"
          />
          <span className="truncate text-lg font-bold tracking-normal text-[#263915] md:text-xl">
            Juicing4Life
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-bold transition-colors hover:text-[#263915] ${
                link.active ? 'text-[#b87b0f]' : 'text-[#5b6840]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={phoneHref}
          className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#2f4b1d] px-4 py-2 text-sm font-bold text-white shadow-[0_12px_28px_rgba(47,75,29,0.22)] transition-colors hover:bg-[#416329]"
        >
          <Phone size={16} aria-hidden="true" />
          <span className="hidden sm:inline">Order ahead</span>
        </a>
      </nav>
    </div>
  )
}
