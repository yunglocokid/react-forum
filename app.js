const express = require('express')

const {openDb} = require("./db/opendb")

const app = express()


app.use('/login', require('./routes/login.routes'))

const PORT = 4000

async function start(){
    try{

        console.log(`App started on ${PORT} port`)
        app.listen(PORT, 'localhost',() => {
            openDb().then(async (db) => {
                await db.exec(`INSERT INTO users VALUES (null, "test2", "test2")`)
            }).catch(
                () => {
                    console.log("Такой пользователь уже есть")
                }
            )
        })
    }
    catch(err){
        console.error(err)
        process.exit(1)
    }
}


start()
