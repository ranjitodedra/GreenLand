import React from "react";
import Card2 from "../Card/Card2";
import { NavLink } from 'react-router-dom';

const Main = (props) => {
   
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
          {/* <button className={props.c3}>View More</button> */}
          <NavLink className={props.c3} to="/rent" id="con">View More</NavLink>
        </div>
      </div>
    </>
}

export default Main;