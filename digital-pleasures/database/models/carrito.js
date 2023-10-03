module.exports = (sequelize, DataTypes) => {
    const alias = "carrito";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: {
            type: DataTypes.VARCHAR,
            autoIncrement: true
        },
        id_productos: {
            type: DataTypes.INTEGER,
            autoIncrement: true
        },
        cantidadProductos: {
            type: DataTypes.INTEGER,
        },
        precioTotalArticulo: {
            type: DataTypes.INTEGER,
        },
        precioTotal: {
            type: DataTypes.INTEGER,
        }
    };

    const config = {
        tableName : "carrito",
        timestamps: false
    };

    const carrito = sequelize.define(alias, cols, config);

    return carrito;
}