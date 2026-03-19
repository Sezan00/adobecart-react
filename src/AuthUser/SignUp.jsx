import React, { useState } from 'react';
import { User, Mail, Phone, Lock, ChevronRight, Shirt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [formdata, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        password_confirmation: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formdata, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const data = await axios.post(`http://127.0.0.1:8000/api/signup`, formdata);
      navigate('/login')
      console.log(data.message)
    } catch(error){
      if(error.response?.status === 422){
          setErrors(error.response.data.errors)
      } else{
        setErrors({
            general: ["Something went wrong. Please try again."]
        })
      }
    }
  }

  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Decorative Brand Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="w-full max-w-110 relative z-10">
        
        {/* Brand Identity */}
        <div className="mb-12 flex flex-col items-center lg:items-start">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-red-600 p-2 rounded-lg shadow-lg shadow-red-200">
              <Shirt className="text-white" size={20} />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">
              Adobe<span className="text-red-600 font-extrabold">Cart</span><span className="text-red-600">.</span>
            </span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Create an account
          </h1>
          <p className="text-slate-400 mt-1 font-medium italic text-sm">Design your future with us.</p>
        </div>

        <form className="space-y-7" onSubmit={handleSubmit}>
          
          {/* Full Name */}
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Full Name</label>
            <div className="flex items-center mt-1">
              <User size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input 
                onChange={handleChange}
                type="text" 
                name='name'
                placeholder="Sezan Molla"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Email */}
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Business Email</label>
            <div className="flex items-center mt-1">
              <Mail size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input 
                name='email'
                type="email" 
                onChange={handleChange}
                placeholder="hello@adobeshirt.com"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Contact Number</label>
            <div className="flex items-center mt-1">
              <Phone size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input 
                name='phone'
                type="tel" 
                onChange={handleChange}
                placeholder="017xxxxxxxx"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Password */}
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Secure Password</label>
            <div className="flex items-center mt-1">
              <Lock size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input 
                name='password'
                type="password" 
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Confirm Password</label>
            <div className="flex items-center mt-1">
              <Lock size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input 
                name='password_confirmation'
                type="password" 
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-8 flex flex-col gap-5">
            <button className="relative overflow-hidden bg-slate-950 hover:bg-red-600 text-white rounded-xl py-4.5 px-8 font-bold text-base flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-red-200 active:scale-95">
              <span className="relative z-10">Join Adobeshirt</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            
            <p className="text-center text-[13px] font-bold text-slate-400 uppercase tracking-widest">
              Member? <a onClick={()=> navigate('/login')} href="#" className="text-red-600 hover:text-red-700 transition-colors underline underline-offset-4 decoration-slate-200 hover:decoration-red-600">Login Here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;