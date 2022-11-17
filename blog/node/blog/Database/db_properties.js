require('dotenv').config()

let local = process.env.LOCAlHOSTT;
let user = process.env.USERNAME;
let password = process.env.PASSWORD;
let database = process.env.DATABASE; 
module.exports = {

    host : local,

    user : user,

    password : password,

    database : database

}

// console.log("working...",process.env.LOCALHOST)
// const port = process.env.PORT;
// console.log("Port is ",port)
// console.log("Working", typeof(local) , user ,password , database)