const express=require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { addToCart, removeFromCart, getCart } = require('../controllers/cartController')

const cartrouter=express.Router()

cartrouter.post("/add",authMiddleware,addToCart)
cartrouter.get("/",authMiddleware,getCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)  

module.exports=cartrouter