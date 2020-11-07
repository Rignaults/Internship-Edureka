import React from 'react';

const orderDisplay = (props) => {

    const renderTable = ({ orderdata }) => {
        if (orderdata) {
            return orderdata.map((item) => {
                return (
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.name}</td>
                        <td>Order Placed</td>
                    </tr>
                )
            })
        }
    }

    return (
        <div className="container" style={{fontFamily:"Poppins"}}>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8 text-center">
                    <center><h3>Booking List</h3>
                    <table className="table table-responsive">
                        <thead>
                            <tr>
                                <th>Order Id</th>
                                <th>Name</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTable(props)}
                        </tbody>
                    </table></center>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default orderDisplay;