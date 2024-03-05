import React, {useCallback, useEffect} from "react";
import {useForm} from "react-hook-form";
import {Button, Input, Select} from "./index"
import {TextEditor} from "./index";
import databaseService from "../appwrite/Database_service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import config from "../config/config";
function PostForm({post}) {
    const {register,handleSubmit, watch, setValue,control, getValues} = useForm(
        {
            defaultValues:{
                title: post?.title||"",
                content:post?.content||"",
                slug: post?.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '').replace(/\-\-+/g, '-') .replace(/^-+/, '').replace(/-+$/, '')|| "",
                status: post?.status ||"active",
            }
        }
    );

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData);
  
    const submit = async(data)=>{
        if (post){
            const dbPost = await databaseService.updateNote(post.$id,{
                ...data
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }else{  
            const dbPost=await databaseService.createNote({
                ...data,
                userID: userData.$id
            })
            if(dbPost){
                navigate(`/post/${dbPost.$id}`)
            }
        }


    }

    const slugTransform = useCallback((value)=>{
        if(value && typeof value === "string"){
            return value
            .toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start of text
            .replace(/-+$/, '');            // Trim - from end of text
        }
        return ""
    },[])

    useEffect(()=>{
        const  subscription = watch((value,{name})=>{
            if(name==="title"){
                setValue("slug",slugTransform(value.title))
            }
        })

        return()=>{
            subscription.unsubscribe()
        }

    },[watch, slugTransform, setValue])

    return ( <>
         <form onSubmit={handleSubmit(submit)} className="w-4/5 flex flex-col  items-center justify-center">
            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />
                
                
            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />


            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                readonly="readonly"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                }}
            />


            <TextEditor name="content" control={control} defaultValue={getValues("content")} />

            <div className="w-1/5">
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full border-0">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>

        </form>
    </> );
}

export default PostForm;