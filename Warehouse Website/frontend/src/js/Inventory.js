import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import InventoryList from './InventoryList.js';
import '../sass/InventoryStylesheet.css';


class Inventory extends React.Component {

    render() {
        return(
            <div>
                <div className="main-wrapper">
                    <div className="main-title-div">
                        <h4 className="inventory-header">Inventory</h4>
                        <h5 className="filter-button">Filter</h5>
                    </div>
                    <div className="inventory-wrapper">
                        <div className="inventory-title-div">
                            <h5 className="product-name-title">Item</h5>
                            <h5 className="last-ordered-title">Last Ordered</h5>
                            <h5 className="location-title">Location</h5>
                            <h5 className="quantity-title">Quantity</h5>
                            <Link to={`/`} ><h5 className="status-title">Status</h5></Link>
                        </div>
            
            {/*the variable name below furniture is a prop and its value is whatever is stored in state at inventory*/}
            <InventoryList furniture={this.props.inventory}/>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Inventory; 