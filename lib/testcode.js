// const Trie = require('./Trie');
 import Trie from "../lib/Trie";


console.log(Trie)
const testNode = new Trie();
testNode.insert('laura')
testNode.insert('apple')
testNode.insert('able')
testNode.insert('pasta')
testNode.insert('Katie')
testNode.insert('Turing')
testNode.count()
console.log(JSON.stringify(testNode, null, 4))



