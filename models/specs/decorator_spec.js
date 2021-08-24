const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function () {
  let paintcan1;
  let room;
  let decorator


  beforeEach(function () {
    paintcan1 = new PaintCan(10)
    room = new Room(100)
    decorator = new Decorator()
 
  });

  it('should start with an empty paint stock', function () {
    const actual = decorator.paintStock
    assert.deepEqual(actual,[])

    
  });

  it('should be able to add a can of paint to paint stock', function () {
    decorator.addPaintCan(paintcan1)
    const actual = decorator.countPaintStock()
    assert.deepEqual(actual,1)
  
  });

  it('should be able to calculate total litres paint it has in stock', function () {
    decorator.addPaintCan(paintcan1)
    decorator.addPaintCan(paintcan1)
    const actual = decorator.totalLitres()
    assert.deepEqual(actual,20)
    
  });

  xit('should be able to calculate that it has enough paint to paint a room', function () {
    
  });

  xit('should be able to calcuate that it doesnt have enough paint to paint a room', function () {
  });

  xit('should be able to paint room if has enough paint in stock', function () {
   
  });

  xit('should not paint room if it has not enough paint in stock', function () {
  
  });

  xit('should be able to decrease amount of paint in stock for a given room', function () {
    
  });

  xit('should be able to decrease amount of paint in stock when painting a room', function () {
  });

  xit('should be able to remove empty paint cans from stock', function () {

  });

});
