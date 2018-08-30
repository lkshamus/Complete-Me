// import Trie from './Trie';
const Trie = require('./Trie');
const testNode = new Trie();
testNode.insert('laura')
testNode.insert('latorre')
testNode.insert('apple')
testNode.insert('able')
testNode.insert('lawn')
testNode.insert('animal')
testNode.insert('anna')
// testNode.insert('pasta')
// testNode.insert('Katie')
// testNode.insert('Turing')
// testNode.insert('Worthy')
// testNode.insert('Word')
let y = testNode.suggest('an');
//console.logs(y)
// let x = testNode.count()
// console.log(x)

// console.log(JSON.stringify(testNode, null, 4))
