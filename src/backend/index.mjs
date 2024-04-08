// THIS FILE IS TO INITIALIZE THE SERVER WITH EXPRESS
import express from 'express'
import { PrismaClient } from '@prisma/client'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const app = express()
const port = process.env.PORT || 3000
const databaseURL = process.env.DATABASE_URL

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: databaseURL
    }
  }
})

// Middleware to parse JSON bodies
app.use(express.json())

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const userData = req.body
    const newUser = await prisma.userProfile.create({
      data: {
        name: userData.name,
        surname: userData.surname,
        avatarImage: userData.avatarImage,
        email: userData.email,
        password: userData.password,
        birthDate: new Date(userData.birthDate),
        primaryAddress: userData.primaryAddress,
        secondaryAddress: userData.secondaryAddress
      }
    })
    console.log('primary address', userData.primaryAddress)
    res.status(201).json(newUser)
  } catch (err) {
    console.error('Error creating user', err)
    res.status(500).json({
      err: 'Failed to create user',
      message: err.message
    })
  }
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
