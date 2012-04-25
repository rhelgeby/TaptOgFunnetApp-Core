function buildItemTests()
{
	var itemTests = new TestCollection("Item Model Tests");
	
	itemTests.addTest(new TestCase("Empty location", "index.html",
	[
		function(testRunner)
		{
			var item = new DemoApp.Item();
            var itemController = new DemoApp.ItemController();
            
            // Set minimum data, except location name.
            item.location = "";
            item.name = "Dummy Item";
            item.phone = "12345678";
            
            if (itemController.addItem(item) == -1)
            {
                // Location error expected.
                return;
            }
            
            throw "Didn't catch empty location";
		}
	]));
	
	itemTests.addTest(new TestCase("Empty name", "index.html",
	[
		function(testRunner)
		{
			var item = new DemoApp.Item();
            var itemController = new DemoApp.ItemController();
            
            // Set minimum data, except name.
            item.location = "Home";
            item.name = "";
            item.phone = "12345678";
            
            if (itemController.addItem(item) == -2)
            {
                // Name error expected.
                return;
            }
            
            throw "Didn't catch empty name";
		}
	]));
	
	itemTests.addTest(new TestCase("Contact info", "index.html",
	[
		function(testRunner)
		{
			var item = new DemoApp.Item();
            var itemController = new DemoApp.ItemController();
            
            // Set minimum data, except contact info.
            item.location = "Home";
            item.name = "Dummy Item";
            item.phone = "";
            item.mobile = "";
            item.email = "";
            
            if (itemController.addItem(item) == -3)
            {
                // Missing contact info error expected.
                return;
            }
            
            throw "Didn't catch missing contact info";
		}
	]));
	
	itemTests.addTest(new TestCase("Add item", "index.html",
	[
		function(testRunner)
		{
			var item = new DemoApp.Item();
            var itemController = new DemoApp.ItemController();
            
            // Set minimum data, except contact info.
            item.location = "Home";
            item.name = "Dummy Item";
            item.description = "Test item.";
            item.phone = "12345678";
            
            var itemId = itemController.addItem(item);
            if (itemId < 0)
            {
                throw "Item failed to add. Error code: " + itemId;
            }
		}
	]));
	
	return itemTests;
}
