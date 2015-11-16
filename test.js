var assert = require('assert');
var lib = require('./libSudoku.js')
var test  = {};
exports.test = test;

test["isUniqueValues returns true for an array with unique values"] = function(){
	var sample = [1,2,3,4,5,6,7,8,9];
	assert.ok(lib.isUniqueValues(sample))
};

test["isUniqueValues returns false for an array with repeated values"] = function(){
	var sample = [1,2,3,5,5,6,7,8,9];
	assert.ok(!lib.isUniqueValues(sample))
};

test["getColumn gives out the particular column"] = function(){
	var sample = [[1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],

				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],

				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9]]
	assert.deepEqual([1,1,1,1,1,1,1,1,1],lib.getColumn(sample,0));
};

test["getRow gives out the particular row"] = function(){
	var sample = [[1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],

				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],

				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9],
				  [1,2,3, 4,5,6, 7,8,9]]
	assert.deepEqual([1,2,3,4,5,6,7,8,9],lib.getColumn(sample,0));
};
