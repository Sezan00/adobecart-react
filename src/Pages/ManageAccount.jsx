import React from 'react'
import AccountDropdown from '../Component/AccountDropdown';
import { Search, ShoppingCart } from 'lucide-react';
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';
export const ManageAccount = () => {
  const navigate = useNavigate();
  return (
    <div>
        <Header/>
     <div className='min-h-screen bg-gray-100 flex items-start justify-center pt-5'>
        <div className='w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8'>
          
          <div className='flex gap-6'>
            
            <div className='flex-1 bg-gray-50 p-6 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-2xl font-semibold'>Profile Edit</h2>
                  
                  <button className='bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-600 duration-200'>
                    Edit
                  </button>
                </div>
              <p className='mb-2'><strong>Name:</strong> Sezan</p>
              <p><strong>Email:</strong> sezan@gmail.com</p>
            </div>

            <div className='flex-1 bg-gray-50 p-6 rounded-xl'>
              <div className='flex items-center justify-between mb-4'>
                  <h2 className='text-2xl font-semibold mb-4'>Address</h2>
                  <button 
                    onClick={()=>navigate('/address')} 
                    className='bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-600 duration-200'>edit</button>
              </div>
          
              <p>Dhaka, Mohammadpur</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ManageAccount;
