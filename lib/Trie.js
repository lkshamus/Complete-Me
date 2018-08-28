const Node = require('./Node');

module.exports = class Trie {
  constructor() {
    this.root = null;
    // this.words = 0; 
    this.count = 0
  }

  insert(word) {
    if(!this.root){
      this.root = new Node();
    }
    let currentNode = this.root
    word.toLowerCase();

    // if (Object.keys(childre).find(word))

    this.count ++;
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
    // return wordArr
  }
  count() {
    return this.count
    }
  suggest () {

  }
}
