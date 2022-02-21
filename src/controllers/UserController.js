const User =  require('../model/User')

module.exports = {
    async store (req, res){
        const {name, email, idade} = req.body

        const user = await User.create({name, email, idade})

        return res.json(user)
    }
}