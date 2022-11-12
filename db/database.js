const sqlite = require('sqlite3').verbose();
const { open } = require('sqlite')



async function checkUser(db ,username){
    await db.exec(`SELECT username FROM users
                        WHERE username = ${username}`).then(
        (data) => {
            return data === null;
        }
    )
}

async function insertUser(db,username, password){
    await db.exec(`INSERT INTO users VALUES (null, ${username}, ${password})`)
}
async function insertTheme(title, authorId){
    const db = await open({
        filename: '/tmp/database.db',
        driver: sqlite.Database
    })
    await db.exec(`INSERT INTO themes VALUES (null, ${title},${Date.now()},${authorId})`)
}

module.exports = {insertUser,checkUser}




// console.log(`App started on ${PORT} port`)
// app.listen(PORT, 'localhost',() => {
//     open({
//         filename: 'db/database.db',
//         driver: sqlite.Database
//     }).then(async (db) => {
//         await db.exec(`INSERT INTO users VALUES (null, "test2", "test2")`)
//     }).catch(
//         () => {
//             console.log("Такой пользователь уже есть")
//         }
//     )
// })
// }
