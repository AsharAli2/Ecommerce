const mongoose=require("mongoose")
const orderschema=mongoose.Schema({
    products:[],
    name:String,
    Phonenumber:Number,
    address:String,
    email:String,
    
});

const OrderModel=mongoose.model("Order",prodschema)

module.exports={OrderModel}