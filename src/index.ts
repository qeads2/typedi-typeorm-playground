import "reflect-metadata";
import {APIS} from "./apis";
import {Container} from "typedi";
import {UserController} from "./controller/user.controller";
import {WorkspaceController} from "./controller/workspace.controller";


const express = require('express')
const app = express()


app.use(express.json())

const userController = Container.get(UserController)
const workspaceController = Container.get(WorkspaceController)

const apiDefinition = new APIS(
    userController,
    workspaceController
)
Object.entries(apiDefinition.path).forEach(([path, endpoints]) => {
    endpoints.forEach((endpoint) => {
        app[endpoint.method](path, endpoint.handler)
    })
});


app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})