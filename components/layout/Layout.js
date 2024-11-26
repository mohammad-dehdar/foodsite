'use client'

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export default function Layout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        < >
            <header className="bg-white shadow-md rounded-b-xl" >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        <Link href={"/"} className="text-3xl font-bold text-green-600 tracking-tight">Food<span className="text-yellow-500">Site</span></Link>
                        <nav className="hidden md:block">
                            <ul className="flex space-x-6">
                                {["Menu", "categories"].map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="text-gray-600 hover:text-green-500 transition-colors duration-300 text-lg font-medium"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <button
                            className="md:hidden text-gray-600 hover:text-green-500 transition-colors duration-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {
                    isMenuOpen && (
                        <div className="md:hidden bg-white py-2">
                            <nav className="container mx-auto px-4">
                                <ul className="space-y-2">
                                    {["Menu", "categories"].map((item) => (
                                        <li key={item}>
                                            <Link
                                                href={`/${item.toLowerCase()}`}
                                                className="block text-gray-600 hover:text-green-500 transition-colors duration-300 text-lg font-medium py-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    )
                }
            </header>
            <main className="min-h-screen">
                <div className="container mx-auto my-8 h-full">
                    <div className="bg-white rounded-lg h-full">
                        {children}
                    </div>
                </div>
            </main>
            <footer className="bg-green-600 text-white p-1 rounded-t-xl">
                <div className="container mx-auto px-4 text-center">
                    <a
                        href="https://github.com/mohammad-dehdar"
                        className="inline-block hover:text-yellow-300 transition-colors duration-300 text-lg font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Created by Mohammad Dehdar
                    </a>
                    <div className="mt-2 flex justify-center space-x-4">
                        {["Facebook", "Twitter", "Instagram"].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="text-white hover:text-yellow-300 transition-colors duration-300"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </footer>
        </>
    )
}