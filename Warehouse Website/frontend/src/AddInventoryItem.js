import React, { Component } from "react";

class AddInventoryItem extends Component {
  upload = e => {
    e.preventDefault();

    const {
      productName,
      productSummary,
      productDescription,
      lastOrdered,
      location,
      quantity,
      status,
      orderedBy,
      refNumber,
      category
    } = this.inputForm;

    // this gets the values of the inputs
    // and stores it in a variable called itemData
    let itemData = {
      productName: productName.value,
      productSummary: productSummary.value,
      productDescription: productDescription.value,
      lastOrdered: lastOrdered.value,
      location: location.value,
      quantity: quantity.value,
      status: status.value,
      orderedBy: orderedBy.value,
      refNumber: refNumber.value,
      category: category.value
    };

    // this is to prepare for fetch POST request
    let options = {
      method: "POST",
      body: JSON.stringify(itemData), // changes the input values into json string
      headers: {
        "content-type": "application/json"
      }
    };
    // this is the fetch POST request
    fetch("http://localhost:3001/:warehouseId/inventory", options)
      .then(response => response.json())
      .then(data => {
        // console.log(this.props.history)
        this.props.requestInventory();
      });
  };
  render() {
    return (
      <div style={{ ...flex, display: this.props.isOpen ? "flex" : "none" }}>
        <div
          className="modal-layer"
          onClick={this.props.handleClose}
          style={{ ...modalLayer }}
        />
        <div className="form-modal" style={formModal}>
          <div className="modal-header" style={modalHeader}>
            <div className="close-container" style={closeContainer}>
              <span onClick={this.props.handleClose}>Close</span>
            </div>
            <h6 style={modalHeaderH6}>Add New Inventory Item</h6>
            <div className="input__form">
              <form ref={form => (this.inputForm = form)}>
                <label htmlFor="productName">Product Name</label>
                <input type="text" name="productName" />
                <div className="input__form--content">
                  <label htmlFor="productSummary">Product Summary</label>
                  <input type="text" name="productSummary" />
                  <label htmlFor="productDescription">
                    Product Description
                  </label>
                  <input type="text" name="productDescription" />
                  <label htmlFor="lastOrdered">Last Ordered</label>
                  <input type="text" name="lastOrdered" />
                  <label htmlFor="location">Warehouse Location</label>
                  <input type="text" name="location" />

                  <label htmlFor="quantity">Quantity</label>
                  <input type="text" name="quantity" />
                  <label htmlFor="status">Status</label>
                  <input type="text" name="status" />
                  <label htmlFor="orderedBy">Ordered By</label>
                  <input type="text" name="orderedBy" />
                  <label htmlFor="refNumber">Reference Number</label>
                  <input type="text" name="refNumber" />
                  <label htmlFor="category">Category</label>
                  <input type="text" name="category" />
                </div>
              </form>
              <button
                className="addInventoryItem__btn"
                type="submit"
                onClick={this.upload}
              >
                Save Item
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default AddInventoryItem;

const modalLayer = {
  position: "fixed",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1,
  backgroundColor: "rgba(58,58,58,0.8)",
  overflow: "hidden"
};

const formModal = {
  position: "absolute",
  backgroundColor: "#FFFFFF",
  width: "600px",
  maxWidth: "100%",
  height: "600px",
  maxHeight: "100%",
  zIndex: 2,
  borderRadius: "3px",
  overflow: "auto",
  display: "flex",
  flexDirection: "column"
};

const modalHeader = {
  margin: "2rem 3rem",
  display: "flex",
  justifyContent: "space-between",
  alignContent: "center"
};

const modalHeaderH6 = {
  margin: 0
};

const closeContainer = {
  display: "flex",
  alignItems: "center"
};
