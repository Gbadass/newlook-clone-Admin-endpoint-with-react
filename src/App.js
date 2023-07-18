import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Dashboard from "./component/Dasboard";
import Createproduct from "./component/Createproduct";
import Createuser from "./component/Createuser"
import Productgrid from "./component/Productgrid"
import Usergrid from "./component/Usergrid";



function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/sidebar" element={<Dashboard/>}/>
        <Route path="/createproduct" element={<Createproduct/>}/>
        <Route path="/createuser" element={<Createuser/>}/>
        <Route path="/productpage" element={<Productgrid/>}/>
        <Route path="/userpage" element={<Usergrid/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  )
}


export default App;