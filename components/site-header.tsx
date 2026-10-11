'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container header-inner"><Link href="/" className="brand" aria-label="CSS home"><span className="brand-mark">C</span><span>SS</span></Link><nav className={open ? 'nav mobile-open' : 'nav'} aria-label="Primary navigation"><Link href="/services" onClick={() => setOpen(false)}>Services</Link><Link href="/about" onClick={() => setOpen(false)}>About</Link><Link href="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link><Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Make an enquiry <span>↗</span></Link></nav><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>
}
