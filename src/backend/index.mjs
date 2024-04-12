// THIS FILE IS TO INITIALIZE THE SERVER WITH EXPRESS

import express from 'express'
import { PrismaClient } from '@prisma/client'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const databaseURL = process.env.DATABASE_URL
const URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabase = createClient(URL, anonKey)

// Check if DATABASE_URL is defined
if (!databaseURL) {
  throw new Error('DATABASE_URL environment variable is not defined')
}

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseURL
    }
  }
})

// Middleware to parse JSON bodies
app.use(express.json())

//SIGN-UP ROUTE
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password } = req.body

    //signup the user in the auth.users table
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    })

    console.log('Data:', data) // Log user object

    if (error) {
      console.error('Error signing up:', error.message)
      return res
        .status(400)
        .json({ error: 'Failed to sign up', message: error.message })
    }

    // Extract the user data from the response
    const userData = data.user

    // Store the user data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData))

    res.status(201).json({ message: 'Sign up succesful', data })
  } catch (err) {
    console.error('Error signing up:', err.message)
    res.status(500).json({ error: 'Failed to sign up', message: err.message })
  }
})

// CREATE NEW USER ROUTE
app.post('/api/create-user', async (req, res) => {
  try {
    const userData = req.body

    // Retrieve the user data from localStorage
    const user = JSON.parse(localStorage.getItem('userData'))

    // Create user profile
    const newUserProfile = await prisma.userProfile.create({
      data: {
        name: userData.name,
        surname: userData.surname,
        avatarImage: userData.avatarImage,
        birthDate: userData.birthDate,
        secondaryAddress: userData.secondaryAddress,
        authUserId: user.id
      }
    })
    res.status(201).json({
      message: 'User Profile created succesfully',
      userProfile: newUserProfile
    })
  } catch (err) {
    console.error('Error creating user', err)
    res
      .status(500)
      .json({ err: 'Failed to create user profile', message: err.message })
  }
})

// LOGIN ROUTE
app.post('/api/login', async (req, res) => {
  try {
    // Authenticate user via Supabase
    const { email, password } = req.body

    // Call Supabase to authenticate user
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    })
    // Check for errors
    if (error) {
      throw error
    }

    // Retrieve user profile using email
    const userProfile = await prisma.userProfile.findUnique({
      where: { email: email }
    })

    // If authentication successful, send success response
    res.status(200).json({ message: 'Login successful', user: userProfile })
  } catch (error) {
    // If any error occurred during login, send error response
    console.error('Error logging in:', error.message)
    res.status(500).json({ error: 'Failed to login', message: error.message })
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
