import { generateRefreshToken, generateToken, tokenVerificationErrors } from '../utils/tokenManager.js'

export const login = async (req, res) => {
  console.log('Login')
  const { email, password } = req.body
  try {
    let userId = ''
    if (email === 'Berta' && password === 'Cata2012') {
      userId = email
    } else if (email === 'Mariano' && password === 'Cata2012') {
      userId = email
    } else {
      console.log(`No existe el usuario [${email}]`)
      return res.status(400).json({ error: 'No pudimos iniciar sesión. Verificá tus datos e intentá nuevamente.' })
    }
    const { token, expiresIn } = generateToken(userId)
    generateRefreshToken(userId, res)

    return res.json({ token, expiresIn })
  } catch (error) {
    console.log(error)
    return res.status(400).json({ error: 'No pudimos iniciar sesión. Verificá tus datos e intentá nuevamente.' })
  }
}

export const refreshToken = (req, res) => {
  console.log('refreshToken')
  try {
    const { token, expiresIn } = generateToken(req.uid)
    return res.json({ token, expiresIn })
  } catch (error) {
    console.log(error)
    return res.status(401).json({ error: tokenVerificationErrors(error) })
  }
}

export const logout = (req, res) => {
  console.log('logout')
  res.clearCookie('refreshToken')
  return res.json({ ok: true })
}
