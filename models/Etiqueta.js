import mongoose from 'mongoose'

const { Types } = mongoose

const etiquetaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  añada: { type: Number, required: true },
  bodegaId: { type: Types.ObjectId, ref: 'Bodegas', required: true },
  cepas: [{ type: Types.ObjectId, ref: 'Cepas', required: true }]
})

export const Etiqueta = mongoose.model('Etiquetas', etiquetaSchema, 'Etiquetas')
