import React from 'react';
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth_service";
import {logout} from "../store/authSlice";


function LogoutBtn() {
    const dispatch = useDispatch();
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
    return (<>
        <button className="hover:bg-white px-2 py-1 rounded-lg box-shadow" onClick={logoutHandler}>Logout</button>
    </>  );
}

export default LogoutBtn;