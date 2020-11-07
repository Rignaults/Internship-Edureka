import React from 'react';
import { Link } from 'react-router-dom';
import './restaurantDetails.css'
import image1 from '../../assets/carousal-1.jpg'
import image2 from '../../assets/carousal-2.jpg'
import image3 from '../../assets/carousal-3.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const RestaurantDisplay = (props) => {

    const renderRest = ({ data }) => {
        if (data) {
            return (
                <div className="container restaurant_card" id={data[0].restaurant_id}>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <h1>{data[0].name}</h1><br />
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={image1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={image2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={image3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                            <br />
                            <div>
                                <Tabs>
                                    <TabList>
                                        <Tab>Overview</Tab>
                                        <Tab>Contact</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="container tabview">
                                            Cuisine : {data[0].cuisine}
                                            <br />
                                            Location : {data[0].borough}
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="container tabview">
                                            Address : {data[0].address.building}, {data[0].address.street}, {data[0].address.zipcode}
                                            <br />
                                            Number : 1234567890
                                            <br />
                                            E-Mail : restaurant@email.com
                                        </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-md-12 text-right">
                                    <Link to={`/order/${data[0].restaurant_id}`}>
                                        <button className="btn btn-success">Place Order</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <div className="row justify-content-center" style={{ paddingTop: 50 }}>
                        <div className="loader"></div>
                    </div>
                </div>
            )
        }
    }

    return (
        <div>
            {renderRest(props)}
        </div>
    )
}

export default RestaurantDisplay;