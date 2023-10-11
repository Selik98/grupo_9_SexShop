const db = require('../../../db');

module.exports = {
    getUser: async (req, res) => {
        try {
            let statusCode = 200;
            const user = await db.User.findAll();

            statusCode = user.length > 0 ? statusCode : 204;

            const response = {
                data: user,
                meta: {
                    status: statusCode,
                    path: req.baseUrl,
                    quantity: user.length,
                    query: req.query
                }
            }

            res.status(statusCode).json(response);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Server error', code: '500'});
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await db.User.findByPk(req.params.id);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.json({error: 'Server error', code: '504'});
        }
    },
    postClub: async (req, res) => {
        try {
            const data = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            fechaNacimiento: req.body.fechaNacimiento,
            paisNacimiento: req.body.paisNacimiento,
            email: req.body.email,
            password: req.body.password,
            category: req.body.category,
            img: req.file.filename,
            }
            const newUser = await db.User.create(data);

            res.status(201).json(newUser);
        } catch (error) {
            console.error(error);
        }
    }
}