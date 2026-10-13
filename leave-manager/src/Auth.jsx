import { useState } from "react";
export default function Auth(){

const[isLogin,setIsLogin]=useState(true)
const [name,setName]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")

return(
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] p-4">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-gray-100 p-8 transition-all duration-300">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    {isLogin?'Welcome Back':'Create Account'}
                </h2>
                <p className="text-gray-500 mt-2 text-sm">
                    {isLogin?'Enter your information to join the Master Vault':'Join the system and manage your Work'}
                </p>
            </div>
            <form className="flex flex-col gap-6 w-full mt-4">
                {!isLogin&&(
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"/>
                        
                    </div>
                )}
                <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Work Email</label>
                        <input type="email" placeholder="name@company.com" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"/>
                    
                    </div>
                    <div className="space-y-1">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input type="password" placeholder="......" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:outline-none focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"/>
                    
                    </div>
                    <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200"
          >
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        
        <div className="mt-8 text-center text-sm text-gray-600 font-medium">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button 
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:text-blue-800 font-bold transition-colors focus:outline-none"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
            </div>
        </div>
    </div>
)
}