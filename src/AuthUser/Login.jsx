import React, { useState } from 'react';
import { Mail, Lock, ChevronRight, Shirt } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const data = await axios.post(`http://127.0.0.1:8000/api/login`, formData);
      console.log(data.message);
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.data.errors)
      } else {
        setErrors({
          general: ["Something went wrong. Please try again."]
        });
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6 relative overflow-hidden">

      {/* Soft Background Blurs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-50 rounded-full blur-[100px] opacity-60"></div>

      <div className="w-full max-w-100 relative z-10">

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
            Welcome back
          </h1>
          <p className="text-slate-400 mt-1 font-medium italic text-sm">Please enter your details.</p>
        </div>

        <form className="space-y-8" onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Email Address</label>
            <div className="flex items-center mt-1">
              <Mail size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input
                onChange={handleChange}
                name='email'
                type="email"
                placeholder="hello@adobeshirt.com"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="group border-b border-slate-200 focus-within:border-red-600 transition-all duration-500 pb-2">
            <div className="flex justify-between items-end">
              <label className="text-[10px] uppercase font-black text-slate-400 tracking-[3px] group-focus-within:text-red-600 transition-colors">Password</label>
              <a href="#" className="text-[10px] uppercase font-bold text-red-600 hover:text-red-700 transition-colors tracking-widest">Forgot?</a>
            </div>
            <div className="flex items-center mt-1">
              <Lock size={16} className="text-slate-300 group-focus-within:text-red-500 mr-3 transition-colors" />
              <input
                name='password'
                onChange={handleChange}
                type="password"
                placeholder="••••••••"
                className="w-full bg-transparent outline-none text-slate-800 font-bold placeholder:text-slate-200 text-sm"
              />
            </div>
          </div>

          {/* Action Area */}
          <div className="pt-4 flex flex-col gap-5">
            <button className="relative overflow-hidden bg-slate-950 hover:bg-red-600 text-white rounded-xl py-4 px-8 font-bold text-base flex items-center justify-center gap-2 group transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-red-200 active:scale-95">
              <span className="relative z-10">Sign In</span>
              <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={18} />
            </button>

            <p className="text-center text-[13px] font-bold text-slate-400 uppercase tracking-widest">
              New here? <a onClick={() => navigate('/singup')} href="#" className="text-red-600 hover:text-red-700 transition-colors underline underline-offset-4 decoration-slate-200 hover:decoration-red-600">Create Account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;