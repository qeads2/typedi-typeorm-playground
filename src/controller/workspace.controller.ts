import {Express} from "express";
import {Container, Inject, Service} from "typedi";
import { UserService } from "../service/user.service";
import {WorkspaceService} from "../service/workspace.service";

@Service()
export class WorkspaceController {
    constructor(
        private workspaceService: WorkspaceService
    ) {}

    createWorkspace = async (req: Express.Request, res: Express.Response) => {
        const { name } = req.body;
        const workspace = await this.workspaceService.initialize(name)
        res.json(workspace)
    }

}