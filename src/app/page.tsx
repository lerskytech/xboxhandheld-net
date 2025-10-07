export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-2">
        {/* Hero Section */}
        <section className="bg-gray-700 p-8 rounded-lg shadow-lg text-center mb-8">
          <h1 className="text-4xl font-bold text-green-400 mb-4">The Xbox Handheld is Coming</h1>
          <p className="text-lg">Get ready for the future of gaming on the go. All the latest news and rumors, right here.</p>
        </section>

        {/* News Grid */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-green-400 pb-2 mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sample Article 1 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Official Announcement Soon?</h3>
                <p className="text-gray-300 mb-4">Sources say Microsoft is gearing up for a major reveal in the coming weeks.</p>
                <a href="#" className="text-green-400 hover:underline">Read More</a>
              </div>
            </div>
            {/* Sample Article 2 */}
            <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Leaked Specs and Performance</h3>
                <p className="text-gray-300 mb-4">A new leak appears to confirm the processor and screen details. Here's what we know.</p>
                <a href="#" className="text-green-400 hover:underline">Read More</a>
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
          <div className="space-y-4">
            {/* Placeholder for affiliate link */}
            <div className="border border-gray-600 p-4 rounded-md text-center">
              <p className="font-semibold">Pre-order Now!</p>
              <p className="text-sm text-gray-400">Link to retailer</p>
            </div>
            {/* Placeholder for ad */}
            <div className="border border-gray-600 p-4 rounded-md text-center h-48 flex items-center justify-center">
              <p className="text-gray-500">Ad Placeholder</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
