"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
var typeorm_1 = require("typeorm");
var user_1 = require("../service/domain/user");
var workspace_1 = require("../service/domain/workspace");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: null,
    database: "test1",
    synchronize: true,
    logging: true,
    entities: [user_1.User, workspace_1.Workspace],
    subscribers: [],
    migrations: [],
});
exports.AppDataSource.initialize()
    .then(function () {
    console.info("database connected.");
})
    .catch(function (error) { return console.error(error); });
