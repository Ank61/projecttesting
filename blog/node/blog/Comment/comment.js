let express = require('express')
let router = express.Router()
let conn = require("../Database/db_connection")

let connection = conn.getConnection()
connection.connect()

//to access title comment we have to click on the blog and then get that blogs title

router.get("/:blogid", (req, res) => { 
    const blogid = req.params.blogid
    connection.query(`select * from comments where blogid=${blogid} order by id desc`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Comments sent')
            res.json(recordsArray)
        }
    })
})

router.post("/postcomment", (req, res) => { 
    let comment = req.body.comment;
    let user = req.body.user;
    let blogid = req.body.blogid
    connection.query(`insert into comments (comment,user,blogid) values('${comment}','${user}','${blogid}') `,(err, recordsArray)=>{
        if(err)
            res.json('Could not insert comment at that blog')
        else
        {
            console.log('Comments sent')
            res.json('comment insert')
        }
    })
})
module.exports =router