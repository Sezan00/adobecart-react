import { Search, ShoppingCart } from 'lucide-react';
import React from 'react'
import AccountDropdown from '../Component/AccountDropdown';

export const Header = () => {
  return (
    <div>
             <header className="bg-[#f85606] h-15sticky top-0 z-50">
                <div className="bg-linear-to-r from-red-700 via-red-600 to-red-500 h-18 shadow-xl">
                    <div className="max-w-297 mx-auto px-4 h-full flex items-center">

                        {/* Logo */}
                        <div className="text-white text-3xl font-extrabold mr-12 cursor-pointer tracking-wide hover:scale-105 transition duration-300">
                            Adobecart
                        </div>

                        {/* Search Bar */}
                        <div className="flex-1 flex h-11.5">

                            <input
                                type="text"
                                placeholder="Search in Adobeshirt"
                                className="w-full px-5 text-sm outline-none rounded-l-full bg-white placeholder-gray-400 focus:ring-2 focus:ring-red-300 transition"
                            />

                            <button className="bg-white text-red-600 px-7 rounded-r-full flex items-center justify-center hover:bg-red-100 transition duration-300">
                                <Search size={18} />
                            </button>

                        </div>

                        {/* Cart Icon */}
                        <div className="flex items-center gap-6 ml-10 text-white">

                            {/* Cart */}
                            <div className="cursor-pointer relative hover:scale-110 transition duration-300">
                                <ShoppingCart size={28} />
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold px-2 py-0.5 rounded-full shadow-md animate-pulse">
                                    0
                                </span>
                            </div>

                            {/* Account */}
                            <AccountDropdown />

                        </div>
                    </div>
                </div>
            </header>
    </div>
  )
}
export default Header;