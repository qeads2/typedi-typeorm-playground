"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var apis_1 = require("./apis");
var typedi_1 = require("typedi");
var user_controller_1 = require("./controller/user.controller");
var workspace_controller_1 = require("./controller/workspace.controller");
var express = require('express');
var app = express();
app.use(express.json());
var userController = typedi_1.Container.get(user_controller_1.UserController);
var workspaceController = typedi_1.Container.get(workspace_controller_1.WorkspaceController);
var apiDefinition = new apis_1.APIS(userController, workspaceController);
Object.entries(apiDefinition.path).forEach(function (_a) {
    var path = _a[0], endpoints = _a[1];
    endpoints.forEach(function (endpoint) {
        app[endpoint.method](path, endpoint.handler);
    });
});
app.listen(3000, function () {
    console.log("Example app listening on port 3000");
});
