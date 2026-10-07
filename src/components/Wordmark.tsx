type WordmarkProps = { className?: string };

export default function Wordmark({ className = '' }: WordmarkProps) {
  return (
    <span className={`ss-wordmark ${className}`} aria-label="Saunders Simmons">
      Saunders Simmons
    </span>
  );
}
