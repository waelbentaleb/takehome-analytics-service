import express from 'express'
import { create, getAll, getById, remove } from './transactionController'

const router = express.Router()

router.post('/:cardId', create)
router.get('/', getAll)
router.get('/:transactionId', getById)
router.delete('/:transactionId', remove)

export default router