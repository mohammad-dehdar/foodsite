import Link from "next/link"
import Image from "next/image"

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white  overflow-hidden ">
      <div className="md:w-1/2 p-8 space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center">
        <h2 className="text-4xl font-bold text-green-600">Food<span className="text-yellow-500">Site</span></h2>
        <p className="text-xl text-yellow-500 font-semibold max-sm:text-center">Food Delivery and TakeOut!</p>
        <p className="text-gray-600 max-sm:text-center">
          FoodSite is an online food ordering and delivery platform launched by Uber in 2014.
          Meals are delivered by couriers using cars, scooters, bikes, or on foot.
        </p>
        <Link 
          href="/menu" 
          className="inline-block bg-green-500 text-white px-6 py-2 rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300 max-sm:w-full max-sm:text-center"
        >
          See All
        </Link>
      </div>
      <div className="md:w-1/2 max-sm:hidden">
        <Image 
          src="/images/banner.png" 
          alt="Delicious food spread" 
          width={600} 
          height={400} 
          priority={true} 
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  )
}