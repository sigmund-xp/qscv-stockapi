import { Etiqueta } from '../models/Etiqueta.js'

export const getList = async (req, res) => {
  console.log('Etiqueta - List')
  try {
    const etiquetas = await Etiqueta.find().populate('bodegaId', 'name')
    return res.json({ etiquetas: etiquetas || [] })
  } catch (error) {
    console.error('Error fetching etiquetas:', error)
    return res.status(500).json({ error: 'Error al obtener las etiquetas' })
  }
}

export const create = async (req, res) => {
  console.log('Etiqueta - create')
  const { name, vintage, type, bodegaId, cepas: [cepaId] } = req.body

  try {
    let etiqueta = await Etiqueta.findOne({ name, vintage, type })
    if (etiqueta) return res.status(403).json({ error: 'La etiqueta ya existe' })

    etiqueta = new Etiqueta({ name, vintage, type, bodegaId, cepas: [cepaId] })
    await etiqueta.save()

    return res.status(201).json({ id: etiqueta.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const update = async (req, res) => {
  console.log('Etiqueta - update')
  const etiquetaId = req.params.id
  const { name, vintage, type, bodegaId, cepas: [cepaId] } = req.body

  try {
    const etiqueta = await Etiqueta.findByIdAndUpdate(etiquetaId, { name, vintage, type, bodegaId, cepas: [cepaId] })
    if (!etiqueta) return res.status(404).json({ error: 'Error al actualizar la etiqueta.' })

    return res.json({ etiqueta })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const deleteEtiqueta = async (req, res) => {
  console.log('deleteEtiqueta')
  const etiquetaId = req.params.id

  try {
    await Etiqueta.findByIdAndDelete(etiquetaId)
    return res.json({ ok: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
