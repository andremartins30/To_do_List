const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/To_do_List')
    console.log('Conectado ao Mongooose!')
}

main().catch((err) => console.log(err))


module.exports = mongoose