export const RegisterUser=(req,res,next)=>{

const{name,email,confirmPassword,password}=req.body;

if(!name|| !email||!confirmPassword||!password)
{
    const error = new error ("all fields required");
    error.statusCode(400)
    return next(error);
}
    // res.json({message:"user register done"})
}

export const LoginUser=(req,res)=>{
    res.json({message:"user login done"})
}

export const LogoutUser=(req,res)=>{
    res.json({message:"user logout done"})
}
export const UpdateUser=(req,res)=>{
    res.json({message:"user Update done"})
}