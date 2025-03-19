const mongoose=require('mongoose')

const cartSchema=mongoose.Schema({
    userId:String,
    items:[
        {
    productId:String,
    name:String,
    price:String
        }
    ]
})

module.exports=mongoose.model('Cart',cartSchema)