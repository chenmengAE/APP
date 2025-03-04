/* 令牌处理模块 */

const jwt = require('jsonwebtoken')

const privateKey = "secret 123"

async function sign(user){
    return await jwt.sign({
        data:user
    },privateKey,{ expiresIn:"1h"})
}

async function verify(token){
    try {
        var decoded = await jwt.verify(token,privateKey)
        console.log(decoded.foo);
    } catch (e) {
        console.log(e);
        return null
    }
}
/* 导出多个需要对象 */
module.exports = {
    sign,
    verify
}