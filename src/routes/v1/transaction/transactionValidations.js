import Joi from 'joi'

export default Joi.object({
  transactionID: Joi.string().required(),
  amount: Joi.number().required(),
  merchant: Joi.string().required(),
  merchantID: Joi.string().required(),
  terminalID: Joi.string().required()
})