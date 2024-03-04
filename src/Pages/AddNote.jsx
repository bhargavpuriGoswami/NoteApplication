import React from 'react';
import { PostForm , Container } from '../Components';

function AddNote() {
    return ( 
        <div className="py-8">
            <Container>
                <PostForm />
            </Container>
        </div>
     );
}

export default AddNote;