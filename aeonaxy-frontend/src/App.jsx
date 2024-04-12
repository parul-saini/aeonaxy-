import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import EmailVerification from "./components/EmailVerification";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();

  useEffect(()=>{
    const userData = localStorage.getItem("userData");
    if(!userData)
      navigate("/sign-up");
  },[navigate]);

  return (
    <>   
      <Header/> 
      home page 
      <Footer/>
    </>
  )
}

export default App
