import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../Header'
import Footer from '../footer'

class PlaceOrder extends Component {
    constructor() {
        super();

        this.state = {
            order_id: Math.floor(Math.random() * 10000),
            name: ''
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container" style={{fontFamily:"Poppins", paddingTop:20, paddingBottom:20}}>
                    <div className='panel-heading'>
                        <h4>Place Booking</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div className="control-label">Order_id:</div>
                            <input type="text" name="order_id" readOnly className="form-control" value={this.state.order_id} />
                        </div>
                        <div className="form-group">
                            <label className="control-label">Name</label>
                            <input type="text" name="name" className="form-control" value={this.name} onChange={this.handleNameChange} />
                        </div>
                        <Link to={`/${this.props.match.params.id}`}><button className="btn btn-danger">Back</button></Link>
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = () => {
        var data = {
            _id: this.state.order_id,
            name: this.state.name
        }

        axios.post('http://localhost:8900/placeorder', data)
            .then(res => console.log('Success'))
            .then(this.props.history.push('/view/orders'))
            .catch(err => console.log(err))
    }
}

export default PlaceOrder;