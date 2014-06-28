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
	lib: {
		onecolor: {
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
			b: 0.7058823529411765,
			hex: '#4682b4',
			hexa: '#ff4682b4',
			css: 'rgb(70,130,180)',
			cssa: 'rgba(70,130,180,1)',
			cmyk: [Object],
			hsl: [Object],
			hsv: [Object],
			lab: [Object],
			rgb: [Object],
			xyz: [Object]
		},
		color: {
			rgb: [Object],
			hsl: [Object],
			hsv: [Object],
			cmyk: [Object],
			rgbArray: [Object],
			hslArray: [Object],
			hsvArray: [Object],
			cmykArray: [Object],
			rgbaArray: [Object],
			hslaArray: [Object],
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
			light: false
		}
	},
	alpha: 1,
	cmyk: {
		c: 61.11,
		m: 27.78,
		y: 0,
		k: 29.41
	},
	hsl: {
		h: 207.27,
		s: 44,
		l: 49.02
	},
	hsv: {
		h: 207.27,
		s: 61.11,
		v: 70.59
	},
	rgb: {
		r: 70,
		g: 130,
		b: 180
	},
	rgbPercent: {
		r: 27.45,
		g: 50.98,
		b: 70.59
	},
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
		complementary: ['#4682b4', '#b47846'],
		splitComplementary: ['#4682b4', '#b4464b', '#46b49d'],
		splitComplementaryCW: ['#4682b4', '#b4464b', '#46b478'],
		splitComplementaryCCW: ['#4682b4', '#7846b4', '#b4af46'],
		triadic: ['#4682b4', '#b44682', '#82b446'],
		clash: ['#4682b4', '#af46b4', '#4bb446'],
		tetradic: ['#4682b4', '#af46b4', '#b47846', '#4bb446'],
		fourToneCW: ['#4682b4', '#7846b4', '#b47846', '#82b446'],
		fourToneCCW: ['#4682b4', '#b44682', '#b47846', '#46b478'],
		fiveToneA: ['#4682b4', '#b4468b', '#b44a46', '#b4a646', '#79b446'],
		fiveToneB: ['#4682b4', '#5346b4', '#af46b4', '#b44670', '#79b446'],
		fiveToneC: ['#4682b4', '#6646b4', '#af46b4', '#b4a646', '#46b49d'],
		fiveToneD: ['#4682b4', '#5346b4', '#b44a46', '#4bb446', '#46b48a'],
		fiveToneE: ['#4682b4', '#b4468b', '#94b446', '#4bb446', '#46b49d'],
		sixToneCW: ['#4682b4', '#464bb4', '#b44682', '#b4464b', '#82b446', '#4bb446'],
		sixToneCCW: ['#4682b4', '#af46b4', '#b44682', '#b4af46', '#82b446', '#46b4af'],
		neutral: ['#4682b4', '#4667b4', '#464bb4', '#5c46b4', '#7846b4', '#9346b4'],
		analogous: ['#4682b4', '#464bb4', '#7846b4', '#af46b4', '#b44682', '#b4464b']
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

#### v0.3.0 - Released June 28, 2014

- modifying return format so "lib" data is more explicit
- adding optional "rgbOnly" argument to random()
- don't allow an alpha channel of 0 when returning random colors

#### v0.2.1 - Released June 22, 2014

- colorStats.random() should return alpha channel sometimes

#### v0.2.0 - Released June 22, 2014

- fixing a bug with the harmonies/scales that were being generated

#### v0.1.0 - Released June 21, 2014

- initial release


## License

Copyright (c) 2014 skratchdot  
Licensed under the MIT license.
