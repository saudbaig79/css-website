import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'

const gallery = [
  { title: 'Production environments', category: 'Illustrative visual reference', image: 'https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1600&q=85', alt: 'Lighting equipment in a film studio' },
  { title: 'Camera & craft', category: 'Illustrative visual reference', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=85', alt: 'Professional cinema camera' },
  { title: 'Locations with character', category: 'Illustrative visual reference', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85', alt: 'Cinematic landscape suitable for filming' },
  { title: 'The work behind the frame', category: 'Illustrative visual reference', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85', alt: 'Film set with a camera and crew' },
]

export const metadata = { title: 'Portfolio' }

export default function PortfolioPage() {
  return <main className="site-shell">
    <SiteHeader />
    <section className="inner-page portfolio-page">
      <div className="container">
        <p className="section-kicker">Visual reference / 01</p>
        <h1>Production in<br /><em>perspective.</em></h1>
        <p className="page-lede">A visual reference library for the environments, equipment and creative conversations that shape film and media work. The imagery on this page is illustrative; project case studies will be added as approved material becomes available.</p>
        <div className="portfolio-grid">
          {gallery.map((item, index) => <figure className={`portfolio-card ${index === 0 || index === 3 ? 'portfolio-card-wide' : ''}`} key={item.title}>
            <img src={item.image} alt={item.alt} />
            <figcaption><span>{item.category}</span><strong>{item.title}</strong></figcaption>
          </figure>)}
        </div>
        <div className="portfolio-cta"><div><p className="section-kicker">Have a project in mind?</p><h2>Let&apos;s discuss<br /><em>what comes next.</em></h2></div><Link className="button button-dark" href="/contact">Make an enquiry <ArrowUpRight size={16} /></Link></div>
      </div>
    </section>
  </main>
}

export const dynamic = 'force-static'
