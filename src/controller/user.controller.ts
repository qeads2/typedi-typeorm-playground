import {Express} from "express";
import {Container, Inject, Service} from "typedi";
import { UserService } from "../service/user.service";
@Service()
export class UserController {
    constructor(
        private userService: UserService
    ) {}

    signUp = async (req: Express.Request, res: Express.Response) => {
        const { name, email, password } = req.body;
        await this.userService.signUp(name, email, password);
        res.json(true)
    }
    getAllUsers = async (req: Express.Request, res: Express.Response) => {
        const users = await this.userService.getUsers()
        res.json(users)
    }

}
// export const userApi = (req: Express.Request, res: Express.Response) => {
//     console.log(req)
//     res.json()
// }