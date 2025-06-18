import mongoose from 'mongoose'

const bodegaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  province: { type: String, required: true }
})

export const Bodega = mongoose.model('Bodegas', bodegaSchema, 'Bodegas')
