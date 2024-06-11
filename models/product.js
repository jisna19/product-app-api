const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "title":String,
        "code":String,
        "price":String,
        "category":String,
        "url":String
    }
)
let productsmodel=mongoose.model("products",schema);
module.exports={productsmodel}