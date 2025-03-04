var express = require('express');
var router = express.Router();
// 引入数据库模块
const db = require('../utlis/db')
const jwt = require("../utlis/jwt")


/* 注册接口 */
router.post('/regest', async (req, res) => {
    try {
        /* 结构数据 */
        let { username = "", password = "", confirm = "", nickname = "" } = req.body


        /* 数据验证 */
        if (username === "" || password === "" || confirm === "" || nickname == "") {
            res.json({
                code: 601,
                msg: "缺少关键的参数",
                data: []
            })
            return
        }

        /* 判断二次密码 */
        if(password!==confirm){
            res.json({
                code: 604,
                msg: "二次密码不相同",
                data: []
            })
            return
        }

        /* 判断密码6-20包含字母，下划线，数字 */
        var pat = /^(\w){6,20}$/
        if (!pat.exec(password)) {
            res.json({
                code: 602,
                msg: "密码格式不对",
                data: []
            })
            return
        }

        /* 业务验证 */
        const result = await db.query("select * from users where username = ?", [username])
        //查询验证业务账号
        if (result[0].length > 0) {
            res.json({
                code: 603,
                msg: "账号已被占用",
                data: []
            })
            return
        }

        /* 注册用户 */
        const resul2 = await db.query("insert into users(username,password,nickname) values(?,?,?)", [username, password, nickname])
        if (true) {
            res.json({
                code: 200,
                msg: "注册成功",
                data: [{ username, password }]
            })
        }
    } catch (e) {
        console.log(e, "错误日志");
        res.json({
            code: 200,
            msg: "系统繁忙",
            data: []
        })
    }
})
/*
  登陆接口 
*/
router.post("/login", async (req, res) => {
    // 结构参数
    let { username = "", password = "" } = req.body
    // 数据验证
    if (username === "" || password === "") {
        res.json({
            code: 200,
            msg: "缺少关键的参数",
            data: []
        })
        return
    }

    const result1 = await db.query("select * from users where username = ?", [username])
    if(result1[0][0].password!=password){
        res.json({
            code:601,
            msg:"密码不正确",
            data:[]
        })
        return
    }

    /* 登陆 */

    const result = await db.query("select * from users where username = ? and password = ?", [username, password])

    // 当前登陆的永华
    const user = result[0][0]
    console.log(user);
    // 生成令牌
    const token = await jwt.sign(user)
    console.log(token);
    res.json({
        code: 200,
        msg: '登陆成功',
        data: [user, { token }]
    })
})

/* 找回密码 */
router.post("/find", async (req, res) => {
    // 结构参数
    let { username = "", password = "", passwords = "" } = req.body
    // 数据验证
    if (username === "" || password === "" || passwords === "") {
        res.json({
            code: 605,
            msg: "缺少关键的参数",
            data: []
        })
        return
    }
    /* 业务验证 */
    const result = await db.query("select * from users where username = ?", [username])
    //查询验证业务账号
    if (result[0].length <= 0) {
        res.json({
            code: 604,
            msg: "账号不存在",
            data: []
        })
        return
    } else {
        //业务实现
        const result2 = await db.query("update users set password = ? where username=?", [password, username])
        res.json({
            code: 200,
            msg: "修改成功",
            data: [username, password]
        })
    }

})

/* 修改个人信息 */
router.post("/change",async(req,res)=>{
      // 结构参数
      let { id = "",nickname="",phone="",qq="",constellation=""} = req.body
      const result = await db.query("update users set nickname=?,phone=?,qq=?,constellation=? where id=?",[nickname,phone,qq,constellation,id])
      res.json({
        code:200,
        msg:"修改成功",
        data:[id,nickname,phone,qq,constellation]
      })
})

/* 旅游足迹 */
router.post("/order",async(req,res)=>{
    let { id = ""} = req.body
    const result=await db.query("select * from slist where id=?",[id])
    res.json({
        code:200,
        msg:"查询成功",
        data:[result]
    })
})
module.exports = router;
