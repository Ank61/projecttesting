let express = require('express')

let bodyparser = require('body-parser')
let cors = require('cors')

let app = express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.use(cors()) 
////////importing all files for routing////////////////////
let fetch = require('./Blog/fecthblog')
let login = require('./Auth/Login')
let register =require('./Auth/register')
let comment =require('./Comment/comment')
let friendrequest =require('./FriendReq/friendsrequest')
let globalUser =require('./GlobalUser/globaluser')
///////////creating routing ///////////////////////////////
app.use('/blog',fetch)
app.use('/login',login)
app.use('/register',register)
app.use('/comment',comment)
app.use('/friendrequest',friendrequest)
app.use('/globaluser',globalUser)

app.listen(8080)
console.log('Server listening port no 8080')