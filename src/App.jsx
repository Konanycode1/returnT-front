import './App.css'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/login.jsx';
import Forgot from './pages/forgot.jsx';
import Sign from './pages/sign.jsx';
import Home from './pages/home.jsx';
import Poste from './pages/poste.jsx';




function App() {


  return (
    <>  
        <Routes>
            <Route path="/" element={<Login />}  />
            <Route path="/forgot" element={<Forgot />}  />
            <Route path="/sign" element={<Sign />}  />
            <Route path="/home" element={<Home />}  />
            <Route path="/poste" element={<Poste />}  />
        </Routes>
    </>
  )
}

export default App
