import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import {  useNavigate } from "react-router-dom";

function CheckVerifiedUser (){
    const [verified, setVerified] = useState(null);
    const{userId,uniqueString} = useParams();
    // console.log(userId, uniqueString);

    const navigate = useNavigate();

    useEffect(()=>{
        async function verifiedCheck(){
           const res = await axios.get(`${verifiedRouter}/${userId}/${uniqueString}`);
           if(res.data.success === false)
           {
            toast.error(res.data.message);
            setVerified(false);
           }
           if(res.data.success === true)
           {
            toast.error(res.data.message);
            setVerified(true);
            navigate("/");
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
          <div>    
            <button onClick={sendEmailAgain}>Send Email Again </button>
          </div>
        </div> 
    }
    </>
    )
}

export  default CheckVerifiedUser;