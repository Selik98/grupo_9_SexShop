const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const bcrypt = require('bcrypt');
//npm i bcryptjs
//npm i uuid

const model = {
    fileRoute: path.join(__dirname, '../data/users.json'),

    create: (userData) => {
        // buscar un usuario en userData, para que no se repita:
        const emailInUse = model.findByEmail(userData.email);

        if (emailInUse) {
            return ({
                error: 'Este email ya esta en uso :$'
            });
        }

        let users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

        const newUser = {
            id: uuid.v4(),
            ...userData
        };

        newUser.password = bcrypt.hashSync(newUser.password, 12);

        users.push(newUser);

        const usersJson = JSON.stringify(users);

        fs.writeFileSync(model.fileRoute, usersJson, 'utf-8');

        return newUser;
    },

    findByEmail: (email) => {
        const users = JSON.parse(fs.readFileSync(model.fileRoute, 'utf-8'));

        const coincidence = users.find(usuarioActual => usuarioActual.email === email);

        return coincidence || null;
    },

    findAll: () => {

    }
}

module.exports = model;