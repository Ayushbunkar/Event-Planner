import mongoose from "mongoose";
const userSchema =mongoose.Schema({
name:{
    type:String,
    require:true,
},
email:{
    type:String,
    unique:true,
},

password:{
    type:String,
    require:true,
},

confirmPassword:{
    type:String,
    require:true,
},

photo:{
    type:String,
    require:true,
    default:"",
}
},

{timestamps:true}
);

const User =mongoose.model("user",userSchema);
export default User;


