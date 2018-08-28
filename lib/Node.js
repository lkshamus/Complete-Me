// const Trie = require('./Trie');
import Trie from "../lib/Trie";


export default class Node {
  constructor (letterValue=null, children=null) {
    this.children = {};
    this.letterValue = null;
  }
}