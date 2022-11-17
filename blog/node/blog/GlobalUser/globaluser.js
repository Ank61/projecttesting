const { response } = require('express')
let express = require('express')
let router = express.Router()
let conn = require("../Database/db_connection")

let connection = conn.getConnection()
connection.connect()

//create rest api
router.post("/loggedin", (req, res) => { 
    const presentUser = req.body.presentUser;
    connection.query(` select * from users where not name='${presentUser}'`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Global User sent except logged in ')
            res.json(recordsArray)
        }
    })
})
router.post("/checkfriend", (req, res) => { 
    const presentUser = req.body.presentUser;
    connection.query(`select * from friends where requestfrom='${presentUser}'`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else if (recordsArray.length>0){
            res.json("havesent")
        }
        else{
            console.log('Global User sent except logged in ')
            res.json("notsent")
        }
    })
})
router.post("/sentto", (req, res) => { 
    const presentUser = req.body.presentUser;
    connection.query(`select * from friends as p join users as q on p.requesto=q.name where requestfrom='${presentUser}';`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else if (recordsArray.length>0){
            res.json(recordsArray)
        }
        else{
            console.log('Global User sent except logged in ')
            res.json("notsent")
        }
    })
})

router.post("/", (req, res) => { 
const names = req.body.name
const email = req.body.email
    connection.query(`select * from users where name='${names}' and email='${email}'`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Global User sent')
            res.json(recordsArray)
        }
    })
})
router.get("/all", (req, res) => { 
        connection.query(`select * from users`,(err, recordsArray)=>{
            if(err)
                res.json({'message':'error'+err})
            else
            {
                console.log('Global User sent')
                res.json(recordsArray)
            }
        })
    })
    router.post("/totalfriend", (req, res) => { 
        const requestto=req.body.requestto;
        connection.query(`select count(id) as friends from friends where (requesto='${requestto}' or requestfrom='${requestto}') and approved='access';`,(err, recordsArray)=>{
            if(err)
                res.json({'message':'error'+err})
            else
            {
                console.log('Global User sent')
                res.json(recordsArray)
            }
        })
    })
    router.post("/friendname", (req, res) => { 
        const requestfrom=req.body.requestfrom;
        connection.query(`select requesto as requesto from friends where requestfrom='${requestfrom}' and approved='access';`,(err, recordsArray)=>{
            if(err){
                res.json({'message':'error'+err})
            }
            else if (recordsArray.length!==0){
                console.log('Global User sentlakaodfn')
                res.json(recordsArray)
                console.log(recordsArray)
            }
            else
            {   connection.query(`select requestfrom as requesto from friends where requesto='${requestfrom}' and approved='access';`,(err, recordsArray2)=>{
                if(recordsArray2.length===0)
                    res.json('Nofriends')
                
                else if(err){
                    res.json("error")
                }
                 else
                {
                    console.log('Exist request from')
                    res.json(recordsArray2)
                }
            })                
            }
        })
    })

module.exports = router

