import {Inject, Service} from "typedi";
import {UserRepository} from "../repository/user.repository";
import {User} from "./domain/user";


@Service()
export class UserService {
    public constructor(
        private userRepository: UserRepository
    ) {}

    public async getUsers(): Promise<User[]> {
        return this.userRepository.findAll()
    }

    public async signUp(name: string, email: string, password: string) {
        await this.userRepository.save(name, email, password)
    }
}

