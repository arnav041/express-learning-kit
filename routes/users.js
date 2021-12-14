const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
// router.use(logger)
// this router is same as app in server.js
// ex. const app = express();

router.get('/', (req, res) => {
    res.send('User list')
})

router.get('/new', (req, res) => {
    res.render('users/new', { firstName: "Opera" })
})
router.post('/', (req, res) => {
    // res.send('Created User')
    // console.log(req.body.firstName)
    // we cannt access body directly just like we did above, w use  urlencoded Middleware
    console.log(req.body.firstName)
    res.send("hide")
})
// make sure to pass dynamic routes always in the end
router.get('/:id', (req, res) => {
    res.send(`User with id:  ${req.params.id}`)
})

router
    .route('/:id')
    .get((req, res) => {
        res.send(`Get User with id:  ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with id:  ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with id:  ${req.params.id}`)
    })

// always call middleware at the top level of app
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router