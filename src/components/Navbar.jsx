import { useEffect, useState } from 'react'
import { Mark, MenuIcon } from './icons.jsx'

const LINKS = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Coffee', href: 'coffee.html' },
  { label: 'Cocoa', href: 'cocoa.html' },
  { label: 'Chocolate', href: 'chocolate.html' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="nav__inner shell">
      <a className="nav__brand" href="#top" aria-label="COCOBREW home"><Mark /><span>COCOBREW</span></a>
      <nav className="nav__links" aria-label="Primary">{LINKS.map(link => <a className="nav__link" href={link.href} key={link.label}>{link.label}</a>)}</nav>
      <div className="nav__actions"><a className="nav__link nav__login" href="order.html">Cart</a><a className="btn btn--solid btn--sm" href="coffee.html">Shop now</a></div>
      <button className="nav__toggle" onClick={() => setMenuOpen(value => !value)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}><MenuIcon open={menuOpen} /></button>
    </div>
    {menuOpen && <nav className="nav__sheet shell" aria-label="Mobile navigation">{LINKS.map(link => <a href={link.href} key={link.label} onClick={closeMenu}>{link.label}</a>)}<a href="order.html" onClick={closeMenu}>Cart</a><a className="btn btn--solid" href="coffee.html" onClick={closeMenu}>Shop now</a></nav>}
  </header>
}
