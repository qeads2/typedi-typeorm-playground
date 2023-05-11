const {DataSource} = require("typeorm");
const {User} = require("../src/service/domain/user");

module.exports = async () => {
    // Create a connection to the in-memory database
    return new DataSource({
        type: 'sqlite',
        database: ':memory:',
        entities: [User],
        synchronize: true,
        logging: false,
        keepAlive: true,
    }).initialize()
        .then((v) => {
            console.info("database connected.")
            return v
        })
        .catch((error) => console.error(error))
};