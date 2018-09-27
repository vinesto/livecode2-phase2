const mongoose = require('mongoose')
const Schema = mongoose.Schema

var statusSchema = new Schema({
    content: { type: String, required: [true, "name required"] },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
        timestamps: true
    })
 var Status = mongoose.model('Status', statusSchema)

 module.exports = Status
