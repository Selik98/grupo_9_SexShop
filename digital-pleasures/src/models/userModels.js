const fs = require('fs')
const path = require('path')



const model = {
    fileRoute: path.join(__dirname, '../data/users.json'),
    findAll: () => {
        const data = fs.readFileSync(path.join(__dirname, "../data/users.json"), 'utf-8')
        const users = JSON.parse(data)
        console.table(users)
    },
    findById: (id) => {

    },
//CREAR NUEVO USUARIO
    createUsers: (bodyData) => {
        let users = model.findAll();

        const lastUserId = users[users.length - 1].id;

        const newUser = {
            id: lastUserId + 1,
            ...bodyData
        };

        users.push(newUser);

        const jsonData = JSON.stringify(users);

        fs.writeFileSync(model.fileRoute, jsonData, 'utf-8');

        return newUser;
    },
//BORRAR USUARIO
    destroy: (id) => {
        let users = model.findAll();

        users = users.filter(usuarioActual => usuarioActual.id !== id);

        const jsonUsers = JSON.stringify(users);

        fs.writeFileSync(model.fileRoute, jsonUsers, 'utf-8');
    },
//SUBIR EL USUARIO NUEVO 
    updateUsers: (updatedUsers) => {

        let users = model.findAll();

        const prodIndex = users.findIndex(userActual => userActual.id === updatedUsers.id);

        users[prodIndex] = updatedUsers;

        const usersJson = JSON.stringify(users);

        fs.writeFileSync(model.fileRoute, usersJson, 'utf-8');
    }
};


module.exports = model;

model.findAll()