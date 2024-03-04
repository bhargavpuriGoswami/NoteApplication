import NoteAddIcon from '@mui/icons-material/NoteAdd';
import React from 'react'
import {Container, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'



function Header(){
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate()
    const navItems=[
        {
            name:"login",
            url: "/login",
            active:!authStatus
        },
        {
            name:"Signup",
            url: "/signup",
            active:!authStatus
        },
        {
            name:"All Notes",
            url: "/all-notes",
            active:authStatus
        },
        {
            name:"Add Notes",
            url: "/add-notes",
            active:authStatus
        },


    ]
    return <>
    <header className="header grid grid-cols-2 bg-orange-400 text-xl items-center spacer relative">
        <div className=" ml-6">
            <Link to="/">
                <NoteAddIcon />
                    Notes
            </Link>
        </div>
       <Container>
            <nav className ="flex  w-full">
                <ul className ="w-full flex justify-end gap-6">
                    {navItems.map((item)=>
                        item.active? (
                            <li key={item.name}>
                                <button 
                                    onClick={()=>navigate(item.url)}
                                    className="hover:bg-white px-2 py-1 rounded-lg box-shadow"
                                >
                                    {item.name}
                                </button>
                            </li>) 
                            : null
                    )}
                    {authStatus&&(
                        <li key="logout">
                            <LogoutBtn />
                        </li>
                    )}
                </ul>
            </nav>
       </Container>
    </header>
    </>
}
export default Header

