const fs = require("fs");
const path = require("path");

const model = {
  fileRoute: path.join(__dirname, "../data/products.json"),

  findAll: () => {
    const jsonData = fs.readFileSync(model.fileRoute, "utf-8");
    const products = JSON.parse(jsonData);

    return products;
  },

  findOfertas: (oferts) => {
    const products = model.findAll();
    const productsOferts = products.find((oferts) => oferts.offer === true);

    return productsOferts;
  },

  findCategorias: (categorias) => {
    const products = model.findAll();
    const categories = products.filter(
      (category) => category.categories == categorias
    );

    return categories;
  },

  updateProduct: (updatedProduct) =>{
    let products = productModel.findAll()

    const prodIndex = products.findIndex(actualProd => actualProd.id === updatedProduct.id);
    products[prodIndex] = updatedProduct;
    const productsJson = JSON.stringify(products);
    fs.writeFileSync(productModel.fileRoute, productsJson, 'utf-8');
},

findById: (id) => {

},


};

model.exports = model;
