import React, {Component} from 'react';
import axios from 'axios';
import Header from '../Header';
import RestaurantDisplay from './restaurantDisplay';
import Footer from '../footer'

class RestaurantAPI extends Component{
    constructor(props){
        super();
        this.state={
            restaurantData:''
        }
    }

    render(){
        return(
            <div>
                <Header/>
                <div>
                    <RestaurantDisplay data={this.state.restaurantData}/>
                </div>
                <Footer/>
            </div>
        )
    }

    componentDidMount(){
        var rest_id = this.props.match.params.restaurant;
        axios.get(`http://localhost:8900/restaurant/${rest_id}`)
        .then((response) => {this.setState({
            restaurantData:response.data
        })})
    }
}

export default RestaurantAPI;