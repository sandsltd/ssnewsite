import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Selected Website Work | Saunders Simmons Ltd',
  description: 'A selection of websites designed and built by Saunders Simmons Ltd for businesses across a range of industries.',
  alternates: { canonical: 'https://www.saunders-simmons.co.uk/portfolio' },
};

const projects = [
  { name: 'BSR Decorating', sector: 'Painting & decorating', image: '/portfolio/bsrdecorating.png', url: 'https://www.bsrdecorating.co.uk' },
  { name: 'Diamond Vision Cleaning', sector: 'Exterior cleaning', image: '/portfolio/diamondvisionexteriorcleaning.png', url: 'https://www.diamondvisioncleaning.co.uk' },
  { name: 'Lotus Beauty Lounge', sector: 'Beauty & wellbeing', image: '/portfolio/lotusbeautylounge.png', url: 'https://www.lotusbeautylounge.co.uk' },
  { name: 'Chris Letts Plumbing', sector: 'Plumbing', image: '/portfolio/chrislettsplumbing.png', url: 'https://www.chrislettsplumbing.co.uk' },
  { name: 'Bickerstaff Solutions', sector: 'Professional services', image: '/portfolio/bickerstaffsolutions.png', url: 'https://www.bickerstaffsolutions.co.uk' },
  { name: 'Cross Cut Shredding', sector: 'Document destruction', image: '/portfolio/crosscutshreddingltd.png', url: 'https://www.crosscutshredding.co.uk' },
  { name: 'Lodge House B&B Somerset', sector: 'Hospitality', image: '/portfolio/lodgehouseb&b.png', url: 'https://www.lodgehousebandbsomerset.co.uk' },
];

export default function PortfolioPage() {
  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">Selected website work</p>
        <h1 className="ss-display">Built for<br />real businesses.</h1>
        <p className="ss-intro-copy">A selection of websites we have designed and built. Different businesses, each with a distinct identity.</p>
      </section>
      <section className="ss-section ss-two-col" aria-label="Website projects">
        {projects.map((project) => (
          <article key={project.name} className="ss-editorial-card" style={{ paddingBottom: '36px' }}>
            <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name} website (opens in a new tab)`}>
              <div style={{ background: '#f1f1ef', overflow: 'hidden', aspectRatio: '1.5', marginBottom: '28px' }}>
                <Image src={project.image} alt={`${project.name} website`} width={900} height={600} sizes="(max-width: 767px) 100vw, 50vw" style={{ width: '100%', height: '100%', objectFit: 'contain', filter: 'grayscale(1)' }} />
              </div>
              <p className="ss-eyebrow">{project.sector}</p>
              <h2 style={{ fontSize: '1.75rem', lineHeight: 1.3, margin: '12px 0 20px' }}>{project.name}</h2>
              <span className="ss-text-link">Visit website <span aria-hidden="true">↗</span></span>
            </a>
          </article>
        ))}
      </section>
      <section className="ss-section">
        <div className="ss-two-col">
          <div>
            <p className="ss-eyebrow">Bespoke websites</p>
            <h2 className="ss-section-heading">A considered website.<br />Built around you.</h2>
          </div>
          <div>
            <p className="ss-intro-copy">Five bespoke coded pages from £2,500 ex VAT. We take on selected website projects, with the brief and scope agreed from the outset.</p>
            <Link href="/services/web-design" className="ss-text-link">Explore bespoke websites <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
