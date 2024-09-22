const productModel = require('../models/product');
module.exports = {
    getAllProducts:(req,res)=>{
        productModel.find().then((prod)=>{
            return res.status(200).json(prod);
        });
    },
    getProductById:(req,res)=>{
        productModel.find({pid:req.params.id}).then((prod)=>{
            return res.status(200).json(prod);
        });
    },
    addProduct:(req,res)=>{
        productModel.insertMany([req.body]).then((prod)=>{
            return res.status(200).json(prod);
        });
    },
    updateProduct:(req,res)=>{
        productModel.updateOne({pid:req.params.id},req.body).then((prod)=>{
            return res.status(200).json(prod);
        });
    },
    deleteProduct:(req,res)=>{
        productModel.deleteOne({pid:req.params.id}).then((prod)=>{
            return res.status(200).json(prod);
        });
    }
}