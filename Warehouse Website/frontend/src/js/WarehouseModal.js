import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import AddWarehouse from './AddWarehouse';
import '../sass/WarehouseModal.css';



class WarehouseModal extends Component {

    upload = (e) => {
        e.preventDefault();
        
        const {warehouseName, street, city, country, postalCode, name, phone, email, type} = this.inputForm;
        
        
        // this gets the values of the inputs 
        // and stores it in a variable called uploadData
        let uploadData = {
            "warehouseName": warehouseName.value,
            "street": street.value,
            "city": city.value,
            "country": country.value,
            "postalCode": postalCode.value,
            "name": name.value,
            "phone": phone.value,
            "email": email.value,
            "type": type.value
        }

        // this is to prepare for fetch POST request
        let options = {
            method: 'POST',
            body: JSON.stringify(uploadData), // changes the input values into json string
            headers: {
                'content-type': 'application/json'
            }
        }
        // this is the fetch POST request
        fetch('http://localhost:3001/api/warehouses/create', options)
        .then(response => response.json())
        .then(data => {
            // console.log(this.props.history)
            this.props.requestWarehouses();
            this.props.history.push('/') //this code doesn't work - trying to redirect to the homepage
        })
    }

    render() {

        return (
            <div className='modal-layer' onClick={this.props.handleClose} 
                                            style={ {...modalLayer, display: this.props.isOpen ? 'flex' : 'none'} }>
                <div onClick={(e)=>{e.stopPropagation();}} className="form-modal" style={formModal}>
                    <div className="modal-header" style={modalHeader}>
                        
                        <div className="close-container" style={closeContainer}>
                            <h3>Add a new storage location</h3>
                            <span onClick={this.props.handleClose}>Close</span>
                        </div>
                        
                        <h6 style={modalHeaderH6}>
                            <div className="input__form">
                                <form ref={form=>(this.inputForm = form)}>
                                    <label htmlFor="warehouseName">Warehouse Name</label>
                                    <input type="text" name="warehouseName"/>
                                    <div className="input__form--content">
                                        <div className="input__form--left">
                                            <h3>Address</h3>
                                            <label htmlFor="street">Street Number & Name</label>
                                            <input type="text" name="street"/>
                                            <label htmlFor="city">City</label>
                                            <input type="text" name="city"/>
                                            <label htmlFor="country">Country</label>
                                            <input type="text" name="country"/>
                                            <label htmlFor="postalCode">Postal Code</label>
                                            <input type="text" name="postalCode"/>
                                        </div>

                                        <div className="input__form--right">
                                            <h3>Contact Information</h3>
                                            <label htmlFor="name">Warehouse Manager's Name</label>
                                            <input type="text" name="name"/>
                                            <label htmlFor="inputContact">Phone Number</label>
                                            <input type="text" name="phone" />
                                            <label htmlFor="inputContact">Email Address</label>
                                            <input type="text" name="email" />
                                            <label htmlFor="inputContact">Inventory Type</label>
                                            <input type="text" name="type" />
                                        </div>
                                    </div>
                                </form>
                                <button className="addWarehouse__btn" type="submit" onClick={this.upload}>Save location</button>
                            </div>
                        </h6>
                        
                    </div>
                </div>
            </div>
        );
    }
}

WarehouseModal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default WarehouseModal;

const modalLayer = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(58,58,58,0.8)',
    overflow: 'hidden',
    left: 0,
    top: 0
}
  
const formModal = {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    width: '600px',
    maxWidth: '100%',
    height: '600px',
    maxHeight: '100%',
    zIndex: 2,
    borderRadius: '3px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
}

const modalHeader = {
    margin: '2rem 3rem'
    // display: 'flex',
    // justifyContent: 'space-between',
    // alignContent: 'center'
}

const modalHeaderH6 = {
    margin: 0
}

const closeContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}



  