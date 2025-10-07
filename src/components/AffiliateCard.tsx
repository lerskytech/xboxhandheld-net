import Image from 'next/image';

interface AffiliateCardProps {
  productName: string;
  imageUrl: string;
  price: string;
  retailer: string;
  affiliateLink: string;
}

const AffiliateCard: React.FC<AffiliateCardProps> = ({ productName, imageUrl, price, retailer, affiliateLink }) => {
  const trackingUrl = `${affiliateLink}?utm_source=xboxhandheldnet`;

  return (
    <div className="bg-gray-700 rounded-lg shadow-lg overflow-hidden border border-gray-600">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={productName} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{productName}</h3>
        <p className="text-gray-300 mt-1">{retailer}</p>
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
