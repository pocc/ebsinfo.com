import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.jpg'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/books', label: 'Books' },
  { to: '/contact', label: 'Contact' },
] as const

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-brand-dark">
          <img src={logo} alt="EBSinfo logo" className="h-10 w-10" />
          EBSinfo
        </NavLink>
        <nav className="flex gap-6">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
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
      </div>
    </header>
  )
}
