import React from 'react';
import WarehouseItem from './WarehouseItem';
import {Link} from 'react-router-dom';
import '../sass/Warehouse.css';
import WarehouseModal from './WarehouseModal';

// WAREHOUSE LIST 
class WarehouseCard extends React.Component {

    state = {
        isOpen: false
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        // console.log(this.props.history)
        const warehouseArray = this.props.warehouses;
        // console.log('warehouses:', this.props.warehouses);
        
        let warehouseCard = warehouseArray.map(warehouse => {
            return (
                <Link to={`/warehouse/${warehouse.id}/products`}>
                    <WarehouseItem warehouseName={warehouse.warehouseName}
                                   address={warehouse.address}
                                   contact={warehouse.contact}
                                   type={warehouse.type}
                                   key={warehouse.id} />
                </Link>
            )
        })
        return (
            <div className="main__content">
                <button id="modalBtn" onClick={() => this.setState({isOpen: true})}><p>+</p></button>
                <WarehouseModal isOpen={this.state.isOpen} 
                                handleClose={this.handleClose} 
                                history={this.props.history} 
                                requestWarehouses={this.props.requestWarehouses} />

                <div className="main__content--heading">
                    <h1>Locations:</h1>
                    <h4>Filter</h4>
                </div>
                <div className="main__content--warehouses">
                    {warehouseCard}
                </div>
            </div>
        )
    }
}

export default WarehouseCard;
