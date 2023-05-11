import {Container, Inject, Service} from "typedi";
import {User} from "../service/domain/user";
import {AppDataSource} from "../config/data-source";
@Service()
export class UserRepository {
    // private user = AppDataSource.getRepository(User)

    constructor(
        private user = AppDataSource.getRepository(User)
    ) {}


    public async findAll(): Promise<User[]> {
        return this.user.find()
    }

    public async save(name: string, email: string, password: string): Promise<User> {
        const newUser = new User()
        newUser.name = name
        newUser.email = email
        newUser.password = password
        return this.user.save(newUser)
    }
}

