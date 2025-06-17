import mongoose from 'mongoose'

const bodegaSchema = new mongoose.Schema({
  nombre: String
})

export const Bodega = mongoose.model('Bodegas', bodegaSchema, 'Bodegas')
