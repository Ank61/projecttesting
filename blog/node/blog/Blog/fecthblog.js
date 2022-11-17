let express = require('express')
let router = express.Router()
let conn = require("../Database/db_connection")

let connection = conn.getConnection()
connection.connect()

//create rest api

router.get("/", (req, res) => { 
    connection.query("select * from blogs order by id desc;",(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }
    })
})
router.post("/same", (req, res) => { 
    const title =req.body.title;
    const tag =req.body.tag;
    connection.query(`select * from blogs where title='${title}' and label='${tag}'`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else if(recordsArray.length>0){
            res.json("exist")
        }
        else if (recordsArray.length==0)
        {
            console.log('Data sent')
            res.json("new")
            
        }
    })
})
router.get("/mostcommented", (req, res) => { 
    connection.query("SELECT blogs.* , COUNT(comments.blogid) AS num_comments FROM comments INNER JOIN blogs ON comments.blogid = blogs.id GROUP BY blogs.id ORDER BY num_comments DESC;",(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }
    })
})

router.post("/myblogs", (req, res) => { 
    const user =req.body.user;
    const email =req.body.email;
    connection.query(`select * from blogs where user='${user}' order by id desc`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }
    })
})
router.get("/:id", (req, res) => { 
    const idd =req.params.id;
    connection.query(`select * from blogs where id=${idd}`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }
    })
})

router.get("/tag/:label", (req, res) => { 
    const label =req.params.label;
    connection.query(`select * from blogs where label like '%${label}%'`,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }
    })
})

router.post("/post", (req, res) => { 
    const title =req.body.title;
    const  description=req.body.description;
    const tag =req.body.tag;
    const user =req.body.user;
    const img =req.body.img;
    connection.query(`insert into blogs (title,description,label,user,img) values('${title}','${description}','${tag}','${user}','${img}') `,(err, recordsArray)=>{
        if(err)
            res.json({'message':'error'+err})
        else
        {
            console.log('Data sent')
            res.json('Inserted')
        }
    })
})
router.post("/search", (req, res) => { 
    const search =req.body.search;
    connection.query(`select * from blogs where title like'${search}%' or user like'${search}' or label like'${search}%' or country like'${search}%' `,(err, recordsArray)=>{
        if(err)
            res.json('message')
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }})
})
router.post("/search/users", (req, res) => { 
    const search =req.body.search;
    connection.query(`select * from users where name like'${search}%' `,(err, recordsArray)=>{
        if(err)
            res.json('message')
        else
        {
            console.log('Data sent')
            res.json(recordsArray)
        }})
})

module.exports = router

