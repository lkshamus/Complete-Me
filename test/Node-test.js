import Node from "../lib/Node";
var assert = require('chai').assert;
var expect = require('chai').assert;

  describe('Node', () => {
    let node;
    beforeEach(() => {
    node = new Node();
    })
    it('should be able to assign a letter value', () => {
      node.letterValue = 'l'
      assert.equal(node.letterValue, 'l');
    });
    it('should be able to have children', () => {
      node.children = {'l': 'l'}
      assert.deepEqual(node.children, {'l': 'l'});
    });
  })