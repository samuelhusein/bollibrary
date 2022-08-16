// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes React and other helpers. It's a great starting point while
//  * building robust, powerful web applications using React + Laravel.
//  */

// require('./bootstrap');

// /**
//  * Next, we will create a fresh React component instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// require('./components/Example');


// import React,{useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
// import SidebarUser from "./components/SidebarUser";
// import axios from "axios";

// function App() {
//     return (
//         <>       
//         <Routes>
//             <Route path="/" element={<SidebarUser /> } />
//             {/* <Route path="/Serial" element={<Serial /> } />
//             <Route path="/Variety" element={<Variety /> } />
//             <Route path="/Film" element={<Film /> } />
//             <Route path="/Anime" element={<Anime /> } />
//             <Route path="/All" element={<All /> } />  */}
//         </Routes>
//         </>
//     );

//     const http = axios.create({
//         baseUrl:'http://127.0.0.1:8000',
//         headers: {
//             'X-Requested-With': 'XMLHttpRequest'
//         },
//         withCredentials: true
//     });

//     useEffect(() => {
//         getUser();
        
//     },[]);
//     async function getUser(){
//         // const csrf = await http.get('/sanctum/csrf-cookie')
//         // console.log('csrf = ',csrf);

//         // const login = await http.post('/api/login',{
//         //     email:'samuel.husein.sa@gmail.com',
//         //     password:'s4muel83'
//         // })

//         // console.log('Login = ',login)

//         // const logout = await http.post('/api/logout')


//         const user = await http.get('/api/user')
//         console.log('User = ', user);
//     }

//     // return(
//     //     <SidebarUser />
//     // );

// }


import React,{useState} from 'react';
import axios from "axios";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Icon,{HomeIcon,ViewListIcon,HeartIcon,BookOpenIcon,QuestionMarkCircleIcon,LogoutIcon,ArrowNarrowRightIcon} from '@heroicons/react/outline';

function App(){

    const [open, setOpen] = useState(false);
    return (
      <div className="flex">
        <div
          className={` ${
            open ? "w-72" : "w-0 "
          } dark:bg-gray-800 h-screen p-0 pt-8 relative duration-300`}
        >
          <ArrowNarrowRightIcon
            className={`absolute cursor-pointer -right-3 hover:-right-7 top-1/2 items-center w-7 border-solid border-2 bg-slate-200 ${open && "rotate-180 -right-7"}`}
            onClick={() => setOpen(!open)}
          />
            <div className={`h-50 flex flex-col items-center justify-content ${!open && "invisible"}`}>
            <div className="flex mt-12">
                <div className="bg-white rounded-full text-center px-[40px] py-[15px]">
                    <span className="text-[50px]">S</span>
                </div>
            </div>
            <div className="flex mt-2">
                <div className="text-white">
                    Samuel Husein
                </div>
            </div>
            <div className="flex mt-1">
                <div className="capitalize text-xs text-slate-400">
                    samuel.husein.sa@gmail.com
                </div>
            </div>
        </div>
          <ul className={`pt-6 p-5 ${!open && "pt-6 invisible"}`}>
          <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
               <HomeIcon className="w-6 h-6"/>
               <span className="ml-3">Home</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <ViewListIcon className="w-6 h-6"/>
               <span className="flex-1 ml-3 whitespace-nowrap">My Lists</span>
               {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span> */}
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HeartIcon className="w-6 h-6"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Favorites</span>
               <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <BookOpenIcon className="w-6 h-6"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Borrowing</span>
            </a>
         </li>
         
      </ul>
      <ul className={`pt-6 space-y-2 border-t border-gray-200 dark:border-gray-700 ${!open && "pt-6 invisible"}`}>
        <li className="pl-5">
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <QuestionMarkCircleIcon className="w-6 h-6"/>
               <span className="flex-1 ml-3 whitespace-nowrap">Support</span>
            </a>
         </li>
         <li className="pl-5">
            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
            <LogoutIcon className="w-6 h-6"/>
               <span className="ml-3">Logout</span>
            </a>
         </li>
          </ul>
        </div>
        <div className="h-screen flex-1 p-7">
        <Routes>
            <Route path="/" element={<Home /> } />
            {/* <Route path="/Serial" element={<Serial /> } />
            <Route path="/Variety" element={<Variety /> } />
            <Route path="/Film" element={<Film /> } />
            <Route path="/Anime" element={<Anime /> } />
            <Route path="/All" element={<All /> } /> */}
         </Routes>
        </div>
      </div>
    );

}


export default App;
if (document.getElementById('app')) {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
            , document.getElementById('app'));
}
