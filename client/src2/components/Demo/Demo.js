import React from 'react';
// import './card.css';
import Details from  '../Details/Details.jsx';
import {useLocation} from 'react-router-dom';


const Demo = (ankit) => {
    const location = useLocation();
    return<>
            <Details
                 
                 
                 title1 = {location.state.name}
                 price = {location.state.alt}
                 url1 = {location.state.src}
                 url2 = {location.state.src1}
                 url3 = {location.state.src2}
                 description = {location.state.description}
                 bed = {location.state.bed}
                 bath = {location.state.bath}
                 sqft = {location.state.sqft}
                 levels = {location.state.levels}
                 built_year = {location.state.built_year}
                 main_location ={location.state.main_location}
                 email = {location.state.email}
                 phone = {location.state.phone}
                 type =   {location.state.type}           
               />
            

    </>
   
}

export default Demo;