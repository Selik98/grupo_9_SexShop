const fs = require('fs');
const path = require('path');

const modelo = {
    fileRoute: path.join(__dirname, '../data/users.json'),

//CREAR USUARIO    
    createUsers: (bodyData) => {
        let users = modelo.findAll();

        const lastUserId = users[users.length - 1].id;

        const newUser = {
            id: lastUserId + 1,
            ...bodyData
        };

        users.push(newUser);

        const jsonData = JSON.stringify(users);

        fs.writeFileSync(modelo.fileRoute, jsonData, 'utf-8');

        return newUser;
    },
//BORRAR USUARIO
    destroy: (id) => {
        let users = modelo.findAll();

        users = users.filter(usuarioActual => usuarioActual.id !== id);

        const jsonUsers = JSON.stringify(users);

        fs.writeFileSync(modelo.fileRoute, jsonUsers, 'utf-8');
    },
//SUBIR EL USUARIO NUEVO 
    updateUsers: (updatedUsers) => {

        let users = modelo.findAll();

        const prodIndex = users.findIndex(userActual => userActual.id === updatedUsers.id);

        users[prodIndex] = updatedUsers;

        const usersJson = JSON.stringify(users);

        fs.writeFileSync(modelo.fileRoute, usersJson, 'utf-8');
    }
};

module.exports = modelo;