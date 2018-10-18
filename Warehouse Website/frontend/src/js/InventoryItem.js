import React from 'react';
import '../sass/InventoryStylesheet.css';


class InventoryItem extends React.Component {
    
    render() {

        return(
            <div>
                <div className="inventory-div">
                    <div className="item-div">
                        <h5 className="product-name">{this.props.productName}</h5>
                        <p className="product-description">{this.props.productSummary}</p>
                    </div>
                    <p className="last-ordered">{this.props.lastOrdered}</p>
                    <p className="location">{this.props.location}</p>
                    <p className="quantity">{this.props.quantity}</p>
                    <p className="status">{this.props.status}</p>
                    
                    <p className="filter-div"><img src="/icons/rowmenu.svg" alt="row menu"/></p>
                </div>
            </div> 
        )
    }
}

export default InventoryItem; 