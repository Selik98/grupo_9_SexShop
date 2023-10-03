module.exports = (sequelize, DataTypes) => {
    const alias = "categorias";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: DataTypes.VARCHAR,
        },
        descripcion: {
            type: DataTypes.TEXT,
        }
    }

    const config = {
        tableName : "categorias",
        timestamps: false
    };

    const categorias = sequelize.define(alias, cols, config);

    return categorias;
}