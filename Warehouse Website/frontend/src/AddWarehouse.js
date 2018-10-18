import React from "react";

class WarehouseCard extends React.Component {
  upload = e => {
    e.preventDefault();

    const {
      warehouseNumber,
      street,
      city,
      country,
      postalCode,
      name,
      phone,
      email,
      type
    } = this.inputForm;

    // this gets the values of the inputs
    // and stores it in a variable called uploadData
    let uploadData = {
      warehouseNumber: warehouseNumber.value,
      street: street.value,
      city: city.value,
      country: country.value,
      postalCode: postalCode.value,
      name: name.value,
      phone: phone.value,
      email: email.value,
      type: type.value
    };

    // this is to prepare for fetch POST request
    let options = {
      method: "POST",
      body: JSON.stringify(uploadData), // changes the input values into json string
      headers: {
        "content-type": "application/json"
      }
    };
    // this is the fetch POST request
    fetch("http://localhost:3001/api/warehouses/create", options)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState(
          () => this.props.history.push("/locations") //this changes the url back to the homepage
        );
      });
  };

  render() {
    return (
      <div className="input__form">
        <form ref={form => (this.inputForm = form)}>
          <label htmlFor="warehouseNumber">Warehouse Number</label>
          <input type="text" name="warehouseNumber" />
          <h3>Address</h3>
          <label htmlFor="street">Street Number & Name</label>
          <input type="text" name="street" />
          <label htmlFor="city">City</label>
          <input type="text" name="city" />
          <label htmlFor="country">Country</label>
          <input type="text" name="country" />
          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" name="postalCode" />

          <h3>Contact Information</h3>
          <label htmlFor="name">Warehouse Manager's Name</label>
          <input type="text" name="name" />
          <label htmlFor="inputContact">Phone Number</label>
          <input type="text" name="phone" />
          <label htmlFor="inputContact">Email Address</label>
          <input type="text" name="email" />
          <label htmlFor="inputContact">Inventory Type</label>
          <input type="text" name="type" />
        </form>
        <button type="submit" onClick={this.upload}>
          Save location
        </button>
      </div>
    );
  }
}

export default WarehouseCard;
