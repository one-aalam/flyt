var chai = require('chai');
var assert = chai.assert;

var flyt = require('../src');
var sourceArr = [[1, 2, [3]], 4];
var targetArr = [1, 2, 3, 4];
var targetArrLen = targetArr.length;

describe('Flatten', function() {
  var retTargetArr = flyt.flatten(sourceArr);

  it('should return an array', function(){
     assert.isArray(retTargetArr, 'result array');
  });

  it('should return an array of length ' + targetArrLen, function(){
     assert.lengthOf(retTargetArr, targetArrLen,  'array has the length ' + targetArrLen);
  });

  it('should return a flattened array', function(){
     assert.deepEqual(retTargetArr, targetArr);
  });
});