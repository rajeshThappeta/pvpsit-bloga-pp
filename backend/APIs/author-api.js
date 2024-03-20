const exp=require('express')
const authorApp=exp.Router()
const bcryptjs=require('bcryptjs')

let authorsCollection;
authorApp.use((req,res,next)=>{
    authorsCollection=req.app.get('authorsCollection')
    next()
})

//create author
authorApp.post('/register',async(req,res)=>{
    //get author from req
    let newAuthor=req.body;
    //hash the password
    let hashedPassword=await bcryptjs.hash(newAuthor.password,6)
    //replace plain pw with hashed pw
    newAuthor.password=hashedPassword;
    //save to db
    await authorsCollection.insertOne(newAuthor)
    //send res
    res.send({message:"Author created"})
})


//login author
//add article
//delete or restore article
//read articles



module.exports=authorApp;