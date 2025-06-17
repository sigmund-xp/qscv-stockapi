import { Router } from 'express'
import { login, refreshToken, logout } from '../controllers/auth.controller.js'
import { requireRefreshToken } from '../middlewares/requireToken.js'
import { logBody } from '../middlewares/validatorManager.js'

const router = Router()

router.post('/login', logBody, login)
router.get('/refresh', requireRefreshToken, refreshToken)
router.get('/logout', logout)

export default router
