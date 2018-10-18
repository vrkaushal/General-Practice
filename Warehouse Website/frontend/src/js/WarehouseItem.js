import React from 'react';
import '../sass/Warehouse.css';

class WarehouseItem extends React.Component {
    render() {
        // destructuring our object for convenience
        const { warehouseName, address, contact, type } = this.props;

        return (
            <section className="section__warehouse">
                <h2>{warehouseName}</h2>
                <div className="warehouse__content">
                    <div className="warehouse__content--left">
                        <div className="address">
                            <h4>Address</h4>
                            <p>{address.street}</p>
                            <span>{address.city}, </span>
                            <span>{address.country}</span>
                            <p>{address.postalCode}</p>
                        </div>
                    </div>

                    <div className="warehouse__content--middle">
                        <div className="contact">
                            <h4>Contact</h4>
                            <span>{contact.name}, </span>
                            <span>{contact.occupation}</span>
                            <p>{contact.phone}</p> 
                            <p>{contact.email}</p>
                        </div>
                    </div>

                    <div className="warehouse__content--right">
                        <h4>Inventory Type</h4>
                        <div className="type">
                            <p>{type}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default WarehouseItem;