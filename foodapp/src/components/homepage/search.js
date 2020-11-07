import React,{Component} from 'react';
import './css/search.css'

const allDistinctLocations='http://localhost:8900/locations'
const restaurantListUrl='http://localhost:8900/restaurantList'

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            boroughData:'',
            restaurantData:''
        }
    }

    render(){
        return(
            <div className="container" id="home-background">
                <div className="row">
                    <div className="col-sm-12" style={{height:150,minHeight:0}}></div>
                </div>
                <div className="row">
                    <div className="col-sm-12" id="logo">Project Food</div>
                </div>
                <div className="row">
                    <div className="col-sm-12" style={{height:50,minHeight:0}}></div>
                </div>
                <div className="row">
                    <div className="col-sm-12" style={{fontSize:35,color:"white"}}>Discover the best food here!</div>
                </div>
                <div className="row">
                    <div className="col-sm-12" style={{height:50,minHeight:0}}></div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <select className="dropdown" onChange={this.handleBoroughChange}>
                            <option>Select City</option>
                            {this.renderBoroughs(this.state.boroughData)}
                        </select>
                        <select className="searchbox" onChange={this.handleRestaurantChange}>
                            <option>Select Restaurant</option>
                            {this.renderRestaurants(this.state.restaurantData)} 
                            <option>Click here for more</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(allDistinctLocations,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState(
                {boroughData:data}
            )
        })
    }

    //Event Handling Functions
    handleBoroughChange=(event)=>{
        fetch(`${restaurantListUrl}?borough=${event.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                restaurantData : data.slice(0,5)
            })
        })
    }

    handleRestaurantChange=(event)=>{
        if(event.target.value!=='Click here for more' && event.target.value!=='Select Restaurant'){
            this.props.restaurantId(event.target.value)
        }

    }

    //Render Functions
    renderBoroughs=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item} key={item}>
                        {item}
                    </option>
                )
            })
        }
    }

    renderRestaurants=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.name}
                    </option>
                )
            })
        }
    }
}

export default Search;