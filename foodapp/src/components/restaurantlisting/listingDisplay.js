import React from 'react';
import {Link} from 'react-router-dom';
import './css/listingDisplay.css'
import Thumb from '../../assets/restaurant.jpg'

const ListingDsiplay = (props) => {

    const renderRestaurant = ({restaurantData}) => {
        if(restaurantData){
            return restaurantData.map((item) => {
                return(
                    <span className="border" key={item.restaurant_id}>
                    <div className='container item' id={item.restaurant_id} key={item.restaurant_id}>
                        <div className='row'>
                            <div className="col-md-2">
                                <img src={Thumb} alt="thumb"></img>
                            </div>
                            <div className='col-md-10'>
                                <h3>{item.name}</h3>
                                <hr/>
                                <div>Cuisine : {item.cuisine}</div>
                                <div>Location : {item.borough}</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                            <div className="col-md-12 text-right">
                            <Link to={`/${item.restaurant_id}`}>
                                <button className="btn btn-success text-right" value="View Details">View Details</button>
                            </Link>
                            </div>
                        </div>
                        
                    </div>
                    </span>
                    
                )
            })
        }
        else{
            return(
                <div  className="container">
                    <div className="row justify-content-center" style={{paddingTop:50}}>
                        <div className="loader"></div>    
                    </div> 
                </div>
            )
        }
    }

    return(
        <div className="container-fluid">
            {renderRestaurant(props)}
        </div>
    )
}

export default ListingDsiplay;