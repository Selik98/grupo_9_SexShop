module.exports = (sequelize, DataTypes) => {
    const alias = "usuarios";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.VARCHAR,
        },
        apellido: {
            type: DataTypes.INTEGER,
        },
        fechaNacimiento: {
            type: DataTypes.DATE,
        },
        paisNacimiento: {
            type: DataTypes.VARCHAR,
        },
        email: {
            type: DataTypes.VARCHAR,
        },
        password: {
            type: DataTypes.VARCHAR,
        },
        admin: {
            type: DataTypes.TINYINT,
        },
        img: {
            type: DataTypes.VARCHAR,
        }
    }

    const config = {
        tableName : "usuarios",
        timestamps: false
    };

    const usuarios = sequelize.define(alias, cols, config);

    return usuarios;
}