const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config({path:'./config.env'})

const app=require('./app')
// console.log(process.env);

mongoose.connect(process.env.LOCAL_CONN_STR).then((conn)=>{
    console.log("conn success");
}).catch((err)=>{
    console.log(err.message);
})

const port=process.env.PORT|| 9000;
app.listen(port,()=>{
    console.log(`server running..........`)
})
