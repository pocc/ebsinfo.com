import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/books', label: 'Books' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-brand-dark"
        >
          <img src={logo} alt="EBSinfo logo" className="h-10 w-10" />
          EBSinfo
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden gap-6 sm:flex">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `border-b-2 pb-0.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'border-brand-green text-brand-green'
                    : 'border-transparent text-gray-600 hover:text-brand-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden p-2 text-gray-600 hover:text-brand-dark"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav className="border-t border-gray-200 bg-white px-6 pb-4 sm:hidden">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-brand-green'
                    : 'text-gray-600 hover:text-brand-dark'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
