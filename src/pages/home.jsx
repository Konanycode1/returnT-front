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

function Home(){
    let navigate = useNavigate();

    const posteClick = ()=>{
        navigate('/poste')
    }
    return(
        <div className='w-full  h-screen backdrop-brightness-50 bg-white/10'>
            
            <div className='flex h-screen w-full  justify-center'>
                <div className="h-full p-3 space-y-2 w-1/3  bg-transparent backdrop-blur-lg ">
                    <div className=" w-full  flex items-center justify-center p-2 sel space-x-4">
                        <div className='w-full flex flex-col justify-center items-center'>
                            <img src={user} alt="" className="w-24 h-24 my-3 rounded-full dark:bg-gray-500" />
                            <div>
                                <h2 className="text-lg text-white font-semibold">Leroy Jenkins</h2>
                            </div>

                        </div>
                        
                    </div>
                    <div className="divide-y divide-gray-700">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className=" ">
                                <a rel="noopener noreferrer" href="#" className="flex items-center bg-orange-400 p-3 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current ">
                                        <path d="M68.983,382.642l171.35,98.928a32.082,32.082,0,0,0,32,0l171.352-98.929a32.093,32.093,0,0,0,16-27.713V157.071a32.092,32.092,0,0,0-16-27.713L272.334,30.429a32.086,32.086,0,0,0-32,0L68.983,129.358a32.09,32.09,0,0,0-16,27.713V354.929A32.09,32.09,0,0,0,68.983,382.642ZM272.333,67.38l155.351,89.691V334.449L272.333,246.642ZM256.282,274.327l157.155,88.828-157.1,90.7L99.179,363.125ZM84.983,157.071,240.333,67.38v179.2L84.983,334.39Z"></path>
                                    </svg>
                                    <span>metier</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center bg-orange-400 p-3 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current ">
                                        <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                    </svg>
                                    <span>contact</span>
                                </a>
                            </li>
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center bg-orange-400 p-3 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5  h-5 fill-current ">
                                        <path d="M448.205,392.507c30.519-27.2,47.8-63.455,47.8-101.078,0-39.984-18.718-77.378-52.707-105.3C410.218,158.963,366.432,144,320,144s-90.218,14.963-123.293,42.131C162.718,214.051,144,251.445,144,291.429s18.718,77.378,52.707,105.3c33.075,27.168,76.861,42.13,123.293,42.13,6.187,0,12.412-.273,18.585-.816l10.546,9.141A199.849,199.849,0,0,0,480,496h16V461.943l-4.686-4.685A199.17,199.17,0,0,1,448.205,392.507ZM370.089,423l-21.161-18.341-7.056.865A180.275,180.275,0,0,1,320,406.857c-79.4,0-144-51.781-144-115.428S240.6,176,320,176s144,51.781,144,115.429c0,31.71-15.82,61.314-44.546,83.358l-9.215,7.071,4.252,12.035a231.287,231.287,0,0,0,37.882,67.817A167.839,167.839,0,0,1,370.089,423Z"></path>
                                        <path d="M60.185,317.476a220.491,220.491,0,0,0,34.808-63.023l4.22-11.975-9.207-7.066C62.918,214.626,48,186.728,48,156.857,48,96.833,109.009,48,184,48c55.168,0,102.767,26.43,124.077,64.3,3.957-.192,7.931-.3,11.923-.3q12.027,0,23.834,1.167c-8.235-21.335-22.537-40.811-42.2-56.961C270.072,30.279,228.3,16,184,16S97.928,30.279,66.364,56.206C33.886,82.885,16,118.63,16,156.857c0,35.8,16.352,70.295,45.25,96.243a188.4,188.4,0,0,1-40.563,60.729L16,318.515V352H32a190.643,190.643,0,0,0,85.231-20.125,157.3,157.3,0,0,1-5.071-33.645A158.729,158.729,0,0,1,60.185,317.476Z"></path>
                                    </svg>
                                    <span>email</span>
                                </a>
                            </li>
                            <li className="flex items-center p-3 space-x-3 rounded-md">
                                <button type="button" className="px-8 py-3 font-semibold border rounded border-orange-400  text-white ">10k follows</button>
                                <button type="button" className="px-8 py-3 font-semibold border rounded border-orange-400 text-white ">10k followers</button>
                            </li>
                            <li className='flex items-center p-3 space-x-3 rounded-md'>
                                <button type="button" className="px-8 py-3 font-semibold border border-orange-400 rounded  text-white ">Editer votre profile</button>
                                <button type="button" className="px-8 py-3 font-semibold bg-green-500 border rounded border-orange-400  text-white ">Poster</button>
                            
                            </li>
                        </ul>
                        <ul className="pt-4 pb-2 space-y-1 text-sm">
                            
                            <li>
                                <a rel="noopener noreferrer" href="#" className="flex items-center p-3 space-x-3 rounded-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-white ">
                                        <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                        <rect width="32" height="64" x="256" y="232"></rect>
                                    </svg>
                                    <span className='text-white '>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='block w-full h-screen '>
                    <div className='w-full flex h-16 items-center  bg-transparent backdrop-blur-lg  justify-center '>
                        <div className=" sm:block flex justify-center bg-transparent backdrop-blur-lg items-center">
                            <nav className="flex gap-4" aria-label="Tabs">
                            <a
                                href="#"
                                className="shrink-0 rounded-lg px-8 py-2 bg-gray-100 text-sm font-medium text-orange-400  hover:text-gray-700"
                                aria-current="page"
                            >
                                New
                            </a>

                            <a
                                href="#"
                                className="shrink-0 rounded-lg px-8 py-2 text-sm font-medium text-orange-400 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Poste
                            </a>

                            <a
                                href="#"
                                className="shrink-0 rounded-lg px-8 py-2 text-sm font-medium text-orange-400 hover:bg-gray-50 hover:text-gray-700"
                            >
                                Notification
                            </a>

                            <a
                                href="#"
                                className="shrink-0 rounded-lg  hover:bg-gray-50 px-8 py-2 text-sm font-medium text-orange-400"
                                
                            >
                            Paramètre
                            </a>
                            </nav>
                        </div>
                    </div>
                    <div className='w-full h-[calc(100vh-64px)]  overflow-y-auto overflow-x-hidden'>
                        <div className="h-full">
                            <div className="max-w-screen-md mx-auto px-4  lg:px-8 flex flex-col justify-between">

                                {/* <div className="text-center">
                                    <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
                                        STEPS
                                    </p>
                                    <h3 className="text-3xl sm:text-5xl leading-normal font-extrabold tracking-tight text-gray-900">
                                        How it <span className="text-indigo-600">Works?</span>
                                    </h3>

                                </div> */}

                                <div className="mt-1">
                                    <ul className="">
                                        <li className="  p-5 pb-8  mb-2">
                                            <div className="py-3  border-gray-200 w-full">
                                                <div className="flex gap-1 w-full">
                                                    <div className="inline-flex gap-1 items-center justify-center w-12 h-12 text-xl text-orange-400 border-2 border-dashed border-orange-600 rounded-full">
                                                        AB
                                                    </div>
                                                    <div className="flex flex-col gap-1 ">
                                                        <h1 className="text-gray-600 font-semibold text-xs">Reviews of</h1>
                                                        <h2 href="#" className="font-semibold text-black hover:text-blue-600">Comment devenir contributeur?</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex bg-gray-600 flex-col items-center">
                                                
                                                <div className="mt-4">
                                                    
                                                    <p className="mt-2 text-center text-base leading-6 text-gray-100">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                    </p>
                                                </div>
                                                <div className=" flex w-full justify-around mt-4 mb-4">
                                                    <div className='w-24 flex justify-around items-center'>
                                                        <FaLightbulb size={20} />
                                                        <BsLightbulbOffFill size={20} />
                                                    </div>
                                                    <div className='w-24 flex justify-center items-center'>
                                                        <FaCreativeCommons size={20} />
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-2 relative bottom-0 -mb-16">
                                                    <div
                                                        className="flex items-center justify-center w-28 h-28  rounded-full  text-white border-2 border-dashed border-orange-600 text-xl font-semibold">
                                                        <img src={user} alt="" className="w-24 h-24 my-3 rounded-full dark:bg-gray-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="  p-5 pb-8  mb-2">
                                            <div className="py-3  border-gray-200 w-full">
                                                <div className="flex gap-1 w-full">
                                                    <div className="inline-flex gap-1 items-center justify-center w-12 h-12 text-xl text-gray-600 border-2 border-dashed border-orange-600 rounded-full">
                                                        AB
                                                    </div>
                                                    <div className="flex flex-col gap-1 ">
                                                        <h1 className="text-gray-600 font-semibold text-xs">Reviews of</h1>
                                                        <h2 href="#" className="font-semibold text-black hover:text-blue-600">Comment devenir contributeur?</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex bg-gray-600 flex-col items-center">
                                                
                                                <div className="mt-4">
                                                    
                                                    <p className="mt-2 text-center text-base leading-6 text-gray-100">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                    </p>
                                                </div>
                                                <div className=" flex w-full justify-around mt-4 mb-4">
                                                    <div className='w-24 flex justify-around items-center'>
                                                        <FaLightbulb />
                                                        <BsLightbulbOffFill />
                                                    </div>
                                                    <div className='w-24 flex justify-center items-center'>
                                                        <FaCreativeCommons />
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-2 relative bottom-0 -mb-16">
                                                    <div
                                                        className="flex items-center justify-center w-28 h-28  rounded-full  text-white border-2 border-dashed border-orange-600 text-xl font-semibold">
                                                        <img src={user} alt="" className="w-24 h-24 my-3 rounded-full dark:bg-gray-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="  p-5 pb-8  mb-2">
                                            <div className="py-3  border-gray-200 w-full">
                                                <div className="flex gap-1 w-full">
                                                    <div className="inline-flex gap-1 items-center justify-center w-12 h-12 text-xl text-gray-600 border-2 border-dashed border-orange-600 rounded-full">
                                                        AB
                                                    </div>
                                                    <div className="flex flex-col gap-1 ">
                                                        <h1 className="text-gray-600 font-semibold text-xs">Reviews of</h1>
                                                        <h2 href="#" className="font-semibold text-black hover:text-blue-600">Comment devenir contributeur?</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex bg-gray-600 flex-col items-center">
                                                
                                                <div className="mt-4">
                                                    
                                                    <p className="mt-2 text-center text-base leading-6 text-gray-100">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                    </p>
                                                </div>
                                                <div className=" flex w-full justify-around mt-4 mb-4">
                                                    <div className='w-24 flex justify-around items-center'>
                                                        <FaLightbulb />
                                                        <BsLightbulbOffFill />
                                                    </div>
                                                    <div className='w-24 flex justify-center items-center'>
                                                        <FaCreativeCommons />
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-2 relative bottom-0 -mb-16">
                                                    <div
                                                        className="flex items-center justify-center w-28 h-28  rounded-full  text-white border-2 border-dashed border-orange-600 text-xl font-semibold">
                                                        <img src={user} alt="" className="w-24 h-24 my-3 rounded-full dark:bg-gray-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="  p-5 pb-8  mb-2">
                                            <div className="py-3  border-gray-200 w-full">
                                                <div className="flex gap-1 w-full">
                                                    <div className="inline-flex gap-1 items-center justify-center w-12 h-12 text-xl text-gray-600 border-2 border-dashed border-orange-600 rounded-full">
                                                        AB
                                                    </div>
                                                    <div className="flex flex-col gap-1 ">
                                                        <h1 className="text-gray-600 font-semibold text-xs">Reviews of</h1>
                                                        <h2 href="#" className="font-semibold text-black hover:text-blue-600">Comment devenir contributeur?</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex bg-gray-600 flex-col items-center">
                                                
                                                <div className="mt-4">
                                                    
                                                    <p className="mt-2 text-center text-base leading-6 text-gray-100">
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis
                                                        suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                                    </p>
                                                </div>
                                                <div className=" flex w-full justify-around mt-4 mb-4">
                                                    <div className='w-24 flex justify-around items-center'>
                                                        <FaLightbulb />
                                                        <BsLightbulbOffFill />
                                                    </div>
                                                    <div className='w-24 flex justify-center items-center'>
                                                        <FaCreativeCommons />
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-2 relative bottom-0 -mb-16">
                                                    <div
                                                        className="flex items-center justify-center w-28 h-28  rounded-full  text-white border-2 border-dashed border-orange-600 text-xl font-semibold">
                                                        <img src={user} alt="" className="w-24 h-24 my-3 rounded-full dark:bg-gray-500" />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>

    )

}
export default Home