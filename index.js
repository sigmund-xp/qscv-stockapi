import 'dotenv/config'
import './utils/logger.js'
import './database/connectdb.js'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRouter from './routes/auth.route.js'
import cepaRouter from './routes/cepa.route.js'
import bodegaRouter from './routes/bodega.route.js'
import etiquetaRouter from './routes/etiqueta.route.js'

const app = express()

const corsOptions = {
  origin: [process.env.ORIGIN1],
  methods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PATCH'],
  credentials: true
}

app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`)
  next()
})
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/cepa', cepaRouter)
app.use('/api/v1/bodega', bodegaRouter)
app.use('/api/v1/etiqueta', etiquetaRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} - http://localhost:${PORT}`)
})
