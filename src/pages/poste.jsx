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
function Poste(){
    return(
        <div className=" container-fluid h-100  container-Home">
            <div className="row h-100">
                <div className="col-lg-3 col-sm-12 col-md-3 p-1  content-home-prof h-100">
                    <div className="profil-home">
                        <img src={user} alt="" className='user-picture-home rounded-3 shadow-4' />
                    </div>
                    <div className="info-user-home p-2">
                        <p className='mb-3 font-weight-bold'>Abraham konan kouame</p>
                        <div className="liste-One">
                            <p className='text-white'><MdWorkspacePremium />Dévellopeur Javascript</p>
                            <p><BsPhoneFill /> +225 0141822918</p>
                            <a href=""><BiLogoLinkedinSquare /> Abraham-konan-kouame</a>
                        </div>
                        <div className='follow-home p-2'>
                            <p><FiUsers/> 10k Follows</p>
                            <p> 25 Followers</p>

                        </div>
                        <div className='edit-home p-3'>
                            <button className='btn  text-white'>Editer votre profile</button>
                        </div>
                        <div className="d-flex justify-content-center align-items-center footReturnT">
                            <img src={logo} alt="" />
                        </div>

                    </div>
                </div>
                <div className="col-lg-9 col-sm-12 col-md-9 content-home-prof ">
                    <div className="row">
                        <div className="col-12 content-home-prof">
                            <nav className="nav justify-content-center">
                                <a className=" bg-warning nav-link "  href="#">New </a>
                                <a className=" text-white nav-link active" aria-current="page" href="#">Poste</a>
                                <a className=" text-white nav-link" href="#">Notification</a>
                                <a className=" text-white nav-link " href='#'>Paramètre</a>
                            </nav>
                        </div>
                        <div className="col-12 position-relative overflow-hidden  ">
                            <div className="row  d-flex justify-content-center align-items-center p-3 blocPoste">
                                <div className="col-8 p-2  postCard">
                                    <div className="titrePost">
                                        <p className='slab rounded-circle rond-element'>AB</p>
                                        <h5 className='titrePosted text-white'>Est-ce qu'on gagnera eternellement ?</h5>
                                    </div>
                                    <div className='poste-card row d-flex  text-white-50 justify-content-center align-items-center flex-column '>
                                        <p className='col-12'>
                                            la vie est remplir de mystère alors tout peux arriver, faisons le chemin au bon moment et dans les bonne condition. surtout avec le courage
                                        </p>
                                        <div className="row d-flex justify-content-around align-items-center">
                                            <div className="col-4  d-flex justify-content-around  align-items-center">
                                                <p>
                                                    <FaLightbulb size={20} />
                                                </p>
                                                <p>
                                                    <BsLightbulbOffFill size={20} />
                                                </p>
                                            
                                            
                                            </div>
                                            <div className="col-4">
                                                <p>
                                                    <FaCreativeCommons size={20}/>
                                                </p>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <img src={user} alt="" className=' postUser rounded-circle  rond-element' />
                                </div>
                                <div className="col-8 p-2  postCard">
                                    <div className="titrePost">
                                        <p className='slab rounded-circle rond-element'>AB</p>
                                        <h5 className='titrePosted text-white'>Est-ce qu'on gagnera eternellement ?</h5>
                                    </div>
                                    <div className='poste-card row d-flex  text-white-50 justify-content-center align-items-center flex-column '>
                                        <p className='col-12'>
                                            la vie est remplir de mystère alors tout peux arriver, faisons le chemin au bon moment et dans les bonne condition. surtout avec le courage
                                        </p>
                                        <div className="row d-flex justify-content-around align-items-center">
                                            <div className="col-4  d-flex justify-content-around  align-items-center">
                                                <p>
                                                    <FaLightbulb size={20} />
                                                </p>
                                                <p>
                                                    <BsLightbulbOffFill size={20} />
                                                </p>
                                            
                                            
                                            </div>
                                            <div className="col-4">
                                                <p>
                                                    <FaCreativeCommons size={20}/>
                                                </p>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <img src={user} alt="" className=' postUser rounded-circle  rond-element' />
                                </div>
                                <div className="col-8 p-2  postCard">
                                    <div className="titrePost">
                                        <p className='slab rounded-circle rond-element'>AB</p>
                                        <h5 className='titrePosted text-white'>Est-ce qu'on gagnera eternellement ?</h5>
                                    </div>
                                    <div className='poste-card row d-flex  text-white-50 justify-content-center align-items-center flex-column '>
                                        <p className='col-12'>
                                            la vie est remplir de mystère alors tout peux arriver, faisons le chemin au bon moment et dans les bonne condition. surtout avec le courage
                                        </p>
                                        <div className="row d-flex justify-content-around align-items-center">
                                            <div className="col-4  d-flex justify-content-around  align-items-center">
                                                <p>
                                                    <FaLightbulb size={20} />
                                                </p>
                                                <p>
                                                    <BsLightbulbOffFill size={20} />
                                                </p>
                                            
                                            
                                            </div>
                                            <div className="col-4">
                                                <p>
                                                    <FaCreativeCommons size={20}/>
                                                </p>
                                                
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <img src={user} alt="" className=' postUser rounded-circle  rond-element' />
                                </div>
                                
                              
                            </div>
                            <button className=' btn text-white btnPosted'>Poster une idée</button>
                        </div>
                    </div>

                </div>
               
            </div>
        </div>
    )
}
export default Poste