import React from 'react'
import Header from '../Home/Header';
import { useNavigate } from 'react-router-dom';

export const Address = () => {
  const navigate = useNavigate();
  return (
    <>
     <Header/>
      <div className='min-h-screen bg-gray-100 flex items-start justify-center pt-5'>
        <div className='w-full max-w-4xl bg-white shadow-lg rounded-2xl p-8'>   
           <table className='w-full '>
             <thead>
                <tr className='text-left bg-gray-50 rounded-3xl shadow'>
                    <th className='p-3'>Full Name</th>
                    <th className='p-3'>Address</th>
                    <th className='p-3'>Post Code</th>
                    <th className='p-3'>Phone Number</th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td className='p-3'>Sezan</td>
                    <td className='p-3'>Dhaka,Mohamamdpur</td>
                    <td className='p-3'>1207</td>
                    <td className='p-3'>Phone</td>
                </tr>
             </tbody>
           </table>
          <div className='mt-3 flex justify-end'>
            <button
             onClick={()=> navigate('/create-address')}
             className='bg-blue-500 text-white font-semibold px-4 py-2 hover:bg-blue-700 duration-200'>+ ADD NEW ADDRESS</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Address;