# color-stats

[![NPM version](https://badge.fury.io/js/color-stats.svg)](http://badge.fury.io/js/color-stats)
[![Build Status](https://travis-ci.org/skratchdot/color-stats.png?branch=master)](https://travis-ci.org/skratchdot/color-stats)
[![Code Climate](https://codeclimate.com/github/skratchdot/color-stats.png)](https://codeclimate.com/github/skratchdot/color-stats)
[![Coverage Status](https://coveralls.io/repos/skratchdot/color-stats/badge.png)](https://coveralls.io/r/skratchdot/color-stats)
[![Dependency Status](https://david-dm.org/skratchdot/color-stats.svg)](https://david-dm.org/skratchdot/color-stats)
[![devDependency Status](https://david-dm.org/skratchdot/color-stats/dev-status.svg)](https://david-dm.org/skratchdot/color-stats#info=devDependencies)

[![NPM](https://nodei.co/npm/color-stats.svg)](https://npmjs.org/package/color-stats)


## Description

Generate color information based off of the hash of any object.  If you pass in a valid
color name or css value, the information for that color will be returned.


## Getting Started

Install the module with: `npm install color-stats`

```javascript
var colorStats = require('color-stats');
colorStats('red'); // get a bunch of stats about the color red
colorStats('#ff0000'); // get a bunch of stats about the color red
colorStats({info:"Based On Hash - always the same color"}); // get a color based on some object.
colorStats.random(); // get the stats for a random color
```


## Documentation

#### colorStats(colorObject)

Pass in a color string (or any object), and get the stats for that object.

#### colorStats.parse(colorObject)

This is the same as calling colorStats(colorObject).  It's just a proxy for
people that like explicit function names.

#### colorStats.random()

Returns the stats for a random color.


## Example

#### Get Stats function call:
```javascript
var colorStats = require('color-stats');
var result = colorStats('#4682b4'); // see result output below
```

#### Get Stats Result:
```javascript
{
	normalized: {
		red: 0.27450980392156865,
		green: 0.5098039215686274,
		blue: 0.7058823529411765,
		alpha: 1,
		hue: 0.5757575757575757,
		saturation: 0.611111111111111,
		value: 0.7058823529411765,
		lightness: 0.4901960784313726,
		cyan: 0.611111111111111,
		magenta: 0.2777777777777779,
		yellow: 0,
		black: 0.2941176470588235,
		x: 0.18743597342600288,
		y: 0.2056088063416628,
		z: 0.46152037838994725,
		l: 1,
		a: 1,
		b: 0.7058823529411765
	},
	rgb: {
		r: 70,
		g: 130,
		b: 180
	},
	hsl: {
		h: 207,
		s: 44,
		l: 49
	},
	hsv: {
		h: 207,
		s: 61,
		v: 71
	},
	cmyk: {
		c: 61,
		m: 28,
		y: 0,
		k: 29
	},
	rgbArray: [70, 130, 180],
	hslArray: [207, 44, 49],
	hsvArray: [207, 61, 71],
	cmykArray: [61, 28, 0, 29],
	rgbaArray: [70, 130, 180, 1],
	hslaArray: [207, 44, 49, 1],
	alpha: 1,
	red: 70,
	green: 130,
	blue: 180,
	hue: 207,
	saturation: 44,
	lightness: 49,
	saturationv: 61,
	value: 71,
	cyan: 61,
	magenta: 28,
	yellow: 0,
	black: 29,
	hexString: '#4682B4',
	rgbString: 'rgb(70, 130, 180)',
	rgbaString: 'rgba(70, 130, 180, 1)',
	percentString: 'rgb(27%, 51%, 71%)',
	hslString: 'hsl(207, 44%, 49%)',
	hslaString: 'hsla(207, 44%, 49%, 1)',
	keyword: 'steelblue',
	luminosity: 0.20562642207624857,
	dark: true,
	light: false,
	hex: '#4682b4',
	hexTriplet: '4682b4',
	isRandom: false,
	parseSuccessful: true,
	closest: {
		name: 'Steel Blue',
		rgb: [70, 130, 180]
	},
	websafe: '#3399cc',
	websmart: '#4488bb',
	isWebsafe: false,
	isWebsmart: false,
	schemes: {
		complementary: ['#3184c9', '#c97631'],
		splitComplementary: ['#3184c9', '#c93138', '#31c9a9'],
		splitComplementaryCW: ['#3184c9', '#c93138', '#31c976'],
		splitComplementaryCCW: ['#3184c9', '#7631c9', '#c9c231'],
		triadic: ['#3184c9', '#c93184', '#84c931'],
		clash: ['#3184c9', '#c231c9', '#38c931'],
		tetradic: ['#3184c9', '#c231c9', '#c97631', '#38c931'],
		fourToneCW: ['#3184c9', '#7631c9', '#c97631', '#84c931'],
		fourToneCCW: ['#3184c9', '#c93184', '#c97631', '#31c976'],
		fiveToneA: ['#3184c9', '#c93191', '#c93631', '#c9b631', '#77c931'],
		fiveToneB: ['#3184c9', '#4331c9', '#c231c9', '#c9316a', '#77c931'],
		fiveToneC: ['#3184c9', '#5d31c9', '#c231c9', '#c9b631', '#31c9a9'],
		fiveToneD: ['#3184c9', '#4331c9', '#c93631', '#38c931', '#31c990'],
		fiveToneE: ['#3184c9', '#c93191', '#9dc931', '#38c931', '#31c9a9'],
		sixToneCW: ['#3184c9', '#3138c9', '#c93184', '#c93138', '#84c931', '#38c931'],
		sixToneCCW: ['#3184c9', '#c231c9', '#c93184', '#c9c231', '#84c931', '#31c9c2'],
		neutral: ['#3184c9', '#315ec9', '#3138c9', '#5031c9', '#7631c9', '#9c31c9'],
		analogous: ['#3184c9', '#3138c9', '#7631c9', '#c231c9', '#c93184', '#c93138']
	},
	shades: [
		'#4682b4',
		'#3f75a2',
		'#386890',
		'#315b7e',
		'#2a4e6c',
		'#23415a',
		'#1c3448',
		'#152736',
		'#0e1a24',
		'#070d12'
	],
	tints: [
		'#4682b4',
		'#598fbc',
		'#6b9bc3',
		'#7da8cb',
		'#90b4d2',
		'#a2c1da',
		'#b5cde1',
		'#c7dae9',
		'#dae6f0',
		'#ecf3f8'
	],
	tones: [
		'#4682b4',
		'#4c82af',
		'#5282aa',
		'#5781a4',
		'#5d819f',
		'#63819a',
		'#688194',
		'#6e808f',
		'#74808a',
		'#7a8085'
	],
	blind: {
		protanomaly: '#5e7db0',
		protanopia: '#6c7bae',
		deuteranomaly: '#597eb5',
		deuteranopia: '#647bb5',
		tritanomaly: '#3c859e',
		tritanopia: '#368792',
		achromatomaly: '#667c8e',
		achromatopsia: '#797979'
	}
}
```


## Credits

Below are some of the libraries that are being used, and what they are used for:

- [onecolor](https://www.npmjs.org/package/onecolor) - parses color, and gets normalized data
- [color](https://www.npmjs.org/package/color) - gets un-normalized data and user friendly display
- [color-blind](https://www.npmjs.org/package/color-blind) - simulates color blindness
- [color-harmony](https://www.npmjs.org/package/color-harmony) - creates color scales/harmonies by rotating the hue of the given color
- [color-quantize](https://www.npmjs.org/package/color-quantize) - convert colors to websafe / websmart values
- [colorname](https://www.npmjs.org/package/colorname) - gets the closest color name
- [cycle](https://www.npmjs.org/package/cycle) - encodes cyclical structures in json
- [jsonfn](https://www.npmjs.org/package/jsonfn) - stringify non-json compatible objects
- [random-seed](https://www.npmjs.org/package/random-seed) - make sure our non-color objects always return the same information


## FAQ

#### Is it slow in a loop?

Yes

#### Why?

Because I'm trying to return "all the things" and depend on a lot of libraries (which
do some duplicate re-parsing, etc).


## Release History

#### v0.1.0 - Released June 21, 2014

- initial release


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
