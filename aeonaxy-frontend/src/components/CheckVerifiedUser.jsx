import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { sendEmailAgainRouter } from "../utils/apiRoutes";
import {  useNavigate } from "react-router-dom";
import verfication from "../assets/verification.png"
import unverified from "../assets/unverified.png"

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
        <div className='flex items-center justify-items-center flex-col my-20'>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRkazTjuYi0h5DfB6Q7QlPik8YJ8c6YGxMbqKnrIJwg&s" alt=""  /> */}
            {/* <img src="https://media1.tenor.com/m/Hw7f-4l0zgEAAAAC/check-green.gif" alt=""  /> */}
            {/* <img src="https://media.istockphoto.com/id/1344841941/vector/blue-verified-account-icon-approved-profile-sign-tick-in-rounded-corners-star-top-page-logo.jpg?s=612x612&w=0&k=20&c=Ys81LaNf8DkzKVvB03y0hDQBkkkP5jrRK9lX4htlfRk=" alt=""  /> */}
            <img src={verfication} className='h-60 md:h-80' alt="verified"  />
            <div className='font-bold md:text-2xl mb-3'>Verification Successful </div>
            <div className='font-semibold text-sm'>You are all set!</div>
            
        </div> 
        :
        <div className='flex items-center justify-items-center flex-col my-20'>
            <img src={unverified} className='h-56 md:h-80'  alt="unverified"  />
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEckQG_u1TWJV34UL_lfTo5zeAnJiLPdLhmg&s" alt=""  /> */}
            {/* <img src="https://i0.wp.com/nrifuture.com/wp-content/uploads/2022/05/comp_3.gif?fit=800%2C600&ssl=1" alt=""  /> */}
            <div className='font-bold md:text-2xl mb-3'>Verification Failed</div>
            <div className='text-gray-500 md:text-sm'>Please contact us for next steps</div>
          <div>    
            {/* <button onClick={sendEmailAgain}>Send Email Again </button> */}
          </div>
        </div> 
    }
    </>
    )
}

export  default CheckVerifiedUser;