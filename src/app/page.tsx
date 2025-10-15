import AffiliateCard from '@/components/AffiliateCard';

export default function Home() {
  return (
    <>
      {/* Main Content */}
      <div className="p-8">
        {/* Hero Section */}
        <section 
          className="bg-cover bg-center p-12 rounded-lg shadow-lg text-center mb-8 flex flex-col justify-center items-center h-80" 
          style={{ backgroundImage: "url('/images/Banner.jpg')" }}
        >
          <div className="bg-black bg-opacity-60 p-10 rounded-lg">
            <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in-down">The Xbox Handheld is Coming</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Your ultimate source for news, reviews, and deals on the future of portable Xbox gaming.</p>
            <a href="#latest-news" className="mt-8 inline-block bg-xbox-green text-white font-bold py-4 px-12 rounded-full hover:bg-xbox-light-green hover:text-black transition-all duration-300 shadow-2xl transform hover:scale-110 animate-fade-in-up">Explore News</a>
          </div>
        </section>

        {/* News Grid */}
        <section>
          <h2 id="latest-news" className="text-4xl font-bold border-b-4 border-xbox-green pb-3 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sample Article 1 */}
            <div className="bg-xbox-dark rounded-lg shadow-2xl overflow-hidden transition-all duration-300 group border-2 border-transparent hover:border-xbox-green">
              <div className="relative h-40 bg-gray-700">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center p-4">Official Announcement Soon?</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">Sources say Microsoft is gearing up for a major reveal in the coming weeks.</p>
                <a href="#" className="text-xbox-light-green font-bold group-hover:text-white transition-colors">Read More &rarr;</a>
              </div>
            </div>
            {/* Sample Article 2 */}
            <div className="bg-xbox-dark rounded-lg shadow-2xl overflow-hidden transition-all duration-300 group border-2 border-transparent hover:border-xbox-green">
              <div className="relative h-40 bg-gray-700">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white text-center p-4">Leaked Specs and Performance</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">A new leak appears to confirm the processor and screen details. Here&apos;s what we know.</p>
                <a href="#" className="text-xbox-light-green font-bold group-hover:text-white transition-colors">Read More &rarr;</a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Sidebar */}
      <aside className="p-8">
        <div className="bg-xbox-dark p-6 rounded-lg shadow-lg border border-gray-800 sticky top-8">
          <h3 className="text-3xl font-bold mb-6 text-white">Top Deals</h3>
          <div className="space-y-8">
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
    </>
  );
}
