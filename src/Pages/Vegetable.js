import React from "react";
import CardComponent from "../CardComponent/Card";
const Data = require("../Data/Data.json")
const VegComponent = ()=>{


    return(
        <div className="card d-flex js">
            { Data.VegetablesData.map((item)=>{
    return(            <CardComponent ItemValue = {item}/>
    )
})}
        </div>
    )

}
export default VegComponent;