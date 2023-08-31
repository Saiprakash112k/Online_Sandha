import React from "react";
import CardComponent from "../CardComponent/Card";
const Data = require("../Data/Data.json")

const FruitComponent = ()=>{


    return(
               <div className="card  d-flex js">
        {
            Data.FruitsData.map((item)=>{
                return(<CardComponent ItemValue = {item}/>)
            })
        }
        </div>
    )
}
export default FruitComponent;