/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import type React from "react"

import { useState } from "react"

import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useLoginUserMutation } from "@/redux/service/auth/authApi"
import { toast } from "sonner"
import { useAppDispatch } from "@/redux/hooks/hooks"
import { setUser } from "@/redux/features/auth"
import Cookies from "js-cookie";
import { useRouter } from "next/navigation"
import { Button, Input } from "antd"
export function LoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginUser, { isLoading }] = useLoginUserMutation();
    const dispatch = useAppDispatch();
    const router = useRouter()


   const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  try {
    const res = await loginUser({ email, password }).unwrap()

    if (res?.token && res?.user) {
      toast.success("Successfully logged in")

      const { user, token } = res
      dispatch(setUser({ user, accessToken: token, refreshToken: token }))
      
      // Save token to cookies
      Cookies.set("token", token)
      router.push("/dashboard")
    }
  } catch (err: any) {
    toast.error(err?.data?.message || "Login failed")
  }
}


    return (
        <div className="w-full max-w-3xl mx-auto mt-36 bg-white p-8 rounded-lg shadow-sm">
            <div className="text-center mb-8">
                <h1 className="text-[39px] lg:text-[40px] font-bold text-gray-900 ">Welcome Back!</h1>
                <p className="text-[30px] lg:text-[30px] text-[#FFB833] font-bold ">Sign in your Admin Dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-md font-semibold text-black">
                        Email
                    </label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter login mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-100 border-0 h-12 text-gray-600 placeholder:text-gray-400"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="password" className="text-md font-semibold text-black">
                        Password
                    </label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="bg-gray-100 border-0 h-12 text-gray-600 placeholder:text-gray-400 pr-10"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                    </div>
                  
                </div>

            <button
  type="submit"
  className="w-full h-12 rounded-lg font-medium bg-[#FFB833] hover:bg-yellow-600 text-black"
>
  {isLoading ? "Login..." : "Login Now"}
</button>



            </form>

        
        </div>
    )
}
