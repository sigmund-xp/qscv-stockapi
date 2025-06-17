import { Bodega } from '../models/Bodega.js'

export const getList = async (req, res) => {
  try {
    const bodegas = await Bodega.find()
    return res.json({ bodegas: bodegas || [] })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const create = async (req, res) => {
  console.log('create')
  const { nombre } = req.body

  try {
    let bodega = await Bodega.findOne({ nombre })
    if (bodega) return res.status(403).json({ error: 'La bodega ya existe' })

    bodega = new Bodega({ nombre })
    await bodega.save()

    return res.status(201).json({ id: bodega.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const deleteBodega = async (req, res) => {
  console.log('deleteBodega')
  const bodegaId = req.params.id

  try {
    await Bodega.findOneAndDelete({ id: bodegaId })
    return res.json({ ok: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
