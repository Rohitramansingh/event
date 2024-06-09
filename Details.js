import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import img1 from "/"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Action } from "../Store/store";
import { useStepContext } from "@mui/material";
import axios from "axios";
import { PostToCart, detailCart, getCartData, getProduct } from "./Api";


export default function Details(){
  const [arr,setArr]=useState([]);
  const [data,setdata]=useState("");
  const params=useParams();
  const userdata=useSelector(state=>state.userdata)

   

useEffect(()=>{
  const fetch=async ()=>{
    try{
   const res=await getProduct(params.id)
   console.log("lll",res);
    // const find=res.data.find((val)=>val.id===params.id)
     setdata(res);
    }catch(error)
    {
      console.log(error)
    }
       }

  fetch()
 
},[])

    const [count,setCount]=useState(1);
    const dispatch=useDispatch();

  const isLogin=useSelector(state=>state.isLogin)




    const increment=()=>{
        setCount(prev=>prev+1)
      }

      const decrement=()=>{

        if(count>1)
        setCount(prev=>prev-1)


      }

console.log(data,"dddd")



      const addtoCart =async ()=>{
        
        if(isLogin)
          {
            data.quantity=parseInt(data.quantity)+parseInt(count);
            const obj={...data};
            console.log(obj,"ooo")
           await  detailCart({user:userdata ,data:obj})
          }else{
            alert("please login first")
            dispatch(Action.opentLoginModal());
          }

      }

    return (
        <div className="w-[70%] mx-auto border shadow-md  mt-20 bg-gray-100  p-5 ">


            <div className="grid grid-cols-2 bg-white ">
                {/* col1 */}

                <img src="/" className="w-[90%] p-2 " />

                {/* col2 */}

            {/* col2 */}
                <div className="relative space-y-2 ">
                <p className="text-start font-bold  my-2 text-xl ">{data.name}</p>
                <p className="text-start font-bold ">{data.description}</p>

                <p className="text-left text-sm p-1  ">
                1.8" LCD display
Bluetooth Calling Smartwatch with AI voice assistance
Noise Health SuiteTM: Blood Oxygen, 24*7 Heart rate monitor, Stress Monitor and Sleep Monitor
60 Sports mode & 100+ watch faces


                </p>
                <p className="border border-b-gray-300 w-[90%] "></p>

              <p className="font-bold my-4  text-start  ">  ₹ {data.price}</p>

                  <cart className=" my-3 ">
                  <div className="flex space-x-1 justify-center w-[150px] bg-gray-100 p-2 ">
                  <button onClick={increment}className=" w-[40%]   hover:bg-blue-950 hover:text-white"><AddIcon/></button>

                <h1 className="w-[40%] mt-3 font-bold ">{count}</h1>
                <button onClick={decrement}className=" w-[40%]  hover:bg-blue-950 hover:text-white"><RemoveIcon/></button>



            </div>
                  </cart>

              <div className="  flex space-x-3 absolute bottom-1 right-2  ">
                <button onClick={addtoCart} className="w-[150px] border border-black bg-yellow-500 p-1 ">Cart</button>
                <button className="w-[150px] border border-yellow-500  p-1 ">order</button>

                </div>
                </div>

            </div>


        </div>

      );
}