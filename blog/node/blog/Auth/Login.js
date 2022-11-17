let express = require('express')
let router =express.Router()
let conn = require("../Database/db_connection")
let connection =conn.getConnection()
connection.connect()
router.post("/",(req,res)=>{
    let email =req.body.email;
    let password = req.body.password;
    connection.query(`select * from users where email ='${email}' and password ='${password}'`,(err,array)=>{
        if(err || array <= 0){
            res.json('Failed')
        }
        else{
            console.log('Logged checked')
            res.json(array)
        }
    })
})
module.exports =router