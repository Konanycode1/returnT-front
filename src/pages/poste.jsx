import '../assets/css/home.css';
import logo from '../assets/logo.png'
import user from '../assets/images/user.jpg';
import { BsPhoneFill } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { FaLightbulb } from "react-icons/fa";
import { BsLightbulbOffFill } from "react-icons/bs";
import { FaCreativeCommons } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
function Poste(){
    let navigate = useNavigate();

    const homeClick = ()=>{
        navigate('/home')
    }
    return(
        <p>Poste</p>
    )
}
export default Poste