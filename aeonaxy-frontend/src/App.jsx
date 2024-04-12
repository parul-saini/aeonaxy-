import { useEffect } from "react"
import {useNavigate} from "react-router-dom"
import EmailVerification from "./components/EmailVerification";
import home from "./assets/home.png"
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  const navigate = useNavigate();
  useEffect(()=>{
    const userData = localStorage.getItem("userData");
    if(!userData)
      navigate("/sign-up");
  },[navigate])
  return (
    <>    
      {/* <img src={home} alt="" /> */}
      <div className="flex flex-col h-screen justify-between">
        <Header/>
        <div className="text-center text-xl sm:text-2xl md:text-3xl font-extrabold my-32">Welcome to the Homepage</div>
        <Footer/>
      </div>
    </>
  )
}

export default App
