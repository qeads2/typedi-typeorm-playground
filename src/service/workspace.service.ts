import {Inject, Service} from "typedi";
import {UserRepository} from "../repository/user.repository";
import {User} from "./domain/user";
import {WorkspaceRepository} from "../repository/workspace.repository";


@Service()
export class WorkspaceService {

    public constructor(
        private workspaceRepository: WorkspaceRepository
    ) {}

    public async initialize(name: string){
        return this.workspaceRepository.create(name)
    }
}

