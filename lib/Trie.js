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
    // let wordEntered = word;
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
      // currentNode.word = wordEntered;
    }
    currentNode.wordEnd = true;

  }

  count() {
    let uniqueWords = new Set(this.counter)
    return uniqueWords.size
    }

  suggest(string){
      let wordArray = [...string]
      let currentNode = this.root 
      wordArray.forEach(letter => {
        if(currentNode.children[letter]){
          currentNode = currentNode.children[letter]
        }
      });
   
     let test = true
     let words = []
     let wordList = []
     for(let node in currentNode.children){
      let newWord = ''
      newWord+=string
      newWord+=node

      let word = this.Sergiohelper(currentNode.children[node])
      newWord+=word
      wordList.push(newWord)
     }
     cconsole.log(wordList)
     }

    Sergiohelper(node){
      let test = true
      let word = ''
      while(test){
        if(Object.keys(node.children)[0]){ 
        let letter = Object.keys(node.children)[0]
        node = node.children[letter]
        word+=letter
      }
      else {
        test = false
      }
    }
     return word
     } 

     }