import React, {Component} from 'react';
import axios from 'axios';

class BoroughFilter extends Component{

    render(){
        return(
            <React.Fragment>
                <br/>
                <center>Location</center>
                        <hr/>
                        <div className="container filter-container" onChange={this.filterBorough}>
                            <label className="radio">
                                <input type="radio" value="" name="borough"/>  All
                            </label><br/>
                            <label className="radio">
                                <input type="radio" value="Bronx" name="borough"/>  Bronx
                            </label><br/>
                            <label className="radio">
                                <input type="radio" value="Brooklyn" name="borough"/>  Brooklyn
                            </label><br/>
                            <label className="radio">
                                <input type="radio" value="Manhattan" name="borough"/>  Manhattan 
                            </label><br/>
                            <label className="radio">
                                <input type="radio" value="Missing" name="borough"/>  Missing
                            </label><br/>
                            <label className="radio">
                                <input type="radio" value="Queens" name="borough"/>  Queens
                            </label><br/>
                            <label className="radio">
                                <input type="radio" value="Staten Island" name="borough"/>  Staten Island
                            </label>
                            <br/>
                        </div>
            </React.Fragment>
        )               
    }

    filterBorough = (event) => {
        let borough = event.target.value;
        let url='http://localhost:8900/restaurantList';
        if(borough!==''){
            url+=`?borough=${borough}`;
        }
        axios.get(url)
        .then((response) => {this.props.boroughName(response.data)})
            
    }
}

export default BoroughFilter;