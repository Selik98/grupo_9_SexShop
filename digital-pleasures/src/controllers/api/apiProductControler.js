const path = require('path');
const db = require('../../database/models');

const apiProductControler = {
    list: async (req, res) => {
        try {
            const listaProducts = await db.products.findAll()
            res.status(200).json(listaProducts)
            
        } catch (error) {
            console.log(error)
        }
    },
    postProduct: async(req,res) => {
        try {
            let categorias = []
        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias.push(req.body['cbox' + i]);
            }
        }
        const newProduct = {
            product: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.price,
            categories: categorias,
            stock: req.body.stock,
            img: req.file.filename
        }
        const createdProduct = model.createProduct(newProduct);
        res.status(201).json(createdProduct)
        } catch (error) {
            console.log(error)
        }
    },
    update: async(req,res) => {
        try {
            let categorias = []

        for (let i = 1; i <= 5; i++) {
            if (req.body['cbox' + i] != null) {
                categorias.push(req.body['cbox' + i]);
            }

        }

        let updatedProduct = {
            id: Number(req.params.id),   
            product: req.body.nombre,
            description: req.body.descripcion,
            price: req.body.price,
            categories: categorias,
            stock: req.body.stock,
            img: req.file.filename
        };

        console.log(updatedProduct)

        model.updateProduct(updatedProduct)
        res.status(200).json(updatedProduct.id)
        res.redirect('/detail')

        } catch (error) {
        console.log(error)
        }
        
    },
    deleteProduct: async(req,res) => {
        try {
            const destroy = await db.products.findById()
            res.status(200).json(destroy)
            
        } catch (error) {
           console.log(error) 
        }

    },
    
    detail: async(req,res) => {
        try {
            const detailProduct = await db.products.findById(req.params.id)
            res.status(200).json(detailProduct)  
        } catch (error) {
            console.log(error)
        }
    },
    serch: async(req, res) => {
        try {
            const userInput = req.body.product;
            const serchProduct = await db.products.findAll({
                where: {
                    userInput: userInput
                }
            })
        res.status(200).json(serchProduct)     
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = apiProductControler;