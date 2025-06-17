import { Router } from 'express'
import { getList, create, update } from '../controllers/stock.controller.js'
import { requireToken } from '../middlewares/requireToken.js'
import { logBody, paramObjectIdValidator } from '../middlewares/validatorManager.js'

const router = Router()

router.post('/list', requireToken, logBody, getList)
router.post('/', requireToken, logBody, create)
router.patch('/:id', requireToken, paramObjectIdValidator, update)

export default router
