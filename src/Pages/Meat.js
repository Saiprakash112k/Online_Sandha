import React from "react";
import CardComponent from "../CardComponent/Card";
const Data = require("../Data/Data.json")

const MeatComponent = ()=>{


    return(
               <div className="card  d-flex js">
        {
            Data.MeatData.map((item)=>{
                return(<CardComponent ItemValue = {item}/>)
            })
        }
        </div>
    )
}
export default MeatComponent;