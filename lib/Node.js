const Trie = require('./Trie');

module.exports = class Node {
  constructor (letterValue=null, children=null) {
    this.children = {};
    this.letterValue = null;
  }
}