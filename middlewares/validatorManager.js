import { validationResult, param } from 'express-validator'
import mongoose from 'mongoose'

export const logBody = (req, res, next) => {
  console.log(`req.body ${JSON.stringify(req.body)}`)
  next()
}

export const validationResultExpress = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    console.log(`validationResultExpress errors: ${JSON.stringify(errors.array())}`)
    return res.status(400).json({ error: 'No pudimos iniciar sesión. Verificá tus datos e intentá nuevamente.' })
  }

  next()
}

export const paramObjectIdValidator = [
  param('id').trim().notEmpty().escape()
    .custom(
      async (value) => {
        if (!mongoose.isValidObjectId(value)) {
          throw new Error('Debe enviarse un id de Link válido')
        }
      }
    ),
  validationResultExpress
]
