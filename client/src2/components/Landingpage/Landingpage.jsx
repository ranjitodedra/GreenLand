import React from 'react';
// import Navbar from '../Navbar/Navbar';
// import Reviews from "../Reviews/Reviews";
import Main from '../Main/Main';
import Main2 from '../Main/Main2';
import FeedBack from '../Feedback/FeedBack';
import "../../App.css";
import Footer from '../Footer/Footer_page';

const LandPage = () => {
    return (
        <div>
            <div className='bg_img'>
                <div className='Center'>
                    <p className='Title'>Your <span className='s'>Dream</span> Home</p>
                    <p className='Title1'>Is Waiting For You!</p>
                    <button className='Btn'>Explore</button>
                </div>
            </div>

            <section id="cards">
                <div className='back_shape_right'></div>
                <Main

                    c1="l1"
                    c2="l1_"
                    c3="v1"
                />
                <div className='back_shape_left'></div>
                <Main2

                    c1="l2"
                    c2="l2_"
                    c3="v2"
                />

            </section>
            <p className='space'></p>

            <section id="reviews">
                {/* <div className='back_shape_right'></div> */}
                <div className='carousel_outer'>
                    <p className='feedback'> What our clients says... </p>
                    <div className='carousel_inner'>

                        <FeedBack name="Username 1" />
                        <FeedBack name="Username 2" />
                        <FeedBack name="Username 3" />

                    </div>
                </div>
            </section>

            <p className='space'></p>

            <Footer />


        </div>
    )
}

export default LandPage;