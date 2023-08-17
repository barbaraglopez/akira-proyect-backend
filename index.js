import express from 'express'
import cors from 'cors'
import db from './database/db.js'
import router from './routes/routes.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', router)

const port = process.env.PORT || 8000; 

app.get('/',(req,res)=>{
    res.send('La pagina de inicio')
})

try{
    await db.authenticate()
    console.log('conexion exitosa')
}catch{
    console.log('error')
}

app.listen(port, ()=>{
    console.log(`port running in http>//localhost:${port}`);
})