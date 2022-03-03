const {Sequelize} = require('sequelize')

const modelDefiners = [
    require('./models/user.model')
]

const sequelize = new Sequelize("olymp", "root", "root", {
    dialect: "mysql",
    host: "localhost",
    port: '8889',
    define: {
        timestamps: false
    }
})
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}
module.exports = sequelize;

