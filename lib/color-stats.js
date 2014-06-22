/*
 * color-stats
 * https://github.com/skratchdot/color-stats
 *
 * Copyright (c) 2014 skratchdot
 * Licensed under the MIT license.
 */
'use strict';

// dependencies
var blinder = require('color-blind');
var Color = require('color');
var colorName = require('colorname');
var colorQuantize = require('color-quantize');
var cycle = require('cycle');
var Harmonizer = require('color-harmony').Harmonizer;
var jsonfn = require('jsonfn').JSONfn;
var one = require('onecolor');
var randomSeed = require('random-seed');

// helper function
var addStats = function (parsed, isRandom) {
	var color, props, i, key, ret = {};
	var harmonizer = new Harmonizer();
	var scaleArrayLength = 10;
	// store our "onecolor" props
	props = ['red','green','blue','alpha',
		'hue','saturation','value','lightness',
		'cyan','magenta','yellow','black',
		'x','y','z',
		'l','a','b'];
	ret.normalized = {};
	for (i = 0; i < props.length; i++) {
		key = props[i];
		ret.normalized[key] = parsed[key]();
	}
	// store our "Color" props
	color = new Color(parsed.hex());
	props = ['rgb','hsl','hsv','cmyk',
		'rgbArray','hslArray','hsvArray','cmykArray','rgbaArray','hslaArray',
		'alpha','red','green','blue','hue','saturation','lightness','saturationv','value',
		'cyan','magenta','yellow','black',
		'hexString','rgbString','rgbaString','percentString','hslString','hslaString',
		'keyword','luminosity','dark','light'];
	for (i = 0; i < props.length; i++) {
		key = props[i];
		ret[key] = color[key]();
	}
	// setup additional properties (like scales, etc)
	ret.hex = parsed.hex();
	ret.hexTriplet = ret.hex.replace('#', '');
	ret.isRandom = isRandom === true;
	ret.parseSuccessful = !ret.isRandom;
	ret.keyword = ret.keyword || ''; // force keyword to be a string
	ret.closest = colorName.closest(ret.rgbArray);
	ret.websafe = colorQuantize.websafe(ret.hex);
	ret.websmart = colorQuantize.websmart(ret.hex);
	ret.isWebsafe = ret.websafe === ret.hex;
	ret.isWebsmart = ret.websmart === ret.hex;
	ret.schemes = harmonizer.harmonizeAll(ret.hex);
	ret.shades = harmonizer.shades(ret.hex, scaleArrayLength);
	ret.tints = harmonizer.tints(ret.hex, scaleArrayLength);
	ret.tones = harmonizer.tones(ret.hex, scaleArrayLength);
	ret.blind = {
		protanomaly: blinder.protanomaly(ret.hex),
		protanopia: blinder.protanopia(ret.hex),
		deuteranomaly: blinder.deuteranomaly(ret.hex),
		deuteranopia: blinder.deuteranopia(ret.hex),
		tritanomaly: blinder.tritanomaly(ret.hex),
		tritanopia: blinder.tritanopia(ret.hex),
		achromatomaly: blinder.achromatomaly(ret.hex),
		achromatopsia: blinder.achromatopsia(ret.hex)
	};
	return ret;
};

// main function
var colorStats = function (obj) {
	var seed = typeof obj === 'string' ? obj : jsonfn.stringify(cycle.decycle(obj)) || '';
	var parsed = one(seed);
	if (parsed) {
		parsed = addStats(parsed, false);
	} else {
		parsed = colorStats.random(seed);
	}
	return parsed;
};

// randomizer
colorStats.random = function (seed) {
	var rand = randomSeed.create(seed);
	var parsed = one('rgba(' +
		rand.intBetween(0, 255) + ',' +
		rand.intBetween(0, 255) + ',' +
		rand.intBetween(0, 255) + ',' +
		(rand.intBetween(0, 10) / 10) +
		')'
	);
	return addStats(parsed, true);
};

// helper/proxy function
colorStats.parse = function (obj) {
	return colorStats(obj);
};

// export
module.exports = exports = colorStats;
