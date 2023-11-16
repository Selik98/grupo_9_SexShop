const db = require("../../../database/models");
const productos = require("../../../database/models/productos");
const Op = db.sequelize.Op;

const apiProductController = {
    allProduct: async (req, res) => {
        try {
          const product = await db.Producto.findAll();
          const formattedProducts = product.map((product) => ({
            return:{
            id: product.id,
            titulo: product.titulo,
            descripcion: product.descripcion,
            precio: product.precio,
            categorias: product.categorias,
            img: 'http://localhost:3000/public/img/products' + product.img
            }
          }));
    
          res.json({
            status: 200,
            count: formattedProducts.length,
            productos: formattedProducts,
          });
          
    
        } catch (error) {
          console.error(error);
        }
      },
    
      productById: async (req, res) => {
    
          const product = await db.Producto.findOne({
            where: {id: req.params.id},
            attributes: ['id', 'titulo', 'descripcion', 'precio','categorias', 'img'],
          })
    
          res.json({
            data: {
              ...product.dataValues,
              urlImg: 'http://localhost:3000/public/img/products' + product.dataValues.img,
            }
          })
      }}

module.exports = apiProductController;