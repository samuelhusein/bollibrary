import React from 'react';
import ForYou from '../components/ForYou';
import Recomended from '../components/Recomended';
import {Link} from "react-router-dom";
import {SearchIcon} from "@heroicons/react/solid"
function Home(){
    return(
        <div>
            <div className="sticky bg-white border-gray-200 px-2 sm:px-4 rounded dark:bg-white"> 
                <div className="container flex justify-between items-center mx-auto ">
                    <div className="flex">
                    <Link to="/" className='text-1xl md:text-2xl dark:bg-white font-bold px-3 active_span'>Books</Link>
                    <Link to="/ebooks" className='text-1xl md:text-2xl dark:bg-white font-bold px-2'>E-Books</Link>
                    </div>
                    {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button> */}
                    <div className="flex-row hidden w-full md:block md:w-auto">
                            <div className="flex">
                            <input 
                            className="md:h-[35px] md:w-[280px] border-2 rounded-3xl px-3 pr-8 items-center"
                            type="text"
                            placeholder="Genre, author or book name"
                            ></input>
                            </div>
                            <div className="absolute flex items-center right-6 top-2">
                            <SearchIcon className="w-5 h-5"/>
                            </div>
                        </div>
                </div>
        </div>
      
        <div classNameName="relative flex flex-col items-start">
            <div classNameName="flex">
                 <ForYou />
             </div>
             <div classNameName="flex">
                 <Recomended />
             </div>
         </div>
        </div>
    );
}

export default Home;