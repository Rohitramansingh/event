import React  from "react"
// import img1 from "/"
import DeleteIcon from '@mui/icons-material/Delete';



import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Action } from "../Store/store";



export default async  function Item (props){

  console.log(props,"aaa");
    
   








  const deleteItem=()=>{

  }

    const increment=()=>{
        
      }

      const decrement=()=>{


      }

    return(
        <div className="grid grid-cols-8 gap-1 mx-1 my-1  p-1 bg-white  ">
            <img src="/" className="w-[100px]  "/>
            <p className="col-span-2 ">{props.datas.name}</p>
            <p>{props.data.price}</p>

            <cart className="  ">
                  <div className="flex space-x-1 justify-center w-[100%] border  p-1 ">
                  <button onClick={increment}className=" w-[35%]   hover:bg-blue-950 hover:text-white"><AddIcon/></button>

                <h1 className="w-[30%] mt-3 font-bold ">{props.datas.quantity} </h1>
                <button onClick={decrement}className=" w-[30%]  hover:bg-blue-950 hover:text-white"><RemoveIcon/></button>



            </div>
                  </cart>


            <p className="p-1 ">{props.datas.price * props.datas.quantity}</p>
            <p onClick={deleteItem}><DeleteIcon/></p>

        </div>

    )
}