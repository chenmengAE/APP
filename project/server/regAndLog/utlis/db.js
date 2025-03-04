/* 数据库访问的一个模块 */

const mysql = require('mysql2')

const { mysql_conf } = require("../conf/golbal.json")

const pool = mysql.createPool({
    host: mysql_conf.host,
    port: mysql_conf.post,
    user: mysql_conf.user,
    password: mysql_conf.password,
    database: mysql_conf.database,
    connectionLimit: 10
})
/* 导出模块 */

module.exports = pool.promise()