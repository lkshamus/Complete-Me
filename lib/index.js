const fs = require('fs');

const Trie = require('./Trie');

const text = "/usr/share/dict/words";

const dictionary = fs.readFileSync(text).toString().trim().split('\n');

const testNode = new Trie();

testNode.populate(dictionary);
let y = testNode.suggest('world');
