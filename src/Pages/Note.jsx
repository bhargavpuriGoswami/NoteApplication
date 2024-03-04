import React,{useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom"
import databaseService from '../appwrite/Database_service';
import { Button, Container } from '../Components';
import parse from "html-react-parser"
import { useSelector } from 'react-redux';


function Note() {
    const [post,setPost]=useState(null);
    const {slug} = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state)=>state.auth.userData)
    const isAuthor = post && userData ? post.userID === userData.$id : false;

     useEffect(() => {
        if (slug) {
            databaseService.getNote(slug).then((note) => {
                if (note){
                    setPost(note);
                } 
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        databaseService.deleteNote(post.$id).then((status) => {
            if (status) {
                databaseService.deleteFile(post.featuredImage);
                navigate("/all-notes");
            }
        });
    };



    return post ? (
        <div className="py-8 w-full">
            <Container>
                <div className="w-2/5 p-10 flex flex-col justify-center mb-4 relative border border-black rounded-xl">
                    <div className="w-full mb-6 relative">
                        <h1 className="text-2xl font-bold">{post.title}</h1>
                    </div>
                    <div className="browser-css">
                        {parse(post.content)}
                    </div>
                    {isAuthor && (
                        <div className="absolute right-2 top-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="mr-3 border-0">
                                    Edit
                                </Button>
                            </Link>
                            <Button bgColor="bg-red-500" onClick={deletePost} className="border-0">
                                Delete
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    ) : null;
}

export default Note;