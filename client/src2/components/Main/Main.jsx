import React from "react";
import Card from "../Card/Card";
import { NavLink } from 'react-router-dom';

const Main = (props) => {
    console.log(props);
    return<>
        <div className='Header'>
        <div className={props.c1} id='here'>
          NEW PROPERTIES
          <span className={props.c2}>FOR SELL</span>
        </div>
        <div className='parent'>
          <div className='cards'>
            <Card />
           
          </div>
          {/* <button className={props.c3}>View More</button> */}
          <NavLink className={props.c3} to="/buy" id="con">View More</NavLink>
        </div>
        </div>
    </>
}

export default Main;