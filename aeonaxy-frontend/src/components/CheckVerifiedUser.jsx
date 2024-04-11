import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {verifiedRouter} from "../utils/apiRoutes.js";
import {  useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"; 

function CheckVerifiedUser (){
    const [verified, setVerified] = useState(null);
    const{userId,uniqueString} = useParams();
    // console.log(userId, uniqueString);

    const navigate = useNavigate();

    // CSS of toast 
   const toastCSS = {
    position:"top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme:"light"
    }

    useEffect(()=>{
        async function verifiedCheck(){
           const res = await axios.get(`${verifiedRouter}/${userId}/${uniqueString}`);
          //  console.log(res);
           if(res.data.success === false)
           {
            toast.error(res.data.message);
            setVerified(false);
           }
           if(res.data.success === true)
           {
             setVerified(true);
            toast.error(res.data.message);
            // navigate("/");
           }
        }
        verifiedCheck();
    },[])

   
    return( 
    <>
    {
        verified ? 
        <div>
           <h1>Verification Done Successfully</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRkazTjuYi0h5DfB6Q7QlPik8YJ8c6YGxMbqKnrIJwg&s" alt="" srcset="" />
        </div> 
        :
        <div>
           <h1>Verification Failed</h1>
          <div>    
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEckQG_u1TWJV34UL_lfTo5zeAnJiLPdLhmg&s" alt="" srcset="" />
          </div>
          
        </div> 
    }
    <ToastContainer />
    </>
    )
}

export  default CheckVerifiedUser;