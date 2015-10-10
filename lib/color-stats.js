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
var colorConvert = require('color-convert');
var colorName = require('colorname');
var colorQuantize = require('color-quantize');
var cycle = require('cycle');
var Harmonizer = require('color-harmony').Harmonizer;
var jsonfn = require('jsonfn').JSONfn;
var one = require('onecolor');
var randomSeed = require('random-seed');

var format = function (value, min, max, precision) {
	return parseFloat(((value * max) + min).toFixed(precision));
};

// helper function
var addStats = function (parsed, isRandom) {
	var color, props, i, key, ret = {};
	var harmonizer = new Harmonizer();
	var scaleArrayLength = 10;
	ret.lib = {
		onecolor: {},
		color: {},
		colorConvert: {}
	};
	// store our "onecolor" props
	props = ['red','green','blue','alpha',
		'hue','saturation','value','lightness',
		'cyan','magenta','yellow','black',
		'x','y','z',
		'l','a','b',
		'hex','hexa','css','cssa',
		'cmyk','hsl','hsv','lab','rgb','xyz'
	];
	for (i = 0; i < props.length; i++) {
		key = props[i];
		ret.lib.onecolor[key] = parsed[key]();
	}
	// store our "Color" props
	color = new Color(parsed.cssa());
	props = ['rgb','hsl','hsv','cmyk',
		'rgbArray','hslArray','hsvArray','cmykArray','rgbaArray','hslaArray',
		'alpha','red','green','blue','hue','saturation','lightness','saturationv','value',
		'cyan','magenta','yellow','black',
		'hexString','rgbString','rgbaString','percentString','hslString','hslaString',
		'keyword','luminosity','dark','light'];
	for (i = 0; i < props.length; i++) {
		key = props[i];
		ret.lib.color[key] = color[key]();
	}
	// store our "ColorConvert" props
	props = Object.keys(colorConvert.rgb);
	ret.lib.colorConvert.rgb = ret.lib.color.rgbArray.slice();
	for (i = 0; i < props.length; i++) {
		ret.lib.colorConvert[props[i]] = colorConvert.rgb[props[i]](ret.lib.colorConvert.rgb);
	}
	// force keyword to be a string
	ret.lib.color.keyword = ret.lib.color.keyword || '';
	// setup additional properties (like scales, etc)
	ret.alpha = format(ret.lib.onecolor.alpha, 0, 1, 2);
	ret.cmyk = {
		c: format(ret.lib.onecolor.cmyk._cyan, 0, 100, 2),
		m: format(ret.lib.onecolor.cmyk._magenta, 0, 100, 2),
		y: format(ret.lib.onecolor.cmyk._yellow, 0, 100, 2),
		k: format(ret.lib.onecolor.cmyk._black, 0, 100, 2)
	};
	ret.hsl = {
		h: format(ret.lib.onecolor.hsl._hue, 0, 360, 2),
		s: format(ret.lib.onecolor.hsl._saturation, 0, 100, 2),
		l: format(ret.lib.onecolor.hsl._lightness, 0, 100, 2)
	};
	ret.hsv = {
		h: format(ret.lib.onecolor.hsv._hue, 0, 360, 2),
		s: format(ret.lib.onecolor.hsv._saturation, 0, 100, 2),
		v: format(ret.lib.onecolor.hsv._value, 0, 100, 2)
	};
	ret.rgb = {
		r: format(ret.lib.onecolor.rgb._red, 0, 255, 0),
		g: format(ret.lib.onecolor.rgb._green, 0, 255, 0),
		b: format(ret.lib.onecolor.rgb._blue, 0, 255, 0)
	};
	ret.rgbPercent = {
		r: format(ret.lib.onecolor.rgb._red, 0, 100, 2),
		g: format(ret.lib.onecolor.rgb._green, 0, 100, 2),
		b: format(ret.lib.onecolor.rgb._blue, 0, 100, 2)
	};
	ret.hex = parsed.hex();
	ret.hexTriplet = ret.hex.replace('#', '');
	ret.isRandom = isRandom === true;
	ret.parseSuccessful = true; // this can be overwritten by our main function
	ret.closest = colorName.closest(ret.lib.color.rgbArray);
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
		parsed = colorStats.random(seed, true);
		parsed.parseSuccessful = false;
	}
	return parsed;
};

// randomizer
colorStats.random = function (seed, rgbOnly) {
	var rand = randomSeed.create(seed);
	var r = rand.intBetween(0, 255);
	var g = rand.intBetween(0, 255);
	var b = rand.intBetween(0, 255);
	var a = rgbOnly ? 1 : (rand.intBetween(1, 10) / 10);
	var parsed = one('rgba(' + [r,g,b,a].join(',') + ')');
	return addStats(parsed, true);
};

// helper/proxy function
colorStats.parse = function (obj) {
	return colorStats(obj);
};

// export
module.exports = exports = colorStats;
