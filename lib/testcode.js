// import Trie from './Trie';
const fs = require('fs');

const Trie = require('./Trie');

const testNode = new Trie();
const text = "/usr/share/dict/words";
const dictionary = fs.readFileSync(text).toString().trim().split('\n');
testNode.populate(dictionary)
// testNode.insert('laura')
// testNode.insert('latorre')
// testNode.insert('apple')
// testNode.insert('able')
// testNode.insert('lawn')
// testNode.insert('animal')
// testNode.insert('anna')
console.log('number of words: ', testNode.count())
// testNode.insert('pasta')
// testNode.insert('Katie')
// testNode.insert('Turing')
// testNode.insert('Worthy')
// testNode.insert('Word')
let y = testNode.suggest('world');
console.log(y)
//console.logs(y)
// let x = testNode.count()
// console.log(x)

// console.log(JSON.stringify(testNode, null, 4))
