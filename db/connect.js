const mongoose = require('mongoose');

db = async () => {
    try{
        await mongoose.connect("mongodb+srv://pinfin:pinfin@cluster0.n3jsjtf.mongodb.net/");
        console.log('Db connection established.')
    }catch(error){
        console.log('DB Error: ', error);
    }
}

module.exports = db;