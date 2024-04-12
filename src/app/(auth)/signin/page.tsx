"use client";

import SigninForm from "../../../frontend/sections/signin/signin-form";
// import BackgroundImage from "@/frontend/sections/hero-homepage/sub-components/background-image";
import { useState } from "react";
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

// const URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const URL = "https://bdwmqtcdyxzmhiblamcg.supabase.co"
// const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkd21xdGNkeXh6bWhpYmxhbWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwNjE0ODAsImV4cCI6MjAyNzYzNzQ4MH0.MqaR5nXlo-gB8vvrQSTJK4l5DvQ6liNcW9kySpRvVM8"

const SignIn = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
    
  const handleLogin = async () => {
      try {
        const supabase = createClient(URL, anonKey)
        
        let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
        
        if (error) {
          throw error;
        }
       
        console.log('User logged in:', data)
      } catch (err: any ) {
        console.log('Error signin in)', err.message)
      }
    }; 
  

  return (
    <div className="relative h-screen w-screen overflow-hidden ">
      <div>
        {/* <BackgroundImage /> */}
      </div>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <SigninForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      </div>
    </div>
  );
};

export default SignIn;
