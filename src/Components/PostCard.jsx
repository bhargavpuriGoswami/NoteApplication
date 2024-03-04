import React from 'react';
import parse from "html-react-parser"

import { Link } from 'react-router-dom';


function PostCard({$id, title,content,featuredImage}) {
    var shortContent= parse(content)
    return ( 
    <>
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-orange-100 border border-black/30 rounded-xl p-4 hover:bg-gray-100 ">
                <h2 className=" text-xl font-bold">{title}</h2>
                <p>{shortContent.props.children}</p>
            </div>
        </Link>
    </>
     );
}
export default PostCard;