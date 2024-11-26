import { CheckCircle, ClipboardList, MapPin, MenuIcon as Restaurant, ShoppingCart, Truck } from 'lucide-react'

export default function Instruction() {
  const steps = [
    { icon: MapPin, text: "Sign in (or create an account) and set your delivery address." },
    { icon: Restaurant, text: "Choose the restaurant you want to order from." },
    { icon: ShoppingCart, text: 'Select your items and tap "Add to Cart".' },
    { icon: ClipboardList, text: 'To place your order, select "View cart" or "Checkout".' },
    { icon: CheckCircle, text: 'Review your order and tap "Place Order".' },
    { icon: Truck, text: "Track your order progress." },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-12">How to Order?</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">Step {index + 1}</h3>
                <p className="text-gray-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}