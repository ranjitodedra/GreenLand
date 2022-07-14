import React from 'react';
// import './card.css';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = () => {
    const navigate = useNavigate();

    const [modalShow, setModalShow] = useState(false);
    const [houses, setHouses] = useState([
        {
            title: "",
            address: "",
            url: "",
        },

    ])

    const [House, setHouse] = useState({
        title: "",
        address: "",
    })


    useEffect(() => {
        fetch("http://localhost:3001/buy")
            .then((res) => res.json())
            .then((jsonRes) => setHouses(jsonRes));

    }, []);

    const handleClick = async (e) => {
        setModalShow(true);


        const { name } = e.target;

        {
            houses.map(house => {


                if (house._id == name) {
                    navigate('/demo', {
                        state: {
                            name: house.title1 || "abcsd", alt: house.price || "$10000", description: house.Description || "this is a amagin ", src: house.url1 || "", src1: house.url2 || "", src2: house.url3 || "", bed: house.bed || 3, bath: house.bath || 4,
                            sqft: house.sqft || 2344, levels: house.levels || 5, built_year: house.built_year || 2023, main_location: house.main_location || "england", email: house.email, phone: house.phone, type: house.type
                        }
                    });

                }

            })
        }

    }

    return <>

        <>

            {houses.map(house => {

                return <>
                    <div className="main"   >
                        <view>


                        </view>

                        <div className="img" >


                            <img src={house.url1} alt={house.price} name={house._id} onClick={handleClick} />
                        </div>
                        <div className="container">
                            <p className="add1">{house.title} </p>
                            <p className="add2">{house.address}</p>
                            <p className="price" >{house.price}</p>

                            <hr />
                            <div className="data" >
                                <div className="d">
                                    <img src={require('../../Icon/icons8-empty-bed-50.png')} alt="" />
                                    <p className="t">Bed</p>
                                    <p className="digit">{house.bed}</p>
                                </div>
                                <div className="d">
                                    <img src={require('../../Icon/icons8-bath-48.png')} alt="" />
                                    <p className="t">Bath</p>
                                    <p className="digit">{house.bath}</p>
                                </div>
                                <div className="d">
                                    <img src={require('../../Icon/icons8-city-buildings-48.png')} alt="" />
                                    <p className="t">Levels</p>
                                    <p className="digit">{house.levels}</p>
                                </div>
                                <div className="d">
                                    <img src={require('../../Icon/icons8-surface-64.png')} alt="" />
                                    <p className="t">Sqft</p>
                                    <p className="digit">{house.sqft}</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* </div> */}
                </>
            })}


        </>

    </>


}

export default Card;