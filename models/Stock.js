import mongoose from 'mongoose'

const { Types } = mongoose

const stockSchema = new mongoose.Schema({
  quantity: { type: Number, required: false },
  etiquetaId: { type: Types.ObjectId, required: true, ref: 'Etiquetas' }
})

export const Stock = mongoose.model('Stock', stockSchema, 'Stock')
