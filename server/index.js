import express from 'express'
import jwt from 'express-jwt'
import cors from 'cors'
import jwks from 'jwks-rsa'

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
