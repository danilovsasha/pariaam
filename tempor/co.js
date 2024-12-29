// Assuming node is an object with a method setSource
let node = {
    setSource: function(source) {
        this.source = source; // Setting the source property of node
    }
};

let dataSource = {
    name: "exampleDataSource"
};

node.setSource(dataSource.name); // Sets node.source to "exampleDataSource"
