const express = require('express');
const logger = require('./middlewares/logger');
const loggerMiddleware = require('./middlewares/logger')
const authMiddleware = require('./middlewares/autothorizer');


const apiRoutes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8080;


//middlewares
app.use([authMiddleware, loggerMiddleware]);

//routes
app.get('/' , (req, res) => {
    const html = `
    <h1>Bienvenido ${req.user.name}</h1>
    <h2>HOME</h2>
    `;
    res.send(html)
})

app.get('/admin' , (req, res) => {
    res.send('<h1>ADMIN</h1>')
})

const conectedServer = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

conectedServer.on(`error`, e => console.log(e.message));
