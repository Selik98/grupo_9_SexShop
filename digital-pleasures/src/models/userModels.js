const fs = require('fs')
const path = require('path')



const model = {
    findAll: () => {
        const data = fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8')
        const users = JSON.parse(data)
        console.table(users)
    },
    findById: (id) => {

    }

}

module.exports = model;

model.findAll()