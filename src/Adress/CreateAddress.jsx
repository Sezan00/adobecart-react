import React from 'react'
import Header from '../Home/Header';
export const CreateAddress = () => {
  return (
   <>
        <div>
            <Header/>
        </div>
        <div className='min-h-screen bg-gray-100 flex items-start justify-center pt-5'>
            <div className='bg-white w-full max-w-4xl p-8 rounded-2xl shadow-lg'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor="" className='font-medium'>Full Name</label>
                    <input type="text" className='w-50 border '/>
                </div>
            </div>
        </div>
   </>
  )
}

export default CreateAddress;