import { Metadata } from 'next';
import AffiliateCard from '@/components/AffiliateCard';

export const metadata: Metadata = {
  title: '10 Must-Have Accessories for Your ROG Xbox Ally in 2025',
  description: 'Boost your gaming experience with the best accessories for the ROG Xbox Ally. We review cases, screen protectors, power banks, docks, and more.',
};

export default function AccessoriesPage() {
  return (
    <div className="prose prose-invert mx-auto py-8 max-w-4xl px-4">
      <h1>10 Must-Have Accessories for Your ROG Xbox Ally in 2025</h1>
      <p className="text-lg">So, you&apos;ve got your hands on the ROG Xbox Ally. Now it&apos;s time to deck it out. The right accessories can protect your investment, extend your playtime, and make your gaming experience even more immersive. Here are our top 10 must-have accessories for every Xbox Ally owner.</p>

      <h2>1. Spigen Rugged Armor Pro Case</h2>
      <p>A solid case isn&apos;t just recommended; it&apos;s essential. The Spigen Rugged Armor Pro offers a perfect blend of protection and portability, with a shock-absorbent shell and a built-in kickstand.</p>
      <AffiliateCard
        productName="Spigen Rugged Armor Pro Case"
        price="$49.99"
        imageUrl="https://placehold.co/600x400/1a202c/718096?text=Spigen+Case"
        specs={['Shock-absorbent TPU', 'Carbon fiber accents', 'Built-in kickstand', 'Precise cutouts']}
        affiliateUrl="[AMAZON_AFFILIATE_LINK]"
        availability="http://schema.org/InStock"
      />

      <h2 className="mt-8">2. Anker 737 Power Bank (PowerCore 24K)</h2>
      <p>The Ally&apos;s biggest weakness is its battery life under load. The Anker 737 is the perfect solution, offering a massive 24,000mAh capacity and 140W output, enough to charge your Ally at full speed while you play.</p>
      <AffiliateCard
        productName="Anker 737 Power Bank"
        price="$129.99"
        imageUrl="https://placehold.co/600x400/1a202c/718096?text=Anker+Power+Bank"
        specs={['24,000mAh Capacity', '140W Max Output', 'Smart Digital Display', '2x USB-C, 1x USB-A']}
        affiliateUrl="[AMAZON_AFFILIATE_LINK]"
        availability="http://schema.org/InStock"
      />

      <h2 className="mt-8">3. amFilm Screen Protector</h2>
      <p>That beautiful 1080p screen deserves protection. The amFilm tempered glass screen protector is easy to install, ultra-clear, and tough enough to resist scratches from keys, coins, and everyday hazards.</p>
      <AffiliateCard
        productName="amFilm Screen Protector (2-Pack)"
        price="$12.99"
        imageUrl="https://placehold.co/600x400/1a202c/718096?text=Screen+Protector"
        specs={['9H Hardness Tempered Glass', 'Ultra-clear transparency', 'Oleophobic coating', 'Easy installation kit']}
        affiliateUrl="[AMAZON_AFFILIATE_LINK]"
        availability="http://schema.org/InStock"
      />

      {/* Add more accessories as needed */}
      <p className="mt-12">This is just the start! We&apos;ll be updating this list as more great accessories are released. Got a favorite we missed? Let us know in the comments!</p>
    </div>
  );
}
