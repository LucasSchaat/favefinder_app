require('dotenv').config()
const express = require('express')
const cors = require('cors')
const massive = require('massive')
const session = require('express-session')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const faveCtrl = require ('./controllers/faveController')
const authCtrl = require ('./controllers/authController')

const app = express()

app.use(express.json())
app.use(cors())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 365
        }
    })
)

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('DB connected')
    app.listen(SERVER_PORT, () => console.log(`Server running on ${SERVER_PORT}`))
});

// AUTH ENDPOINTS
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

// FAVORITE POST ENDPOINTS
app.post('/api/fave', authCtrl.addFave)
// app.post('/api/fave', faveCtrl.addFave)
app.get('/api/fave/:postId', authCtrl.getFave)
// app.get('/api/fave/:id', faveCtrl.getFave)