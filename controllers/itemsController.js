const ItemsStorage = require("../storages/itemsStorage.js");

exports.addItem = (req, res) => {
  console.log("Request body:", req.body);
  const { item } = req.body;
  if (item) {
    // Add item to the array
    ItemsStorage.addItem({ item });
  }
  res.redirect("/");
};

exports.getItems = (req, res) => {
  const items = ItemsStorage.getItems();
  console.log("here", items);
  res.render("index", {
    title: "User list",
    items,
  });
};
