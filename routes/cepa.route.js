import { Router } from 'express'
import { getList, create, deleteCepa } from '../controllers/cepa.controller.js'
import { requireToken } from '../middlewares/requireToken.js'
import { logBody, paramObjectIdValidator } from '../middlewares/validatorManager.js'

const router = Router()

router.post('/list', requireToken, getList)
router.post('/', requireToken, logBody, create)
router.delete('/:id', requireToken, paramObjectIdValidator, deleteCepa)

export default router
