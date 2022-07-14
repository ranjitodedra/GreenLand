import React from "react";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";


const Properties = (props) => {

    return <>
        <div className='Header'>
            <div className={props.c1} id='here'>
                <span className={props.c2}>FOR SELL</span>
            </div>
            <div className='parent'>
                <div className='cards'>
                    <Card />
                </div>
            </div>

            <div className={props.c1} id='here'>
                <span className={props.c2}>FOR RENT</span>
            </div>
            <div className='parent'>
                <div className='cards'>
                    <Card2 />

                </div>
            </div>
        </div>

    </>
}

export default Properties;