import { Router } from 'express'
import { getList, create, deleteBodega } from '../controllers/bodega.controller.js'
import { requireToken } from '../middlewares/requireToken.js'
import { logBody, paramObjectIdValidator } from '../middlewares/validatorManager.js'

const router = Router()

router.post('/list', requireToken, logBody, getList)
router.post('/', requireToken, logBody, create)
router.delete('/:id', requireToken, paramObjectIdValidator, deleteBodega)

export default router
