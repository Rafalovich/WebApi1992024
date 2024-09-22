const categoryModel = require('../models/category');
module.exports = {
    getAllCategorys:(req,res)=>{
        categoryModel.find().then((categ)=>{
            return res.status(200).json(categ);
        });
    },
    getCategoryById:(req,res)=>{
        categoryModel.find({cid:req.params.id}).then((categ)=>{
            return res.status(200).json(categ);
        });
    },
    addCategory:(req,res)=>{
        categoryModel.insertMany([req.body]).then((categ)=>{
            return res.status(200).json(categ);
        });
    },
    updateCategory:(req,res)=>{
        categoryModel.updateOne({cid:req.params.id},req.body).then((categ)=>{
            return res.status(200).json(categ);
        });
    },
    deleteCategory:(req,res)=>{
        categoryModel.deleteOne({cid:req.params.id}).then((categ)=>{
            return res.status(200).json(categ);
        });
    }
}