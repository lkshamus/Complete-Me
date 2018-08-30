 // import { assert, expect } from 'chai';
 // // import { expect } from 'chai';
 import Trie from "../lib/Trie";
 var assert = require('chai').assert;
 var expect = require('chai').assert;

  describe('Trie', () => {
    let trie;
    beforeEach(() => {
      trie = new Trie();
    });

    it('should be a function', () => {
      assert.isFunction(Trie);
    });
    
    it('should set its default root to null', () => {
    assert.equal(trie.root, null);
    });
})

  describe('Insert', () => {
    let trie;
    beforeEach(() => {
    trie = new Trie();
    })
 
  it('should be able to track number of inserts', () => {
    trie.insert('word')
    assert.equal(trie.count(),1);

  });
  it('should not count same words in different case', () => {
    trie.insert('word')
    trie.insert('WoRd')
    assert.equal(trie.count(), 1);
  })

 })

   describe('Suggest', () => {
    let trie;
    beforeEach(() => {
    trie = new Trie();
    })
    it('should be able to suggest a word in the tree', () => {
      trie.insert('word')
      assert.equal(trie.suggest('wo')[0], 'word');
    });
    it('should return words with the same prefixes', () => {
      trie.insert('word')
      trie.insert('world')
     assert.deepEqual(trie.suggest('wo'), ['word', 'world']);
    });
     it('root node should be able to have mutiple children', () => {
      trie.insert('apple')
      trie.insert('orange')
     assert.deepEqual(trie.suggest('a'), ['apple']);
     assert.deepEqual(trie.suggest('o'), ['orange']);
    })
  })
   
   describe('Populate', () => {
    let trie;
    beforeEach(() => {
    trie = new Trie();
    })
    it('should be able to take an array of words and insert into trie', () => {
      trie.populate(['word', 'fish', 'pasta'])
      assert.equal(trie.count(), 3);
    });
    
  })
