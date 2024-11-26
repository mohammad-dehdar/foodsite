import Image from "next/image";
import Location from "../icons/Location";
import Dollar from "../icons/Dollar";

function DetailsPage(props) {
  const { id, name, price, discount, introduction, details, ingredients, recipe } = props;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Details</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={`/images/${id}.jpeg`}
              alt={name}
              width={400}
              height={300}
              className="h-full w-full object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <Location className="w-5 h-5 mr-2" />
              <span>{details[0].Cuisine}</span>
            </div>
            <div className="flex items-center text-gray-800 font-bold mb-2">
              <Dollar className="w-5 h-5 mr-2" />
              <span>{discount ? (price * (100 - discount) / 100).toFixed(2) : price}$</span>
            </div>
            {discount ? (
              <span className="inline-block bg-red-500 text-white px-2 py-1 rounded-full text-sm animate-pulse">
                {discount}% OFF
              </span>
            ): null}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-600 leading-relaxed">{introduction}</p>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Details</h4>
        <ul className="bg-gray-100 rounded-lg p-6">
          {details.map((detail, index) => (
            <li key={index} className="flex justify-between py-2 border-b border-gray-300 last:border-b-0">
              <p className="font-medium text-gray-700">{Object.keys(detail)[0]}</p>
              <p className="text-gray-600">{Object.values(detail)[0]}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Ingredients</h4>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {ingredients.map((item, index) => (
            <li key={index} className="bg-green-100 rounded-lg p-3">
              <p className="text-green-800">{item}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-4">Recipe</h4>
        {recipe.map((item, index) => (
          <div
            key={index}
            className={`flex items-start border border-green-500 p-4 rounded-lg mb-4 ${
              index % 2 ? "bg-green-50" : "bg-green-100"
            }`}
          >
            <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-500 text-white rounded-full mr-4">
              {index + 1}
            </span>
            <p className="text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailsPage;

