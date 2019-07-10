'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let flatB = [];
  collectionB.map(item => flatB = [...flatB, ...item])
  return collectionA.filter(item => flatB.includes(item));
}
