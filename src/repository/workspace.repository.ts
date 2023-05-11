import {Container, Inject, Service} from "typedi";
import {User} from "../service/domain/user";
import {AppDataSource} from "../config/data-source";
import {Repository} from "typeorm";
import {Workspace} from "../service/domain/workspace";
@Service()
export class WorkspaceRepository {
    // private user = AppDataSource.getRepository(User)

    constructor(
        private workspace = AppDataSource.getRepository(Workspace)
    ) {}


    public async create(name: string): Promise<Workspace> {
        return this.workspace.save({
            name,
        })
    }
}

