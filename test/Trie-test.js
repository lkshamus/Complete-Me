 import { assert, expect } from 'chai';
 // import { expect } from 'chai';
 import Trie from "../lib/Trie";

  describe('Trie', () => {
    let trie;
    beforeEach(() => {
      trie = new Trie();
    });

    it('should be a function', () => {
      assert.isFunction(Trie);
    });

    // it('should start with zero elements', () => {
    //   assert.equal(children.length, 0);
    // });
    
    it('should set its default root to null', () => {
    assert.equal(trie.root, null);
    });
})

  describe('Insert', () => {
    let trie;
    beforeEach(() => {
    trie = new Trie();
    })
 
  it('should take a word as an argument', () => {
    assert.equal(trie.insert('word'));

  });
  it('should change word to all lowercase', () => {
    assert.equal(trie.insert('word'));

  })
  // it('the word should be split into an array', () => {
  //   // expect(trie.insert('word').to.be.any(['w', 'o', 'r', 'd']))
  //   assert.isArray(trie.insert('word'))
  // });
 })
