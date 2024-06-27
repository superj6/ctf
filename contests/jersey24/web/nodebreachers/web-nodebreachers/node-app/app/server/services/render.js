exports.homeRoute = (req, res) => {
    res.render('index', {message: null, token: null})
}

exports.registerRoute = (req, res) => {
    res.render('register', {message: null, token: null})
}

exports.dashBoardRoute = (req, res) => {
   //username = req.user.name
    //res.render('dashboard', { name: username })
    res.render('dashboard')

}
