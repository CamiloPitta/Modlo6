function authMiddleware (req, res, next) {
    if (!req.session.loggedUser){
        res.redirect('/login')
    }
    else{
        next()
    }
}

module.exports = authMiddleware