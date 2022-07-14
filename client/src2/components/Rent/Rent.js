import React from "react";
import Card2 from "../Card/Card2";
import "./Rent.css"

const Rent = (props) => {

    return<>
        <div className='Header'>
        <div className={props.c1} id='here'>
          NEW PROPERTIES
          <span className={props.c2}>FOR RENT</span>
        </div>
        <div className='parent'>
          <div className='cards'>
            <Card2/>
          </div>
        </div>
      </div>
    </>
}

export default Rent;