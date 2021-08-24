const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint Can', function () {
let paintcan1;

  beforeEach(function () {
  paintcan1 = new PaintCan(10)
  });

  it('should have a number of litres of paint', function () {
    const actual = paintcan1.litres
    assert.strictEqual(actual,10)
    
  });

  it('should not start empty', function () {
    const actual =paintcan1.full
    assert.strictEqual(actual, true)
    
  });

  it('should be able to empty itself', function () {
    paintcan1.used()
    const actual = paintcan1.full
    assert.strictEqual(actual, false)

    
  });

});



