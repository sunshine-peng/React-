"use strict";
//泛型
//any放弃了类型检查、传入什么、返回什么。比如传入number 类型必须返回number类型  传入string类型必须 返回string类型
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysqlDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = 'sds';
u.password = '6320';
var mysql = new MysqlDb();
mysql.add(u);
