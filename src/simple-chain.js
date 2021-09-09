import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    this.arr.push('( ' + value + ' )')
    return this
  },
  removeLink(position) {
    if (typeof(position) != "number" || position <= 0 || position > this.arr.length) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }

    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.arr = this.arr.reverse()
    return this
  },
  finishChain() {
    let res = this.arr.join('~~')
    this.arr = []
    return res
  }
};
