import mongoose from 'mongoose'

const cepaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }
})

export const Cepa = mongoose.model('Cepas', cepaSchema, 'Cepas')
