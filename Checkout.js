import { TextField } from "@mui/material"
import React from "react"
import ProductItem from "./productItem"
export default function Checkout()
{
    return(
        <div className="mt-12 w-[90%] h-[80%] shadow-md mx-auto  ">
            <h1 className="bg-black p-4 text-start text-white text-xl font-bold my-3 ">Checkout</h1>
            <p className="text-start ml-6 p-1 w-[80%] font-bold my-2 ">Addressed</p>
            <main className=" grid  grid-cols-4">
                <div className="col-span-3 p-2 ">
                <div  className=" space-y-3 ">
                <TextField type="text"   className="w-[80%] text-sm  " id="outlined-basic" label="Enter Email" variant="outlined" />
                <TextField type="text"   className="w-[80%] text-sm  " id="outlined-basic" label="Enter Name" variant="outlined" />
                <TextField type="text"   className="w-[80%] text-sm  " id="outlined-basic" label="Enter Addressed" variant="outlined" />
                <div className="grid grid-cols-2 w-[80%] p-1 gap-2 mx-auto  ">
                <TextField type="text"   className=" text-sm  " id="outlined-basic" label="Enter State" variant="outlined" />
                <TextField type="text"   className=" text-sm  " id="outlined-basic" label="Enter city" variant="outlined" />
                    

                </div>

                <div className="grid grid-cols-2 w-[80%] p-1 gap-2 mx-auto  ">
                <TextField type="text"   className=" text-sm  " id="outlined-basic" label="Enter phone" variant="outlined" />
                <TextField type="text"   className=" text-sm  " id="outlined-basic" label="Enter pincode" variant="outlined" />
                    

                </div>
                
                </div>

               <billing className="  w-[80%]   mt-2 p-2">
            <p className="text-start ml-6 p-1 w-[80%] font-bold my-2 ">Billing</p>

                <p className="flex mx-auto my-2 w-[80%] bg-gray-200 p-4  justify-between ">
                    <p>i phonr x</p>
                    <p>250</p>
                </p>
               </billing>
                </div>

              <div>

                <product className="space-y-3 shadow-md overflow-y-scroll ">
                <ProductItem/>
                <ProductItem/>
                

                </product>
                <button className="p-1 w-[90%] my-2 bg-black text-white ">Order</button>
              </div>

            </main>
        </div>
    )

}