import { UserController } from "./controller/user.controller";
import {WorkspaceController} from "./controller/workspace.controller";
import {Express} from "express";
import {Container, Service} from "typedi";
type ENDPOINT = {
    method: string;
    handler: (req: Express.Request, res: Express.Response) => void
}
export type API_ENDPOINTS = {
    [path in string]: ENDPOINT[]
}
@Service()
export class APIS {
    constructor(
        private userController: UserController,
        private workspaceController: WorkspaceController,
    ) {}

    public path: API_ENDPOINTS =  {
        '/': [
            {
                method: 'get',
                handler: (req, res) => {
                    res.send('Hello World')
                }
            }
        ],
        '/api/users': [
            {
                method: 'get',
                handler: this.userController.getAllUsers
            },
            {
                method: 'post',
                handler: this.userController.signUp
            },
        ],
        '/api/workspaces': [
            {
                method: 'post',
                handler: this.workspaceController.createWorkspace
            }
        ]
    }
}