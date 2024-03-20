const exp=require('express')
const userApp=exp.Router()

userApp.get('/test-user',(req,res)=>{
    res.send('from user api')
})



module.exports=userApp;