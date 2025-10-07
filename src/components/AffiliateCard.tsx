import Image from 'next/image';

interface AffiliateCardProps {
  productName: string;
  price: string;
  imageUrl: string;
  specs: string[];
  affiliateUrl: string;
  availability: string; // e.g., 'http://schema.org/InStock'
}

const AffiliateCard: React.FC<AffiliateCardProps> = ({
  productName,
  price,
  imageUrl,
  specs,
  affiliateUrl,
  availability,
}) => {
  const trackingUrl = `${affiliateUrl}?utm_source=xboxhandheldnet&utm_medium=affiliate`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    image: imageUrl,
    description: `Pre-order the ${productName}. Key specs include: ${specs.join(', ')}.`,
    offers: {
      '@type': 'Offer',
      price: price.replace('$', ''),
      priceCurrency: 'USD',
      availability: availability,
      url: trackingUrl,
    },
    brand: {
      '@type': 'Brand',
      name: 'ASUS ROG',
    },
  };

  return (
    <div className="bg-xbox-dark rounded-lg shadow-2xl overflow-hidden border-2 border-transparent hover:border-xbox-green transition-all duration-300 group max-w-sm mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={productName} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{productName}</h3>
      </div>
      <div className="p-6 bg-xbox-dark">
        <ul className="text-base text-gray-300 space-y-2">
          {specs.map((spec, index) => (
            <li key={index} className="flex items-center gap-2"><span className="text-xbox-green">&#10003;</span>{spec}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-6 pt-4 border-t-2 border-gray-800">
          <p className="text-3xl font-bold text-xbox-light-green">{price}</p>
          <a 
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-xbox-green text-white font-bold py-3 px-6 rounded-lg hover:bg-xbox-light-green hover:text-black transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCard;
