const express = require('express')
var cors = require('cors')
const dotenv = require('dotenv').config()
const multer = require('multer')
const path = require('path')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const app = express()
const connection = require('./db.js')
const { ObjectId } = require('mongodb')


app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))






app.listen(4545,()=>{
    connection(app).then(()=>{
        console.log('start...')
    })
})


// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'public/images')
//     },
//     filename:(req,file,cb)=>{
//         cb(null,file.filename + "_" + Date.now() + path.extname(file.originalname))
//     }
// })
//  const upload = multer({
//     storage:storage
//  })

app.post('/signUp',async (req,res)=>{
    const {email,password,name,} = req.body
    const data = {
        name:name,
        email:email,
        password:password,
    }
    try {
        const collection = await app.locals.db.collection('admins')
        const user = await collection.findOne({email:email})
        if(user){
            return res.json({error:'eamil exists'})
        }
        if(!name){
            return res.json({
                error:'name is require'
            })
        }
        if(!password || password.length < 8) {
            return res.json({
                error:'Password is require and at least 8 carachters'
            })
        }
        const newUser = collection.insertMany([data])
        return res.json(newUser)
    } catch (error) {
        console.log(error)
    }
    
})

app.post('/logIn',async (req,res)=>{
    
    
    try {
        const {email,password} = req.body
        const data = {
            email:email,
            password:password,
        }
        // console.log(data)
        const collection = await app.locals.db.collection('admins')
        const user = await collection.findOne({email:data.email})
        if(!user){
            return res.json({
                error:'No user found'
            })
            
        }
        if(user.password === data.password){
            const token = jwt.sign({email:user.email,id:user._id,name:user.name},process.env.JWT_SECRET,{expiresIn:"1h"})
            return res.cookie('token',token,{ httpOnly: true, sameSite: 'None', secure: true }).json(user)
            
        }
        if(user.password != password){
            res.json({
                error:"Password doesn't match"
            })
        }
        
    } catch (error) {
        console.log(error)
    }
    
})


app.get('/profile',(req,res)=>{
    const {token} = req.cookies
    if(token) {
        jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
            if(err) throw err;
            return res.json(user)
        })
    }else{
        return res.json(null)
    }
})

app.get('/logout',(req,res)=>{
    try {
        res.clearCookie('token',{ httpOnly: true, sameSite: 'None', secure: true })
        console.log("Cookie cleared");
        res.status(200).json({ success: true, message: 'User logged out successfully' })
    } catch (error) {
        console.log(error)
    }
})



app.post('/userProfile',async (req,res)=>{
    try {
        const {name,email,currPassword,newPassword} = req.body
         const data = {
            name:name,
            email:email,
            currPassword:currPassword,
            newPassword:newPassword
        }
        const collection = await app.locals.db.collection('admins')
        const userEmail = await collection.findOne({email:email})
        const user = await collection.findOne({password:data.currPassword})
        console.log(user)
        
        if(userEmail) {
            return res.json({error:'eamil exists'})
        }
        if(!name){
            return res.json({
                error:'name is require'
            })
        }
        if(!user) {
            return res.json({
                error:'Wrong Current Password'
            })
        }
        if(!currPassword || !newPassword) {
            return res.json({
                error:'Password required'
            })
        }
        const _id = new ObjectId(user._id)
        console.log(_id)
        const newUser = await collection.replaceOne({_id},{name:name,email:email,password:newPassword})
        console.log(newUser)
        return res.json(newUser)
    } catch (error) {
        console.log(error)
    }
})