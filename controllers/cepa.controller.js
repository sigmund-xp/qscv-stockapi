import { Cepa } from '../models/Cepa.js'

export const getList = async (req, res) => {
  console.log('getList')
  try {
    const cepas = await Cepa.find()
    return res.json({ cepas: cepas || [] })
  } catch (error) {
    console.error('Error fetching cepas:', error)
    return res.status(500).json({ error: 'Error al obtener las cepas' })
  }
}

export const create = async (req, res) => {
  console.log('create')
  const { name, type } = req.body

  try {
    let cepa = await Cepa.findOne({ name })
    if (cepa) return res.status(403).json({ error: 'La cepa ya existe' })

    cepa = new Cepa({ name, type })
    await cepa.save()

    return res.status(201).json({ id: cepa.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const deleteCepa = async (req, res) => {
  console.log('deleteCepa')
  const cepaId = req.params.id

  try {
    await Cepa.findByIdAndDelete(cepaId)
    return res.json({ ok: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
