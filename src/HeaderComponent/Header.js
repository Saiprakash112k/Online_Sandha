import React, { useEffect, useState } from "react";
import "./Style.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { CallMe,remove} from "../Reducer/ReducerFile";
import * as CommonFunction  from "../CommonFunc/Func";


const HeaderComponent = () => {
    const dispatch = useDispatch()
    const [status, setStatus] = useState(false);
    const [stat, setStat] = useState(false);
    const [addcartValue, setAddcartValue] = useState([]);
    const count = useSelector(state =>
        state.AddCart.counter
    )
    const Qvalue = useSelector(state => state.AddCart.value)
    const value = useSelector(state => state.AddCart.StoreData)

    useEffect(() => {
        setAddcartValue([...value]);
        if(addcartValue.length == 0){
            setStatus(false)
        }
    }, [value])
    const ClickHere = () => {
        
        // setAddcartValue(value);
        if (status == false && addcartValue.length>0) {
            setStatus(true)
        }
        else {
            setStatus(false)
        }
    }

    const removeHere = (a) => {
        addcartValue.splice(a, 1)
        console.log(addcartValue)
        dispatch(remove(addcartValue))

    }

    return (<>
        <div>
            <div>
                <div className="header" >
                    <div className="d-flex ac-jc w-50">
                        <h2>Online Sandha</h2><i className="fa fa-shopping-cart" aria-hidden="true"></i>
                        <div className="d-flex three-lines">
                            <div ></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>

                    <div className="add-Cart d-flex  w-50">
                    <div className="cat-box">
    <button onClick={()=>{setStat(CommonFunction.stat(stat))}}>Catorey</button>
   {(stat==true)&& <div className="catorey">
   <ul className="heading-tags js">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/Vegetable">Vegetables</Link></li>
                            <li><Link to='/Friuts'>Fruits</Link></li>
                            <li><Link to='/Meat'>Meat</Link></li>
                        </ul>
    </div>}
</div>
                    
                        <div className="d-flex ac-jc">
                            <i class="fa fa-caret-down" aria-hidden="true" onClick={() => { ClickHere() }}></i> <h3>({count})AddCart</h3>
                        </div>
                    </div>
                    {
                        (status == true) &&
                        <div className="add-arrow">
                            {addcartValue.map((item, index) => {
                                return (
                                    <div className=" d-flex ac-jc arrow">
                                        <p className="white">{item.Head}</p>
                                        <p className="white">{Qvalue*item.Rate}</p>
                                        <p className="white">{Qvalue}Kg</p>
                                        <i class="fa fa-trash" aria-hidden="true" onClick={() => { removeHere(index) }}></i>
                                    </div>
                                )
                            })}

                        </div>
                    }


                </div>
            </div>
        </div>


    </>)
}

export default HeaderComponent;