

const Controllers = {
  View: require('./view'),
  Event: require('./event'),
  Mode: require('./mode'),
  Item: require('./item'),
  State: require('./state')
};


Controllers.register = function(key, controller) {
  Controllers[key] = controller;
};


module.exports = Controllers;
