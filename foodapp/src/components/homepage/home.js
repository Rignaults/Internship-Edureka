import React from 'react';
import Search from './search';
import QuickSearch from './quicksearch';
import Footer from '../footer'

const Home = (props) => {
    const handleEvent = (data) => {
        props.history.push(`/${data}`)
    }
    return(
        <div>
            <Search restaurantId={(data) => {handleEvent(data)}}/>
            <QuickSearch/>
            <Footer/>
        </div>
    )
}

export default Home;