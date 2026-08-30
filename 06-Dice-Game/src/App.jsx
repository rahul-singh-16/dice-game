
import { Route, Routes } from "react-router-dom";
import  FrontPage  from "./FrontPage";
import  PageTwo  from "./PageTwo";


const App = () => {

  return (
    <Routes>
     <Route path="/" element={<FrontPage />}/>
     <Route path="/second" element={<PageTwo/>}/>
    </Routes>
  )  
}
export default App