let warehouseList = require('../data/warehouseList.json');
let inventoryList = require('../data/furniture.js');

// this function returns the list of warehouses
function getWarehouses() {
    return warehouseList;
}

// this function creates a new warehouse
function addWarehouse(newWarehouse){
    warehouseList.push(newWarehouse);
    return newWarehouse;
}

function filterInventory(id) {
    return inventoryList.filter(inventoryItem => inventoryItem.warehouseId === id);   
}


module.exports = {
    getWarehouses,
    addWarehouse,
    filterInventory
}