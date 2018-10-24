/**
 * @file user
 * @Author: yejiang
 * @Date: 2018-10-23 22:37:16
 * @Last Modified by: yejiang
 * @Last Modified time: 2018-10-23 23:00:08
 */

"use strict";
const setRes = require("../utils/setRes");

class User {
  static auth(req, res, next) {
    let userName = req.query.userName || req.body.userName || '';
    if (!userName) {
      setRes(res, 401, null, "VISITOR DISABLED");
    }
    if (req.path === `/grey/user`) {next(); return;}
    next();
  }

  static login(req, res, next) {
    setRes(res, 200, { name: "登陆成功" });
  }

  static signOut(req, res, next) {
    setRes(res, 200, { name: "退出成功" });
  }
}

module.exports = User;
