import "./config/prisma"
import "dotenv/config"
import app from "./app";

const PORT = process.env.PORT

app.listen(PORT, ()=> {
    console.log(`Application Is Running On http://localhost:${PORT}`)
})