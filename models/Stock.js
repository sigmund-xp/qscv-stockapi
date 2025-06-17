import mongoose from 'mongoose'

const { Types } = mongoose

const stockSchema = new mongoose.Schema({
  cantidad: { type: Number, required: false },
  etiqutaId: { type: Types.ObjectId, required: true, ref: 'Etiquetas' }
})

export const Stock = mongoose.model('Stock', stockSchema, 'Stock')
