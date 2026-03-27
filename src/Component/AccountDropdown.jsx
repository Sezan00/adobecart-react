import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { User, Settings, ShoppingBag, LogIn, LogOut } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export const AccountDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        const token = localStorage.getItem('token');
        try{
            const data = axios.post(`http://127.0.0.1:8000/api/logout`, {},
              {
                headers: {
                    Authorization: `Bearer ${token}`
                }
              }
            )
            localStorage.removeItem('token');
            window.location.href = '/login';
        } catch(err){
            console.log(err);
        }
    }

    

    return (
        <div ref={dropdownRef} className="relative"
        >

            {/* Button */}
            <span
                onClick={() => setOpen(!open)}
                className="font-semibold text-white cursor-pointer hover:text-yellow-300 transition duration-300"
            >
                Sezan’s Account
            </span>

            {/* Dropdown */}
            {open && (
                    <div
                onMouseLeave={() => setOpen(false)}
                className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                >
                {/* Header */}
                <div className="px-4 py-3 text-sm font-semibold text-black border-b">
                    My Account
                </div>

                {/* Items */}
                <div className="flex flex-col">

                    <div onClick={()=>navigate('/manage-account')} className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition text-black">
                    <Settings size={18} className="text-black" />
                    <span>Manage My Account</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition text-black">
                    <User size={18} className="text-black" />
                    <span>My Profile</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition text-black">
                    <ShoppingBag size={18} className="text-black" />
                    <span>My Orders</span>
                    </div>

                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer transition text-black">
                    <LogIn size={18} className="text-black" />
                    <span>Login</span>
                    </div>

                    <div
                    onClick={handleLogout}
                    className="flex items-center gap-3 px-4 py-2 hover:bg-red-50 cursor-pointer transition text-black"
                    >
                    <LogOut size={18} className="text-black" />
                    <span>Logout</span>
                    </div>

                </div>
                </div>
            )}
        </div>
    );
}

export default AccountDropdown;