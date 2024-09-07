
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className="2xl:max-w-[1440px] 2xl:m-auto pt-[30px] lg:px-[80px]">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    
    </div>
  )
}

export default App
 