import React, {useState, useEffect} from 'react';
import { Container, PostCard } from '../Components';
import databaseService from '../appwrite/Database_service';
import { useSelector } from 'react-redux';
import NoNotes from "../Components/NoNotes"


function AllNotes() {
    const [notes, setNotes] = useState([]);
    const author = useSelector((state)=>state.auth.userData.$id)
    useEffect(()=>{
        databaseService.getAllNotes(author).then((notes)=>{
            if(notes){
                setNotes(notes.documents)
            }
        })
    },[])

    
    return notes.length!=0?( <>
        <div className="w-full py-8">
            <Container>
                {notes.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </Container>
        </div>
    </> ):<NoNotes></NoNotes>;
}

export default AllNotes;