import { MapPin, DollarSign } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

function Card(props) {
  const { id, name, price, details, discount } = props;
  const discountedPrice = discount ? (price * (100 - discount)) / 100 : price;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative w-full h-56">
        <Image 
          src={`/images/${id}.jpeg`} 
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={id <= 3} // Load first 3 images immediately
        />
        {discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
            {discount}% 
          </div>
        )}
      </div>

      <div className="p-5 space-y-4">
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{details[0].Cuisine}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <DollarSign className="w-5 h-5 text-green-600" />
            <span className="text-xl font-bold text-gray-800">
              {discountedPrice.toFixed(2)}
            </span>
            {discount ? (
              <span className="text-sm text-gray-400 line-through mr-2 ml-2">
                {price.toFixed(2)}
              </span>
            ): null }
          </div>
        </div>

        <Link 
          href={`/menu/${id}`}
          className="block w-full text-center bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition duration-300"
        >
          See Details
        </Link>
      </div>
    </div>
  );
}

export default Card