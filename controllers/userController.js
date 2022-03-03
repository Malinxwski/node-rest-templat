const {models} = require('../database')
module.exports = {
    async get_list(req, res) {
        let users = await models.user.findAll()
        res.status(200).json(users)
    }

}





