const Trie = require('./Trie');

console.log(Trie)
const testNode = new Trie();
testNode.insert('moo')
testNode.insert('apple')
testNode.insert('able')
testNode.insert('pasta')
testNode.insert('Katie')
console.log(JSON.stringify(testNode, null, 4))


