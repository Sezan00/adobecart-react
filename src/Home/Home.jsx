import React from 'react';
import { Search, ShoppingCart, User } from 'lucide-react';
import AccountDropdown from '../Component/AccountDropdown';
import Header from '../Home/Header';

const AdobeshirtHome = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    console.log(token);
    console.log(user);
    const products = Array(6).fill({
        name: "Premium Biryani Masala - 40g | Rich Aroma &...",
        price: "40",
        oldPrice: "79",
        discount: "-49%",
        img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&h=200"
    });

    const categories = [
        { name: "Power Sanders", img: "https://via.placeholder.com/100" },
        { name: "Other Projector Accessories", img: "https://via.placeholder.com/100" },
        { name: "Kitchen Fittings", img: "https://via.placeholder.com/100" },
        { name: "Womens Fashion", img: "https://via.placeholder.com/100" },
        { name: "Donate to Healthcare", img: "https://via.placeholder.com/100" },
        { name: "Goat", img: "https://via.placeholder.com/100" },
        { name: "Watches and Accessories", img: "https://via.placeholder.com/100" },
        { name: "Watering Systems & Garden Hoses", img: "https://via.placeholder.com/100" },
    ];

    return (
        <div className="bg-[#eff0f5] min-h-screen font-sans text-gray-800">

            {/* 1. TOP NAVBAR (Daraj Orange) */}
                <Header/>

            {/* 2. ON SALE SECTION */}
            <div className="max-w-297 mx-auto px-4 mt-3">
                <div className="bg-white p-3">
                    <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-2">
                        <span className="text-orange-600 font-medium text-sm">On Sale Now</span>
                        <button className="border border-orange-600 text-orange-600 text-[10px] px-3 py-1 font-bold uppercase">SHOP ALL PRODUCTS</button>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                        {products.map((p, i) => (
                            <div key={i} className="bg-white hover:shadow-md transition-shadow cursor-pointer">
                                <div className="h-47 w-full bg-gray-50">
                                    <img src={p.img} className="w-full h-full object-contain" />
                                </div>
                                <div className="p-2">
                                    <p className="text-xs text-gray-800 line-clamp-2 h-8 leading-4">{p.name}</p>
                                    <p className="text-orange-600 text-lg mt-1 font-normal">৳{p.price}</p>
                                    <div className="flex items-center gap-1 text-[10px] text-gray-400">
                                        <span className="line-through">৳{p.oldPrice}</span>
                                        <span>{p.discount}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 3. CATEGORIES SECTION (Exactly as Screenshot) */}
            <div className="max-w-297 mx-auto px-4 mt-6">
                <h3 className="text-gray-700 text-lg mb-2">Categories</h3>
                <div className="grid grid-cols-8 bg-white border-l border-t border-gray-100">
                    {categories.map((cat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center p-4 border-r border-b border-gray-100 hover:shadow-md cursor-pointer transition-all h-32.5">
                            <div className="w-20 h-20 mb-2">
                                <img src={cat.img} className="w-full h-full object-contain" alt={cat.name} />
                            </div>
                            <span className="text-[11px] text-center text-gray-600 leading-tight">{cat.name}</span>
                        </div>
                    ))}
                    {/* Repeat more to fill rows as in screenshot */}
                    {categories.map((cat, i) => (
                        <div key={i + 8} className="flex flex-col items-center justify-center p-4 border-r border-b border-gray-100 hover:shadow-md cursor-pointer h-32.5">
                            <div className="w-20 h-20 mb-2">
                                <img src={cat.img} className="w-full h-full object-contain" alt={cat.name} />
                            </div>
                            <span className="text-[11px] text-center text-gray-600 leading-tight">{cat.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* 4. JUST FOR YOU SECTION */}
            <div className="max-w-297 mx-auto px-4 mt-6">
                <h3 className="text-gray-700 text-lg mb-2">Just For You</h3>
                <div className="grid grid-cols-6 gap-2">
                    {products.map((p, i) => (
                        <div key={i} className="bg-white hover:shadow-md cursor-pointer h-70">
                            <div className="h-47 w-full bg-gray-50">
                                <img src={p.img} className="w-full h-full object-contain" />
                            </div>
                            <div className="p-2">
                                <p className="text-xs text-gray-800 line-clamp-2 leading-4">{p.name}</p>
                                <p className="text-orange-600 text-lg mt-1">৳{p.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AdobeshirtHome;