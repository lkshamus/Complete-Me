const Node = require('./Node');
// import Node from "./Node";

module.exports = class Trie {
  constructor() {
    this.root = null;
    // this.words = 0; 
    this.counter = []
  }

  insert(word) {
    this.counter.push(word);
    let wordEntered = word;
    if(!this.root){
      this.root = new Node();
    }
    let currentNode = this.root
    word.toLowerCase();
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
      currentNode.wordEnd = true;
      currentNode.word = wordEntered;

    }

  }
  count() {
    let uniqueWords = new Set(this.counter)
    return uniqueWords.size
    }
  suggest(string) {
    let suggestions = [];
    let currNode;
    let prefixArray = string.toLowerCase().split('');
    let nextNode;

    currNode = this.root;

   for (let i = 0; i < prefixArray.length; i++) {
        currNode = currentNode.children[prefixArr[i]]
    }
  }
  findingSuggestions() {

  }
}
