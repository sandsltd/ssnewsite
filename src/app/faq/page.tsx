import type { Metadata } from 'next';
import Link from 'next/link';
import BookCallButton from '@/components/BookCallButton';

export const metadata: Metadata = {
  title: 'Common Questions | Saunders Simmons Ltd',
  description: 'Answers to common questions about Saunders Simmons, our PaperRoute software brands, bespoke websites and client access.',
  alternates: { canonical: '/faq' },
};

const faqs = [
  { question: 'What does Saunders Simmons do?', answer: 'Saunders Simmons Ltd designs and develops business software and bespoke websites. The PaperRoute family is our flagship software brand, with products for waste operators, skip hire businesses, smaller carriers and waste brokers.' },
  { question: 'Which PaperRoute product is right for my business?', answer: 'PaperRoute supports waste operations, PaperRoute Skips focuses on skip hire, PaperRoute Lite provides digital Waste Transfer Notes for smaller operators, and PaperRoute Broker helps coordinate brokered work. Each product website explains its features and how to get started.' },
  { question: 'Do you still build websites?', answer: 'Yes. We take on bespoke website projects where our approach suits the business and brief. Our starting offer is a bespoke coded five-page website from £2,500 ex VAT.' },
  { question: 'What is included in the website starting price?', answer: 'The starting scope covers an initial brief, bespoke design, development of five coded pages and responsive layouts for mobile, tablet and desktop. We agree the content requirements, functionality and final price before work begins. Additional pages, integrations, hosting and ongoing support are quoted to your requirements.' },
  { question: 'How long does a website project take?', answer: 'The timeline depends on the agreed scope, content and review process. We discuss a realistic schedule with you before starting and make clear what we need from you along the way.' },
  { question: 'Do you work with businesses across the UK?', answer: 'Yes. We are based in Yeovil, Somerset, and work with businesses across the UK. We can discuss your project remotely or arrange a conversation with our team.' },
  { question: 'Where can existing clients log in?', answer: 'The Saunders Simmons client portal remains available through the Client Login link in the navigation. Use your existing login details to access your account.' },
];

export default function FAQPage() {
  return (
    <div className="ss-shell">
      <section className="ss-page-intro">
        <p className="ss-eyebrow">Common questions</p>
        <h1 className="ss-display">A little more detail.</h1>
        <p className="ss-intro-copy">A few answers about our company, the software we build and working with us on a website.</p>
      </section>
      <section className="ss-section ss-faq-list" aria-label="Frequently asked questions">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </section>
      <section className="ss-section ss-two-col">
        <h2 className="ss-section-heading">Let’s talk it through.</h2>
        <div>
          <p>For something specific to your business, a conversation is the best place to start.</p>
          <BookCallButton className="ss-button">Arrange a conversation <span aria-hidden="true">↗</span></BookCallButton>
          <p><Link className="ss-text-link" href="/contact">Contact details <span aria-hidden="true">↗</span></Link></p>
        </div>
      </section>
    </div>
  );
}
