import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header';
import ListingDisplay from './listingDisplay';
import BoroughFilter from '../filters/boroughFilter'
import './css/listingDisplay.css'

const restaurantListUrl = 'http://localhost:8900/restaurantList';

class Listing extends Component {
    constructor(props) {
        super();
        this.state = {
            listingData: ''
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row" id="big-container">
                        <div className="col-md-2">
                            <BoroughFilter boroughName={(data) => { this.setDataPerFilter(data) }} />
                        </div>
                        <div className="col-md-10">
                            <ListingDisplay restaurantData={this.state.listingData} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }

    componentDidMount() {
        var cuisine = this.props.match.params.cuisine;
        axios.get(`${restaurantListUrl}?cuisine=${cuisine}`)
            .then((response) => {
                this.setState({
                    listingData: response.data
                })
            })
    }

    setDataPerFilter(sortedData) {
        this.setState({ listingData: sortedData })
    }
}

export default Listing;