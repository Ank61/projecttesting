let express = require('express')
let router = express.Router()
let conn = require("../Database/db_connection")

let connection = conn.getConnection()
connection.connect()

//////////to get the friends request
router.post("/", (req, res) => { 
    let user=req.body.user;
    connection.query(`select * from friends where requesto='${user}'and approved='access'`,(err,array)=>{
        if(array.length<5){
            connection.query(` select * from users as p join friends as q on p.name=q.requestfrom where requesto='${user}' and approved is null`,(err, recordsArray)=>{
                if(err)
                    res.json("error")
                else
                {
                    console.log('Recieve request')
                    res.json(recordsArray)
                }
            })   
        }
        else{
            console.log("alreadyafriend")
            res.json("alreadyafriend")
        }
    })
})
///////to post the friends request 
router.post("/request", (req, res) => { 
    const requestfrom =req.body.requestfrom;
    const requestto=req.body.requestto;
    connection.query(`select * from friends where (requestfrom='${requestfrom}' and requesto='${requestto}') or (requestfrom='${requestto}' and requesto='${requestfrom}');`,(err,recordsArray)=>{
        if(err)
            res.json('error')
        else if(recordsArray.length<1)
        {
            connection.query(`insert into friends (requestfrom,requesto) values('${requestfrom}','${requestto}')`,(err, recordsArray)=>{
                if(err)
                    res.json('failed')
                else
                {
                    console.log('Request sent')
                    res.json("sent")
                }
            })
        }
        else {
            res.json("sentalready")
        }
    })
})
///////to approve the request ///////////
//////if approve is clicked then approve////
/////restfrom will have access //////
router.post("/decline", (req, res) => { 
    const requestto=req.body.requestto;
    connection.query(`delete from friends where requesto='${requestto}'`,(err, recordsArray)=>{
        if(err)
            res.json('error')
        else
        {
            console.log('approval check')
            res.json("decline")
        }
    })
})
router.post("/approve", (req, res) => { 
    const requestto=req.body.requestto;
    const requesfrom =req.body.requestfrom;
    connection.query(`update friends set approved ='access' where requesto='${requestto}' and requestfrom='${requesfrom}'`,(err, recordsArray)=>{
        if(err)
            res.json('error')
        else
        {
            console.log('approval check')
            res.json("Approved")
        }
    })
})

module.exports = router

