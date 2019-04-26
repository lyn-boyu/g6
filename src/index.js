/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
// const Shape = require('./shape/');
const Global = require('./global');
const G = require('@antv/g/lib');
const Shape = require('./shape');
const Behaviors = require('./behavior');
const Item = require('./item');
const Controller = require('./graph/controller');


const G6 = {
  Graph: require('./graph/graph'),
  TreeGraph: require('./graph/tree-graph'),
  Util: require('./util/'),
  G,
  Item,
  Shape,
  Global,
  registerNode: Shape.registerNode,
  registerEdge: Shape.registerEdge,
  registerBehavior: Behaviors.registerBehavior,
  Controller,
  version: Global.version
};

module.exports = G6;
