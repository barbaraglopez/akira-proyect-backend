import db from '../database/db.js';
import {DataTypes} from 'sequelize';

const userModel = db.define('usuarios',{
    nombre: {type: DataTypes.STRING},
    email:{type : DataTypes.STRING},
    telefono:{type:DataTypes.STRING},
})

export default userModel