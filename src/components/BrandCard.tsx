import Image from 'next/image';
import type { PaperRouteProduct } from '@/lib/brands';

type BrandCardProps = {
  product: PaperRouteProduct;
};

export default function BrandCard({ product }: BrandCardProps) {
  return (
    <article className={`ss-brand-card ss-brand-${product.theme}`}>
      <div className="ss-brand-card-copy">
        <Image
          className="ss-brand-logo"
          src={product.logo}
          alt={product.name}
          width={1079}
          height={236}
        />
        <p className="ss-eyebrow">{product.audience}</p>
        <h3 className="ss-brand-title">{product.headline}</h3>
        <p>{product.description}</p>
        <ul className="ss-brand-features">
          {product.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
        <a
          className="ss-brand-link"
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Explore ${product.name} (opens in a new tab)`}
        >
          Explore {product.name} <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
