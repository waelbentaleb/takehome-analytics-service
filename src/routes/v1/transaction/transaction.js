import mongoose, { Schema } from 'mongoose'
import mongooseDelete from 'mongoose-delete'

const transactionSchema = new Schema(
  {
    transactionID: { type: String },
    amount: { type: Number },
    merchant: { type: String },
    merchantID: { type: String },
    terminalID: { type: String },
    date: { type: Date },
    cardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

transactionSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true, deletedBy: true })
export default mongoose.model('Transaction', transactionSchema)