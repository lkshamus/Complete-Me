const Node = require('./Node');
// import Node from "./Node";

module.exports = class Trie {
  constructor() {
    this.root = null;
    this.counter = new Set()
  }

  insert(word) {
    word.toLowerCase()
    this.counter.add(word);
    if(!this.root){
      this.root = new Node();
    }
    let currentNode = this.root
    let wordArr = word.split('');
    for (let i = 0; i < wordArr.length; i++) {
      if (!currentNode.children[wordArr[i]]){
        let newNode = new Node();
        newNode.letterValue = wordArr[i]
        currentNode.children[wordArr[i]] = newNode
        currentNode = newNode
      }
      else if(currentNode.children[wordArr[i]]){
        currentNode = currentNode.children[wordArr[i]]
      }
    }
  }

  count() {
    return this.counter.size
    }

  suggest(string){
    string.toLowerCase()
    let wordArray = [...string]
    let currentNode = this.root 
    wordArray.forEach(letter => {
      if(currentNode.children[letter]){
          currentNode = currentNode.children[letter]
      }
    });
   
    let wordList = []
    for(let node in currentNode.children){
      let word = this.checkNodes(currentNode.children[node])
      wordList.push(string + node + word)
     }
     return wordList
     }

    checkNodes(node){
      let word = ''
      while(true){
        let childNodeLetter = Object.keys(node.children)[0]
        if(childNodeLetter){ 
        node = node.children[childNodeLetter]
        word+=childNodeLetter
      }
      else {
        break;
      }
    }
     return word
     } 

     populate(words){
      for(let word in words){
        this.insert(words[word])
      }
    }
     }

    