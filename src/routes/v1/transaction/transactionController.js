import Transaction from './transaction'
import validationSchema from './transactionValidations'
import validator from '../../../helpers/validator'
import successResponse from '../../../helpers/successResponse'
import { BadRequestError, NotFoundError } from '../../../helpers/ApiError'


export async function create(req, res, next) {
  try {
    validator(validationSchema, req.body)

    let transactionObject = await Transaction.findOne({ transactionID: req.body.transactionID })
    if (transactionObject)
      throw new BadRequestError('transaction already exist')

    transactionObject = {
      ...req.body,
      cardId: req.params.cardId,
      userId: req.user._id,
      date: new Date()
    }

    transactionObject = await Transaction.create(transactionObject)

    return successResponse(res, transactionObject)

  } catch (error) { next(error) }
}

export async function getAll(req, res, next) {
  try {

    const transactionList = await Transaction.find({ userId: req.user._id })

    return successResponse(res, transactionList)

  } catch (error) { next(error) }
}

export async function getById(req, res, next) {
  try {

    let transactionObject = await Transaction.findOne({ userId: req.user._id, _id: req.params.transactionId })
    if (!transactionObject)
      throw new NotFoundError('transaction not found')

    return successResponse(res, transactionObject)

  } catch (error) { next(error) }
}

export async function remove(req, res, next) {
  try {

    let transactionObject = await Transaction.findOne({ userId: req.user._id, _id: req.params.transactionId })
    if (!transactionObject)
      throw new NotFoundError('transaction not found')

    await Transaction.delete({ _id: req.params.transactionId })

    return successResponse(res, { success: true })

  } catch (error) { next(error) }
}