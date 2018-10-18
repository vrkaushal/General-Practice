import React from 'react';
import InventoryItem from './InventoryItem';
import {Link } from 'react-router-dom';
import '../sass/InventoryStylesheet.css';



    class InventoryList extends React.Component {

        render(){

           console.log(this.props.furniture)

            //we know that furniture is in state and inventoryObject is in furniture 
            //productName below a an e.g. is the productName at that iteration of the array so 0, 1, 2 etc

            return(
                <div className="inventory">
                    {this.props.furniture.map(inventoryObject =>{
                        return (
                            <Link to={`/warehouse/:id/inventory/${inventoryObject.id}`}>
                                <InventoryItem
                                    productName={inventoryObject.productName}
                                    productSummary={inventoryObject.productSummary}
                                    lastOrdered={inventoryObject.lastOrdered}
                                    location={inventoryObject.location}
                                    quantity={inventoryObject.quantity}
                                    status={inventoryObject.status} 
                                    /> 
                            </Link> 
                        )
                    })}
                </div> 
            )
        }
    }

export default InventoryList; 