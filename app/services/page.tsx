import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const items = [
  { title: 'Film Industry Consultancy', text: 'Independent, practical guidance for filmmakers, producers and organisations navigating a project from early thinking to delivery.', slug: 'film-industry-consultancy', image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Location Scouting', text: 'A considered approach to finding environments that serve the story while working for access, permissions and schedule.', slug: 'location-scouting', image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Equipment Rental', text: 'Discuss cameras, lighting and production equipment through a brief-led process that keeps technical decisions connected to the work.', slug: 'equipment-rental', image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Studio Rental', text: 'Explore production spaces for filming, photography, rehearsals and creative development, shaped around the requirements of your team.', slug: 'studio-rental', image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85' },
  { title: 'Marketing & Investment', text: 'Clarify project positioning, audience, campaign objectives and investment-related opportunities within film and media.', slug: 'marketing-investment', image: '/images/css-marketing.png' },
]

export default function Services() {
  return <main className="site-shell"><SiteHeader /><section className="inner-page services-page"><div className="container">
    <p className="section-kicker">CSS / Services</p><h1>Support for the work<br /><em>behind the work.</em></h1>
    <div className="services-intro"><p className="page-lede">CSS brings practical production support and strategic thinking together for film, media and creative projects. Our services help you ask better questions, understand your options and move forward with clarity.</p><p className="services-note">No two briefs are the same. Begin with the service closest to your current need, or contact us with a broader question and we will help shape the conversation.</p></div>
    <div className="inner-service-list">{items.map((item, index) => <Link href={`/services/${item.slug}`} className="inner-service" key={item.slug}><span>0{index + 1}</span><img src={item.image} alt={`${item.title} — illustrative production image`} /><div><h2>{item.title}</h2><p>{item.text}</p><span className="service-link-label">Explore service <ArrowUpRight data-icon="inline-end" /></span></div><ArrowUpRight className="service-arrow" aria-hidden="true" /></Link>)}</div>
    <div className="services-bottom"><div><p className="section-kicker">A useful starting point</p><h2>Have a project in mind?</h2></div><p>Share what you know so far — the format, stage, location, timescale or commercial question. A clear first conversation can make the next decision easier.</p><Link className="button button-amber" href="/contact">Discuss your project <ArrowUpRight data-icon="inline-end" /></Link></div>
  </div></section><SiteFooter /></main>
}

export const dynamic = 'force-static'
export const metadata = { title: 'Services | CSS', description: 'Film and media consultancy, location scouting, equipment rental, studio rental, marketing and investment support from CSS.' }
