
import './App.css';
import {BrowserRouter,Routes,Route, MemoryRouter, Router,} from "react-router-dom";
import Home from './Pages/Dashboard/Home';
import Users from './Pages/Dashboard/Users';
import Contact from './Pages/Dashboard/Contact/Contact';

import UsersDetails from './components/UsersDetails';
import Login from './Pages/Aut/Login';
import Dasboard from './Layouts/Dasboard';
import AutLayout from './Layouts/AutLayout';
import Register from './Pages/Aut/Register';


function App() {
  return (
    <div >
     <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Dasboard/>} >
            <Route path="/"  element={<Home />} />
            <Route path='Users' element={<Users/>}></Route>
            <Route path='Users/:id' element={<UsersDetails/>}></Route>
            <Route path='Contact' element={<Contact/>}></Route>
          </Route>
          <Route path='Aut' element={<AutLayout/>}>
            <Route index element={<Login/>}></Route>
            <Route path='Register' element={<Register/>}></Route>
          </Route>
         
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
