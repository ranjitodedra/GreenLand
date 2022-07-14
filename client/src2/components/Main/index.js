import React from "react";
import Card from "../Card/Card";


const Main = (props) => {
 

  
    return<>
        <div className='Header'>
        <div className={props.c1} id='here'>
          NEW PROPERTIES
          <span className={props.c2}>{props.line1}</span>
        </div>
        <div className='parent'>
          <div className='cards'>
            
          </div>
          <button className={props.c3}>View More</button>
        </div>
      </div>
    </>
}

export default Main;