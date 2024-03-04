import React, {useState, useEffect} from 'react';
import { PostForm , Container } from '../Components';
import { useNavigate, useParams } from 'react-router-dom';
import databaseService from '../appwrite/Database_service';


function EditNote() {

    const [note,setNote]=useState(null);
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if(slug){
            databaseService.getNote(slug).then((note)=>{
                if(note){
                    setNote(note)
                }
            })
        }
        else{
            navigate("/")
        }
    },[slug,navigate])
    return note?( 
        <div className="py-8">
            <Container>
                <PostForm post={note}/>
            </Container>
        </div>
     ): null
}

export default EditNote;