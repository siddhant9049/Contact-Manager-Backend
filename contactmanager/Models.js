const mongoose =require("mongoose")


const Contacts= new mongoose.Schema({
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String, required:true},
   
})


const model=mongoose.model("contacts",Contacts)

module.exports=model