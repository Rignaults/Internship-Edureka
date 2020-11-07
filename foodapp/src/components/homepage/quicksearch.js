import React from 'react';
import './css/quicksearch.css';
import American from '../../assets/American.jpg';
import Indian from '../../assets/Indian.jpg';
import Afghan from '../../assets/Afghan.jpg';
import Chinese from '../../assets/Chinese.jpg';

import {Link} from 'react-router-dom';

const QuickSearch = () => {
    return(
        <div className="container container-card">
            <div className="row" style={{marginBottom:30,textAlign:"left"}}>
                <div className="col-sm-12 mx-auto" style={{fontSize:30,fontWeight:600}}>Popular Cuisnes</div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-3 boxbox" style={{marginBottom:20}}>
                    <Link to={'restaurantList/American'}>
                        <img src={American} alt="coudlnt load"/>
                    </Link>
                    <div className="text-on-top">American</div>
                </div>
                <div className="col-sm-3 boxbox" style={{marginBottom:20}}>
                    <Link to={'restaurantList/Indian'}>
                        <img src={Indian} alt="coudlnt load"/>
                    </Link>
                    <div className="text-on-top">Indian</div>
                </div>
                <div className="col-sm-3 boxbox" style={{marginBottom:20}}>
                    <Link to={`restaurantList/Afghan`}>
                        <img src={Afghan} alt="coudlnt load"/>
                    </Link>
                    <div className="text-on-top">Afghan</div>
                </div>
                <div className="col-sm-3 boxbox" style={{marginBottom:20}}> 
                    <Link to={`restaurantList/Chinese`}>
                        <img src={Chinese} alt="coudlnt load"/>
                    </Link>
                    <div className="text-on-top">Chinese</div>
                </div>
            </div>
        </div>
    )
}

export default QuickSearch;