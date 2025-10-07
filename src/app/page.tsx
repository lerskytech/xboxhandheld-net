import AffiliateCard from '@/components/AffiliateCard';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Hero Section */}
        <section className="relative bg-cover bg-center p-12 rounded-lg shadow-lg text-center mb-8 h-80 flex flex-col justify-center items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1593305842137-2d4a1a459357?q=80&w=2670&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
          <div className="relative z-10">
          <h1 className="text-4xl font-bold text-green-400 mb-4">The Xbox Handheld is Coming</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">Get ready for the future of gaming on the go. All the latest news and rumors, right here.</p>
            <a href="#latest-news" className="mt-6 inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-500 transition-colors shadow-md hover:shadow-lg">Read the Latest</a>
          </div>
        </section>

        {/* News Grid */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-green-400 pb-2 mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sample Article 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Official Announcement Soon?</h3>
                <p className="text-gray-300 mb-4">Sources say Microsoft is gearing up for a major reveal in the coming weeks.</p>
                <a href="#" className="text-green-400 hover:underline font-semibold">Read More &rarr;</a>
              </div>
            </div>
            {/* Sample Article 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Leaked Specs and Performance</h3>
                <p className="text-gray-300 mb-4">A new leak appears to confirm the processor and screen details. Here&apos;s what we know.</p>
                <a href="#" className="text-green-400 hover:underline font-semibold">Read More &rarr;</a>
              </div>
            </div>
            {/* Add more articles as needed */}
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="lg:col-span-1">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Affiliate Links</h3>
          <div className="space-y-6">
            <AffiliateCard
              productName="ROG Xbox Ally X"
              price="$799"
              imageUrl="https://images.unsplash.com/photo-1622832932453-52def0535889?q=80&w=2080&auto=format&fit=crop"
              specs={[
                'AMD Ryzen Z2 Processor',
                '7-inch 1080p 120Hz Display',
                '1TB SSD Storage',
                'Up to 3hr Battery Life',
              ]}
              affiliateUrl="[AMAZON_AFFILIATE_LINK]"
              availability="http://schema.org/PreOrder"
            />
            <AffiliateCard
              productName="ROG Xbox Ally (Standard)"
              price="$599"
              imageUrl="https://images.unsplash.com/photo-1621222560933-5233c7ba89d3?q=80&w=2574&auto=format&fit=crop"
              specs={[
                'AMD Ryzen Z1 Processor',
                '7-inch 1080p 120Hz Display',
                '512GB SSD Storage',
                'Up to 2hr Battery Life',
              ]}
              affiliateUrl="[BESTBUY_AFFILIATE_LINK]"
              availability="http://schema.org/PreOrder"
            />
          </div>
        </div>
      </aside>
    </div>
  );
}
