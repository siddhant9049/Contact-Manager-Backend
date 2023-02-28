const express= require("express")
const mongoose=require("mongoose")
const port=5000
const app=express()
app.use(express.urlencoded())
app.use(express.json())
mongoose.connect("mongodb://localhost:27017/testaroo")


const Contacts=require("./Models")

mongoose.connection.once("open",()=>{
    console.log("connected")

}).on("connectionerr",(err)=>{
    console.log(err)
})




app.listen(port,()=>{
    console.log(`app listenoing to ${port} `)
})




app.post("/v1/contacts",async(req,res)=>{
    try{
        const contact=await Contacts.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            phone:req.body.phone,

        })
        res.json({
            status:"success",
            contact
        })
    }catch(e){
        res.status(400).json({
            status:`error ${e} ` ,
            e
        })
    }
})


app.get("/v1/contacts",async(req,res)=>{
try{
    const contact=await Contacts.find()
    res.json({
        status:"success",
        contact
    })
}catch(e){
    res.status(400).json({
        status:"error",
        e
    })
}
})

app.get("/v1/contacts/:id",async(req,res)=>{
    try{
        const contact=await Contacts.findOne({_id:req.params.id})
        res.json({
            status:"success",
            contact
        })
    }catch(e){
        res.status(400).json({
            status:"error",
            e
        })
    }
})

app.delete("/v1/contacts/:id",async(req,res)=>{
    try{
        const contact=await Contacts.deleteOne({_id:req.params.id})
        res.json({
            status:"success",
            contact
        })
    }catch(e){
        res.status(400).json({
            status:"error",
            e
        })
    }
})

app.put("/v1/contacts/:id",async(req,res)=>{
    try{
        const contact=await Contacts.updateOne({ _id:req.params.id,},req.body)
        res.json({
            status:"success",
            contact
        })
    }catch(e){
        res.status(400).json({
            status:"there is no contact in that id",
            e
        })
    }
})


app.patch("/v1/contacts/:id",async(req,res)=>{
    try{
        const contact=await Contacts.updateOne({ _id:req.params.id,},req.body)
        res.json({
            status:"success",
            contact
        })
    }catch(e){
        res.status(400).json({
            status:"there is no contact in that id",
            e
        })
    }
})