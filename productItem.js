import React from "react";
export default function ProductItem(){
return(
    <div className=" border w-[100%]  shadow-sm h-fit   p-5 relative ">
       <div className="flex space-x-1 justify-around p-2 ">
        <img className="w-[150px]" src="https://th.bing.com/th/id/OIP.VWbXLiJ_JQLg1OjiEbbOBAHaDx?w=349&h=178&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
        <div className="space-y-3 my-3   ">
            <p>Title iphone ipad </p>
            <p>Price</p>
            <p>Qty : 1</p>

        </div>
       </div>

       <button className="absolute right-2 bottom-2  p-1 text-xs   bg-black text-white ">Remove</button>
    </div>
)
}