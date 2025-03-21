// This class lets us simulate interacting with a database.
class ItemsStorage {
  constructor() {
    this.storage = [];
  }

  addItem({ item }) {
    this.storage.push(item);
  }

  getItems() {
    return this.storage;
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new ItemsStorage();
