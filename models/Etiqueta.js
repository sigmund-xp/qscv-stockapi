import mongoose from 'mongoose'

const { Types } = mongoose

const etiquetaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vintage: { type: Number, required: true },
  type: { type: String, required: true },
  bodegaId: { type: Types.ObjectId, ref: 'Bodegas', required: true },
  cepas: [{ type: String, required: true }],
  quantity: { type: Number, required: false }
})

export const Etiqueta = mongoose.model('Etiquetas', etiquetaSchema, 'Etiquetas')
