import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom"
import {login as authLogin, login} from "../store/authSlice"
import {Button, Input} from "./index"
import { useDispatch } from 'react-redux';
import authService from '../appwrite/auth_service';
import {useForm} from "react-hook-form"


function SignupForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error,setError] = useState("");
    const  {register, handleSubmit} = useForm();

    const signup = async(data)=>{
        setError("")
        try{
            const userData=await authService.createAccount(data)
            if (userData){
                const data= await authService.getLoggedInUser()
                if(data){
                    dispatch(login(data));
                    navigate("/all-notes")
                }
            }
        }catch(error){
            setError(error.message)
        }
    }


    return (
            <div className=" flex items-center justify-center w-full">
                <div className= " mx-auto w-full max-w-lg rounded-xl p-10 border border-black/30">
                    <h2 className=" text-center text-2xl font-bold leading-tight"> Sign up to create your account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Already have an account?&nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Login
                        </Link>
                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                    </p>
                    <form onSubmit={handleSubmit(signup)} className='mt-8'>
                        <div className="space-y-5">
                            <Input 
                                label="name"
                                placeholder="Enter your name"
                                {...register("name",{
                                    required:true
                                })}

                            />
                            <Input 
                                label="Email: "
                                placeholder="Enter your email..."
                                type ="email"
                                {...register("email", {
                                    required: true,
                                    validate :{
                                        matchPattern: (value)=>/[a-z\d]+([\.\_]?[a-z\d]+)+@[a-z\d]+(\.[a-z]+)+/.test(value)||"Email address must be a valid address",
                                    }
                                })}
                            />
                            <Input 
                                label="Password: "
                                placeholder="Enter your Password..."
                                type="password"
                                {
                                    ...register("password",{
                                        required:true,

                                    })
                                }
                            />
                            <Button type="submit" className="w-full">Sign in</Button>
                        </div>
                    </form>
                </div> 
            </div>
            );
}

export default SignupForm;