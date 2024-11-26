import { Clock } from 'lucide-react'
import Choice from "../icons/Choice"
import Fast from "../icons/Fast"
import Food from "../icons/Food"

export default function Attributes() {
  const attributes = [
    { Icon: Fast, text: "Fast Delivery" },
    { Icon: Food, text: "Best Restaurants" },
    { Icon: Choice, text: "Your Choice" },
    { Icon: Clock, text: "24-7" },
  ]

  return (
    <section className="py-16 max-sm:px-8 bg-white mt-4">
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-green-700 mb-12">Why Choose Us?</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {attributes.map(({ Icon, text }, index) => (
            <div key={index}  className="flex flex-col items-center  bg-white py-6 rounded-lg shadow-md" >
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-green-200">
                <Icon className="w-10 h-10 text-green-600" />
              </div>
              <p className="text-lg w-full  text-center font-semibold text-gray-800 max-sm:text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}