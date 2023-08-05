const mongoose=require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);

const mongoDB=async ()=>{
    await mongoose.connect(process.env.MONGO_CONNECTION_URL,{useNewUrlParser:true},async(err,result)=>{
        if(err) console.log(err);
        else{
            console.log('Database connected');
        }
    })
}

module.exports=mongoDB;


