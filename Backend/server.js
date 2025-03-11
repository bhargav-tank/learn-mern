import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import productRoutes from './routes/products.route.js'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/products',productRoutes)

console.log(process.env.MONGO_URL)

app.listen(5000, () => {
    connectDB()
    console.log("Server is Runnding on 5000 port")
})

// Pasword : // ox7Erlg7U4iJni23
// mongodb+srv://bhargavtank0805:ox7Erlg7U4iJni23@cluster0.jjlbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
