// const Node = require('./Node');
import Node from "../lib/Node";


export default class Trie {
  constructor() {
    this.root = null;
    // this.words = 0; 
    this.counter = 0
  }

  insert(word) {
    if(!this.root){
      this.root = new Node();
    }
    let currentNode = this.root
    word.toLowerCase();
    this.counter ++;
    let wordArr = word.split('');
    for (let i = 0; i < wordArr.length; i++) {
      if (!currentNode.children[wordArr[i]]){
        // Creats new node because 'w' does not exist
        let newNode = new Node();
        // Upates new node W letter value attribute to be W
        newNode.letterValue = wordArr[i]
        // Updates This.root childrens to be the Node W
        currentNode.children[wordArr[i]] = newNode
        currentNode = newNode
      }
      else if(currentNode.children[wordArr[i]]){
        // Updates CurrentNode to a node with the letter that already exists
        currentNode = currentNode.children[wordArr[i]]
      }
    }

  }
  count() {
    return this.counter
    }
  suggest () {

  }
}
