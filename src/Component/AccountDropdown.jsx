import React, { useEffect, useRef, useState } from 'react'

export const AccountDropdown = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

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
                <div onMouseLeave={() => setOpen(false)} className="absolute right-0 mt-3 w-48 bg-white text-black rounded-xl shadow-lg overflow-hidden z-50">

                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Account
                    </div>

                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        My Orders
                    </div>

                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Login
                    </div>

                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500">
                        Logout
                    </div>

                </div>
            )}
        </div>
    );
}

export default AccountDropdown;