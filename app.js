require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const productRouter = require('./api/v1/routes/product');
const categoryRouter = require('./api/v1/routes/category');
const clientRouter = require('./api/v1/routes/client');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/product',productRouter);
app.use('/category',categoryRouter);
app.use('/client',clientRouter);
app.all('*',(req,res)=>{
    res.status(404).json({msg:'Not Found 404'});
});

module.exports = app;