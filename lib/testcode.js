const Trie = require('./Trie');

console.log(Trie)
const testNode = new Trie();
console.log(testNode);
testNode.insert('bo')
testNode.insert('boo')

console.log('ROOT', testNode.root.children['b'].children['o'].children)


