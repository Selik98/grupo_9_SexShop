module.exports = (sequelize, DataTypes) => {
    const alias = "productos";

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo:{
            type: DataTypes.VARCHAR
        },        
        descripcion: {
            type: DataTypes.TEXT
        },
        precio: {
            type: DataTypes.INTEGER
        },
        stock: {
            type: DataTypes.INTEGER
        },        
        categorias: {
            type: DataTypes.TEXT
        },        
        oferta: {
            type: DataTypes.TINYINT
        },
        img: {
            type: DataTypes.VARCHAR
        },
        fecha: {
            type: DataTypes.DATE
        } 
    };
    
    const config = {
        tableName : "productos",
        timestamps: false
    };

    const productos = sequelize.define(alias, cols, config);

    return productos;
}