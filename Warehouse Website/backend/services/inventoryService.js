let inventoryList = require("../routes/furniture");
let inventoryItem = require("../data/inventoryItem.json");

// this function returns the list of inventory items
function getInventory() {
  return inventoryList;
}

// this function creates a new inventory item
function addInventoryItem(newItem) {
  inventoryList.push(newItem);
  return newItem;
}

module.exports = {
  getInventory,
  addInventoryItem
};
