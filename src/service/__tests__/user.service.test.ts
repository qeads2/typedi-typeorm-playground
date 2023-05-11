import {UserService} from "../user.service";
import {UserRepository} from "../../repository/user.repository";
import {User} from "../domain/user";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const testDataSource = require("../../../test/setup.js")

describe('UserService', () => {
    let userService: UserService;
    let userRepository: UserRepository;

    beforeAll(async () => {
        userRepository = new UserRepository((await testDataSource()).getRepository(User));
        userService = new UserService(userRepository);
    });
    afterAll(async () => {
        await (await testDataSource()).destroy()
    });


    describe('getUsers', () => {
        it('should return the users with array type', async () => {

            const result = await userService.getUsers();

            expect(result).toEqual([]);
        });
    });
});
