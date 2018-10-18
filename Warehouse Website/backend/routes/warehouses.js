const express = require('express');
const router = express.Router();
const warehouseService = require('../services/warehouseService.js');
const warehouseList = require('../data/warehouseList.json');


/* GET list of inventory */
router.get('/api/warehouses', (req,res) => {
  const warehouseArray = warehouseService.getWarehouses();
  res.json(warehouseArray);
});


/* POST detail of the product */
router.post('/api/warehouses/create', (req,res,next) => {
  // declare array called fields
  const fields = ['warehouseName', 'type', 'street', 'city', 'country', 'postalCode', 'name', 'phone', 'email'];
  // loop over each field in the array and check that it has a value in req.body
  for (let i = 0; i<fields.length; i++){
    if(!req.body[fields[i]]) {
      res.status(400).json('Error - please fill out the form');
    }
  }

  const newWarehouse = {
    id: +(warehouseList.length+1),
    warehouseName: req.body.warehouseName,
    type: req.body.type,
    address: 
      {
        street: req.body.street,
        city: req.body.city,
        country: req.body.country,
        postalCode: req.body.postalCode,
      },
    contact: 
      {
        name: req.body.name,
        phone: req.body.phone,
        occupation: 'Warehouse Manager',
        email: req.body.email
      }
  }
  const warehouseData = warehouseService.addWarehouse(newWarehouse);
  res.json(warehouseData);
});


router.get('/api/warehouse/:warehouseId/products', (req,res,next) => {
  const filteredInventoryArray = warehouseService.filterInventory(Number(req.params.warehouseId));
  res.json(filteredInventoryArray);
})

module.exports = router;
