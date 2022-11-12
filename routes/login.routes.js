const {Router} = require('express')
const router = Router()

const {checkUser,insertUser} = require("../db/database")

const {openDb} = require("../db/opendb")



router.post('/api/register', async (req,res) => {
    try{
        const {username, password} = req.body

        const tempUser = await openDb()
            .then(async db => {
                await checkUser(db,username)
            }).then(async db =>
                await insertUser(db, username,password)
            ).catch(
                () => {
                    console.log("Такой пользователь уже есть")
                }
            )

    } catch (e){
        res.status(500).json({message: `Ошибка: ${e}`})
    }
})

router.post('/', async (req,res) => {

})


module.exports = router
