import mongoose from 'mongoose'

const bodegaSchema = new mongoose.Schema({
  nombre: String,
  provincia: String
})

export const Bodega = mongoose.model('Bodegas', bodegaSchema, 'Bodegas')
