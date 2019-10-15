const User = require('../models/User')
const bcrypt = require('bcryptjs')

const generateToken = require('../config/tokenJS')

module.exports = {
    async store(req,res){   
        const {email,password} = req.body

        const user = await User.findOne({email}).select('+password')

        if(!user)
            return res.status(400).json({error:'User not found'})

        if(!await bcrypt.compare(password,user.password))
            return res.status(400).json({error:'Invalid password'})

            user.password = undefined

        return res.status(200).send({user,token:generateToken({id:user.id})})
    }
}