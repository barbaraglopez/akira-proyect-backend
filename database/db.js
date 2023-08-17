import {Sequelize} from 'sequelize'

const db = new Sequelize('usuarios_db','root','holaloles4',{
    host:'localhost',
    dialect:'mysql'
})

export default db