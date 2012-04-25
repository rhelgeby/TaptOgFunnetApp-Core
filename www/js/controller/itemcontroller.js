// Tapt og funnet-App
// itemcontroller.js

if (typeof DemoApp == "undefined") {
    DemoApp = {};
}

/**
 * Constructs a item controller. This constructor will also create a item
 * database controller.
 */
DemoApp.ItemController = function() {
    // TODO: Implementation.
}

/**
 * Adds the specified item.
 *
 * @param item      Item object to add.
 * @returns         Item ID on success, or a negative number on error.
 *                  -1 on invalid location,
 *                  -2 on invalid name,
 *                  -3 if missing contact information (phone or email)
 */
DemoApp.ItemController.prototype.addItem = function(item) {
    // Not implemented.
    return -100;
}

/**
 * Gets the item with the specified ID.
 *
 * @param itemId    Item ID.
 * @returns         Item object, or -1 on invalid id.
 */
DemoApp.ItemDBController.prototype.getItem = function(itemId) {
    return -1;
}

/**
 * Gets a list of items.
 *
 * @param location  (Optional) Filter by location.
 * @returns         An array of Item objects. May be empty if none found.
 */
DemoApp.ItemController.prototype.list = function(location) {
    return new Array();
}
