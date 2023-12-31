const express =require('express');
const app=express();
const path=require('path');
const PORT=process.envCODE || 3000;

app.use(express.json());
const connectDB=require('./config/db');
connectDB();
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use('/api/files',require('./routes/files'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})