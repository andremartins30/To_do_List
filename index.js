require('dotenv').config();

const app = require('./server');
require('./db/conn');

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Conectado no http://localhost:${port}`)
})