import Link from "next/link"
import { Menu, Grid, Tag } from 'lucide-react'

export default function Guide() {
  const guideItems = [
    { href: "/menu", text: "Menu", Icon: Menu },
    { href: "/categories", text: "Categories", Icon: Grid },
    { href: "/", text: "Discount", Icon: Tag },
  ]

  return (
    <section className="container px-4 pb-16 mt-8">
      <ul className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {guideItems.map(({ href, text, Icon }) => (
          <li key={href}>
            <Link 
              href={href}
              className="flex items-center space-x-2 px-8 py-2  shadow-md rounded-lg text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}