import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './homepage/home';
import ListingApi from './restaurantlisting/listingApi'
import RestaurantDetail from './restaurantdetail/restaurantAPI';
import PlaceOrder from './orders/forms';
import ViewOrder from './orders/orderAPI';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/restaurantList/:cuisine" component={ListingApi}></Route>
                <Route exact path="/:restaurant" component={RestaurantDetail}></Route>
                <Route exact path="/order/:id" component={PlaceOrder}></Route>
                <Route exact path="/view/orders" component={ViewOrder}></Route>
            </div>
        </BrowserRouter>
    )
}

export default Routing;