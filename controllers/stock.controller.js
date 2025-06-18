import { Stock } from '../models/Stock.js'

export const getList = async (req, res) => {
  console.log('getList')
  try {
    const stock = await Stock.find()
    return res.json({ stock: stock || [] })
  } catch (error) {
    console.error('Error fetching stock:', error)
    return res.status(500).json({ error: 'Error al obtener el stock' })
  }
}

export const create = async (req, res) => {
  console.log('create')
  const { quantity, etiquetaId } = req.body

  try {
    let stock = await Stock.findOne({ etiquetaId })
    if (stock) return res.status(403).json({ error: 'El stock de esa etiqueta ya existe' })

    stock = new Stock({ quantity, etiquetaId })
    await stock.save()

    return res.status(201).json({ id: stock.id })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}

export const update = async (req, res) => {
  console.log('update')
  const stockId = req.params.id
  const { quantity } = req.body

  try {
    const stock = await Stock.findByIdAndUpdate(stockId, { quantity })
    if (!stock) return res.status(404).json({ error: 'Error al actualizar el stock.' })

    return res.json({ stock })
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: error.message })
  }
}
