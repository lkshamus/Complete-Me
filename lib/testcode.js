const Trie = require('./Trie');

console.log(Trie)
const testNode = new Trie();
testNode.insert('laura')
testNode.insert('apple')
testNode.insert('able')
testNode.insert('pasta')
testNode.insert('Katie')
testNode.insert('Turing')
testNode.insert('Turing')
console.log(JSON.stringify(testNode, null, 4))



