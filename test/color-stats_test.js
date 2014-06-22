/*
 * color-stats
 * https://github.com/skratchdot/color-stats
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
'use strict';

var colorStats = require('../lib/color-stats.js');

/*
	======== A Handy Little Nodeunit Reference ========
	https://github.com/caolan/nodeunit

	Test methods:
		test.expect(numAssertions)
		test.done()
	Test assertions:
		test.ok(value, [message])
		test.equal(actual, expected, [message])
		test.notEqual(actual, expected, [message])
		test.deepEqual(actual, expected, [message])
		test.notDeepEqual(actual, expected, [message])
		test.strictEqual(actual, expected, [message])
		test.notStrictEqual(actual, expected, [message])
		test.throws(block, [error], [message])
		test.doesNotThrow(block, [error], [message])
		test.ifError(value)
*/

exports['color-stats'] = {
	setUp: function (done) {
		// setup here
		done();
	},
	'string tests': function (test) {
		test.expect(6);
		test.equal(colorStats('green').hex, '#008000');
		test.equal(colorStats('#cc0000').hex, '#cc0000');
		test.equal(colorStats('').hex, '#9642a2');
		test.equal(colorStats('#000000').hex, '#000000');
		test.equal(colorStats('#c91a1a').hex, '#c91a1a');
		test.equal(colorStats('rgb(178, 34, 34)').hex, '#b22222');
		test.done();
	},
	'non-strings': function (test) {
		test.expect(10);
		test.ok(colorStats().hasOwnProperty('hex'));
		test.ok(colorStats(this).hasOwnProperty('hex'));
		test.ok(colorStats(null).hasOwnProperty('hex'));
		test.ok(colorStats(NaN).hasOwnProperty('hex'));
		test.ok(colorStats(function () {}).hasOwnProperty('hex'));
		test.ok(colorStats({a: 1, b: 2}).hasOwnProperty('hex'));
		test.ok(colorStats(1234567890).hasOwnProperty('hex'));
		test.ok(colorStats(Number).hasOwnProperty('hex'));
		test.ok(colorStats(Date).hasOwnProperty('hex'));
		test.ok(colorStats(new Date()).hasOwnProperty('hex'));
		test.done();
	}
};
