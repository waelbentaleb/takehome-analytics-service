import express from 'express'
import { isAuthorizedClient } from '../../middleware/auth'
const router = express.Router()

import transactionRoute from './transaction/transactionRoute'

router.use('/transaction/:userId', isAuthorizedClient, transactionRoute)

export default router