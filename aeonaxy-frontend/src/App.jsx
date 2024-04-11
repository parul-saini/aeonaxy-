import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import EmailVerification from "./components/EmailVerification";

function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    const userData = localStorage.getItem("userData");
    if(!userData)
      navigate("/sign-up");
  },[navigate])
  return (
    <>    
      home page 
    </>
  )
}

export default App
