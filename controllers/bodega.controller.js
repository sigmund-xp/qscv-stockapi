import { Bodega } from '../models/Bodega.js'

export const getList = async (req, res) => {
  console.log('Bodega - List')
  try {
    const { kind } = req.body
    let bodegas
    if (kind === 'combo') {
      bodegas = await Bodega.find({}, '_id name')
    } else {
      bodegas = await Bodega.find()
    }
    return res.json({ bodegas: bodegas || [] })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const create = async (req, res) => {
  console.log('Bodega - create')
  const { name, province } = req.body

  try {
    let bodega = await Bodega.findOne({ name })
    if (bodega) return res.status(403).json({ error: 'La bodega ya existe' })

    bodega = new Bodega({ name, province })
    await bodega.save()

    return res.status(201).json({ id: bodega.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const deleteBodega = async (req, res) => {
  console.log('Bodega - delete')
  const bodegaId = req.params.id
  try {
    await Bodega.findOneAndDelete(bodegaId)
    return res.json({ ok: true })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
