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
    <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600 max-w-sm mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={productName} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{productName}</h3>
        <ul className="text-sm text-gray-300 mt-2 list-disc list-inside space-y-1">
          {specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
        <div className="flex justify-between items-center mt-4">
          <p className="text-xl font-bold text-green-400">{price}</p>
          <a 
            href={trackingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition-colors"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCard;
