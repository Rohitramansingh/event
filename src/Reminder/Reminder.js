import React, { useState } from "react";
import Rnavbar from "./Rnavbar";
import Event from "./Event";
function Reminder() {
    const [data, setdata] = useState({name:"",date:""});
    const[array,setarray]=useState([]);

    const inputevent = (e) => {
        const {name,value} = e.target;
        setdata((p)=>{
            return{
                ...p,
                [name]:value,
            }
        });
 }

 const reset=()=>{
     setdata((p)=>{
         return{
             name:"",
             date:""
         }
     });
 }

    const action=()=>{
       setarray((prevalue)=>{
           return(
               [...prevalue,data]
                )

       });
       setdata(" ");
       reset();
    }


    const deletitem=(id)=>{
        setarray((prevalue)=>{
            return prevalue.filter((ele,index)=>{
                return index!=id;
            })
        })
       
    }

    
    return (
        <div  >
            <h4 className="navbar text-center block">Reminder </h4>

            <div className="add_event mb-5">
                <input
                    className="input_size"
                    type="text"
                    placeholder="Enter title"
                    name="name"

                    value={data.name}
                    onChange={inputevent}
                ></input>
                <input 
                className="input_size"
                 type="date"
                  placeholder="Enter date"
                  name="date"
                  value={data.date}
                  onChange={inputevent}
                  >

                </input>
                <button className="add_event_button" onClick={action}>+</button>

            </div>

            <div className=" display_event">
                {
                array.map((p,index)=>{
                    return < Event key={index} fname={p.name} date={p.date} id={index}  onSelect={deletitem} />

                })
               
                }
               
             
            </div>

        </div>
    )
}

export default Reminder;