const testDataSource = require("./setup.js");


module.exports = async () => {
    const dataSource = await testDataSource()
    await dataSource.destroy()
};
