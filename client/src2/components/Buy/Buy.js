import React from "react";
import Card from "../Card/Card";
import "./Buy.css"

const Buy = (props) => {
    return <>
        <div className='Header'>
            <div className={props.c1} id='here'>
                NEW PROPERTIES
                <span className={props.c2}>FOR SELL</span>
            </div>
            <div className='parent'>
                <div className='cards'>
                    <Card />
                </div>
            </div>
        </div>
    </>
}

export default Buy;