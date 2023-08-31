import React, { useState } from "react";
import "./Card.css";
import * as CommonFunction  from "../CommonFunc/Func";
import { useSelector,useDispatch } from "react-redux";
import { CallMe } from "../Reducer/ReducerFile";

const CardComponent = (props) => {

    const stateValue = props.ItemValue
    const {Image,Head,Rate,Quan,discount,id} = props.ItemValue
    const [value,setValue]= useState(1)
    const dispatch = useDispatch()

    return (
        <>
            
                <div key={id} className="content">



                    <div className="img-card"><img src={require(`../Images/${Image}.jpg`)} alt={Head} /></div>
                    <div className="hp-content">
                        <div className="heading"><h3>{Head}</h3></div>
                        <div className="d-flex js">
                            <input className="input-value" placeholder={`${value}Kg - Rs ${Rate*value}`} /><div className="dis">Discount - {discount}</div>
                        </div>
                    </div>
                    <div className="d-flex js dis-qan">
                        <div className="d-flex order">
                            <button className="di-Btn" onClick={()=>{setValue(CommonFunction.Decrement(value))}}>-</button> <p>{value}</p><button className="di-Btn" onClick={()=>{setValue(CommonFunction.Increment(value))}}>+</button>
                        </div>
                    </div>
                    <div>
                        <button className="order-now" onClick={()=>{dispatch(CallMe({stateValue,value}))}}>ADD CART</button>
                    </div>
                </div>
        </>
    )
}
export default CardComponent;