let express = require('express')
let router =express.Router()
let conn = require("../Database/db_connection")
let connection =conn.getConnection()
connection.connect()
router.post("/",(req,res)=>{
    let name =req.body.name;
    let email =req.body.email;
    let password = req.body.password;
    let bio = req.body.biography;
    connection.query(`select email from users where email='${email}'`,(err,array)=>{
        if(array.length==0){
            connection.query(`insert into users (name ,email,password,bio) values('${name}','${email}','${password}','${bio}')`,(err,array)=>{
                if(err){
                    console.log('error for error')
                    res.json('failed')
                }
                else{
                    console.log('Logged checked')
                    res.json('Successfull')
                }
            })
        }
        else if(err){
            console.log('error occured')
            res.json('Failed')
        }
        else{
            console.log('user checked')
            res.json('user')
        }
    }) 
})
router.post("/forgotpassword",(req,res)=>{
    let email =req.body.email;
    let password = req.body.password;
            connection.query(`update users set password='${password}' where email='${email}'`,(err,array)=>{
                if(err){
                    console.log('error for error')
                    res.json('failed')
                }
                else{
                    console.log('Logged checked')
                    res.json('Successfull')
                }
            })
        })
        router.post("/newname",(req,res)=>{
            let name =req.body.name;
            let id =req.body.id;
                    connection.query(`update users set name='${name}' where id='${id}'`,(err,array)=>{
                        if(err){
                            console.log('error for error')
                            res.json('failed')
                        }
                        else{
                            console.log('Logged checked')
                            res.json('Successfull')
                        }
                    })
                })
router.post("/newBio",(req,res)=>{
        let bio =req.body.bio;
        let id =req.body.id;
        connection.query(`update users set bio='${bio}' where id='${id}'`,(err,array)=>{
        if(err){
            console.log('error for error')
                res.json('failed')
            }
            else{
                console.log('Logged checked')
                res.json('Successfull')
                }
            })
})

router.post("/newPassword",(req,res)=>{
    let password =req.body.password;
    let id =req.body.id;
    connection.query(`update users set passwword='${password}' where id='${id}'`,(err,array)=>{
    if(err){
        console.log('error for error')
            res.json('failed')
        }
        else{
            console.log('Logged checked')
            res.json('Successfull')
            }
        })
})
module.exports =router