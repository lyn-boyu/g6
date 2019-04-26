
const ShapeItems = {
  Base: require('./item'),
  Node: require('./node'),
  Edge: require('./edge')
};

ShapeItems.registerItem = function(key, model) {
  ShapeItems[key] = model;
};


module.exports = ShapeItems;
