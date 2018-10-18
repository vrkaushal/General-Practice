import React, { Component } from 'react';
import InventoryItem from './InventoryItem';
import '../sass/InventoryStylesheet.css';

class FilteredInventory extends Component {
    
    state = {
        filteredList: []
    }

    componentDidMount() {
        // fectch based on the warehouse
        let id = this.props.match.params.warehouseId;

        fetch(`http://localhost:3001/api/warehouse/${id}/products`)
        .then(response => response.json())
        .then(filteredInventory => 
            this.setState({
                filteredList: filteredInventory
            })
        );
    }

    
    render() {
        if(!this.state.filteredList.length){
            return 'loading...';
        }

        return (
            <div className="filteredInventory__content">
                <h4>Warehouse  Number</h4>
                {this.state.filteredList.map(inventoryItem=>{
                    return <InventoryItem
                    productName={inventoryItem.productName}
                    productSummary={inventoryItem.productSummary}
                    lastOrdered={inventoryItem.lastOrdered}
                    location={inventoryItem.location}
                    quantity={inventoryItem.quantity}
                    status={inventoryItem.status} 
                    /> 
                })}
            </div>
        );
    }
}

export default FilteredInventory;