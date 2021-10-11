import React from "react";
function Event(props)
{
    return (
        <div className="d1 mt-4">
            <div className="d1_date">{props.date}</div>
         <h4 className="d1_h3">{props.fname}</h4>
         
         <button className="d1_button" onClick={()=>{props.onSelect(props.id)}}>X</button>
        </div>
    )
}
export default Event;