/*o middleware vai atuar entre a requisicai na rota e o controller,sendo o controller
chamado apos o metodo next do middleware ser chamado,caso o next nao seja chamado nossa requisicao 
parará aqui.
*/
const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req,res,next) => {
    const authHeader =  req.headers.authorization

    if(!authHeader)
    return res.status(401).send({error:'No token provided!'})

    const parts = authHeader.split(' ')

    if(!parts.length === 2)
    return res.status(401).send({error:'Token error'})

    const [scheme , token] = parts

    if(!/^Bearer$/i.test(scheme))
    return res.status(401).send({error:'Token malformatted'})

    jwt.verify(token,authConfig.secret,(error,decoded) =>{
        if(error) return res.status(401).send({error:'Invalid Token!'})

        req.userId = decoded.id

        return next()

    })



}