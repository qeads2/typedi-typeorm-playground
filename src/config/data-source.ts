import {DataSource} from "typeorm";
import {User} from "../service/domain/user";
import {Workspace} from "../service/domain/workspace";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: null,
    database: "test1",
    synchronize: true,
    logging: true,
    entities: [User, Workspace],
    subscribers: [],
    migrations: [],
})

AppDataSource.initialize()
.then(() => {
    console.info("database connected.")
})
.catch((error) => console.error(error))