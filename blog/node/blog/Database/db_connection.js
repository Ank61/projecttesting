let mysql = require('mysql2')
let dbproperties = require("./db_properties")

module.exports = {

    getConnection: () => {

        return mysql.createConnection(dbproperties)

    }

}