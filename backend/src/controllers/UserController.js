const User = require('../models/User')

const generateToken = require('../config/tokenJS')


module.exports = {
    async store(req,res){
        const {email} = req.body
        try{
        let user = await User.findOne({email})

        if(user){
            return res.json({error:'user already exist!'})
        }

         user = await User.create(req.body)
         user.password = undefined


            return res.json({user,token:generateToken({id:user.id})})
    }catch(err){
        return res.status(400).send({error:'Registration failed'})
    }
}
}