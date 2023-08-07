const fs = require('fs')
const path = require('path')



const productModel = {
    findAll: () => {
        const data = fs.readFileSync(path.join(__dirname, "../data/products.json"), 'utf-8')
        const users = JSON.parse(data)
        console.table(users)
    },
    findById: (id) => {

    },
    updateProduct: (updatedProduct) =>{
        let products = productModel.findAll()

        const prodIndex = products.findIndex(actualProd => actualProd.id === updatedProduct.id);
        products[prodIndex] = updatedProduct;
        const productsJson = JSON.stringify(products);
        fs.writeFileSync(productModel.fileRoute, productsJson, 'utf-8');
    
    }
}

module.exports = productModel;
