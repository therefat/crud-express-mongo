const {Schema,model} = require('mongoose');

const crudMongoSchema = new Schema({
    name: {
        type: String,
        required : true,
        trim:true,
        minlength: 2,
        maxlenght: 30
    },
    quote: {
        type: String,
        required : true,
        trim:true,
        minlength: 2,
        maxlenght: 30
    }
})
const CrudMongo = model('CrudMongo',crudMongoSchema);
module.exports = CrudMongo