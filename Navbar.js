import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import img1 from "./assert/icons8-user-48.png"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from "react-redux";
import { Action } from "../Store/store";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar(){
    const [search,setSearch]=useState("");
    // const cart=useSelector(state=>state.cartList)
    const navigate=useNavigate();
  const isLogin=useSelector(state=>state.isLogin)
  const dispatch=useDispatch();



    function inputChange(e){
        setSearch(e.target.value);
        dispatch(Action.search({data:e.target.value.toLowerCase()}))


    }

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

    function Back(){
        navigate(-1);
    }

    function  handler()
    {
        dispatch(Action.search({data:search}))

    }

    const openModel=()=>{
        dispatch(Action.openModal())

    }

    const Login=()=>{
      if(isLogin)
        {
          dispatch(Action.logout())
        }else{
            navigate('/login')
        }
    }

    const dropdown= <div className="relative">
      <img src={img1}
        onClick={toggleDropdown}
        className="px-1  bg-gray-300 hover:bg-gray-400 rounded-md focus:outline-none focus:bg-gray-400"
      >
        
      </img>
      {isOpen && (
        <div className="absolute  mt-2 w-48 bg-white border rounded-md shadow-lg z-10">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</li>
          </ul>
        </div>
      )}
    </div>

    return(
        <div className="flex justify-between p-2 border bg-white  border-black mb-5  z-50 shadow-lg fixed top-0 w-[100%] ">
            <heading className="flex space-x-3 ml-2 ">
                <button onClick={Back}><ArrowBackIcon/></button>
                <div className=" font-bold text-blue-800 mt-2">Shopcart</div>
            </heading>

            <div className="w-[50%] flex   ">
                <input name="search" onChange={inputChange} value={search}className="bg-gray-200 w-[100%] p-1 h-[100%] outline-none " placeholder="search " type="text"/>
                <button onClick={handler}><SearchIcon/></button>
            </div>

            <menu className="mr-5 space-x-5  grid grid-cols-3 ">
                <div className="flex">
                {isLogin===false &&  <button onClick={Login}>Login</button>  }
                {isLogin &&   dropdown}
                
                </div>

               <p className=" mr-1 mt-3 "> <Link to="/">Home</Link></p>

            <button onClick={openModel} className="border border-black   mt-5  "><ShoppingCartIcon/>[{}]</button>
            </menu>

        </div>
    ) 
}