import React, {Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay'
import Header from '../Header'
import Footer from '../footer'

class OrderAPI extends Component{
    constructor(){
        super()

        this.state={
            bookings:''
        }
    }

    render(){
        console.log(this.state.bookings)
        return(
            <div>
                <Header/>
                <OrderDisplay orderdata={this.state.bookings}/>
                <Footer/>
            </div>
        )
    }

    async componentDidMount(){
        const response = await axios.get('http://localhost:8900/orders')
        this.setState({bookings:response.data})
    }
}

export default OrderAPI;