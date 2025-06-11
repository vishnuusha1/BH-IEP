import {
  parseInlineStyles
} from "./chunk-TCXXA5LR.js";
import {
  __export
} from "./chunk-XWLXMCJQ.js";

// node_modules/@progress/kendo-drawing/dist/es/common/color/named-colors.js
var namedColors = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgrey: "a9a9a9",
  darkgreen: "006400",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  grey: "808080",
  green: "008000",
  greenyellow: "adff2f",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgrey: "d3d3d3",
  lightgreen: "90ee90",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "778899",
  lightslategrey: "778899",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "00ff00",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "ff00ff",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370d8",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "d87093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  red: "ff0000",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "ffffff",
  whitesmoke: "f5f5f5",
  yellow: "ffff00",
  yellowgreen: "9acd32"
};
var named_colors_default = namedColors;

// node_modules/@progress/kendo-drawing/dist/es/common/class.js
var Class = function Class2() {
};
var class_default = Class;

// node_modules/@progress/kendo-drawing/dist/es/common/support.js
function matchUserAgent(userAgent) {
  var browserRxs = {
    edge: /(edge)[ \/]([\w.]+)/i,
    webkit: /(chrome)[ \/]([\w.]+)/i,
    safari: /(webkit)[ \/]([\w.]+)/i,
    opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
    msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
    mozilla: /(mozilla)(?:.*? rv:([\w.]+))/i
  };
  var browser5 = {};
  for (var agent in browserRxs) {
    if (browserRxs.hasOwnProperty(agent)) {
      var match = userAgent.match(browserRxs[agent]);
      if (match) {
        browser5[agent] = true;
        browser5[match[1].toLowerCase().split(" ")[0].split("/")[0]] = true;
        browser5.version = parseInt(document.documentMode || match[2], 10);
        break;
      }
    }
  }
  return browser5;
}
var browser = null;
var support = {
  get browser() {
    if (typeof window === "undefined" || browser) {
      return browser;
    }
    browser = matchUserAgent(window.navigator.userAgent);
    return browser;
  }
};
var support_default = support;

// node_modules/@progress/kendo-drawing/dist/es/common/color/parse-color.js
var browser2 = support_default.browser;
var matchNamedColor = function(color) {
  var colorNames = Object.keys(named_colors_default);
  colorNames.push("transparent");
  var regexp = new RegExp("^(" + colorNames.join("|") + ")(\\W|$)", "i");
  matchNamedColor = function(color2) {
    return regexp.exec(color2);
  };
  return regexp.exec(color);
};
var BaseColor = function(Class3) {
  function BaseColor2() {
    Class3.call(this);
  }
  if (Class3) BaseColor2.__proto__ = Class3;
  BaseColor2.prototype = Object.create(Class3 && Class3.prototype);
  BaseColor2.prototype.constructor = BaseColor2;
  BaseColor2.prototype.toHSV = function toHSV() {
    return this;
  };
  BaseColor2.prototype.toRGB = function toRGB() {
    return this;
  };
  BaseColor2.prototype.toHex = function toHex(options2) {
    return this.toBytes().toHex(options2);
  };
  BaseColor2.prototype.toBytes = function toBytes() {
    return this;
  };
  BaseColor2.prototype.toCss = function toCss(options2) {
    return "#" + this.toHex(options2);
  };
  BaseColor2.prototype.toCssRgba = function toCssRgba() {
    var rgb = this.toBytes();
    return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + parseFloat(Number(this.a).toFixed(3)) + ")";
  };
  BaseColor2.prototype.toDisplay = function toDisplay() {
    if (browser2.msie && browser2.version < 9) {
      return this.toCss();
    }
    return this.toCssRgba();
  };
  BaseColor2.prototype.equals = function equals(c) {
    return c === this || c !== null && c !== void 0 && this.toCssRgba() === parseColor(c).toCssRgba();
  };
  BaseColor2.prototype.diff = function diff(other) {
    if (other === null) {
      return NaN;
    }
    var c1 = this.toBytes();
    var c2 = other.toBytes();
    return Math.sqrt(Math.pow((c1.r - c2.r) * 0.3, 2) + Math.pow((c1.g - c2.g) * 0.59, 2) + Math.pow((c1.b - c2.b) * 0.11, 2));
  };
  BaseColor2.prototype.clone = function clone() {
    var c = this.toBytes();
    if (c === this) {
      c = new Bytes(c.r, c.g, c.b, c.a);
    }
    return c;
  };
  return BaseColor2;
}(class_default);
var RGB = function(BaseColor2) {
  function RGB2(r, g, b, a) {
    BaseColor2.call(this);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  if (BaseColor2) RGB2.__proto__ = BaseColor2;
  RGB2.prototype = Object.create(BaseColor2 && BaseColor2.prototype);
  RGB2.prototype.constructor = RGB2;
  RGB2.prototype.toHSV = function toHSV() {
    var ref = this;
    var r = ref.r;
    var g = ref.g;
    var b = ref.b;
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var v = max;
    var h, s;
    if (delta === 0) {
      return new HSV(0, 0, v, this.a);
    }
    if (max !== 0) {
      s = delta / max;
      if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else {
        h = 4 + (r - g) / delta;
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
    } else {
      s = 0;
      h = -1;
    }
    return new HSV(h, s, v, this.a);
  };
  RGB2.prototype.toHSL = function toHSL() {
    var ref = this;
    var r = ref.r;
    var g = ref.g;
    var b = ref.b;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          break;
      }
    }
    return new HSL(h * 60, s * 100, l * 100, this.a);
  };
  RGB2.prototype.toBytes = function toBytes() {
    return new Bytes(this.r * 255, this.g * 255, this.b * 255, this.a);
  };
  return RGB2;
}(BaseColor);
var Bytes = function(RGB2) {
  function Bytes2(r, g, b, a) {
    RGB2.call(this, Math.round(r), Math.round(g), Math.round(b), a);
  }
  if (RGB2) Bytes2.__proto__ = RGB2;
  Bytes2.prototype = Object.create(RGB2 && RGB2.prototype);
  Bytes2.prototype.constructor = Bytes2;
  Bytes2.prototype.toRGB = function toRGB() {
    return new RGB2(this.r / 255, this.g / 255, this.b / 255, this.a);
  };
  Bytes2.prototype.toHSV = function toHSV() {
    return this.toRGB().toHSV();
  };
  Bytes2.prototype.toHSL = function toHSL() {
    return this.toRGB().toHSL();
  };
  Bytes2.prototype.toHex = function toHex(options2) {
    var value = hex(this.r, 2) + hex(this.g, 2) + hex(this.b, 2);
    if (options2 && options2.alpha) {
      value += hex(Math.round(this.a * 255), 2);
    }
    return value;
  };
  Bytes2.prototype.toBytes = function toBytes() {
    return this;
  };
  return Bytes2;
}(RGB);
function hex(n, width, pad2) {
  if (pad2 === void 0) pad2 = "0";
  var result = n.toString(16);
  while (width > result.length) {
    result = pad2 + result;
  }
  return result;
}
var HSV = function(BaseColor2) {
  function HSV2(h, s, v, a) {
    BaseColor2.call(this);
    this.h = h;
    this.s = s;
    this.v = v;
    this.a = a;
  }
  if (BaseColor2) HSV2.__proto__ = BaseColor2;
  HSV2.prototype = Object.create(BaseColor2 && BaseColor2.prototype);
  HSV2.prototype.constructor = HSV2;
  HSV2.prototype.toRGB = function toRGB() {
    var ref = this;
    var h = ref.h;
    var s = ref.s;
    var v = ref.v;
    var r, g, b;
    if (s === 0) {
      r = g = b = v;
    } else {
      h /= 60;
      var i = Math.floor(h);
      var f = h - i;
      var p = v * (1 - s);
      var q = v * (1 - s * f);
      var t = v * (1 - s * (1 - f));
      switch (i) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        default:
          r = v;
          g = p;
          b = q;
          break;
      }
    }
    return new RGB(r, g, b, this.a);
  };
  HSV2.prototype.toHSL = function toHSL() {
    return this.toRGB().toHSL();
  };
  HSV2.prototype.toBytes = function toBytes() {
    return this.toRGB().toBytes();
  };
  return HSV2;
}(BaseColor);
var HSL = function(BaseColor2) {
  function HSL2(h, s, l, a) {
    BaseColor2.call(this);
    this.h = h;
    this.s = s;
    this.l = l;
    this.a = a;
  }
  if (BaseColor2) HSL2.__proto__ = BaseColor2;
  HSL2.prototype = Object.create(BaseColor2 && BaseColor2.prototype);
  HSL2.prototype.constructor = HSL2;
  HSL2.prototype.toRGB = function toRGB() {
    var h = this.h / 360;
    var s = this.s / 100;
    var l = this.l / 100;
    var r, g, b;
    if (s === 0) {
      r = g = b = l;
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return new RGB(r, g, b, this.a);
  };
  HSL2.prototype.toHSV = function toHSV() {
    return this.toRGB().toHSV();
  };
  HSL2.prototype.toBytes = function toBytes() {
    return this.toRGB().toBytes();
  };
  return HSL2;
}(BaseColor);
function hue2rgb(p, q, s) {
  var t = s;
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function alphaFromHex(a) {
  return parseFloat(parseFloat(parseInt(a, 16) / 255).toFixed(3));
}
function parseColor(value, safe) {
  var m, ret;
  if (!value || value === "none") {
    return null;
  }
  if (value instanceof BaseColor) {
    return value;
  }
  var color = value.toLowerCase();
  if (m = matchNamedColor(color)) {
    if (m[1] === "transparent") {
      color = new RGB(1, 1, 1, 0);
    } else {
      color = parseColor(named_colors_default[m[1]], safe);
    }
    color.match = [m[1]];
    return color;
  }
  if (m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m[1], 16),
      parseInt(m[2], 16),
      parseInt(m[3], 16),
      1
    );
  } else if (m = /^#?([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m[1] + m[1], 16),
      parseInt(m[2] + m[2], 16),
      parseInt(m[3] + m[3], 16),
      1
    );
  } else if (m = /^#?([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m[1] + m[1], 16),
      parseInt(m[2] + m[2], 16),
      parseInt(m[3] + m[3], 16),
      alphaFromHex(m[4] + m[4])
    );
  } else if (m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\b/i.exec(color)) {
    ret = new Bytes(
      parseInt(m[1], 16),
      parseInt(m[2], 16),
      parseInt(m[3], 16),
      alphaFromHex(m[4])
    );
  } else if (m = /^rgb\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/.exec(color)) {
    ret = new Bytes(
      parseInt(m[1], 10),
      parseInt(m[2], 10),
      parseInt(m[3], 10),
      1
    );
  } else if (m = /^rgba\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9.]+)\s*\)/.exec(color)) {
    ret = new Bytes(
      parseInt(m[1], 10),
      parseInt(m[2], 10),
      parseInt(m[3], 10),
      parseFloat(m[4])
    );
  } else if (m = /^rgb\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*\)/.exec(color)) {
    ret = new RGB(
      parseFloat(m[1]) / 100,
      parseFloat(m[2]) / 100,
      parseFloat(m[3]) / 100,
      1
    );
  } else if (m = /^rgba\(\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9]*\.?[0-9]+)%\s*,\s*([0-9.]+)\s*\)/.exec(color)) {
    ret = new RGB(
      parseFloat(m[1]) / 100,
      parseFloat(m[2]) / 100,
      parseFloat(m[3]) / 100,
      parseFloat(m[4])
    );
  } else if (m = /^color\(\s*srgb\s*([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s+([0-9]*\.?[0-9]+)\s*(\/\s+([0-9]*\.?[0-9]+))?\)/.exec(color)) {
    ret = new RGB(
      parseFloat(m[1]),
      parseFloat(m[2]),
      parseFloat(m[3]),
      parseFloat(m[5] || "1")
    );
  }
  if (ret) {
    ret.match = m;
  } else if (!safe) {
    throw new Error("Cannot parse color: " + color);
  }
  return ret;
}

// node_modules/@progress/kendo-drawing/dist/es/common/color/color.js
var DARK_TRESHOLD = 180;
var Color = function(Class3) {
  function Color2(value) {
    var this$1 = this;
    Class3.call(this);
    if (arguments.length === 1) {
      var formats = Color2.formats;
      var resolvedColor = this.resolveColor(value);
      for (var idx = 0; idx < formats.length; idx++) {
        var formatRegex = formats[idx].re;
        var processor = formats[idx].process;
        var parts = formatRegex.exec(resolvedColor);
        if (parts) {
          var channels = processor(parts);
          this$1.r = channels[0];
          this$1.g = channels[1];
          this$1.b = channels[2];
        }
      }
    } else {
      this.r = arguments[0];
      this.g = arguments[1];
      this.b = arguments[2];
    }
    this.r = this.normalizeByte(this.r);
    this.g = this.normalizeByte(this.g);
    this.b = this.normalizeByte(this.b);
  }
  if (Class3) Color2.__proto__ = Class3;
  Color2.prototype = Object.create(Class3 && Class3.prototype);
  Color2.prototype.constructor = Color2;
  Color2.prototype.toHex = function toHex() {
    var pad2 = this.padDigit;
    var r = this.r.toString(16);
    var g = this.g.toString(16);
    var b = this.b.toString(16);
    return "#" + pad2(r) + pad2(g) + pad2(b);
  };
  Color2.prototype.resolveColor = function resolveColor(value) {
    var color = value || "black";
    if (color.charAt(0) === "#") {
      color = color.substr(1, 6);
    }
    color = color.replace(/ /g, "");
    color = color.toLowerCase();
    color = Color2.namedColors[color] || color;
    return color;
  };
  Color2.prototype.normalizeByte = function normalizeByte(value) {
    if (value < 0 || isNaN(value)) {
      return 0;
    }
    return value > 255 ? 255 : value;
  };
  Color2.prototype.padDigit = function padDigit(value) {
    return value.length === 1 ? "0" + value : value;
  };
  Color2.prototype.brightness = function brightness(value) {
    var round2 = Math.round;
    this.r = round2(this.normalizeByte(this.r * value));
    this.g = round2(this.normalizeByte(this.g * value));
    this.b = round2(this.normalizeByte(this.b * value));
    return this;
  };
  Color2.prototype.percBrightness = function percBrightness() {
    return Math.sqrt(0.241 * this.r * this.r + 0.691 * this.g * this.g + 0.068 * this.b * this.b);
  };
  Color2.prototype.isDark = function isDark() {
    return this.percBrightness() < DARK_TRESHOLD;
  };
  Color2.fromBytes = function fromBytes(r, g, b, a) {
    return new Bytes(r, g, b, a != null ? a : 1);
  };
  Color2.fromRGB = function fromRGB(r, g, b, a) {
    return new RGB(r, g, b, a != null ? a : 1);
  };
  Color2.fromHSV = function fromHSV(h, s, v, a) {
    return new HSV(h, s, v, a != null ? a : 1);
  };
  Color2.fromHSL = function fromHSL(h, s, l, a) {
    return new HSL(h, s, l, a != null ? a : 1);
  };
  return Color2;
}(class_default);
Color.formats = [{
  re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
  process: function(parts) {
    return [
      parseInt(parts[1], 10),
      parseInt(parts[2], 10),
      parseInt(parts[3], 10)
    ];
  }
}, {
  re: /^(\w{2})(\w{2})(\w{2})$/,
  process: function(parts) {
    return [
      parseInt(parts[1], 16),
      parseInt(parts[2], 16),
      parseInt(parts[3], 16)
    ];
  }
}, {
  re: /^(\w{1})(\w{1})(\w{1})$/,
  process: function(parts) {
    return [
      parseInt(parts[1] + parts[1], 16),
      parseInt(parts[2] + parts[2], 16),
      parseInt(parts[3] + parts[3], 16)
    ];
  }
}];
Color.namedColors = named_colors_default;
var color_default = Color;

// node_modules/@progress/kendo-drawing/dist/es/common/observable.js
var Observable = function(Class3) {
  function Observable2() {
    Class3.call(this);
    this._events = {};
  }
  if (Class3) Observable2.__proto__ = Class3;
  Observable2.prototype = Object.create(Class3 && Class3.prototype);
  Observable2.prototype.constructor = Observable2;
  Observable2.prototype.bind = function bind(eventName, handlers, one) {
    var arguments$1 = arguments;
    var this$1 = this;
    var eventNames = getArray(eventName);
    var handlersIsFunction = isFunction(handlers);
    var length = eventNames.length;
    if (handlers === void 0) {
      for (var field in eventName) {
        this$1.bind(field, eventName[field]);
      }
      return this;
    }
    var loop = function(idx2) {
      var eventName$1 = eventNames[idx2];
      var handler = handlersIsFunction ? handlers : handlers[eventName$1];
      if (handler) {
        if (one) {
          var original = handler;
          handler = function() {
            this$1.unbind(eventName$1, handler);
            original.apply(this$1, arguments$1);
          };
          handler.original = original;
        }
        var events2 = this$1._events[eventName$1] = this$1._events[eventName$1] || [];
        events2.push(handler);
      }
    };
    for (var idx = 0; idx < length; idx++) loop(idx);
    return this;
  };
  Observable2.prototype.one = function one(eventNames, handlers) {
    return this.bind(eventNames, handlers, true);
  };
  Observable2.prototype.first = function first(eventName, handlers) {
    var this$1 = this;
    var eventNames = getArray(eventName);
    var handlersIsFunction = isFunction(handlers);
    for (var idx = 0, length = eventNames.length; idx < length; idx++) {
      var eventName$1 = eventNames[idx];
      var handler = handlersIsFunction ? handlers : handlers[eventName$1];
      if (handler) {
        var events2 = this$1._events[eventName$1] = this$1._events[eventName$1] || [];
        events2.unshift(handler);
      }
    }
    return this;
  };
  Observable2.prototype.trigger = function trigger(eventName, e) {
    var this$1 = this;
    if (e === void 0) e = {};
    var events2 = this._events[eventName];
    if (events2) {
      var length = events2.length;
      e.sender = this;
      e._defaultPrevented = false;
      e.preventDefault = preventDefault;
      e.isDefaultPrevented = isDefaultPrevented;
      events2 = events2.slice();
      for (var idx = 0; idx < length; idx++) {
        events2[idx].call(this$1, e);
      }
      return e._defaultPrevented === true;
    }
    return false;
  };
  Observable2.prototype.unbind = function unbind(eventName, handler) {
    var events2 = this._events[eventName];
    if (eventName === void 0) {
      this._events = {};
    } else if (events2) {
      if (handler) {
        for (var idx = events2.length - 1; idx >= 0; idx--) {
          if (events2[idx] === handler || events2[idx].original === handler) {
            events2.splice(idx, 1);
          }
        }
      } else {
        this._events[eventName] = [];
      }
    }
    return this;
  };
  return Observable2;
}(class_default);
function isFunction(value) {
  return typeof value === "function";
}
function getArray(value) {
  return typeof value === "string" ? [value] : value;
}
function preventDefault() {
  this._defaultPrevented = true;
}
function isDefaultPrevented() {
  return this._defaultPrevented === true;
}
var observable_default = Observable;

// node_modules/@progress/kendo-drawing/dist/es/common/animation-frame.js
var animationFrameProxy = function(callback) {
  var wnd = typeof window !== "undefined" ? window : {};
  var animationFrame = wnd.requestAnimationFrame || wnd.webkitRequestAnimationFrame || wnd.mozRequestAnimationFrame || wnd.oRequestAnimationFrame || wnd.msRequestAnimationFrame || function(callback2) {
    setTimeout(callback2, 1e3 / 60);
  };
  animationFrameProxy = function(callback2) {
    return animationFrame.call(wnd, callback2);
  };
  animationFrameProxy(callback);
};
var animation_frame_default = animationFrameProxy;

// node_modules/@progress/kendo-drawing/dist/es/common/html-encode.js
var ampRegExp = /&/g;
var ltRegExp = /</g;
var quoteRegExp = /"/g;
var aposRegExp = /'/g;
var gtRegExp = />/g;
function htmlEncode(value) {
  return String(value).replace(ampRegExp, "&amp;").replace(ltRegExp, "&lt;").replace(gtRegExp, "&gt;").replace(quoteRegExp, "&quot;").replace(aposRegExp, "&#39;");
}

// node_modules/@progress/kendo-drawing/dist/es/common/log-to-console.js
function logToConsole(message) {
  var console = window.console;
  if (typeof console != "undefined" && console.log) {
    console.log(message);
  }
}

// node_modules/@progress/kendo-drawing/dist/es/common/template.js
function template() {
  throw new Error("Template implementation missing.");
}

// node_modules/@progress/kendo-drawing/dist/es/util/now.js
var now = Date.now || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var now_default = now;

// node_modules/@progress/kendo-drawing/dist/es/common/throttle.js
function throttle(fn, delay) {
  var lastExecTime = 0;
  var timeout;
  if (!delay || delay <= 0) {
    return fn;
  }
  var throttled = function() {
    var elapsed = now_default() - lastExecTime;
    var args = arguments;
    var exec = function() {
      fn.apply(null, args);
      lastExecTime = now_default();
    };
    if (!lastExecTime) {
      return exec();
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    if (elapsed > delay) {
      exec();
    } else {
      timeout = setTimeout(exec, delay - elapsed);
    }
  };
  throttled.cancel = function() {
    clearTimeout(timeout);
  };
  return throttled;
}

// node_modules/@progress/kendo-drawing/dist/es/core/has-observers.js
var HasObservers = function(Class3) {
  function HasObservers2() {
    Class3.apply(this, arguments);
  }
  if (Class3) HasObservers2.__proto__ = Class3;
  HasObservers2.prototype = Object.create(Class3 && Class3.prototype);
  HasObservers2.prototype.constructor = HasObservers2;
  HasObservers2.prototype.observers = function observers() {
    this._observers = this._observers || [];
    return this._observers;
  };
  HasObservers2.prototype.addObserver = function addObserver(element) {
    if (!this._observers) {
      this._observers = [element];
    } else {
      this._observers.push(element);
    }
    return this;
  };
  HasObservers2.prototype.removeObserver = function removeObserver(element) {
    var observers = this.observers();
    var index = observers.indexOf(element);
    if (index !== -1) {
      observers.splice(index, 1);
    }
    return this;
  };
  HasObservers2.prototype.trigger = function trigger(methodName, event) {
    var observers = this._observers;
    if (observers && !this._suspended) {
      for (var idx = 0; idx < observers.length; idx++) {
        var observer = observers[idx];
        if (observer[methodName]) {
          observer[methodName](event);
        }
      }
    }
    return this;
  };
  HasObservers2.prototype.optionsChange = function optionsChange(e) {
    if (e === void 0) e = {};
    e.element = this;
    this.trigger("optionsChange", e);
  };
  HasObservers2.prototype.geometryChange = function geometryChange() {
    this.trigger("geometryChange", {
      element: this
    });
  };
  HasObservers2.prototype.suspend = function suspend() {
    this._suspended = (this._suspended || 0) + 1;
    return this;
  };
  HasObservers2.prototype.resume = function resume() {
    this._suspended = Math.max((this._suspended || 0) - 1, 0);
    return this;
  };
  HasObservers2.prototype._observerField = function _observerField(field, value) {
    if (this[field]) {
      this[field].removeObserver(this);
    }
    this[field] = value;
    value.addObserver(this);
  };
  return HasObservers2;
}(class_default);
var has_observers_default = HasObservers;

// node_modules/@progress/kendo-drawing/dist/es/util.js
var util_exports = {};
__export(util_exports, {
  DEG_TO_RAD: () => DEG_TO_RAD,
  LRUCache: () => lru_cache_default,
  MAX_NUM: () => MAX_NUM,
  MIN_NUM: () => MIN_NUM,
  TextMetrics: () => text_metrics_default,
  append: () => append,
  arabicToRoman: () => arabicToRoman,
  bindEvents: () => bindEvents,
  createPromise: () => createPromise,
  defined: () => defined,
  definitionId: () => definitionId,
  deg: () => deg,
  elementOffset: () => elementOffset,
  elementPadding: () => elementPadding,
  elementScale: () => elementScale,
  elementSize: () => elementSize,
  elementStyles: () => elementStyles,
  encodeBase64: () => encodeBase64,
  eventCoordinates: () => eventCoordinates,
  eventElement: () => eventElement,
  hashKey: () => hashKey,
  isTransparent: () => isTransparent,
  last: () => last,
  limitValue: () => limitValue,
  measureText: () => measureText,
  mergeSort: () => mergeSort,
  normalizeText: () => normalizeText,
  now: () => now_default,
  objectKey: () => objectKey,
  promiseAll: () => promiseAll,
  rad: () => rad,
  round: () => round,
  unbindEvents: () => unbindEvents,
  valueOrDefault: () => valueOrDefault
});

// node_modules/@progress/kendo-drawing/dist/es/util/append.js
function append(first, second) {
  first.push.apply(first, second);
  return first;
}

// node_modules/@progress/kendo-drawing/dist/es/util/arabic-to-roman.js
var literals = {
  1: "i",
  10: "x",
  100: "c",
  2: "ii",
  20: "xx",
  200: "cc",
  3: "iii",
  30: "xxx",
  300: "ccc",
  4: "iv",
  40: "xl",
  400: "cd",
  5: "v",
  50: "l",
  500: "d",
  6: "vi",
  60: "lx",
  600: "dc",
  7: "vii",
  70: "lxx",
  700: "dcc",
  8: "viii",
  80: "lxxx",
  800: "dccc",
  9: "ix",
  90: "xc",
  900: "cm",
  1e3: "m"
};
function arabicToRoman(n) {
  var values = [
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ];
  var roman = "";
  while (n > 0) {
    if (n < values[0]) {
      values.shift();
    } else {
      roman += literals[values[0]];
      n -= values[0];
    }
  }
  return roman;
}

// node_modules/@progress/kendo-drawing/dist/es/util/create-promise.js
function createPromise() {
  var resolveFn, rejectFn;
  var promise = new Promise(function(resolve, reject) {
    resolveFn = function(data) {
      promise._state = "resolved";
      resolve(data);
      return promise;
    };
    rejectFn = function(data) {
      promise._state = "rejected";
      reject(data);
      return promise;
    };
  });
  promise._state = "pending";
  promise.resolve = resolveFn;
  promise.reject = rejectFn;
  promise.state = function() {
    return promise._state;
  };
  return promise;
}

// node_modules/@progress/kendo-drawing/dist/es/util/defined.js
var UNDEFINED = "undefined";
function defined(value) {
  return typeof value !== UNDEFINED;
}

// node_modules/@progress/kendo-drawing/dist/es/util/definition-id.js
var defId = 1;
function definitionId() {
  return "kdef" + defId++;
}

// node_modules/@progress/kendo-drawing/dist/es/util/constants.js
var DEG_TO_RAD = Math.PI / 180;
var MAX_NUM = Number.MAX_VALUE;
var MIN_NUM = -Number.MAX_VALUE;

// node_modules/@progress/kendo-drawing/dist/es/util/deg.js
function deg(radians) {
  return radians / DEG_TO_RAD;
}

// node_modules/@progress/kendo-drawing/dist/es/util/encode-utf.js
var fromCharCode = String.fromCharCode;
var BOM = "þÿ";
function encodeUTF8(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var code = input.charCodeAt(i);
    if (55296 <= code && code <= 56319) {
      var hi = code;
      var low = input.charCodeAt(++i);
      if (!isNaN(low)) {
        code = (hi - 55296) * 1024 + (low - 56320) + 65536;
      }
    }
    if (code < 128) {
      output += fromCharCode(code);
    } else if (code < 2048) {
      output += fromCharCode(192 | code >>> 6);
      output += fromCharCode(128 | code & 63);
    } else if (code < 65536) {
      output += fromCharCode(224 | code >>> 12);
      output += fromCharCode(128 | code >>> 6 & 63);
      output += fromCharCode(128 | code & 63);
    } else if (code < 1114111) {
      output += fromCharCode(240 | code >>> 18);
      output += fromCharCode(128 | code >>> 12 & 63);
      output += fromCharCode(128 | code >>> 6 & 63);
      output += fromCharCode(128 | code & 63);
    }
  }
  return output;
}
function encodeUnit(codeUnit) {
  return fromCharCode(codeUnit >> 8) + fromCharCode(codeUnit & 255);
}
function encodeUTF16BE(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var c = input.charCodeAt(i);
    if (c < 65535) {
      output += encodeUnit(c);
    } else {
      var lead = (c - 65536 >> 10) + 55296;
      var trail = (c - 65536 & 1023) + 56320;
      output += encodeUnit(lead);
      output += encodeUnit(trail);
    }
  }
  return output;
}

// node_modules/@progress/kendo-drawing/dist/es/util/encode-base64.js
var KEY_STR = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function encodeBase64(input) {
  var output = "";
  var i = 0;
  var utfInput = encodeUTF8(input);
  while (i < utfInput.length) {
    var chr1 = utfInput.charCodeAt(i++);
    var chr2 = utfInput.charCodeAt(i++);
    var chr3 = utfInput.charCodeAt(i++);
    var enc1 = chr1 >> 2;
    var enc2 = (chr1 & 3) << 4 | chr2 >> 4;
    var enc3 = (chr2 & 15) << 2 | chr3 >> 6;
    var enc4 = chr3 & 63;
    if (isNaN(chr2)) {
      enc3 = enc4 = 64;
    } else if (isNaN(chr3)) {
      enc4 = 64;
    }
    output = output + KEY_STR.charAt(enc1) + KEY_STR.charAt(enc2) + KEY_STR.charAt(enc3) + KEY_STR.charAt(enc4);
  }
  return output;
}

// node_modules/@progress/kendo-drawing/dist/es/util/event-coordinates.js
function eventCoordinates(e) {
  if (defined((e.x || {}).location)) {
    return {
      x: e.x.location,
      y: e.y.location
    };
  }
  return {
    x: e.pageX || e.clientX || 0,
    y: e.pageY || e.clientY || 0
  };
}

// node_modules/@progress/kendo-drawing/dist/es/util/event-element.js
function eventElement(e) {
  if (e === void 0) e = {};
  return e.touch ? e.touch.initialTouch : e.target;
}

// node_modules/@progress/kendo-drawing/dist/es/util/is-transparent.js
function isTransparent(color) {
  return color === "" || color === null || color === "none" || color === "transparent" || !defined(color);
}

// node_modules/@progress/kendo-drawing/dist/es/util/last.js
function last(array) {
  if (array) {
    return array[array.length - 1];
  }
}

// node_modules/@progress/kendo-drawing/dist/es/util/limit-value.js
function limitValue(value, min, max) {
  return Math.max(Math.min(value, max), min);
}

// node_modules/@progress/kendo-drawing/dist/es/util/merge-sort.js
function mergeSort(a, cmp) {
  if (a.length < 2) {
    return a.slice();
  }
  function merge(a2, b) {
    var r = [], ai = 0, bi = 0, i = 0;
    while (ai < a2.length && bi < b.length) {
      if (cmp(a2[ai], b[bi]) <= 0) {
        r[i++] = a2[ai++];
      } else {
        r[i++] = b[bi++];
      }
    }
    if (ai < a2.length) {
      r.push.apply(r, a2.slice(ai));
    }
    if (bi < b.length) {
      r.push.apply(r, b.slice(bi));
    }
    return r;
  }
  return function sort(a2) {
    if (a2.length <= 1) {
      return a2;
    }
    var m = Math.floor(a2.length / 2);
    var left = a2.slice(0, m);
    var right = a2.slice(m);
    left = sort(left);
    right = sort(right);
    return merge(left, right);
  }(a);
}

// node_modules/@progress/kendo-drawing/dist/es/util/promise-all.js
function promiseAll(promises) {
  return Promise.all(promises);
}

// node_modules/@progress/kendo-drawing/dist/es/util/rad.js
function rad(degrees) {
  return degrees * DEG_TO_RAD;
}

// node_modules/@progress/kendo-drawing/dist/es/util/round.js
function pow(p) {
  if (p) {
    return Math.pow(10, p);
  }
  return 1;
}
function round(value, precision) {
  var power = pow(precision);
  return Math.round(value * power) / power;
}

// node_modules/@progress/kendo-drawing/dist/es/util/value-or-default.js
function valueOrDefault(value, defaultValue) {
  return defined(value) ? value : defaultValue;
}

// node_modules/@progress/kendo-drawing/dist/es/util/bind-events.js
function bindEvents(element, events2) {
  for (var eventName in events2) {
    var eventNames = eventName.trim().split(" ");
    for (var idx = 0; idx < eventNames.length; idx++) {
      element.addEventListener(eventNames[idx], events2[eventName], false);
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/util/element-offset.js
function elementOffset(element) {
  var box = element.getBoundingClientRect();
  var documentElement = document.documentElement;
  return {
    top: box.top + (window.pageYOffset || documentElement.scrollTop) - (documentElement.clientTop || 0),
    left: box.left + (window.pageXOffset || documentElement.scrollLeft) - (documentElement.clientLeft || 0)
  };
}

// node_modules/@progress/kendo-drawing/dist/es/util/element-styles.js
function elementStyles(element, styles) {
  var result = {};
  var style = window.getComputedStyle(element) || {};
  var stylesArray = Array.isArray(styles) ? styles : [styles];
  for (var idx = 0; idx < stylesArray.length; idx++) {
    var field = stylesArray[idx];
    result[field] = style[field];
  }
  return result;
}

// node_modules/@progress/kendo-drawing/dist/es/util/element-size.js
function getPixels(value) {
  if (isNaN(value)) {
    return value;
  }
  return value + "px";
}
function elementSize(element, size) {
  if (size) {
    var width = size.width;
    var height = size.height;
    if (defined(width)) {
      element.style.width = getPixels(width);
    }
    if (defined(height)) {
      element.style.height = getPixels(height);
    }
  } else {
    var size$1 = elementStyles(element, ["width", "height"]);
    return {
      width: parseInt(size$1.width, 10),
      height: parseInt(size$1.height, 10)
    };
  }
}

// node_modules/@progress/kendo-drawing/dist/es/util/unbind-events.js
function unbindEvents(element, events2) {
  if (events2 === void 0) events2 = {};
  for (var name2 in events2) {
    var eventNames = name2.trim().split(" ");
    for (var idx = 0; idx < eventNames.length; idx++) {
      element.removeEventListener(eventNames[idx], events2[name2], false);
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/util/element-padding.js
function elementPadding(element) {
  var ref = elementStyles(element, ["paddingLeft", "paddingTop"]);
  var paddingLeft = ref.paddingLeft;
  var paddingTop = ref.paddingTop;
  return {
    top: parseFloat(paddingTop),
    left: parseFloat(paddingLeft)
  };
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/matrix.js
var Matrix = function(Class3) {
  function Matrix2(a, b, c, d, e, f) {
    if (a === void 0) a = 0;
    if (b === void 0) b = 0;
    if (c === void 0) c = 0;
    if (d === void 0) d = 0;
    if (e === void 0) e = 0;
    if (f === void 0) f = 0;
    Class3.call(this);
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.e = e;
    this.f = f;
  }
  if (Class3) Matrix2.__proto__ = Class3;
  Matrix2.prototype = Object.create(Class3 && Class3.prototype);
  Matrix2.prototype.constructor = Matrix2;
  Matrix2.prototype.multiplyCopy = function multiplyCopy(matrix) {
    return new Matrix2(
      this.a * matrix.a + this.c * matrix.b,
      this.b * matrix.a + this.d * matrix.b,
      this.a * matrix.c + this.c * matrix.d,
      this.b * matrix.c + this.d * matrix.d,
      this.a * matrix.e + this.c * matrix.f + this.e,
      this.b * matrix.e + this.d * matrix.f + this.f
    );
  };
  Matrix2.prototype.invert = function invert() {
    var ref = this;
    var a = ref.a;
    var b = ref.b;
    var d = ref.c;
    var e = ref.d;
    var g = ref.e;
    var h = ref.f;
    var det = a * e - b * d;
    if (det === 0) {
      return null;
    }
    return new Matrix2(
      e / det,
      -b / det,
      -d / det,
      a / det,
      (d * h - e * g) / det,
      (b * g - a * h) / det
    );
  };
  Matrix2.prototype.clone = function clone() {
    return new Matrix2(this.a, this.b, this.c, this.d, this.e, this.f);
  };
  Matrix2.prototype.equals = function equals(other) {
    if (!other) {
      return false;
    }
    return this.a === other.a && this.b === other.b && this.c === other.c && this.d === other.d && this.e === other.e && this.f === other.f;
  };
  Matrix2.prototype.round = function round$1(precision) {
    this.a = round(this.a, precision);
    this.b = round(this.b, precision);
    this.c = round(this.c, precision);
    this.d = round(this.d, precision);
    this.e = round(this.e, precision);
    this.f = round(this.f, precision);
    return this;
  };
  Matrix2.prototype.toArray = function toArray(precision) {
    var result = [this.a, this.b, this.c, this.d, this.e, this.f];
    if (defined(precision)) {
      for (var i = 0; i < result.length; i++) {
        result[i] = round(result[i], precision);
      }
    }
    return result;
  };
  Matrix2.prototype.toString = function toString3(precision, separator) {
    if (separator === void 0) separator = ",";
    return this.toArray(precision).join(separator);
  };
  Matrix2.translate = function translate(x, y) {
    return new Matrix2(1, 0, 0, 1, x, y);
  };
  Matrix2.unit = function unit() {
    return new Matrix2(1, 0, 0, 1, 0, 0);
  };
  Matrix2.rotate = function rotate(angle, x, y) {
    var matrix = new Matrix2();
    matrix.a = Math.cos(rad(angle));
    matrix.b = Math.sin(rad(angle));
    matrix.c = -matrix.b;
    matrix.d = matrix.a;
    matrix.e = x - x * matrix.a + y * matrix.b || 0;
    matrix.f = y - y * matrix.a - x * matrix.b || 0;
    return matrix;
  };
  Matrix2.scale = function scale(scaleX, scaleY) {
    return new Matrix2(scaleX, 0, 0, scaleY, 0, 0);
  };
  return Matrix2;
}(class_default);
Matrix.IDENTITY = Matrix.unit();
var matrix_default = Matrix;

// node_modules/@progress/kendo-drawing/dist/es/util/element-scale.js
var matrixRegexp = /matrix\((.*)\)/;
function parseMatrix(matrixString) {
  var match = matrixString.match(matrixRegexp);
  if (match === null || match.length !== 2) {
    return matrix_default.unit();
  }
  var members = match[1].split(",").map(function(x) {
    return parseFloat(x);
  });
  return new (Function.prototype.bind.apply(matrix_default, [null].concat(members)))();
}
function transformMatrix(element) {
  var transform2 = getComputedStyle(element).transform;
  if (transform2 === "none") {
    return matrix_default.unit();
  }
  return parseMatrix(transform2);
}
function elementScale(element) {
  if (!element) {
    return matrix_default.unit();
  }
  var matrix = transformMatrix(element);
  var parent = element.parentElement;
  while (parent) {
    var parentMatrix = transformMatrix(parent);
    matrix = matrix.multiplyCopy(parentMatrix);
    parent = parent.parentElement;
  }
  matrix.b = matrix.c = matrix.e = matrix.f = 0;
  return matrix;
}

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/lru-cache.js
var LRUCache = function(Class3) {
  function LRUCache2(size) {
    Class3.call(this);
    this._size = size;
    this._length = 0;
    this._map = {};
  }
  if (Class3) LRUCache2.__proto__ = Class3;
  LRUCache2.prototype = Object.create(Class3 && Class3.prototype);
  LRUCache2.prototype.constructor = LRUCache2;
  LRUCache2.prototype.put = function put(key, value) {
    var map = this._map;
    var entry = { key, value };
    map[key] = entry;
    if (!this._head) {
      this._head = this._tail = entry;
    } else {
      this._tail.newer = entry;
      entry.older = this._tail;
      this._tail = entry;
    }
    if (this._length >= this._size) {
      map[this._head.key] = null;
      this._head = this._head.newer;
      this._head.older = null;
    } else {
      this._length++;
    }
  };
  LRUCache2.prototype.get = function get(key) {
    var entry = this._map[key];
    if (entry) {
      if (entry === this._head && entry !== this._tail) {
        this._head = entry.newer;
        this._head.older = null;
      }
      if (entry !== this._tail) {
        if (entry.older) {
          entry.older.newer = entry.newer;
          entry.newer.older = entry.older;
        }
        entry.older = this._tail;
        entry.newer = null;
        this._tail.newer = entry;
        this._tail = entry;
      }
      return entry.value;
    }
  };
  return LRUCache2;
}(class_default);
var lru_cache_default = LRUCache;

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/util.js
var REPLACE_REGEX = /\r?\n|\r|\t/g;
var SPACE = " ";
function normalizeText(text) {
  return String(text).replace(REPLACE_REGEX, SPACE);
}
function objectKey(object) {
  var parts = [];
  for (var key in object) {
    parts.push(key + object[key]);
  }
  return parts.sort().join("");
}
function hashKey(str) {
  var hash = 2166136261;
  for (var i = 0; i < str.length; ++i) {
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
    hash ^= str.charCodeAt(i);
  }
  return hash >>> 0;
}

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/text-metrics.js
function zeroSize() {
  return { width: 0, height: 0, baseline: 0 };
}
var DEFAULT_OPTIONS = {
  baselineMarkerSize: 1
};
var defaultMeasureBox;
if (typeof document !== "undefined") {
  defaultMeasureBox = document.createElement("div");
  defaultMeasureBox.style.setProperty("position", "absolute", "important");
  defaultMeasureBox.style.setProperty("top", "-4000px", "important");
  defaultMeasureBox.style.setProperty("width", "auto", "important");
  defaultMeasureBox.style.setProperty("height", "auto", "important");
  defaultMeasureBox.style.setProperty("padding", "0", "important");
  defaultMeasureBox.style.setProperty("margin", "0", "important");
  defaultMeasureBox.style.setProperty("border", "0", "important");
  defaultMeasureBox.style.setProperty("line-height", "normal", "important");
  defaultMeasureBox.style.setProperty("visibility", "hidden", "important");
  defaultMeasureBox.style.setProperty("white-space", "pre", "important");
}
var TextMetrics = function(Class3) {
  function TextMetrics2(options2) {
    Class3.call(this);
    this._cache = new lru_cache_default(1e3);
    this.options = Object.assign({}, DEFAULT_OPTIONS, options2);
  }
  if (Class3) TextMetrics2.__proto__ = Class3;
  TextMetrics2.prototype = Object.create(Class3 && Class3.prototype);
  TextMetrics2.prototype.constructor = TextMetrics2;
  TextMetrics2.prototype.measure = function measure(text, style, options2) {
    if (options2 === void 0) options2 = {};
    if (typeof text === "undefined" || text === null) {
      return zeroSize();
    }
    var styleKey = objectKey(style);
    var cacheKey = hashKey(text + styleKey);
    var cachedResult = this._cache.get(cacheKey);
    if (cachedResult) {
      return cachedResult;
    }
    var size = zeroSize();
    var measureBox = options2.box || defaultMeasureBox;
    var baselineMarker = this._baselineMarker().cloneNode(false);
    for (var key in style) {
      var value = style[key];
      if (typeof value !== "undefined") {
        measureBox.style[key] = value;
      }
    }
    var textStr = options2.normalizeText !== false ? normalizeText(text) : String(text);
    measureBox.textContent = textStr;
    measureBox.appendChild(baselineMarker);
    document.body.appendChild(measureBox);
    if (textStr.length) {
      size.width = measureBox.offsetWidth - this.options.baselineMarkerSize;
      size.height = measureBox.offsetHeight;
      size.baseline = baselineMarker.offsetTop + this.options.baselineMarkerSize;
    }
    if (size.width > 0 && size.height > 0) {
      this._cache.put(cacheKey, size);
    }
    measureBox.parentNode.removeChild(measureBox);
    return size;
  };
  TextMetrics2.prototype._baselineMarker = function _baselineMarker() {
    var marker = document.createElement("div");
    marker.style.display = "inline-block";
    marker.style.verticalAlign = "baseline";
    marker.style.width = this.options.baselineMarkerSize + "px";
    marker.style.height = this.options.baselineMarkerSize + "px";
    marker.style.overflow = "hidden";
    return marker;
  };
  return TextMetrics2;
}(class_default);
TextMetrics.current = new TextMetrics();
var text_metrics_default = TextMetrics;

// node_modules/@progress/kendo-drawing/dist/es/text-metrics/measure-text.js
function measureText(text, style, measureBox) {
  return text_metrics_default.current.measure(text, style, measureBox);
}

// node_modules/@progress/kendo-drawing/dist/es/core/options-store.js
var toString = {}.toString;
var OptionsStore = function(HasObservers2) {
  function OptionsStore2(options2, prefix) {
    var this$1 = this;
    if (prefix === void 0) prefix = "";
    HasObservers2.call(this);
    this.prefix = prefix;
    for (var field in options2) {
      var member = options2[field];
      member = this$1._wrap(member, field);
      this$1[field] = member;
    }
  }
  if (HasObservers2) OptionsStore2.__proto__ = HasObservers2;
  OptionsStore2.prototype = Object.create(HasObservers2 && HasObservers2.prototype);
  OptionsStore2.prototype.constructor = OptionsStore2;
  OptionsStore2.prototype.get = function get(field) {
    var parts = field.split(".");
    var result = this;
    while (parts.length && result) {
      var part = parts.shift();
      result = result[part];
    }
    return result;
  };
  OptionsStore2.prototype.set = function set(field, value) {
    var current = this.get(field);
    if (current !== value) {
      this._set(field, this._wrap(value, field));
      this.optionsChange({
        field: this.prefix + field,
        value
      });
    }
  };
  OptionsStore2.prototype._set = function _set(field, value) {
    var this$1 = this;
    var composite = field.indexOf(".") >= 0;
    var parentObj = this;
    var fieldName = field;
    if (composite) {
      var parts = fieldName.split(".");
      var prefix = this.prefix;
      while (parts.length > 1) {
        fieldName = parts.shift();
        prefix += fieldName + ".";
        var obj = parentObj[fieldName];
        if (!obj) {
          obj = new OptionsStore2({}, prefix);
          obj.addObserver(this$1);
          parentObj[fieldName] = obj;
        }
        parentObj = obj;
      }
      fieldName = parts[0];
    }
    parentObj._clear(fieldName);
    parentObj[fieldName] = value;
  };
  OptionsStore2.prototype._clear = function _clear(field) {
    var current = this[field];
    if (current && current.removeObserver) {
      current.removeObserver(this);
    }
  };
  OptionsStore2.prototype._wrap = function _wrap(object, field) {
    var type = toString.call(object);
    var wrapped = object;
    if (wrapped !== null && defined(wrapped) && type === "[object Object]") {
      if (!(object instanceof OptionsStore2) && !(object instanceof class_default)) {
        wrapped = new OptionsStore2(wrapped, this.prefix + field + ".");
      }
      wrapped.addObserver(this);
    }
    return wrapped;
  };
  return OptionsStore2;
}(has_observers_default);
var options_store_default = OptionsStore;

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-accessors.js
function setAccessor(field) {
  return function(value) {
    if (this[field] !== value) {
      this[field] = value;
      this.geometryChange();
    }
    return this;
  };
}
function getAccessor(field) {
  return function() {
    return this[field];
  };
}
function defineAccessors(fn, fields) {
  for (var i = 0; i < fields.length; i++) {
    var name2 = fields[i];
    var capitalized = name2.charAt(0).toUpperCase() + name2.substring(1, name2.length);
    fn["set" + capitalized] = setAccessor(name2);
    fn["get" + capitalized] = getAccessor(name2);
  }
}
var withAccessors = function(TBase, names) {
  var result = function(TBase2) {
    function result2() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) result2.__proto__ = TBase2;
    result2.prototype = Object.create(TBase2 && TBase2.prototype);
    result2.prototype.constructor = result2;
    return result2;
  }(TBase);
  defineAccessors(result.prototype, names);
  return result;
};
var with_accessors_default = withAccessors;

// node_modules/@progress/kendo-drawing/dist/es/geometry/to-matrix.js
function toMatrix(transformation) {
  if (transformation && typeof transformation.matrix === "function") {
    return transformation.matrix();
  }
  return transformation;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/point.js
var Point = function(superclass) {
  function Point2(x, y) {
    superclass.call(this);
    this.x = x || 0;
    this.y = y || 0;
  }
  if (superclass) Point2.__proto__ = superclass;
  Point2.prototype = Object.create(superclass && superclass.prototype);
  Point2.prototype.constructor = Point2;
  var staticAccessors = { ZERO: { configurable: true } };
  Point2.prototype.equals = function equals(other) {
    return other && other.x === this.x && other.y === this.y;
  };
  Point2.prototype.clone = function clone() {
    return new Point2(this.x, this.y);
  };
  Point2.prototype.rotate = function rotate(angle, origin) {
    var originPoint = Point2.create(origin) || Point2.ZERO;
    return this.transform(matrix_default.rotate(angle, originPoint.x, originPoint.y));
  };
  Point2.prototype.translate = function translate(x, y) {
    this.x += x;
    this.y += y;
    this.geometryChange();
    return this;
  };
  Point2.prototype.translateWith = function translateWith(point2) {
    return this.translate(point2.x, point2.y);
  };
  Point2.prototype.move = function move(x, y) {
    this.x = this.y = 0;
    return this.translate(x, y);
  };
  Point2.prototype.scale = function scale(scaleX, scaleY) {
    if (scaleY === void 0) scaleY = scaleX;
    this.x *= scaleX;
    this.y *= scaleY;
    this.geometryChange();
    return this;
  };
  Point2.prototype.scaleCopy = function scaleCopy(scaleX, scaleY) {
    return this.clone().scale(scaleX, scaleY);
  };
  Point2.prototype.transform = function transform2(transformation) {
    var matrix = toMatrix(transformation);
    var ref = this;
    var x = ref.x;
    var y = ref.y;
    this.x = matrix.a * x + matrix.c * y + matrix.e;
    this.y = matrix.b * x + matrix.d * y + matrix.f;
    this.geometryChange();
    return this;
  };
  Point2.prototype.transformCopy = function transformCopy(transformation) {
    var point2 = this.clone();
    if (transformation) {
      point2.transform(transformation);
    }
    return point2;
  };
  Point2.prototype.distanceTo = function distanceTo(point2) {
    var dx = this.x - point2.x;
    var dy = this.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  Point2.prototype.round = function round$1(digits) {
    this.x = round(this.x, digits);
    this.y = round(this.y, digits);
    this.geometryChange();
    return this;
  };
  Point2.prototype.toArray = function toArray(digits) {
    var doRound = defined(digits);
    var x = doRound ? round(this.x, digits) : this.x;
    var y = doRound ? round(this.y, digits) : this.y;
    return [x, y];
  };
  Point2.prototype.toString = function toString3(digits, separator) {
    if (separator === void 0) separator = " ";
    var ref = this;
    var x = ref.x;
    var y = ref.y;
    if (defined(digits)) {
      x = round(x, digits);
      y = round(y, digits);
    }
    return x + separator + y;
  };
  Point2.create = function create(arg0, arg1) {
    if (defined(arg0)) {
      if (arg0 instanceof Point2) {
        return arg0;
      } else if (arguments.length === 1 && arg0.length === 2) {
        return new Point2(arg0[0], arg0[1]);
      }
      return new Point2(arg0, arg1);
    }
  };
  Point2.min = function min() {
    var arguments$1 = arguments;
    var minX = MAX_NUM;
    var minY = MAX_NUM;
    for (var i = 0; i < arguments.length; i++) {
      var point2 = arguments$1[i];
      minX = Math.min(point2.x, minX);
      minY = Math.min(point2.y, minY);
    }
    return new Point2(minX, minY);
  };
  Point2.max = function max() {
    var arguments$1 = arguments;
    var maxX = MIN_NUM;
    var maxY = MIN_NUM;
    for (var i = 0; i < arguments.length; i++) {
      var point2 = arguments$1[i];
      maxX = Math.max(point2.x, maxX);
      maxY = Math.max(point2.y, maxY);
    }
    return new Point2(maxX, maxY);
  };
  Point2.minPoint = function minPoint() {
    return new Point2(MIN_NUM, MIN_NUM);
  };
  Point2.maxPoint = function maxPoint() {
    return new Point2(MAX_NUM, MAX_NUM);
  };
  staticAccessors.ZERO.get = function() {
    return new Point2(0, 0);
  };
  Object.defineProperties(Point2, staticAccessors);
  return Point2;
}(with_accessors_default(has_observers_default, ["x", "y"]));
var point_default = Point;

// node_modules/@progress/kendo-drawing/dist/es/geometry/size.js
var Size = function(superclass) {
  function Size2(width, height) {
    superclass.call(this);
    this.width = width || 0;
    this.height = height || 0;
  }
  if (superclass) Size2.__proto__ = superclass;
  Size2.prototype = Object.create(superclass && superclass.prototype);
  Size2.prototype.constructor = Size2;
  var staticAccessors = { ZERO: { configurable: true } };
  Size2.prototype.equals = function equals(other) {
    return other && other.width === this.width && other.height === this.height;
  };
  Size2.prototype.clone = function clone() {
    return new Size2(this.width, this.height);
  };
  Size2.prototype.toArray = function toArray(digits) {
    var doRound = defined(digits);
    var width = doRound ? round(this.width, digits) : this.width;
    var height = doRound ? round(this.height, digits) : this.height;
    return [width, height];
  };
  Size2.create = function create(arg0, arg1) {
    if (defined(arg0)) {
      if (arg0 instanceof Size2) {
        return arg0;
      } else if (arguments.length === 1 && arg0.length === 2) {
        return new Size2(arg0[0], arg0[1]);
      }
      return new Size2(arg0, arg1);
    }
  };
  staticAccessors.ZERO.get = function() {
    return new Size2(0, 0);
  };
  Object.defineProperties(Size2, staticAccessors);
  return Size2;
}(with_accessors_default(has_observers_default, ["width", "height"]));
var size_default = Size;

// node_modules/@progress/kendo-drawing/dist/es/geometry/rect.js
var Rect = function(HasObservers2) {
  function Rect3(origin, size, cornerRadius) {
    if (origin === void 0) origin = new point_default();
    if (size === void 0) size = new size_default();
    if (cornerRadius === void 0) cornerRadius = 0;
    HasObservers2.call(this);
    this.setOrigin(origin);
    this.setSize(size);
    this.setCornerRadius(cornerRadius);
  }
  if (HasObservers2) Rect3.__proto__ = HasObservers2;
  Rect3.prototype = Object.create(HasObservers2 && HasObservers2.prototype);
  Rect3.prototype.constructor = Rect3;
  Rect3.prototype.clone = function clone() {
    return new Rect3(
      this.origin.clone(),
      this.size.clone()
    );
  };
  Rect3.prototype.equals = function equals(other) {
    return other && other.origin.equals(this.origin) && other.size.equals(this.size);
  };
  Rect3.prototype.setOrigin = function setOrigin(value) {
    this._observerField("origin", point_default.create(value));
    this.geometryChange();
    return this;
  };
  Rect3.prototype.getOrigin = function getOrigin() {
    return this.origin;
  };
  Rect3.prototype.setCornerRadius = function setCornerRadius(radius) {
    this.cornerRadius = Array.isArray(radius) ? radius : [radius, radius];
    this.geometryChange();
    return this;
  };
  Rect3.prototype.getCornerRadius = function getCornerRadius() {
    return this.cornerRadius;
  };
  Rect3.prototype.setSize = function setSize(value) {
    this._observerField("size", size_default.create(value));
    this.geometryChange();
    return this;
  };
  Rect3.prototype.getSize = function getSize() {
    return this.size;
  };
  Rect3.prototype.width = function width() {
    return this.size.width;
  };
  Rect3.prototype.height = function height() {
    return this.size.height;
  };
  Rect3.prototype.topLeft = function topLeft() {
    return this.origin.clone();
  };
  Rect3.prototype.bottomRight = function bottomRight() {
    return this.origin.clone().translate(this.width(), this.height());
  };
  Rect3.prototype.topRight = function topRight() {
    return this.origin.clone().translate(this.width(), 0);
  };
  Rect3.prototype.bottomLeft = function bottomLeft() {
    return this.origin.clone().translate(0, this.height());
  };
  Rect3.prototype.center = function center() {
    return this.origin.clone().translate(this.width() / 2, this.height() / 2);
  };
  Rect3.prototype.bbox = function bbox(matrix) {
    var tl = this.topLeft().transformCopy(matrix);
    var tr = this.topRight().transformCopy(matrix);
    var br = this.bottomRight().transformCopy(matrix);
    var bl = this.bottomLeft().transformCopy(matrix);
    return Rect3.fromPoints(tl, tr, br, bl);
  };
  Rect3.prototype.transformCopy = function transformCopy(m) {
    return Rect3.fromPoints(
      this.topLeft().transform(m),
      this.bottomRight().transform(m)
    );
  };
  Rect3.prototype.expand = function expand(x, y) {
    if (y === void 0) y = x;
    this.size.width += 2 * x;
    this.size.height += 2 * y;
    this.origin.translate(-x, -y);
    return this;
  };
  Rect3.prototype.expandCopy = function expandCopy(x, y) {
    return this.clone().expand(x, y);
  };
  Rect3.prototype.containsPoint = function containsPoint(point2) {
    var origin = this.origin;
    var bottomRight = this.bottomRight();
    return !(point2.x < origin.x || point2.y < origin.y || bottomRight.x < point2.x || bottomRight.y < point2.y);
  };
  Rect3.prototype._isOnPath = function _isOnPath(point2, width) {
    var rectOuter = this.expandCopy(width, width);
    var rectInner = this.expandCopy(-width, -width);
    return rectOuter.containsPoint(point2) && !rectInner.containsPoint(point2);
  };
  Rect3.fromPoints = function fromPoints() {
    var topLeft = point_default.min.apply(null, arguments);
    var bottomRight = point_default.max.apply(null, arguments);
    var size = new size_default(
      bottomRight.x - topLeft.x,
      bottomRight.y - topLeft.y
    );
    return new Rect3(topLeft, size);
  };
  Rect3.union = function union(a, b) {
    return Rect3.fromPoints(
      point_default.min(a.topLeft(), b.topLeft()),
      point_default.max(a.bottomRight(), b.bottomRight())
    );
  };
  Rect3.intersect = function intersect(a, b) {
    var rect1 = {
      left: a.topLeft().x,
      top: a.topLeft().y,
      right: a.bottomRight().x,
      bottom: a.bottomRight().y
    };
    var rect2 = {
      left: b.topLeft().x,
      top: b.topLeft().y,
      right: b.bottomRight().x,
      bottom: b.bottomRight().y
    };
    if (rect1.left <= rect2.right && rect2.left <= rect1.right && rect1.top <= rect2.bottom && rect2.top <= rect1.bottom) {
      return Rect3.fromPoints(
        new point_default(Math.max(rect1.left, rect2.left), Math.max(rect1.top, rect2.top)),
        new point_default(Math.min(rect1.right, rect2.right), Math.min(rect1.bottom, rect2.bottom))
      );
    }
  };
  return Rect3;
}(has_observers_default);
var rect_default = Rect;

// node_modules/@progress/kendo-drawing/dist/es/geometry/transformation.js
var Transformation = function(HasObservers2) {
  function Transformation2(matrix) {
    if (matrix === void 0) matrix = matrix_default.unit();
    HasObservers2.call(this);
    this._matrix = matrix;
  }
  if (HasObservers2) Transformation2.__proto__ = HasObservers2;
  Transformation2.prototype = Object.create(HasObservers2 && HasObservers2.prototype);
  Transformation2.prototype.constructor = Transformation2;
  Transformation2.prototype.clone = function clone() {
    return new Transformation2(
      this._matrix.clone()
    );
  };
  Transformation2.prototype.equals = function equals(other) {
    return other && other._matrix.equals(this._matrix);
  };
  Transformation2.prototype.translate = function translate(x, y) {
    this._matrix = this._matrix.multiplyCopy(matrix_default.translate(x, y));
    this._optionsChange();
    return this;
  };
  Transformation2.prototype.scale = function scale(scaleX, scaleY, origin) {
    if (scaleY === void 0) scaleY = scaleX;
    if (origin === void 0) origin = null;
    var originPoint = origin;
    if (originPoint) {
      originPoint = point_default.create(originPoint);
      this._matrix = this._matrix.multiplyCopy(matrix_default.translate(originPoint.x, originPoint.y));
    }
    this._matrix = this._matrix.multiplyCopy(matrix_default.scale(scaleX, scaleY));
    if (originPoint) {
      this._matrix = this._matrix.multiplyCopy(matrix_default.translate(-originPoint.x, -originPoint.y));
    }
    this._optionsChange();
    return this;
  };
  Transformation2.prototype.rotate = function rotate(angle, origin) {
    var originPoint = point_default.create(origin) || point_default.ZERO;
    this._matrix = this._matrix.multiplyCopy(matrix_default.rotate(angle, originPoint.x, originPoint.y));
    this._optionsChange();
    return this;
  };
  Transformation2.prototype.multiply = function multiply(transformation) {
    var matrix = toMatrix(transformation);
    this._matrix = this._matrix.multiplyCopy(matrix);
    this._optionsChange();
    return this;
  };
  Transformation2.prototype.matrix = function matrix(value) {
    if (value) {
      this._matrix = value;
      this._optionsChange();
      return this;
    }
    return this._matrix;
  };
  Transformation2.prototype._optionsChange = function _optionsChange() {
    this.optionsChange({
      field: "transform",
      value: this
    });
  };
  return Transformation2;
}(has_observers_default);
var transformation_default = Transformation;

// node_modules/@progress/kendo-drawing/dist/es/geometry/transform.js
function transform(matrix) {
  if (matrix === null) {
    return null;
  }
  if (matrix instanceof transformation_default) {
    return matrix;
  }
  return new transformation_default(matrix);
}

// node_modules/@progress/kendo-drawing/dist/es/core/constants.js
var DASH_ARRAYS = {
  dot: [1.5, 3.5],
  dash: [4, 3.5],
  longdash: [8, 3.5],
  dashdot: [3.5, 3.5, 1.5, 3.5],
  longdashdot: [8, 3.5, 1.5, 3.5],
  longdashdotdot: [8, 3.5, 1.5, 3.5, 1.5, 3.5]
};
var SOLID = "solid";
var BUTT = "butt";
var PATTERN = "Pattern";

// node_modules/@progress/kendo-drawing/dist/es/shapes/element.js
var Element2 = function(HasObservers2) {
  function Element3(options2) {
    HasObservers2.call(this);
    this._initOptions(options2);
  }
  if (HasObservers2) Element3.__proto__ = HasObservers2;
  Element3.prototype = Object.create(HasObservers2 && HasObservers2.prototype);
  Element3.prototype.constructor = Element3;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Rect";
  };
  Element3.prototype._initOptions = function _initOptions(options2) {
    if (options2 === void 0) options2 = {};
    var clip = options2.clip;
    var transform2 = options2.transform;
    if (transform2) {
      options2.transform = transform(transform2);
    }
    if (clip && !clip.id) {
      clip.id = definitionId();
    }
    this.options = new options_store_default(options2);
    this.options.addObserver(this);
  };
  Element3.prototype.transform = function transform2(value) {
    if (defined(value)) {
      this.options.set("transform", transform(value));
    } else {
      return this.options.get("transform");
    }
  };
  Element3.prototype.parentTransform = function parentTransform() {
    var element = this;
    var parentMatrix;
    while (element.parent) {
      element = element.parent;
      var transformation = element.transform();
      if (transformation) {
        parentMatrix = transformation.matrix().multiplyCopy(parentMatrix || matrix_default.unit());
      }
    }
    if (parentMatrix) {
      return transform(parentMatrix);
    }
  };
  Element3.prototype.currentTransform = function currentTransform(parentTransform) {
    if (parentTransform === void 0) parentTransform = this.parentTransform();
    var elementTransform = this.transform();
    var elementMatrix = toMatrix(elementTransform);
    var parentMatrix = toMatrix(parentTransform);
    var combinedMatrix;
    if (elementMatrix && parentMatrix) {
      combinedMatrix = parentMatrix.multiplyCopy(elementMatrix);
    } else {
      combinedMatrix = elementMatrix || parentMatrix;
    }
    if (combinedMatrix) {
      return transform(combinedMatrix);
    }
  };
  Element3.prototype.visible = function visible(value) {
    if (defined(value)) {
      this.options.set("visible", value);
      return this;
    }
    return this.options.get("visible") !== false;
  };
  Element3.prototype.clip = function clip(value) {
    var options2 = this.options;
    if (defined(value)) {
      if (value && !value.id) {
        value.id = definitionId();
      }
      options2.set("clip", value);
      return this;
    }
    return options2.get("clip");
  };
  Element3.prototype.opacity = function opacity(value) {
    if (defined(value)) {
      this.options.set("opacity", value);
      return this;
    }
    return valueOrDefault(this.options.get("opacity"), 1);
  };
  Element3.prototype.className = function className(value) {
    if (defined(value)) {
      this.options.set("className", value);
      return this;
    }
    return this.options.get("className");
  };
  Element3.prototype.clippedBBox = function clippedBBox(transformation) {
    var bbox = this._clippedBBox(transformation);
    if (bbox) {
      var clip = this.clip();
      return clip ? rect_default.intersect(bbox, clip.bbox(transformation)) : bbox;
    }
  };
  Element3.prototype.containsPoint = function containsPoint(point2, parentTransform) {
    if (this.visible()) {
      var transform2 = this.currentTransform(parentTransform);
      var transformedPoint = point2;
      if (transform2) {
        transformedPoint = point2.transformCopy(transform2.matrix().invert());
      }
      return this._hasFill() && this._containsPoint(transformedPoint) || this._isOnPath && this._hasStroke() && this._isOnPath(transformedPoint);
    }
    return false;
  };
  Element3.prototype._hasFill = function _hasFill() {
    var fill = this.options.fill;
    return fill && (fill.nodeType === PATTERN || !isTransparent(fill.color));
  };
  Element3.prototype._hasStroke = function _hasStroke() {
    var stroke = this.options.stroke;
    return stroke && stroke.width > 0 && !isTransparent(stroke.color);
  };
  Element3.prototype._clippedBBox = function _clippedBBox(transformation) {
    return this.bbox(transformation);
  };
  Object.defineProperties(Element3.prototype, prototypeAccessors);
  return Element3;
}(has_observers_default);
var element_default = Element2;

// node_modules/@progress/kendo-drawing/dist/es/mixins/traversable.js
var traversable = function(TBase, childrenField) {
  return function(TBase2) {
    function anonymous() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) anonymous.__proto__ = TBase2;
    anonymous.prototype = Object.create(TBase2 && TBase2.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.traverse = function traverse(callback) {
      var children = this[childrenField];
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.traverse) {
          child.traverse(callback);
        } else {
          callback(child);
        }
      }
      return this;
    };
    return anonymous;
  }(TBase);
};
var traversable_default = traversable;

// node_modules/@progress/kendo-drawing/dist/es/shapes/utils/elements-bounding-box.js
function elementsBoundingBox(elements, applyTransform, transformation) {
  var boundingBox;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.visible()) {
      var elementBoundingBox = applyTransform ? element.bbox(transformation) : element.rawBBox();
      if (elementBoundingBox) {
        if (boundingBox) {
          boundingBox = rect_default.union(boundingBox, elementBoundingBox);
        } else {
          boundingBox = elementBoundingBox;
        }
      }
    }
  }
  return boundingBox;
}

// node_modules/@progress/kendo-drawing/dist/es/shapes/utils/elements-clippend-bounding-box.js
function elementsClippedBoundingBox(elements, transformation) {
  var boundingBox;
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (element.visible()) {
      var elementBoundingBox = element.clippedBBox(transformation);
      if (elementBoundingBox) {
        if (boundingBox) {
          boundingBox = rect_default.union(boundingBox, elementBoundingBox);
        } else {
          boundingBox = elementBoundingBox;
        }
      }
    }
  }
  return boundingBox;
}

// node_modules/@progress/kendo-drawing/dist/es/shapes/group.js
var Group = function(superclass) {
  function Group2(options2) {
    superclass.call(this, options2);
    this.children = [];
  }
  if (superclass) Group2.__proto__ = superclass;
  Group2.prototype = Object.create(superclass && superclass.prototype);
  Group2.prototype.constructor = Group2;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Group";
  };
  Group2.prototype.childrenChange = function childrenChange(action, items, index) {
    this.trigger("childrenChange", {
      action,
      items,
      index
    });
  };
  Group2.prototype.append = function append$1() {
    append(this.children, arguments);
    this._reparent(arguments, this);
    this.childrenChange("add", arguments);
    return this;
  };
  Group2.prototype.insert = function insert(index, element) {
    this.children.splice(index, 0, element);
    element.parent = this;
    this.childrenChange("add", [element], index);
    return this;
  };
  Group2.prototype.insertAt = function insertAt(element, index) {
    return this.insert(index, element);
  };
  Group2.prototype.remove = function remove(element) {
    var index = this.children.indexOf(element);
    if (index >= 0) {
      this.children.splice(index, 1);
      element.parent = null;
      this.childrenChange("remove", [element], index);
    }
    return this;
  };
  Group2.prototype.removeAt = function removeAt(index) {
    if (0 <= index && index < this.children.length) {
      var element = this.children[index];
      this.children.splice(index, 1);
      element.parent = null;
      this.childrenChange("remove", [element], index);
    }
    return this;
  };
  Group2.prototype.clear = function clear2() {
    var items = this.children;
    this.children = [];
    this._reparent(items, null);
    this.childrenChange("remove", items, 0);
    return this;
  };
  Group2.prototype.bbox = function bbox(transformation) {
    return elementsBoundingBox(this.children, true, this.currentTransform(transformation));
  };
  Group2.prototype.rawBBox = function rawBBox() {
    return elementsBoundingBox(this.children, false);
  };
  Group2.prototype._clippedBBox = function _clippedBBox(transformation) {
    return elementsClippedBoundingBox(this.children, this.currentTransform(transformation));
  };
  Group2.prototype.currentTransform = function currentTransform(transformation) {
    return element_default.prototype.currentTransform.call(this, transformation) || null;
  };
  Group2.prototype.containsPoint = function containsPoint(point2, parentTransform) {
    if (this.visible()) {
      var children = this.children;
      var transform2 = this.currentTransform(parentTransform);
      for (var idx = 0; idx < children.length; idx++) {
        if (children[idx].containsPoint(point2, transform2)) {
          return true;
        }
      }
    }
    return false;
  };
  Group2.prototype._reparent = function _reparent(elements, newParent) {
    var this$1 = this;
    for (var i = 0; i < elements.length; i++) {
      var child = elements[i];
      var parent = child.parent;
      if (parent && parent !== this$1 && parent.remove) {
        parent.remove(child);
      }
      child.parent = newParent;
    }
  };
  Object.defineProperties(Group2.prototype, prototypeAccessors);
  return Group2;
}(traversable_default(element_default, "children"));
var group_default = Group;

// node_modules/@progress/kendo-drawing/dist/es/core/surface.js
var events = [
  "click",
  "mouseenter",
  "mouseleave",
  "mousemove",
  "resize"
];
var Surface = function(Observable2) {
  function Surface5(element, options2) {
    Observable2.call(this);
    this.options = Object.assign({}, options2);
    this.element = element;
    this.element._kendoExportVisual = this.exportVisual.bind(this);
    this._click = this._handler("click");
    this._mouseenter = this._handler("mouseenter");
    this._mouseleave = this._handler("mouseleave");
    this._mousemove = this._handler("mousemove");
    this._visual = new group_default();
    elementSize(element, this.options);
    this.bind(events, this.options);
    this._enableTracking();
  }
  if (Observable2) Surface5.__proto__ = Observable2;
  Surface5.prototype = Object.create(Observable2 && Observable2.prototype);
  Surface5.prototype.constructor = Surface5;
  Surface5.prototype.draw = function draw(element) {
    this._visual.children.push(element);
  };
  Surface5.prototype.clear = function clear2() {
    this._visual.children = [];
  };
  Surface5.prototype.destroy = function destroy2() {
    this._visual = null;
    this.element._kendoExportVisual = null;
    this.unbind();
  };
  Surface5.prototype.eventTarget = function eventTarget(e) {
    var this$1 = this;
    var domNode = eventElement(e);
    var node;
    while (!node && domNode) {
      node = domNode._kendoNode;
      if (domNode === this$1.element) {
        break;
      }
      domNode = domNode.parentElement;
    }
    if (node) {
      return node.srcElement;
    }
  };
  Surface5.prototype.exportVisual = function exportVisual() {
    return this._visual;
  };
  Surface5.prototype.getSize = function getSize() {
    return elementSize(this.element);
  };
  Surface5.prototype.currentSize = function currentSize(size) {
    if (size) {
      this._size = size;
    } else {
      return this._size;
    }
  };
  Surface5.prototype.setSize = function setSize(size) {
    elementSize(this.element, size);
    this.currentSize(size);
    this._resize();
  };
  Surface5.prototype.resize = function resize(force) {
    var size = this.getSize();
    var currentSize = this.currentSize();
    if (force || (size.width > 0 || size.height > 0) && (!currentSize || size.width !== currentSize.width || size.height !== currentSize.height)) {
      this.currentSize(size);
      this._resize(size, force);
      this.trigger("resize", size);
    }
  };
  Surface5.prototype.size = function size(value) {
    if (!value) {
      return this.getSize();
    }
    this.setSize(value);
  };
  Surface5.prototype.suspendTracking = function suspendTracking() {
    this._suspendedTracking = true;
  };
  Surface5.prototype.resumeTracking = function resumeTracking() {
    this._suspendedTracking = false;
  };
  Surface5.prototype._enableTracking = function _enableTracking() {
  };
  Surface5.prototype._resize = function _resize() {
  };
  Surface5.prototype._handler = function _handler(eventName) {
    var this$1 = this;
    return function(e) {
      var node = this$1.eventTarget(e);
      if (node && !this$1._suspendedTracking) {
        this$1.trigger(eventName, {
          element: node,
          originalEvent: e,
          type: eventName
        });
      }
    };
  };
  Surface5.prototype._elementOffset = function _elementOffset() {
    var element = this.element;
    var padding = elementPadding(element);
    var ref = elementOffset(element);
    var left = ref.left;
    var top = ref.top;
    return {
      left: left + padding.left,
      top: top + padding.top
    };
  };
  Surface5.prototype._surfacePoint = function _surfacePoint(e) {
    var offset = this._elementOffset();
    var coord = eventCoordinates(e);
    var x = coord.x - offset.left;
    var y = coord.y - offset.top;
    var inverseTransform = elementScale(this.element).invert();
    var point2 = new point_default(
      x,
      y
    ).transform(inverseTransform);
    return point2;
  };
  return Surface5;
}(observable_default);
var surface_default = Surface;

// node_modules/@progress/kendo-drawing/dist/es/core/base-node.js
var BaseNode = function(Class3) {
  function BaseNode2(srcElement) {
    Class3.call(this);
    this.childNodes = [];
    this.parent = null;
    if (srcElement) {
      this.srcElement = srcElement;
      this.observe();
    }
  }
  if (Class3) BaseNode2.__proto__ = Class3;
  BaseNode2.prototype = Object.create(Class3 && Class3.prototype);
  BaseNode2.prototype.constructor = BaseNode2;
  BaseNode2.prototype.destroy = function destroy2() {
    var this$1 = this;
    if (this.srcElement) {
      this.srcElement.removeObserver(this);
    }
    var children = this.childNodes;
    for (var i = 0; i < children.length; i++) {
      this$1.childNodes[i].destroy();
    }
    this.parent = null;
  };
  BaseNode2.prototype.load = function load() {
  };
  BaseNode2.prototype.observe = function observe() {
    if (this.srcElement) {
      this.srcElement.addObserver(this);
    }
  };
  BaseNode2.prototype.append = function append2(node) {
    this.childNodes.push(node);
    node.parent = this;
  };
  BaseNode2.prototype.insertAt = function insertAt(node, pos) {
    this.childNodes.splice(pos, 0, node);
    node.parent = this;
  };
  BaseNode2.prototype.remove = function remove(index, count) {
    var this$1 = this;
    var end = index + count;
    for (var i = index; i < end; i++) {
      this$1.childNodes[i].removeSelf();
    }
    this.childNodes.splice(index, count);
  };
  BaseNode2.prototype.removeSelf = function removeSelf() {
    this.clear();
    this.destroy();
  };
  BaseNode2.prototype.clear = function clear2() {
    this.remove(0, this.childNodes.length);
  };
  BaseNode2.prototype.invalidate = function invalidate() {
    if (this.parent) {
      this.parent.invalidate();
    }
  };
  BaseNode2.prototype.geometryChange = function geometryChange() {
    this.invalidate();
  };
  BaseNode2.prototype.optionsChange = function optionsChange() {
    this.invalidate();
  };
  BaseNode2.prototype.childrenChange = function childrenChange(e) {
    if (e.action === "add") {
      this.load(e.items, e.index);
    } else if (e.action === "remove") {
      this.remove(e.index, e.items.length);
    }
    this.invalidate();
  };
  return BaseNode2;
}(class_default);
var base_node_default = BaseNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/node-map.js
var NODE_MAP = {};
var node_map_default = NODE_MAP;

// node_modules/@progress/kendo-drawing/dist/es/canvas/node.js
var Node = function(BaseNode2) {
  function Node3(srcElement) {
    BaseNode2.call(this, srcElement);
    if (srcElement) {
      this.initClip();
    }
  }
  if (BaseNode2) Node3.__proto__ = BaseNode2;
  Node3.prototype = Object.create(BaseNode2 && BaseNode2.prototype);
  Node3.prototype.constructor = Node3;
  Node3.prototype.initClip = function initClip() {
    var clip = this.srcElement.clip();
    if (clip) {
      this.clip = clip;
      clip.addObserver(this);
    }
  };
  Node3.prototype.clear = function clear2() {
    if (this.srcElement) {
      this.srcElement.removeObserver(this);
    }
    this.clearClip();
    BaseNode2.prototype.clear.call(this);
  };
  Node3.prototype.clearClip = function clearClip() {
    if (this.clip) {
      this.clip.removeObserver(this);
      delete this.clip;
    }
  };
  Node3.prototype.setClip = function setClip(ctx) {
    if (this.clip) {
      ctx.beginPath();
      var clipNode = new node_map_default[this.clip.nodeType](this.clip);
      clipNode.renderPoints(ctx, this.clip);
      ctx.clip("evenodd");
    }
  };
  Node3.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "clip") {
      this.clearClip();
      this.initClip();
    }
    BaseNode2.prototype.optionsChange.call(this, e);
  };
  Node3.prototype.setTransform = function setTransform2(ctx) {
    if (this.srcElement) {
      var transform2 = this.srcElement.transform();
      if (transform2) {
        ctx.transform.apply(ctx, transform2.matrix().toArray(6));
      }
    }
  };
  Node3.prototype.loadElements = function loadElements(elements, pos, cors) {
    var this$1 = this;
    for (var i = 0; i < elements.length; i++) {
      var srcElement = elements[i];
      var children = srcElement.children;
      var childNode = new node_map_default[srcElement.nodeType](srcElement, cors);
      if (children && children.length > 0) {
        childNode.load(children, pos, cors);
      }
      if (defined(pos)) {
        this$1.insertAt(childNode, pos);
      } else {
        this$1.append(childNode);
      }
    }
  };
  Node3.prototype.load = function load(elements, pos, cors) {
    this.loadElements(elements, pos, cors);
    this.invalidate();
  };
  Node3.prototype.setOpacity = function setOpacity(ctx) {
    if (this.srcElement) {
      var opacity = this.srcElement.opacity();
      if (defined(opacity)) {
        this.globalAlpha(ctx, opacity);
      }
    }
  };
  Node3.prototype.globalAlpha = function globalAlpha(ctx, value) {
    var opactity = value;
    if (opactity && ctx.globalAlpha) {
      opactity *= ctx.globalAlpha;
    }
    ctx.globalAlpha = opactity;
  };
  Node3.prototype.visible = function visible() {
    var src = this.srcElement;
    return !src || src && src.options.visible !== false;
  };
  return Node3;
}(base_node_default);
var node_default = Node;

// node_modules/@progress/kendo-drawing/dist/es/canvas/group-node.js
var GroupNode = function(superclass) {
  function GroupNode3() {
    superclass.apply(this, arguments);
  }
  if (superclass) GroupNode3.__proto__ = superclass;
  GroupNode3.prototype = Object.create(superclass && superclass.prototype);
  GroupNode3.prototype.constructor = GroupNode3;
  GroupNode3.prototype.renderTo = function renderTo(ctx) {
    if (!this.visible()) {
      return;
    }
    ctx.save();
    this.setTransform(ctx);
    this.setClip(ctx);
    this.setOpacity(ctx);
    var childNodes = this.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i];
      if (child.visible()) {
        child.renderTo(ctx);
      }
    }
    ctx.restore();
  };
  return GroupNode3;
}(traversable_default(node_default, "childNodes"));
var group_node_default = GroupNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/root-node.js
var FRAME_DELAY = 1e3 / 60;
var RootNode = function(superclass) {
  function RootNode3(canvas, size) {
    superclass.call(this);
    this.canvas = canvas;
    this.size = size;
    this.ctx = canvas.getContext("2d");
    var invalidateHandler = this._invalidate.bind(this);
    this.invalidate = throttle(function() {
      animation_frame_default(invalidateHandler);
    }, FRAME_DELAY);
  }
  if (superclass) RootNode3.__proto__ = superclass;
  RootNode3.prototype = Object.create(superclass && superclass.prototype);
  RootNode3.prototype.constructor = RootNode3;
  RootNode3.prototype.destroy = function destroy2() {
    superclass.prototype.destroy.call(this);
    this.canvas = null;
    this.ctx = null;
  };
  RootNode3.prototype.load = function load(elements, pos, cors) {
    this.loadElements(elements, pos, cors);
    this._invalidate();
  };
  RootNode3.prototype._rescale = function _rescale(scale) {
    var ref = this;
    var canvas = ref.canvas;
    var size = ref.size;
    canvas.width = size.width * scale;
    canvas.height = size.height * scale;
    this.ctx.scale(scale, scale);
  };
  RootNode3.prototype._devicePixelRatio = function _devicePixelRatio() {
    if (typeof window.devicePixelRatio === "number") {
      return window.devicePixelRatio;
    }
    return 1;
  };
  RootNode3.prototype._invalidate = function _invalidate(options2) {
    if (!this.ctx) {
      return;
    }
    var fixedScale = options2 && options2.fixedScale;
    var scale = fixedScale ? 1 : this._devicePixelRatio();
    this._rescale(scale);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.renderTo(this.ctx);
  };
  return RootNode3;
}(traversable_default(group_node_default, "childNodes"));
var root_node_default = RootNode;

// node_modules/@progress/kendo-drawing/dist/es/search/quad-root.js
var QuadRoot = function(Class3) {
  function QuadRoot2() {
    Class3.call(this);
    this.shapes = [];
  }
  if (Class3) QuadRoot2.__proto__ = Class3;
  QuadRoot2.prototype = Object.create(Class3 && Class3.prototype);
  QuadRoot2.prototype.constructor = QuadRoot2;
  QuadRoot2.prototype._add = function _add(shape, bbox) {
    this.shapes.push({
      bbox,
      shape
    });
    shape._quadNode = this;
  };
  QuadRoot2.prototype.pointShapes = function pointShapes(point2) {
    var shapes = this.shapes;
    var length = shapes.length;
    var result = [];
    for (var idx = 0; idx < length; idx++) {
      if (shapes[idx].bbox.containsPoint(point2)) {
        result.push(shapes[idx].shape);
      }
    }
    return result;
  };
  QuadRoot2.prototype.insert = function insert(shape, bbox) {
    this._add(shape, bbox);
  };
  QuadRoot2.prototype.remove = function remove(shape) {
    var shapes = this.shapes;
    var length = shapes.length;
    for (var idx = 0; idx < length; idx++) {
      if (shapes[idx].shape === shape) {
        shapes.splice(idx, 1);
        break;
      }
    }
  };
  return QuadRoot2;
}(class_default);
var quad_root_default = QuadRoot;

// node_modules/@progress/kendo-drawing/dist/es/geometry.js
var geometry_exports = {};
__export(geometry_exports, {
  Arc: () => arc_default,
  Circle: () => circle_default,
  Matrix: () => matrix_default,
  Point: () => point_default,
  Rect: () => rect_default,
  Segment: () => segment_default,
  Size: () => size_default,
  Transformation: () => transformation_default,
  toMatrix: () => toMatrix,
  transform: () => transform
});

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/ellipse-extreme-angles.js
function ellipseExtremeAngles(center, rx, ry, matrix) {
  var extremeX = 0;
  var extremeY = 0;
  if (matrix) {
    extremeX = Math.atan2(matrix.c * ry, matrix.a * rx);
    if (matrix.b !== 0) {
      extremeY = Math.atan2(matrix.d * ry, matrix.b * rx);
    }
  }
  return {
    x: extremeX,
    y: extremeY
  };
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/circle.js
var PI_DIV_2 = Math.PI / 2;
var Circle = function(superclass) {
  function Circle3(center, radius) {
    if (center === void 0) center = new point_default();
    if (radius === void 0) radius = 0;
    superclass.call(this);
    this.setCenter(center);
    this.setRadius(radius);
  }
  if (superclass) Circle3.__proto__ = superclass;
  Circle3.prototype = Object.create(superclass && superclass.prototype);
  Circle3.prototype.constructor = Circle3;
  Circle3.prototype.setCenter = function setCenter(value) {
    this._observerField("center", point_default.create(value));
    this.geometryChange();
    return this;
  };
  Circle3.prototype.getCenter = function getCenter() {
    return this.center;
  };
  Circle3.prototype.equals = function equals(other) {
    return other && other.center.equals(this.center) && other.radius === this.radius;
  };
  Circle3.prototype.clone = function clone() {
    return new Circle3(this.center.clone(), this.radius);
  };
  Circle3.prototype.pointAt = function pointAt(angle) {
    return this._pointAt(rad(angle));
  };
  Circle3.prototype.bbox = function bbox(matrix) {
    var this$1 = this;
    var extremeAngles = ellipseExtremeAngles(this.center, this.radius, this.radius, matrix);
    var minPoint = point_default.maxPoint();
    var maxPoint = point_default.minPoint();
    for (var i = 0; i < 4; i++) {
      var currentPointX = this$1._pointAt(extremeAngles.x + i * PI_DIV_2).transformCopy(matrix);
      var currentPointY = this$1._pointAt(extremeAngles.y + i * PI_DIV_2).transformCopy(matrix);
      var currentPoint = new point_default(currentPointX.x, currentPointY.y);
      minPoint = point_default.min(minPoint, currentPoint);
      maxPoint = point_default.max(maxPoint, currentPoint);
    }
    return rect_default.fromPoints(minPoint, maxPoint);
  };
  Circle3.prototype._pointAt = function _pointAt(angle) {
    var ref = this;
    var center = ref.center;
    var radius = ref.radius;
    return new point_default(
      center.x + radius * Math.cos(angle),
      center.y + radius * Math.sin(angle)
    );
  };
  Circle3.prototype.containsPoint = function containsPoint(point2) {
    var ref = this;
    var center = ref.center;
    var radius = ref.radius;
    var inCircle = Math.pow(point2.x - center.x, 2) + Math.pow(point2.y - center.y, 2) <= Math.pow(radius, 2);
    return inCircle;
  };
  Circle3.prototype._isOnPath = function _isOnPath(point2, width) {
    var ref = this;
    var center = ref.center;
    var radius = ref.radius;
    var pointDistance = center.distanceTo(point2);
    return radius - width <= pointDistance && pointDistance <= radius + width;
  };
  return Circle3;
}(with_accessors_default(has_observers_default, ["radius"]));
var circle_default = Circle;

// node_modules/@progress/kendo-drawing/dist/es/geometry/constants.js
var PRECISION = 10;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/close.js
function close(a, b, tolerance) {
  if (tolerance === void 0) tolerance = PRECISION;
  return round(Math.abs(a - b), tolerance) === 0;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/close-or-less.js
function closeOrLess(a, b, tolerance) {
  return a < b || close(a, b, tolerance);
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersection.js
function lineIntersection(p0, p1, p2, p3) {
  var s1x = p1.x - p0.x;
  var s2x = p3.x - p2.x;
  var s1y = p1.y - p0.y;
  var s2y = p3.y - p2.y;
  var nx = p0.x - p2.x;
  var ny = p0.y - p2.y;
  var d = s1x * s2y - s2x * s1y;
  var s = (s1x * ny - s1y * nx) / d;
  var t = (s2x * ny - s2y * nx) / d;
  if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
    return new point_default(p0.x + t * s1x, p0.y + t * s1y);
  }
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/arc.js
var MAX_INTERVAL = 45;
var pow2 = Math.pow;
var accessors = ["radiusX", "radiusY", "startAngle", "endAngle", "anticlockwise"];
var Arc = function(superclass) {
  function Arc3(center, options2) {
    if (center === void 0) center = new point_default();
    if (options2 === void 0) options2 = {};
    superclass.call(this);
    this.setCenter(center);
    this.radiusX = options2.radiusX;
    this.radiusY = options2.radiusY || options2.radiusX;
    this.startAngle = options2.startAngle;
    this.endAngle = options2.endAngle;
    this.anticlockwise = options2.anticlockwise || false;
    this.xRotation = options2.xRotation;
  }
  if (superclass) Arc3.__proto__ = superclass;
  Arc3.prototype = Object.create(superclass && superclass.prototype);
  Arc3.prototype.constructor = Arc3;
  Arc3.prototype.clone = function clone() {
    return new Arc3(this.center, {
      radiusX: this.radiusX,
      radiusY: this.radiusY,
      startAngle: this.startAngle,
      endAngle: this.endAngle,
      anticlockwise: this.anticlockwise
    });
  };
  Arc3.prototype.setCenter = function setCenter(value) {
    this._observerField("center", point_default.create(value));
    this.geometryChange();
    return this;
  };
  Arc3.prototype.getCenter = function getCenter() {
    return this.center;
  };
  Arc3.prototype.pointAt = function pointAt(angle) {
    var center = this.center;
    var radian = rad(angle);
    return new point_default(
      center.x + this.radiusX * Math.cos(radian),
      center.y + this.radiusY * Math.sin(radian)
    );
  };
  Arc3.prototype.curvePoints = function curvePoints() {
    var this$1 = this;
    var startAngle = this.startAngle;
    var dir = this.anticlockwise ? -1 : 1;
    var curvePoints2 = [this.pointAt(startAngle)];
    var interval = this._arcInterval();
    var intervalAngle = interval.endAngle - interval.startAngle;
    var subIntervalsCount = Math.ceil(intervalAngle / MAX_INTERVAL);
    var subIntervalAngle = intervalAngle / subIntervalsCount;
    var currentAngle = startAngle;
    var transformation;
    if (this.xRotation) {
      transformation = transform().rotate(this.xRotation, this.center);
    }
    for (var i = 1; i <= subIntervalsCount; i++) {
      var nextAngle = currentAngle + dir * subIntervalAngle;
      var points3 = this$1._intervalCurvePoints(currentAngle, nextAngle, transformation);
      curvePoints2.push(points3.cp1, points3.cp2, points3.p2);
      currentAngle = nextAngle;
    }
    return curvePoints2;
  };
  Arc3.prototype.bbox = function bbox(matrix) {
    var this$1 = this;
    var interval = this._arcInterval();
    var startAngle = interval.startAngle;
    var endAngle = interval.endAngle;
    var extremeAngles = ellipseExtremeAngles(this.center, this.radiusX, this.radiusY, matrix);
    var extremeX = deg(extremeAngles.x);
    var extremeY = deg(extremeAngles.y);
    var endPoint = this.pointAt(endAngle).transformCopy(matrix);
    var currentAngleX = bboxStartAngle(extremeX, startAngle);
    var currentAngleY = bboxStartAngle(extremeY, startAngle);
    var currentPoint = this.pointAt(startAngle).transformCopy(matrix);
    var minPoint = point_default.min(currentPoint, endPoint);
    var maxPoint = point_default.max(currentPoint, endPoint);
    while (currentAngleX < endAngle || currentAngleY < endAngle) {
      var currentPointX = void 0;
      if (currentAngleX < endAngle) {
        currentPointX = this$1.pointAt(currentAngleX).transformCopy(matrix);
        currentAngleX += 90;
      }
      var currentPointY = void 0;
      if (currentAngleY < endAngle) {
        currentPointY = this$1.pointAt(currentAngleY).transformCopy(matrix);
        currentAngleY += 90;
      }
      currentPoint = new point_default(currentPointX.x, currentPointY.y);
      minPoint = point_default.min(minPoint, currentPoint);
      maxPoint = point_default.max(maxPoint, currentPoint);
    }
    return rect_default.fromPoints(minPoint, maxPoint);
  };
  Arc3.prototype._arcInterval = function _arcInterval() {
    var ref = this;
    var startAngle = ref.startAngle;
    var endAngle = ref.endAngle;
    var anticlockwise = ref.anticlockwise;
    if (anticlockwise) {
      var oldStart = startAngle;
      startAngle = endAngle;
      endAngle = oldStart;
    }
    if (startAngle > endAngle || anticlockwise && startAngle === endAngle) {
      endAngle += 360;
    }
    return {
      startAngle,
      endAngle
    };
  };
  Arc3.prototype._intervalCurvePoints = function _intervalCurvePoints(startAngle, endAngle, transformation) {
    var p1 = this.pointAt(startAngle);
    var p2 = this.pointAt(endAngle);
    var p1Derivative = this._derivativeAt(startAngle);
    var p2Derivative = this._derivativeAt(endAngle);
    var t = (rad(endAngle) - rad(startAngle)) / 3;
    var cp1 = new point_default(p1.x + t * p1Derivative.x, p1.y + t * p1Derivative.y);
    var cp2 = new point_default(p2.x - t * p2Derivative.x, p2.y - t * p2Derivative.y);
    if (transformation) {
      p1.transform(transformation);
      p2.transform(transformation);
      cp1.transform(transformation);
      cp2.transform(transformation);
    }
    return {
      p1,
      cp1,
      cp2,
      p2
    };
  };
  Arc3.prototype._derivativeAt = function _derivativeAt(angle) {
    var radian = rad(angle);
    return new point_default(-this.radiusX * Math.sin(radian), this.radiusY * Math.cos(radian));
  };
  Arc3.prototype.containsPoint = function containsPoint(point2) {
    var interval = this._arcInterval();
    var intervalAngle = interval.endAngle - interval.startAngle;
    var ref = this;
    var center = ref.center;
    var radiusX = ref.radiusX;
    var radiusY = ref.radiusY;
    var distance = center.distanceTo(point2);
    var angleRad = Math.atan2(point2.y - center.y, point2.x - center.x);
    var pointRadius = radiusX * radiusY / Math.sqrt(pow2(radiusX, 2) * pow2(Math.sin(angleRad), 2) + pow2(radiusY, 2) * pow2(Math.cos(angleRad), 2));
    var startPoint = this.pointAt(this.startAngle).round(PRECISION);
    var endPoint = this.pointAt(this.endAngle).round(PRECISION);
    var intersection = lineIntersection(center, point2.round(PRECISION), startPoint, endPoint);
    var containsPoint2;
    if (intervalAngle < 180) {
      containsPoint2 = intersection && closeOrLess(center.distanceTo(intersection), distance) && closeOrLess(distance, pointRadius);
    } else {
      var angle = calculateAngle(center.x, center.y, radiusX, radiusY, point2.x, point2.y);
      if (angle !== 360) {
        angle = (360 + angle) % 360;
      }
      var inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;
      containsPoint2 = inAngleRange && closeOrLess(distance, pointRadius) || !inAngleRange && (!intersection || intersection.equals(point2));
    }
    return containsPoint2;
  };
  Arc3.prototype._isOnPath = function _isOnPath(point2, width) {
    var interval = this._arcInterval();
    var center = this.center;
    var angle = calculateAngle(center.x, center.y, this.radiusX, this.radiusY, point2.x, point2.y);
    if (angle !== 360) {
      angle = (360 + angle) % 360;
    }
    var inAngleRange = interval.startAngle <= angle && angle <= interval.endAngle;
    return inAngleRange && this.pointAt(angle).distanceTo(point2) <= width;
  };
  Arc3.fromPoints = function fromPoints(start, end, rx, ry, largeArc, swipe, rotation) {
    var arcParameters = normalizeArcParameters({
      x1: start.x,
      y1: start.y,
      x2: end.x,
      y2: end.y,
      rx,
      ry,
      largeArc,
      swipe,
      rotation
    });
    return new Arc3(arcParameters.center, {
      startAngle: arcParameters.startAngle,
      endAngle: arcParameters.endAngle,
      radiusX: arcParameters.radiusX,
      radiusY: arcParameters.radiusY,
      xRotation: arcParameters.xRotation,
      anticlockwise: swipe === 0
    });
  };
  return Arc3;
}(with_accessors_default(has_observers_default, accessors));
function calculateAngle(cx, cy, rx, ry, x, y) {
  var cos = round((x - cx) / rx, 3);
  var sin = round((y - cy) / ry, 3);
  return round(deg(Math.atan2(sin, cos)));
}
function normalizeArcParameters(parameters) {
  var x1 = parameters.x1;
  var y1 = parameters.y1;
  var x2 = parameters.x2;
  var y2 = parameters.y2;
  var rx = parameters.rx;
  var ry = parameters.ry;
  var largeArc = parameters.largeArc;
  var swipe = parameters.swipe;
  var rotation = parameters.rotation;
  if (rotation === void 0) rotation = 0;
  var radians = rad(rotation);
  var cosine = Math.cos(radians);
  var sine = Math.sin(radians);
  var xT = cosine * (x1 - x2) / 2 + sine * (y1 - y2) / 2;
  var yT = -sine * (x1 - x2) / 2 + cosine * (y1 - y2) / 2;
  var sign = largeArc !== swipe ? 1 : -1;
  var xt2 = Math.pow(xT, 2);
  var yt2 = Math.pow(yT, 2);
  var rx2 = Math.pow(rx, 2);
  var ry2 = Math.pow(ry, 2);
  var delta = xt2 / rx2 + yt2 / ry2;
  if (delta > 1) {
    delta = Math.sqrt(xt2 / rx2 + yt2 / ry2);
    rx = delta * rx;
    rx2 = Math.pow(rx, 2);
    ry = delta * ry;
    ry2 = Math.pow(ry, 2);
  }
  var constT = sign * Math.sqrt((rx2 * ry2 - rx2 * yt2 - ry2 * xt2) / (rx2 * yt2 + ry2 * xt2));
  if (isNaN(constT)) {
    constT = 0;
  }
  var cxT = constT * (rx * yT) / ry;
  var cyT = -constT * (ry * xT) / rx;
  var cx = cosine * cxT - sine * cyT + (x1 + x2) / 2;
  var cy = sine * cxT + cosine * cyT + (y1 + y2) / 2;
  var uX = (xT - cxT) / rx;
  var uY = (yT - cyT) / ry;
  var vX = -(xT + cxT) / rx;
  var vY = -(yT + cyT) / ry;
  var startAngle = (uY >= 0 ? 1 : -1) * deg(Math.acos(uX / Math.sqrt(uX * uX + uY * uY)));
  var angleCosine = round((uX * vX + uY * vY) / (Math.sqrt(uX * uX + uY * uY) * Math.sqrt(vX * vX + vY * vY)), 10);
  var angle = (uX * vY - uY * vX >= 0 ? 1 : -1) * deg(Math.acos(angleCosine));
  if (!swipe && angle > 0) {
    angle -= 360;
  }
  if (swipe && angle < 0) {
    angle += 360;
  }
  var endAngle = startAngle + angle;
  var signEndAngle = endAngle >= 0 ? 1 : -1;
  endAngle = Math.abs(endAngle) % 360 * signEndAngle;
  return {
    center: new point_default(cx, cy),
    startAngle,
    endAngle,
    radiusX: rx,
    radiusY: ry,
    xRotation: rotation
  };
}
function bboxStartAngle(angle, start) {
  var startAngle = angle;
  while (startAngle < start) {
    startAngle += 90;
  }
  return startAngle;
}
var arc_default = Arc;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/is-out-of-end-point.js
function isOutOfEndPoint(endPoint, controlPoint, point2) {
  var angle = deg(Math.atan2(controlPoint.y - endPoint.y, controlPoint.x - endPoint.x));
  var rotatedPoint = point2.transformCopy(transform().rotate(-angle, endPoint));
  return rotatedPoint.x < endPoint.x;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/calculate-curve-at.js
function calculateCurveAt(t, field, points3) {
  var t1 = 1 - t;
  return Math.pow(t1, 3) * points3[0][field] + 3 * Math.pow(t1, 2) * t * points3[1][field] + 3 * Math.pow(t, 2) * t1 * points3[2][field] + Math.pow(t, 3) * points3[3][field];
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/to-cubic-polynomial.js
function toCubicPolynomial(points3, field) {
  return [
    -points3[0][field] + 3 * points3[1][field] - 3 * points3[2][field] + points3[3][field],
    3 * (points3[0][field] - 2 * points3[1][field] + points3[2][field]),
    3 * (-points3[0][field] + points3[1][field]),
    points3[0][field]
  ];
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/complex-number.js
var ComplexNumber = function(Class3) {
  function ComplexNumber2(real, img) {
    if (real === void 0) real = 0;
    if (img === void 0) img = 0;
    Class3.call(this);
    this.real = real;
    this.img = img;
  }
  if (Class3) ComplexNumber2.__proto__ = Class3;
  ComplexNumber2.prototype = Object.create(Class3 && Class3.prototype);
  ComplexNumber2.prototype.constructor = ComplexNumber2;
  ComplexNumber2.prototype.add = function add(cNumber) {
    return new ComplexNumber2(round(this.real + cNumber.real, PRECISION), round(this.img + cNumber.img, PRECISION));
  };
  ComplexNumber2.prototype.addConstant = function addConstant(value) {
    return new ComplexNumber2(this.real + value, this.img);
  };
  ComplexNumber2.prototype.negate = function negate() {
    return new ComplexNumber2(-this.real, -this.img);
  };
  ComplexNumber2.prototype.multiply = function multiply(cNumber) {
    return new ComplexNumber2(
      this.real * cNumber.real - this.img * cNumber.img,
      this.real * cNumber.img + this.img * cNumber.real
    );
  };
  ComplexNumber2.prototype.multiplyConstant = function multiplyConstant(value) {
    return new ComplexNumber2(this.real * value, this.img * value);
  };
  ComplexNumber2.prototype.nthRoot = function nthRoot(n) {
    var rad2 = Math.atan2(this.img, this.real);
    var r = Math.sqrt(Math.pow(this.img, 2) + Math.pow(this.real, 2));
    var nthR = Math.pow(r, 1 / n);
    return new ComplexNumber2(nthR * Math.cos(rad2 / n), nthR * Math.sin(rad2 / n));
  };
  ComplexNumber2.prototype.equals = function equals(cNumber) {
    return this.real === cNumber.real && this.img === cNumber.img;
  };
  ComplexNumber2.prototype.isReal = function isReal() {
    return this.img === 0;
  };
  return ComplexNumber2;
}(class_default);
var complex_number_default = ComplexNumber;

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/solve-cubic-equation.js
function numberSign(x) {
  return x < 0 ? -1 : 1;
}
function solveQuadraticEquation(a, b, c) {
  var squareRoot = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
  return [
    (-b + squareRoot) / (2 * a),
    (-b - squareRoot) / (2 * a)
  ];
}
function solveCubicEquation(a, b, c, d) {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }
  var p = (3 * a * c - Math.pow(b, 2)) / (3 * Math.pow(a, 2));
  var q = (2 * Math.pow(b, 3) - 9 * a * b * c + 27 * Math.pow(a, 2) * d) / (27 * Math.pow(a, 3));
  var Q = Math.pow(p / 3, 3) + Math.pow(q / 2, 2);
  var i = new complex_number_default(0, 1);
  var b3a = -b / (3 * a);
  var x1, x2, y1, y2, y3, z1, z2;
  if (Q < 0) {
    x1 = new complex_number_default(-q / 2, Math.sqrt(-Q)).nthRoot(3);
    x2 = new complex_number_default(-q / 2, -Math.sqrt(-Q)).nthRoot(3);
  } else {
    x1 = -q / 2 + Math.sqrt(Q);
    x1 = new complex_number_default(numberSign(x1) * Math.pow(Math.abs(x1), 1 / 3));
    x2 = -q / 2 - Math.sqrt(Q);
    x2 = new complex_number_default(numberSign(x2) * Math.pow(Math.abs(x2), 1 / 3));
  }
  y1 = x1.add(x2);
  z1 = x1.add(x2).multiplyConstant(-1 / 2);
  z2 = x1.add(x2.negate()).multiplyConstant(Math.sqrt(3) / 2);
  y2 = z1.add(i.multiply(z2));
  y3 = z1.add(i.negate().multiply(z2));
  var result = [];
  if (y1.isReal()) {
    result.push(round(y1.real + b3a, PRECISION));
  }
  if (y2.isReal()) {
    result.push(round(y2.real + b3a, PRECISION));
  }
  if (y3.isReal()) {
    result.push(round(y3.real + b3a, PRECISION));
  }
  return result;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/has-roots-in-range.js
function hasRootsInRange(points3, point2, field, rootField, range) {
  var polynomial = toCubicPolynomial(points3, rootField);
  var roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point2[rootField]);
  var intersection;
  for (var idx = 0; idx < roots.length; idx++) {
    if (0 <= roots[idx] && roots[idx] <= 1) {
      intersection = calculateCurveAt(roots[idx], field, points3);
      if (Math.abs(intersection - point2[field]) <= range) {
        return true;
      }
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/curve-intersections-count.js
function curveIntersectionsCount(points3, point2, bbox) {
  var polynomial = toCubicPolynomial(points3, "x");
  var roots = solveCubicEquation(polynomial[0], polynomial[1], polynomial[2], polynomial[3] - point2.x);
  var rayIntersection, intersectsRay;
  var count = 0;
  for (var i = 0; i < roots.length; i++) {
    rayIntersection = calculateCurveAt(roots[i], "y", points3);
    intersectsRay = close(rayIntersection, point2.y) || rayIntersection > point2.y;
    if (intersectsRay && ((roots[i] === 0 || roots[i] === 1) && bbox.bottomRight().x > point2.x || 0 < roots[i] && roots[i] < 1)) {
      count++;
    }
  }
  return count;
}

// node_modules/@progress/kendo-drawing/dist/es/geometry/math/line-intersections-count.js
function lineIntersectionsCount(a, b, point2) {
  var intersects;
  if (a.x !== b.x) {
    var minX = Math.min(a.x, b.x);
    var maxX = Math.max(a.x, b.x);
    var minY = Math.min(a.y, b.y);
    var maxY = Math.max(a.y, b.y);
    var inRange = minX <= point2.x && point2.x < maxX;
    if (minY === maxY) {
      intersects = point2.y <= minY && inRange;
    } else {
      intersects = inRange && (maxY - minY) * ((a.x - b.x) * (a.y - b.y) > 0 ? point2.x - minX : maxX - point2.x) / (maxX - minX) + minY - point2.y >= 0;
    }
  }
  return intersects ? 1 : 0;
}

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-points.js
function pointAccessor(name2) {
  var fieldName = "_" + name2;
  return function(value) {
    if (defined(value)) {
      this._observerField(fieldName, point_default.create(value));
      this.geometryChange();
      return this;
    }
    return this[fieldName];
  };
}
function definePointAccessors(fn, names) {
  for (var i = 0; i < names.length; i++) {
    fn[names[i]] = pointAccessor(names[i]);
  }
}
var withPoints = function(TBase, names) {
  var result = function(TBase2) {
    function result2() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) result2.__proto__ = TBase2;
    result2.prototype = Object.create(TBase2 && TBase2.prototype);
    result2.prototype.constructor = result2;
    return result2;
  }(TBase);
  definePointAccessors(result.prototype, names);
  return result;
};
var with_points_default = withPoints;

// node_modules/@progress/kendo-drawing/dist/es/geometry/segment.js
var points = ["anchor", "controlIn", "controlOut"];
var Segment = function(superclass) {
  function Segment2(anchor, controlIn, controlOut) {
    superclass.call(this);
    this.anchor(anchor || new point_default());
    this.controlIn(controlIn);
    this.controlOut(controlOut);
  }
  if (superclass) Segment2.__proto__ = superclass;
  Segment2.prototype = Object.create(superclass && superclass.prototype);
  Segment2.prototype.constructor = Segment2;
  Segment2.prototype.bboxTo = function bboxTo(toSegment, matrix) {
    var segmentAnchor = this.anchor().transformCopy(matrix);
    var toSegmentAnchor = toSegment.anchor().transformCopy(matrix);
    var rect;
    if (this.controlOut() && toSegment.controlIn()) {
      rect = this._curveBoundingBox(
        segmentAnchor,
        this.controlOut().transformCopy(matrix),
        toSegment.controlIn().transformCopy(matrix),
        toSegmentAnchor
      );
    } else {
      rect = this._lineBoundingBox(segmentAnchor, toSegmentAnchor);
    }
    return rect;
  };
  Segment2.prototype._lineBoundingBox = function _lineBoundingBox(p1, p2) {
    return rect_default.fromPoints(p1, p2);
  };
  Segment2.prototype._curveBoundingBox = function _curveBoundingBox(p1, cp1, cp2, p2) {
    var points3 = [p1, cp1, cp2, p2];
    var extremesX = this._curveExtremesFor(points3, "x");
    var extremesY = this._curveExtremesFor(points3, "y");
    var xLimits = arrayLimits([extremesX.min, extremesX.max, p1.x, p2.x]);
    var yLimits = arrayLimits([extremesY.min, extremesY.max, p1.y, p2.y]);
    return rect_default.fromPoints(new point_default(xLimits.min, yLimits.min), new point_default(xLimits.max, yLimits.max));
  };
  Segment2.prototype._curveExtremesFor = function _curveExtremesFor(points3, field) {
    var extremes = this._curveExtremes(
      points3[0][field],
      points3[1][field],
      points3[2][field],
      points3[3][field]
    );
    return {
      min: calculateCurveAt(extremes.min, field, points3),
      max: calculateCurveAt(extremes.max, field, points3)
    };
  };
  Segment2.prototype._curveExtremes = function _curveExtremes(x1, x2, x3, x4) {
    var a = x1 - 3 * x2 + 3 * x3 - x4;
    var b = -2 * (x1 - 2 * x2 + x3);
    var c = x1 - x2;
    var sqrt = Math.sqrt(b * b - 4 * a * c);
    var t1 = 0;
    var t2 = 1;
    if (a === 0) {
      if (b !== 0) {
        t1 = t2 = -c / b;
      }
    } else if (!isNaN(sqrt)) {
      t1 = (-b + sqrt) / (2 * a);
      t2 = (-b - sqrt) / (2 * a);
    }
    var min = Math.max(Math.min(t1, t2), 0);
    if (min < 0 || min > 1) {
      min = 0;
    }
    var max = Math.min(Math.max(t1, t2), 1);
    if (max > 1 || max < 0) {
      max = 1;
    }
    return {
      min,
      max
    };
  };
  Segment2.prototype._intersectionsTo = function _intersectionsTo(segment, point2) {
    var intersectionsCount;
    if (this.controlOut() && segment.controlIn()) {
      intersectionsCount = curveIntersectionsCount([this.anchor(), this.controlOut(), segment.controlIn(), segment.anchor()], point2, this.bboxTo(segment));
    } else {
      intersectionsCount = lineIntersectionsCount(this.anchor(), segment.anchor(), point2);
    }
    return intersectionsCount;
  };
  Segment2.prototype._isOnCurveTo = function _isOnCurveTo(segment, point2, width, endSegment) {
    var bbox = this.bboxTo(segment).expand(width, width);
    if (bbox.containsPoint(point2)) {
      var p1 = this.anchor();
      var p2 = this.controlOut();
      var p3 = segment.controlIn();
      var p4 = segment.anchor();
      if (endSegment === "start" && p1.distanceTo(point2) <= width) {
        return !isOutOfEndPoint(p1, p2, point2);
      } else if (endSegment === "end" && p4.distanceTo(point2) <= width) {
        return !isOutOfEndPoint(p4, p3, point2);
      }
      var points3 = [p1, p2, p3, p4];
      if (hasRootsInRange(points3, point2, "x", "y", width) || hasRootsInRange(points3, point2, "y", "x", width)) {
        return true;
      }
      var rotation = transform().rotate(45, point2);
      var rotatedPoints = [p1.transformCopy(rotation), p2.transformCopy(rotation), p3.transformCopy(rotation), p4.transformCopy(rotation)];
      return hasRootsInRange(rotatedPoints, point2, "x", "y", width) || hasRootsInRange(rotatedPoints, point2, "y", "x", width);
    }
  };
  Segment2.prototype._isOnLineTo = function _isOnLineTo(segment, point2, width) {
    var p1 = this.anchor();
    var p2 = segment.anchor();
    var angle = deg(Math.atan2(p2.y - p1.y, p2.x - p1.x));
    var rect = new rect_default([p1.x, p1.y - width / 2], [p1.distanceTo(p2), width]);
    return rect.containsPoint(point2.transformCopy(transform().rotate(-angle, p1)));
  };
  Segment2.prototype._isOnPathTo = function _isOnPathTo(segment, point2, width, endSegment) {
    var isOnPath;
    if (this.controlOut() && segment.controlIn()) {
      isOnPath = this._isOnCurveTo(segment, point2, width / 2, endSegment);
    } else {
      isOnPath = this._isOnLineTo(segment, point2, width);
    }
    return isOnPath;
  };
  return Segment2;
}(with_points_default(has_observers_default, points));
function arrayLimits(arr) {
  var length = arr.length;
  var min = MAX_NUM;
  var max = MIN_NUM;
  for (var i = 0; i < length; i++) {
    max = Math.max(max, arr[i]);
    min = Math.min(min, arr[i]);
  }
  return {
    min,
    max
  };
}
var segment_default = Segment;

// node_modules/@progress/kendo-drawing/dist/es/search/quad-node.js
var QuadNode = function(QuadRoot2) {
  function QuadNode2(rect) {
    QuadRoot2.call(this);
    this.children = [];
    this.rect = rect;
  }
  if (QuadRoot2) QuadNode2.__proto__ = QuadRoot2;
  QuadNode2.prototype = Object.create(QuadRoot2 && QuadRoot2.prototype);
  QuadNode2.prototype.constructor = QuadNode2;
  QuadNode2.prototype.inBounds = function inBounds(rect) {
    var nodeRect = this.rect;
    var nodeBottomRight = nodeRect.bottomRight();
    var bottomRight = rect.bottomRight();
    var inBounds2 = nodeRect.origin.x <= rect.origin.x && nodeRect.origin.y <= rect.origin.y && bottomRight.x <= nodeBottomRight.x && bottomRight.y <= nodeBottomRight.y;
    return inBounds2;
  };
  QuadNode2.prototype.pointShapes = function pointShapes(point2) {
    var children = this.children;
    var length = children.length;
    var result = QuadRoot2.prototype.pointShapes.call(this, point2);
    for (var idx = 0; idx < length; idx++) {
      append(result, children[idx].pointShapes(point2));
    }
    return result;
  };
  QuadNode2.prototype.insert = function insert(shape, bbox) {
    var children = this.children;
    var inserted = false;
    if (this.inBounds(bbox)) {
      if (this.shapes.length < 4) {
        this._add(shape, bbox);
      } else {
        if (!children.length) {
          this._initChildren();
        }
        for (var idx = 0; idx < children.length; idx++) {
          if (children[idx].insert(shape, bbox)) {
            inserted = true;
            break;
          }
        }
        if (!inserted) {
          this._add(shape, bbox);
        }
      }
      inserted = true;
    }
    return inserted;
  };
  QuadNode2.prototype._initChildren = function _initChildren() {
    var ref = this;
    var rect = ref.rect;
    var children = ref.children;
    var center = rect.center();
    var halfWidth = rect.width() / 2;
    var halfHeight = rect.height() / 2;
    children.push(
      new QuadNode2(new rect_default([rect.origin.x, rect.origin.y], [halfWidth, halfHeight])),
      new QuadNode2(new rect_default([center.x, rect.origin.y], [halfWidth, halfHeight])),
      new QuadNode2(new rect_default([rect.origin.x, center.y], [halfWidth, halfHeight])),
      new QuadNode2(new rect_default([center.x, center.y], [halfWidth, halfHeight]))
    );
  };
  return QuadNode2;
}(quad_root_default);
var quad_node_default = QuadNode;

// node_modules/@progress/kendo-drawing/dist/es/search/shapes-quad-tree.js
var ROOT_SIZE = 3e3;
var LEVEL_STEP = 1e4;
var MAX_LEVEL = 75;
var ShapesQuadTree = function(Class3) {
  function ShapesQuadTree2() {
    Class3.call(this);
    this.initRoots();
  }
  if (Class3) ShapesQuadTree2.__proto__ = Class3;
  ShapesQuadTree2.prototype = Object.create(Class3 && Class3.prototype);
  ShapesQuadTree2.prototype.constructor = ShapesQuadTree2;
  ShapesQuadTree2.prototype.initRoots = function initRoots() {
    this.rootMap = {};
    this.root = new quad_root_default();
    this.rootElements = [];
  };
  ShapesQuadTree2.prototype.clear = function clear2() {
    var this$1 = this;
    var rootElements = this.rootElements;
    for (var idx = 0; idx < rootElements.length; idx++) {
      this$1.remove(rootElements[idx]);
    }
    this.initRoots();
  };
  ShapesQuadTree2.prototype.pointShape = function pointShape(point2) {
    var sectorRoot = (this.rootMap[Math.floor(point2.x / ROOT_SIZE)] || {})[Math.floor(point2.y / ROOT_SIZE)];
    var result = this.root.pointShapes(point2);
    if (sectorRoot) {
      result = result.concat(sectorRoot.pointShapes(point2));
    }
    this.assignZindex(result);
    result.sort(zIndexComparer);
    for (var idx = 0; idx < result.length; idx++) {
      if (result[idx].containsPoint(point2)) {
        return result[idx];
      }
    }
  };
  ShapesQuadTree2.prototype.assignZindex = function assignZindex(elements) {
    var this$1 = this;
    for (var idx = 0; idx < elements.length; idx++) {
      var element = elements[idx];
      var zIndex = 0;
      var levelWeight = Math.pow(LEVEL_STEP, MAX_LEVEL);
      var parents = [];
      while (element) {
        parents.push(element);
        element = element.parent;
      }
      while (parents.length) {
        element = parents.pop();
        zIndex += ((element.parent ? element.parent.children : this$1.rootElements).indexOf(element) + 1) * levelWeight;
        levelWeight /= LEVEL_STEP;
      }
      elements[idx]._zIndex = zIndex;
    }
  };
  ShapesQuadTree2.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "transform" || e.field === "stroke.width") {
      this.bboxChange(e.element);
    }
  };
  ShapesQuadTree2.prototype.geometryChange = function geometryChange(e) {
    this.bboxChange(e.element);
  };
  ShapesQuadTree2.prototype.bboxChange = function bboxChange(element) {
    var this$1 = this;
    if (element.nodeType === "Group") {
      for (var idx = 0; idx < element.children.length; idx++) {
        this$1.bboxChange(element.children[idx]);
      }
    } else {
      if (element._quadNode) {
        element._quadNode.remove(element);
      }
      this._insertShape(element);
    }
  };
  ShapesQuadTree2.prototype.add = function add(elements) {
    var elementsArray = Array.isArray(elements) ? elements.slice(0) : [elements];
    append(this.rootElements, elementsArray);
    this._insert(elementsArray);
  };
  ShapesQuadTree2.prototype.childrenChange = function childrenChange(e) {
    var this$1 = this;
    if (e.action === "remove") {
      for (var idx = 0; idx < e.items.length; idx++) {
        this$1.remove(e.items[idx]);
      }
    } else {
      this._insert(Array.prototype.slice.call(e.items, 0));
    }
  };
  ShapesQuadTree2.prototype._insert = function _insert(elements) {
    var this$1 = this;
    var element;
    while (elements.length > 0) {
      element = elements.pop();
      element.addObserver(this$1);
      if (element.nodeType === "Group") {
        append(elements, element.children);
      } else {
        this$1._insertShape(element);
      }
    }
  };
  ShapesQuadTree2.prototype._insertShape = function _insertShape(shape) {
    var bbox = shape.bbox();
    if (bbox) {
      var sectors = this.getSectors(bbox);
      var x = sectors[0][0];
      var y = sectors[1][0];
      if (this.inRoot(sectors)) {
        this.root.insert(shape, bbox);
      } else {
        var rootMap = this.rootMap;
        if (!rootMap[x]) {
          rootMap[x] = {};
        }
        if (!rootMap[x][y]) {
          rootMap[x][y] = new quad_node_default(
            new rect_default([x * ROOT_SIZE, y * ROOT_SIZE], [ROOT_SIZE, ROOT_SIZE])
          );
        }
        rootMap[x][y].insert(shape, bbox);
      }
    }
  };
  ShapesQuadTree2.prototype.remove = function remove(element) {
    var this$1 = this;
    element.removeObserver(this);
    if (element.nodeType === "Group") {
      var children = element.children;
      for (var idx = 0; idx < children.length; idx++) {
        this$1.remove(children[idx]);
      }
    } else if (element._quadNode) {
      element._quadNode.remove(element);
      delete element._quadNode;
    }
  };
  ShapesQuadTree2.prototype.inRoot = function inRoot(sectors) {
    return sectors[0].length > 1 || sectors[1].length > 1;
  };
  ShapesQuadTree2.prototype.getSectors = function getSectors(rect) {
    var bottomRight = rect.bottomRight();
    var bottomX = Math.floor(bottomRight.x / ROOT_SIZE);
    var bottomY = Math.floor(bottomRight.y / ROOT_SIZE);
    var sectors = [[], []];
    for (var x = Math.floor(rect.origin.x / ROOT_SIZE); x <= bottomX; x++) {
      sectors[0].push(x);
    }
    for (var y = Math.floor(rect.origin.y / ROOT_SIZE); y <= bottomY; y++) {
      sectors[1].push(y);
    }
    return sectors;
  };
  return ShapesQuadTree2;
}(class_default);
function zIndexComparer(x1, x2) {
  if (x1._zIndex < x2._zIndex) {
    return 1;
  }
  if (x1._zIndex > x2._zIndex) {
    return -1;
  }
  return 0;
}
var shapes_quad_tree_default = ShapesQuadTree;

// node_modules/@progress/kendo-drawing/dist/es/canvas/surface-cursor.js
var SurfaceCursor = function SurfaceCursor2(surface) {
  surface.bind("mouseenter", this._mouseenter.bind(this));
  surface.bind("mouseleave", this._mouseleave.bind(this));
  this.element = surface.element;
};
SurfaceCursor.prototype.clear = function clear() {
  this._resetCursor();
};
SurfaceCursor.prototype.destroy = function destroy() {
  this._resetCursor();
  delete this.element;
};
SurfaceCursor.prototype._mouseenter = function _mouseenter(e) {
  var cursor = this._shapeCursor(e);
  if (!cursor) {
    this._resetCursor();
  } else {
    if (!this._current) {
      this._defaultCursor = this._getCursor();
    }
    this._setCursor(cursor);
  }
};
SurfaceCursor.prototype._mouseleave = function _mouseleave() {
  this._resetCursor();
};
SurfaceCursor.prototype._shapeCursor = function _shapeCursor(e) {
  var shape = e.element;
  while (shape && !defined(shape.options.cursor)) {
    shape = shape.parent;
  }
  if (shape) {
    return shape.options.cursor;
  }
};
SurfaceCursor.prototype._getCursor = function _getCursor() {
  if (this.element) {
    return this.element.style.cursor;
  }
};
SurfaceCursor.prototype._setCursor = function _setCursor(cursor) {
  if (this.element) {
    this.element.style.cursor = cursor;
    this._current = cursor;
  }
};
SurfaceCursor.prototype._resetCursor = function _resetCursor() {
  if (this._current) {
    this._setCursor(this._defaultCursor || "");
    delete this._current;
  }
};
var surface_cursor_default = SurfaceCursor;

// node_modules/@progress/kendo-drawing/dist/es/shapes/elements-array.js
var push = [].push;
var pop = [].pop;
var splice = [].splice;
var shift = [].shift;
var slice = [].slice;
var unshift = [].unshift;
var ElementsArray = function(HasObservers2) {
  function ElementsArray2(array) {
    if (array === void 0) array = [];
    HasObservers2.call(this);
    this.length = 0;
    this._splice(0, array.length, array);
  }
  if (HasObservers2) ElementsArray2.__proto__ = HasObservers2;
  ElementsArray2.prototype = Object.create(HasObservers2 && HasObservers2.prototype);
  ElementsArray2.prototype.constructor = ElementsArray2;
  ElementsArray2.prototype.elements = function elements(value) {
    if (value) {
      this._splice(0, this.length, value);
      this._change();
      return this;
    }
    return this.slice(0);
  };
  ElementsArray2.prototype.push = function push$1() {
    var elements = arguments;
    var result = push.apply(this, elements);
    this._add(elements);
    return result;
  };
  ElementsArray2.prototype.slice = function slice$1() {
    return slice.call(this);
  };
  ElementsArray2.prototype.pop = function pop$1() {
    var length = this.length;
    var result = pop.apply(this);
    if (length) {
      this._remove([result]);
    }
    return result;
  };
  ElementsArray2.prototype.splice = function splice2(index, howMany) {
    var elements = slice.call(arguments, 2);
    var result = this._splice(index, howMany, elements);
    this._change();
    return result;
  };
  ElementsArray2.prototype.shift = function shift$1() {
    var length = this.length;
    var result = shift.apply(this);
    if (length) {
      this._remove([result]);
    }
    return result;
  };
  ElementsArray2.prototype.unshift = function unshift$1() {
    var elements = arguments;
    var result = unshift.apply(this, elements);
    this._add(elements);
    return result;
  };
  ElementsArray2.prototype.indexOf = function indexOf(element) {
    var this$1 = this;
    var length = this.length;
    for (var idx = 0; idx < length; idx++) {
      if (this$1[idx] === element) {
        return idx;
      }
    }
    return -1;
  };
  ElementsArray2.prototype._splice = function _splice(index, howMany, elements) {
    var result = splice.apply(this, [index, howMany].concat(elements));
    this._clearObserver(result);
    this._setObserver(elements);
    return result;
  };
  ElementsArray2.prototype._add = function _add(elements) {
    this._setObserver(elements);
    this._change();
  };
  ElementsArray2.prototype._remove = function _remove(elements) {
    this._clearObserver(elements);
    this._change();
  };
  ElementsArray2.prototype._setObserver = function _setObserver(elements) {
    var this$1 = this;
    for (var idx = 0; idx < elements.length; idx++) {
      elements[idx].addObserver(this$1);
    }
  };
  ElementsArray2.prototype._clearObserver = function _clearObserver(elements) {
    var this$1 = this;
    for (var idx = 0; idx < elements.length; idx++) {
      elements[idx].removeObserver(this$1);
    }
  };
  ElementsArray2.prototype._change = function _change() {
  };
  return ElementsArray2;
}(has_observers_default);
var elements_array_default = ElementsArray;

// node_modules/@progress/kendo-drawing/dist/es/gradients/stops-array.js
var StopsArray = function(ElementsArray2) {
  function StopsArray2() {
    ElementsArray2.apply(this, arguments);
  }
  if (ElementsArray2) StopsArray2.__proto__ = ElementsArray2;
  StopsArray2.prototype = Object.create(ElementsArray2 && ElementsArray2.prototype);
  StopsArray2.prototype.constructor = StopsArray2;
  StopsArray2.prototype._change = function _change() {
    this.optionsChange({
      field: "stops"
    });
  };
  return StopsArray2;
}(elements_array_default);
var stops_array_default = StopsArray;

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-options.js
function optionsAccessor(name2) {
  return function(value) {
    if (defined(value)) {
      this.options.set(name2, value);
      return this;
    }
    return this.options.get(name2);
  };
}
function defineOptionsAccessors(fn, names) {
  for (var i = 0; i < names.length; i++) {
    fn[names[i]] = optionsAccessor(names[i]);
  }
}
var withOptions = function(TBase, names) {
  var result = function(TBase2) {
    function result2() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) result2.__proto__ = TBase2;
    result2.prototype = Object.create(TBase2 && TBase2.prototype);
    result2.prototype.constructor = result2;
    return result2;
  }(TBase);
  defineOptionsAccessors(result.prototype, names);
  return result;
};
var with_options_default = withOptions;

// node_modules/@progress/kendo-drawing/dist/es/gradients/gradient-stop.js
var options = ["offset", "color", "opacity"];
var GradientStop = function(superclass) {
  function GradientStop2(offset, color, opacity) {
    superclass.call(this);
    this.options = new options_store_default({
      offset,
      color,
      opacity: defined(opacity) ? opacity : 1
    });
    this.options.addObserver(this);
  }
  if (superclass) GradientStop2.__proto__ = superclass;
  GradientStop2.prototype = Object.create(superclass && superclass.prototype);
  GradientStop2.prototype.constructor = GradientStop2;
  GradientStop2.create = function create(arg) {
    if (defined(arg)) {
      var stop;
      if (arg instanceof GradientStop2) {
        stop = arg;
      } else if (arg.length > 1) {
        stop = new GradientStop2(arg[0], arg[1], arg[2]);
      } else {
        stop = new GradientStop2(arg.offset, arg.color, arg.opacity);
      }
      return stop;
    }
  };
  return GradientStop2;
}(with_options_default(has_observers_default, options));
var gradient_stop_default = GradientStop;

// node_modules/@progress/kendo-drawing/dist/es/gradients/gradient.js
var Gradient = function(HasObservers2) {
  function Gradient2(options2) {
    if (options2 === void 0) options2 = {};
    HasObservers2.call(this);
    this.stops = new stops_array_default(this._createStops(options2.stops));
    this.stops.addObserver(this);
    this._userSpace = options2.userSpace;
    this.id = definitionId();
  }
  if (HasObservers2) Gradient2.__proto__ = HasObservers2;
  Gradient2.prototype = Object.create(HasObservers2 && HasObservers2.prototype);
  Gradient2.prototype.constructor = Gradient2;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Gradient";
  };
  Gradient2.prototype.userSpace = function userSpace(value) {
    if (defined(value)) {
      this._userSpace = value;
      this.optionsChange();
      return this;
    }
    return this._userSpace;
  };
  Gradient2.prototype._createStops = function _createStops(stops) {
    if (stops === void 0) stops = [];
    var result = [];
    for (var idx = 0; idx < stops.length; idx++) {
      result.push(gradient_stop_default.create(stops[idx]));
    }
    return result;
  };
  Gradient2.prototype.addStop = function addStop(offset, color, opacity) {
    this.stops.push(new gradient_stop_default(offset, color, opacity));
  };
  Gradient2.prototype.removeStop = function removeStop(stop) {
    var index = this.stops.indexOf(stop);
    if (index >= 0) {
      this.stops.splice(index, 1);
    }
  };
  Gradient2.prototype.optionsChange = function optionsChange(e) {
    this.trigger("optionsChange", {
      field: "gradient" + (e ? "." + e.field : ""),
      value: this
    });
  };
  Gradient2.prototype.geometryChange = function geometryChange() {
    this.optionsChange();
  };
  Object.defineProperties(Gradient2.prototype, prototypeAccessors);
  return Gradient2;
}(has_observers_default);
var gradient_default = Gradient;

// node_modules/@progress/kendo-drawing/dist/es/gradients/linear-gradient.js
var points2 = ["start", "end"];
var LinearGradient = function(superclass) {
  function LinearGradient2(options2) {
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.start(options2.start || new point_default());
    this.end(options2.end || new point_default(1, 0));
  }
  if (superclass) LinearGradient2.__proto__ = superclass;
  LinearGradient2.prototype = Object.create(superclass && superclass.prototype);
  LinearGradient2.prototype.constructor = LinearGradient2;
  return LinearGradient2;
}(with_points_default(gradient_default, points2));
var linear_gradient_default = LinearGradient;

// node_modules/@progress/kendo-drawing/dist/es/gradients/radial-gradient.js
var RadialGradient = function(superclass) {
  function RadialGradient2(options2) {
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.center(options2.center || new point_default());
    this._radius = defined(options2.radius) ? options2.radius : 1;
    this._fallbackFill = options2.fallbackFill;
  }
  if (superclass) RadialGradient2.__proto__ = superclass;
  RadialGradient2.prototype = Object.create(superclass && superclass.prototype);
  RadialGradient2.prototype.constructor = RadialGradient2;
  RadialGradient2.prototype.radius = function radius(value) {
    if (defined(value)) {
      this._radius = value;
      this.geometryChange();
      return this;
    }
    return this._radius;
  };
  RadialGradient2.prototype.fallbackFill = function fallbackFill(value) {
    if (defined(value)) {
      this._fallbackFill = value;
      this.optionsChange();
      return this;
    }
    return this._fallbackFill;
  };
  return RadialGradient2;
}(with_points_default(gradient_default, ["center"]));
var radial_gradient_default = RadialGradient;

// node_modules/@progress/kendo-drawing/dist/es/canvas/utils/render-path.js
function renderPath(ctx, path) {
  var segments = path.segments;
  if (segments.length === 0) {
    return;
  }
  var segment = segments[0];
  var anchor = segment.anchor();
  ctx.moveTo(anchor.x, anchor.y);
  for (var i = 1; i < segments.length; i++) {
    segment = segments[i];
    anchor = segment.anchor();
    var prevSeg = segments[i - 1];
    var prevOut = prevSeg.controlOut();
    var controlIn = segment.controlIn();
    if (prevOut && controlIn) {
      ctx.bezierCurveTo(
        prevOut.x,
        prevOut.y,
        controlIn.x,
        controlIn.y,
        anchor.x,
        anchor.y
      );
    } else {
      ctx.lineTo(anchor.x, anchor.y);
    }
  }
  if (path.options.closed) {
    ctx.closePath();
  }
}

// node_modules/@progress/kendo-drawing/dist/es/canvas/path-node.js
function addGradientStops(gradient, stops) {
  for (var idx = 0; idx < stops.length; idx++) {
    var stop = stops[idx];
    var color = parseColor(stop.color());
    color.a *= stop.opacity();
    gradient.addColorStop(stop.offset(), color.toCssRgba());
  }
}
var PathNode = function(Node3) {
  function PathNode3() {
    Node3.apply(this, arguments);
  }
  if (Node3) PathNode3.__proto__ = Node3;
  PathNode3.prototype = Object.create(Node3 && Node3.prototype);
  PathNode3.prototype.constructor = PathNode3;
  PathNode3.prototype.renderTo = function renderTo(ctx) {
    ctx.save();
    this.setTransform(ctx);
    this.setClip(ctx);
    this.setOpacity(ctx);
    ctx.beginPath();
    this.renderPoints(ctx, this.srcElement);
    this.setLineDash(ctx);
    this.setLineCap(ctx);
    this.setLineJoin(ctx);
    this.setFill(ctx);
    this.setStroke(ctx);
    ctx.restore();
  };
  PathNode3.prototype.setFill = function setFill(ctx) {
    var fill = this.srcElement.options.fill;
    var hasFill = false;
    if (fill) {
      if (fill.nodeType === "Gradient") {
        this.setGradientFill(ctx, fill);
        hasFill = true;
      } else if (fill.nodeType === PATTERN) {
        this.setPatternFill(ctx, fill);
        hasFill = true;
      } else if (!isTransparent(fill.color)) {
        ctx.fillStyle = fill.color;
        ctx.save();
        this.globalAlpha(ctx, fill.opacity);
        ctx.fill();
        ctx.restore();
        hasFill = true;
      }
    }
    return hasFill;
  };
  PathNode3.prototype.setGradientFill = function setGradientFill(ctx, fill) {
    var bbox = this.srcElement.rawBBox();
    var gradient;
    if (fill instanceof linear_gradient_default) {
      var start = fill.start();
      var end = fill.end();
      gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
    } else if (fill instanceof radial_gradient_default) {
      var center = fill.center();
      gradient = ctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, fill.radius());
    }
    addGradientStops(gradient, fill.stops);
    ctx.save();
    if (!fill.userSpace()) {
      ctx.transform(bbox.width(), 0, 0, bbox.height(), bbox.origin.x, bbox.origin.y);
    }
    ctx.fillStyle = gradient;
    ctx.fill();
    ctx.restore();
  };
  PathNode3.prototype.setPatternFill = function setPatternFill(ctx, pattern) {
    var size = pattern.size();
    var patternCanvas = document.createElement("canvas");
    var patternContext = patternCanvas.getContext("2d");
    patternCanvas.width = size.getWidth();
    patternCanvas.height = size.getHeight();
    this.childNodes.length = 0;
    this.loadElements(pattern.children);
    var childNodes = this.childNodes;
    for (var i = 0; i < childNodes.length; i++) {
      var child = childNodes[i];
      child.renderTo(patternContext);
    }
    ctx.save();
    ctx.fillStyle = ctx.createPattern(patternCanvas, "repeat");
    ctx.fill();
    ctx.restore();
  };
  PathNode3.prototype.setStroke = function setStroke(ctx) {
    var stroke = this.srcElement.options.stroke;
    if (stroke && !isTransparent(stroke.color) && stroke.width > 0) {
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = valueOrDefault(stroke.width, 1);
      ctx.lineJoin = valueOrDefault(stroke.lineJoin, ctx.lineJoin);
      ctx.save();
      this.globalAlpha(ctx, stroke.opacity);
      ctx.stroke();
      ctx.restore();
      return true;
    }
  };
  PathNode3.prototype.dashType = function dashType() {
    var stroke = this.srcElement.options.stroke;
    if (stroke && stroke.dashType) {
      return stroke.dashType.toLowerCase();
    }
  };
  PathNode3.prototype.setLineDash = function setLineDash(ctx) {
    var dashType = this.dashType();
    if (dashType && dashType !== SOLID) {
      var dashArray = DASH_ARRAYS[dashType];
      if (ctx.setLineDash) {
        ctx.setLineDash(dashArray);
      } else {
        ctx.mozDash = dashArray;
        ctx.webkitLineDash = dashArray;
      }
    }
  };
  PathNode3.prototype.setLineCap = function setLineCap(ctx) {
    var dashType = this.dashType();
    var stroke = this.srcElement.options.stroke;
    if (dashType && dashType !== SOLID) {
      ctx.lineCap = BUTT;
    } else if (stroke && stroke.lineCap) {
      ctx.lineCap = stroke.lineCap;
    }
  };
  PathNode3.prototype.setLineJoin = function setLineJoin(ctx) {
    var stroke = this.srcElement.options.stroke;
    if (stroke && stroke.lineJoin) {
      ctx.lineJoin = stroke.lineJoin;
    }
  };
  PathNode3.prototype.renderPoints = function renderPoints(ctx, path) {
    renderPath(ctx, path);
  };
  return PathNode3;
}(node_default);
var path_node_default = PathNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/arc-node.js
var ArcNode = function(PathNode3) {
  function ArcNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) ArcNode3.__proto__ = PathNode3;
  ArcNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  ArcNode3.prototype.constructor = ArcNode3;
  ArcNode3.prototype.renderPoints = function renderPoints(ctx) {
    var path = this.srcElement.toPath();
    renderPath(ctx, path);
  };
  return ArcNode3;
}(path_node_default);
var arc_node_default = ArcNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/circle-node.js
var CircleNode = function(PathNode3) {
  function CircleNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) CircleNode3.__proto__ = PathNode3;
  CircleNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  CircleNode3.prototype.constructor = CircleNode3;
  CircleNode3.prototype.renderPoints = function renderPoints(ctx) {
    var ref = this.srcElement.geometry();
    var center = ref.center;
    var radius = ref.radius;
    ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
  };
  return CircleNode3;
}(path_node_default);
var circle_node_default = CircleNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/image-node.js
var ImageNode = function(PathNode3) {
  function ImageNode3(srcElement, cors) {
    PathNode3.call(this, srcElement);
    this.onLoad = this.onLoad.bind(this);
    this.onError = this.onError.bind(this);
    this.loading = createPromise();
    var img = this.img = new Image();
    var src = srcElement.src();
    if (cors && !/^data:/i.test(src)) {
      img.crossOrigin = cors;
    }
    if (src) {
      img.src = src;
    }
    if (img.complete) {
      this.onLoad();
    } else {
      img.onload = this.onLoad;
      img.onerror = this.onError;
    }
  }
  if (PathNode3) ImageNode3.__proto__ = PathNode3;
  ImageNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  ImageNode3.prototype.constructor = ImageNode3;
  ImageNode3.prototype.renderTo = function renderTo(ctx) {
    if (this.loading.state() === "resolved") {
      ctx.save();
      this.setTransform(ctx);
      this.setClip(ctx);
      this.drawImage(ctx);
      ctx.restore();
    }
  };
  ImageNode3.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "src") {
      this.loading = createPromise();
      this.img.src = this.srcElement.src();
    } else {
      PathNode3.prototype.optionsChange.call(this, e);
    }
  };
  ImageNode3.prototype.onLoad = function onLoad() {
    this.loading.resolve();
    this.invalidate();
  };
  ImageNode3.prototype.onError = function onError() {
    this.loading.reject(new Error(
      "Unable to load image '" + this.img.src + "'. Check for connectivity and verify CORS headers."
    ));
  };
  ImageNode3.prototype.drawImage = function drawImage2(ctx) {
    var rect = this.srcElement.rect();
    var topLeft = rect.topLeft();
    ctx.drawImage(
      this.img,
      topLeft.x,
      topLeft.y,
      rect.width(),
      rect.height()
    );
  };
  return ImageNode3;
}(path_node_default);
var image_node_default = ImageNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/multi-path-node.js
var MultiPathNode = function(PathNode3) {
  function MultiPathNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) MultiPathNode3.__proto__ = PathNode3;
  MultiPathNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  MultiPathNode3.prototype.constructor = MultiPathNode3;
  MultiPathNode3.prototype.renderPoints = function renderPoints(ctx) {
    var paths = this.srcElement.paths;
    for (var i = 0; i < paths.length; i++) {
      renderPath(ctx, paths[i]);
    }
  };
  return MultiPathNode3;
}(path_node_default);
var multi_path_node_default = MultiPathNode;

// node_modules/@progress/kendo-drawing/dist/es/shapes/geometry-elements-array.js
var GeometryElementsArray = function(ElementsArray2) {
  function GeometryElementsArray2() {
    ElementsArray2.apply(this, arguments);
  }
  if (ElementsArray2) GeometryElementsArray2.__proto__ = ElementsArray2;
  GeometryElementsArray2.prototype = Object.create(ElementsArray2 && ElementsArray2.prototype);
  GeometryElementsArray2.prototype.constructor = GeometryElementsArray2;
  GeometryElementsArray2.prototype._change = function _change() {
    this.geometryChange();
  };
  return GeometryElementsArray2;
}(elements_array_default);
var geometry_elements_array_default = GeometryElementsArray;

// node_modules/@progress/kendo-drawing/dist/es/shapes/utils/points-to-curve.js
var WEIGHT = 0.333;
var EXTREMUM_ALLOWED_DEVIATION = 0.01;
var X = "x";
var Y = "y";
function pointsToCurve(pointsIn, closed) {
  var points3 = pointsIn.slice(0);
  var segments = [];
  var length = points3.length;
  if (length > 2) {
    removeDuplicates(0, points3);
    length = points3.length;
  }
  if (length < 2 || length === 2 && points3[0].equals(points3[1])) {
    return segments;
  }
  var p0 = points3[0];
  var p1 = points3[1];
  var p2 = points3[2];
  segments.push(new segment_default(p0));
  while (p0.equals(points3[length - 1])) {
    closed = true;
    points3.pop();
    length--;
  }
  if (length === 2) {
    var tangent = getTangent(p0, p1, X, Y);
    last(segments).controlOut(
      firstControlPoint(tangent, p0, p1, X, Y)
    );
    segments.push(new segment_default(
      p1,
      secondControlPoint(tangent, p0, p1, X, Y)
    ));
    return segments;
  }
  var initialControlPoint, lastControlPoint;
  if (closed) {
    p0 = points3[length - 1];
    p1 = points3[0];
    p2 = points3[1];
    var controlPoints = getControlPoints(p0, p1, p2);
    initialControlPoint = controlPoints[1];
    lastControlPoint = controlPoints[0];
  } else {
    var tangent$1 = getTangent(p0, p1, X, Y);
    initialControlPoint = firstControlPoint(tangent$1, p0, p1, X, Y);
  }
  var cp0 = initialControlPoint;
  for (var idx = 0; idx <= length - 3; idx++) {
    removeDuplicates(idx, points3);
    length = points3.length;
    if (idx + 3 <= length) {
      p0 = points3[idx];
      p1 = points3[idx + 1];
      p2 = points3[idx + 2];
      var controlPoints$1 = getControlPoints(p0, p1, p2);
      last(segments).controlOut(cp0);
      cp0 = controlPoints$1[1];
      var cp1 = controlPoints$1[0];
      segments.push(new segment_default(p1, cp1));
    }
  }
  if (closed) {
    p0 = points3[length - 2];
    p1 = points3[length - 1];
    p2 = points3[0];
    var controlPoints$2 = getControlPoints(p0, p1, p2);
    last(segments).controlOut(cp0);
    segments.push(new segment_default(
      p1,
      controlPoints$2[0]
    ));
    last(segments).controlOut(controlPoints$2[1]);
    segments.push(new segment_default(
      p2,
      lastControlPoint
    ));
  } else {
    var tangent$2 = getTangent(p1, p2, X, Y);
    last(segments).controlOut(cp0);
    segments.push(new segment_default(
      p2,
      secondControlPoint(tangent$2, p1, p2, X, Y)
    ));
  }
  return segments;
}
function removeDuplicates(idx, points3) {
  while (points3[idx + 1] && (points3[idx].equals(points3[idx + 1]) || points3[idx + 1].equals(points3[idx + 2]))) {
    points3.splice(idx + 1, 1);
  }
}
function invertAxis(p0, p1, p2) {
  var invertAxis2 = false;
  if (p0.x === p1.x) {
    invertAxis2 = true;
  } else if (p1.x === p2.x) {
    if (p1.y < p2.y && p0.y <= p1.y || p2.y < p1.y && p1.y <= p0.y) {
      invertAxis2 = true;
    }
  } else {
    var fn = lineFunction(p0, p1);
    var y2 = calculateFunction(fn, p2.x);
    if (!(p0.y <= p1.y && p2.y <= y2) && !(p1.y <= p0.y && p2.y >= y2)) {
      invertAxis2 = true;
    }
  }
  return invertAxis2;
}
function isLine(p0, p1, p2) {
  var fn = lineFunction(p0, p1);
  var y2 = calculateFunction(fn, p2.x);
  return p0.x === p1.x && p1.x === p2.x || round(y2, 1) === round(p2.y, 1);
}
function lineFunction(p1, p2) {
  var a = (p2.y - p1.y) / (p2.x - p1.x);
  var b = p1.y - a * p1.x;
  return [b, a];
}
function getControlPoints(p0, p1, p2) {
  var xField = X;
  var yField = Y;
  var restrict = false;
  var switchOrientation = false;
  var tangent;
  if (isLine(p0, p1, p2)) {
    tangent = getTangent(p0, p1, X, Y);
  } else {
    var monotonic = {
      x: isMonotonicByField(p0, p1, p2, X),
      y: isMonotonicByField(p0, p1, p2, Y)
    };
    if (monotonic.x && monotonic.y) {
      tangent = getTangent(p0, p2, X, Y);
      restrict = true;
    } else {
      if (invertAxis(p0, p1, p2)) {
        xField = Y;
        yField = X;
      }
      if (monotonic[xField]) {
        tangent = 0;
      } else {
        var sign;
        if (p2[yField] < p0[yField] && p0[yField] <= p1[yField] || p0[yField] < p2[yField] && p1[yField] <= p0[yField]) {
          sign = numberSign2((p2[yField] - p0[yField]) * (p1[xField] - p0[xField]));
        } else {
          sign = -numberSign2((p2[xField] - p0[xField]) * (p1[yField] - p0[yField]));
        }
        tangent = EXTREMUM_ALLOWED_DEVIATION * sign;
        switchOrientation = true;
      }
    }
  }
  var secondCP = secondControlPoint(tangent, p0, p1, xField, yField);
  if (switchOrientation) {
    var oldXField = xField;
    xField = yField;
    yField = oldXField;
  }
  var firstCP = firstControlPoint(tangent, p1, p2, xField, yField);
  if (restrict) {
    restrictControlPoint(p0, p1, secondCP, tangent);
    restrictControlPoint(p1, p2, firstCP, tangent);
  }
  return [secondCP, firstCP];
}
function restrictControlPoint(p1, p2, cp, tangent) {
  if (p1.y < p2.y) {
    if (p2.y < cp.y) {
      cp.x = p1.x + (p2.y - p1.y) / tangent;
      cp.y = p2.y;
    } else if (cp.y < p1.y) {
      cp.x = p2.x - (p2.y - p1.y) / tangent;
      cp.y = p1.y;
    }
  } else {
    if (cp.y < p2.y) {
      cp.x = p1.x - (p1.y - p2.y) / tangent;
      cp.y = p2.y;
    } else if (p1.y < cp.y) {
      cp.x = p2.x + (p1.y - p2.y) / tangent;
      cp.y = p1.y;
    }
  }
}
function getTangent(p0, p1, xField, yField) {
  var x = p1[xField] - p0[xField];
  var y = p1[yField] - p0[yField];
  var tangent;
  if (x === 0) {
    tangent = 0;
  } else {
    tangent = y / x;
  }
  return tangent;
}
function isMonotonicByField(p0, p1, p2, field) {
  return p2[field] > p1[field] && p1[field] > p0[field] || p2[field] < p1[field] && p1[field] < p0[field];
}
function firstControlPoint(tangent, p0, p3, xField, yField) {
  var t1 = p0[xField];
  var t2 = p3[xField];
  var distance = (t2 - t1) * WEIGHT;
  return point(t1 + distance, p0[yField] + distance * tangent, xField, yField);
}
function secondControlPoint(tangent, p0, p3, xField, yField) {
  var t1 = p0[xField];
  var t2 = p3[xField];
  var distance = (t2 - t1) * WEIGHT;
  return point(t2 - distance, p3[yField] - distance * tangent, xField, yField);
}
function point(xValue, yValue, xField, yField) {
  var controlPoint = new point_default();
  controlPoint[xField] = xValue;
  controlPoint[yField] = yValue;
  return controlPoint;
}
function calculateFunction(fn, x) {
  var length = fn.length;
  var result = 0;
  for (var i = 0; i < length; i++) {
    result += Math.pow(x, i) * fn[i];
  }
  return result;
}
function numberSign2(value) {
  return value <= 0 ? -1 : 1;
}

// node_modules/@progress/kendo-drawing/dist/es/mixins/paintable.js
var GRADIENT = "Gradient";
var paintable = function(TBase) {
  return function(TBase2) {
    function anonymous() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) anonymous.__proto__ = TBase2;
    anonymous.prototype = Object.create(TBase2 && TBase2.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.fill = function fill(color, opacity) {
      var options2 = this.options;
      if (defined(color)) {
        if (color && color.nodeType !== GRADIENT) {
          var newFill = {
            color
          };
          if (defined(opacity)) {
            newFill.opacity = opacity;
          }
          options2.set("fill", newFill);
        } else {
          options2.set("fill", color);
        }
        return this;
      }
      return options2.get("fill");
    };
    anonymous.prototype.stroke = function stroke(color, width, opacity) {
      if (defined(color)) {
        this.options.set("stroke.color", color);
        if (defined(width)) {
          this.options.set("stroke.width", width);
        }
        if (defined(opacity)) {
          this.options.set("stroke.opacity", opacity);
        }
        return this;
      }
      return this.options.get("stroke");
    };
    return anonymous;
  }(TBase);
};
var paintable_default = paintable;

// node_modules/@progress/kendo-drawing/dist/es/mixins/measurable.js
var IDENTITY_MATRIX_HASH = matrix_default.IDENTITY.toString();
var measurable = function(TBase) {
  return function(TBase2) {
    function anonymous() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) anonymous.__proto__ = TBase2;
    anonymous.prototype = Object.create(TBase2 && TBase2.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.bbox = function bbox(transformation) {
      var combinedMatrix = toMatrix(this.currentTransform(transformation));
      var matrixHash = combinedMatrix ? combinedMatrix.toString() : IDENTITY_MATRIX_HASH;
      var bbox2;
      if (this._bboxCache && this._matrixHash === matrixHash) {
        bbox2 = this._bboxCache.clone();
      } else {
        bbox2 = this._bbox(combinedMatrix);
        this._bboxCache = bbox2 ? bbox2.clone() : null;
        this._matrixHash = matrixHash;
      }
      var strokeWidth = this.options.get("stroke.width");
      if (strokeWidth && bbox2) {
        bbox2.expand(strokeWidth / 2);
      }
      return bbox2;
    };
    anonymous.prototype.geometryChange = function geometryChange() {
      delete this._bboxCache;
      this.trigger("geometryChange", {
        element: this
      });
    };
    return anonymous;
  }(TBase);
};
var measurable_default = measurable;

// node_modules/@progress/kendo-drawing/dist/es/parsing/shape-map.js
var ShapeMap = {
  l: function(path, options2) {
    var parameters = options2.parameters;
    var position = options2.position;
    for (var i = 0; i < parameters.length; i += 2) {
      var point2 = new point_default(parameters[i], parameters[i + 1]);
      if (options2.isRelative) {
        point2.translateWith(position);
      }
      path.lineTo(point2.x, point2.y);
      position.x = point2.x;
      position.y = point2.y;
    }
  },
  c: function(path, options2) {
    var parameters = options2.parameters;
    var position = options2.position;
    for (var i = 0; i < parameters.length; i += 6) {
      var controlOut = new point_default(parameters[i], parameters[i + 1]);
      var controlIn = new point_default(parameters[i + 2], parameters[i + 3]);
      var point2 = new point_default(parameters[i + 4], parameters[i + 5]);
      if (options2.isRelative) {
        controlIn.translateWith(position);
        controlOut.translateWith(position);
        point2.translateWith(position);
      }
      path.curveTo(controlOut, controlIn, point2);
      position.x = point2.x;
      position.y = point2.y;
    }
  },
  v: function(path, options2) {
    var value = options2.isRelative ? 0 : options2.position.x;
    toLineParamaters(options2.parameters, true, value);
    this.l(path, options2);
  },
  h: function(path, options2) {
    var value = options2.isRelative ? 0 : options2.position.y;
    toLineParamaters(options2.parameters, false, value);
    this.l(path, options2);
  },
  a: function(path, options2) {
    var parameters = options2.parameters;
    var position = options2.position;
    for (var i = 0; i < parameters.length; i += 7) {
      var radiusX = parameters[i];
      var radiusY = parameters[i + 1];
      var rotation = parameters[i + 2];
      var largeArc = parameters[i + 3];
      var swipe = parameters[i + 4];
      var endPoint = new point_default(parameters[i + 5], parameters[i + 6]);
      if (options2.isRelative) {
        endPoint.translateWith(position);
      }
      if (position.x !== endPoint.x || position.y !== endPoint.y) {
        path.arcTo(endPoint, radiusX, radiusY, largeArc, swipe, rotation);
        position.x = endPoint.x;
        position.y = endPoint.y;
      }
    }
  },
  s: function(path, options2) {
    var parameters = options2.parameters;
    var position = options2.position;
    var previousCommand = options2.previousCommand;
    var lastControlIn;
    if (previousCommand === "s" || previousCommand === "c") {
      lastControlIn = last(last(path.paths).segments).controlIn();
    }
    for (var i = 0; i < parameters.length; i += 4) {
      var controlIn = new point_default(parameters[i], parameters[i + 1]);
      var endPoint = new point_default(parameters[i + 2], parameters[i + 3]);
      var controlOut = void 0;
      if (options2.isRelative) {
        controlIn.translateWith(position);
        endPoint.translateWith(position);
      }
      if (lastControlIn) {
        controlOut = reflectionPoint(lastControlIn, position);
      } else {
        controlOut = position.clone();
      }
      lastControlIn = controlIn;
      path.curveTo(controlOut, controlIn, endPoint);
      position.x = endPoint.x;
      position.y = endPoint.y;
    }
  },
  q: function(path, options2) {
    var parameters = options2.parameters;
    var position = options2.position;
    for (var i = 0; i < parameters.length; i += 4) {
      var controlPoint = new point_default(parameters[i], parameters[i + 1]);
      var endPoint = new point_default(parameters[i + 2], parameters[i + 3]);
      if (options2.isRelative) {
        controlPoint.translateWith(position);
        endPoint.translateWith(position);
      }
      var cubicControlPoints = quadraticToCubicControlPoints(position, controlPoint, endPoint);
      path.curveTo(cubicControlPoints.controlOut, cubicControlPoints.controlIn, endPoint);
      position.x = endPoint.x;
      position.y = endPoint.y;
    }
  },
  t: function(path, options2) {
    var parameters = options2.parameters;
    var position = options2.position;
    var previousCommand = options2.previousCommand;
    var controlPoint;
    if (previousCommand === "q" || previousCommand === "t") {
      var lastSegment = last(last(path.paths).segments);
      controlPoint = lastSegment.controlIn().clone().translateWith(position.scaleCopy(-1 / 3)).scale(3 / 2);
    }
    for (var i = 0; i < parameters.length; i += 2) {
      var endPoint = new point_default(parameters[i], parameters[i + 1]);
      if (options2.isRelative) {
        endPoint.translateWith(position);
      }
      if (controlPoint) {
        controlPoint = reflectionPoint(controlPoint, position);
      } else {
        controlPoint = position.clone();
      }
      var cubicControlPoints = quadraticToCubicControlPoints(position, controlPoint, endPoint);
      path.curveTo(cubicControlPoints.controlOut, cubicControlPoints.controlIn, endPoint);
      position.x = endPoint.x;
      position.y = endPoint.y;
    }
  }
};
function toLineParamaters(parameters, isVertical, value) {
  var insertPosition = isVertical ? 0 : 1;
  for (var i = 0; i < parameters.length; i += 2) {
    parameters.splice(i + insertPosition, 0, value);
  }
}
function reflectionPoint(point2, center) {
  if (point2 && center) {
    return center.scaleCopy(2).translate(-point2.x, -point2.y);
  }
}
var third = 1 / 3;
function quadraticToCubicControlPoints(position, controlPoint, endPoint) {
  var scaledPoint = controlPoint.clone().scale(2 / 3);
  return {
    controlOut: scaledPoint.clone().translateWith(position.scaleCopy(third)),
    controlIn: scaledPoint.translateWith(endPoint.scaleCopy(third))
  };
}
var shape_map_default = ShapeMap;

// node_modules/@progress/kendo-drawing/dist/es/parsing/parse-path.js
var SEGMENT_REGEX = /([a-df-z]{1})([^a-df-z]*)(z)?/gi;
var SPLIT_REGEX = /[,\s]?([+\-]?(?:\d*\.\d+|\d+)(?:[eE][+\-]?\d+)?)/g;
var MOVE = "m";
var CLOSE = "z";
function parseParameters(str) {
  var parameters = [];
  str.replace(SPLIT_REGEX, function(match, number) {
    parameters.push(parseFloat(number));
  });
  return parameters;
}
function parsePath(pathInstance, str) {
  var position = new point_default();
  var previousCommand;
  str.replace(SEGMENT_REGEX, function(match, element, params, closePath) {
    var command = element.toLowerCase();
    var isRelative = command === element;
    var parameters = parseParameters(params.trim());
    if (command === MOVE) {
      if (isRelative) {
        position.x += parameters[0];
        position.y += parameters[1];
      } else {
        position.x = parameters[0];
        position.y = parameters[1];
      }
      pathInstance.moveTo(position.x, position.y);
      if (parameters.length > 2) {
        command = "l";
        parameters.splice(0, 2);
      }
    }
    if (shape_map_default[command]) {
      shape_map_default[command](
        pathInstance,
        {
          parameters,
          position,
          isRelative,
          previousCommand
        }
      );
      if (closePath && closePath.toLowerCase() === CLOSE) {
        pathInstance.close();
      }
    } else if (command !== MOVE) {
      throw new Error("Error while parsing SVG path. Unsupported command: " + command);
    }
    previousCommand = command;
  });
  return pathInstance;
}
var parse_path_default = parsePath;

// node_modules/@progress/kendo-drawing/dist/es/shapes/path.js
var SPACE2 = " ";
var printPoints = function(precision) {
  return function() {
    var points3 = [], len = arguments.length;
    while (len--) points3[len] = arguments[len];
    return points3.map(function(p) {
      return p.toString(precision);
    }).join(SPACE2);
    ;
  };
};
var segmentType = function(segmentStart, segmentEnd) {
  return segmentStart.controlOut() && segmentEnd.controlIn() ? "C" : "L";
};
var Path = function(superclass) {
  function Path2(options2) {
    superclass.call(this, options2);
    this.segments = new geometry_elements_array_default();
    this.segments.addObserver(this);
    if (!defined(this.options.stroke)) {
      this.stroke("#000");
      if (!defined(this.options.stroke.lineJoin)) {
        this.options.set("stroke.lineJoin", "miter");
      }
    }
  }
  if (superclass) Path2.__proto__ = superclass;
  Path2.prototype = Object.create(superclass && superclass.prototype);
  Path2.prototype.constructor = Path2;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Path";
  };
  Path2.prototype.moveTo = function moveTo(x, y) {
    this.suspend();
    this.segments.elements([]);
    this.resume();
    this.lineTo(x, y);
    return this;
  };
  Path2.prototype.lineTo = function lineTo(x, y) {
    var point2 = defined(y) ? new point_default(x, y) : x;
    var segment = new segment_default(point2);
    this.segments.push(segment);
    return this;
  };
  Path2.prototype.curveTo = function curveTo(controlOut, controlIn, point2) {
    if (this.segments.length > 0) {
      var lastSegment = last(this.segments);
      var segment = new segment_default(point2, controlIn);
      this.suspend();
      lastSegment.controlOut(controlOut);
      this.resume();
      this.segments.push(segment);
    }
    return this;
  };
  Path2.prototype.arc = function arc(startAngle, endAngle, radiusX, radiusY, anticlockwise) {
    if (this.segments.length > 0) {
      var lastSegment = last(this.segments);
      var anchor = lastSegment.anchor();
      var start = rad(startAngle);
      var center = new point_default(
        anchor.x - radiusX * Math.cos(start),
        anchor.y - radiusY * Math.sin(start)
      );
      var arc2 = new arc_default(center, {
        startAngle,
        endAngle,
        radiusX,
        radiusY,
        anticlockwise
      });
      this._addArcSegments(arc2);
    }
    return this;
  };
  Path2.prototype.arcTo = function arcTo(end, rx, ry, largeArc, swipe, rotation) {
    if (this.segments.length > 0) {
      var lastSegment = last(this.segments);
      var anchor = lastSegment.anchor();
      var arc = arc_default.fromPoints(anchor, point_default.create(end), rx, ry, largeArc, swipe, rotation);
      this._addArcSegments(arc);
    }
    return this;
  };
  Path2.prototype._addArcSegments = function _addArcSegments(arc) {
    var this$1 = this;
    this.suspend();
    var curvePoints = arc.curvePoints();
    for (var i = 1; i < curvePoints.length; i += 3) {
      this$1.curveTo(curvePoints[i], curvePoints[i + 1], curvePoints[i + 2]);
    }
    this.resume();
    this.geometryChange();
  };
  Path2.prototype.close = function close2() {
    this.options.closed = true;
    this.geometryChange();
    return this;
  };
  Path2.prototype.rawBBox = function rawBBox() {
    return this._bbox();
  };
  Path2.prototype.toString = function toString3(digits) {
    var output = "";
    var segments = this.segments;
    var length = segments.length;
    if (length > 0) {
      var parts = [];
      var print = printPoints(digits);
      var currentType;
      for (var i = 1; i < length; i++) {
        var type = segmentType(segments[i - 1], segments[i]);
        if (type !== currentType) {
          currentType = type;
          parts.push(type);
        }
        if (type === "L") {
          parts.push(print(segments[i].anchor()));
        } else {
          parts.push(print(
            segments[i - 1].controlOut(),
            segments[i].controlIn(),
            segments[i].anchor()
          ));
        }
      }
      output = "M" + print(segments[0].anchor()) + SPACE2 + parts.join(SPACE2);
      if (this.options.closed) {
        output += "Z";
      }
    }
    return output;
  };
  Path2.prototype._containsPoint = function _containsPoint(point2) {
    var segments = this.segments;
    var length = segments.length;
    var intersectionsCount = 0;
    var previous, current;
    for (var idx = 1; idx < length; idx++) {
      previous = segments[idx - 1];
      current = segments[idx];
      intersectionsCount += previous._intersectionsTo(current, point2);
    }
    if (this.options.closed || !segments[0].anchor().equals(segments[length - 1].anchor())) {
      intersectionsCount += lineIntersectionsCount(segments[0].anchor(), segments[length - 1].anchor(), point2);
    }
    return intersectionsCount % 2 !== 0;
  };
  Path2.prototype._isOnPath = function _isOnPath(point2, width) {
    var segments = this.segments;
    var length = segments.length;
    var pathWidth = width || this.options.stroke.width;
    if (length > 1) {
      if (segments[0]._isOnPathTo(segments[1], point2, pathWidth, "start")) {
        return true;
      }
      for (var idx = 2; idx <= length - 2; idx++) {
        if (segments[idx - 1]._isOnPathTo(segments[idx], point2, pathWidth)) {
          return true;
        }
      }
      if (segments[length - 2]._isOnPathTo(segments[length - 1], point2, pathWidth, "end")) {
        return true;
      }
    }
    return false;
  };
  Path2.prototype._bbox = function _bbox(matrix) {
    var segments = this.segments;
    var length = segments.length;
    var boundingBox;
    if (length === 1) {
      var anchor = segments[0].anchor().transformCopy(matrix);
      boundingBox = new rect_default(anchor, size_default.ZERO);
    } else if (length > 0) {
      for (var i = 1; i < length; i++) {
        var segmentBox = segments[i - 1].bboxTo(segments[i], matrix);
        if (boundingBox) {
          boundingBox = rect_default.union(boundingBox, segmentBox);
        } else {
          boundingBox = segmentBox;
        }
      }
    }
    return boundingBox;
  };
  Path2.parse = function parse3(str, options2) {
    return MultiPath.parse(str, options2);
  };
  Path2.fromRect = function fromRect(rect, options2) {
    var path = new Path2(options2);
    var ref = rect.cornerRadius;
    var rx = ref[0];
    var ry = ref[1];
    if (rx === 0 && ry === 0) {
      path.moveTo(rect.topLeft()).lineTo(rect.topRight()).lineTo(rect.bottomRight()).lineTo(rect.bottomLeft()).close();
    } else {
      var origin = rect.origin;
      var x = origin.x;
      var y = origin.y;
      var width = rect.width();
      var height = rect.height();
      rx = limitValue(rx, 0, width / 2);
      ry = limitValue(ry, 0, height / 2);
      path.moveTo(x + rx, y).lineTo(x + width - rx, y).arcTo([x + width, y + ry], rx, ry, false).lineTo(x + width, y + height - ry).arcTo([x + width - rx, y + height], rx, ry, false).lineTo(x + rx, y + height).arcTo([x, y + height - ry], rx, ry, false).lineTo(x, y + ry).arcTo([x + rx, y], rx, ry, false);
    }
    return path;
  };
  Path2.fromPoints = function fromPoints(points3, options2) {
    if (points3) {
      var path = new Path2(options2);
      for (var i = 0; i < points3.length; i++) {
        var point2 = point_default.create(points3[i]);
        if (point2) {
          if (i === 0) {
            path.moveTo(point2);
          } else {
            path.lineTo(point2);
          }
        }
      }
      return path;
    }
  };
  Path2.curveFromPoints = function curveFromPoints(points3, options2) {
    if (points3) {
      var segments = pointsToCurve(points3);
      var path = new Path2(options2);
      path.segments.push.apply(path.segments, segments);
      return path;
    }
  };
  Path2.fromArc = function fromArc(arc, options2) {
    var path = new Path2(options2);
    var startAngle = arc.startAngle;
    var start = arc.pointAt(startAngle);
    path.moveTo(start.x, start.y);
    path.arc(startAngle, arc.endAngle, arc.radiusX, arc.radiusY, arc.anticlockwise);
    return path;
  };
  Object.defineProperties(Path2.prototype, prototypeAccessors);
  return Path2;
}(paintable_default(measurable_default(element_default)));
var MultiPath = function(superclass) {
  function MultiPath2(options2) {
    superclass.call(this, options2);
    this.paths = new geometry_elements_array_default();
    this.paths.addObserver(this);
    if (!defined(this.options.stroke)) {
      this.stroke("#000");
    }
  }
  if (superclass) MultiPath2.__proto__ = superclass;
  MultiPath2.prototype = Object.create(superclass && superclass.prototype);
  MultiPath2.prototype.constructor = MultiPath2;
  var prototypeAccessors$1 = { nodeType: { configurable: true } };
  MultiPath2.parse = function parse3(str, options2) {
    var instance4 = new MultiPath2(options2);
    return parse_path_default(instance4, str);
  };
  MultiPath2.prototype.toString = function toString3(digits) {
    var paths = this.paths;
    var output = "";
    if (paths.length > 0) {
      var result = [];
      for (var i = 0; i < paths.length; i++) {
        result.push(paths[i].toString(digits));
      }
      output = result.join(SPACE2);
    }
    return output;
  };
  prototypeAccessors$1.nodeType.get = function() {
    return "MultiPath";
  };
  MultiPath2.prototype.moveTo = function moveTo(x, y) {
    var path = new Path();
    path.moveTo(x, y);
    this.paths.push(path);
    return this;
  };
  MultiPath2.prototype.lineTo = function lineTo(x, y) {
    if (this.paths.length > 0) {
      last(this.paths).lineTo(x, y);
    }
    return this;
  };
  MultiPath2.prototype.curveTo = function curveTo(controlOut, controlIn, point2) {
    if (this.paths.length > 0) {
      last(this.paths).curveTo(controlOut, controlIn, point2);
    }
    return this;
  };
  MultiPath2.prototype.arc = function arc(startAngle, endAngle, radiusX, radiusY, anticlockwise) {
    if (this.paths.length > 0) {
      last(this.paths).arc(startAngle, endAngle, radiusX, radiusY, anticlockwise);
    }
    return this;
  };
  MultiPath2.prototype.arcTo = function arcTo(end, rx, ry, largeArc, swipe, rotation) {
    if (this.paths.length > 0) {
      last(this.paths).arcTo(end, rx, ry, largeArc, swipe, rotation);
    }
    return this;
  };
  MultiPath2.prototype.close = function close2() {
    if (this.paths.length > 0) {
      last(this.paths).close();
    }
    return this;
  };
  MultiPath2.prototype._bbox = function _bbox(matrix) {
    return elementsBoundingBox(this.paths, true, matrix);
  };
  MultiPath2.prototype.rawBBox = function rawBBox() {
    return elementsBoundingBox(this.paths, false);
  };
  MultiPath2.prototype._containsPoint = function _containsPoint(point2) {
    var paths = this.paths;
    for (var idx = 0; idx < paths.length; idx++) {
      if (paths[idx]._containsPoint(point2)) {
        return true;
      }
    }
    return false;
  };
  MultiPath2.prototype._isOnPath = function _isOnPath(point2) {
    var paths = this.paths;
    var width = this.options.stroke.width;
    for (var idx = 0; idx < paths.length; idx++) {
      if (paths[idx]._isOnPath(point2, width)) {
        return true;
      }
    }
    return false;
  };
  MultiPath2.prototype._clippedBBox = function _clippedBBox(transformation) {
    return elementsClippedBoundingBox(this.paths, this.currentTransform(transformation));
  };
  Object.defineProperties(MultiPath2.prototype, prototypeAccessors$1);
  return MultiPath2;
}(paintable_default(measurable_default(element_default)));

// node_modules/@progress/kendo-drawing/dist/es/canvas/rect-node.js
var RectNode = function(PathNode3) {
  function RectNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) RectNode3.__proto__ = PathNode3;
  RectNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  RectNode3.prototype.constructor = RectNode3;
  RectNode3.prototype.renderPoints = function renderPoints(ctx) {
    var geometry = this.srcElement.geometry();
    var ref = geometry.cornerRadius;
    var rx = ref[0];
    var ry = ref[1];
    if (rx === 0 && ry === 0) {
      var origin = geometry.origin;
      var size = geometry.size;
      ctx.rect(origin.x, origin.y, size.width, size.height);
    } else {
      PathNode3.prototype.renderPoints.call(this, ctx, Path.fromRect(geometry));
    }
  };
  return RectNode3;
}(path_node_default);
var rect_node_default = RectNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/text-node.js
var TextNode = function(PathNode3) {
  function TextNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) TextNode3.__proto__ = PathNode3;
  TextNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  TextNode3.prototype.constructor = TextNode3;
  TextNode3.prototype.renderTo = function renderTo(ctx) {
    var text = this.srcElement;
    var pos = text.position();
    var size = text.measure();
    ctx.save();
    this.setTransform(ctx);
    this.setClip(ctx);
    this.setOpacity(ctx);
    ctx.beginPath();
    ctx.font = text.options.font;
    ctx.textAlign = "left";
    if (text.options.paintOrder === "stroke") {
      this.stroke(ctx, text, pos, size);
      this.fill(ctx, text, pos, size);
    } else {
      this.fill(ctx, text, pos, size);
      this.stroke(ctx, text, pos, size);
    }
    ctx.restore();
  };
  TextNode3.prototype.stroke = function stroke(ctx, text, pos, size) {
    if (this.setStroke(ctx)) {
      this.setLineDash(ctx);
      ctx.strokeText(text.content(), pos.x, pos.y + size.baseline);
    }
  };
  TextNode3.prototype.fill = function fill(ctx, text, pos, size) {
    if (this.setFill(ctx)) {
      ctx.fillText(text.content(), pos.x, pos.y + size.baseline);
    }
  };
  return TextNode3;
}(path_node_default);
var text_node_default = TextNode;

// node_modules/@progress/kendo-drawing/dist/es/canvas/surface.js
node_map_default.Arc = arc_node_default;
node_map_default.Circle = circle_node_default;
node_map_default.Group = group_node_default;
node_map_default.Image = image_node_default;
node_map_default.MultiPath = multi_path_node_default;
node_map_default.Path = path_node_default;
node_map_default.Rect = rect_node_default;
node_map_default.Text = text_node_default;
var Surface2 = function(BaseSurface) {
  function Surface5(element, options2) {
    BaseSurface.call(this, element, options2);
    this.element.innerHTML = this._template(this);
    var canvas = this.element.firstElementChild;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    var size = elementSize(element);
    canvas.width = size.width;
    canvas.height = size.height;
    this._rootElement = canvas;
    this._root = new root_node_default(canvas, size);
    this._mouseTrackHandler = this._trackMouse.bind(this);
    bindEvents(this.element, {
      click: this._mouseTrackHandler,
      mousemove: this._mouseTrackHandler
    });
  }
  if (BaseSurface) Surface5.__proto__ = BaseSurface;
  Surface5.prototype = Object.create(BaseSurface && BaseSurface.prototype);
  Surface5.prototype.constructor = Surface5;
  var prototypeAccessors = { type: { configurable: true } };
  prototypeAccessors.type.get = function() {
    return "canvas";
  };
  Surface5.prototype.destroy = function destroy2() {
    BaseSurface.prototype.destroy.call(this);
    if (this._root) {
      this._root.destroy();
      this._root = null;
    }
    if (this._searchTree) {
      this._searchTree.clear();
      delete this._searchTree;
    }
    if (this._cursor) {
      this._cursor.destroy();
      delete this._cursor;
    }
    unbindEvents(this.element, {
      click: this._mouseTrackHandler,
      mousemove: this._mouseTrackHandler
    });
  };
  Surface5.prototype.draw = function draw(element) {
    BaseSurface.prototype.draw.call(this, element);
    this._root.load([element], void 0, this.options.cors);
    if (this._searchTree) {
      this._searchTree.add([element]);
    }
  };
  Surface5.prototype.clear = function clear2() {
    BaseSurface.prototype.clear.call(this);
    this._root.clear();
    if (this._searchTree) {
      this._searchTree.clear();
    }
    if (this._cursor) {
      this._cursor.clear();
    }
  };
  Surface5.prototype.eventTarget = function eventTarget(e) {
    if (this._searchTree) {
      var point2 = this._surfacePoint(e);
      var shape = this._searchTree.pointShape(point2);
      return shape;
    }
  };
  Surface5.prototype.image = function image() {
    var ref = this;
    var root = ref._root;
    var rootElement = ref._rootElement;
    var loadingStates = [];
    root.traverse(function(childNode) {
      if (childNode.loading) {
        loadingStates.push(childNode.loading);
      }
    });
    var promise = createPromise();
    var resolveDataURL = function() {
      root._invalidate({ fixedScale: true });
      try {
        var data = rootElement.toDataURL();
        promise.resolve(data);
      } catch (e) {
        promise.reject(e);
      }
    };
    promiseAll(loadingStates).then(resolveDataURL, resolveDataURL);
    return promise;
  };
  Surface5.prototype.suspendTracking = function suspendTracking() {
    BaseSurface.prototype.suspendTracking.call(this);
    if (this._searchTree) {
      this._searchTree.clear();
      delete this._searchTree;
    }
  };
  Surface5.prototype.resumeTracking = function resumeTracking() {
    BaseSurface.prototype.resumeTracking.call(this);
    if (!this._searchTree) {
      this._searchTree = new shapes_quad_tree_default();
      var childNodes = this._root.childNodes;
      var rootElements = [];
      for (var idx = 0; idx < childNodes.length; idx++) {
        rootElements.push(childNodes[idx].srcElement);
      }
      this._searchTree.add(rootElements);
    }
  };
  Surface5.prototype._resize = function _resize() {
    this._rootElement.width = this._size.width;
    this._rootElement.height = this._size.height;
    this._root.size = this._size;
    this._root.invalidate();
  };
  Surface5.prototype._template = function _template() {
    return "<canvas></canvas>";
  };
  Surface5.prototype._enableTracking = function _enableTracking() {
    this._searchTree = new shapes_quad_tree_default();
    this._cursor = new surface_cursor_default(this);
    BaseSurface.prototype._enableTracking.call(this);
  };
  Surface5.prototype._trackMouse = function _trackMouse(e) {
    if (this._suspendedTracking) {
      return;
    }
    var shape = this.eventTarget(e);
    if (e.type !== "click") {
      var currentShape = this._currentShape;
      if (currentShape && currentShape !== shape) {
        this.trigger("mouseleave", {
          element: currentShape,
          originalEvent: e,
          type: "mouseleave"
        });
      }
      if (shape && currentShape !== shape) {
        this.trigger("mouseenter", {
          element: shape,
          originalEvent: e,
          type: "mouseenter"
        });
      }
      this.trigger("mousemove", {
        element: shape,
        originalEvent: e,
        type: "mousemove"
      });
      this._currentShape = shape;
    } else if (shape) {
      this.trigger("click", {
        element: shape,
        originalEvent: e,
        type: "click"
      });
    }
  };
  Object.defineProperties(Surface5.prototype, prototypeAccessors);
  return Surface5;
}(surface_default);
var surface_default2 = Surface2;

// node_modules/@progress/kendo-drawing/dist/es/canvas/export-image.js
function exportImage(group, options2) {
  var defaults = {
    width: "800px",
    height: "600px",
    cors: "Anonymous"
  };
  var exportRoot = group;
  var bbox = group.clippedBBox();
  if (bbox) {
    var origin = bbox.getOrigin();
    exportRoot = new group_default();
    exportRoot.transform(transform().translate(-origin.x, -origin.y));
    exportRoot.children.push(group);
    var size = bbox.getSize();
    defaults.width = size.width + "px";
    defaults.height = size.height + "px";
  }
  var surfaceOptions = Object.assign(defaults, options2);
  var container = document.createElement("div");
  var style = container.style;
  style.display = "none";
  style.width = surfaceOptions.width;
  style.height = surfaceOptions.height;
  document.body.appendChild(container);
  var surface = new surface_default2(container, surfaceOptions);
  surface.suspendTracking();
  surface.draw(exportRoot);
  var promise = surface.image();
  var destroy2 = function() {
    surface.destroy();
    document.body.removeChild(container);
  };
  promise.then(destroy2, destroy2);
  return promise;
}

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-attribute.js
function renderAttr(name2, value) {
  return defined(value) && value !== null ? " " + name2 + '="' + value + '" ' : "";
}

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-all-attributes.js
function renderAllAttr(attrs) {
  var output = "";
  for (var i = 0; i < attrs.length; i++) {
    output += renderAttr(attrs[i][0], attrs[i][1]);
  }
  return output;
}

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-style.js
function renderStyle(attrs) {
  var output = "";
  for (var i = 0; i < attrs.length; i++) {
    var value = attrs[i][1];
    if (defined(value)) {
      output += attrs[i][0] + ":" + value + ";";
    }
  }
  if (output !== "") {
    return output;
  }
}

// node_modules/@progress/kendo-drawing/dist/es/svg/node-map.js
var NODE_MAP2 = {};
var node_map_default2 = NODE_MAP2;

// node_modules/@progress/kendo-drawing/dist/es/util/element-set-styles-safe.js
var setStyle = function(element, styleString) {
  var styles = parseInlineStyles(styleString);
  Object.keys(styles).forEach(function(key) {
    element.style[key] = styles[key];
  });
};
var styleAttr = "data-style";
var replaceStyleAttr = function(html) {
  return (html || "").replace(/\sstyle=/g, " " + styleAttr + "=");
};
var restoreStyleAttr = function(container) {
  Array.from(container.querySelectorAll("[" + styleAttr + "]")).forEach(function(element) {
    var styleString = element.getAttribute(styleAttr);
    element.removeAttribute(styleAttr);
    setStyle(element, styleString);
  });
};
var setInnerHTML = function(container, html) {
  container.innerHTML = replaceStyleAttr(html);
  restoreStyleAttr(container);
};

// node_modules/@progress/kendo-drawing/dist/es/svg/constants.js
var SVG_NS = "http://www.w3.org/2000/svg";
var NONE = "none";
var POINT_DIGITS = 3;

// node_modules/@progress/kendo-drawing/dist/es/svg/utils/render-svg.js
var renderSVG = function(container, svg) {
  setInnerHTML(container, svg);
};
if (typeof document !== "undefined") {
  testFragment = "<svg xmlns='" + SVG_NS + "'></svg>";
  testContainer = document.createElement("div");
  hasParser = typeof DOMParser !== "undefined";
  testContainer.innerHTML = testFragment;
  if (hasParser && testContainer.firstChild.namespaceURI !== SVG_NS) {
    renderSVG = function(container, svg) {
      var parser = new DOMParser();
      var chartDoc = parser.parseFromString(replaceStyleAttr(svg), "text/xml");
      restoreStyleAttr(chartDoc);
      var importedDoc = document.adoptNode(chartDoc.documentElement);
      container.innerHTML = "";
      container.appendChild(importedDoc);
    };
  }
}
var testFragment;
var testContainer;
var hasParser;
var render_svg_default = renderSVG;

// node_modules/@progress/kendo-drawing/dist/es/svg/node.js
var TRANSFORM = "transform";
var DefinitionMap = {
  clip: "clip-path",
  fill: "fill"
};
function isDefinition(type, value) {
  return type === "clip" || type === "fill" && (!value || value.nodeType === "Gradient" || value.nodeType === PATTERN);
}
function baseUrl() {
  var base = document.getElementsByTagName("base")[0];
  var href = document.location.href;
  var url = "";
  if (base && !(support_default.browser || {}).msie) {
    var hashIndex = href.indexOf("#");
    if (hashIndex !== -1) {
      href = href.substring(0, hashIndex);
    }
    url = href;
  }
  return url;
}
var Node2 = function(BaseNode2) {
  function Node3(srcElement, options2) {
    BaseNode2.call(this, srcElement);
    this.definitions = {};
    this.options = options2;
  }
  if (BaseNode2) Node3.__proto__ = BaseNode2;
  Node3.prototype = Object.create(BaseNode2 && BaseNode2.prototype);
  Node3.prototype.constructor = Node3;
  Node3.prototype.destroy = function destroy2() {
    if (this.element) {
      this.element._kendoNode = null;
      this.element = null;
    }
    this.clearDefinitions();
    BaseNode2.prototype.destroy.call(this);
  };
  Node3.prototype.load = function load(elements, pos) {
    var this$1 = this;
    for (var i = 0; i < elements.length; i++) {
      var srcElement = elements[i];
      var children = srcElement.children;
      var childNode = new node_map_default2[srcElement.nodeType](srcElement, this$1.options);
      if (defined(pos)) {
        this$1.insertAt(childNode, pos);
      } else {
        this$1.append(childNode);
      }
      childNode.createDefinitions();
      if (children && children.length > 0) {
        childNode.load(children);
      }
      var element = this$1.element;
      if (element) {
        childNode.attachTo(element, pos);
      }
    }
  };
  Node3.prototype.root = function root() {
    var root2 = this;
    while (root2.parent) {
      root2 = root2.parent;
    }
    return root2;
  };
  Node3.prototype.attachTo = function attachTo(domElement, pos) {
    var container = document.createElement("div");
    render_svg_default(
      container,
      "<svg xmlns='" + SVG_NS + "' version='1.1'>" + this.render() + "</svg>"
    );
    var element = container.firstChild.firstChild;
    if (element) {
      if (defined(pos)) {
        domElement.insertBefore(element, domElement.childNodes[pos] || null);
      } else {
        domElement.appendChild(element);
      }
      this.setElement(element);
    }
  };
  Node3.prototype.setElement = function setElement(element) {
    if (this.element) {
      this.element._kendoNode = null;
    }
    this.element = element;
    this.element._kendoNode = this;
    var nodes = this.childNodes;
    for (var i = 0; i < nodes.length; i++) {
      var childElement = element.childNodes[i];
      nodes[i].setElement(childElement);
    }
  };
  Node3.prototype.clear = function clear2() {
    this.clearDefinitions();
    if (this.element) {
      this.element.innerHTML = "";
    }
    var children = this.childNodes;
    for (var i = 0; i < children.length; i++) {
      children[i].destroy();
    }
    this.childNodes = [];
  };
  Node3.prototype.removeSelf = function removeSelf() {
    if (this.element) {
      var parentNode = this.element.parentNode;
      if (parentNode) {
        parentNode.removeChild(this.element);
      }
      this.element = null;
    }
    BaseNode2.prototype.removeSelf.call(this);
  };
  Node3.prototype.template = function template2() {
    return this.renderChildren();
  };
  Node3.prototype.render = function render4() {
    return this.template();
  };
  Node3.prototype.renderChildren = function renderChildren() {
    var nodes = this.childNodes;
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
      output += nodes[i].render();
    }
    return output;
  };
  Node3.prototype.optionsChange = function optionsChange(e) {
    var field = e.field;
    var value = e.value;
    if (field === "visible") {
      this.css("display", value ? "" : NONE);
    } else if (DefinitionMap[field] && isDefinition(field, value)) {
      this.updateDefinition(field, value);
    } else if (field === "opacity") {
      this.attr("opacity", value);
    } else if (field === "cursor") {
      this.css("cursor", value);
    } else if (field === "id") {
      if (value) {
        this.attr("id", value);
      } else {
        this.removeAttr("id");
      }
    }
    BaseNode2.prototype.optionsChange.call(this, e);
  };
  Node3.prototype.accessibilityOptionsChange = function accessibilityOptionsChange(e) {
    var field = e.field;
    var value = e.value;
    if (field === "role") {
      if (value) {
        this.attr("role", value);
      } else {
        this.removeAttr("role");
      }
    } else if (field === "ariaLabel") {
      if (value) {
        this.attr("aria-label", htmlEncode(value));
      } else {
        this.removeAttr("aria-label");
      }
    } else if (field === "ariaRoleDescription") {
      if (value) {
        this.attr("aria-roledescription", htmlEncode(value));
      } else {
        this.removeAttr("aria-roledescription");
      }
    } else if (field === "ariaChecked") {
      if (defined(value)) {
        this.attr("aria-checked", value);
      } else {
        this.removeAttr("aria-checked");
      }
    } else if (field === "className") {
      this.className(value);
    }
  };
  Node3.prototype.attr = function attr(name2, value) {
    if (this.element) {
      this.element.setAttribute(name2, value);
    }
  };
  Node3.prototype.allAttr = function allAttr(attrs) {
    var this$1 = this;
    for (var i = 0; i < attrs.length; i++) {
      this$1.attr(attrs[i][0], attrs[i][1]);
    }
  };
  Node3.prototype.toggleAttr = function toggleAttr(name2, value) {
    if (value) {
      this.attr(name2, value);
    } else {
      this.removeAttr(name2);
    }
  };
  Node3.prototype.css = function css(name2, value) {
    if (this.element) {
      this.element.style[name2] = value;
    }
  };
  Node3.prototype.allCss = function allCss(styles) {
    var this$1 = this;
    for (var i = 0; i < styles.length; i++) {
      this$1.css(styles[i][0], styles[i][1]);
    }
  };
  Node3.prototype.className = function className(value) {
    var this$1 = this;
    if (this.element) {
      (ref = this.element.classList).remove.apply(ref, this.element.classList);
      value.split(" ").forEach(function(item) {
        this$1.element.classList.add(item);
      });
    }
    var ref;
  };
  Node3.prototype.removeAttr = function removeAttr(name2) {
    if (this.element) {
      this.element.removeAttribute(name2);
    }
  };
  Node3.prototype.mapTransform = function mapTransform(transform2) {
    var attrs = [];
    if (transform2) {
      attrs.push([
        TRANSFORM,
        "matrix(" + transform2.matrix().toString(6) + ")"
      ]);
    }
    return attrs;
  };
  Node3.prototype.renderTransform = function renderTransform() {
    return renderAllAttr(
      this.mapTransform(this.srcElement.transform())
    );
  };
  Node3.prototype.transformChange = function transformChange(value) {
    if (value) {
      this.allAttr(this.mapTransform(value));
    } else {
      this.removeAttr(TRANSFORM);
    }
  };
  Node3.prototype.mapStyle = function mapStyle() {
    var options2 = this.srcElement.options;
    var style = [["cursor", options2.cursor]];
    if (options2.visible === false) {
      style.push(["display", NONE]);
    }
    return style;
  };
  Node3.prototype.renderStyle = function renderStyle$1() {
    return renderAttr("style", renderStyle(this.mapStyle(true)));
  };
  Node3.prototype.renderOpacity = function renderOpacity() {
    return renderAttr("opacity", this.srcElement.options.opacity);
  };
  Node3.prototype.renderId = function renderId() {
    return renderAttr("id", this.srcElement.options.id);
  };
  Node3.prototype.renderClassName = function renderClassName() {
    return renderAttr("class", this.srcElement.options.className);
  };
  Node3.prototype.renderRole = function renderRole() {
    return renderAttr("role", this.srcElement.options.role);
  };
  Node3.prototype.renderAriaLabel = function renderAriaLabel() {
    var value = this.srcElement.options.ariaLabel;
    if (value) {
      value = htmlEncode(value);
    }
    return renderAttr("aria-label", value);
  };
  Node3.prototype.renderAriaRoleDescription = function renderAriaRoleDescription() {
    var value = this.srcElement.options.ariaRoleDescription;
    if (value) {
      value = htmlEncode(value);
    }
    return renderAttr("aria-roledescription", value);
  };
  Node3.prototype.renderAriaChecked = function renderAriaChecked() {
    return renderAttr("aria-checked", this.srcElement.options.ariaChecked);
  };
  Node3.prototype.createDefinitions = function createDefinitions() {
    var srcElement = this.srcElement;
    var definitions = this.definitions;
    if (srcElement) {
      var options2 = srcElement.options;
      var hasDefinitions;
      for (var field in DefinitionMap) {
        var definition = options2.get(field);
        if (definition && isDefinition(field, definition)) {
          definitions[field] = definition;
          hasDefinitions = true;
        }
      }
      if (hasDefinitions) {
        this.definitionChange({
          action: "add",
          definitions
        });
      }
    }
  };
  Node3.prototype.definitionChange = function definitionChange(e) {
    if (this.parent) {
      this.parent.definitionChange(e);
    }
  };
  Node3.prototype.updateDefinition = function updateDefinition(type, value) {
    var definitions = this.definitions;
    var current = definitions[type];
    var attr = DefinitionMap[type];
    var definition = {};
    if (current) {
      definition[type] = current;
      this.definitionChange({
        action: "remove",
        definitions: definition
      });
      delete definitions[type];
    }
    if (!value) {
      if (current) {
        this.removeAttr(attr);
      }
    } else {
      definition[type] = value;
      this.definitionChange({
        action: "add",
        definitions: definition
      });
      definitions[type] = value;
      this.attr(attr, this.refUrl(value.id));
    }
  };
  Node3.prototype.clearDefinitions = function clearDefinitions() {
    var definitions = this.definitions;
    this.definitionChange({
      action: "remove",
      definitions
    });
    this.definitions = {};
  };
  Node3.prototype.renderDefinitions = function renderDefinitions() {
    return renderAllAttr(this.mapDefinitions());
  };
  Node3.prototype.mapDefinitions = function mapDefinitions() {
    var this$1 = this;
    var definitions = this.definitions;
    var attrs = [];
    for (var field in definitions) {
      attrs.push([DefinitionMap[field], this$1.refUrl(definitions[field].id)]);
    }
    return attrs;
  };
  Node3.prototype.refUrl = function refUrl(id) {
    var skipBaseHref = (this.options || {}).skipBaseHref;
    var baseHref = this.baseUrl().replace(/'/g, "\\'");
    var base = skipBaseHref ? "" : baseHref;
    return "url(" + base + "#" + id + ")";
  };
  Node3.prototype.baseUrl = function baseUrl$1() {
    return baseUrl();
  };
  return Node3;
}(base_node_default);
var node_default2 = Node2;

// node_modules/@progress/kendo-drawing/dist/es/svg/gradient-stop-node.js
var GradientStopNode = function(Node3) {
  function GradientStopNode2() {
    Node3.apply(this, arguments);
  }
  if (Node3) GradientStopNode2.__proto__ = Node3;
  GradientStopNode2.prototype = Object.create(Node3 && Node3.prototype);
  GradientStopNode2.prototype.constructor = GradientStopNode2;
  GradientStopNode2.prototype.template = function template2() {
    return "<stop " + this.renderOffset() + " " + this.renderStyle() + " />";
  };
  GradientStopNode2.prototype.renderOffset = function renderOffset() {
    return renderAttr("offset", this.srcElement.offset());
  };
  GradientStopNode2.prototype.mapStyle = function mapStyle() {
    var srcElement = this.srcElement;
    return [
      ["stop-color", srcElement.color()],
      ["stop-opacity", srcElement.opacity()]
    ];
  };
  GradientStopNode2.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "offset") {
      this.attr(e.field, e.value);
    } else if (e.field === "color" || e.field === "opacity") {
      this.css("stop-" + e.field, e.value);
    }
  };
  return GradientStopNode2;
}(node_default2);
var gradient_stop_node_default = GradientStopNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/gradient-node.js
var GradientNode = function(Node3) {
  function GradientNode2(srcElement) {
    Node3.call(this, srcElement);
    this.id = srcElement.id;
    this.loadStops();
  }
  if (Node3) GradientNode2.__proto__ = Node3;
  GradientNode2.prototype = Object.create(Node3 && Node3.prototype);
  GradientNode2.prototype.constructor = GradientNode2;
  GradientNode2.prototype.loadStops = function loadStops() {
    var this$1 = this;
    var stops = this.srcElement.stops;
    var element = this.element;
    for (var idx = 0; idx < stops.length; idx++) {
      var stopNode = new gradient_stop_node_default(stops[idx]);
      this$1.append(stopNode);
      if (element) {
        stopNode.attachTo(element);
      }
    }
  };
  GradientNode2.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "gradient.stops") {
      base_node_default.prototype.clear.call(this);
      this.loadStops();
    } else if (e.field === "gradient") {
      this.allAttr(this.mapCoordinates());
    }
  };
  GradientNode2.prototype.renderCoordinates = function renderCoordinates() {
    return renderAllAttr(this.mapCoordinates());
  };
  GradientNode2.prototype.mapSpace = function mapSpace() {
    return ["gradientUnits", this.srcElement.userSpace() ? "userSpaceOnUse" : "objectBoundingBox"];
  };
  return GradientNode2;
}(node_default2);
var gradient_node_default = GradientNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/linear-gradient-node.js
var LinearGradientNode = function(GradientNode2) {
  function LinearGradientNode2() {
    GradientNode2.apply(this, arguments);
  }
  if (GradientNode2) LinearGradientNode2.__proto__ = GradientNode2;
  LinearGradientNode2.prototype = Object.create(GradientNode2 && GradientNode2.prototype);
  LinearGradientNode2.prototype.constructor = LinearGradientNode2;
  LinearGradientNode2.prototype.template = function template2() {
    return "<linearGradient id='" + this.id + "' " + this.renderCoordinates() + ">" + this.renderChildren() + "</linearGradient>";
  };
  LinearGradientNode2.prototype.mapCoordinates = function mapCoordinates() {
    var srcElement = this.srcElement;
    var start = srcElement.start();
    var end = srcElement.end();
    var attrs = [
      ["x1", start.x],
      ["y1", start.y],
      ["x2", end.x],
      ["y2", end.y],
      this.mapSpace()
    ];
    return attrs;
  };
  return LinearGradientNode2;
}(gradient_node_default);
var linear_gradient_node_default = LinearGradientNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/radial-gradient-node.js
var RadialGradientNode = function(GradientNode2) {
  function RadialGradientNode2() {
    GradientNode2.apply(this, arguments);
  }
  if (GradientNode2) RadialGradientNode2.__proto__ = GradientNode2;
  RadialGradientNode2.prototype = Object.create(GradientNode2 && GradientNode2.prototype);
  RadialGradientNode2.prototype.constructor = RadialGradientNode2;
  RadialGradientNode2.prototype.template = function template2() {
    return "<radialGradient id='" + this.id + "' " + this.renderCoordinates() + ">" + this.renderChildren() + "</radialGradient>";
  };
  RadialGradientNode2.prototype.mapCoordinates = function mapCoordinates() {
    var srcElement = this.srcElement;
    var center = srcElement.center();
    var radius = srcElement.radius();
    var attrs = [
      ["cx", center.x],
      ["cy", center.y],
      ["r", radius],
      this.mapSpace()
    ];
    return attrs;
  };
  return RadialGradientNode2;
}(gradient_node_default);
var radial_gradient_node_default = RadialGradientNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/pattern-node.js
var PatternNode = function(Node3) {
  function PatternNode2(pattern) {
    Node3.call(this, pattern);
    this.id = pattern.id;
    this.load(pattern.children);
  }
  if (Node3) PatternNode2.__proto__ = Node3;
  PatternNode2.prototype = Object.create(Node3 && Node3.prototype);
  PatternNode2.prototype.constructor = PatternNode2;
  PatternNode2.prototype.template = function template2() {
    var width = this.srcElement.size().getWidth();
    var height = this.srcElement.size().getHeight();
    return "<pattern id='" + this.srcElement.id + "' width='" + width + "' height='" + height + "' patternUnits='userSpaceOnUse'>" + this.renderChildren() + "</pattern>";
  };
  return PatternNode2;
}(node_default2);

// node_modules/@progress/kendo-drawing/dist/es/svg/clip-node.js
var ClipNode = function(Node3) {
  function ClipNode2(srcElement) {
    Node3.call(this);
    this.srcElement = srcElement;
    this.id = srcElement.id;
    this.load([srcElement]);
  }
  if (Node3) ClipNode2.__proto__ = Node3;
  ClipNode2.prototype = Object.create(Node3 && Node3.prototype);
  ClipNode2.prototype.constructor = ClipNode2;
  ClipNode2.prototype.renderClipRule = function renderClipRule() {
    return renderAttr("clip-rule", "evenodd");
  };
  ClipNode2.prototype.template = function template2() {
    return "<clipPath " + this.renderClipRule() + " id='" + this.id + "'>" + this.renderChildren() + "</clipPath>";
  };
  return ClipNode2;
}(node_default2);
var clip_node_default = ClipNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/definition-node.js
var DefinitionNode = function(Node3) {
  function DefinitionNode2() {
    Node3.call(this);
    this.definitionMap = {};
  }
  if (Node3) DefinitionNode2.__proto__ = Node3;
  DefinitionNode2.prototype = Object.create(Node3 && Node3.prototype);
  DefinitionNode2.prototype.constructor = DefinitionNode2;
  DefinitionNode2.prototype.attachTo = function attachTo(domElement) {
    this.element = domElement;
  };
  DefinitionNode2.prototype.template = function template2() {
    return "<defs>" + this.renderChildren() + "</defs>";
  };
  DefinitionNode2.prototype.definitionChange = function definitionChange(e) {
    var definitions = e.definitions;
    var action = e.action;
    if (action === "add") {
      this.addDefinitions(definitions);
    } else if (action === "remove") {
      this.removeDefinitions(definitions);
    }
  };
  DefinitionNode2.prototype.createDefinition = function createDefinition(type, item) {
    var nodeType;
    if (type === "clip") {
      nodeType = clip_node_default;
    } else if (type === "fill") {
      if (item instanceof linear_gradient_default) {
        nodeType = linear_gradient_node_default;
      } else if (item instanceof radial_gradient_default) {
        nodeType = radial_gradient_node_default;
      } else if (item.nodeType === PATTERN) {
        nodeType = PatternNode;
      }
    }
    return new nodeType(item);
  };
  DefinitionNode2.prototype.addDefinitions = function addDefinitions(definitions) {
    var this$1 = this;
    for (var field in definitions) {
      this$1.addDefinition(field, definitions[field]);
    }
  };
  DefinitionNode2.prototype.addDefinition = function addDefinition(type, srcElement) {
    var ref = this;
    var element = ref.element;
    var definitionMap = ref.definitionMap;
    var id = srcElement.id;
    var mapItem = definitionMap[id];
    if (!mapItem) {
      var node = this.createDefinition(type, srcElement);
      definitionMap[id] = {
        element: node,
        count: 1
      };
      this.append(node);
      if (element) {
        node.attachTo(this.element);
      }
    } else {
      mapItem.count++;
    }
  };
  DefinitionNode2.prototype.removeDefinitions = function removeDefinitions(definitions) {
    var this$1 = this;
    for (var field in definitions) {
      this$1.removeDefinition(definitions[field]);
    }
  };
  DefinitionNode2.prototype.removeDefinition = function removeDefinition(srcElement) {
    var definitionMap = this.definitionMap;
    var id = srcElement.id;
    var mapItem = definitionMap[id];
    if (mapItem) {
      mapItem.count--;
      if (mapItem.count === 0) {
        this.remove(this.childNodes.indexOf(mapItem.element), 1);
        delete definitionMap[id];
      }
    }
  };
  return DefinitionNode2;
}(node_default2);
var definition_node_default = DefinitionNode;

// node_modules/@progress/kendo-drawing/dist/es/svg/root-node.js
var RootNode2 = function(Node3) {
  function RootNode3(options2) {
    Node3.call(this);
    this.options = options2;
    this.defs = new definition_node_default();
  }
  if (Node3) RootNode3.__proto__ = Node3;
  RootNode3.prototype = Object.create(Node3 && Node3.prototype);
  RootNode3.prototype.constructor = RootNode3;
  RootNode3.prototype.attachTo = function attachTo(domElement) {
    this.element = domElement;
    this.defs.attachTo(domElement.firstElementChild);
  };
  RootNode3.prototype.clear = function clear2() {
    base_node_default.prototype.clear.call(this);
  };
  RootNode3.prototype.template = function template2() {
    return this.defs.render() + this.renderChildren();
  };
  RootNode3.prototype.definitionChange = function definitionChange(e) {
    this.defs.definitionChange(e);
  };
  return RootNode3;
}(node_default2);
var root_node_default2 = RootNode2;

// node_modules/@progress/kendo-drawing/dist/es/mixins/with-geometry.js
function geometryAccessor(name2) {
  var fieldName = "_" + name2;
  return function(value) {
    if (defined(value)) {
      this._observerField(fieldName, value);
      this.geometryChange();
      return this;
    }
    return this[fieldName];
  };
}
function defineGeometryAccessors(fn, names) {
  for (var i = 0; i < names.length; i++) {
    fn[names[i]] = geometryAccessor(names[i]);
  }
}
var withGeometry = function(TBase, names) {
  if (names === void 0) names = ["geometry"];
  var result = function(TBase2) {
    function result2() {
      TBase2.apply(this, arguments);
    }
    if (TBase2) result2.__proto__ = TBase2;
    result2.prototype = Object.create(TBase2 && TBase2.prototype);
    result2.prototype.constructor = result2;
    return result2;
  }(TBase);
  defineGeometryAccessors(result.prototype, names);
  return result;
};
var with_geometry_default = withGeometry;

// node_modules/@progress/kendo-drawing/dist/es/shapes/circle.js
var DEFAULT_STROKE = "#000";
var Circle2 = function(superclass) {
  function Circle3(geometry, options2) {
    if (geometry === void 0) geometry = new circle_default();
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.geometry(geometry);
    if (!defined(this.options.stroke)) {
      this.stroke(DEFAULT_STROKE);
    }
  }
  if (superclass) Circle3.__proto__ = superclass;
  Circle3.prototype = Object.create(superclass && superclass.prototype);
  Circle3.prototype.constructor = Circle3;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Circle";
  };
  Circle3.prototype.rawBBox = function rawBBox() {
    return this._geometry.bbox();
  };
  Circle3.prototype._bbox = function _bbox(matrix) {
    return this._geometry.bbox(matrix);
  };
  Circle3.prototype._containsPoint = function _containsPoint(point2) {
    return this.geometry().containsPoint(point2);
  };
  Circle3.prototype._isOnPath = function _isOnPath(point2) {
    return this.geometry()._isOnPath(point2, this.options.stroke.width / 2);
  };
  Object.defineProperties(Circle3.prototype, prototypeAccessors);
  return Circle3;
}(paintable_default(measurable_default(with_geometry_default(element_default))));
var circle_default2 = Circle2;

// node_modules/@progress/kendo-drawing/dist/es/shapes/arc.js
var DEFAULT_STROKE2 = "#000";
var Arc2 = function(superclass) {
  function Arc3(geometry, options2) {
    if (geometry === void 0) geometry = new arc_default();
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.geometry(geometry);
    if (!defined(this.options.stroke)) {
      this.stroke(DEFAULT_STROKE2);
    }
  }
  if (superclass) Arc3.__proto__ = superclass;
  Arc3.prototype = Object.create(superclass && superclass.prototype);
  Arc3.prototype.constructor = Arc3;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Arc";
  };
  Arc3.prototype._bbox = function _bbox(matrix) {
    return this._geometry.bbox(matrix);
  };
  Arc3.prototype.rawBBox = function rawBBox() {
    return this.geometry().bbox();
  };
  Arc3.prototype.toPath = function toPath() {
    var path = new Path();
    var curvePoints = this.geometry().curvePoints();
    if (curvePoints.length > 0) {
      path.moveTo(curvePoints[0].x, curvePoints[0].y);
      for (var i = 1; i < curvePoints.length; i += 3) {
        path.curveTo(curvePoints[i], curvePoints[i + 1], curvePoints[i + 2]);
      }
    }
    return path;
  };
  Arc3.prototype._containsPoint = function _containsPoint(point2) {
    return this.geometry().containsPoint(point2);
  };
  Arc3.prototype._isOnPath = function _isOnPath(point2) {
    return this.geometry()._isOnPath(point2, this.options.stroke.width / 2);
  };
  Object.defineProperties(Arc3.prototype, prototypeAccessors);
  return Arc3;
}(paintable_default(measurable_default(with_geometry_default(element_default))));
var arc_default2 = Arc2;

// node_modules/@progress/kendo-drawing/dist/es/shapes/text.js
var DEFAULT_FONT = "12px sans-serif";
var DEFAULT_FILL = "#000";
var Text = function(superclass) {
  function Text2(content, position, options2) {
    if (position === void 0) position = new point_default();
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.content(content);
    this.position(position);
    if (!this.options.font) {
      this.options.font = DEFAULT_FONT;
    }
    if (!defined(this.options.fill)) {
      this.fill(DEFAULT_FILL);
    }
  }
  if (superclass) Text2.__proto__ = superclass;
  Text2.prototype = Object.create(superclass && superclass.prototype);
  Text2.prototype.constructor = Text2;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Text";
  };
  Text2.prototype.content = function content(value) {
    if (defined(value)) {
      this.options.set("content", value);
      return this;
    }
    return this.options.get("content");
  };
  Text2.prototype.measure = function measure() {
    var metrics = measureText(this.content(), {
      font: this.options.get("font")
    });
    return metrics;
  };
  Text2.prototype.rect = function rect() {
    var size = this.measure();
    var pos = this.position().clone();
    return new rect_default(pos, [size.width, size.height]);
  };
  Text2.prototype.bbox = function bbox(transformation) {
    var combinedMatrix = toMatrix(this.currentTransform(transformation));
    return this.rect().bbox(combinedMatrix);
  };
  Text2.prototype.rawBBox = function rawBBox() {
    return this.rect().bbox();
  };
  Text2.prototype._containsPoint = function _containsPoint(point2) {
    return this.rect().containsPoint(point2);
  };
  Object.defineProperties(Text2.prototype, prototypeAccessors);
  return Text2;
}(paintable_default(with_points_default(element_default, ["position"])));
var text_default = Text;

// node_modules/@progress/kendo-drawing/dist/es/shapes/image.js
var Image2 = function(superclass) {
  function Image3(src, rect, options2) {
    if (rect === void 0) rect = new rect_default();
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.src(src);
    this.rect(rect);
  }
  if (superclass) Image3.__proto__ = superclass;
  Image3.prototype = Object.create(superclass && superclass.prototype);
  Image3.prototype.constructor = Image3;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Image";
  };
  Image3.prototype.src = function src(value) {
    if (defined(value)) {
      this.options.set("src", value);
      return this;
    }
    return this.options.get("src");
  };
  Image3.prototype.bbox = function bbox(transformation) {
    var combinedMatrix = toMatrix(this.currentTransform(transformation));
    return this._rect.bbox(combinedMatrix);
  };
  Image3.prototype.rawBBox = function rawBBox() {
    return this._rect.bbox();
  };
  Image3.prototype._containsPoint = function _containsPoint(point2) {
    return this._rect.containsPoint(point2);
  };
  Image3.prototype._hasFill = function _hasFill() {
    return this.src();
  };
  Object.defineProperties(Image3.prototype, prototypeAccessors);
  return Image3;
}(with_geometry_default(element_default, ["rect"]));
var image_default = Image2;

// node_modules/@progress/kendo-drawing/dist/es/alignment/translate-to-point.js
function translateToPoint(point2, bbox, element) {
  var transofrm = element.transform() || transform();
  var matrix = transofrm.matrix();
  matrix.e += point2.x - bbox.origin.x;
  matrix.f += point2.y - bbox.origin.y;
  transofrm.matrix(matrix);
  element.transform(transofrm);
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/align-start.js
function alignStart(size, rect, align2, axis, sizeField) {
  var start;
  if (align2 === "start") {
    start = rect.origin[axis];
  } else if (align2 === "end") {
    start = rect.origin[axis] + rect.size[sizeField] - size;
  } else {
    start = rect.origin[axis] + (rect.size[sizeField] - size) / 2;
  }
  return start;
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/align-start-reverse.js
function alignStartReverse(size, rect, align2, axis, sizeField) {
  var start;
  if (align2 === "start") {
    start = rect.origin[axis] + rect.size[sizeField] - size;
  } else if (align2 === "end") {
    start = rect.origin[axis];
  } else {
    start = rect.origin[axis] + (rect.size[sizeField] - size) / 2;
  }
  return start;
}

// node_modules/@progress/kendo-drawing/dist/es/shapes/layout.js
var DEFAULT_OPTIONS2 = {
  alignContent: "start",
  justifyContent: "start",
  alignItems: "start",
  spacing: 0,
  orientation: "horizontal",
  lineSpacing: 0,
  wrap: true,
  revers: false
};
var forEach = function(elements, callback) {
  elements.forEach(callback);
};
var forEachReverse = function(elements, callback) {
  var length = elements.length;
  for (var idx = length - 1; idx >= 0; idx--) {
    callback(elements[idx], idx);
  }
};
var Layout = function(Group2) {
  function Layout2(rect, options2) {
    Group2.call(this, Object.assign({}, DEFAULT_OPTIONS2, options2));
    this._rect = rect;
    this._fieldMap = {};
  }
  if (Group2) Layout2.__proto__ = Group2;
  Layout2.prototype = Object.create(Group2 && Group2.prototype);
  Layout2.prototype.constructor = Layout2;
  Layout2.prototype.rect = function rect(value) {
    if (value) {
      this._rect = value;
      return this;
    }
    return this._rect;
  };
  Layout2.prototype._initMap = function _initMap() {
    var options2 = this.options;
    var fieldMap = this._fieldMap;
    if (options2.orientation === "horizontal") {
      fieldMap.sizeField = "width";
      fieldMap.groupsSizeField = "height";
      fieldMap.groupAxis = "x";
      fieldMap.groupsAxis = "y";
    } else {
      fieldMap.sizeField = "height";
      fieldMap.groupsSizeField = "width";
      fieldMap.groupAxis = "y";
      fieldMap.groupsAxis = "x";
    }
    if (options2.reverse) {
      this.forEach = forEachReverse;
      this.justifyAlign = alignStartReverse;
    } else {
      this.forEach = forEach;
      this.justifyAlign = alignStart;
    }
  };
  Layout2.prototype.reflow = function reflow() {
    var this$1 = this;
    if (!this._rect || this.children.length === 0) {
      return;
    }
    this._initMap();
    if (this.options.transform) {
      this.transform(null);
    }
    var options2 = this.options;
    var rect = this._rect;
    var ref = this._initGroups();
    var groups = ref.groups;
    var groupsSize = ref.groupsSize;
    var ref$1 = this._fieldMap;
    var sizeField = ref$1.sizeField;
    var groupsSizeField = ref$1.groupsSizeField;
    var groupAxis = ref$1.groupAxis;
    var groupsAxis = ref$1.groupsAxis;
    var groupOrigin = new point_default();
    var elementOrigin = new point_default();
    var size = new size_default();
    var groupStart = alignStart(groupsSize, rect, options2.alignContent, groupsAxis, groupsSizeField);
    var elementStart, group, groupBox;
    var arrangeElements = function(bbox, idx) {
      var element = group.elements[idx];
      elementOrigin[groupAxis] = elementStart;
      elementOrigin[groupsAxis] = alignStart(bbox.size[groupsSizeField], groupBox, options2.alignItems, groupsAxis, groupsSizeField);
      translateToPoint(elementOrigin, bbox, element);
      elementStart += bbox.size[sizeField] + options2.spacing;
    };
    for (var groupIdx = 0; groupIdx < groups.length; groupIdx++) {
      group = groups[groupIdx];
      groupOrigin[groupAxis] = elementStart = this$1.justifyAlign(group.size, rect, options2.justifyContent, groupAxis, sizeField);
      groupOrigin[groupsAxis] = groupStart;
      size[sizeField] = group.size;
      size[groupsSizeField] = group.lineSize;
      groupBox = new rect_default(groupOrigin, size);
      this$1.forEach(group.bboxes, arrangeElements);
      groupStart += group.lineSize + options2.lineSpacing;
    }
    if (!options2.wrap && group.size > rect.size[sizeField]) {
      var scale = rect.size[sizeField] / groupBox.size[sizeField];
      var scaledStart = groupBox.topLeft().scale(scale, scale);
      var scaledSize = groupBox.size[groupsSizeField] * scale;
      var newStart = alignStart(scaledSize, rect, options2.alignContent, groupsAxis, groupsSizeField);
      var transform2 = transform();
      if (groupAxis === "x") {
        transform2.translate(rect.origin.x - scaledStart.x, newStart - scaledStart.y);
      } else {
        transform2.translate(newStart - scaledStart.x, rect.origin.y - scaledStart.y);
      }
      transform2.scale(scale, scale);
      this.transform(transform2);
    }
  };
  Layout2.prototype._initGroups = function _initGroups() {
    var this$1 = this;
    var ref = this;
    var options2 = ref.options;
    var children = ref.children;
    var lineSpacing = options2.lineSpacing;
    var wrap2 = options2.wrap;
    var spacing = options2.spacing;
    var sizeField = this._fieldMap.sizeField;
    var group = this._newGroup();
    var groups = [];
    var addGroup = function() {
      groups.push(group);
      groupsSize += group.lineSize + lineSpacing;
    };
    var groupsSize = -lineSpacing;
    for (var idx = 0; idx < children.length; idx++) {
      var element = children[idx];
      var bbox = children[idx].clippedBBox();
      if (element.visible() && bbox) {
        if (wrap2 && group.size + bbox.size[sizeField] + spacing > this$1._rect.size[sizeField]) {
          if (group.bboxes.length === 0) {
            this$1._addToGroup(group, bbox, element);
            addGroup();
            group = this$1._newGroup();
          } else {
            addGroup();
            group = this$1._newGroup();
            this$1._addToGroup(group, bbox, element);
          }
        } else {
          this$1._addToGroup(group, bbox, element);
        }
      }
    }
    if (group.bboxes.length) {
      addGroup();
    }
    return {
      groups,
      groupsSize
    };
  };
  Layout2.prototype._addToGroup = function _addToGroup(group, bbox, element) {
    group.size += bbox.size[this._fieldMap.sizeField] + this.options.spacing;
    group.lineSize = Math.max(bbox.size[this._fieldMap.groupsSizeField], group.lineSize);
    group.bboxes.push(bbox);
    group.elements.push(element);
  };
  Layout2.prototype._newGroup = function _newGroup() {
    return {
      lineSize: 0,
      size: -this.options.spacing,
      bboxes: [],
      elements: []
    };
  };
  return Layout2;
}(group_default);
var layout_default = Layout;

// node_modules/@progress/kendo-drawing/dist/es/shapes/rect.js
var Rect2 = function(superclass) {
  function Rect3(geometry, options2) {
    if (geometry === void 0) geometry = new rect_default();
    if (options2 === void 0) options2 = {};
    superclass.call(this, options2);
    this.geometry(geometry);
    if (!defined(this.options.stroke)) {
      this.stroke("#000");
    }
  }
  if (superclass) Rect3.__proto__ = superclass;
  Rect3.prototype = Object.create(superclass && superclass.prototype);
  Rect3.prototype.constructor = Rect3;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return "Rect";
  };
  Rect3.prototype._bbox = function _bbox(matrix) {
    return this._geometry.bbox(matrix);
  };
  Rect3.prototype.rawBBox = function rawBBox() {
    return this._geometry.bbox();
  };
  Rect3.prototype._containsPoint = function _containsPoint(point2) {
    return this._geometry.containsPoint(point2);
  };
  Rect3.prototype._isOnPath = function _isOnPath(point2) {
    return this.geometry()._isOnPath(point2, this.options.stroke.width / 2);
  };
  Object.defineProperties(Rect3.prototype, prototypeAccessors);
  return Rect3;
}(paintable_default(measurable_default(with_geometry_default(element_default))));
var rect_default2 = Rect2;

// node_modules/@progress/kendo-drawing/dist/es/svg/export-group.js
function exportGroup(group) {
  var root = new root_node_default2({
    skipBaseHref: true
  });
  var bbox = group.clippedBBox();
  var rootGroup = group;
  if (bbox) {
    var origin = bbox.getOrigin();
    var exportRoot = new group_default();
    exportRoot.transform(transform().translate(-origin.x, -origin.y));
    exportRoot.children.push(group);
    rootGroup = exportRoot;
  }
  root.load([rootGroup]);
  var svg = "<?xml version='1.0' ?><svg xmlns='" + SVG_NS + "' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'>" + root.render() + "</svg>";
  root.destroy();
  return svg;
}

// node_modules/@progress/kendo-drawing/dist/es/svg/export-svg.js
function exportSVG(group, options2) {
  var svg = exportGroup(group);
  if (!options2 || !options2.raw) {
    svg = "data:image/svg+xml;base64," + encodeBase64(svg);
  }
  return createPromise().resolve(svg);
}

// node_modules/@progress/kendo-drawing/dist/es/drawing.js
var drawing_exports = {};
__export(drawing_exports, {
  Animation: () => animation_default,
  AnimationFactory: () => animation_factory_default,
  Arc: () => arc_default2,
  BaseNode: () => base_node_default,
  Circle: () => circle_default2,
  Element: () => element_default,
  Gradient: () => gradient_default,
  GradientStop: () => gradient_stop_default,
  Group: () => group_default,
  HasObservers: () => has_observers_default,
  Image: () => image_default,
  Layout: () => layout_default,
  LinearGradient: () => linear_gradient_default,
  MultiPath: () => MultiPath,
  OptionsStore: () => options_store_default,
  Path: () => Path,
  PathParser: () => path_parser_default,
  Pattern: () => Pattern,
  QuadNode: () => quad_node_default,
  RadialGradient: () => radial_gradient_default,
  Rect: () => rect_default2,
  ShapesQuadTree: () => shapes_quad_tree_default,
  Surface: () => surface_default4,
  SurfaceFactory: () => surface_factory_default,
  Text: () => text_default,
  align: () => align,
  canvas: () => canvas_exports,
  crosshatchPattern: () => crosshatchPattern,
  diagonalStripesPattern: () => diagonalStripesPattern,
  dotsPattern: () => dotsPattern,
  exportImage: () => exportImage,
  exportSVG: () => exportSVG,
  fit: () => fit,
  gridPattern: () => gridPattern,
  parsePath: () => parse_path_default,
  stack: () => stack,
  svg: () => svg_exports,
  util: () => util_exports,
  vAlign: () => vAlign,
  vStack: () => vStack,
  vWrap: () => vWrap,
  verticalStripesPattern: () => verticalStripesPattern,
  wrap: () => wrap
});

// node_modules/@progress/kendo-drawing/dist/es/alignment/align-elements.js
function alignElements(elements, rect, alignment, axis, sizeField) {
  for (var idx = 0; idx < elements.length; idx++) {
    var bbox = elements[idx].clippedBBox();
    if (bbox) {
      var point2 = bbox.origin.clone();
      point2[axis] = alignStart(bbox.size[sizeField], rect, alignment || "start", axis, sizeField);
      translateToPoint(point2, bbox, elements[idx]);
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/align.js
function align(elements, rect, alignment) {
  alignElements(elements, rect, alignment, "x", "width");
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/v-align.js
function vAlign(elements, rect, alignment) {
  alignElements(elements, rect, alignment, "y", "height");
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/stack-elements.js
function stackElements(elements, stackAxis, otherAxis, sizeField) {
  if (elements.length > 1) {
    var origin = new point_default();
    var previousBBox = elements[0].bbox;
    for (var idx = 1; idx < elements.length; idx++) {
      var element = elements[idx].element;
      var bbox = elements[idx].bbox;
      origin[stackAxis] = previousBBox.origin[stackAxis] + previousBBox.size[sizeField];
      origin[otherAxis] = bbox.origin[otherAxis];
      translateToPoint(origin, bbox, element);
      bbox.origin[stackAxis] = origin[stackAxis];
      previousBBox = bbox;
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/create-stack-elements.js
function createStackElements(elements) {
  var stackElements2 = [];
  for (var idx = 0; idx < elements.length; idx++) {
    var element = elements[idx];
    var bbox = element.clippedBBox();
    if (bbox) {
      stackElements2.push({
        element,
        bbox
      });
    }
  }
  return stackElements2;
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/stack.js
function stack(elements) {
  stackElements(createStackElements(elements), "x", "y", "width");
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/v-stack.js
function vStack(elements) {
  stackElements(createStackElements(elements), "y", "x", "height");
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/wrap-elements.js
function getStacks(elements, rect, sizeField) {
  var maxSize = rect.size[sizeField];
  var stacks = [];
  var stack2 = [];
  var stackSize = 0;
  var element, bbox;
  var addElementToStack = function() {
    stack2.push({
      element,
      bbox
    });
  };
  for (var idx = 0; idx < elements.length; idx++) {
    element = elements[idx];
    bbox = element.clippedBBox();
    if (bbox) {
      var size = bbox.size[sizeField];
      if (stackSize + size > maxSize) {
        if (stack2.length) {
          stacks.push(stack2);
          stack2 = [];
          addElementToStack();
          stackSize = size;
        } else {
          addElementToStack();
          stacks.push(stack2);
          stack2 = [];
          stackSize = 0;
        }
      } else {
        addElementToStack();
        stackSize += size;
      }
    }
  }
  if (stack2.length) {
    stacks.push(stack2);
  }
  return stacks;
}
function wrapElements(elements, rect, axis, otherAxis, sizeField) {
  var stacks = getStacks(elements, rect, sizeField);
  var origin = rect.origin.clone();
  var result = [];
  for (var idx = 0; idx < stacks.length; idx++) {
    var stack2 = stacks[idx];
    var startElement = stack2[0];
    origin[otherAxis] = startElement.bbox.origin[otherAxis];
    translateToPoint(origin, startElement.bbox, startElement.element);
    startElement.bbox.origin[axis] = origin[axis];
    stackElements(stack2, axis, otherAxis, sizeField);
    result.push([]);
    for (var elementIdx = 0; elementIdx < stack2.length; elementIdx++) {
      result[idx].push(stack2[elementIdx].element);
    }
  }
  return result;
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/wrap.js
function wrap(elements, rect) {
  return wrapElements(elements, rect, "x", "y", "width");
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/v-wrap.js
function vWrap(elements, rect) {
  return wrapElements(elements, rect, "y", "x", "height");
}

// node_modules/@progress/kendo-drawing/dist/es/alignment/fit.js
function fit(element, rect) {
  var bbox = element.clippedBBox();
  if (bbox) {
    var elementSize2 = bbox.size;
    var rectSize = rect.size;
    if (rectSize.width < elementSize2.width || rectSize.height < elementSize2.height) {
      var scale = Math.min(rectSize.width / elementSize2.width, rectSize.height / elementSize2.height);
      var transform2 = element.transform() || transform();
      transform2.scale(scale, scale);
      element.transform(transform2);
    }
  }
}

// node_modules/@progress/kendo-drawing/dist/es/patterns/pattern.js
var defaultColor = "#aba4a6";
var defaultLine = { width: 2, gap: 18 };
var defaultDot = { radius: 10, gap: 10 };
var defaultGrid = { size: 18, gap: 2 };
var Pattern = function(Group2) {
  function Pattern2(options2) {
    Group2.call(this);
    var width = options2.width;
    var height = options2.height;
    this._size = size_default.create([width, height]);
    this.id = definitionId();
  }
  if (Group2) Pattern2.__proto__ = Group2;
  Pattern2.prototype = Object.create(Group2 && Group2.prototype);
  Pattern2.prototype.constructor = Pattern2;
  var prototypeAccessors = { nodeType: { configurable: true } };
  prototypeAccessors.nodeType.get = function() {
    return PATTERN;
  };
  Pattern2.prototype.size = function size(value) {
    if (value) {
      this._size = size_default.create(value);
      return this;
    }
    return this._size;
  };
  Object.defineProperties(Pattern2.prototype, prototypeAccessors);
  return Pattern2;
}(group_default);
var drawBackground = function(pattern, color, size) {
  if (color) {
    pattern.append(
      new rect_default2(new rect_default([0, 0], size), { fill: { color }, stroke: null })
    );
  }
};
function dotsPattern(options2) {
  if (options2 === void 0) options2 = {};
  var gap = options2.gap;
  if (gap === void 0) gap = defaultDot.gap;
  var radius = options2.radius;
  if (radius === void 0) radius = defaultDot.radius;
  var color = options2.color;
  if (color === void 0) color = defaultColor;
  var background = options2.background;
  var shapeOptions = { fill: { color }, stroke: null };
  var size = 4 * radius + 2 * gap;
  var yC2 = 3 * radius + 1.5 * gap;
  var center1 = [size / 2, radius + 1 / 2 * gap];
  var center2 = [0, yC2];
  var center3 = [size, yC2];
  var pattern = new Pattern({ width: size, height: size });
  drawBackground(pattern, background, [size, size]);
  pattern.append(
    new circle_default2(new circle_default(center1, radius), shapeOptions),
    new circle_default2(new circle_default(center2, radius), shapeOptions),
    new circle_default2(new circle_default(center3, radius), shapeOptions)
  );
  return pattern;
}
function verticalStripesPattern(options2) {
  if (options2 === void 0) options2 = {};
  var gap = options2.gap;
  if (gap === void 0) gap = defaultLine.gap;
  var width = options2.width;
  if (width === void 0) width = defaultLine.width;
  var color = options2.color;
  if (color === void 0) color = defaultColor;
  var background = options2.background;
  var size = width + gap;
  var shapeOptions = { fill: null, stroke: { color, width: width / 2 } };
  var pattern = new Pattern({ width: size, height: size });
  drawBackground(pattern, background, [size, size]);
  var xStart = width / 4;
  var xEnd = size - width / 4;
  var startLine = new Path(shapeOptions);
  startLine.moveTo(xStart, 0).lineTo(xStart, size);
  var endLine = new Path(shapeOptions);
  endLine.moveTo(xEnd, 0).lineTo(xEnd, size);
  pattern.append(startLine, endLine);
  return pattern;
}
function crosshatchPattern(options2) {
  if (options2 === void 0) options2 = {};
  var gap = options2.gap;
  if (gap === void 0) gap = defaultLine.gap;
  var width = options2.width;
  if (width === void 0) width = defaultLine.width;
  var color = options2.color;
  if (color === void 0) color = defaultColor;
  var background = options2.background;
  var size = Math.sqrt(2) * (width + gap);
  var shapeOptions = { fill: null, stroke: { color, width } };
  var pattern = new Pattern({ width: size, height: size });
  drawBackground(pattern, background, [size, size]);
  var line1 = new Path(shapeOptions);
  line1.moveTo(0, 0).lineTo(size, size);
  var line2 = new Path(shapeOptions);
  line2.moveTo(size, 0).lineTo(0, size);
  pattern.append(line1, line2);
  return pattern;
}
function diagonalStripesPattern(options2) {
  if (options2 === void 0) options2 = {};
  var gap = options2.gap;
  if (gap === void 0) gap = defaultLine.gap;
  var width = options2.width;
  if (width === void 0) width = defaultLine.width;
  var color = options2.color;
  if (color === void 0) color = defaultColor;
  var background = options2.background;
  var size = Math.sqrt(2) * (width + gap);
  var shapeOptions = { fill: null, stroke: { color, width, lineCap: "square" } };
  var pattern = new Pattern({ width: size, height: size });
  drawBackground(pattern, background, [size, size]);
  var line1 = new Path(shapeOptions);
  line1.moveTo(0, size / 2).lineTo(size / 2, 0);
  var line2 = new Path(shapeOptions);
  line2.moveTo(size / 2, size).lineTo(size, size / 2);
  pattern.append(line1, line2);
  return pattern;
}
function gridPattern(options2) {
  if (options2 === void 0) options2 = {};
  var gap = options2.gap;
  if (gap === void 0) gap = defaultGrid.gap;
  var squareSize = options2.size;
  if (squareSize === void 0) squareSize = defaultGrid.size;
  var color = options2.color;
  if (color === void 0) color = defaultColor;
  var background = options2.background;
  var size = squareSize + gap;
  var halfGap = gap / 2;
  var shapeOptions = { fill: { color }, stroke: null };
  var pattern = new Pattern({ width: size, height: size });
  drawBackground(pattern, background, [size, size]);
  var rect = new rect_default2(new rect_default([halfGap, halfGap], [squareSize, squareSize]), shapeOptions);
  pattern.append(rect);
  return pattern;
}

// node_modules/@progress/kendo-drawing/dist/es/animations/easing-functions.js
var easing_functions_exports = {};
__export(easing_functions_exports, {
  easeOutElastic: () => easeOutElastic,
  linear: () => linear,
  swing: () => swing
});
function swing(position) {
  return 0.5 - Math.cos(position * Math.PI) / 2;
}
function linear(position) {
  return position;
}
function easeOutElastic(position, time, start, diff) {
  var s = 1.70158, p = 0, a = diff;
  if (position === 0) {
    return start;
  }
  if (position === 1) {
    return start + diff;
  }
  if (!p) {
    p = 0.5;
  }
  if (a < Math.abs(diff)) {
    a = diff;
    s = p / 4;
  } else {
    s = p / (2 * Math.PI) * Math.asin(diff / a);
  }
  return a * Math.pow(2, -10 * position) * Math.sin((Number(position) - s) * (1.1 * Math.PI) / p) + diff + start;
}

// node_modules/@progress/kendo-drawing/dist/es/animations/animation-factory.js
var instance;
var AnimationFactory = function(Class3) {
  function AnimationFactory2() {
    Class3.call(this);
    this._items = [];
  }
  if (Class3) AnimationFactory2.__proto__ = Class3;
  AnimationFactory2.prototype = Object.create(Class3 && Class3.prototype);
  AnimationFactory2.prototype.constructor = AnimationFactory2;
  var staticAccessors = { current: { configurable: true } };
  staticAccessors.current.get = function() {
    if (!instance) {
      instance = new AnimationFactory2();
    }
    return instance;
  };
  AnimationFactory2.prototype.register = function register(name2, type) {
    this._items.push({
      name: name2,
      type
    });
  };
  AnimationFactory2.prototype.create = function create(element, options2) {
    var items = this._items;
    var match;
    if (options2 && options2.type) {
      var type = options2.type.toLowerCase();
      for (var i = 0; i < items.length; i++) {
        if (items[i].name.toLowerCase() === type) {
          match = items[i];
          break;
        }
      }
    }
    if (match) {
      return new match.type(element, options2);
    }
  };
  Object.defineProperties(AnimationFactory2, staticAccessors);
  return AnimationFactory2;
}(class_default);
var animation_factory_default = AnimationFactory;

// node_modules/@progress/kendo-drawing/dist/es/animations/animation.js
var Animation = function(Class3) {
  function Animation2(element, options2) {
    Class3.call(this);
    this.options = Object.assign({}, this.options, options2);
    this.element = element;
  }
  if (Class3) Animation2.__proto__ = Class3;
  Animation2.prototype = Object.create(Class3 && Class3.prototype);
  Animation2.prototype.constructor = Animation2;
  var prototypeAccessors = { options: { configurable: true } };
  Animation2.create = function create(type, element, options2) {
    return animation_factory_default.current.create(type, element, options2);
  };
  prototypeAccessors.options.get = function() {
    return this._options || {
      duration: 500,
      easing: "swing"
    };
  };
  prototypeAccessors.options.set = function(value) {
    this._options = value;
  };
  Animation2.prototype.setup = function setup() {
  };
  Animation2.prototype.step = function step() {
  };
  Animation2.prototype.play = function play() {
    var this$1 = this;
    var options2 = this.options;
    var duration = options2.duration;
    var delay = options2.delay;
    if (delay === void 0) delay = 0;
    var easing = easing_functions_exports[options2.easing];
    var start = now_default() + delay;
    var finish = start + duration;
    if (duration === 0) {
      this.step(1);
      this.abort();
    } else {
      setTimeout(function() {
        var loop = function() {
          if (this$1._stopped) {
            return;
          }
          var wallTime = now_default();
          var time = limitValue(wallTime - start, 0, duration);
          var position = time / duration;
          var easingPosition = easing(position, time, 0, 1, duration);
          this$1.step(easingPosition);
          if (wallTime < finish) {
            animation_frame_default(loop);
          } else {
            this$1.abort();
          }
        };
        loop();
      }, delay);
    }
  };
  Animation2.prototype.abort = function abort() {
    this._stopped = true;
  };
  Animation2.prototype.destroy = function destroy2() {
    this.abort();
  };
  Object.defineProperties(Animation2.prototype, prototypeAccessors);
  return Animation2;
}(class_default);
var animation_default = Animation;

// node_modules/@progress/kendo-drawing/dist/es/parsing/path-parser.js
var instance2;
var PathParser = function(Class3) {
  function PathParser2() {
    Class3.apply(this, arguments);
  }
  if (Class3) PathParser2.__proto__ = Class3;
  PathParser2.prototype = Object.create(Class3 && Class3.prototype);
  PathParser2.prototype.constructor = PathParser2;
  var staticAccessors = { current: { configurable: true } };
  staticAccessors.current.get = function() {
    if (!instance2) {
      instance2 = new PathParser2();
    }
    return instance2;
  };
  PathParser2.prototype.parse = function parse3(str, options2) {
    var multiPath = new MultiPath(options2);
    return parse_path_default(multiPath, str);
  };
  Object.defineProperties(PathParser2, staticAccessors);
  return PathParser2;
}(class_default);
var path_parser_default = PathParser;

// node_modules/@progress/kendo-drawing/dist/es/svg/path-node.js
var ATTRIBUTE_MAP = {
  "fill.opacity": "fill-opacity",
  "stroke.color": "stroke",
  "stroke.width": "stroke-width",
  "stroke.opacity": "stroke-opacity"
};
var PathNode2 = function(Node3) {
  function PathNode3() {
    Node3.apply(this, arguments);
  }
  if (Node3) PathNode3.__proto__ = Node3;
  PathNode3.prototype = Object.create(Node3 && Node3.prototype);
  PathNode3.prototype.constructor = PathNode3;
  PathNode3.prototype.geometryChange = function geometryChange() {
    this.attr("d", this.renderData());
    this.invalidate();
  };
  PathNode3.prototype.optionsChange = function optionsChange(e) {
    switch (e.field) {
      case "fill":
        if (e.value) {
          this.allAttr(this.mapFill(e.value));
        } else {
          this.removeAttr("fill");
        }
        break;
      case "fill.color":
        this.allAttr(this.mapFill({ color: e.value }));
        break;
      case "stroke":
        if (e.value) {
          this.allAttr(this.mapStroke(e.value));
        } else {
          this.removeAttr("stroke");
        }
        break;
      case "transform":
        this.transformChange(e.value);
        break;
      default:
        var name2 = ATTRIBUTE_MAP[e.field];
        if (name2) {
          this.attr(name2, e.value);
        }
        break;
    }
    this.accessibilityOptionsChange(e);
    Node3.prototype.optionsChange.call(this, e);
  };
  PathNode3.prototype.content = function content() {
    if (this.element) {
      this.element.textContent = this.srcElement.content();
    }
  };
  PathNode3.prototype.renderData = function renderData() {
    return this.srcElement.toString(POINT_DIGITS) || void 0;
  };
  PathNode3.prototype.mapStroke = function mapStroke(stroke) {
    var attrs = [];
    if (stroke && !isTransparent(stroke.color)) {
      attrs.push(["stroke", stroke.color]);
      attrs.push(["stroke-width", stroke.width]);
      attrs.push(["stroke-linecap", this.renderLinecap(stroke)]);
      attrs.push(["stroke-linejoin", stroke.lineJoin]);
      if (defined(stroke.opacity)) {
        attrs.push(["stroke-opacity", stroke.opacity]);
      }
      if (defined(stroke.dashType)) {
        attrs.push(["stroke-dasharray", this.renderDashType(stroke)]);
      }
    } else {
      attrs.push(["stroke", NONE]);
    }
    return attrs;
  };
  PathNode3.prototype.renderStroke = function renderStroke() {
    return renderAllAttr(
      this.mapStroke(this.srcElement.options.stroke)
    );
  };
  PathNode3.prototype.renderDashType = function renderDashType(stroke) {
    var dashType = stroke.dashType;
    var width = stroke.width;
    if (width === void 0) width = 1;
    if (dashType && dashType !== SOLID) {
      var dashArray = DASH_ARRAYS[dashType.toLowerCase()];
      var result = [];
      for (var i = 0; i < dashArray.length; i++) {
        result.push(dashArray[i] * width);
      }
      return result.join(" ");
    }
  };
  PathNode3.prototype.renderLinecap = function renderLinecap(stroke) {
    var dashType = stroke.dashType;
    var lineCap = stroke.lineCap;
    return dashType && dashType !== SOLID ? BUTT : lineCap;
  };
  PathNode3.prototype.mapFill = function mapFill(fill) {
    var attrs = [];
    if (!(fill && (fill.nodeType === "Gradient" || fill.nodeType === PATTERN))) {
      if (fill && !isTransparent(fill.color)) {
        attrs.push(["fill", fill.color]);
        if (defined(fill.opacity)) {
          attrs.push(["fill-opacity", fill.opacity]);
        }
      } else {
        attrs.push(["fill", NONE]);
      }
    }
    return attrs;
  };
  PathNode3.prototype.renderFill = function renderFill() {
    return renderAllAttr(
      this.mapFill(this.srcElement.options.fill)
    );
  };
  PathNode3.prototype.template = function template2() {
    return "<path " + this.renderId() + " " + this.renderStyle() + " " + this.renderOpacity() + " " + renderAttr("d", this.renderData()) + this.renderStroke() + this.renderFill() + this.renderDefinitions() + this.renderTransform() + this.renderClassName() + " " + this.renderRole() + this.renderAriaLabel() + " " + this.renderAriaRoleDescription() + this.renderAriaChecked() + " ></path>";
  };
  return PathNode3;
}(node_default2);
var path_node_default2 = PathNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/arc-node.js
var ArcNode2 = function(PathNode3) {
  function ArcNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) ArcNode3.__proto__ = PathNode3;
  ArcNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  ArcNode3.prototype.constructor = ArcNode3;
  ArcNode3.prototype.renderData = function renderData() {
    return this.srcElement.toPath().toString(POINT_DIGITS);
  };
  return ArcNode3;
}(path_node_default2);
var arc_node_default2 = ArcNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/circle-node.js
var CircleNode2 = function(PathNode3) {
  function CircleNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) CircleNode3.__proto__ = PathNode3;
  CircleNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  CircleNode3.prototype.constructor = CircleNode3;
  CircleNode3.prototype.geometryChange = function geometryChange() {
    var center = this.center();
    this.attr("cx", center.x);
    this.attr("cy", center.y);
    this.attr("r", this.radius());
    this.invalidate();
  };
  CircleNode3.prototype.center = function center() {
    return this.srcElement.geometry().center;
  };
  CircleNode3.prototype.radius = function radius() {
    return this.srcElement.geometry().radius;
  };
  CircleNode3.prototype.template = function template2() {
    return "<circle " + this.renderId() + " " + this.renderStyle() + " " + this.renderOpacity() + "cx='" + this.center().x + "' cy='" + this.center().y + "' r='" + this.radius() + "'" + this.renderStroke() + " " + this.renderFill() + " " + this.renderDefinitions() + this.renderClassName() + " " + this.renderRole() + this.renderAriaLabel() + " " + this.renderAriaRoleDescription() + this.renderAriaChecked() + " " + this.renderTransform() + " ></circle>";
  };
  return CircleNode3;
}(path_node_default2);
var circle_node_default2 = CircleNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/group-node.js
var GroupNode2 = function(Node3) {
  function GroupNode3() {
    Node3.apply(this, arguments);
  }
  if (Node3) GroupNode3.__proto__ = Node3;
  GroupNode3.prototype = Object.create(Node3 && Node3.prototype);
  GroupNode3.prototype.constructor = GroupNode3;
  GroupNode3.prototype.template = function template2() {
    return "<g" + (this.renderId() + this.renderTransform() + this.renderClassName() + this.renderStyle() + this.renderOpacity() + this.renderRole() + this.renderAriaLabel() + this.renderAriaRoleDescription() + this.renderAriaChecked() + this.renderDefinitions()) + ">" + this.renderChildren() + "</g>";
  };
  GroupNode3.prototype.optionsChange = function optionsChange(e) {
    var field = e.field;
    var value = e.value;
    if (field === "transform") {
      this.transformChange(value);
    }
    this.accessibilityOptionsChange(e);
    Node3.prototype.optionsChange.call(this, e);
  };
  return GroupNode3;
}(node_default2);
var group_node_default2 = GroupNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/image-node.js
var ImageNode2 = function(PathNode3) {
  function ImageNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) ImageNode3.__proto__ = PathNode3;
  ImageNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  ImageNode3.prototype.constructor = ImageNode3;
  ImageNode3.prototype.geometryChange = function geometryChange() {
    this.allAttr(this.mapPosition());
    this.invalidate();
  };
  ImageNode3.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "src") {
      this.allAttr(this.mapSource());
    }
    PathNode3.prototype.optionsChange.call(this, e);
  };
  ImageNode3.prototype.mapPosition = function mapPosition() {
    var rect = this.srcElement.rect();
    var tl = rect.topLeft();
    return [
      ["x", tl.x],
      ["y", tl.y],
      ["width", rect.width() + "px"],
      ["height", rect.height() + "px"]
    ];
  };
  ImageNode3.prototype.renderPosition = function renderPosition() {
    return renderAllAttr(this.mapPosition());
  };
  ImageNode3.prototype.mapSource = function mapSource(encode) {
    var src = this.srcElement.src();
    if (encode) {
      src = htmlEncode(src);
    }
    return [["xlink:href", src]];
  };
  ImageNode3.prototype.renderSource = function renderSource() {
    return renderAllAttr(this.mapSource(true));
  };
  ImageNode3.prototype.template = function template2() {
    return "<image preserveAspectRatio='none' " + this.renderId() + " " + this.renderStyle() + " " + this.renderTransform() + " " + this.renderOpacity() + this.renderPosition() + " " + this.renderSource() + " " + this.renderDefinitions() + this.renderClassName() + " " + this.renderRole() + this.renderAriaLabel() + " " + this.renderAriaRoleDescription() + this.renderAriaChecked() + " ></image>";
  };
  return ImageNode3;
}(path_node_default2);
var image_node_default2 = ImageNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/multi-path-node.js
var MultiPathNode2 = function(PathNode3) {
  function MultiPathNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) MultiPathNode3.__proto__ = PathNode3;
  MultiPathNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  MultiPathNode3.prototype.constructor = MultiPathNode3;
  MultiPathNode3.prototype.renderData = function renderData() {
    return this.srcElement.toString(POINT_DIGITS) || "undefined";
  };
  return MultiPathNode3;
}(path_node_default2);
var multi_path_node_default2 = MultiPathNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/rect-node.js
var RectNode2 = function(PathNode3) {
  function RectNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) RectNode3.__proto__ = PathNode3;
  RectNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  RectNode3.prototype.constructor = RectNode3;
  RectNode3.prototype.geometryChange = function geometryChange() {
    var geometry = this.srcElement.geometry();
    this.attr("x", geometry.origin.x);
    this.attr("y", geometry.origin.y);
    this.attr("width", geometry.size.width);
    this.attr("height", geometry.size.height);
    this.attr("rx", geometry.cornerRadius[0]);
    this.attr("ry", geometry.cornerRadius[1]);
    this.invalidate();
  };
  RectNode3.prototype.size = function size() {
    return this.srcElement.geometry().size;
  };
  RectNode3.prototype.origin = function origin() {
    return this.srcElement.geometry().origin;
  };
  RectNode3.prototype.rx = function rx() {
    return this.srcElement.geometry().cornerRadius[0];
  };
  RectNode3.prototype.ry = function ry() {
    return this.srcElement.geometry().cornerRadius[1];
  };
  RectNode3.prototype.template = function template2() {
    return "<rect " + this.renderId() + " " + this.renderStyle() + " " + this.renderOpacity() + " x='" + this.origin().x + "' y='" + this.origin().y + "' rx='" + this.rx() + "' ry='" + this.ry() + "' width='" + this.size().width + "' height='" + this.size().height + "' " + this.renderStroke() + " " + this.renderFill() + " " + this.renderDefinitions() + " " + this.renderTransform() + this.renderClassName() + " " + this.renderRole() + this.renderAriaLabel() + " " + this.renderAriaRoleDescription() + this.renderAriaChecked() + " />";
  };
  return RectNode3;
}(path_node_default2);
var rect_node_default2 = RectNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/text-node.js
var ENTITY_REGEX = /&(?:[a-zA-Z]+|#\d+);/g;
function decodeEntities(text) {
  if (!text || typeof text !== "string" || !ENTITY_REGEX.test(text)) {
    return text;
  }
  var element = decodeEntities._element;
  ENTITY_REGEX.lastIndex = 0;
  return text.replace(ENTITY_REGEX, function(match) {
    element.innerHTML = match;
    return element.textContent || element.innerText;
  });
}
if (typeof document !== "undefined") {
  decodeEntities._element = document.createElement("span");
}
var TextNode2 = function(PathNode3) {
  function TextNode3() {
    PathNode3.apply(this, arguments);
  }
  if (PathNode3) TextNode3.__proto__ = PathNode3;
  TextNode3.prototype = Object.create(PathNode3 && PathNode3.prototype);
  TextNode3.prototype.constructor = TextNode3;
  TextNode3.prototype.geometryChange = function geometryChange() {
    var pos = this.pos();
    this.attr("x", pos.x);
    this.attr("y", pos.y);
    this.invalidate();
  };
  TextNode3.prototype.optionsChange = function optionsChange(e) {
    if (e.field === "font") {
      this.attr("style", renderStyle(this.mapStyle()));
      this.geometryChange();
    } else if (e.field === "content") {
      PathNode3.prototype.content.call(this, this.srcElement.content());
    }
    PathNode3.prototype.optionsChange.call(this, e);
  };
  TextNode3.prototype.mapStyle = function mapStyle(encode) {
    var style = PathNode3.prototype.mapStyle.call(this, encode);
    var font = this.srcElement.options.font;
    if (encode) {
      font = htmlEncode(font);
    }
    style.push(["font", font], ["white-space", "pre"]);
    return style;
  };
  TextNode3.prototype.pos = function pos() {
    var pos2 = this.srcElement.position();
    var size = this.srcElement.measure();
    return pos2.clone().setY(pos2.y + size.baseline);
  };
  TextNode3.prototype.renderContent = function renderContent() {
    var content = this.srcElement.content();
    content = decodeEntities(content);
    content = htmlEncode(content);
    return normalizeText(content);
  };
  TextNode3.prototype.renderTextAnchor = function renderTextAnchor() {
    var anchor;
    if ((this.options || {}).rtl && !(support_default.browser.msie || support_default.browser.edge)) {
      anchor = "end";
    }
    return renderAttr("text-anchor", anchor);
  };
  TextNode3.prototype.renderPaintOrder = function renderPaintOrder() {
    var paintOrder = this.srcElement.options.paintOrder;
    return paintOrder ? renderAttr("paint-order", paintOrder) : "";
  };
  TextNode3.prototype.template = function template2() {
    return "<text " + this.renderId() + " " + this.renderTextAnchor() + " " + this.renderStyle() + " " + this.renderOpacity() + "x='" + this.pos().x + "' y='" + this.pos().y + "' " + this.renderStroke() + " " + this.renderTransform() + " " + this.renderDefinitions() + this.renderPaintOrder() + this.renderFill() + this.renderClassName() + " " + this.renderRole() + this.renderAriaLabel() + " " + this.renderAriaRoleDescription() + this.renderAriaChecked() + ">" + this.renderContent() + "</text>";
  };
  return TextNode3;
}(path_node_default2);
var text_node_default2 = TextNode2;

// node_modules/@progress/kendo-drawing/dist/es/svg/surface.js
node_map_default2.Arc = arc_node_default2;
node_map_default2.Circle = circle_node_default2;
node_map_default2.Group = group_node_default2;
node_map_default2.Image = image_node_default2;
node_map_default2.MultiPath = multi_path_node_default2;
node_map_default2.Path = path_node_default2;
node_map_default2.Rect = rect_node_default2;
node_map_default2.Text = text_node_default2;
var RTL = "rtl";
function alignToScreen(element) {
  var ctm;
  try {
    ctm = element.getScreenCTM ? element.getScreenCTM() : null;
  } catch (e) {
  }
  if (ctm) {
    var left = -ctm.e % 1;
    var top = -ctm.f % 1;
    var style = element.style;
    if (left !== 0 || top !== 0) {
      style.left = left + "px";
      style.top = top + "px";
    }
  }
}
var Surface3 = function(BaseSurface) {
  function Surface5(element, options2) {
    BaseSurface.call(this, element, options2);
    this._root = new root_node_default2(Object.assign({
      rtl: elementStyles(element, "direction").direction === RTL
    }, this.options));
    render_svg_default(this.element, this._template(""));
    this._rootElement = this.element.firstElementChild;
    this._rootElement.style.width = "100%";
    this._rootElement.style.height = "100%";
    this._rootElement.style.overflow = "hidden";
    alignToScreen(this._rootElement);
    this._root.attachTo(this._rootElement);
    bindEvents(this.element, {
      click: this._click,
      mouseover: this._mouseenter,
      mouseout: this._mouseleave,
      mousemove: this._mousemove
    });
    this.resize();
  }
  if (BaseSurface) Surface5.__proto__ = BaseSurface;
  Surface5.prototype = Object.create(BaseSurface && BaseSurface.prototype);
  Surface5.prototype.constructor = Surface5;
  var prototypeAccessors = { type: { configurable: true } };
  prototypeAccessors.type.get = function() {
    return "svg";
  };
  Surface5.prototype.destroy = function destroy2() {
    if (this._root) {
      this._root.destroy();
      this._root = null;
      this._rootElement = null;
      unbindEvents(this.element, {
        click: this._click,
        mouseover: this._mouseenter,
        mouseout: this._mouseleave,
        mousemove: this._mousemove
      });
    }
    BaseSurface.prototype.destroy.call(this);
  };
  Surface5.prototype.translate = function translate(offset) {
    var viewBox = Math.round(offset.x) + " " + Math.round(offset.y) + " " + this._size.width + " " + this._size.height;
    this._offset = offset;
    this._rootElement.setAttribute("viewBox", viewBox);
  };
  Surface5.prototype.draw = function draw(element) {
    BaseSurface.prototype.draw.call(this, element);
    this._root.load([element]);
  };
  Surface5.prototype.clear = function clear2() {
    BaseSurface.prototype.clear.call(this);
    this._root.clear();
  };
  Surface5.prototype.svg = function svg() {
    return "<?xml version='1.0' ?>" + this._template();
  };
  Surface5.prototype.exportVisual = function exportVisual() {
    var ref = this;
    var visual = ref._visual;
    var offset = ref._offset;
    if (offset) {
      var wrap2 = new group_default();
      wrap2.children.push(visual);
      wrap2.transform(
        transform().translate(-offset.x, -offset.y)
      );
      visual = wrap2;
    }
    return visual;
  };
  Surface5.prototype._resize = function _resize() {
    if (this._offset) {
      this.translate(this._offset);
    }
  };
  Surface5.prototype._template = function _template(svgStyles) {
    var styles = typeof svgStyles === "string" ? svgStyles : "style='width: 100%; height: 100%; overflow: hidden;' ";
    return "<svg " + styles + "xmlns='" + SVG_NS + "' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'>" + this._root.render() + "</svg>";
  };
  Object.defineProperties(Surface5.prototype, prototypeAccessors);
  return Surface5;
}(surface_default);
var surface_default3 = Surface3;

// node_modules/@progress/kendo-drawing/dist/es/surface-factory.js
var instance3;
var support2;
var hasDocument = function() {
  return typeof document !== "undefined";
};
var supportsCanvas = function() {
  return hasDocument() && document.createElement("canvas").getContext;
};
var supportsSVG = function() {
  return hasDocument() && document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1");
};
var SurfaceFactory = function(Class3) {
  function SurfaceFactory2() {
    Class3.call(this);
    this._items = [{
      name: "svg",
      type: surface_default3
    }, {
      name: "canvas",
      type: surface_default2
    }];
  }
  if (Class3) SurfaceFactory2.__proto__ = Class3;
  SurfaceFactory2.prototype = Object.create(Class3 && Class3.prototype);
  SurfaceFactory2.prototype.constructor = SurfaceFactory2;
  var staticAccessors = { support: { configurable: true }, current: { configurable: true } };
  staticAccessors.support.get = function() {
    if (!support2) {
      support2 = {
        canvas: supportsCanvas(),
        svg: supportsSVG()
      };
    }
    return support2;
  };
  staticAccessors.current.get = function() {
    if (!instance3) {
      instance3 = new SurfaceFactory2();
    }
    return instance3;
  };
  SurfaceFactory2.prototype.create = function create(element, options2) {
    var items = this._items;
    var match = items[0];
    if (options2 && options2.type) {
      var preferred = options2.type.toLowerCase();
      for (var i = 0; i < items.length; i++) {
        if (items[i].name === preferred) {
          match = items[i];
          break;
        }
      }
    }
    if (match) {
      return new match.type(element, options2);
    }
    logToConsole(
      "Warning: Unable to create Kendo UI Drawing Surface. Possible causes:\n- The browser does not support SVG and Canvas. User agent: " + navigator.userAgent
    );
  };
  Object.defineProperties(SurfaceFactory2, staticAccessors);
  return SurfaceFactory2;
}(class_default);
var surface_factory_default = SurfaceFactory;

// node_modules/@progress/kendo-drawing/dist/es/surface.js
var Surface4 = function(BaseSurface) {
  function Surface5() {
    BaseSurface.apply(this, arguments);
  }
  if (BaseSurface) Surface5.__proto__ = BaseSurface;
  Surface5.prototype = Object.create(BaseSurface && BaseSurface.prototype);
  Surface5.prototype.constructor = Surface5;
  var staticAccessors = { support: { configurable: true } };
  staticAccessors.support.get = function() {
    return surface_factory_default.support;
  };
  Surface5.create = function create(element, options2) {
    return surface_factory_default.current.create(element, options2);
  };
  Object.defineProperties(Surface5, staticAccessors);
  return Surface5;
}(surface_default);
var surface_default4 = Surface4;

// node_modules/@progress/kendo-drawing/dist/es/svg.js
var svg_exports = {};
__export(svg_exports, {
  ArcNode: () => arc_node_default2,
  CircleNode: () => circle_node_default2,
  ClipNode: () => clip_node_default,
  DefinitionNode: () => definition_node_default,
  GradientStopNode: () => gradient_stop_node_default,
  GroupNode: () => group_node_default2,
  ImageNode: () => image_node_default2,
  LinearGradientNode: () => linear_gradient_node_default,
  MultiPathNode: () => multi_path_node_default2,
  Node: () => node_default2,
  PathNode: () => path_node_default2,
  RadialGradientNode: () => radial_gradient_node_default,
  RectNode: () => rect_node_default2,
  RootNode: () => root_node_default2,
  Surface: () => surface_default3,
  TextNode: () => text_node_default2,
  exportGroup: () => exportGroup
});

// node_modules/@progress/kendo-drawing/dist/es/canvas.js
var canvas_exports = {};
__export(canvas_exports, {
  ArcNode: () => arc_node_default,
  CircleNode: () => circle_node_default,
  GroupNode: () => group_node_default,
  ImageNode: () => image_node_default,
  MultiPathNode: () => multi_path_node_default,
  Node: () => node_default,
  PathNode: () => path_node_default,
  RectNode: () => rect_node_default,
  RootNode: () => root_node_default,
  Surface: () => surface_default2,
  TextNode: () => text_node_default
});

// node_modules/@progress/kendo-drawing/dist/es/pdf/utils.js
var HAS_TYPED_ARRAYS = typeof Uint8Array !== "undefined" && support_default.browser && (!support_default.browser.msie || support_default.browser.version > 9);
var BASE64 = /* @__PURE__ */ function() {
  var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  return {
    decode: function(str) {
      var input = str.replace(/[^A-Za-z0-9\+\/\=]/g, ""), i = 0, n = input.length, output = [];
      while (i < n) {
        var enc1 = keyStr.indexOf(input.charAt(i++));
        var enc2 = keyStr.indexOf(input.charAt(i++));
        var enc3 = keyStr.indexOf(input.charAt(i++));
        var enc4 = keyStr.indexOf(input.charAt(i++));
        var chr1 = enc1 << 2 | enc2 >>> 4;
        var chr2 = (enc2 & 15) << 4 | enc3 >>> 2;
        var chr3 = (enc3 & 3) << 6 | enc4;
        output.push(chr1);
        if (enc3 != 64) {
          output.push(chr2);
        }
        if (enc4 != 64) {
          output.push(chr3);
        }
      }
      return output;
    },
    encode: function(bytes) {
      var i = 0, n = bytes.length;
      var output = "";
      while (i < n) {
        var chr1 = bytes[i++];
        var chr2 = bytes[i++];
        var chr3 = bytes[i++];
        var enc1 = chr1 >>> 2;
        var enc2 = (chr1 & 3) << 4 | chr2 >>> 4;
        var enc3 = (chr2 & 15) << 2 | chr3 >>> 6;
        var enc4 = chr3 & 63;
        if (i - n == 2) {
          enc3 = enc4 = 64;
        } else if (i - n == 1) {
          enc4 = 64;
        }
        output += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
      }
      return output;
    }
  };
}();
function BinaryStream(data) {
  var offset = 0, length = 0;
  if (data == null) {
    data = HAS_TYPED_ARRAYS ? new Uint8Array(256) : [];
  } else {
    length = data.length;
  }
  var ensure = HAS_TYPED_ARRAYS ? function(len) {
    if (len >= data.length) {
      var tmp = new Uint8Array(Math.max(len + 256, data.length * 2));
      tmp.set(data, 0);
      data = tmp;
    }
  } : function() {
  };
  var get = HAS_TYPED_ARRAYS ? function() {
    return new Uint8Array(data.buffer, 0, length);
  } : function() {
    return data;
  };
  var write = HAS_TYPED_ARRAYS ? function(bytes) {
    if (typeof bytes == "string") {
      return writeString(bytes);
    }
    var len = bytes.length;
    ensure(offset + len);
    data.set(bytes, offset);
    offset += len;
    if (offset > length) {
      length = offset;
    }
  } : function(bytes) {
    if (typeof bytes == "string") {
      return writeString(bytes);
    }
    for (var i = 0; i < bytes.length; ++i) {
      writeByte(bytes[i]);
    }
  };
  var slice3 = HAS_TYPED_ARRAYS ? function(start, length2) {
    if (data.buffer.slice) {
      return new Uint8Array(data.buffer.slice(start, start + length2));
    } else {
      var x = new Uint8Array(length2);
      x.set(new Uint8Array(data.buffer, start, length2));
      return x;
    }
  } : function(start, length2) {
    return data.slice(start, start + length2);
  };
  function eof() {
    return offset >= length;
  }
  function readByte() {
    return offset < length ? data[offset++] : 0;
  }
  function writeByte(b) {
    ensure(offset);
    data[offset++] = b & 255;
    if (offset > length) {
      length = offset;
    }
  }
  function readShort() {
    return readByte() << 8 | readByte();
  }
  function writeShort(w) {
    writeByte(w >> 8);
    writeByte(w);
  }
  function readShort_() {
    var w = readShort();
    return w >= 32768 ? w - 65536 : w;
  }
  function writeShort_(w) {
    writeShort(w < 0 ? w + 65536 : w);
  }
  function readLong() {
    return readShort() * 65536 + readShort();
  }
  function writeLong(w) {
    writeShort(w >>> 16 & 65535);
    writeShort(w & 65535);
  }
  function readLong_() {
    var w = readLong();
    return w >= 2147483648 ? w - 4294967296 : w;
  }
  function writeLong_(w) {
    writeLong(w < 0 ? w + 4294967296 : w);
  }
  function readFixed() {
    return readLong() / 65536;
  }
  function writeFixed(f) {
    writeLong(Math.round(f * 65536));
  }
  function readFixed_() {
    return readLong_() / 65536;
  }
  function writeFixed_(f) {
    writeLong_(Math.round(f * 65536));
  }
  function read(len) {
    return times(len, readByte);
  }
  function readString(len) {
    return String.fromCharCode.apply(String, read(len));
  }
  function writeString(str) {
    for (var i = 0; i < str.length; ++i) {
      writeByte(str.charCodeAt(i));
    }
  }
  function times(n, reader) {
    for (var ret = new Array(n), i = 0; i < n; ++i) {
      ret[i] = reader();
    }
    return ret;
  }
  var stream2 = {
    eof,
    readByte,
    writeByte,
    readShort,
    writeShort,
    readLong,
    writeLong,
    readFixed,
    writeFixed,
    // signed numbers.
    readShort_,
    writeShort_,
    readLong_,
    writeLong_,
    readFixed_,
    writeFixed_,
    read,
    write,
    readString,
    writeString,
    times,
    get,
    slice: slice3,
    offset: function(pos) {
      if (pos != null) {
        offset = pos;
        return stream2;
      }
      return offset;
    },
    skip: function(nbytes) {
      offset += nbytes;
    },
    toString: function() {
      throw new Error("FIX CALLER.  BinaryStream is no longer convertible to string!");
    },
    length: function() {
      return length;
    },
    saveExcursion: function(f) {
      var pos = offset;
      try {
        return f();
      } finally {
        offset = pos;
      }
    },
    writeBase64: function(base64) {
      if (window.atob) {
        writeString(window.atob(base64));
      } else {
        write(BASE64.decode(base64));
      }
    },
    base64: function() {
      return BASE64.encode(get());
    }
  };
  return stream2;
}
function ucs2decode(string) {
  var output = [], counter = 0, length = string.length, value, extra;
  while (counter < length) {
    value = string.charCodeAt(counter++);
    if (value >= 55296 && value <= 56319 && counter < length) {
      extra = string.charCodeAt(counter++);
      if ((extra & 64512) == 56320) {
        output.push(((value & 1023) << 10) + (extra & 1023) + 65536);
      } else {
        output.push(value);
        counter--;
      }
    } else {
      output.push(value);
    }
  }
  return output;
}
function ucs2encode(array) {
  return array.map(function(value) {
    var output = "";
    if (value > 65535) {
      value -= 65536;
      output += String.fromCharCode(value >>> 10 & 1023 | 55296);
      value = 56320 | value & 1023;
    }
    output += String.fromCharCode(value);
    return output;
  }).join("");
}
function atobUint8Array(base64) {
  var data = window.atob(base64);
  var result = new Uint8Array(data.length);
  for (var idx = 0; idx < data.length; idx++) {
    result[idx] = data.charCodeAt(idx);
  }
  return result;
}
function createUint8Array(data) {
  var result = new Uint8Array(data.length);
  for (var idx = 0; idx < data.length; idx++) {
    result[idx] = data[idx];
  }
  return result;
}
function base64ToUint8Array(base64) {
  if (window.atob) {
    return atobUint8Array(base64);
  }
  return createUint8Array(BASE64.decode(base64));
}

// node_modules/@progress/kendo-drawing/dist/es/pdf/ttf.js
function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function sortedKeys(obj) {
  return Object.keys(obj).sort(function(a, b) {
    return a - b;
  }).map(parseFloat);
}
var Directory = function Directory2(data) {
  this.raw = data;
  this.scalerType = data.readLong();
  this.tableCount = data.readShort();
  this.searchRange = data.readShort();
  this.entrySelector = data.readShort();
  this.rangeShift = data.readShort();
  var tables = this.tables = {};
  for (var i = 0; i < this.tableCount; ++i) {
    var entry = {
      tag: data.readString(4),
      checksum: data.readLong(),
      offset: data.readLong(),
      length: data.readLong()
    };
    tables[entry.tag] = entry;
  }
};
Directory.prototype.readTable = function readTable(name2, Ctor) {
  var def = this.tables[name2];
  if (!def) {
    throw new Error("Table " + name2 + " not found in directory");
  }
  return this[name2] = def.table = new Ctor(this, def);
};
Directory.prototype.render = function render(tables) {
  var this$1 = this;
  var tableCount = Object.keys(tables).length;
  var maxpow2 = Math.pow(2, Math.floor(Math.log(tableCount) / Math.LN2));
  var searchRange = maxpow2 * 16;
  var entrySelector = Math.floor(Math.log(maxpow2) / Math.LN2);
  var rangeShift = tableCount * 16 - searchRange;
  var out = BinaryStream();
  out.writeLong(this.scalerType);
  out.writeShort(tableCount);
  out.writeShort(searchRange);
  out.writeShort(entrySelector);
  out.writeShort(rangeShift);
  var directoryLength = tableCount * 16;
  var offset = out.offset() + directoryLength;
  var headOffset = null;
  var tableData = BinaryStream();
  for (var tag in tables) {
    if (hasOwnProperty(tables, tag)) {
      var table = tables[tag];
      out.writeString(tag);
      out.writeLong(this$1.checksum(table));
      out.writeLong(offset);
      out.writeLong(table.length);
      tableData.write(table);
      if (tag == "head") {
        headOffset = offset;
      }
      offset += table.length;
      while (offset % 4) {
        tableData.writeByte(0);
        offset++;
      }
    }
  }
  out.write(tableData.get());
  var sum = this.checksum(out.get());
  var adjustment = 2981146554 - sum;
  out.offset(headOffset + 8);
  out.writeLong(adjustment);
  return out.get();
};
Directory.prototype.checksum = function checksum(data) {
  data = BinaryStream(data);
  var sum = 0;
  while (!data.eof()) {
    sum += data.readLong();
  }
  return sum & 4294967295;
};
var Table = function Table2(file, def) {
  this.definition = def;
  this.length = def.length;
  this.offset = def.offset;
  this.file = file;
  this.rawData = file.raw;
  this.parse(file.raw);
};
Table.prototype.raw = function raw() {
  return this.rawData.slice(this.offset, this.length);
};
Table.prototype.parse = function parse() {
};
var HeadTable = function(Table3) {
  function HeadTable2() {
    Table3.apply(this, arguments);
  }
  if (Table3) HeadTable2.__proto__ = Table3;
  HeadTable2.prototype = Object.create(Table3 && Table3.prototype);
  HeadTable2.prototype.constructor = HeadTable2;
  HeadTable2.prototype.parse = function parse3(data) {
    data.offset(this.offset);
    this.version = data.readLong();
    this.revision = data.readLong();
    this.checkSumAdjustment = data.readLong();
    this.magicNumber = data.readLong();
    this.flags = data.readShort();
    this.unitsPerEm = data.readShort();
    this.created = data.read(8);
    this.modified = data.read(8);
    this.xMin = data.readShort_();
    this.yMin = data.readShort_();
    this.xMax = data.readShort_();
    this.yMax = data.readShort_();
    this.macStyle = data.readShort();
    this.lowestRecPPEM = data.readShort();
    this.fontDirectionHint = data.readShort_();
    this.indexToLocFormat = data.readShort_();
    this.glyphDataFormat = data.readShort_();
  };
  HeadTable2.prototype.render = function render4(indexToLocFormat) {
    var out = BinaryStream();
    out.writeLong(this.version);
    out.writeLong(this.revision);
    out.writeLong(0);
    out.writeLong(this.magicNumber);
    out.writeShort(this.flags);
    out.writeShort(this.unitsPerEm);
    out.write(this.created);
    out.write(this.modified);
    out.writeShort_(this.xMin);
    out.writeShort_(this.yMin);
    out.writeShort_(this.xMax);
    out.writeShort_(this.yMax);
    out.writeShort(this.macStyle);
    out.writeShort(this.lowestRecPPEM);
    out.writeShort_(this.fontDirectionHint);
    out.writeShort_(indexToLocFormat);
    out.writeShort_(this.glyphDataFormat);
    return out.get();
  };
  return HeadTable2;
}(Table);
var LocaTable = function(Table3) {
  function LocaTable2() {
    Table3.apply(this, arguments);
  }
  if (Table3) LocaTable2.__proto__ = Table3;
  LocaTable2.prototype = Object.create(Table3 && Table3.prototype);
  LocaTable2.prototype.constructor = LocaTable2;
  LocaTable2.prototype.parse = function parse3(data) {
    data.offset(this.offset);
    var format = this.file.head.indexToLocFormat;
    if (format === 0) {
      this.offsets = data.times(this.length / 2, function() {
        return 2 * data.readShort();
      });
    } else {
      this.offsets = data.times(this.length / 4, data.readLong);
    }
  };
  LocaTable2.prototype.offsetOf = function offsetOf(id) {
    return this.offsets[id];
  };
  LocaTable2.prototype.lengthOf = function lengthOf(id) {
    return this.offsets[id + 1] - this.offsets[id];
  };
  LocaTable2.prototype.render = function render4(offsets) {
    var out = BinaryStream();
    var needsLongFormat = offsets[offsets.length - 1] > 65535;
    for (var i = 0; i < offsets.length; ++i) {
      if (needsLongFormat) {
        out.writeLong(offsets[i]);
      } else {
        out.writeShort(offsets[i] / 2);
      }
    }
    return {
      format: needsLongFormat ? 1 : 0,
      table: out.get()
    };
  };
  return LocaTable2;
}(Table);
var HheaTable = function(Table3) {
  function HheaTable2() {
    Table3.apply(this, arguments);
  }
  if (Table3) HheaTable2.__proto__ = Table3;
  HheaTable2.prototype = Object.create(Table3 && Table3.prototype);
  HheaTable2.prototype.constructor = HheaTable2;
  HheaTable2.prototype.parse = function parse3(data) {
    data.offset(this.offset);
    this.version = data.readLong();
    this.ascent = data.readShort_();
    this.descent = data.readShort_();
    this.lineGap = data.readShort_();
    this.advanceWidthMax = data.readShort();
    this.minLeftSideBearing = data.readShort_();
    this.minRightSideBearing = data.readShort_();
    this.xMaxExtent = data.readShort_();
    this.caretSlopeRise = data.readShort_();
    this.caretSlopeRun = data.readShort_();
    this.caretOffset = data.readShort_();
    data.skip(4 * 2);
    this.metricDataFormat = data.readShort_();
    this.numOfLongHorMetrics = data.readShort();
  };
  HheaTable2.prototype.render = function render4(ids) {
    var out = BinaryStream();
    out.writeLong(this.version);
    out.writeShort_(this.ascent);
    out.writeShort_(this.descent);
    out.writeShort_(this.lineGap);
    out.writeShort(this.advanceWidthMax);
    out.writeShort_(this.minLeftSideBearing);
    out.writeShort_(this.minRightSideBearing);
    out.writeShort_(this.xMaxExtent);
    out.writeShort_(this.caretSlopeRise);
    out.writeShort_(this.caretSlopeRun);
    out.writeShort_(this.caretOffset);
    out.write([0, 0, 0, 0, 0, 0, 0, 0]);
    out.writeShort_(this.metricDataFormat);
    out.writeShort(ids.length);
    return out.get();
  };
  return HheaTable2;
}(Table);
var MaxpTable = function(Table3) {
  function MaxpTable2() {
    Table3.apply(this, arguments);
  }
  if (Table3) MaxpTable2.__proto__ = Table3;
  MaxpTable2.prototype = Object.create(Table3 && Table3.prototype);
  MaxpTable2.prototype.constructor = MaxpTable2;
  MaxpTable2.prototype.parse = function parse3(data) {
    data.offset(this.offset);
    this.version = data.readLong();
    this.numGlyphs = data.readShort();
    this.maxPoints = data.readShort();
    this.maxContours = data.readShort();
    this.maxComponentPoints = data.readShort();
    this.maxComponentContours = data.readShort();
    this.maxZones = data.readShort();
    this.maxTwilightPoints = data.readShort();
    this.maxStorage = data.readShort();
    this.maxFunctionDefs = data.readShort();
    this.maxInstructionDefs = data.readShort();
    this.maxStackElements = data.readShort();
    this.maxSizeOfInstructions = data.readShort();
    this.maxComponentElements = data.readShort();
    this.maxComponentDepth = data.readShort();
  };
  MaxpTable2.prototype.render = function render4(glyphIds2) {
    var out = BinaryStream();
    out.writeLong(this.version);
    out.writeShort(glyphIds2.length);
    out.writeShort(this.maxPoints);
    out.writeShort(this.maxContours);
    out.writeShort(this.maxComponentPoints);
    out.writeShort(this.maxComponentContours);
    out.writeShort(this.maxZones);
    out.writeShort(this.maxTwilightPoints);
    out.writeShort(this.maxStorage);
    out.writeShort(this.maxFunctionDefs);
    out.writeShort(this.maxInstructionDefs);
    out.writeShort(this.maxStackElements);
    out.writeShort(this.maxSizeOfInstructions);
    out.writeShort(this.maxComponentElements);
    out.writeShort(this.maxComponentDepth);
    return out.get();
  };
  return MaxpTable2;
}(Table);
var HmtxTable = function(Table3) {
  function HmtxTable2() {
    Table3.apply(this, arguments);
  }
  if (Table3) HmtxTable2.__proto__ = Table3;
  HmtxTable2.prototype = Object.create(Table3 && Table3.prototype);
  HmtxTable2.prototype.constructor = HmtxTable2;
  HmtxTable2.prototype.parse = function parse3(data) {
    data.offset(this.offset);
    var dir = this.file, hhea = dir.hhea;
    this.metrics = data.times(hhea.numOfLongHorMetrics, function() {
      return {
        advance: data.readShort(),
        lsb: data.readShort_()
      };
    });
    var lsbCount = dir.maxp.numGlyphs - dir.hhea.numOfLongHorMetrics;
    this.leftSideBearings = data.times(lsbCount, data.readShort_);
  };
  HmtxTable2.prototype.forGlyph = function forGlyph(id) {
    var metrics = this.metrics;
    var n = metrics.length;
    if (id < n) {
      return metrics[id];
    }
    return {
      advance: metrics[n - 1].advance,
      lsb: this.leftSideBearings[id - n]
    };
  };
  HmtxTable2.prototype.render = function render4(glyphIds2) {
    var this$1 = this;
    var out = BinaryStream();
    for (var i = 0; i < glyphIds2.length; ++i) {
      var m = this$1.forGlyph(glyphIds2[i]);
      out.writeShort(m.advance);
      out.writeShort_(m.lsb);
    }
    return out.get();
  };
  return HmtxTable2;
}(Table);
var GlyfTable = function() {
  var SimpleGlyph = function SimpleGlyph2(raw2) {
    this.raw = raw2;
  };
  var prototypeAccessors = { compound: { configurable: true } };
  prototypeAccessors.compound.get = function() {
    return false;
  };
  SimpleGlyph.prototype.render = function render4() {
    return this.raw.get();
  };
  Object.defineProperties(SimpleGlyph.prototype, prototypeAccessors);
  var ARG_1_AND_2_ARE_WORDS = 1;
  var WE_HAVE_A_SCALE = 8;
  var MORE_COMPONENTS = 32;
  var WE_HAVE_AN_X_AND_Y_SCALE = 64;
  var WE_HAVE_A_TWO_BY_TWO = 128;
  var CompoundGlyph = function CompoundGlyph2(data) {
    this.raw = data;
    var ids = this.glyphIds = [];
    var offsets = this.idOffsets = [];
    while (true) {
      var flags = data.readShort();
      offsets.push(data.offset());
      ids.push(data.readShort());
      if (!(flags & MORE_COMPONENTS)) {
        break;
      }
      data.skip(flags & ARG_1_AND_2_ARE_WORDS ? 4 : 2);
      if (flags & WE_HAVE_A_TWO_BY_TWO) {
        data.skip(8);
      } else if (flags & WE_HAVE_AN_X_AND_Y_SCALE) {
        data.skip(4);
      } else if (flags & WE_HAVE_A_SCALE) {
        data.skip(2);
      }
    }
  };
  var prototypeAccessors$1 = { compound: { configurable: true } };
  prototypeAccessors$1.compound.get = function() {
    return true;
  };
  CompoundGlyph.prototype.render = function render4(old2new) {
    var this$1 = this;
    var out = BinaryStream(this.raw.get());
    for (var i = 0; i < this.glyphIds.length; ++i) {
      var id = this$1.glyphIds[i];
      out.offset(this$1.idOffsets[i]);
      out.writeShort(old2new[id]);
    }
    return out.get();
  };
  Object.defineProperties(CompoundGlyph.prototype, prototypeAccessors$1);
  return function(Table3) {
    function anonymous() {
      Table3.apply(this, arguments);
    }
    if (Table3) anonymous.__proto__ = Table3;
    anonymous.prototype = Object.create(Table3 && Table3.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.parse = function parse3() {
      this.cache = {};
    };
    anonymous.prototype.glyphFor = function glyphFor(id) {
      var cache = this.cache;
      if (hasOwnProperty(cache, id)) {
        return cache[id];
      }
      var loca = this.file.loca;
      var length = loca.lengthOf(id);
      if (length === 0) {
        return cache[id] = null;
      }
      var data = this.rawData;
      var offset = this.offset + loca.offsetOf(id);
      var raw2 = BinaryStream(data.slice(offset, length));
      var numberOfContours = raw2.readShort_();
      var xMin = raw2.readShort_();
      var yMin = raw2.readShort_();
      var xMax = raw2.readShort_();
      var yMax = raw2.readShort_();
      var glyph = cache[id] = numberOfContours < 0 ? new CompoundGlyph(raw2) : new SimpleGlyph(raw2);
      glyph.numberOfContours = numberOfContours;
      glyph.xMin = xMin;
      glyph.yMin = yMin;
      glyph.xMax = xMax;
      glyph.yMax = yMax;
      return glyph;
    };
    anonymous.prototype.render = function render4(glyphs, oldIds, old2new) {
      var out = BinaryStream(), offsets = [];
      for (var i = 0; i < oldIds.length; ++i) {
        var id = oldIds[i];
        var glyph = glyphs[id];
        if (out.offset() % 2) {
          out.writeByte(0);
        }
        offsets.push(out.offset());
        if (glyph) {
          out.write(glyph.render(old2new));
        }
      }
      if (out.offset() % 2) {
        out.writeByte(0);
      }
      offsets.push(out.offset());
      return {
        table: out.get(),
        offsets
      };
    };
    return anonymous;
  }(Table);
}();
var NameTable = function() {
  var NameEntry = function NameEntry2(text, entry) {
    this.text = text;
    this.length = text.length;
    this.platformID = entry.platformID;
    this.platformSpecificID = entry.platformSpecificID;
    this.languageID = entry.languageID;
    this.nameID = entry.nameID;
  };
  return function(Table3) {
    function anonymous() {
      Table3.apply(this, arguments);
    }
    if (Table3) anonymous.__proto__ = Table3;
    anonymous.prototype = Object.create(Table3 && Table3.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.parse = function parse3(data) {
      data.offset(this.offset);
      data.readShort();
      var count = data.readShort();
      var stringOffset = this.offset + data.readShort();
      var nameRecords = data.times(count, function() {
        return {
          platformID: data.readShort(),
          platformSpecificID: data.readShort(),
          languageID: data.readShort(),
          nameID: data.readShort(),
          length: data.readShort(),
          offset: data.readShort() + stringOffset
        };
      });
      var strings = this.strings = {};
      for (var i = 0; i < nameRecords.length; ++i) {
        var rec = nameRecords[i];
        data.offset(rec.offset);
        var text = data.readString(rec.length);
        if (!strings[rec.nameID]) {
          strings[rec.nameID] = [];
        }
        strings[rec.nameID].push(new NameEntry(text, rec));
      }
      this.postscriptEntry = strings[6][0];
      this.postscriptName = this.postscriptEntry.text.replace(/[^\x20-\x7F]/g, "");
    };
    anonymous.prototype.render = function render4(psName) {
      var this$1 = this;
      var strings = this.strings;
      var strCount = 0;
      for (var i in strings) {
        if (hasOwnProperty(strings, i)) {
          strCount += strings[i].length;
        }
      }
      var out = BinaryStream();
      var strTable = BinaryStream();
      out.writeShort(0);
      out.writeShort(strCount);
      out.writeShort(6 + 12 * strCount);
      for (i in strings) {
        if (hasOwnProperty(strings, i)) {
          var list = i == 6 ? [
            new NameEntry(psName, this$1.postscriptEntry)
          ] : strings[i];
          for (var j = 0; j < list.length; ++j) {
            var str = list[j];
            out.writeShort(str.platformID);
            out.writeShort(str.platformSpecificID);
            out.writeShort(str.languageID);
            out.writeShort(str.nameID);
            out.writeShort(str.length);
            out.writeShort(strTable.offset());
            strTable.writeString(str.text);
          }
        }
      }
      out.write(strTable.get());
      return out.get();
    };
    return anonymous;
  }(Table);
}();
var PostTable = function() {
  var POSTSCRIPT_GLYPHS = ".notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent ampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash zero one two three four five six seven eight nine colon semicolon less equal greater question at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z bracketleft backslash bracketright asciicircum underscore grave a b c d e f g h i j k l m n o p q r s t u v w x y z braceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis Udieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave ecircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve ocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent sterling section bullet paragraph germandbls registered copyright trademark acute dieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu partialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash questiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft guillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash quotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis fraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered quotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis Egrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute Ucircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla hungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth eth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior onehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla Cacute cacute Ccaron ccaron dcroat".split(/\s+/g);
  return function(Table3) {
    function anonymous() {
      Table3.apply(this, arguments);
    }
    if (Table3) anonymous.__proto__ = Table3;
    anonymous.prototype = Object.create(Table3 && Table3.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.parse = function parse3(data) {
      var this$1 = this;
      data.offset(this.offset);
      this.format = data.readLong();
      this.italicAngle = data.readFixed_();
      this.underlinePosition = data.readShort_();
      this.underlineThickness = data.readShort_();
      this.isFixedPitch = data.readLong();
      this.minMemType42 = data.readLong();
      this.maxMemType42 = data.readLong();
      this.minMemType1 = data.readLong();
      this.maxMemType1 = data.readLong();
      var numberOfGlyphs;
      switch (this.format) {
        case 65536:
        case 196608:
          break;
        case 131072:
          numberOfGlyphs = data.readShort();
          this.glyphNameIndex = data.times(numberOfGlyphs, data.readShort);
          this.names = [];
          var limit = this.offset + this.length;
          while (data.offset() < limit) {
            this$1.names.push(data.readString(data.readByte()));
          }
          break;
        case 151552:
          numberOfGlyphs = data.readShort();
          this.offsets = data.read(numberOfGlyphs);
          break;
        case 262144:
          this.map = data.times(this.file.maxp.numGlyphs, data.readShort);
          break;
      }
    };
    anonymous.prototype.glyphFor = function glyphFor(code) {
      switch (this.format) {
        case 65536:
          return POSTSCRIPT_GLYPHS[code] || ".notdef";
        case 131072:
          var index = this.glyphNameIndex[code];
          if (index < POSTSCRIPT_GLYPHS.length) {
            return POSTSCRIPT_GLYPHS[index];
          }
          return this.names[index - POSTSCRIPT_GLYPHS.length] || ".notdef";
        case 151552:
        case 196608:
          return ".notdef";
        case 262144:
          return this.map[code] || 65535;
      }
    };
    anonymous.prototype.render = function render4(mapping) {
      var this$1 = this;
      if (this.format == 196608) {
        return this.raw();
      }
      var out = BinaryStream(this.rawData.slice(this.offset, 32));
      out.writeLong(131072);
      out.offset(32);
      var indexes = [];
      var strings = [];
      for (var i = 0; i < mapping.length; ++i) {
        var id = mapping[i];
        var post = this$1.glyphFor(id);
        var index = POSTSCRIPT_GLYPHS.indexOf(post);
        if (index >= 0) {
          indexes.push(index);
        } else {
          indexes.push(POSTSCRIPT_GLYPHS.length + strings.length);
          strings.push(post);
        }
      }
      out.writeShort(mapping.length);
      for (i = 0; i < indexes.length; ++i) {
        out.writeShort(indexes[i]);
      }
      for (i = 0; i < strings.length; ++i) {
        out.writeByte(strings[i].length);
        out.writeString(strings[i]);
      }
      return out.get();
    };
    return anonymous;
  }(Table);
}();
var CmapTable = function() {
  var CmapEntry = function CmapEntry2(data, offset, codeMap) {
    var self = this;
    self.platformID = data.readShort();
    self.platformSpecificID = data.readShort();
    self.offset = offset + data.readLong();
    data.saveExcursion(function() {
      var code;
      data.offset(self.offset);
      self.format = data.readShort();
      switch (self.format) {
        case 0:
          self.length = data.readShort();
          self.language = data.readShort();
          for (var i = 0; i < 256; ++i) {
            codeMap[i] = data.readByte();
          }
          break;
        case 4:
          self.length = data.readShort();
          self.language = data.readShort();
          var segCount = data.readShort() / 2;
          data.skip(6);
          var endCode = data.times(segCount, data.readShort);
          data.skip(2);
          var startCode = data.times(segCount, data.readShort);
          var idDelta = data.times(segCount, data.readShort_);
          var idRangeOffset = data.times(segCount, data.readShort);
          var count = (self.length + self.offset - data.offset()) / 2;
          var glyphIds2 = data.times(count, data.readShort);
          for (i = 0; i < segCount; ++i) {
            var start = startCode[i], end = endCode[i];
            for (code = start; code <= end; ++code) {
              var glyphId;
              if (idRangeOffset[i] === 0) {
                glyphId = code + idDelta[i];
              } else {
                var index = idRangeOffset[i] / 2 - (segCount - i) + (code - start);
                glyphId = glyphIds2[index] || 0;
                if (glyphId !== 0) {
                  glyphId += idDelta[i];
                }
              }
              codeMap[code] = glyphId & 65535;
            }
          }
          break;
        case 6:
          self.length = data.readShort();
          self.language = data.readShort();
          code = data.readShort();
          var length = data.readShort();
          while (length-- > 0) {
            codeMap[code++] = data.readShort();
          }
          break;
        case 12:
          data.readShort();
          self.length = data.readLong();
          self.language = data.readLong();
          var ngroups = data.readLong();
          while (ngroups-- > 0) {
            code = data.readLong();
            var endCharCode = data.readLong();
            var glyphCode = data.readLong();
            while (code <= endCharCode) {
              codeMap[code++] = glyphCode++;
            }
          }
          break;
        default:
          if (window.console) {
            window.console.error("Unhandled CMAP format: " + self.format);
          }
      }
    });
  };
  function renderCharmap(ncid2ogid, ogid2ngid) {
    var codes = sortedKeys(ncid2ogid);
    var startCodes = [];
    var endCodes = [];
    var last2 = null;
    var diff = null;
    function new_gid(charcode) {
      return ogid2ngid[ncid2ogid[charcode]];
    }
    for (var i = 0; i < codes.length; ++i) {
      var code = codes[i];
      var gid = new_gid(code);
      var delta = gid - code;
      if (last2 == null || delta !== diff) {
        if (last2) {
          endCodes.push(last2);
        }
        startCodes.push(code);
        diff = delta;
      }
      last2 = code;
    }
    if (last2) {
      endCodes.push(last2);
    }
    endCodes.push(65535);
    startCodes.push(65535);
    var segCount = startCodes.length;
    var segCountX2 = segCount * 2;
    var searchRange = 2 * Math.pow(2, Math.floor(Math.log(segCount) / Math.LN2));
    var entrySelector = Math.log(searchRange / 2) / Math.LN2;
    var rangeShift = segCountX2 - searchRange;
    var deltas = [];
    var rangeOffsets = [];
    var glyphIds2 = [];
    for (i = 0; i < segCount; ++i) {
      var startCode = startCodes[i];
      var endCode = endCodes[i];
      if (startCode == 65535) {
        deltas.push(0);
        rangeOffsets.push(0);
        break;
      }
      var startGlyph = new_gid(startCode);
      if (startCode - startGlyph >= 32768) {
        deltas.push(0);
        rangeOffsets.push(2 * (glyphIds2.length + segCount - i));
        for (var j = startCode; j <= endCode; ++j) {
          glyphIds2.push(new_gid(j));
        }
      } else {
        deltas.push(startGlyph - startCode);
        rangeOffsets.push(0);
      }
    }
    var out = BinaryStream();
    out.writeShort(3);
    out.writeShort(1);
    out.writeLong(12);
    out.writeShort(4);
    out.writeShort(16 + segCount * 8 + glyphIds2.length * 2);
    out.writeShort(0);
    out.writeShort(segCountX2);
    out.writeShort(searchRange);
    out.writeShort(entrySelector);
    out.writeShort(rangeShift);
    endCodes.forEach(out.writeShort);
    out.writeShort(0);
    startCodes.forEach(out.writeShort);
    deltas.forEach(out.writeShort_);
    rangeOffsets.forEach(out.writeShort);
    glyphIds2.forEach(out.writeShort);
    return out.get();
  }
  return function(Table3) {
    function anonymous() {
      Table3.apply(this, arguments);
    }
    if (Table3) anonymous.__proto__ = Table3;
    anonymous.prototype = Object.create(Table3 && Table3.prototype);
    anonymous.prototype.constructor = anonymous;
    anonymous.prototype.parse = function parse3(data) {
      var self = this;
      var offset = self.offset;
      data.offset(offset);
      self.codeMap = {};
      self.version = data.readShort();
      var tableCount = data.readShort();
      self.tables = data.times(tableCount, function() {
        return new CmapEntry(data, offset, self.codeMap);
      });
    };
    anonymous.render = function render4(ncid2ogid, ogid2ngid) {
      var out = BinaryStream();
      out.writeShort(0);
      out.writeShort(1);
      out.write(renderCharmap(ncid2ogid, ogid2ngid));
      return out.get();
    };
    return anonymous;
  }(Table);
}();
var OS2Table = function(Table3) {
  function OS2Table2() {
    Table3.apply(this, arguments);
  }
  if (Table3) OS2Table2.__proto__ = Table3;
  OS2Table2.prototype = Object.create(Table3 && Table3.prototype);
  OS2Table2.prototype.constructor = OS2Table2;
  OS2Table2.prototype.parse = function parse3(data) {
    data.offset(this.offset);
    this.version = data.readShort();
    this.averageCharWidth = data.readShort_();
    this.weightClass = data.readShort();
    this.widthClass = data.readShort();
    this.type = data.readShort();
    this.ySubscriptXSize = data.readShort_();
    this.ySubscriptYSize = data.readShort_();
    this.ySubscriptXOffset = data.readShort_();
    this.ySubscriptYOffset = data.readShort_();
    this.ySuperscriptXSize = data.readShort_();
    this.ySuperscriptYSize = data.readShort_();
    this.ySuperscriptXOffset = data.readShort_();
    this.ySuperscriptYOffset = data.readShort_();
    this.yStrikeoutSize = data.readShort_();
    this.yStrikeoutPosition = data.readShort_();
    this.familyClass = data.readShort_();
    this.panose = data.times(10, data.readByte);
    this.charRange = data.times(4, data.readLong);
    this.vendorID = data.readString(4);
    this.selection = data.readShort();
    this.firstCharIndex = data.readShort();
    this.lastCharIndex = data.readShort();
    if (this.version > 0) {
      this.ascent = data.readShort_();
      this.descent = data.readShort_();
      this.lineGap = data.readShort_();
      this.winAscent = data.readShort();
      this.winDescent = data.readShort();
      this.codePageRange = data.times(2, data.readLong);
      if (this.version > 1) {
        this.xHeight = data.readShort();
        this.capHeight = data.readShort();
        this.defaultChar = data.readShort();
        this.breakChar = data.readShort();
        this.maxContext = data.readShort();
      }
    }
  };
  OS2Table2.prototype.render = function render4() {
    return this.raw();
  };
  return OS2Table2;
}(Table);
var subsetTag = 1e5;
function nextSubsetTag() {
  var ret = "", n = String(subsetTag);
  for (var i = 0; i < n.length; ++i) {
    ret += String.fromCharCode(n.charCodeAt(i) - 48 + 65);
  }
  ++subsetTag;
  return ret;
}
var Subfont = function Subfont2(font) {
  this.font = font;
  this.subset = {};
  this.unicodes = {};
  this.ogid2ngid = { 0: 0 };
  this.ngid2ogid = { 0: 0 };
  this.ncid2ogid = {};
  this.next = this.firstChar = 1;
  this.nextGid = 1;
  this.psName = nextSubsetTag() + "+" + this.font.psName;
};
Subfont.prototype.use = function use(ch) {
  var self = this;
  if (typeof ch == "string") {
    return ucs2decode(ch).reduce(function(ret, code2) {
      return ret + String.fromCharCode(self.use(code2));
    }, "");
  }
  var code = self.unicodes[ch];
  if (!code) {
    code = self.next++;
    self.subset[code] = ch;
    self.unicodes[ch] = code;
    var old_gid = self.font.cmap.codeMap[ch];
    if (old_gid) {
      self.ncid2ogid[code] = old_gid;
      if (self.ogid2ngid[old_gid] == null) {
        var new_gid = self.nextGid++;
        self.ogid2ngid[old_gid] = new_gid;
        self.ngid2ogid[new_gid] = old_gid;
      }
    }
  }
  return code;
};
Subfont.prototype.encodeText = function encodeText(text) {
  return this.use(text);
};
Subfont.prototype.glyphIds = function glyphIds() {
  return sortedKeys(this.ogid2ngid);
};
Subfont.prototype.glyphsFor = function glyphsFor(glyphIds2, result) {
  var this$1 = this;
  if (!result) {
    result = {};
  }
  for (var i = 0; i < glyphIds2.length; ++i) {
    var id = glyphIds2[i];
    if (!result[id]) {
      var glyph = result[id] = this$1.font.glyf.glyphFor(id);
      if (glyph && glyph.compound) {
        this$1.glyphsFor(glyph.glyphIds, result);
      }
    }
  }
  return result;
};
Subfont.prototype.render = function render2() {
  var this$1 = this;
  var glyphs = this.glyphsFor(this.glyphIds());
  for (var old_gid in glyphs) {
    if (hasOwnProperty(glyphs, old_gid)) {
      old_gid = parseInt(old_gid, 10);
      if (this$1.ogid2ngid[old_gid] == null) {
        var new_gid = this$1.nextGid++;
        this$1.ogid2ngid[old_gid] = new_gid;
        this$1.ngid2ogid[new_gid] = old_gid;
      }
    }
  }
  var new_gid_ids = sortedKeys(this.ngid2ogid);
  var old_gid_ids = new_gid_ids.map(function(id) {
    return this.ngid2ogid[id];
  }, this);
  var font = this.font;
  var glyf = font.glyf.render(glyphs, old_gid_ids, this.ogid2ngid);
  var loca = font.loca.render(glyf.offsets);
  this.lastChar = this.next - 1;
  var tables = {
    "cmap": CmapTable.render(this.ncid2ogid, this.ogid2ngid),
    "glyf": glyf.table,
    "loca": loca.table,
    "hmtx": font.hmtx.render(old_gid_ids),
    "hhea": font.hhea.render(old_gid_ids),
    "maxp": font.maxp.render(old_gid_ids),
    "post": font.post.render(old_gid_ids),
    "name": font.name.render(this.psName),
    "head": font.head.render(loca.format),
    "OS/2": font.os2.render()
  };
  return this.font.directory.render(tables);
};
Subfont.prototype.cidToGidMap = function cidToGidMap() {
  var this$1 = this;
  var out = BinaryStream(), len = 0;
  for (var cid = this.firstChar; cid < this.next; ++cid) {
    while (len < cid) {
      out.writeShort(0);
      len++;
    }
    var old_gid = this$1.ncid2ogid[cid];
    if (old_gid) {
      var new_gid = this$1.ogid2ngid[old_gid];
      out.writeShort(new_gid);
    } else {
      out.writeShort(0);
    }
    len++;
  }
  return out.get();
};
var TTFFont = function TTFFont2(rawData, name2) {
  var self = this;
  var data = self.contents = BinaryStream(rawData);
  if (data.readString(4) == "ttcf") {
    var offset;
    var parse3 = function() {
      data.offset(offset);
      self.parse();
    };
    if (!name2) {
      throw new Error("Must specify a name for TTC files");
    }
    data.readLong();
    var numFonts = data.readLong();
    for (var i = 0; i < numFonts; ++i) {
      offset = data.readLong();
      data.saveExcursion(parse3);
      if (self.psName == name2) {
        return;
      }
    }
    throw new Error("Font " + name2 + " not found in collection");
  } else {
    data.offset(0);
    self.parse();
  }
};
TTFFont.prototype.parse = function parse2() {
  var dir = this.directory = new Directory(this.contents);
  this.head = dir.readTable("head", HeadTable);
  this.loca = dir.readTable("loca", LocaTable);
  this.hhea = dir.readTable("hhea", HheaTable);
  this.maxp = dir.readTable("maxp", MaxpTable);
  this.hmtx = dir.readTable("hmtx", HmtxTable);
  this.glyf = dir.readTable("glyf", GlyfTable);
  this.name = dir.readTable("name", NameTable);
  this.post = dir.readTable("post", PostTable);
  this.cmap = dir.readTable("cmap", CmapTable);
  this.os2 = dir.readTable("OS/2", OS2Table);
  this.psName = this.name.postscriptName;
  this.ascent = this.os2.ascent || this.hhea.ascent;
  this.descent = this.os2.descent || this.hhea.descent;
  this.lineGap = this.os2.lineGap || this.hhea.lineGap;
  this.scale = 1e3 / this.head.unitsPerEm;
};
TTFFont.prototype.widthOfGlyph = function widthOfGlyph(glyph) {
  return this.hmtx.forGlyph(glyph).advance * this.scale;
};
TTFFont.prototype.makeSubset = function makeSubset() {
  return new Subfont(this);
};

// node_modules/@progress/pako-esm/dist/pako-esm5.js
var Z_NO_FLUSH = 0;
var Z_PARTIAL_FLUSH = 1;
var Z_SYNC_FLUSH = 2;
var Z_FULL_FLUSH = 3;
var Z_FINISH = 4;
var Z_BLOCK = 5;
var Z_OK = 0;
var Z_STREAM_END = 1;
var Z_NEED_DICT = 2;
var Z_STREAM_ERROR = -2;
var Z_DATA_ERROR = -3;
var Z_BUF_ERROR = -5;
var Z_DEFAULT_COMPRESSION = -1;
var Z_FILTERED = 1;
var Z_HUFFMAN_ONLY = 2;
var Z_RLE = 3;
var Z_FIXED = 4;
var Z_DEFAULT_STRATEGY = 0;
var Z_BINARY = 0;
var Z_TEXT = 1;
var Z_UNKNOWN = 2;
var Z_DEFLATED = 8;
function _has(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function assign(obj) {
  var sources = Array.prototype.slice.call(arguments, 1);
  while (sources.length) {
    var source = sources.shift();
    if (!source) {
      continue;
    }
    if (typeof source !== "object") {
      throw new TypeError(source + "must be non-object");
    }
    for (var p in source) {
      if (_has(source, p)) {
        obj[p] = source[p];
      }
    }
  }
  return obj;
}
function shrinkBuf(buf, size) {
  if (buf.length === size) {
    return buf;
  }
  if (buf.subarray) {
    return buf.subarray(0, size);
  }
  buf.length = size;
  return buf;
}
var fnTyped = {
  arraySet: function(dest, src, src_offs, len, dest_offs) {
    if (src.subarray && dest.subarray) {
      dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
      return;
    }
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    var i, l, len, pos, chunk, result;
    len = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      len += chunks[i].length;
    }
    result = new Uint8Array(len);
    pos = 0;
    for (i = 0, l = chunks.length; i < l; i++) {
      chunk = chunks[i];
      result.set(chunk, pos);
      pos += chunk.length;
    }
    return result;
  },
  Buf8: function(size) {
    return new Uint8Array(size);
  },
  Buf16: function(size) {
    return new Uint16Array(size);
  },
  Buf32: function(size) {
    return new Int32Array(size);
  }
};
var fnUntyped = {
  arraySet: function(dest, src, src_offs, len, dest_offs) {
    for (var i = 0; i < len; i++) {
      dest[dest_offs + i] = src[src_offs + i];
    }
  },
  // Join array of chunks to single array.
  flattenChunks: function(chunks) {
    return [].concat.apply([], chunks);
  },
  Buf8: function(size) {
    return new Array(size);
  },
  Buf16: function(size) {
    return new Array(size);
  },
  Buf32: function(size) {
    return new Array(size);
  }
};
var typedOK = function() {
  var supported = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
  typedOK = function() {
    return supported;
  };
  return supported;
};
var arraySet = function(dest, src, src_offs, len, dest_offs) {
  arraySet = typedOK() ? fnTyped.arraySet : fnUntyped.arraySet;
  return arraySet(dest, src, src_offs, len, dest_offs);
};
var flattenChunks = function(chunks) {
  flattenChunks = typedOK() ? fnTyped.flattenChunks : fnUntyped.flattenChunks;
  return flattenChunks(chunks);
};
var Buf8 = function(size) {
  Buf8 = typedOK() ? fnTyped.Buf8 : fnUntyped.Buf8;
  return Buf8(size);
};
var Buf16 = function(size) {
  Buf16 = typedOK() ? fnTyped.Buf16 : fnUntyped.Buf16;
  return Buf16(size);
};
var Buf32 = function(size) {
  Buf32 = typedOK() ? fnTyped.Buf32 : fnUntyped.Buf32;
  return Buf32(size);
};
var strApplyOK = function() {
  var result = true;
  try {
    String.fromCharCode.apply(null, [0]);
  } catch (_2) {
    result = false;
  }
  strApplyOK = function() {
    return result;
  };
  return result;
};
var strApplyUintOK = function() {
  var result = true;
  try {
    String.fromCharCode.apply(null, new Uint8Array(1));
  } catch (_2) {
    result = false;
  }
  strApplyUintOK = function() {
    return result;
  };
  return result;
};
var utf8len = function(c) {
  var table = Buf8(256);
  for (var q = 0; q < 256; q++) {
    table[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
  }
  table[254] = table[254] = 1;
  utf8len = function(arg) {
    return table[arg];
  };
  return table[c];
};
function string2buf(str) {
  var buf, c, c2, m_pos, i, str_len = str.length, buf_len = 0;
  for (m_pos = 0; m_pos < str_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 64512) === 56320) {
        c = 65536 + (c - 55296 << 10) + (c2 - 56320);
        m_pos++;
      }
    }
    buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
  }
  buf = new Uint8Array(buf_len);
  for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
    c = str.charCodeAt(m_pos);
    if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
      c2 = str.charCodeAt(m_pos + 1);
      if ((c2 & 64512) === 56320) {
        c = 65536 + (c - 55296 << 10) + (c2 - 56320);
        m_pos++;
      }
    }
    if (c < 128) {
      buf[i++] = c;
    } else if (c < 2048) {
      buf[i++] = 192 | c >>> 6;
      buf[i++] = 128 | c & 63;
    } else if (c < 65536) {
      buf[i++] = 224 | c >>> 12;
      buf[i++] = 128 | c >>> 6 & 63;
      buf[i++] = 128 | c & 63;
    } else {
      buf[i++] = 240 | c >>> 18;
      buf[i++] = 128 | c >>> 12 & 63;
      buf[i++] = 128 | c >>> 6 & 63;
      buf[i++] = 128 | c & 63;
    }
  }
  return buf;
}
function _buf2binstring(buf, len) {
  if (len < 65534) {
    if (buf.subarray && strApplyUintOK() || !buf.subarray && strApplyOK()) {
      return String.fromCharCode.apply(null, shrinkBuf(buf, len));
    }
  }
  var result = "";
  for (var i = 0; i < len; i++) {
    result += String.fromCharCode(buf[i]);
  }
  return result;
}
function buf2binstring(buf) {
  return _buf2binstring(buf, buf.length);
}
function binstring2buf(str) {
  var buf = new Uint8Array(str.length);
  for (var i = 0, len = buf.length; i < len; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
}
function buf2string(buf, max) {
  var i, out, c, c_len;
  var len = max || buf.length;
  var utf16buf = new Array(len * 2);
  for (out = 0, i = 0; i < len; ) {
    c = buf[i++];
    if (c < 128) {
      utf16buf[out++] = c;
      continue;
    }
    c_len = utf8len(c);
    if (c_len > 4) {
      utf16buf[out++] = 65533;
      i += c_len - 1;
      continue;
    }
    c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
    while (c_len > 1 && i < len) {
      c = c << 6 | buf[i++] & 63;
      c_len--;
    }
    if (c_len > 1) {
      utf16buf[out++] = 65533;
      continue;
    }
    if (c < 65536) {
      utf16buf[out++] = c;
    } else {
      c -= 65536;
      utf16buf[out++] = 55296 | c >> 10 & 1023;
      utf16buf[out++] = 56320 | c & 1023;
    }
  }
  return _buf2binstring(utf16buf, out);
}
function utf8border(buf, max) {
  var pos;
  max = max || buf.length;
  if (max > buf.length) {
    max = buf.length;
  }
  pos = max - 1;
  while (pos >= 0 && (buf[pos] & 192) === 128) {
    pos--;
  }
  if (pos < 0) {
    return max;
  }
  if (pos === 0) {
    return max;
  }
  return pos + utf8len(buf[pos]) > max ? pos : max;
}
function adler32(adler, buf, len, pos) {
  var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
  while (len !== 0) {
    n = len > 2e3 ? 2e3 : len;
    len -= n;
    do {
      s1 = s1 + buf[pos++] | 0;
      s2 = s2 + s1 | 0;
    } while (--n);
    s1 %= 65521;
    s2 %= 65521;
  }
  return s1 | s2 << 16 | 0;
}
function makeTable() {
  var c, table = [];
  for (var n = 0; n < 256; n++) {
    c = n;
    for (var k = 0; k < 8; k++) {
      c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
    }
    table[n] = c;
  }
  return table;
}
var crcTable = function() {
  var table = makeTable();
  crcTable = function() {
    return table;
  };
  return table;
};
function crc32(crc, buf, len, pos) {
  var t = crcTable(), end = pos + len;
  crc ^= -1;
  for (var i = pos; i < end; i++) {
    crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
  }
  return crc ^ -1;
}
var BAD = 30;
var TYPE = 12;
function inflate_fast(strm, start) {
  var state;
  var _in;
  var last2;
  var _out;
  var beg;
  var end;
  var dmax;
  var wsize;
  var whave;
  var wnext;
  var s_window;
  var hold;
  var bits;
  var lcode;
  var dcode;
  var lmask;
  var dmask;
  var here;
  var op;
  var len;
  var dist;
  var from;
  var from_source;
  var input, output;
  state = strm.state;
  _in = strm.next_in;
  input = strm.input;
  last2 = _in + (strm.avail_in - 5);
  _out = strm.next_out;
  output = strm.output;
  beg = _out - (start - strm.avail_out);
  end = _out + (strm.avail_out - 257);
  dmax = state.dmax;
  wsize = state.wsize;
  whave = state.whave;
  wnext = state.wnext;
  s_window = state.window;
  hold = state.hold;
  bits = state.bits;
  lcode = state.lencode;
  dcode = state.distcode;
  lmask = (1 << state.lenbits) - 1;
  dmask = (1 << state.distbits) - 1;
  top:
    do {
      if (bits < 15) {
        hold += input[_in++] << bits;
        bits += 8;
        hold += input[_in++] << bits;
        bits += 8;
      }
      here = lcode[hold & lmask];
      dolen:
        for (; ; ) {
          op = here >>> 24;
          hold >>>= op;
          bits -= op;
          op = here >>> 16 & 255;
          if (op === 0) {
            output[_out++] = here & 65535;
          } else if (op & 16) {
            len = here & 65535;
            op &= 15;
            if (op) {
              if (bits < op) {
                hold += input[_in++] << bits;
                bits += 8;
              }
              len += hold & (1 << op) - 1;
              hold >>>= op;
              bits -= op;
            }
            if (bits < 15) {
              hold += input[_in++] << bits;
              bits += 8;
              hold += input[_in++] << bits;
              bits += 8;
            }
            here = dcode[hold & dmask];
            dodist:
              for (; ; ) {
                op = here >>> 24;
                hold >>>= op;
                bits -= op;
                op = here >>> 16 & 255;
                if (op & 16) {
                  dist = here & 65535;
                  op &= 15;
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                    if (bits < op) {
                      hold += input[_in++] << bits;
                      bits += 8;
                    }
                  }
                  dist += hold & (1 << op) - 1;
                  if (dist > dmax) {
                    strm.msg = "invalid distance too far back";
                    state.mode = BAD;
                    break top;
                  }
                  hold >>>= op;
                  bits -= op;
                  op = _out - beg;
                  if (dist > op) {
                    op = dist - op;
                    if (op > whave) {
                      if (state.sane) {
                        strm.msg = "invalid distance too far back";
                        state.mode = BAD;
                        break top;
                      }
                    }
                    from = 0;
                    from_source = s_window;
                    if (wnext === 0) {
                      from += wsize - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    } else if (wnext < op) {
                      from += wsize + wnext - op;
                      op -= wnext;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = 0;
                        if (wnext < len) {
                          op = wnext;
                          len -= op;
                          do {
                            output[_out++] = s_window[from++];
                          } while (--op);
                          from = _out - dist;
                          from_source = output;
                        }
                      }
                    } else {
                      from += wnext - op;
                      if (op < len) {
                        len -= op;
                        do {
                          output[_out++] = s_window[from++];
                        } while (--op);
                        from = _out - dist;
                        from_source = output;
                      }
                    }
                    while (len > 2) {
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      output[_out++] = from_source[from++];
                      len -= 3;
                    }
                    if (len) {
                      output[_out++] = from_source[from++];
                      if (len > 1) {
                        output[_out++] = from_source[from++];
                      }
                    }
                  } else {
                    from = _out - dist;
                    do {
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      output[_out++] = output[from++];
                      len -= 3;
                    } while (len > 2);
                    if (len) {
                      output[_out++] = output[from++];
                      if (len > 1) {
                        output[_out++] = output[from++];
                      }
                    }
                  }
                } else if ((op & 64) === 0) {
                  here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                  continue dodist;
                } else {
                  strm.msg = "invalid distance code";
                  state.mode = BAD;
                  break top;
                }
                break;
              }
          } else if ((op & 64) === 0) {
            here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
            continue dolen;
          } else if (op & 32) {
            state.mode = TYPE;
            break top;
          } else {
            strm.msg = "invalid literal/length code";
            state.mode = BAD;
            break top;
          }
          break;
        }
    } while (_in < last2 && _out < end);
  len = bits >> 3;
  _in -= len;
  bits -= len << 3;
  hold &= (1 << bits) - 1;
  strm.next_in = _in;
  strm.next_out = _out;
  strm.avail_in = _in < last2 ? 5 + (last2 - _in) : 5 - (_in - last2);
  strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
  state.hold = hold;
  state.bits = bits;
  return;
}
var MAXBITS = 15;
var ENOUGH_LENS = 852;
var ENOUGH_DISTS = 592;
var CODES = 0;
var LENS = 1;
var DISTS = 2;
var lbase = [
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
];
var lext = [
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
];
var dbase = [
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
];
var dext = [
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
];
function inflate_table(type, lens, lens_index, codes, table, table_index, work, opts) {
  var bits = opts.bits;
  var len = 0;
  var sym = 0;
  var min = 0, max = 0;
  var root = 0;
  var curr = 0;
  var drop = 0;
  var left = 0;
  var used = 0;
  var huff = 0;
  var incr;
  var fill;
  var low;
  var mask;
  var next;
  var base = null;
  var base_index = 0;
  var end;
  var count = Buf16(MAXBITS + 1);
  var offs = Buf16(MAXBITS + 1);
  var extra = null;
  var extra_index = 0;
  var here_bits, here_op, here_val;
  for (len = 0; len <= MAXBITS; len++) {
    count[len] = 0;
  }
  for (sym = 0; sym < codes; sym++) {
    count[lens[lens_index + sym]]++;
  }
  root = bits;
  for (max = MAXBITS; max >= 1; max--) {
    if (count[max] !== 0) {
      break;
    }
  }
  if (root > max) {
    root = max;
  }
  if (max === 0) {
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    table[table_index++] = 1 << 24 | 64 << 16 | 0;
    opts.bits = 1;
    return 0;
  }
  for (min = 1; min < max; min++) {
    if (count[min] !== 0) {
      break;
    }
  }
  if (root < min) {
    root = min;
  }
  left = 1;
  for (len = 1; len <= MAXBITS; len++) {
    left <<= 1;
    left -= count[len];
    if (left < 0) {
      return -1;
    }
  }
  if (left > 0 && (type === CODES || max !== 1)) {
    return -1;
  }
  offs[1] = 0;
  for (len = 1; len < MAXBITS; len++) {
    offs[len + 1] = offs[len] + count[len];
  }
  for (sym = 0; sym < codes; sym++) {
    if (lens[lens_index + sym] !== 0) {
      work[offs[lens[lens_index + sym]]++] = sym;
    }
  }
  if (type === CODES) {
    base = extra = work;
    end = 19;
  } else if (type === LENS) {
    base = lbase;
    base_index -= 257;
    extra = lext;
    extra_index -= 257;
    end = 256;
  } else {
    base = dbase;
    extra = dext;
    end = -1;
  }
  huff = 0;
  sym = 0;
  len = min;
  next = table_index;
  curr = root;
  drop = 0;
  low = -1;
  used = 1 << root;
  mask = used - 1;
  if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
    return 1;
  }
  for (; ; ) {
    here_bits = len - drop;
    if (work[sym] < end) {
      here_op = 0;
      here_val = work[sym];
    } else if (work[sym] > end) {
      here_op = extra[extra_index + work[sym]];
      here_val = base[base_index + work[sym]];
    } else {
      here_op = 32 + 64;
      here_val = 0;
    }
    incr = 1 << len - drop;
    fill = 1 << curr;
    min = fill;
    do {
      fill -= incr;
      table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
    } while (fill !== 0);
    incr = 1 << len - 1;
    while (huff & incr) {
      incr >>= 1;
    }
    if (incr !== 0) {
      huff &= incr - 1;
      huff += incr;
    } else {
      huff = 0;
    }
    sym++;
    if (--count[len] === 0) {
      if (len === max) {
        break;
      }
      len = lens[lens_index + work[sym]];
    }
    if (len > root && (huff & mask) !== low) {
      if (drop === 0) {
        drop = root;
      }
      next += min;
      curr = len - drop;
      left = 1 << curr;
      while (curr + drop < max) {
        left -= count[curr + drop];
        if (left <= 0) {
          break;
        }
        curr++;
        left <<= 1;
      }
      used += 1 << curr;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      low = huff & mask;
      table[low] = root << 24 | curr << 16 | next - table_index | 0;
    }
  }
  if (huff !== 0) {
    table[next + huff] = len - drop << 24 | 64 << 16 | 0;
  }
  opts.bits = root;
  return 0;
}
var CODES$1 = 0;
var LENS$1 = 1;
var DISTS$1 = 2;
var Z_FINISH$1 = 4;
var Z_BLOCK$1 = 5;
var Z_TREES$1 = 6;
var Z_OK$1 = 0;
var Z_STREAM_END$1 = 1;
var Z_NEED_DICT$1 = 2;
var Z_STREAM_ERROR$1 = -2;
var Z_DATA_ERROR$1 = -3;
var Z_MEM_ERROR = -4;
var Z_BUF_ERROR$1 = -5;
var Z_DEFLATED$1 = 8;
var HEAD = 1;
var FLAGS = 2;
var TIME = 3;
var OS = 4;
var EXLEN = 5;
var EXTRA = 6;
var NAME = 7;
var COMMENT = 8;
var HCRC = 9;
var DICTID = 10;
var DICT = 11;
var TYPE$1 = 12;
var TYPEDO = 13;
var STORED = 14;
var COPY_ = 15;
var COPY = 16;
var TABLE = 17;
var LENLENS = 18;
var CODELENS = 19;
var LEN_ = 20;
var LEN = 21;
var LENEXT = 22;
var DIST = 23;
var DISTEXT = 24;
var MATCH = 25;
var LIT = 26;
var CHECK = 27;
var LENGTH = 28;
var DONE = 29;
var BAD$1 = 30;
var MEM = 31;
var SYNC = 32;
var ENOUGH_LENS$1 = 852;
var ENOUGH_DISTS$1 = 592;
function zswap32(q) {
  return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
}
function InflateState() {
  this.mode = 0;
  this.last = false;
  this.wrap = 0;
  this.havedict = false;
  this.flags = 0;
  this.dmax = 0;
  this.check = 0;
  this.total = 0;
  this.head = null;
  this.wbits = 0;
  this.wsize = 0;
  this.whave = 0;
  this.wnext = 0;
  this.window = null;
  this.hold = 0;
  this.bits = 0;
  this.length = 0;
  this.offset = 0;
  this.extra = 0;
  this.lencode = null;
  this.distcode = null;
  this.lenbits = 0;
  this.distbits = 0;
  this.ncode = 0;
  this.nlen = 0;
  this.ndist = 0;
  this.have = 0;
  this.next = null;
  this.lens = Buf16(320);
  this.work = Buf16(288);
  this.lendyn = null;
  this.distdyn = null;
  this.sane = 0;
  this.back = 0;
  this.was = 0;
}
function inflateResetKeep(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  strm.total_in = strm.total_out = state.total = 0;
  strm.msg = "";
  if (state.wrap) {
    strm.adler = state.wrap & 1;
  }
  state.mode = HEAD;
  state.last = 0;
  state.havedict = 0;
  state.dmax = 32768;
  state.head = null;
  state.hold = 0;
  state.bits = 0;
  state.lencode = state.lendyn = Buf32(ENOUGH_LENS$1);
  state.distcode = state.distdyn = Buf32(ENOUGH_DISTS$1);
  state.sane = 1;
  state.back = -1;
  return Z_OK$1;
}
function inflateReset(strm) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  state.wsize = 0;
  state.whave = 0;
  state.wnext = 0;
  return inflateResetKeep(strm);
}
function inflateReset2(strm, windowBits) {
  var wrap2;
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (windowBits < 0) {
    wrap2 = 0;
    windowBits = -windowBits;
  } else {
    wrap2 = (windowBits >> 4) + 1;
    if (windowBits < 48) {
      windowBits &= 15;
    }
  }
  if (windowBits && (windowBits < 8 || windowBits > 15)) {
    return Z_STREAM_ERROR$1;
  }
  if (state.window !== null && state.wbits !== windowBits) {
    state.window = null;
  }
  state.wrap = wrap2;
  state.wbits = windowBits;
  return inflateReset(strm);
}
function inflateInit2(strm, windowBits) {
  var ret;
  var state;
  if (!strm) {
    return Z_STREAM_ERROR$1;
  }
  state = new InflateState();
  strm.state = state;
  state.window = null;
  ret = inflateReset2(strm, windowBits);
  if (ret !== Z_OK$1) {
    strm.state = null;
  }
  return ret;
}
var virgin = true;
var lenfix;
var distfix;
function fixedtables(state) {
  if (virgin) {
    var sym;
    lenfix = Buf32(512);
    distfix = Buf32(32);
    sym = 0;
    while (sym < 144) {
      state.lens[sym++] = 8;
    }
    while (sym < 256) {
      state.lens[sym++] = 9;
    }
    while (sym < 280) {
      state.lens[sym++] = 7;
    }
    while (sym < 288) {
      state.lens[sym++] = 8;
    }
    inflate_table(LENS$1, state.lens, 0, 288, lenfix, 0, state.work, { bits: 9 });
    sym = 0;
    while (sym < 32) {
      state.lens[sym++] = 5;
    }
    inflate_table(DISTS$1, state.lens, 0, 32, distfix, 0, state.work, { bits: 5 });
    virgin = false;
  }
  state.lencode = lenfix;
  state.lenbits = 9;
  state.distcode = distfix;
  state.distbits = 5;
}
function updatewindow(strm, src, end, copy) {
  var dist;
  var state = strm.state;
  if (state.window === null) {
    state.wsize = 1 << state.wbits;
    state.wnext = 0;
    state.whave = 0;
    state.window = Buf8(state.wsize);
  }
  if (copy >= state.wsize) {
    arraySet(state.window, src, end - state.wsize, state.wsize, 0);
    state.wnext = 0;
    state.whave = state.wsize;
  } else {
    dist = state.wsize - state.wnext;
    if (dist > copy) {
      dist = copy;
    }
    arraySet(state.window, src, end - copy, dist, state.wnext);
    copy -= dist;
    if (copy) {
      arraySet(state.window, src, end - copy, copy, 0);
      state.wnext = copy;
      state.whave = state.wsize;
    } else {
      state.wnext += dist;
      if (state.wnext === state.wsize) {
        state.wnext = 0;
      }
      if (state.whave < state.wsize) {
        state.whave += dist;
      }
    }
  }
  return 0;
}
function inflate(strm, flush) {
  var state;
  var input, output;
  var next;
  var put;
  var have, left;
  var hold;
  var bits;
  var _in, _out;
  var copy;
  var from;
  var from_source;
  var here = 0;
  var here_bits, here_op, here_val;
  var last_bits, last_op, last_val;
  var len;
  var ret;
  var hbuf = Buf8(4);
  var opts;
  var n;
  var order = (
    /* permutation of code lengths */
    [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
  );
  if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.mode === TYPE$1) {
    state.mode = TYPEDO;
  }
  put = strm.next_out;
  output = strm.output;
  left = strm.avail_out;
  next = strm.next_in;
  input = strm.input;
  have = strm.avail_in;
  hold = state.hold;
  bits = state.bits;
  _in = have;
  _out = left;
  ret = Z_OK$1;
  inf_leave:
    for (; ; ) {
      switch (state.mode) {
        case HEAD:
          if (state.wrap === 0) {
            state.mode = TYPEDO;
            break;
          }
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.wrap & 2 && hold === 35615) {
            state.check = 0;
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
            hold = 0;
            bits = 0;
            state.mode = FLAGS;
            break;
          }
          state.flags = 0;
          if (state.head) {
            state.head.done = false;
          }
          if (!(state.wrap & 1) || /* check if zlib header allowed */
          (((hold & 255) << 8) + (hold >> 8)) % 31) {
            strm.msg = "incorrect header check";
            state.mode = BAD$1;
            break;
          }
          if ((hold & 15) !== Z_DEFLATED$1) {
            strm.msg = "unknown compression method";
            state.mode = BAD$1;
            break;
          }
          hold >>>= 4;
          bits -= 4;
          len = (hold & 15) + 8;
          if (state.wbits === 0) {
            state.wbits = len;
          } else if (len > state.wbits) {
            strm.msg = "invalid window size";
            state.mode = BAD$1;
            break;
          }
          state.dmax = 1 << len;
          strm.adler = state.check = 1;
          state.mode = hold & 512 ? DICTID : TYPE$1;
          hold = 0;
          bits = 0;
          break;
        case FLAGS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.flags = hold;
          if ((state.flags & 255) !== Z_DEFLATED$1) {
            strm.msg = "unknown compression method";
            state.mode = BAD$1;
            break;
          }
          if (state.flags & 57344) {
            strm.msg = "unknown header flags set";
            state.mode = BAD$1;
            break;
          }
          if (state.head) {
            state.head.text = hold >> 8 & 1;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = TIME;
        case TIME:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.time = hold;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            hbuf[2] = hold >>> 16 & 255;
            hbuf[3] = hold >>> 24 & 255;
            state.check = crc32(state.check, hbuf, 4, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = OS;
        case OS:
          while (bits < 16) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (state.head) {
            state.head.xflags = hold & 255;
            state.head.os = hold >> 8;
          }
          if (state.flags & 512) {
            hbuf[0] = hold & 255;
            hbuf[1] = hold >>> 8 & 255;
            state.check = crc32(state.check, hbuf, 2, 0);
          }
          hold = 0;
          bits = 0;
          state.mode = EXLEN;
        case EXLEN:
          if (state.flags & 1024) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length = hold;
            if (state.head) {
              state.head.extra_len = hold;
            }
            if (state.flags & 512) {
              hbuf[0] = hold & 255;
              hbuf[1] = hold >>> 8 & 255;
              state.check = crc32(state.check, hbuf, 2, 0);
            }
            hold = 0;
            bits = 0;
          } else if (state.head) {
            state.head.extra = null;
          }
          state.mode = EXTRA;
        case EXTRA:
          if (state.flags & 1024) {
            copy = state.length;
            if (copy > have) {
              copy = have;
            }
            if (copy) {
              if (state.head) {
                len = state.head.extra_len - state.length;
                if (!state.head.extra) {
                  state.head.extra = new Array(state.head.extra_len);
                }
                arraySet(
                  state.head.extra,
                  input,
                  next,
                  // extra field is limited to 65536 bytes
                  // - no need for additional size check
                  copy,
                  /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                  len
                );
              }
              if (state.flags & 512) {
                state.check = crc32(state.check, input, copy, next);
              }
              have -= copy;
              next += copy;
              state.length -= copy;
            }
            if (state.length) {
              break inf_leave;
            }
          }
          state.length = 0;
          state.mode = NAME;
        case NAME:
          if (state.flags & 2048) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.name += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.name = null;
          }
          state.length = 0;
          state.mode = COMMENT;
        case COMMENT:
          if (state.flags & 4096) {
            if (have === 0) {
              break inf_leave;
            }
            copy = 0;
            do {
              len = input[next + copy++];
              if (state.head && len && state.length < 65536) {
                state.head.comment += String.fromCharCode(len);
              }
            } while (len && copy < have);
            if (state.flags & 512) {
              state.check = crc32(state.check, input, copy, next);
            }
            have -= copy;
            next += copy;
            if (len) {
              break inf_leave;
            }
          } else if (state.head) {
            state.head.comment = null;
          }
          state.mode = HCRC;
        case HCRC:
          if (state.flags & 512) {
            while (bits < 16) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.check & 65535)) {
              strm.msg = "header crc mismatch";
              state.mode = BAD$1;
              break;
            }
            hold = 0;
            bits = 0;
          }
          if (state.head) {
            state.head.hcrc = state.flags >> 9 & 1;
            state.head.done = true;
          }
          strm.adler = state.check = 0;
          state.mode = TYPE$1;
          break;
        case DICTID:
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          strm.adler = state.check = zswap32(hold);
          hold = 0;
          bits = 0;
          state.mode = DICT;
        case DICT:
          if (state.havedict === 0) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            return Z_NEED_DICT$1;
          }
          strm.adler = state.check = 1;
          state.mode = TYPE$1;
        case TYPE$1:
          if (flush === Z_BLOCK$1 || flush === Z_TREES$1) {
            break inf_leave;
          }
        case TYPEDO:
          if (state.last) {
            hold >>>= bits & 7;
            bits -= bits & 7;
            state.mode = CHECK;
            break;
          }
          while (bits < 3) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.last = hold & 1;
          hold >>>= 1;
          bits -= 1;
          switch (hold & 3) {
            case 0:
              state.mode = STORED;
              break;
            case 1:
              fixedtables(state);
              state.mode = LEN_;
              if (flush === Z_TREES$1) {
                hold >>>= 2;
                bits -= 2;
                break inf_leave;
              }
              break;
            case 2:
              state.mode = TABLE;
              break;
            case 3:
              strm.msg = "invalid block type";
              state.mode = BAD$1;
          }
          hold >>>= 2;
          bits -= 2;
          break;
        case STORED:
          hold >>>= bits & 7;
          bits -= bits & 7;
          while (bits < 32) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
            strm.msg = "invalid stored block lengths";
            state.mode = BAD$1;
            break;
          }
          state.length = hold & 65535;
          hold = 0;
          bits = 0;
          state.mode = COPY_;
          if (flush === Z_TREES$1) {
            break inf_leave;
          }
        case COPY_:
          state.mode = COPY;
        case COPY:
          copy = state.length;
          if (copy) {
            if (copy > have) {
              copy = have;
            }
            if (copy > left) {
              copy = left;
            }
            if (copy === 0) {
              break inf_leave;
            }
            arraySet(output, input, next, copy, put);
            have -= copy;
            next += copy;
            left -= copy;
            put += copy;
            state.length -= copy;
            break;
          }
          state.mode = TYPE$1;
          break;
        case TABLE:
          while (bits < 14) {
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          state.nlen = (hold & 31) + 257;
          hold >>>= 5;
          bits -= 5;
          state.ndist = (hold & 31) + 1;
          hold >>>= 5;
          bits -= 5;
          state.ncode = (hold & 15) + 4;
          hold >>>= 4;
          bits -= 4;
          if (state.nlen > 286 || state.ndist > 30) {
            strm.msg = "too many length or distance symbols";
            state.mode = BAD$1;
            break;
          }
          state.have = 0;
          state.mode = LENLENS;
        case LENLENS:
          while (state.have < state.ncode) {
            while (bits < 3) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.lens[order[state.have++]] = hold & 7;
            hold >>>= 3;
            bits -= 3;
          }
          while (state.have < 19) {
            state.lens[order[state.have++]] = 0;
          }
          state.lencode = state.lendyn;
          state.lenbits = 7;
          opts = { bits: state.lenbits };
          ret = inflate_table(CODES$1, state.lens, 0, 19, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid code lengths set";
            state.mode = BAD$1;
            break;
          }
          state.have = 0;
          state.mode = CODELENS;
        case CODELENS:
          while (state.have < state.nlen + state.ndist) {
            for (; ; ) {
              here = state.lencode[hold & (1 << state.lenbits) - 1];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (here_val < 16) {
              hold >>>= here_bits;
              bits -= here_bits;
              state.lens[state.have++] = here_val;
            } else {
              if (here_val === 16) {
                n = here_bits + 2;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                if (state.have === 0) {
                  strm.msg = "invalid bit length repeat";
                  state.mode = BAD$1;
                  break;
                }
                len = state.lens[state.have - 1];
                copy = 3 + (hold & 3);
                hold >>>= 2;
                bits -= 2;
              } else if (here_val === 17) {
                n = here_bits + 3;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 3 + (hold & 7);
                hold >>>= 3;
                bits -= 3;
              } else {
                n = here_bits + 7;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= here_bits;
                bits -= here_bits;
                len = 0;
                copy = 11 + (hold & 127);
                hold >>>= 7;
                bits -= 7;
              }
              if (state.have + copy > state.nlen + state.ndist) {
                strm.msg = "invalid bit length repeat";
                state.mode = BAD$1;
                break;
              }
              while (copy--) {
                state.lens[state.have++] = len;
              }
            }
          }
          if (state.mode === BAD$1) {
            break;
          }
          if (state.lens[256] === 0) {
            strm.msg = "invalid code -- missing end-of-block";
            state.mode = BAD$1;
            break;
          }
          state.lenbits = 9;
          opts = { bits: state.lenbits };
          ret = inflate_table(LENS$1, state.lens, 0, state.nlen, state.lencode, 0, state.work, opts);
          state.lenbits = opts.bits;
          if (ret) {
            strm.msg = "invalid literal/lengths set";
            state.mode = BAD$1;
            break;
          }
          state.distbits = 6;
          state.distcode = state.distdyn;
          opts = { bits: state.distbits };
          ret = inflate_table(DISTS$1, state.lens, state.nlen, state.ndist, state.distcode, 0, state.work, opts);
          state.distbits = opts.bits;
          if (ret) {
            strm.msg = "invalid distances set";
            state.mode = BAD$1;
            break;
          }
          state.mode = LEN_;
          if (flush === Z_TREES$1) {
            break inf_leave;
          }
        case LEN_:
          state.mode = LEN;
        case LEN:
          if (have >= 6 && left >= 258) {
            strm.next_out = put;
            strm.avail_out = left;
            strm.next_in = next;
            strm.avail_in = have;
            state.hold = hold;
            state.bits = bits;
            inflate_fast(strm, _out);
            put = strm.next_out;
            output = strm.output;
            left = strm.avail_out;
            next = strm.next_in;
            input = strm.input;
            have = strm.avail_in;
            hold = state.hold;
            bits = state.bits;
            if (state.mode === TYPE$1) {
              state.back = -1;
            }
            break;
          }
          state.back = 0;
          for (; ; ) {
            here = state.lencode[hold & (1 << state.lenbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if (here_op && (here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          state.length = here_val;
          if (here_op === 0) {
            state.mode = LIT;
            break;
          }
          if (here_op & 32) {
            state.back = -1;
            state.mode = TYPE$1;
            break;
          }
          if (here_op & 64) {
            strm.msg = "invalid literal/length code";
            state.mode = BAD$1;
            break;
          }
          state.extra = here_op & 15;
          state.mode = LENEXT;
        case LENEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.length += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          state.was = state.length;
          state.mode = DIST;
        case DIST:
          for (; ; ) {
            here = state.distcode[hold & (1 << state.distbits) - 1];
            here_bits = here >>> 24;
            here_op = here >>> 16 & 255;
            here_val = here & 65535;
            if (here_bits <= bits) {
              break;
            }
            if (have === 0) {
              break inf_leave;
            }
            have--;
            hold += input[next++] << bits;
            bits += 8;
          }
          if ((here_op & 240) === 0) {
            last_bits = here_bits;
            last_op = here_op;
            last_val = here_val;
            for (; ; ) {
              here = state.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
              here_bits = here >>> 24;
              here_op = here >>> 16 & 255;
              here_val = here & 65535;
              if (last_bits + here_bits <= bits) {
                break;
              }
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            hold >>>= last_bits;
            bits -= last_bits;
            state.back += last_bits;
          }
          hold >>>= here_bits;
          bits -= here_bits;
          state.back += here_bits;
          if (here_op & 64) {
            strm.msg = "invalid distance code";
            state.mode = BAD$1;
            break;
          }
          state.offset = here_val;
          state.extra = here_op & 15;
          state.mode = DISTEXT;
        case DISTEXT:
          if (state.extra) {
            n = state.extra;
            while (bits < n) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            state.offset += hold & (1 << state.extra) - 1;
            hold >>>= state.extra;
            bits -= state.extra;
            state.back += state.extra;
          }
          if (state.offset > state.dmax) {
            strm.msg = "invalid distance too far back";
            state.mode = BAD$1;
            break;
          }
          state.mode = MATCH;
        case MATCH:
          if (left === 0) {
            break inf_leave;
          }
          copy = _out - left;
          if (state.offset > copy) {
            copy = state.offset - copy;
            if (copy > state.whave) {
              if (state.sane) {
                strm.msg = "invalid distance too far back";
                state.mode = BAD$1;
                break;
              }
            }
            if (copy > state.wnext) {
              copy -= state.wnext;
              from = state.wsize - copy;
            } else {
              from = state.wnext - copy;
            }
            if (copy > state.length) {
              copy = state.length;
            }
            from_source = state.window;
          } else {
            from_source = output;
            from = put - state.offset;
            copy = state.length;
          }
          if (copy > left) {
            copy = left;
          }
          left -= copy;
          state.length -= copy;
          do {
            output[put++] = from_source[from++];
          } while (--copy);
          if (state.length === 0) {
            state.mode = LEN;
          }
          break;
        case LIT:
          if (left === 0) {
            break inf_leave;
          }
          output[put++] = state.length;
          left--;
          state.mode = LEN;
          break;
        case CHECK:
          if (state.wrap) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold |= input[next++] << bits;
              bits += 8;
            }
            _out -= left;
            strm.total_out += _out;
            state.total += _out;
            if (_out) {
              strm.adler = state.check = /*UPDATE(state.check, put - _out, _out);*/
              state.flags ? crc32(state.check, output, _out, put - _out) : adler32(state.check, output, _out, put - _out);
            }
            _out = left;
            if ((state.flags ? hold : zswap32(hold)) !== state.check) {
              strm.msg = "incorrect data check";
              state.mode = BAD$1;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = LENGTH;
        case LENGTH:
          if (state.wrap && state.flags) {
            while (bits < 32) {
              if (have === 0) {
                break inf_leave;
              }
              have--;
              hold += input[next++] << bits;
              bits += 8;
            }
            if (hold !== (state.total & 4294967295)) {
              strm.msg = "incorrect length check";
              state.mode = BAD$1;
              break;
            }
            hold = 0;
            bits = 0;
          }
          state.mode = DONE;
        case DONE:
          ret = Z_STREAM_END$1;
          break inf_leave;
        case BAD$1:
          ret = Z_DATA_ERROR$1;
          break inf_leave;
        case MEM:
          return Z_MEM_ERROR;
        case SYNC:
        default:
          return Z_STREAM_ERROR$1;
      }
    }
  strm.next_out = put;
  strm.avail_out = left;
  strm.next_in = next;
  strm.avail_in = have;
  state.hold = hold;
  state.bits = bits;
  if (state.wsize || _out !== strm.avail_out && state.mode < BAD$1 && (state.mode < CHECK || flush !== Z_FINISH$1)) {
    if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) ;
  }
  _in -= strm.avail_in;
  _out -= strm.avail_out;
  strm.total_in += _in;
  strm.total_out += _out;
  state.total += _out;
  if (state.wrap && _out) {
    strm.adler = state.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
    state.flags ? crc32(state.check, output, _out, strm.next_out - _out) : adler32(state.check, output, _out, strm.next_out - _out);
  }
  strm.data_type = state.bits + (state.last ? 64 : 0) + (state.mode === TYPE$1 ? 128 : 0) + (state.mode === LEN_ || state.mode === COPY_ ? 256 : 0);
  if ((_in === 0 && _out === 0 || flush === Z_FINISH$1) && ret === Z_OK$1) {
    ret = Z_BUF_ERROR$1;
  }
  return ret;
}
function inflateEnd(strm) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  var state = strm.state;
  if (state.window) {
    state.window = null;
  }
  strm.state = null;
  return Z_OK$1;
}
function inflateGetHeader(strm, head) {
  var state;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if ((state.wrap & 2) === 0) {
    return Z_STREAM_ERROR$1;
  }
  state.head = head;
  head.done = false;
  return Z_OK$1;
}
function inflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;
  var state;
  var dictid;
  var ret;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR$1;
  }
  state = strm.state;
  if (state.wrap !== 0 && state.mode !== DICT) {
    return Z_STREAM_ERROR$1;
  }
  if (state.mode === DICT) {
    dictid = 1;
    dictid = adler32(dictid, dictionary, dictLength, 0);
    if (dictid !== state.check) {
      return Z_DATA_ERROR$1;
    }
  }
  ret = updatewindow(strm, dictionary, dictLength, dictLength);
  if (ret) {
    state.mode = MEM;
    return Z_MEM_ERROR;
  }
  state.havedict = 1;
  return Z_OK$1;
}
var msg = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
};
function ZStream() {
  this.input = null;
  this.next_in = 0;
  this.avail_in = 0;
  this.total_in = 0;
  this.output = null;
  this.next_out = 0;
  this.avail_out = 0;
  this.total_out = 0;
  this.msg = "";
  this.state = null;
  this.data_type = 2;
  this.adler = 0;
}
function GZheader() {
  this.text = 0;
  this.time = 0;
  this.xflags = 0;
  this.os = 0;
  this.extra = null;
  this.extra_len = 0;
  this.name = "";
  this.comment = "";
  this.hcrc = 0;
  this.done = false;
}
var toString2 = Object.prototype.toString;
var Inflate = function Inflate2(options2) {
  if (!(this instanceof Inflate2)) {
    return new Inflate2(options2);
  }
  this.options = assign({
    chunkSize: 16384,
    windowBits: 0,
    to: ""
  }, options2 || {});
  var opt = this.options;
  if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
    opt.windowBits = -opt.windowBits;
    if (opt.windowBits === 0) {
      opt.windowBits = -15;
    }
  }
  if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options2 && options2.windowBits)) {
    opt.windowBits += 32;
  }
  if (opt.windowBits > 15 && opt.windowBits < 48) {
    if ((opt.windowBits & 15) === 0) {
      opt.windowBits |= 15;
    }
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ZStream();
  this.strm.avail_out = 0;
  var status = inflateInit2(
    this.strm,
    opt.windowBits
  );
  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }
  this.header = new GZheader();
  inflateGetHeader(this.strm, this.header);
  if (opt.dictionary) {
    if (typeof opt.dictionary === "string") {
      opt.dictionary = string2buf(opt.dictionary);
    } else if (toString2.call(opt.dictionary) === "[object ArrayBuffer]") {
      opt.dictionary = new Uint8Array(opt.dictionary);
    }
    if (opt.raw) {
      status = inflateSetDictionary(this.strm, opt.dictionary);
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
    }
  }
};
Inflate.prototype.push = function push2(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var dictionary = this.options.dictionary;
  var status, _mode;
  var next_out_utf8, tail, utf8str;
  var dict2;
  var allowBufError = false;
  if (this.ended) {
    return false;
  }
  _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
  if (typeof data === "string") {
    strm.input = binstring2buf(data);
  } else if (toString2.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  do {
    if (strm.avail_out === 0) {
      strm.output = Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = inflate(strm, Z_NO_FLUSH);
    if (status === Z_NEED_DICT && dictionary) {
      if (typeof dictionary === "string") {
        dict2 = string2buf(dictionary);
      } else if (toString2.call(dictionary) === "[object ArrayBuffer]") {
        dict2 = new Uint8Array(dictionary);
      } else {
        dict2 = dictionary;
      }
      status = inflateSetDictionary(this.strm, dict2);
    }
    if (status === Z_BUF_ERROR && allowBufError === true) {
      status = Z_OK;
      allowBufError = false;
    }
    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.next_out) {
      if (strm.avail_out === 0 || status === Z_STREAM_END || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
        if (this.options.to === "string") {
          next_out_utf8 = utf8border(strm.output, strm.next_out);
          tail = strm.next_out - next_out_utf8;
          utf8str = buf2string(strm.output, next_out_utf8);
          strm.next_out = tail;
          strm.avail_out = chunkSize - tail;
          if (tail) {
            arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
          }
          this.onData(utf8str);
        } else {
          this.onData(shrinkBuf(strm.output, strm.next_out));
        }
      }
    }
    if (strm.avail_in === 0 && strm.avail_out === 0) {
      allowBufError = true;
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
  if (status === Z_STREAM_END) {
    _mode = Z_FINISH;
  }
  if (_mode === Z_FINISH) {
    status = inflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }
  return true;
};
Inflate.prototype.onData = function onData(chunk) {
  this.chunks.push(chunk);
};
Inflate.prototype.onEnd = function onEnd(status) {
  if (status === Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function zero(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
var STORED_BLOCK = 0;
var STATIC_TREES = 1;
var DYN_TREES = 2;
var MIN_MATCH = 3;
var MAX_MATCH = 258;
var LENGTH_CODES = 29;
var LITERALS = 256;
var L_CODES = LITERALS + 1 + LENGTH_CODES;
var D_CODES = 30;
var BL_CODES = 19;
var HEAP_SIZE = 2 * L_CODES + 1;
var MAX_BITS = 15;
var Buf_size = 16;
var MAX_BL_BITS = 7;
var END_BLOCK = 256;
var REP_3_6 = 16;
var REPZ_3_10 = 17;
var REPZ_11_138 = 18;
var extra_lbits = (
  /* extra bits for each length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
);
var extra_dbits = (
  /* extra bits for each distance code */
  [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
);
var extra_blbits = (
  /* extra bits for each bit length code */
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
);
var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
var DIST_CODE_LEN = 512;
var static_ltree;
var static_dtree;
var _dist_code;
var _length_code;
var base_length;
var base_dist;
function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
  this.static_tree = static_tree;
  this.extra_bits = extra_bits;
  this.extra_base = extra_base;
  this.elems = elems;
  this.max_length = max_length;
  this.has_stree = static_tree && static_tree.length;
}
var static_l_desc;
var static_d_desc;
var static_bl_desc;
function TreeDesc(dyn_tree, stat_desc) {
  this.dyn_tree = dyn_tree;
  this.max_code = 0;
  this.stat_desc = stat_desc;
}
function d_code(dist) {
  return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
}
function put_short(s, w) {
  s.pending_buf[s.pending++] = w & 255;
  s.pending_buf[s.pending++] = w >>> 8 & 255;
}
function send_bits(s, value, length) {
  if (s.bi_valid > Buf_size - length) {
    s.bi_buf |= value << s.bi_valid & 65535;
    put_short(s, s.bi_buf);
    s.bi_buf = value >> Buf_size - s.bi_valid;
    s.bi_valid += length - Buf_size;
  } else {
    s.bi_buf |= value << s.bi_valid & 65535;
    s.bi_valid += length;
  }
}
function send_code(s, c, tree) {
  send_bits(
    s,
    tree[c * 2],
    tree[c * 2 + 1]
    /*.Len*/
  );
}
function bi_reverse(code, len) {
  var res = 0;
  do {
    res |= code & 1;
    code >>>= 1;
    res <<= 1;
  } while (--len > 0);
  return res >>> 1;
}
function bi_flush(s) {
  if (s.bi_valid === 16) {
    put_short(s, s.bi_buf);
    s.bi_buf = 0;
    s.bi_valid = 0;
  } else if (s.bi_valid >= 8) {
    s.pending_buf[s.pending++] = s.bi_buf & 255;
    s.bi_buf >>= 8;
    s.bi_valid -= 8;
  }
}
function gen_bitlen(s, desc) {
  var tree = desc.dyn_tree;
  var max_code = desc.max_code;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var extra = desc.stat_desc.extra_bits;
  var base = desc.stat_desc.extra_base;
  var max_length = desc.stat_desc.max_length;
  var h;
  var n, m;
  var bits;
  var xbits;
  var f;
  var overflow = 0;
  for (bits = 0; bits <= MAX_BITS; bits++) {
    s.bl_count[bits] = 0;
  }
  tree[s.heap[s.heap_max] * 2 + 1] = 0;
  for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
    n = s.heap[h];
    bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
    if (bits > max_length) {
      bits = max_length;
      overflow++;
    }
    tree[n * 2 + 1] = bits;
    if (n > max_code) {
      continue;
    }
    s.bl_count[bits]++;
    xbits = 0;
    if (n >= base) {
      xbits = extra[n - base];
    }
    f = tree[n * 2];
    s.opt_len += f * (bits + xbits);
    if (has_stree) {
      s.static_len += f * (stree[n * 2 + 1] + xbits);
    }
  }
  if (overflow === 0) {
    return;
  }
  do {
    bits = max_length - 1;
    while (s.bl_count[bits] === 0) {
      bits--;
    }
    s.bl_count[bits]--;
    s.bl_count[bits + 1] += 2;
    s.bl_count[max_length]--;
    overflow -= 2;
  } while (overflow > 0);
  for (bits = max_length; bits !== 0; bits--) {
    n = s.bl_count[bits];
    while (n !== 0) {
      m = s.heap[--h];
      if (m > max_code) {
        continue;
      }
      if (tree[m * 2 + 1] !== bits) {
        s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
        tree[m * 2 + 1] = bits;
      }
      n--;
    }
  }
}
function gen_codes(tree, max_code, bl_count) {
  var next_code = new Array(MAX_BITS + 1);
  var code = 0;
  var bits;
  var n;
  for (bits = 1; bits <= MAX_BITS; bits++) {
    next_code[bits] = code = code + bl_count[bits - 1] << 1;
  }
  for (n = 0; n <= max_code; n++) {
    var len = tree[n * 2 + 1];
    if (len === 0) {
      continue;
    }
    tree[n * 2] = bi_reverse(next_code[len]++, len);
  }
}
function tr_static_init() {
  var n;
  var bits;
  var length;
  var code;
  var dist;
  var bl_count = new Array(MAX_BITS + 1);
  static_ltree = new Array((L_CODES + 2) * 2);
  zero(static_ltree);
  static_dtree = new Array(D_CODES * 2);
  zero(static_dtree);
  _dist_code = new Array(DIST_CODE_LEN);
  zero(_dist_code);
  _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
  zero(_length_code);
  base_length = new Array(LENGTH_CODES);
  zero(base_length);
  base_dist = new Array(D_CODES);
  zero(base_dist);
  length = 0;
  for (code = 0; code < LENGTH_CODES - 1; code++) {
    base_length[code] = length;
    for (n = 0; n < 1 << extra_lbits[code]; n++) {
      _length_code[length++] = code;
    }
  }
  _length_code[length - 1] = code;
  dist = 0;
  for (code = 0; code < 16; code++) {
    base_dist[code] = dist;
    for (n = 0; n < 1 << extra_dbits[code]; n++) {
      _dist_code[dist++] = code;
    }
  }
  dist >>= 7;
  for (; code < D_CODES; code++) {
    base_dist[code] = dist << 7;
    for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
      _dist_code[256 + dist++] = code;
    }
  }
  for (bits = 0; bits <= MAX_BITS; bits++) {
    bl_count[bits] = 0;
  }
  n = 0;
  while (n <= 143) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  while (n <= 255) {
    static_ltree[n * 2 + 1] = 9;
    n++;
    bl_count[9]++;
  }
  while (n <= 279) {
    static_ltree[n * 2 + 1] = 7;
    n++;
    bl_count[7]++;
  }
  while (n <= 287) {
    static_ltree[n * 2 + 1] = 8;
    n++;
    bl_count[8]++;
  }
  gen_codes(static_ltree, L_CODES + 1, bl_count);
  for (n = 0; n < D_CODES; n++) {
    static_dtree[n * 2 + 1] = 5;
    static_dtree[n * 2] = bi_reverse(n, 5);
  }
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
  static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
  static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
}
function init_block(s) {
  var n;
  for (n = 0; n < L_CODES; n++) {
    s.dyn_ltree[n * 2] = 0;
  }
  for (n = 0; n < D_CODES; n++) {
    s.dyn_dtree[n * 2] = 0;
  }
  for (n = 0; n < BL_CODES; n++) {
    s.bl_tree[n * 2] = 0;
  }
  s.dyn_ltree[END_BLOCK * 2] = 1;
  s.opt_len = s.static_len = 0;
  s.last_lit = s.matches = 0;
}
function bi_windup(s) {
  if (s.bi_valid > 8) {
    put_short(s, s.bi_buf);
  } else if (s.bi_valid > 0) {
    s.pending_buf[s.pending++] = s.bi_buf;
  }
  s.bi_buf = 0;
  s.bi_valid = 0;
}
function copy_block(s, buf, len, header) {
  bi_windup(s);
  if (header) {
    put_short(s, len);
    put_short(s, ~len);
  }
  arraySet(s.pending_buf, s.window, buf, len, s.pending);
  s.pending += len;
}
function smaller(tree, n, m, depth) {
  var _n2 = n * 2;
  var _m2 = m * 2;
  return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
}
function pqdownheap(s, tree, k) {
  var v = s.heap[k];
  var j = k << 1;
  while (j <= s.heap_len) {
    if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
      j++;
    }
    if (smaller(tree, v, s.heap[j], s.depth)) {
      break;
    }
    s.heap[k] = s.heap[j];
    k = j;
    j <<= 1;
  }
  s.heap[k] = v;
}
function compress_block(s, ltree, dtree) {
  var dist;
  var lc;
  var lx = 0;
  var code;
  var extra;
  if (s.last_lit !== 0) {
    do {
      dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
      lc = s.pending_buf[s.l_buf + lx];
      lx++;
      if (dist === 0) {
        send_code(s, lc, ltree);
      } else {
        code = _length_code[lc];
        send_code(s, code + LITERALS + 1, ltree);
        extra = extra_lbits[code];
        if (extra !== 0) {
          lc -= base_length[code];
          send_bits(s, lc, extra);
        }
        dist--;
        code = d_code(dist);
        send_code(s, code, dtree);
        extra = extra_dbits[code];
        if (extra !== 0) {
          dist -= base_dist[code];
          send_bits(s, dist, extra);
        }
      }
    } while (lx < s.last_lit);
  }
  send_code(s, END_BLOCK, ltree);
}
function build_tree(s, desc) {
  var tree = desc.dyn_tree;
  var stree = desc.stat_desc.static_tree;
  var has_stree = desc.stat_desc.has_stree;
  var elems = desc.stat_desc.elems;
  var n, m;
  var max_code = -1;
  var node;
  s.heap_len = 0;
  s.heap_max = HEAP_SIZE;
  for (n = 0; n < elems; n++) {
    if (tree[n * 2] !== 0) {
      s.heap[++s.heap_len] = max_code = n;
      s.depth[n] = 0;
    } else {
      tree[n * 2 + 1] = 0;
    }
  }
  while (s.heap_len < 2) {
    node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
    tree[node * 2] = 1;
    s.depth[node] = 0;
    s.opt_len--;
    if (has_stree) {
      s.static_len -= stree[node * 2 + 1];
    }
  }
  desc.max_code = max_code;
  for (n = s.heap_len >> 1; n >= 1; n--) {
    pqdownheap(s, tree, n);
  }
  node = elems;
  do {
    n = s.heap[
      1
      /*SMALLEST*/
    ];
    s.heap[
      1
      /*SMALLEST*/
    ] = s.heap[s.heap_len--];
    pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
    m = s.heap[
      1
      /*SMALLEST*/
    ];
    s.heap[--s.heap_max] = n;
    s.heap[--s.heap_max] = m;
    tree[node * 2] = tree[n * 2] + tree[m * 2];
    s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
    tree[n * 2 + 1] = tree[m * 2 + 1] = node;
    s.heap[
      1
      /*SMALLEST*/
    ] = node++;
    pqdownheap(
      s,
      tree,
      1
      /*SMALLEST*/
    );
  } while (s.heap_len >= 2);
  s.heap[--s.heap_max] = s.heap[
    1
    /*SMALLEST*/
  ];
  gen_bitlen(s, desc);
  gen_codes(tree, max_code, s.bl_count);
}
function scan_tree(s, tree, max_code) {
  var n;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  tree[(max_code + 1) * 2 + 1] = 65535;
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      s.bl_tree[curlen * 2] += count;
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        s.bl_tree[curlen * 2]++;
      }
      s.bl_tree[REP_3_6 * 2]++;
    } else if (count <= 10) {
      s.bl_tree[REPZ_3_10 * 2]++;
    } else {
      s.bl_tree[REPZ_11_138 * 2]++;
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function send_tree(s, tree, max_code) {
  var n;
  var prevlen = -1;
  var curlen;
  var nextlen = tree[0 * 2 + 1];
  var count = 0;
  var max_count = 7;
  var min_count = 4;
  if (nextlen === 0) {
    max_count = 138;
    min_count = 3;
  }
  for (n = 0; n <= max_code; n++) {
    curlen = nextlen;
    nextlen = tree[(n + 1) * 2 + 1];
    if (++count < max_count && curlen === nextlen) {
      continue;
    } else if (count < min_count) {
      do {
        send_code(s, curlen, s.bl_tree);
      } while (--count !== 0);
    } else if (curlen !== 0) {
      if (curlen !== prevlen) {
        send_code(s, curlen, s.bl_tree);
        count--;
      }
      send_code(s, REP_3_6, s.bl_tree);
      send_bits(s, count - 3, 2);
    } else if (count <= 10) {
      send_code(s, REPZ_3_10, s.bl_tree);
      send_bits(s, count - 3, 3);
    } else {
      send_code(s, REPZ_11_138, s.bl_tree);
      send_bits(s, count - 11, 7);
    }
    count = 0;
    prevlen = curlen;
    if (nextlen === 0) {
      max_count = 138;
      min_count = 3;
    } else if (curlen === nextlen) {
      max_count = 6;
      min_count = 3;
    } else {
      max_count = 7;
      min_count = 4;
    }
  }
}
function build_bl_tree(s) {
  var max_blindex;
  scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
  scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
  build_tree(s, s.bl_desc);
  for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
    if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
      break;
    }
  }
  s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
  return max_blindex;
}
function send_all_trees(s, lcodes, dcodes, blcodes) {
  var rank2;
  send_bits(s, lcodes - 257, 5);
  send_bits(s, dcodes - 1, 5);
  send_bits(s, blcodes - 4, 4);
  for (rank2 = 0; rank2 < blcodes; rank2++) {
    send_bits(s, s.bl_tree[bl_order[rank2] * 2 + 1], 3);
  }
  send_tree(s, s.dyn_ltree, lcodes - 1);
  send_tree(s, s.dyn_dtree, dcodes - 1);
}
function detect_data_type(s) {
  var black_mask = 4093624447;
  var n;
  for (n = 0; n <= 31; n++, black_mask >>>= 1) {
    if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
      return Z_BINARY;
    }
  }
  if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
    return Z_TEXT;
  }
  for (n = 32; n < LITERALS; n++) {
    if (s.dyn_ltree[n * 2] !== 0) {
      return Z_TEXT;
    }
  }
  return Z_BINARY;
}
var static_init_done = false;
function _tr_init(s) {
  if (!static_init_done) {
    tr_static_init();
    static_init_done = true;
  }
  s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
  s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
  s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
  s.bi_buf = 0;
  s.bi_valid = 0;
  init_block(s);
}
function _tr_stored_block(s, buf, stored_len, last2) {
  send_bits(s, (STORED_BLOCK << 1) + (last2 ? 1 : 0), 3);
  copy_block(s, buf, stored_len, true);
}
function _tr_align(s) {
  send_bits(s, STATIC_TREES << 1, 3);
  send_code(s, END_BLOCK, static_ltree);
  bi_flush(s);
}
function _tr_flush_block(s, buf, stored_len, last2) {
  var opt_lenb, static_lenb;
  var max_blindex = 0;
  if (s.level > 0) {
    if (s.strm.data_type === Z_UNKNOWN) {
      s.strm.data_type = detect_data_type(s);
    }
    build_tree(s, s.l_desc);
    build_tree(s, s.d_desc);
    max_blindex = build_bl_tree(s);
    opt_lenb = s.opt_len + 3 + 7 >>> 3;
    static_lenb = s.static_len + 3 + 7 >>> 3;
    if (static_lenb <= opt_lenb) {
      opt_lenb = static_lenb;
    }
  } else {
    opt_lenb = static_lenb = stored_len + 5;
  }
  if (stored_len + 4 <= opt_lenb && buf !== -1) {
    _tr_stored_block(s, buf, stored_len, last2);
  } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
    send_bits(s, (STATIC_TREES << 1) + (last2 ? 1 : 0), 3);
    compress_block(s, static_ltree, static_dtree);
  } else {
    send_bits(s, (DYN_TREES << 1) + (last2 ? 1 : 0), 3);
    send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
    compress_block(s, s.dyn_ltree, s.dyn_dtree);
  }
  init_block(s);
  if (last2) {
    bi_windup(s);
  }
}
function _tr_tally(s, dist, lc) {
  s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
  s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
  s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
  s.last_lit++;
  if (dist === 0) {
    s.dyn_ltree[lc * 2]++;
  } else {
    s.matches++;
    dist--;
    s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
    s.dyn_dtree[d_code(dist) * 2]++;
  }
  return s.last_lit === s.lit_bufsize - 1;
}
var MAX_MEM_LEVEL = 9;
var LENGTH_CODES$1 = 29;
var LITERALS$1 = 256;
var L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1;
var D_CODES$1 = 30;
var BL_CODES$1 = 19;
var HEAP_SIZE$1 = 2 * L_CODES$1 + 1;
var MAX_BITS$1 = 15;
var MIN_MATCH$1 = 3;
var MAX_MATCH$1 = 258;
var MIN_LOOKAHEAD = MAX_MATCH$1 + MIN_MATCH$1 + 1;
var PRESET_DICT = 32;
var INIT_STATE = 42;
var EXTRA_STATE = 69;
var NAME_STATE = 73;
var COMMENT_STATE = 91;
var HCRC_STATE = 103;
var BUSY_STATE = 113;
var FINISH_STATE = 666;
var BS_NEED_MORE = 1;
var BS_BLOCK_DONE = 2;
var BS_FINISH_STARTED = 3;
var BS_FINISH_DONE = 4;
var OS_CODE = 3;
function err(strm, errorCode) {
  strm.msg = msg[errorCode];
  return errorCode;
}
function rank(f) {
  return (f << 1) - (f > 4 ? 9 : 0);
}
function zero$1(buf) {
  var len = buf.length;
  while (--len >= 0) {
    buf[len] = 0;
  }
}
function flush_pending(strm) {
  var s = strm.state;
  var len = s.pending;
  if (len > strm.avail_out) {
    len = strm.avail_out;
  }
  if (len === 0) {
    return;
  }
  arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
  strm.next_out += len;
  s.pending_out += len;
  strm.total_out += len;
  strm.avail_out -= len;
  s.pending -= len;
  if (s.pending === 0) {
    s.pending_out = 0;
  }
}
function flush_block_only(s, last2) {
  _tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last2);
  s.block_start = s.strstart;
  flush_pending(s.strm);
}
function put_byte(s, b) {
  s.pending_buf[s.pending++] = b;
}
function putShortMSB(s, b) {
  s.pending_buf[s.pending++] = b >>> 8 & 255;
  s.pending_buf[s.pending++] = b & 255;
}
function read_buf(strm, buf, start, size) {
  var len = strm.avail_in;
  if (len > size) {
    len = size;
  }
  if (len === 0) {
    return 0;
  }
  strm.avail_in -= len;
  arraySet(buf, strm.input, strm.next_in, len, start);
  if (strm.state.wrap === 1) {
    strm.adler = adler32(strm.adler, buf, len, start);
  } else if (strm.state.wrap === 2) {
    strm.adler = crc32(strm.adler, buf, len, start);
  }
  strm.next_in += len;
  strm.total_in += len;
  return len;
}
function longest_match(s, cur_match) {
  var chain_length = s.max_chain_length;
  var scan = s.strstart;
  var match;
  var len;
  var best_len = s.prev_length;
  var nice_match = s.nice_match;
  var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
  var _win = s.window;
  var wmask = s.w_mask;
  var prev = s.prev;
  var strend = s.strstart + MAX_MATCH$1;
  var scan_end1 = _win[scan + best_len - 1];
  var scan_end = _win[scan + best_len];
  if (s.prev_length >= s.good_match) {
    chain_length >>= 2;
  }
  if (nice_match > s.lookahead) {
    nice_match = s.lookahead;
  }
  do {
    match = cur_match;
    if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
      continue;
    }
    scan += 2;
    match++;
    do {
    } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
    len = MAX_MATCH$1 - (strend - scan);
    scan = strend - MAX_MATCH$1;
    if (len > best_len) {
      s.match_start = cur_match;
      best_len = len;
      if (len >= nice_match) {
        break;
      }
      scan_end1 = _win[scan + best_len - 1];
      scan_end = _win[scan + best_len];
    }
  } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
  if (best_len <= s.lookahead) {
    return best_len;
  }
  return s.lookahead;
}
function fill_window(s) {
  var _w_size = s.w_size;
  var p, n, m, more, str;
  do {
    more = s.window_size - s.lookahead - s.strstart;
    if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
      arraySet(s.window, s.window, _w_size, _w_size, 0);
      s.match_start -= _w_size;
      s.strstart -= _w_size;
      s.block_start -= _w_size;
      n = s.hash_size;
      p = n;
      do {
        m = s.head[--p];
        s.head[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);
      n = _w_size;
      p = n;
      do {
        m = s.prev[--p];
        s.prev[p] = m >= _w_size ? m - _w_size : 0;
      } while (--n);
      more += _w_size;
    }
    if (s.strm.avail_in === 0) {
      break;
    }
    n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
    s.lookahead += n;
    if (s.lookahead + s.insert >= MIN_MATCH$1) {
      str = s.strstart - s.insert;
      s.ins_h = s.window[str];
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + 1]) & s.hash_mask;
      while (s.insert) {
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH$1 - 1]) & s.hash_mask;
        s.prev[str & s.w_mask] = s.head[s.ins_h];
        s.head[s.ins_h] = str;
        str++;
        s.insert--;
        if (s.lookahead + s.insert < MIN_MATCH$1) {
          break;
        }
      }
    }
  } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
}
function deflate_stored(s, flush) {
  var max_block_size = 65535;
  if (max_block_size > s.pending_buf_size - 5) {
    max_block_size = s.pending_buf_size - 5;
  }
  for (; ; ) {
    if (s.lookahead <= 1) {
      fill_window(s);
      if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.strstart += s.lookahead;
    s.lookahead = 0;
    var max_start = s.block_start + max_block_size;
    if (s.strstart === 0 || s.strstart >= max_start) {
      s.lookahead = s.strstart - max_start;
      s.strstart = max_start;
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
    if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.strstart > s.block_start) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_NEED_MORE;
}
function deflate_fast(s, flush) {
  var hash_head;
  var bflush;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH$1) {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
    }
    if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
    }
    if (s.match_length >= MIN_MATCH$1) {
      bflush = _tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH$1);
      s.lookahead -= s.match_length;
      if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH$1) {
        s.match_length--;
        do {
          s.strstart++;
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        } while (--s.match_length !== 0);
        s.strstart++;
      } else {
        s.strstart += s.match_length;
        s.match_length = 0;
        s.ins_h = s.window[s.strstart];
        s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
      }
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_slow(s, flush) {
  var hash_head;
  var bflush;
  var max_insert;
  for (; ; ) {
    if (s.lookahead < MIN_LOOKAHEAD) {
      fill_window(s);
      if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    hash_head = 0;
    if (s.lookahead >= MIN_MATCH$1) {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
      hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = s.strstart;
    }
    s.prev_length = s.match_length;
    s.prev_match = s.match_start;
    s.match_length = MIN_MATCH$1 - 1;
    if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
      s.match_length = longest_match(s, hash_head);
      if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH$1 && s.strstart - s.match_start > 4096)) {
        s.match_length = MIN_MATCH$1 - 1;
      }
    }
    if (s.prev_length >= MIN_MATCH$1 && s.match_length <= s.prev_length) {
      max_insert = s.strstart + s.lookahead - MIN_MATCH$1;
      bflush = _tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH$1);
      s.lookahead -= s.prev_length - 1;
      s.prev_length -= 2;
      do {
        if (++s.strstart <= max_insert) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH$1 - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
      } while (--s.prev_length !== 0);
      s.match_available = 0;
      s.match_length = MIN_MATCH$1 - 1;
      s.strstart++;
      if (bflush) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
    } else if (s.match_available) {
      bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
      if (bflush) {
        flush_block_only(s, false);
      }
      s.strstart++;
      s.lookahead--;
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    } else {
      s.match_available = 1;
      s.strstart++;
      s.lookahead--;
    }
  }
  if (s.match_available) {
    bflush = _tr_tally(s, 0, s.window[s.strstart - 1]);
    s.match_available = 0;
  }
  s.insert = s.strstart < MIN_MATCH$1 - 1 ? s.strstart : MIN_MATCH$1 - 1;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_rle(s, flush) {
  var bflush;
  var prev;
  var scan, strend;
  var _win = s.window;
  for (; ; ) {
    if (s.lookahead <= MAX_MATCH$1) {
      fill_window(s);
      if (s.lookahead <= MAX_MATCH$1 && flush === Z_NO_FLUSH) {
        return BS_NEED_MORE;
      }
      if (s.lookahead === 0) {
        break;
      }
    }
    s.match_length = 0;
    if (s.lookahead >= MIN_MATCH$1 && s.strstart > 0) {
      scan = s.strstart - 1;
      prev = _win[scan];
      if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
        strend = s.strstart + MAX_MATCH$1;
        do {
        } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
        s.match_length = MAX_MATCH$1 - (strend - scan);
        if (s.match_length > s.lookahead) {
          s.match_length = s.lookahead;
        }
      }
    }
    if (s.match_length >= MIN_MATCH$1) {
      bflush = _tr_tally(s, 1, s.match_length - MIN_MATCH$1);
      s.lookahead -= s.match_length;
      s.strstart += s.match_length;
      s.match_length = 0;
    } else {
      bflush = _tr_tally(s, 0, s.window[s.strstart]);
      s.lookahead--;
      s.strstart++;
    }
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function deflate_huff(s, flush) {
  var bflush;
  for (; ; ) {
    if (s.lookahead === 0) {
      fill_window(s);
      if (s.lookahead === 0) {
        if (flush === Z_NO_FLUSH) {
          return BS_NEED_MORE;
        }
        break;
      }
    }
    s.match_length = 0;
    bflush = _tr_tally(s, 0, s.window[s.strstart]);
    s.lookahead--;
    s.strstart++;
    if (bflush) {
      flush_block_only(s, false);
      if (s.strm.avail_out === 0) {
        return BS_NEED_MORE;
      }
    }
  }
  s.insert = 0;
  if (flush === Z_FINISH) {
    flush_block_only(s, true);
    if (s.strm.avail_out === 0) {
      return BS_FINISH_STARTED;
    }
    return BS_FINISH_DONE;
  }
  if (s.last_lit) {
    flush_block_only(s, false);
    if (s.strm.avail_out === 0) {
      return BS_NEED_MORE;
    }
  }
  return BS_BLOCK_DONE;
}
function Config(good_length, max_lazy, nice_length, max_chain, func) {
  this.good_length = good_length;
  this.max_lazy = max_lazy;
  this.nice_length = nice_length;
  this.max_chain = max_chain;
  this.func = func;
}
var configurationTable = function() {
  var table = [
    /*      good lazy nice chain */
    new Config(0, 0, 0, 0, deflate_stored),
    /* 0 store only */
    new Config(4, 4, 8, 4, deflate_fast),
    /* 1 max speed, no lazy matches */
    new Config(4, 5, 16, 8, deflate_fast),
    /* 2 */
    new Config(4, 6, 32, 32, deflate_fast),
    /* 3 */
    new Config(4, 4, 16, 16, deflate_slow),
    /* 4 lazy matches */
    new Config(8, 16, 32, 32, deflate_slow),
    /* 5 */
    new Config(8, 16, 128, 128, deflate_slow),
    /* 6 */
    new Config(8, 32, 128, 256, deflate_slow),
    /* 7 */
    new Config(32, 128, 258, 1024, deflate_slow),
    /* 8 */
    new Config(32, 258, 258, 4096, deflate_slow)
    /* 9 max compression */
  ];
  configurationTable = function() {
    return table;
  };
  return table;
};
function lm_init(s) {
  s.window_size = 2 * s.w_size;
  zero$1(s.head);
  var table = configurationTable();
  s.max_lazy_match = table[s.level].max_lazy;
  s.good_match = table[s.level].good_length;
  s.nice_match = table[s.level].nice_length;
  s.max_chain_length = table[s.level].max_chain;
  s.strstart = 0;
  s.block_start = 0;
  s.lookahead = 0;
  s.insert = 0;
  s.match_length = s.prev_length = MIN_MATCH$1 - 1;
  s.match_available = 0;
  s.ins_h = 0;
}
function DeflateState() {
  this.strm = null;
  this.status = 0;
  this.pending_buf = null;
  this.pending_buf_size = 0;
  this.pending_out = 0;
  this.pending = 0;
  this.wrap = 0;
  this.gzhead = null;
  this.gzindex = 0;
  this.method = Z_DEFLATED;
  this.last_flush = -1;
  this.w_size = 0;
  this.w_bits = 0;
  this.w_mask = 0;
  this.window = null;
  this.window_size = 0;
  this.prev = null;
  this.head = null;
  this.ins_h = 0;
  this.hash_size = 0;
  this.hash_bits = 0;
  this.hash_mask = 0;
  this.hash_shift = 0;
  this.block_start = 0;
  this.match_length = 0;
  this.prev_match = 0;
  this.match_available = 0;
  this.strstart = 0;
  this.match_start = 0;
  this.lookahead = 0;
  this.prev_length = 0;
  this.max_chain_length = 0;
  this.max_lazy_match = 0;
  this.level = 0;
  this.strategy = 0;
  this.good_match = 0;
  this.nice_match = 0;
  this.dyn_ltree = Buf16(HEAP_SIZE$1 * 2);
  this.dyn_dtree = Buf16((2 * D_CODES$1 + 1) * 2);
  this.bl_tree = Buf16((2 * BL_CODES$1 + 1) * 2);
  zero$1(this.dyn_ltree);
  zero$1(this.dyn_dtree);
  zero$1(this.bl_tree);
  this.l_desc = null;
  this.d_desc = null;
  this.bl_desc = null;
  this.bl_count = Buf16(MAX_BITS$1 + 1);
  this.heap = Buf16(2 * L_CODES$1 + 1);
  zero$1(this.heap);
  this.heap_len = 0;
  this.heap_max = 0;
  this.depth = Buf16(2 * L_CODES$1 + 1);
  zero$1(this.depth);
  this.l_buf = 0;
  this.lit_bufsize = 0;
  this.last_lit = 0;
  this.d_buf = 0;
  this.opt_len = 0;
  this.static_len = 0;
  this.matches = 0;
  this.insert = 0;
  this.bi_buf = 0;
  this.bi_valid = 0;
}
function deflateResetKeep(strm) {
  var s;
  if (!strm || !strm.state) {
    return err(strm, Z_STREAM_ERROR);
  }
  strm.total_in = strm.total_out = 0;
  strm.data_type = Z_UNKNOWN;
  s = strm.state;
  s.pending = 0;
  s.pending_out = 0;
  if (s.wrap < 0) {
    s.wrap = -s.wrap;
  }
  s.status = s.wrap ? INIT_STATE : BUSY_STATE;
  strm.adler = s.wrap === 2 ? 0 : 1;
  s.last_flush = Z_NO_FLUSH;
  _tr_init(s);
  return Z_OK;
}
function deflateReset(strm) {
  var ret = deflateResetKeep(strm);
  if (ret === Z_OK) {
    lm_init(strm.state);
  }
  return ret;
}
function deflateSetHeader(strm, head) {
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  if (strm.state.wrap !== 2) {
    return Z_STREAM_ERROR;
  }
  strm.state.gzhead = head;
  return Z_OK;
}
function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
  if (!strm) {
    return Z_STREAM_ERROR;
  }
  var wrap2 = 1;
  if (level === Z_DEFAULT_COMPRESSION) {
    level = 6;
  }
  if (windowBits < 0) {
    wrap2 = 0;
    windowBits = -windowBits;
  } else if (windowBits > 15) {
    wrap2 = 2;
    windowBits -= 16;
  }
  if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
    return err(strm, Z_STREAM_ERROR);
  }
  if (windowBits === 8) {
    windowBits = 9;
  }
  var s = new DeflateState();
  strm.state = s;
  s.strm = strm;
  s.wrap = wrap2;
  s.gzhead = null;
  s.w_bits = windowBits;
  s.w_size = 1 << s.w_bits;
  s.w_mask = s.w_size - 1;
  s.hash_bits = memLevel + 7;
  s.hash_size = 1 << s.hash_bits;
  s.hash_mask = s.hash_size - 1;
  s.hash_shift = ~~((s.hash_bits + MIN_MATCH$1 - 1) / MIN_MATCH$1);
  s.window = Buf8(s.w_size * 2);
  s.head = Buf16(s.hash_size);
  s.prev = Buf16(s.w_size);
  s.lit_bufsize = 1 << memLevel + 6;
  s.pending_buf_size = s.lit_bufsize * 4;
  s.pending_buf = Buf8(s.pending_buf_size);
  s.d_buf = 1 * s.lit_bufsize;
  s.l_buf = (1 + 2) * s.lit_bufsize;
  s.level = level;
  s.strategy = strategy;
  s.method = method;
  return deflateReset(strm);
}
function deflate(strm, flush) {
  var old_flush, s;
  var beg, val;
  if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
    return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
  }
  s = strm.state;
  if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
    return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
  }
  s.strm = strm;
  old_flush = s.last_flush;
  s.last_flush = flush;
  if (s.status === INIT_STATE) {
    if (s.wrap === 2) {
      strm.adler = 0;
      put_byte(s, 31);
      put_byte(s, 139);
      put_byte(s, 8);
      if (!s.gzhead) {
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, 0);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, OS_CODE);
        s.status = BUSY_STATE;
      } else {
        put_byte(
          s,
          (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
        );
        put_byte(s, s.gzhead.time & 255);
        put_byte(s, s.gzhead.time >> 8 & 255);
        put_byte(s, s.gzhead.time >> 16 & 255);
        put_byte(s, s.gzhead.time >> 24 & 255);
        put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
        put_byte(s, s.gzhead.os & 255);
        if (s.gzhead.extra && s.gzhead.extra.length) {
          put_byte(s, s.gzhead.extra.length & 255);
          put_byte(s, s.gzhead.extra.length >> 8 & 255);
        }
        if (s.gzhead.hcrc) {
          strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
        }
        s.gzindex = 0;
        s.status = EXTRA_STATE;
      }
    } else {
      var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
      var level_flags = -1;
      if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
        level_flags = 0;
      } else if (s.level < 6) {
        level_flags = 1;
      } else if (s.level === 6) {
        level_flags = 2;
      } else {
        level_flags = 3;
      }
      header |= level_flags << 6;
      if (s.strstart !== 0) {
        header |= PRESET_DICT;
      }
      header += 31 - header % 31;
      s.status = BUSY_STATE;
      putShortMSB(s, header);
      if (s.strstart !== 0) {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      strm.adler = 1;
    }
  }
  if (s.status === EXTRA_STATE) {
    if (s.gzhead.extra) {
      beg = s.pending;
      while (s.gzindex < (s.gzhead.extra.length & 65535)) {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            break;
          }
        }
        put_byte(s, s.gzhead.extra[s.gzindex] & 255);
        s.gzindex++;
      }
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (s.gzindex === s.gzhead.extra.length) {
        s.gzindex = 0;
        s.status = NAME_STATE;
      }
    } else {
      s.status = NAME_STATE;
    }
  }
  if (s.status === NAME_STATE) {
    if (s.gzhead.name) {
      beg = s.pending;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s.gzindex < s.gzhead.name.length) {
          val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.gzindex = 0;
        s.status = COMMENT_STATE;
      }
    } else {
      s.status = COMMENT_STATE;
    }
  }
  if (s.status === COMMENT_STATE) {
    if (s.gzhead.comment) {
      beg = s.pending;
      do {
        if (s.pending === s.pending_buf_size) {
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          flush_pending(strm);
          beg = s.pending;
          if (s.pending === s.pending_buf_size) {
            val = 1;
            break;
          }
        }
        if (s.gzindex < s.gzhead.comment.length) {
          val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
        } else {
          val = 0;
        }
        put_byte(s, val);
      } while (val !== 0);
      if (s.gzhead.hcrc && s.pending > beg) {
        strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
      }
      if (val === 0) {
        s.status = HCRC_STATE;
      }
    } else {
      s.status = HCRC_STATE;
    }
  }
  if (s.status === HCRC_STATE) {
    if (s.gzhead.hcrc) {
      if (s.pending + 2 > s.pending_buf_size) {
        flush_pending(strm);
      }
      if (s.pending + 2 <= s.pending_buf_size) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        strm.adler = 0;
        s.status = BUSY_STATE;
      }
    } else {
      s.status = BUSY_STATE;
    }
  }
  if (s.pending !== 0) {
    flush_pending(strm);
    if (strm.avail_out === 0) {
      s.last_flush = -1;
      return Z_OK;
    }
  } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
    return err(strm, Z_BUF_ERROR);
  }
  if (s.status === FINISH_STATE && strm.avail_in !== 0) {
    return err(strm, Z_BUF_ERROR);
  }
  if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
    var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configurationTable()[s.level].func(s, flush);
    if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
      s.status = FINISH_STATE;
    }
    if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
      if (strm.avail_out === 0) {
        s.last_flush = -1;
      }
      return Z_OK;
    }
    if (bstate === BS_BLOCK_DONE) {
      if (flush === Z_PARTIAL_FLUSH) {
        _tr_align(s);
      } else if (flush !== Z_BLOCK) {
        _tr_stored_block(s, 0, 0, false);
        if (flush === Z_FULL_FLUSH) {
          zero$1(s.head);
          if (s.lookahead === 0) {
            s.strstart = 0;
            s.block_start = 0;
            s.insert = 0;
          }
        }
      }
      flush_pending(strm);
      if (strm.avail_out === 0) {
        s.last_flush = -1;
        return Z_OK;
      }
    }
  }
  if (flush !== Z_FINISH) {
    return Z_OK;
  }
  if (s.wrap <= 0) {
    return Z_STREAM_END;
  }
  if (s.wrap === 2) {
    put_byte(s, strm.adler & 255);
    put_byte(s, strm.adler >> 8 & 255);
    put_byte(s, strm.adler >> 16 & 255);
    put_byte(s, strm.adler >> 24 & 255);
    put_byte(s, strm.total_in & 255);
    put_byte(s, strm.total_in >> 8 & 255);
    put_byte(s, strm.total_in >> 16 & 255);
    put_byte(s, strm.total_in >> 24 & 255);
  } else {
    putShortMSB(s, strm.adler >>> 16);
    putShortMSB(s, strm.adler & 65535);
  }
  flush_pending(strm);
  if (s.wrap > 0) {
    s.wrap = -s.wrap;
  }
  return s.pending !== 0 ? Z_OK : Z_STREAM_END;
}
function deflateEnd(strm) {
  var status;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  status = strm.state.status;
  if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
    return err(strm, Z_STREAM_ERROR);
  }
  strm.state = null;
  return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
}
function deflateSetDictionary(strm, dictionary) {
  var dictLength = dictionary.length;
  var s;
  var str, n;
  var wrap2;
  var avail;
  var next;
  var input;
  var tmpDict;
  if (!strm || !strm.state) {
    return Z_STREAM_ERROR;
  }
  s = strm.state;
  wrap2 = s.wrap;
  if (wrap2 === 2 || wrap2 === 1 && s.status !== INIT_STATE || s.lookahead) {
    return Z_STREAM_ERROR;
  }
  if (wrap2 === 1) {
    strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
  }
  s.wrap = 0;
  if (dictLength >= s.w_size) {
    if (wrap2 === 0) {
      zero$1(s.head);
      s.strstart = 0;
      s.block_start = 0;
      s.insert = 0;
    }
    tmpDict = Buf8(s.w_size);
    arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
    dictionary = tmpDict;
    dictLength = s.w_size;
  }
  avail = strm.avail_in;
  next = strm.next_in;
  input = strm.input;
  strm.avail_in = dictLength;
  strm.next_in = 0;
  strm.input = dictionary;
  fill_window(s);
  while (s.lookahead >= MIN_MATCH$1) {
    str = s.strstart;
    n = s.lookahead - (MIN_MATCH$1 - 1);
    do {
      s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str + MIN_MATCH$1 - 1]) & s.hash_mask;
      s.prev[str & s.w_mask] = s.head[s.ins_h];
      s.head[s.ins_h] = str;
      str++;
    } while (--n);
    s.strstart = str;
    s.lookahead = MIN_MATCH$1 - 1;
    fill_window(s);
  }
  s.strstart += s.lookahead;
  s.block_start = s.strstart;
  s.insert = s.lookahead;
  s.lookahead = 0;
  s.match_length = s.prev_length = MIN_MATCH$1 - 1;
  s.match_available = 0;
  strm.next_in = next;
  strm.input = input;
  strm.avail_in = avail;
  s.wrap = wrap2;
  return Z_OK;
}
var toString$1 = Object.prototype.toString;
var Deflate = function Deflate2(options2) {
  this.options = assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY,
    to: ""
  }, options2 || {});
  var opt = this.options;
  if (opt.raw && opt.windowBits > 0) {
    opt.windowBits = -opt.windowBits;
  } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
    opt.windowBits += 16;
  }
  this.err = 0;
  this.msg = "";
  this.ended = false;
  this.chunks = [];
  this.strm = new ZStream();
  this.strm.avail_out = 0;
  var status = deflateInit2(
    this.strm,
    opt.level,
    opt.method,
    opt.windowBits,
    opt.memLevel,
    opt.strategy
  );
  if (status !== Z_OK) {
    throw new Error(msg[status]);
  }
  if (opt.header) {
    deflateSetHeader(this.strm, opt.header);
  }
  if (opt.dictionary) {
    var dict2;
    if (typeof opt.dictionary === "string") {
      dict2 = string2buf(opt.dictionary);
    } else if (toString$1.call(opt.dictionary) === "[object ArrayBuffer]") {
      dict2 = new Uint8Array(opt.dictionary);
    } else {
      dict2 = opt.dictionary;
    }
    status = deflateSetDictionary(this.strm, dict2);
    if (status !== Z_OK) {
      throw new Error(msg[status]);
    }
    this._dict_set = true;
  }
};
Deflate.prototype.push = function push3(data, mode) {
  var strm = this.strm;
  var chunkSize = this.options.chunkSize;
  var status, _mode;
  if (this.ended) {
    return false;
  }
  _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
  if (typeof data === "string") {
    strm.input = string2buf(data);
  } else if (toString$1.call(data) === "[object ArrayBuffer]") {
    strm.input = new Uint8Array(data);
  } else {
    strm.input = data;
  }
  strm.next_in = 0;
  strm.avail_in = strm.input.length;
  do {
    if (strm.avail_out === 0) {
      strm.output = Buf8(chunkSize);
      strm.next_out = 0;
      strm.avail_out = chunkSize;
    }
    status = deflate(strm, _mode);
    if (status !== Z_STREAM_END && status !== Z_OK) {
      this.onEnd(status);
      this.ended = true;
      return false;
    }
    if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
      if (this.options.to === "string") {
        this.onData(buf2binstring(shrinkBuf(strm.output, strm.next_out)));
      } else {
        this.onData(shrinkBuf(strm.output, strm.next_out));
      }
    }
  } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
  if (_mode === Z_FINISH) {
    status = deflateEnd(this.strm);
    this.onEnd(status);
    this.ended = true;
    return status === Z_OK;
  }
  if (_mode === Z_SYNC_FLUSH) {
    this.onEnd(Z_OK);
    strm.avail_out = 0;
    return true;
  }
  return true;
};
Deflate.prototype.onData = function onData2(chunk) {
  this.chunks.push(chunk);
};
Deflate.prototype.onEnd = function onEnd2(status) {
  if (status === Z_OK) {
    if (this.options.to === "string") {
      this.result = this.chunks.join("");
    } else {
      this.result = flattenChunks(this.chunks);
    }
  }
  this.chunks = [];
  this.err = status;
  this.msg = this.strm.msg;
};
function deflate$1(input, options2) {
  var deflator = new Deflate(options2);
  deflator.push(input, true);
  if (deflator.err) {
    throw deflator.msg || msg[deflator.err];
  }
  return deflator.result;
}

// node_modules/@progress/kendo-drawing/dist/es/pdf/deflate.js
var deflate2 = deflate$1;
function supportsDeflate() {
  return true;
}

// node_modules/@progress/kendo-drawing/dist/es/pdf/core.js
var browser3 = support_default.browser;
var NL = "\n";
var RESOURCE_COUNTER = 0;
var PATTERN_COUNTER = 0;
var PAPER_SIZE = {
  a0: [2383.94, 3370.39],
  a1: [1683.78, 2383.94],
  a2: [1190.55, 1683.78],
  a3: [841.89, 1190.55],
  a4: [595.28, 841.89],
  a5: [419.53, 595.28],
  a6: [297.64, 419.53],
  a7: [209.76, 297.64],
  a8: [147.4, 209.76],
  a9: [104.88, 147.4],
  a10: [73.7, 104.88],
  b0: [2834.65, 4008.19],
  b1: [2004.09, 2834.65],
  b2: [1417.32, 2004.09],
  b3: [1000.63, 1417.32],
  b4: [708.66, 1000.63],
  b5: [498.9, 708.66],
  b6: [354.33, 498.9],
  b7: [249.45, 354.33],
  b8: [175.75, 249.45],
  b9: [124.72, 175.75],
  b10: [87.87, 124.72],
  c0: [2599.37, 3676.54],
  c1: [1836.85, 2599.37],
  c2: [1298.27, 1836.85],
  c3: [918.43, 1298.27],
  c4: [649.13, 918.43],
  c5: [459.21, 649.13],
  c6: [323.15, 459.21],
  c7: [229.61, 323.15],
  c8: [161.57, 229.61],
  c9: [113.39, 161.57],
  c10: [79.37, 113.39],
  executive: [521.86, 756],
  folio: [612, 936],
  legal: [612, 1008],
  letter: [612, 792],
  tabloid: [792, 1224]
};
function makeOutput() {
  var indentLevel = 0, output = BinaryStream();
  function out() {
    var arguments$1 = arguments;
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments$1[i];
      if (x === void 0) {
        throw new Error("Cannot output undefined to PDF");
      } else if (x instanceof PDFValue) {
        x.beforeRender(out);
        x.render(out);
      } else if (isArray(x)) {
        renderArray(x, out);
      } else if (isDate(x)) {
        renderDate(x, out);
      } else if (typeof x == "number") {
        if (isNaN(x)) {
          throw new Error("Cannot output NaN to PDF");
        }
        var num = x.toFixed(7);
        if (num.indexOf(".") >= 0) {
          num = num.replace(/\.?0+$/, "");
        }
        if (num == "-0") {
          num = "0";
        }
        output.writeString(num);
      } else if (/string|boolean/.test(typeof x)) {
        output.writeString(String(x));
      } else if (typeof x.get == "function") {
        output.write(x.get());
      } else if (typeof x == "object") {
        if (!x) {
          output.writeString("null");
        } else {
          out(new PDFDictionary(x));
        }
      }
    }
  }
  out.writeData = function(data) {
    output.write(data);
  };
  out.withIndent = function(f) {
    ++indentLevel;
    f(out);
    --indentLevel;
  };
  out.indent = function() {
    out(NL, pad("", indentLevel * 2, "  "));
    out.apply(null, arguments);
  };
  out.offset = function() {
    return output.offset();
  };
  out.toString = function() {
    throw new Error("FIX CALLER");
  };
  out.get = function() {
    return output.get();
  };
  out.stream = function() {
    return output;
  };
  return out;
}
function wrapObject(value, id) {
  var beforeRender2 = value.beforeRender;
  var renderValue = value.render;
  value.beforeRender = function() {
  };
  value.render = function(out) {
    out(id, " 0 R");
  };
  value.renderFull = function(out) {
    value._offset = out.offset();
    out(id, " 0 obj ");
    beforeRender2.call(value, out);
    renderValue.call(value, out);
    out(" endobj");
  };
}
function getPaperOptions(getOption) {
  if (typeof getOption != "function") {
    var options2 = getOption;
    getOption = function(key, def) {
      return key in options2 ? options2[key] : def;
    };
  }
  var paperSize = getOption("paperSize", PAPER_SIZE.a4);
  if (!paperSize) {
    return {};
  }
  if (typeof paperSize == "string") {
    paperSize = PAPER_SIZE[paperSize.toLowerCase()];
    if (paperSize == null) {
      throw new Error("Unknown paper size");
    }
  }
  paperSize[0] = unitsToPoints(paperSize[0]);
  paperSize[1] = unitsToPoints(paperSize[1]);
  if (getOption("landscape", false)) {
    paperSize = [
      Math.max(paperSize[0], paperSize[1]),
      Math.min(paperSize[0], paperSize[1])
    ];
  }
  var margin = getOption("margin");
  if (margin) {
    if (typeof margin == "string" || typeof margin == "number") {
      margin = unitsToPoints(margin, 0);
      margin = { left: margin, top: margin, right: margin, bottom: margin };
    } else {
      margin = {
        left: unitsToPoints(margin.left, 0),
        top: unitsToPoints(margin.top, 0),
        right: unitsToPoints(margin.right, 0),
        bottom: unitsToPoints(margin.bottom, 0)
      };
    }
    if (getOption("addMargin")) {
      paperSize[0] += margin.left + margin.right;
      paperSize[1] += margin.top + margin.bottom;
    }
  }
  return { paperSize, margin };
}
var FONT_CACHE = {
  "Times-Roman": true,
  "Times-Bold": true,
  "Times-Italic": true,
  "Times-BoldItalic": true,
  "Helvetica": true,
  "Helvetica-Bold": true,
  "Helvetica-Oblique": true,
  "Helvetica-BoldOblique": true,
  "Courier": true,
  "Courier-Bold": true,
  "Courier-Oblique": true,
  "Courier-BoldOblique": true,
  "Symbol": true,
  "ZapfDingbats": true
};
function loadBinary(url, cont) {
  var m;
  if (browser3.msie && (m = /^data:.*?;base64,/i.exec(url))) {
    cont(base64ToUint8Array(url.substr(m[0].length)));
    return;
  }
  function error() {
    if (window.console) {
      if (window.console.error) {
        window.console.error("Cannot load URL: %s", url);
      } else {
        window.console.log("Cannot load URL: %s", url);
      }
    }
    cont(null);
  }
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  if (HAS_TYPED_ARRAYS) {
    req.responseType = "arraybuffer";
  }
  req.onload = function() {
    if (req.status == 200 || req.status == 304) {
      if (HAS_TYPED_ARRAYS) {
        cont(new Uint8Array(req.response));
      } else {
        cont(new window.VBArray(req.responseBody).toArray());
      }
    } else {
      error();
    }
  };
  req.onerror = error;
  req.send(null);
}
function loadFont(url, cont) {
  var font = FONT_CACHE[url];
  if (font) {
    cont(font);
  } else {
    loadBinary(url, function(data) {
      if (data == null) {
        throw new Error("Cannot load font from " + url);
      } else {
        var font2 = new TTFFont(data);
        FONT_CACHE[url] = font2;
        cont(font2);
      }
    });
  }
}
var IMAGE_CACHE = {};
function clearImageCache() {
  IMAGE_CACHE = {};
}
function loadImage(url, size, cont, options2) {
  var img = IMAGE_CACHE[url], bloburl, blob;
  if (img) {
    cont(img);
  } else {
    img = new Image();
    if (!/^data:/i.test(url)) {
      img.crossOrigin = "Anonymous";
    }
    if (HAS_TYPED_ARRAYS && !/^data:/i.test(url)) {
      var xhr = new XMLHttpRequest();
      xhr.onload = function() {
        blob = xhr.response;
        if (browser3.mozilla && blob.type == "image/svg+xml") {
          var reader = new FileReader();
          reader.onload = function() {
            var doc = new window.DOMParser().parseFromString(this.result, "image/svg+xml");
            var svg = doc.documentElement;
            if (svg.getAttribute("width") && svg.getAttribute("height")) {
              bloburl = URL.createObjectURL(blob);
              _load(bloburl);
            } else {
              svg.setAttribute("width", size.width);
              svg.setAttribute("height", size.height);
              var xml = new window.XMLSerializer().serializeToString(svg);
              var dataURL = "data:image/svg+xml;base64," + encodeBase64(xml);
              _load(dataURL);
            }
          };
          reader.readAsText(blob);
        } else {
          bloburl = URL.createObjectURL(blob);
          _load(bloburl);
        }
      };
      xhr.onerror = _onerror;
      xhr.open("GET", url, true);
      xhr.responseType = "blob";
      xhr.send();
    } else {
      _load(url);
    }
  }
  function _load(url2) {
    img.src = url2;
    if (img.complete && !browser3.msie) {
      _onload.call(img);
    } else {
      img.onload = _onload;
      img.onerror = _onerror;
    }
  }
  function _trycanvas() {
    if (!size) {
      size = { width: img.width, height: img.height };
    }
    var canvas = document.createElement("canvas");
    canvas.width = size.width;
    canvas.height = size.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, size.width, size.height);
    var imgdata;
    try {
      imgdata = ctx.getImageData(0, 0, size.width, size.height);
    } catch (ex) {
      _onerror();
      return;
    } finally {
      if (bloburl) {
        URL.revokeObjectURL(bloburl);
      }
    }
    var hasAlpha = false, rgb = BinaryStream(), alpha = BinaryStream();
    var rawbytes = imgdata.data;
    var i = 0;
    while (i < rawbytes.length) {
      rgb.writeByte(rawbytes[i++]);
      rgb.writeByte(rawbytes[i++]);
      rgb.writeByte(rawbytes[i++]);
      var a = rawbytes[i++];
      if (a < 255) {
        hasAlpha = true;
      }
      alpha.writeByte(a);
    }
    if (hasAlpha || options2.keepPNG) {
      img = new PDFRawImage(size.width, size.height, rgb, alpha);
    } else {
      var data = canvas.toDataURL("image/jpeg", options2.jpegQuality);
      data = data.substr(data.indexOf(";base64,") + 8);
      var stream2 = BinaryStream();
      stream2.writeBase64(data);
      img = new PDFJpegImage(stream2);
    }
    cont(IMAGE_CACHE[url] = img);
  }
  function _onerror() {
    cont(IMAGE_CACHE[url] = "ERROR");
  }
  function _onload() {
    if (size) {
      var svg = blob && blob.type === "image/svg+xml" || /^data:image\/svg\+xml;/i.test(this.src.substring(0, 19));
      var upscale = size.width >= img.width || size.height >= img.height;
      if (!svg && upscale) {
        size = null;
      }
    }
    if (!size && blob && /^image\/jpe?g$/i.test(blob.type)) {
      var reader = new FileReader();
      reader.onload = function() {
        try {
          var img2 = new PDFJpegImage(BinaryStream(new Uint8Array(this.result)));
          URL.revokeObjectURL(bloburl);
          cont(IMAGE_CACHE[url] = img2);
        } catch (ex) {
          _trycanvas();
        }
      };
      reader.readAsArrayBuffer(blob);
    } else {
      _trycanvas();
    }
  }
}
function manyLoader(loadOne) {
  return function(urls, callback) {
    var n = urls.length, i = n;
    if (n === 0) {
      return callback();
    }
    function next() {
      if (--n === 0) {
        callback();
      }
    }
    while (i-- > 0) {
      loadOne(urls[i], next);
    }
  };
}
var loadFonts = manyLoader(loadFont);
var loadImages = function(images, callback, options2) {
  options2 = Object.assign({
    jpegQuality: 0.92,
    keepPNG: false
  }, options2);
  var urls = Object.keys(images), n = urls.length;
  if (n === 0) {
    return callback();
  }
  function next() {
    if (--n === 0) {
      callback();
    }
  }
  urls.forEach(function(url) {
    loadImage(url, images[url], next, options2);
  });
};
var PDFDocument = function PDFDocument2(options2) {
  var self = this;
  var out = makeOutput();
  var objcount = 0;
  var objects = [];
  function getOption(name2, defval) {
    return options2 && options2[name2] != null ? options2[name2] : defval;
  }
  self.getOption = getOption;
  self.attach = function(value) {
    if (objects.indexOf(value) < 0) {
      wrapObject(value, ++objcount);
      objects.push(value);
    }
    return value;
  };
  self.pages = [];
  self.FONTS = {};
  self.PATTERNS = {};
  self.IMAGES = {};
  self.GRAD_COL_FUNCTIONS = {};
  self.GRAD_OPC_FUNCTIONS = {};
  self.GRAD_COL = {};
  self.GRAD_OPC = {};
  var catalog = self.attach(new PDFCatalog());
  var pageTree = self.attach(new PDFPageTree());
  if (getOption("autoPrint")) {
    var nameTree = {};
    nameTree.JavaScript = new PDFDictionary({ Names: [
      new PDFString("JS"),
      self.attach(new PDFDictionary({
        S: _("JavaScript"),
        JS: new PDFString("print(true);")
      }))
    ] });
    catalog.props.Names = new PDFDictionary(nameTree);
  }
  catalog.setPages(pageTree);
  var info = self.attach(new PDFDictionary({
    Producer: new PDFString(getOption("producer", "Kendo UI PDF Generator"), true),
    // XXX: kendo.version?
    Title: new PDFString(getOption("title", ""), true),
    Author: new PDFString(getOption("author", ""), true),
    Subject: new PDFString(getOption("subject", ""), true),
    Keywords: new PDFString(getOption("keywords", ""), true),
    Creator: new PDFString(getOption("creator", "Kendo UI PDF Generator"), true),
    CreationDate: getOption("date", /* @__PURE__ */ new Date())
  }));
  self.addPage = function(options3) {
    var paperOptions = getPaperOptions(function(name2, defval) {
      return options3 && options3[name2] != null ? options3[name2] : defval;
    });
    var paperSize = paperOptions.paperSize;
    var margin = paperOptions.margin;
    var contentWidth = paperSize[0];
    var contentHeight = paperSize[1];
    if (margin) {
      contentWidth -= margin.left + margin.right;
      contentHeight -= margin.top + margin.bottom;
    }
    var content = new PDFStream(makeOutput(), null, true);
    var props = {
      Contents: self.attach(content),
      Parent: pageTree,
      MediaBox: [0, 0, paperSize[0], paperSize[1]]
    };
    var page = new PDFPage(self, props);
    page._content = content;
    pageTree.addPage(self.attach(page));
    page.transform(1, 0, 0, -1, 0, paperSize[1]);
    if (margin) {
      page.translate(margin.left, margin.top);
      page.rect(0, 0, contentWidth, contentHeight);
      page.clip();
    }
    self.pages.push(page);
    return page;
  };
  self.render = function() {
    var i;
    out("%PDF-1.4", NL, "%ÂÁÚÏÎ", NL, NL);
    for (i = 0; i < objects.length; ++i) {
      objects[i].renderFull(out);
      out(NL, NL);
    }
    var xrefOffset = out.offset();
    out("xref", NL, 0, " ", objects.length + 1, NL);
    out("0000000000 65535 f ", NL);
    for (i = 0; i < objects.length; ++i) {
      out(zeropad(objects[i]._offset, 10), " 00000 n ", NL);
    }
    out(NL);
    out("trailer", NL);
    out(new PDFDictionary({
      Size: objects.length + 1,
      Root: catalog,
      Info: info
    }), NL, NL);
    out("startxref", NL, xrefOffset, NL);
    out("%%EOF", NL);
    return out.stream().offset(0);
  };
  self.loadFonts = loadFonts;
  self.loadImages = loadImages;
};
PDFDocument.prototype.getFont = function getFont(url) {
  var font = this.FONTS[url];
  if (!font) {
    font = FONT_CACHE[url];
    if (!font) {
      throw new Error("Font " + url + " has not been loaded");
    }
    if (font === true) {
      font = this.attach(new PDFStandardFont(url));
    } else {
      font = this.attach(new PDFFont(this, font));
    }
    this.FONTS[url] = font;
  }
  return font;
};
PDFDocument.prototype.getPattern = function getPattern(fill, page, drawPattern2) {
  var pattern = this.PATTERNS[fill.id];
  if (!pattern) {
    pattern = this.attach(new PDFPattern(fill, page, drawPattern2));
    this.PATTERNS[fill.id] = pattern;
  }
  return pattern;
};
PDFDocument.prototype.getImage = function getImage(url) {
  var img = this.IMAGES[url];
  if (!img) {
    img = IMAGE_CACHE[url];
    if (!img) {
      throw new Error("Image " + url + " has not been loaded");
    }
    if (img === "ERROR") {
      return null;
    }
    img = this.IMAGES[url] = this.attach(img.asStream(this));
  }
  return img;
};
PDFDocument.prototype.getOpacityGS = function getOpacityGS(opacity, forStroke) {
  var id = parseFloat(opacity).toFixed(3);
  opacity = parseFloat(id);
  id += forStroke ? "S" : "F";
  var cache = this._opacityGSCache || (this._opacityGSCache = {});
  var gs = cache[id];
  if (!gs) {
    var props = {
      Type: _("ExtGState")
    };
    if (forStroke) {
      props.CA = opacity;
    } else {
      props.ca = opacity;
    }
    gs = this.attach(new PDFDictionary(props));
    gs._resourceName = _("GS" + ++RESOURCE_COUNTER);
    cache[id] = gs;
  }
  return gs;
};
PDFDocument.prototype.dict = function dict(props) {
  return new PDFDictionary(props);
};
PDFDocument.prototype.name = function name(str) {
  return _(str);
};
PDFDocument.prototype.stream = function stream(props, content) {
  return new PDFStream(content, props);
};
function pad(str, len, ch) {
  while (str.length < len) {
    str = ch + str;
  }
  return str;
}
function zeropad(n, len) {
  return pad(String(n), len, "0");
}
function hasOwnProperty2(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
var isArray = Array.isArray || function(obj) {
  return obj instanceof Array;
};
function isDate(obj) {
  return obj instanceof Date;
}
function renderArray(a, out) {
  out("[");
  if (a.length > 0) {
    out.withIndent(function() {
      for (var i = 0; i < a.length; ++i) {
        if (i > 0 && i % 8 === 0) {
          out.indent(a[i]);
        } else {
          out(" ", a[i]);
        }
      }
    });
  }
  out(" ]");
}
function renderDate(date, out) {
  out(
    "(D:",
    zeropad(date.getUTCFullYear(), 4),
    zeropad(date.getUTCMonth() + 1, 2),
    zeropad(date.getUTCDate(), 2),
    zeropad(date.getUTCHours(), 2),
    zeropad(date.getUTCMinutes(), 2),
    zeropad(date.getUTCSeconds(), 2),
    "Z)"
  );
}
function mm2pt(mm) {
  return mm * (72 / 25.4);
}
function cm2pt(cm) {
  return mm2pt(cm * 10);
}
function in2pt(inch) {
  return inch * 72;
}
function unitsToPoints(x, def) {
  if (typeof x == "number") {
    return x;
  }
  if (typeof x == "string") {
    var m;
    m = /^\s*([0-9.]+)\s*(mm|cm|in|pt)\s*$/.exec(x);
    if (m) {
      var num = parseFloat(m[1]);
      if (!isNaN(num)) {
        if (m[2] == "pt") {
          return num;
        }
        return {
          "mm": mm2pt,
          "cm": cm2pt,
          "in": in2pt
        }[m[2]](num);
      }
    }
  }
  if (def != null) {
    return def;
  }
  throw new Error("Can't parse unit: " + x);
}
var PDFValue = function PDFValue2() {
};
PDFValue.prototype.beforeRender = function beforeRender() {
};
var PDFString = function(PDFValue3) {
  function PDFString2(value, utf16be) {
    PDFValue3.call(this);
    this.value = value;
    this.utf16be = Boolean(utf16be);
  }
  if (PDFValue3) PDFString2.__proto__ = PDFValue3;
  PDFString2.prototype = Object.create(PDFValue3 && PDFValue3.prototype);
  PDFString2.prototype.constructor = PDFString2;
  PDFString2.prototype.render = function render4(out) {
    var txt = this.value;
    if (this.utf16be) {
      txt = BOM + encodeUTF16BE(txt);
      txt = txt.replace(/([\(\)\\])/g, "\\$1");
      out("(", txt, ")");
    } else {
      var data = [40];
      for (var i = 0; i < txt.length; ++i) {
        var code = txt.charCodeAt(i) & 255;
        if (code == 40 || code == 41 || code == 92) {
          data.push(92);
        }
        data.push(code);
      }
      data.push(41);
      out.writeData(data);
    }
  };
  PDFString2.prototype.toString = function toString3() {
    return this.value;
  };
  return PDFString2;
}(PDFValue);
var PDFHexString = function(PDFString2) {
  function PDFHexString2(value) {
    PDFString2.call(this, value);
    this.value = value;
  }
  if (PDFString2) PDFHexString2.__proto__ = PDFString2;
  PDFHexString2.prototype = Object.create(PDFString2 && PDFString2.prototype);
  PDFHexString2.prototype.constructor = PDFHexString2;
  PDFHexString2.prototype.render = function render4(out) {
    var this$1 = this;
    out("<");
    for (var i = 0; i < this.value.length; ++i) {
      out(zeropad(this$1.value.charCodeAt(i).toString(16), 4));
    }
    out(">");
  };
  return PDFHexString2;
}(PDFString);
var PDFName = function(PDFValue3) {
  function PDFName2(name2) {
    PDFValue3.call(this);
    this.name = name2;
  }
  if (PDFValue3) PDFName2.__proto__ = PDFValue3;
  PDFName2.prototype = Object.create(PDFValue3 && PDFValue3.prototype);
  PDFName2.prototype.constructor = PDFName2;
  PDFName2.get = function get(name2) {
    return _(name2);
  };
  PDFName2.prototype.render = function render4(out) {
    out("/" + this.escape());
  };
  PDFName2.prototype.escape = function escape() {
    return this.name.replace(/[^\x21-\x7E]/g, function(c) {
      return "#" + zeropad(c.charCodeAt(0).toString(16), 2);
    });
  };
  PDFName2.prototype.toString = function toString3() {
    return this.name;
  };
  return PDFName2;
}(PDFValue);
function _(name2) {
  return new PDFName(name2);
}
var PDFDictionary = function(PDFValue3) {
  function PDFDictionary2(props) {
    PDFValue3.call(this);
    this.props = props;
  }
  if (PDFValue3) PDFDictionary2.__proto__ = PDFValue3;
  PDFDictionary2.prototype = Object.create(PDFValue3 && PDFValue3.prototype);
  PDFDictionary2.prototype.constructor = PDFDictionary2;
  PDFDictionary2.prototype.render = function render4(out) {
    var props = this.props, empty = true;
    out("<<");
    out.withIndent(function() {
      for (var i in props) {
        if (hasOwnProperty2(props, i) && !/^_/.test(i)) {
          empty = false;
          out.indent(_(i), " ", props[i]);
        }
      }
    });
    if (!empty) {
      out.indent();
    }
    out(">>");
  };
  return PDFDictionary2;
}(PDFValue);
var PDFStream = function(PDFValue3) {
  function PDFStream2(data, props, compress) {
    PDFValue3.call(this);
    if (typeof data == "string") {
      var tmp = BinaryStream();
      tmp.write(data);
      data = tmp;
    }
    this.data = data;
    this.props = props || {};
    this.compress = compress;
  }
  if (PDFValue3) PDFStream2.__proto__ = PDFValue3;
  PDFStream2.prototype = Object.create(PDFValue3 && PDFValue3.prototype);
  PDFStream2.prototype.constructor = PDFStream2;
  PDFStream2.prototype.render = function render4(out) {
    var data = this.data.get(), props = this.props;
    if (this.compress && supportsDeflate()) {
      if (!props.Filter) {
        props.Filter = [];
      } else if (!(props.Filter instanceof Array)) {
        props.Filter = [props.Filter];
      }
      props.Filter.unshift(_("FlateDecode"));
      data = deflate2(data);
    }
    props.Length = data.length;
    out(new PDFDictionary(props), " stream", NL);
    out.writeData(data);
    out(NL, "endstream");
  };
  return PDFStream2;
}(PDFValue);
var PDFCatalog = function(PDFDictionary2) {
  function PDFCatalog2() {
    PDFDictionary2.call(this, {
      Type: _("Catalog")
    });
  }
  if (PDFDictionary2) PDFCatalog2.__proto__ = PDFDictionary2;
  PDFCatalog2.prototype = Object.create(PDFDictionary2 && PDFDictionary2.prototype);
  PDFCatalog2.prototype.constructor = PDFCatalog2;
  PDFCatalog2.prototype.setPages = function setPages(pagesObj) {
    this.props.Pages = pagesObj;
  };
  return PDFCatalog2;
}(PDFDictionary);
var PDFPageTree = function(PDFDictionary2) {
  function PDFPageTree2() {
    PDFDictionary2.call(this, {
      Type: _("Pages"),
      Kids: [],
      Count: 0
    });
  }
  if (PDFDictionary2) PDFPageTree2.__proto__ = PDFDictionary2;
  PDFPageTree2.prototype = Object.create(PDFDictionary2 && PDFDictionary2.prototype);
  PDFPageTree2.prototype.constructor = PDFPageTree2;
  PDFPageTree2.prototype.addPage = function addPage(pageObj) {
    this.props.Kids.push(pageObj);
    this.props.Count++;
  };
  return PDFPageTree2;
}(PDFDictionary);
var SOF_CODES = [192, 193, 194, 195, 197, 198, 199, 201, 202, 203, 205, 206, 207];
var PDFJpegImage = function PDFJpegImage2(data) {
  data.offset(0);
  var width, height, colorSpace, bitsPerComponent;
  var soi = data.readShort();
  if (soi != 65496) {
    throw new Error("Invalid JPEG image");
  }
  while (!data.eof()) {
    var ff = data.readByte();
    if (ff != 255) {
      throw new Error("Invalid JPEG image");
    }
    var marker = data.readByte();
    var length = data.readShort();
    if (SOF_CODES.indexOf(marker) >= 0) {
      bitsPerComponent = data.readByte();
      height = data.readShort();
      width = data.readShort();
      colorSpace = data.readByte();
      break;
    }
    data.skip(length - 2);
  }
  if (colorSpace == null) {
    throw new Error("Invalid JPEG image");
  }
  var props = {
    Type: _("XObject"),
    Subtype: _("Image"),
    Width: width,
    Height: height,
    BitsPerComponent: bitsPerComponent,
    Filter: _("DCTDecode")
  };
  switch (colorSpace) {
    case 1:
      props.ColorSpace = _("DeviceGray");
      break;
    case 3:
      props.ColorSpace = _("DeviceRGB");
      break;
    case 4:
      props.ColorSpace = _("DeviceCMYK");
      props.Decode = [1, 0, 1, 0, 1, 0, 1, 0];
      break;
  }
  this.asStream = function() {
    data.offset(0);
    var stream2 = new PDFStream(data, props);
    stream2._resourceName = _("I" + ++RESOURCE_COUNTER);
    return stream2;
  };
};
var PDFRawImage = function PDFRawImage2(width, height, rgb, alpha) {
  this.asStream = function(pdf) {
    var mask = new PDFStream(alpha, {
      Type: _("XObject"),
      Subtype: _("Image"),
      Width: width,
      Height: height,
      BitsPerComponent: 8,
      ColorSpace: _("DeviceGray")
    }, true);
    var stream2 = new PDFStream(rgb, {
      Type: _("XObject"),
      Subtype: _("Image"),
      Width: width,
      Height: height,
      BitsPerComponent: 8,
      ColorSpace: _("DeviceRGB"),
      SMask: pdf.attach(mask)
    }, true);
    stream2._resourceName = _("I" + ++RESOURCE_COUNTER);
    return stream2;
  };
};
var PDFPattern = function(PDFDictionary2) {
  function PDFPattern2(fill, curPage, drawPattern2) {
    var ref = fill.size();
    var width = ref.width;
    var height = ref.height;
    var page = new PDFPage(curPage._pdf, {});
    page._content = new PDFStream(makeOutput(), null, true);
    drawPattern2(fill, page, {});
    curPage._xResources = Object.assign(curPage._xResources, page._xResources);
    curPage._fontResources = Object.assign(curPage._fontResources, page._fontResources);
    curPage._gsResources = Object.assign(curPage._gsResources, page._gsResources);
    PDFDictionary2.call(this, {
      Type: _("Pattern"),
      PatternType: 1,
      PaintType: 1,
      TilingType: 1,
      BBox: [0, 0, width, height],
      XStep: width,
      YStep: height,
      Matrix: [1, 0, 0, -1, 0, height],
      Resources: {
        ExtGState: new PDFDictionary2(page._gsResources),
        XObject: new PDFDictionary2(page._xResources),
        Font: new PDFDictionary2(page._fontResources)
      }
    });
    this._resourceName = _("P" + ++PATTERN_COUNTER);
    this.data = page._content.data;
    this.compress = true;
  }
  if (PDFDictionary2) PDFPattern2.__proto__ = PDFDictionary2;
  PDFPattern2.prototype = Object.create(PDFDictionary2 && PDFDictionary2.prototype);
  PDFPattern2.prototype.constructor = PDFPattern2;
  PDFPattern2.prototype.render = function render4(out) {
    PDFStream.prototype.render.call(this, out);
  };
  return PDFPattern2;
}(PDFDictionary);
var PDFStandardFont = function(PDFDictionary2) {
  function PDFStandardFont2(name2) {
    PDFDictionary2.call(this, {
      Type: _("Font"),
      Subtype: _("Type1"),
      BaseFont: _(name2)
    });
    this._resourceName = _("F" + ++RESOURCE_COUNTER);
  }
  if (PDFDictionary2) PDFStandardFont2.__proto__ = PDFDictionary2;
  PDFStandardFont2.prototype = Object.create(PDFDictionary2 && PDFDictionary2.prototype);
  PDFStandardFont2.prototype.constructor = PDFStandardFont2;
  PDFStandardFont2.prototype.encodeText = function encodeText2(str) {
    return new PDFString(String(str));
  };
  return PDFStandardFont2;
}(PDFDictionary);
var PDFFont = function(PDFDictionary2) {
  function PDFFont2(pdf, font, props) {
    PDFDictionary2.call(this, {});
    props = this.props;
    props.Type = _("Font");
    props.Subtype = _("Type0");
    props.Encoding = _("Identity-H");
    this._pdf = pdf;
    this._font = font;
    this._sub = font.makeSubset();
    this._resourceName = _("F" + ++RESOURCE_COUNTER);
    var head = font.head;
    this.name = font.psName;
    var scale = this.scale = font.scale;
    this.bbox = [
      head.xMin * scale,
      head.yMin * scale,
      head.xMax * scale,
      head.yMax * scale
    ];
    this.italicAngle = font.post.italicAngle;
    this.ascent = font.ascent * scale;
    this.descent = font.descent * scale;
    this.lineGap = font.lineGap * scale;
    this.capHeight = font.os2.capHeight || this.ascent;
    this.xHeight = font.os2.xHeight || 0;
    this.stemV = 0;
    this.familyClass = (font.os2.familyClass || 0) >> 8;
    this.isSerif = this.familyClass >= 1 && this.familyClass <= 7;
    this.isScript = this.familyClass == 10;
    this.flags = (font.post.isFixedPitch ? 1 : 0) | (this.isSerif ? 1 << 1 : 0) | (this.isScript ? 1 << 3 : 0) | (this.italicAngle !== 0 ? 1 << 6 : 0) | 1 << 5;
  }
  if (PDFDictionary2) PDFFont2.__proto__ = PDFDictionary2;
  PDFFont2.prototype = Object.create(PDFDictionary2 && PDFDictionary2.prototype);
  PDFFont2.prototype.constructor = PDFFont2;
  PDFFont2.prototype.encodeText = function encodeText2(text) {
    return new PDFHexString(this._sub.encodeText(String(text)));
  };
  PDFFont2.prototype.getTextWidth = function getTextWidth(fontSize, text) {
    var this$1 = this;
    var width = 0, codeMap = this._font.cmap.codeMap;
    for (var i = 0; i < text.length; ++i) {
      var glyphId = codeMap[text.charCodeAt(i)];
      width += this$1._font.widthOfGlyph(glyphId || 0);
    }
    return width * fontSize / 1e3;
  };
  PDFFont2.prototype.beforeRender = function beforeRender2() {
    var self = this;
    var sub = self._sub;
    var data = sub.render();
    var fontStream = new PDFStream(BinaryStream(data), {
      Length1: data.length
    }, true);
    var descriptor = self._pdf.attach(new PDFDictionary2({
      Type: _("FontDescriptor"),
      FontName: _(self._sub.psName),
      FontBBox: self.bbox,
      Flags: self.flags,
      StemV: self.stemV,
      ItalicAngle: self.italicAngle,
      Ascent: self.ascent,
      Descent: self.descent,
      CapHeight: self.capHeight,
      XHeight: self.xHeight,
      FontFile2: self._pdf.attach(fontStream)
    }));
    var cmap = sub.ncid2ogid;
    var firstChar = sub.firstChar;
    var lastChar = sub.lastChar;
    var charWidths = [];
    (function loop(i, chunk) {
      if (i <= lastChar) {
        var gid = cmap[i];
        if (gid == null) {
          loop(i + 1);
        } else {
          if (!chunk) {
            charWidths.push(i, chunk = []);
          }
          chunk.push(self._font.widthOfGlyph(gid));
          loop(i + 1, chunk);
        }
      }
    })(firstChar);
    var descendant = new PDFDictionary2({
      Type: _("Font"),
      Subtype: _("CIDFontType2"),
      BaseFont: _(self._sub.psName),
      CIDSystemInfo: new PDFDictionary2({
        Registry: new PDFString("Adobe"),
        Ordering: new PDFString("Identity"),
        Supplement: 0
      }),
      FontDescriptor: descriptor,
      FirstChar: firstChar,
      LastChar: lastChar,
      DW: Math.round(self._font.widthOfGlyph(0)),
      W: charWidths,
      CIDToGIDMap: self._pdf.attach(self._makeCidToGidMap())
    });
    var dict2 = self.props;
    dict2.BaseFont = _(self._sub.psName);
    dict2.DescendantFonts = [self._pdf.attach(descendant)];
    var unimap = new PDFToUnicodeCmap(firstChar, lastChar, sub.subset);
    var unimapStream = new PDFStream(makeOutput(), null, true);
    unimapStream.data(unimap);
    dict2.ToUnicode = self._pdf.attach(unimapStream);
  };
  PDFFont2.prototype._makeCidToGidMap = function _makeCidToGidMap() {
    return new PDFStream(BinaryStream(this._sub.cidToGidMap()), null, true);
  };
  return PDFFont2;
}(PDFDictionary);
var PDFToUnicodeCmap = function(PDFValue3) {
  function PDFToUnicodeCmap2(firstChar, lastChar, map) {
    PDFValue3.call(this);
    this.firstChar = firstChar;
    this.lastChar = lastChar;
    this.map = map;
  }
  if (PDFValue3) PDFToUnicodeCmap2.__proto__ = PDFValue3;
  PDFToUnicodeCmap2.prototype = Object.create(PDFValue3 && PDFValue3.prototype);
  PDFToUnicodeCmap2.prototype.constructor = PDFToUnicodeCmap2;
  PDFToUnicodeCmap2.prototype.render = function render4(out) {
    out.indent("/CIDInit /ProcSet findresource begin");
    out.indent("12 dict begin");
    out.indent("begincmap");
    out.indent("/CIDSystemInfo <<");
    out.indent("  /Registry (Adobe)");
    out.indent("  /Ordering (UCS)");
    out.indent("  /Supplement 0");
    out.indent(">> def");
    out.indent("/CMapName /Adobe-Identity-UCS def");
    out.indent("/CMapType 2 def");
    out.indent("1 begincodespacerange");
    out.indent("  <0000><ffff>");
    out.indent("endcodespacerange");
    var self = this;
    out.indent(self.lastChar - self.firstChar + 1, " beginbfchar");
    out.withIndent(function() {
      for (var code = self.firstChar; code <= self.lastChar; ++code) {
        var unicode = self.map[code];
        var str = ucs2encode([unicode]);
        out.indent("<", zeropad(code.toString(16), 4), ">", "<");
        for (var i = 0; i < str.length; ++i) {
          out(zeropad(str.charCodeAt(i).toString(16), 4));
        }
        out(">");
      }
    });
    out.indent("endbfchar");
    out.indent("endcmap");
    out.indent("CMapName currentdict /CMap defineresource pop");
    out.indent("end");
    out.indent("end");
  };
  return PDFToUnicodeCmap2;
}(PDFValue);
function makeHash(a) {
  return a.map(function(x) {
    return isArray(x) ? makeHash(x) : typeof x == "number" ? (Math.round(x * 1e3) / 1e3).toFixed(3) : x;
  }).join(" ");
}
function cacheColorGradientFunction(pdf, r1, g1, b1, r2, g2, b2) {
  var hash = makeHash([r1, g1, b1, r2, g2, b2]);
  var func = pdf.GRAD_COL_FUNCTIONS[hash];
  if (!func) {
    func = pdf.GRAD_COL_FUNCTIONS[hash] = pdf.attach(new PDFDictionary({
      FunctionType: 2,
      Domain: [0, 1],
      Range: [0, 1, 0, 1, 0, 1],
      N: 1,
      C0: [r1, g1, b1],
      C1: [r2, g2, b2]
    }));
  }
  return func;
}
function cacheOpacityGradientFunction(pdf, a1, a2) {
  var hash = makeHash([a1, a2]);
  var func = pdf.GRAD_OPC_FUNCTIONS[hash];
  if (!func) {
    func = pdf.GRAD_OPC_FUNCTIONS[hash] = pdf.attach(new PDFDictionary({
      FunctionType: 2,
      Domain: [0, 1],
      Range: [0, 1],
      N: 1,
      C0: [a1],
      C1: [a2]
    }));
  }
  return func;
}
function makeGradientFunctions(pdf, stops) {
  var hasAlpha = false;
  var opacities = [];
  var colors = [];
  var offsets = [];
  var encode = [];
  var i, prev, cur, prevColor, curColor;
  for (i = 1; i < stops.length; ++i) {
    prev = stops[i - 1];
    cur = stops[i];
    prevColor = prev.color;
    curColor = cur.color;
    colors.push(cacheColorGradientFunction(
      pdf,
      prevColor.r,
      prevColor.g,
      prevColor.b,
      curColor.r,
      curColor.g,
      curColor.b
    ));
    if (prevColor.a < 1 || curColor.a < 1) {
      hasAlpha = true;
    }
    offsets.push(cur.offset);
    encode.push(0, 1);
  }
  if (hasAlpha) {
    for (i = 1; i < stops.length; ++i) {
      prev = stops[i - 1];
      cur = stops[i];
      prevColor = prev.color;
      curColor = cur.color;
      opacities.push(cacheOpacityGradientFunction(
        pdf,
        prevColor.a,
        curColor.a
      ));
    }
  }
  offsets.pop();
  return {
    hasAlpha,
    colors: assemble(colors),
    opacities: hasAlpha ? assemble(opacities) : null
  };
  function assemble(funcs) {
    if (funcs.length == 1) {
      return funcs[0];
    }
    return {
      FunctionType: 3,
      Functions: funcs,
      Domain: [0, 1],
      Bounds: offsets,
      Encode: encode
    };
  }
}
function cacheColorGradient(pdf, isRadial, stops, coords, funcs, box) {
  var shading, hash;
  if (!box) {
    var a = [isRadial].concat(coords);
    stops.forEach(function(x) {
      a.push(x.offset, x.color.r, x.color.g, x.color.b);
    });
    hash = makeHash(a);
    shading = pdf.GRAD_COL[hash];
  }
  if (!shading) {
    shading = new PDFDictionary({
      Type: _("Shading"),
      ShadingType: isRadial ? 3 : 2,
      ColorSpace: _("DeviceRGB"),
      Coords: coords,
      Domain: [0, 1],
      Function: funcs,
      Extend: [true, true]
    });
    pdf.attach(shading);
    shading._resourceName = "S" + ++RESOURCE_COUNTER;
    if (hash) {
      pdf.GRAD_COL[hash] = shading;
    }
  }
  return shading;
}
function cacheOpacityGradient(pdf, isRadial, stops, coords, funcs, box) {
  var opacity, hash;
  if (!box) {
    var a = [isRadial].concat(coords);
    stops.forEach(function(x) {
      a.push(x.offset, x.color.a);
    });
    hash = makeHash(a);
    opacity = pdf.GRAD_OPC[hash];
  }
  if (!opacity) {
    opacity = new PDFDictionary({
      Type: _("ExtGState"),
      AIS: false,
      CA: 1,
      ca: 1,
      SMask: {
        Type: _("Mask"),
        S: _("Luminosity"),
        G: pdf.attach(new PDFStream("/a0 gs /s0 sh", {
          Type: _("XObject"),
          Subtype: _("Form"),
          FormType: 1,
          BBox: box ? [
            box.left,
            box.top + box.height,
            box.left + box.width,
            box.top
          ] : [0, 1, 1, 0],
          Group: {
            Type: _("Group"),
            S: _("Transparency"),
            CS: _("DeviceGray"),
            I: true
          },
          Resources: {
            ExtGState: {
              a0: { CA: 1, ca: 1 }
            },
            Shading: {
              s0: {
                ColorSpace: _("DeviceGray"),
                Coords: coords,
                Domain: [0, 1],
                ShadingType: isRadial ? 3 : 2,
                Function: funcs,
                Extend: [true, true]
              }
            }
          }
        }))
      }
    });
    pdf.attach(opacity);
    opacity._resourceName = "O" + ++RESOURCE_COUNTER;
    if (hash) {
      pdf.GRAD_OPC[hash] = opacity;
    }
  }
  return opacity;
}
function cacheGradient(pdf, gradient, box) {
  var isRadial = gradient.type == "radial";
  var funcs = makeGradientFunctions(pdf, gradient.stops);
  var coords = isRadial ? [
    gradient.start.x,
    gradient.start.y,
    gradient.start.r,
    gradient.end.x,
    gradient.end.y,
    gradient.end.r
  ] : [
    gradient.start.x,
    gradient.start.y,
    gradient.end.x,
    gradient.end.y
  ];
  var shading = cacheColorGradient(
    pdf,
    isRadial,
    gradient.stops,
    coords,
    funcs.colors,
    gradient.userSpace && box
  );
  var opacity = funcs.hasAlpha ? cacheOpacityGradient(
    pdf,
    isRadial,
    gradient.stops,
    coords,
    funcs.opacities,
    gradient.userSpace && box
  ) : null;
  return {
    hasAlpha: funcs.hasAlpha,
    shading,
    opacity
  };
}
var PDFPage = function(PDFDictionary2) {
  function PDFPage2(pdf, props) {
    PDFDictionary2.call(this, props);
    this._pdf = pdf;
    this._rcount = 0;
    this._textMode = false;
    this._fontResources = {};
    this._gsResources = {};
    this._xResources = {};
    this._patResources = {};
    this._shResources = {};
    this._opacity = 1;
    this._matrix = [1, 0, 0, 1, 0, 0];
    this._annotations = [];
    this._font = null;
    this._fontSize = null;
    this._contextStack = [];
    props = this.props;
    props.Type = _("Page");
    props.ProcSet = [
      _("PDF"),
      _("Text"),
      _("ImageB"),
      _("ImageC"),
      _("ImageI")
    ];
    props.Resources = new PDFDictionary2({
      Font: new PDFDictionary2(this._fontResources),
      ExtGState: new PDFDictionary2(this._gsResources),
      XObject: new PDFDictionary2(this._xResources),
      Pattern: new PDFDictionary2(this._patResources),
      Shading: new PDFDictionary2(this._shResources)
    });
    props.Annots = this._annotations;
  }
  if (PDFDictionary2) PDFPage2.__proto__ = PDFDictionary2;
  PDFPage2.prototype = Object.create(PDFDictionary2 && PDFDictionary2.prototype);
  PDFPage2.prototype.constructor = PDFPage2;
  PDFPage2.prototype._out = function _out() {
    this._content.data.apply(null, arguments);
  };
  PDFPage2.prototype.transform = function transform2(a, b, c, d, e, f) {
    if (!isIdentityMatrix(arguments)) {
      this._matrix = mmul(arguments, this._matrix);
      this._out(a, " ", b, " ", c, " ", d, " ", e, " ", f, " cm");
      this._out(NL);
    }
  };
  PDFPage2.prototype.translate = function translate(dx, dy) {
    this.transform(1, 0, 0, 1, dx, dy);
  };
  PDFPage2.prototype.scale = function scale(sx, sy) {
    this.transform(sx, 0, 0, sy, 0, 0);
  };
  PDFPage2.prototype.rotate = function rotate(angle) {
    var cos = Math.cos(angle), sin = Math.sin(angle);
    this.transform(cos, sin, -sin, cos, 0, 0);
  };
  PDFPage2.prototype.beginText = function beginText() {
    this._textMode = true;
    this._out("BT", NL);
  };
  PDFPage2.prototype.endText = function endText() {
    this._textMode = false;
    this._out("ET", NL);
  };
  PDFPage2.prototype._requireTextMode = function _requireTextMode() {
    if (!this._textMode) {
      throw new Error("Text mode required; call page.beginText() first");
    }
  };
  PDFPage2.prototype._requireFont = function _requireFont() {
    if (!this._font) {
      throw new Error("No font selected; call page.setFont() first");
    }
  };
  PDFPage2.prototype.setFont = function setFont(font, size) {
    this._requireTextMode();
    if (font == null) {
      font = this._font;
    } else if (!(font instanceof PDFFont)) {
      font = this._pdf.getFont(font);
    }
    if (size == null) {
      size = this._fontSize;
    }
    this._fontResources[font._resourceName] = font;
    this._font = font;
    this._fontSize = size;
    this._out(font._resourceName, " ", size, " Tf", NL);
  };
  PDFPage2.prototype.setTextLeading = function setTextLeading(size) {
    this._requireTextMode();
    this._out(size, " TL", NL);
  };
  PDFPage2.prototype.setTextRenderingMode = function setTextRenderingMode(mode) {
    this._requireTextMode();
    this._out(mode, " Tr", NL);
  };
  PDFPage2.prototype.showText = function showText(text, requestedWidth) {
    this._requireFont();
    if (text.length > 1 && requestedWidth && this._font instanceof PDFFont) {
      var outputWidth = this._font.getTextWidth(this._fontSize, text);
      var scale = requestedWidth / outputWidth * 100;
      this._out(scale, " Tz ");
    }
    this._out(this._font.encodeText(text), " Tj", NL);
  };
  PDFPage2.prototype.showTextNL = function showTextNL(text) {
    this._requireFont();
    this._out(this._font.encodeText(text), " '", NL);
  };
  PDFPage2.prototype.addLink = function addLink(uri, box) {
    var ll = this._toPage({ x: box.left, y: box.bottom });
    var ur = this._toPage({ x: box.right, y: box.top });
    this._annotations.push(new PDFDictionary2({
      Type: _("Annot"),
      Subtype: _("Link"),
      Rect: [ll.x, ll.y, ur.x, ur.y],
      Border: [0, 0, 0],
      A: new PDFDictionary2({
        Type: _("Action"),
        S: _("URI"),
        URI: new PDFString(uri)
      })
    }));
  };
  PDFPage2.prototype.setStrokeColor = function setStrokeColor(r, g, b) {
    this._out(r, " ", g, " ", b, " RG", NL);
  };
  PDFPage2.prototype.setOpacity = function setOpacity(opacity) {
    this.setFillOpacity(opacity);
    this.setStrokeOpacity(opacity);
    this._opacity *= opacity;
  };
  PDFPage2.prototype.setStrokeOpacity = function setStrokeOpacity(opacity) {
    if (opacity < 1) {
      var gs = this._pdf.getOpacityGS(this._opacity * opacity, true);
      this._gsResources[gs._resourceName] = gs;
      this._out(gs._resourceName, " gs", NL);
    }
  };
  PDFPage2.prototype.setFillColor = function setFillColor(r, g, b) {
    this._out(r, " ", g, " ", b, " rg", NL);
  };
  PDFPage2.prototype.pattern = function pattern(fill, box, drawPattern2) {
    var pattern2 = this._pdf.getPattern(fill, this, drawPattern2);
    this._patResources[pattern2._resourceName] = pattern2;
    this._out("/Pattern cs", NL);
    this._out(pattern2._resourceName, " scn", NL);
    this.rect(box.left, box.top, box.width, box.height);
    this.fill();
  };
  PDFPage2.prototype.setFillOpacity = function setFillOpacity(opacity) {
    if (opacity < 1) {
      var gs = this._pdf.getOpacityGS(this._opacity * opacity, false);
      this._gsResources[gs._resourceName] = gs;
      this._out(gs._resourceName, " gs", NL);
    }
  };
  PDFPage2.prototype.gradient = function gradient(gradient$1, box) {
    this.save();
    this.rect(box.left, box.top, box.width, box.height);
    this.clip();
    if (!gradient$1.userSpace) {
      this.transform(box.width, 0, 0, box.height, box.left, box.top);
    }
    var g = cacheGradient(this._pdf, gradient$1, box);
    var sname = g.shading._resourceName, oname;
    this._shResources[sname] = g.shading;
    if (g.hasAlpha) {
      oname = g.opacity._resourceName;
      this._gsResources[oname] = g.opacity;
      this._out("/" + oname + " gs ");
    }
    this._out("/" + sname + " sh", NL);
    this.restore();
  };
  PDFPage2.prototype.setDashPattern = function setDashPattern(dashArray, dashPhase) {
    this._out(dashArray, " ", dashPhase, " d", NL);
  };
  PDFPage2.prototype.setLineWidth = function setLineWidth(width) {
    this._out(width, " w", NL);
  };
  PDFPage2.prototype.setLineCap = function setLineCap(lineCap) {
    this._out(lineCap, " J", NL);
  };
  PDFPage2.prototype.setLineJoin = function setLineJoin(lineJoin) {
    this._out(lineJoin, " j", NL);
  };
  PDFPage2.prototype.setMitterLimit = function setMitterLimit(mitterLimit) {
    this._out(mitterLimit, " M", NL);
  };
  PDFPage2.prototype.save = function save() {
    this._contextStack.push(this._context());
    this._out("q", NL);
  };
  PDFPage2.prototype.restore = function restore() {
    this._out("Q", NL);
    this._context(this._contextStack.pop());
  };
  PDFPage2.prototype.moveTo = function moveTo(x, y) {
    this._out(x, " ", y, " m", NL);
  };
  PDFPage2.prototype.lineTo = function lineTo(x, y) {
    this._out(x, " ", y, " l", NL);
  };
  PDFPage2.prototype.bezier = function bezier(x1, y1, x2, y2, x3, y3) {
    this._out(x1, " ", y1, " ", x2, " ", y2, " ", x3, " ", y3, " c", NL);
  };
  PDFPage2.prototype.bezier1 = function bezier1(x1, y1, x3, y3) {
    this._out(x1, " ", y1, " ", x3, " ", y3, " y", NL);
  };
  PDFPage2.prototype.bezier2 = function bezier2(x2, y2, x3, y3) {
    this._out(x2, " ", y2, " ", x3, " ", y3, " v", NL);
  };
  PDFPage2.prototype.close = function close2() {
    this._out("h", NL);
  };
  PDFPage2.prototype.rect = function rect(x, y, w, h) {
    this._out(x, " ", y, " ", w, " ", h, " re", NL);
  };
  PDFPage2.prototype.ellipse = function ellipse(x, y, rx, ry) {
    function _X(v) {
      return x + v;
    }
    function _Y(v) {
      return y + v;
    }
    var k = 0.5522847498307936;
    this.moveTo(_X(0), _Y(ry));
    this.bezier(
      _X(rx * k),
      _Y(ry),
      _X(rx),
      _Y(ry * k),
      _X(rx),
      _Y(0)
    );
    this.bezier(
      _X(rx),
      _Y(-ry * k),
      _X(rx * k),
      _Y(-ry),
      _X(0),
      _Y(-ry)
    );
    this.bezier(
      _X(-rx * k),
      _Y(-ry),
      _X(-rx),
      _Y(-ry * k),
      _X(-rx),
      _Y(0)
    );
    this.bezier(
      _X(-rx),
      _Y(ry * k),
      _X(-rx * k),
      _Y(ry),
      _X(0),
      _Y(ry)
    );
  };
  PDFPage2.prototype.circle = function circle(x, y, r) {
    this.ellipse(x, y, r, r);
  };
  PDFPage2.prototype.stroke = function stroke() {
    this._out("S", NL);
  };
  PDFPage2.prototype.nop = function nop() {
    this._out("n", NL);
  };
  PDFPage2.prototype.clip = function clip() {
    this._out("W n", NL);
  };
  PDFPage2.prototype.clipStroke = function clipStroke() {
    this._out("W S", NL);
  };
  PDFPage2.prototype.closeStroke = function closeStroke() {
    this._out("s", NL);
  };
  PDFPage2.prototype.fill = function fill() {
    this._out("f", NL);
  };
  PDFPage2.prototype.fillStroke = function fillStroke() {
    this._out("B", NL);
  };
  PDFPage2.prototype.drawImage = function drawImage2(url) {
    var img = this._pdf.getImage(url);
    if (img) {
      this._xResources[img._resourceName] = img;
      this._out(img._resourceName, " Do", NL);
    }
  };
  PDFPage2.prototype.comment = function comment(txt) {
    var self = this;
    txt.split(/\r?\n/g).forEach(function(line) {
      self._out("% ", line, NL);
    });
  };
  PDFPage2.prototype._context = function _context(val) {
    if (val != null) {
      this._opacity = val.opacity;
      this._matrix = val.matrix;
    } else {
      return {
        opacity: this._opacity,
        matrix: this._matrix
      };
    }
  };
  PDFPage2.prototype._toPage = function _toPage(p) {
    var m = this._matrix;
    var a = m[0], b = m[1], c = m[2], d = m[3], e = m[4], f = m[5];
    return {
      x: a * p.x + c * p.y + e,
      y: b * p.x + d * p.y + f
    };
  };
  return PDFPage2;
}(PDFDictionary);
function unquote(str) {
  return str.replace(/^\s*(['"])(.*)\1\s*$/, "$2");
}
function parseFontDef(fontdef) {
  var rx = /^\s*((normal|italic)\s+)?((normal|small-caps)\s+)?((normal|bold|\d+)\s+)?(([0-9.]+)(px|pt))(\/(([0-9.]+)(px|pt)|normal))?\s+(.*?)\s*$/i;
  var m = rx.exec(fontdef);
  if (!m) {
    return { fontSize: 12, fontFamily: "sans-serif" };
  }
  var fontSize = m[8] ? parseInt(m[8], 10) : 12;
  return {
    italic: m[2] && m[2].toLowerCase() == "italic",
    variant: m[4],
    bold: m[6] && /bold|700/i.test(m[6]),
    fontSize,
    lineHeight: m[12] ? m[12] == "normal" ? fontSize : parseInt(m[12], 10) : null,
    fontFamily: m[14].split(/\s*,\s*/g).map(unquote)
  };
}
function getFontURL(style) {
  function mkFamily(name3) {
    if (style.bold) {
      name3 += "|bold";
    }
    if (style.italic) {
      name3 += "|italic";
    }
    return name3.toLowerCase();
  }
  var fontFamily = style.fontFamily;
  var name2, url;
  if (fontFamily instanceof Array) {
    for (var i = 0; i < fontFamily.length; ++i) {
      name2 = mkFamily(fontFamily[i]);
      url = FONT_MAPPINGS[name2];
      if (url) {
        break;
      }
    }
  } else {
    url = FONT_MAPPINGS[fontFamily.toLowerCase()];
  }
  while (typeof url == "function") {
    url = url();
  }
  if (!url) {
    url = "Times-Roman";
  }
  return url;
}
var FONT_MAPPINGS = {
  "serif": "Times-Roman",
  "serif|bold": "Times-Bold",
  "serif|italic": "Times-Italic",
  "serif|bold|italic": "Times-BoldItalic",
  "sans-serif": "Helvetica",
  "sans-serif|bold": "Helvetica-Bold",
  "sans-serif|italic": "Helvetica-Oblique",
  "sans-serif|bold|italic": "Helvetica-BoldOblique",
  "monospace": "Courier",
  "monospace|bold": "Courier-Bold",
  "monospace|italic": "Courier-Oblique",
  "monospace|bold|italic": "Courier-BoldOblique",
  "zapfdingbats": "ZapfDingbats",
  "zapfdingbats|bold": "ZapfDingbats",
  "zapfdingbats|italic": "ZapfDingbats",
  "zapfdingbats|bold|italic": "ZapfDingbats"
};
function fontAlias(alias, name2) {
  alias = alias.toLowerCase();
  FONT_MAPPINGS[alias] = function() {
    return FONT_MAPPINGS[name2];
  };
  FONT_MAPPINGS[alias + "|bold"] = function() {
    return FONT_MAPPINGS[name2 + "|bold"];
  };
  FONT_MAPPINGS[alias + "|italic"] = function() {
    return FONT_MAPPINGS[name2 + "|italic"];
  };
  FONT_MAPPINGS[alias + "|bold|italic"] = function() {
    return FONT_MAPPINGS[name2 + "|bold|italic"];
  };
}
fontAlias("Times New Roman", "serif");
fontAlias("Courier New", "monospace");
fontAlias("Arial", "sans-serif");
fontAlias("Helvetica", "sans-serif");
fontAlias("Verdana", "sans-serif");
fontAlias("Tahoma", "sans-serif");
fontAlias("Georgia", "sans-serif");
fontAlias("Monaco", "monospace");
fontAlias("Andale Mono", "monospace");
function defineFont(name2, url) {
  if (arguments.length == 1) {
    for (var i in name2) {
      if (hasOwnProperty2(name2, i)) {
        defineFont(i, name2[i]);
      }
    }
  } else {
    name2 = name2.toLowerCase();
    FONT_MAPPINGS[name2] = url;
    switch (name2) {
      case "dejavu sans":
        FONT_MAPPINGS["sans-serif"] = url;
        break;
      case "dejavu sans|bold":
        FONT_MAPPINGS["sans-serif|bold"] = url;
        break;
      case "dejavu sans|italic":
        FONT_MAPPINGS["sans-serif|italic"] = url;
        break;
      case "dejavu sans|bold|italic":
        FONT_MAPPINGS["sans-serif|bold|italic"] = url;
        break;
      case "dejavu serif":
        FONT_MAPPINGS["serif"] = url;
        break;
      case "dejavu serif|bold":
        FONT_MAPPINGS["serif|bold"] = url;
        break;
      case "dejavu serif|italic":
        FONT_MAPPINGS["serif|italic"] = url;
        break;
      case "dejavu serif|bold|italic":
        FONT_MAPPINGS["serif|bold|italic"] = url;
        break;
      case "dejavu mono":
        FONT_MAPPINGS["monospace"] = url;
        break;
      case "dejavu mono|bold":
        FONT_MAPPINGS["monospace|bold"] = url;
        break;
      case "dejavu mono|italic":
        FONT_MAPPINGS["monospace|italic"] = url;
        break;
      case "dejavu mono|bold|italic":
        FONT_MAPPINGS["monospace|bold|italic"] = url;
        break;
    }
  }
}
function mmul(a, b) {
  var a1 = a[0], b1 = a[1], c1 = a[2], d1 = a[3], e1 = a[4], f1 = a[5];
  var a2 = b[0], b2 = b[1], c2 = b[2], d2 = b[3], e2 = b[4], f2 = b[5];
  return [
    a1 * a2 + b1 * c2,
    a1 * b2 + b1 * d2,
    c1 * a2 + d1 * c2,
    c1 * b2 + d1 * d2,
    e1 * a2 + f1 * c2 + e2,
    e1 * b2 + f1 * d2 + f2
  ];
}
function isIdentityMatrix(m) {
  return m[0] === 1 && m[1] === 0 && m[2] === 0 && m[3] === 1 && m[4] === 0 && m[5] === 0;
}
var TEXT_RENDERING_MODE = {
  fill: 0,
  stroke: 1,
  fillAndStroke: 2,
  invisible: 3,
  fillAndClip: 4,
  strokeAndClip: 5,
  fillStrokeClip: 6,
  clip: 7
};

// node_modules/@progress/kendo-drawing/dist/es/pdf/drawing.js
var DEFAULT_IMAGE_DPI = 300;
var TEXT_RENDERING_MODE2 = TEXT_RENDERING_MODE;
var DASH_PATTERNS = {
  dash: [4],
  dashDot: [4, 2, 1, 2],
  dot: [1, 2],
  longDash: [8, 2],
  longDashDot: [8, 2, 1, 2],
  longDashDotDot: [8, 2, 1, 2, 1, 2],
  solid: []
};
var LINE_CAP = {
  butt: 0,
  round: 1,
  square: 2
};
var LINE_JOIN = {
  miter: 0,
  round: 1,
  bevel: 2
};
function render3(group, callback) {
  var fonts = [], images = {}, options2 = group.options;
  function getOption(name2, defval, hash) {
    if (!hash) {
      hash = options2;
    }
    if (hash.pdf && hash.pdf[name2] != null) {
      return hash.pdf[name2];
    }
    return defval;
  }
  var multiPage = getOption("multiPage");
  var imgDPI = getOption("imgDPI", DEFAULT_IMAGE_DPI);
  clearImageCache();
  var handlers = {
    Image: function(element) {
      var url = element.src();
      var size = element.bbox().size;
      if (imgDPI) {
        var prev = images[url];
        size = {
          width: Math.ceil(size.width * imgDPI / 72),
          height: Math.ceil(size.height * imgDPI / 72)
        };
        if (prev) {
          size.width = Math.max(prev.width, size.width);
          size.height = Math.max(prev.height, size.height);
        }
      }
      images[url] = size;
    },
    Text: function(element) {
      var style = parseFontDef(element.options.font);
      var url = getFontURL(style);
      if (fonts.indexOf(url) < 0) {
        fonts.push(url);
      }
    }
  };
  group.traverse(function(element) {
    dispatch(handlers, element);
    var fill = element.fill && element.fill();
    if (fill instanceof Pattern) {
      fill.traverse(function(child) {
        dispatch(handlers, child);
      });
    }
  });
  function doIt() {
    if (--count > 0) {
      return;
    }
    var pdf = new PDFDocument({
      producer: getOption("producer"),
      title: getOption("title"),
      author: getOption("author"),
      subject: getOption("subject"),
      keywords: getOption("keywords"),
      creator: getOption("creator"),
      date: getOption("date"),
      autoPrint: getOption("autoPrint")
    });
    function drawPage(group2) {
      var options3 = group2.options;
      var tmp = optimize(group2);
      var bbox = tmp.bbox;
      group2 = tmp.root;
      var paperSize = getOption("paperSize", getOption("paperSize", "auto"), options3), addMargin = false;
      if (paperSize == "auto") {
        if (bbox) {
          var size = bbox.getSize();
          paperSize = [size.width, size.height];
          addMargin = true;
          var origin = bbox.getOrigin();
          tmp = new group_default();
          tmp.transform(new matrix_default(1, 0, 0, 1, -origin.x, -origin.y));
          tmp.append(group2);
          group2 = tmp;
        } else {
          paperSize = "A4";
        }
      }
      var page;
      page = pdf.addPage({
        paperSize,
        margin: getOption("margin", getOption("margin"), options3),
        addMargin,
        landscape: getOption("landscape", getOption("landscape", false), options3)
      });
      drawElement(group2, page, pdf);
    }
    if (multiPage) {
      group.children.forEach(drawPage);
    } else {
      drawPage(group);
    }
    callback(pdf.render(), pdf);
  }
  var count = 2;
  loadFonts(fonts, doIt);
  loadImages(images, doIt, {
    jpegQuality: getOption("jpegQuality", 0.92),
    keepPNG: getOption("keepPNG", false)
  });
}
function toDataURL(group, callback) {
  render3(group, function(data) {
    callback("data:application/pdf;base64," + data.base64());
  });
}
function dispatch(handlers, element) {
  var handler = handlers[element.nodeType];
  if (handler) {
    return handler.call.apply(handler, arguments);
  }
  return element;
}
function drawElement(element, page, pdf) {
  if (element.options._pdfDebug) {
    page.comment("BEGIN: " + element.options._pdfDebug);
  }
  var transform2 = element.transform();
  var opacity = element.opacity();
  page.save();
  if (opacity != null && opacity < 1) {
    page.setOpacity(opacity);
  }
  setStrokeOptions(element, page, pdf);
  setFillOptions(element, page, pdf);
  if (transform2) {
    var m = transform2.matrix();
    page.transform(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  setClipping(element, page, pdf);
  dispatch({
    Path: drawPath,
    MultiPath: drawMultiPath,
    Circle: drawCircle,
    Arc: drawArc,
    Text: drawText,
    Image: drawImage,
    Group: drawGroup,
    Rect: drawRect
  }, element, page, pdf);
  page.restore();
  if (element.options._pdfDebug) {
    page.comment("END: " + element.options._pdfDebug);
  }
}
function setStrokeOptions(element, page) {
  var stroke = element.stroke && element.stroke();
  if (!stroke) {
    return;
  }
  var color = stroke.color;
  if (color) {
    color = parseColor2(color);
    if (color == null) {
      return;
    }
    page.setStrokeColor(color.r, color.g, color.b);
    if (color.a != 1) {
      page.setStrokeOpacity(color.a);
    }
  }
  var width = stroke.width;
  if (width != null) {
    if (width === 0) {
      return;
    }
    page.setLineWidth(width);
  }
  var dashType = stroke.dashType;
  if (dashType) {
    page.setDashPattern(DASH_PATTERNS[dashType], 0);
  }
  var lineCap = stroke.lineCap;
  if (lineCap) {
    page.setLineCap(LINE_CAP[lineCap]);
  }
  var lineJoin = stroke.lineJoin;
  if (lineJoin) {
    page.setLineJoin(LINE_JOIN[lineJoin]);
  }
  var opacity = stroke.opacity;
  if (opacity != null) {
    page.setStrokeOpacity(opacity);
  }
}
function setFillOptions(element, page) {
  var fill = element.fill && element.fill();
  if (!fill) {
    return;
  }
  if (fill instanceof gradient_default || fill instanceof Pattern) {
    return;
  }
  var color = fill.color;
  if (color) {
    color = parseColor2(color);
    if (color == null) {
      return;
    }
    page.setFillColor(color.r, color.g, color.b);
    if (color.a != 1) {
      page.setFillOpacity(color.a);
    }
  }
  var opacity = fill.opacity;
  if (opacity != null) {
    page.setFillOpacity(opacity);
  }
}
function setClipping(element, page, pdf) {
  var clip = element.clip();
  if (clip) {
    _drawPath(clip, page, pdf);
    page.clip();
  }
}
function shouldDraw(thing) {
  return thing && (thing instanceof gradient_default || thing instanceof Pattern || thing.color && !/^(none|transparent)$/i.test(thing.color) && (thing.width == null || thing.width > 0) && (thing.opacity == null || thing.opacity > 0));
}
function maybeGradient(element, page, pdf, stroke) {
  var fill = element.fill();
  if (fill instanceof gradient_default) {
    if (stroke) {
      page.clipStroke();
    } else {
      page.clip();
    }
    var isRadial = fill instanceof radial_gradient_default;
    var start, end;
    if (isRadial) {
      start = { x: fill.center().x, y: fill.center().y, r: 0 };
      end = { x: fill.center().x, y: fill.center().y, r: fill.radius() };
    } else {
      start = { x: fill.start().x, y: fill.start().y };
      end = { x: fill.end().x, y: fill.end().y };
    }
    var stops = fill.stops.elements().map(function(stop) {
      var offset = stop.offset();
      if (/%$/.test(offset)) {
        offset = parseFloat(offset) / 100;
      } else {
        offset = parseFloat(offset);
      }
      var color = parseColor2(stop.color());
      color.a *= stop.opacity();
      return {
        offset,
        color
      };
    });
    stops.unshift(stops[0]);
    stops.push(stops[stops.length - 1]);
    var gradient = {
      userSpace: fill.userSpace(),
      type: isRadial ? "radial" : "linear",
      start,
      end,
      stops
    };
    var box = element.rawBBox();
    var tl = box.topLeft(), size = box.getSize();
    box = {
      left: tl.x,
      top: tl.y,
      width: size.width,
      height: size.height
    };
    page.gradient(gradient, box);
    return true;
  }
}
function maybePattern(element, page, pdf, stroke) {
  var fill = element.fill();
  if (fill instanceof Pattern) {
    if (stroke) {
      page.clipStroke();
    } else {
      page.clip();
    }
    var box = element.rawBBox();
    var tl = box.topLeft(), size = box.getSize();
    var strokeWidth = element.stroke() ? element.stroke().width : 0;
    page.pattern(fill, {
      left: tl.x + strokeWidth / 2,
      top: tl.y + strokeWidth / 2,
      width: size.width - strokeWidth,
      height: size.height - strokeWidth
    }, drawPattern);
    return true;
  }
}
function maybeFillStroke(element, page, pdf) {
  if (shouldDraw(element.fill()) && shouldDraw(element.stroke())) {
    if (!maybeGradient(element, page, pdf, true) && !maybePattern(element, page, pdf, true)) {
      page.fillStroke();
    }
  } else if (shouldDraw(element.fill())) {
    if (!maybeGradient(element, page, pdf, false) && !maybePattern(element, page, pdf, false)) {
      page.fill();
    }
  } else if (shouldDraw(element.stroke())) {
    page.stroke();
  } else {
    page.nop();
  }
}
function maybeDrawRect(path, page) {
  var segments = path.segments;
  if (segments.length == 4 && path.options.closed) {
    var a = [];
    for (var i = 0; i < segments.length; ++i) {
      if (segments[i].controlIn()) {
        return false;
      }
      a[i] = segments[i].anchor();
    }
    var isRect = a[0].y == a[1].y && a[1].x == a[2].x && a[2].y == a[3].y && a[3].x == a[0].x || a[0].x == a[1].x && a[1].y == a[2].y && a[2].x == a[3].x && a[3].y == a[0].y;
    if (isRect) {
      page.rect(
        a[0].x,
        a[0].y,
        a[2].x - a[0].x,
        a[2].y - a[0].y
        /*height*/
      );
      return true;
    }
  }
}
function _drawPath(element, page, pdf) {
  var segments = element.segments;
  if (segments.length === 0) {
    return;
  }
  if (!maybeDrawRect(element, page, pdf)) {
    for (var prev, i = 0; i < segments.length; ++i) {
      var seg = segments[i];
      var anchor = seg.anchor();
      if (!prev) {
        page.moveTo(anchor.x, anchor.y);
      } else {
        var prevOut = prev.controlOut();
        var controlIn = seg.controlIn();
        if (prevOut && controlIn) {
          page.bezier(
            prevOut.x,
            prevOut.y,
            controlIn.x,
            controlIn.y,
            anchor.x,
            anchor.y
          );
        } else {
          page.lineTo(anchor.x, anchor.y);
        }
      }
      prev = seg;
    }
    if (element.options.closed) {
      page.close();
    }
  }
}
function drawPath(element, page, pdf) {
  _drawPath(element, page, pdf);
  maybeFillStroke(element, page, pdf);
}
function drawMultiPath(element, page, pdf) {
  var paths = element.paths;
  for (var i = 0; i < paths.length; ++i) {
    _drawPath(paths[i], page, pdf);
  }
  maybeFillStroke(element, page, pdf);
}
function drawCircle(element, page, pdf) {
  var g = element.geometry();
  page.circle(g.center.x, g.center.y, g.radius);
  maybeFillStroke(element, page, pdf);
}
function drawArc(element, page, pdf) {
  var points3 = element.geometry().curvePoints();
  page.moveTo(points3[0].x, points3[0].y);
  for (var i = 1; i < points3.length; ) {
    page.bezier(
      points3[i].x,
      points3[i++].y,
      points3[i].x,
      points3[i++].y,
      points3[i].x,
      points3[i++].y
    );
  }
  maybeFillStroke(element, page, pdf);
}
function drawText(element, page) {
  var style = parseFontDef(element.options.font);
  var pos = element._position;
  var mode;
  page.transform(1, 0, 0, -1, pos.x, pos.y + style.fontSize);
  var draw = function(renderMode) {
    page.beginText();
    page.setFont(getFontURL(style), style.fontSize);
    page.setTextRenderingMode(renderMode);
    page.showText(element.content(), element._pdfRect ? element._pdfRect.width() : null);
  };
  if (element.fill() && element.stroke()) {
    mode = TEXT_RENDERING_MODE2.fillAndStroke;
    if (element.options.paintOrder === "stroke") {
      draw(TEXT_RENDERING_MODE2.stroke);
      mode = TEXT_RENDERING_MODE2.fill;
    }
  } else if (element.fill()) {
    mode = TEXT_RENDERING_MODE2.fill;
  } else if (element.stroke()) {
    mode = TEXT_RENDERING_MODE2.stroke;
  }
  draw(mode);
  page.endText();
}
function drawPattern(pattern, page, pdf) {
  var children = pattern.children;
  for (var i = 0; i < children.length; ++i) {
    drawElement(children[i], page, pdf);
  }
}
function drawGroup(element, page, pdf) {
  if (element._pdfLink) {
    page.addLink(element._pdfLink.url, element._pdfLink);
  }
  var children = element.children;
  for (var i = 0; i < children.length; ++i) {
    drawElement(children[i], page, pdf);
  }
}
function drawImage(element, page) {
  var url = element.src();
  if (!url) {
    return;
  }
  var rect = element.rect();
  var tl = rect.getOrigin();
  var sz = rect.getSize();
  page.transform(sz.width, 0, 0, -sz.height, tl.x, tl.y + sz.height);
  page.drawImage(url);
}
function drawRect(element, page, pdf) {
  var geometry = element.geometry();
  var ref = geometry.cornerRadius;
  var rx = ref[0];
  var ry = ref[1];
  if (rx === 0 && ry === 0) {
    page.rect(geometry.origin.x, geometry.origin.y, geometry.size.width, geometry.size.height);
    maybeFillStroke(element, page, pdf);
  } else {
    drawPath(Path.fromRect(geometry, element.options), page, pdf);
  }
}
function parseColor2(value) {
  var color = parseColor(value, true);
  return color ? color.toRGB() : null;
}
function optimize(root) {
  var clipbox = false;
  var matrix = matrix_default.unit();
  var currentBox = null;
  var changed;
  do {
    changed = false;
    root = opt(root);
  } while (root && changed);
  return { root, bbox: currentBox };
  function change(newShape) {
    changed = true;
    return newShape;
  }
  function visible(shape) {
    return shape.visible() && shape.opacity() > 0 && (shouldDraw(shape.fill()) || shouldDraw(shape.stroke()));
  }
  function optArray(a) {
    var b = [];
    for (var i = 0; i < a.length; ++i) {
      var el = opt(a[i]);
      if (el != null) {
        b.push(el);
      }
    }
    return b;
  }
  function withClipping(shape, f) {
    var saveclipbox = clipbox;
    var savematrix = matrix;
    if (shape.transform()) {
      matrix = matrix.multiplyCopy(shape.transform().matrix());
    }
    var clip = shape.clip();
    if (clip && typeof clip.bbox === "function") {
      clip = clip.bbox();
      if (clip) {
        clip = clip.bbox(matrix);
        clipbox = clipbox ? rect_default.intersect(clipbox, clip) : clip;
      }
    }
    try {
      return f();
    } finally {
      clipbox = saveclipbox;
      matrix = savematrix;
    }
  }
  function inClipbox(shape) {
    if (clipbox == null) {
      return false;
    }
    var box = shape.rawBBox();
    if (box) {
      box = box.bbox(matrix);
    }
    if (clipbox && box) {
      box = rect_default.intersect(box, clipbox);
    }
    return box;
  }
  function opt(shape) {
    return withClipping(shape, function() {
      if (!(shape instanceof group_default || shape instanceof MultiPath)) {
        var box = inClipbox(shape);
        if (!box) {
          return change(null);
        }
        currentBox = currentBox ? rect_default.union(currentBox, box) : box;
      }
      return dispatch({
        Path: function(shape2) {
          if (shape2.segments.length === 0 || !visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        MultiPath: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          var el = new MultiPath(shape2.options);
          el.paths = optArray(shape2.paths);
          if (el.paths.length === 0) {
            return change(null);
          }
          return el;
        },
        Circle: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        Arc: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        Text: function(shape2) {
          if (!/\S/.test(shape2.content()) || !visible(shape2)) {
            return change(null);
          }
          return shape2;
        },
        Image: function(shape2) {
          if (!(shape2.visible() && shape2.opacity() > 0)) {
            return change(null);
          }
          return shape2;
        },
        Group: function(shape2) {
          if (!(shape2.visible() && shape2.opacity() > 0)) {
            return change(null);
          }
          var el = new group_default(shape2.options);
          el.children = optArray(shape2.children);
          el._pdfLink = shape2._pdfLink;
          if (shape2 !== root && el.children.length === 0 && !shape2._pdfLink) {
            return change(null);
          }
          return el;
        },
        Rect: function(shape2) {
          if (!visible(shape2)) {
            return change(null);
          }
          return shape2;
        }
      }, shape);
    });
  }
}
function exportPDF(group, options2) {
  var promise = createPromise();
  for (var i in options2) {
    if (i == "margin" && group.options.pdf && group.options.pdf._ignoreMargin) {
      continue;
    }
    group.options.set("pdf." + i, options2[i]);
  }
  toDataURL(group, promise.resolve);
  return promise;
}

// node_modules/@progress/kendo-drawing/dist/es/html/core.js
var browser4 = support_default.browser || {};
function slice2(thing) {
  return Array.prototype.slice.call(thing);
}
var KENDO_PSEUDO_ELEMENT = "KENDO-PSEUDO-ELEMENT";
var KENDO_BULLET_TYPE = "data-kendo-bullet-type";
var IMAGE_CACHE2 = {};
var nodeInfo = {};
nodeInfo._root = nodeInfo;
var inBrowser = typeof window !== "undefined";
var microsoft = inBrowser ? browser4.msie || browser4.edge : false;
var TextRect = function(Text2) {
  function TextRect2(str, rect, options2) {
    Text2.call(this, str, rect.getOrigin(), options2);
    this._pdfRect = rect;
  }
  if (Text2) TextRect2.__proto__ = Text2;
  TextRect2.prototype = Object.create(Text2 && Text2.prototype);
  TextRect2.prototype.constructor = TextRect2;
  TextRect2.prototype.rect = function rect() {
    return this._pdfRect;
  };
  TextRect2.prototype.rawBBox = function rawBBox() {
    return this._pdfRect;
  };
  return TextRect2;
}(text_default);
function addClass(el, cls) {
  if (el.classList) {
    el.classList.add(cls);
  } else {
    el.className += " " + cls;
  }
}
function removeClass(el, cls) {
  if (el.classList) {
    el.classList.remove(cls);
  } else {
    el.className = el.className.split(/\s+/).reduce(function(a, word) {
      if (word != cls) {
        a.push(word);
      }
      return a;
    }, []).join(" ");
  }
}
function setCSS(el, styles) {
  Object.keys(styles).forEach(function(key) {
    el.style[key] = styles[key];
  });
}
var matches = typeof Element !== "undefined" && Element.prototype && function(p) {
  if (p.matches) {
    return function(el, selector) {
      return el.matches(selector);
    };
  }
  if (p.webkitMatchesSelector) {
    return function(el, selector) {
      return el.webkitMatchesSelector(selector);
    };
  }
  if (p.mozMatchesSelector) {
    return function(el, selector) {
      return el.mozMatchesSelector(selector);
    };
  }
  if (p.msMatchesSelector) {
    return function(el, selector) {
      return el.msMatchesSelector(selector);
    };
  }
  return function(s) {
    return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
  };
}(Element.prototype);
function closest(el, selector) {
  if (el.closest) {
    return el.closest(selector);
  }
  while (el && !/^\[object (?:HTML)?Document\]$/.test(String(el))) {
    if (el.nodeType == 1 && matches(el, selector)) {
      return el;
    }
    el = el.parentNode;
  }
}
var cloneNodes = function($) {
  if ($) {
    return function cloneNodes2(el) {
      var clone = el.cloneNode(false);
      if (el.nodeType == 1) {
        var $el = $(el), $clone = $(clone), i;
        var data = $el.data();
        for (i in data) {
          $clone.data(i, data[i]);
        }
        if (/^canvas$/i.test(el.tagName)) {
          clone.getContext("2d").drawImage(el, 0, 0);
        } else if (/^(?:input|select|textarea|option)$/i.test(el.tagName)) {
          clone.removeAttribute("id");
          clone.removeAttribute("name");
          if (!/^textarea$/i.test(el.tagName)) {
            clone.value = el.value;
          }
          clone.checked = el.checked;
          clone.selected = el.selected;
        }
        if (el._kendoExportVisual) {
          clone._kendoExportVisual = el._kendoExportVisual;
        }
        for (i = el.firstChild; i; i = i.nextSibling) {
          clone.appendChild(cloneNodes2(i));
        }
      }
      return clone;
    };
  } else {
    return function cloneNodes2(el) {
      var clone = function dive(node) {
        var clone2 = node.cloneNode(false);
        if (node._kendoExportVisual) {
          clone2._kendoExportVisual = node._kendoExportVisual;
        }
        for (var i = node.firstChild; i; i = i.nextSibling) {
          clone2.appendChild(dive(i));
        }
        return clone2;
      }(el);
      var canvases = el.querySelectorAll("canvas");
      if (canvases.length) {
        slice2(clone.querySelectorAll("canvas")).forEach(function(canvas, i) {
          canvas.getContext("2d").drawImage(canvases[i], 0, 0);
        });
      }
      var orig = el.querySelectorAll("input, select, textarea, option");
      slice2(clone.querySelectorAll("input, select, textarea, option")).forEach(function(el2, i) {
        el2.removeAttribute("id");
        el2.removeAttribute("name");
        if (!/^textarea$/i.test(el2.tagName)) {
          el2.value = orig[i].value;
        }
        el2.checked = orig[i].checked;
        el2.selected = orig[i].selected;
      });
      return clone;
    };
  }
}(typeof window !== "undefined" && window.kendo && window.kendo.jQuery);
function getXY(thing) {
  if (typeof thing == "number") {
    return { x: thing, y: thing };
  }
  if (Array.isArray(thing)) {
    return { x: thing[0], y: thing[1] };
  }
  return { x: thing.x, y: thing.y };
}
function drawDOM(element, options2) {
  if (!options2) {
    options2 = {};
  }
  var promise = createPromise();
  if (!element) {
    return promise.reject("No element to export");
  }
  if (typeof window.getComputedStyle != "function") {
    throw new Error("window.getComputedStyle is missing.  You are using an unsupported browser, or running in IE8 compatibility mode.  Drawing HTML is supported in Chrome, Firefox, Safari and IE9+.");
  }
  defineFont(getFontFaces(element.ownerDocument));
  var scale = getXY(options2.scale || 1);
  function doOne(element2) {
    var group = new group_default();
    var pos = element2.getBoundingClientRect();
    setTransform(group, [
      scale.x,
      0,
      0,
      scale.y,
      -pos.left * scale.x,
      -pos.top * scale.y
    ]);
    nodeInfo._clipbox = false;
    nodeInfo._matrix = matrix_default.unit();
    nodeInfo._stackingContext = {
      element: element2,
      group
    };
    if (options2.avoidLinks === true) {
      nodeInfo._avoidLinks = "a";
    } else {
      nodeInfo._avoidLinks = options2.avoidLinks;
    }
    addClass(element2, "k-pdf-export");
    renderElement(element2, group);
    removeClass(element2, "k-pdf-export");
    return group;
  }
  cacheImages([element], function() {
    var forceBreak = options2 && options2.forcePageBreak;
    var hasPaperSize = options2 && options2.paperSize && options2.paperSize != "auto";
    var paperOptions = getPaperOptions(function(key, def) {
      if (key == "paperSize") {
        return hasPaperSize ? options2[key] : "A4";
      }
      return key in options2 ? options2[key] : def;
    });
    var pageWidth = hasPaperSize && paperOptions.paperSize[0];
    var pageHeight = hasPaperSize && paperOptions.paperSize[1];
    var margin = options2.margin && paperOptions.margin;
    var hasMargin = Boolean(margin);
    if (forceBreak || pageHeight) {
      if (!margin) {
        margin = { left: 0, top: 0, right: 0, bottom: 0 };
      }
      if (pageWidth) {
        pageWidth /= scale.x;
      }
      if (pageHeight) {
        pageHeight /= scale.y;
      }
      margin.left /= scale.x;
      margin.right /= scale.x;
      margin.top /= scale.y;
      margin.bottom /= scale.y;
      var group = new group_default({
        pdf: {
          multiPage: true,
          paperSize: hasPaperSize ? paperOptions.paperSize : "auto",
          _ignoreMargin: hasMargin
          // HACK!  see exportPDF in pdf/drawing.js
        }
      });
      handlePageBreaks(
        function(x) {
          if (options2.progress) {
            var canceled = false, pageNum = 0;
            (function next() {
              if (pageNum < x.pages.length) {
                var page = doOne(x.pages[pageNum]);
                group.append(page);
                options2.progress({
                  page,
                  pageNum: ++pageNum,
                  totalPages: x.pages.length,
                  cancel: function() {
                    canceled = true;
                  }
                });
                if (!canceled) {
                  setTimeout(next);
                } else {
                  x.container.parentNode.removeChild(x.container);
                }
              } else {
                x.container.parentNode.removeChild(x.container);
                promise.resolve(group);
              }
            })();
          } else {
            x.pages.forEach(function(page) {
              group.append(doOne(page));
            });
            x.container.parentNode.removeChild(x.container);
            promise.resolve(group);
          }
        },
        element,
        forceBreak,
        pageWidth ? pageWidth - margin.left - margin.right : null,
        pageHeight ? pageHeight - margin.top - margin.bottom : null,
        margin,
        options2
      );
    } else {
      promise.resolve(doOne(element));
    }
  });
  function makeTemplate(template2) {
    if (template2 != null) {
      if (typeof template2 == "string") {
        template2 = template(template2.replace(/^\s+|\s+$/g, ""));
      }
      if (typeof template2 == "function") {
        return function(data) {
          var el = template2(data);
          if (el && typeof el == "string") {
            var div = document.createElement("div");
            setInnerHTML(div, el);
            el = div.firstElementChild;
          }
          return el;
        };
      }
      return function() {
        return template2.cloneNode(true);
      };
    }
  }
  function handlePageBreaks(callback, element2, forceBreak, pageWidth, pageHeight, margin, options3) {
    var template2 = makeTemplate(options3.template);
    var doc = element2.ownerDocument;
    var pages = [];
    var copy = options3._destructive ? element2 : cloneNodes(element2);
    var container = doc.createElement("KENDO-PDF-DOCUMENT");
    var adjust = 0;
    slice2(copy.querySelectorAll("tfoot")).forEach(function(tfoot) {
      tfoot.parentNode.appendChild(tfoot);
    });
    slice2(copy.querySelectorAll("ol")).forEach(function(ol) {
      slice2(ol.children).forEach(function(li, index) {
        li.setAttribute("kendo-split-index", index);
      });
    });
    setCSS(container, {
      display: "block",
      position: "absolute",
      boxSizing: "content-box",
      left: "-10000px",
      top: "-10000px"
    });
    if (pageWidth) {
      setCSS(container, {
        width: pageWidth + "px",
        paddingLeft: margin.left + "px",
        paddingRight: margin.right + "px"
      });
      setCSS(copy, { overflow: "hidden" });
    }
    element2.parentNode.insertBefore(container, element2);
    container.appendChild(copy);
    if (options3.beforePageBreak) {
      whenImagesAreActuallyLoaded([container], function() {
        options3.beforePageBreak(container, doPageBreak);
      });
    } else {
      whenImagesAreActuallyLoaded([container], doPageBreak);
    }
    function doPageBreak() {
      if (forceBreak != "-" || pageHeight) {
        splitElement(copy);
      }
      {
        var page = makePage();
        copy.parentNode.insertBefore(page, copy);
        page.appendChild(copy);
      }
      if (template2) {
        pages.forEach(function(page2, i) {
          var el = template2({
            element: page2,
            pageNum: i + 1,
            totalPages: pages.length
          });
          if (el) {
            page2.appendChild(el);
          }
        });
      }
      cacheImages(pages, callback.bind(null, { pages, container }));
    }
    function keepTogether(el) {
      if (options3.keepTogether && matches(el, options3.keepTogether) && el.offsetHeight <= pageHeight - adjust) {
        return true;
      }
      var tag = el.tagName;
      if (/^h[1-6]$/i.test(tag) && el.offsetHeight >= pageHeight - adjust) {
        return false;
      }
      return el.getAttribute("data-kendo-chart") || /^(?:img|tr|thead|th|tfoot|iframe|svg|object|canvas|input|textarea|select|video|h[1-6])/i.test(el.tagName);
    }
    function splitElement(element3) {
      if (element3.tagName == "TABLE") {
        setCSS(element3, { tableLayout: "fixed" });
      }
      if (keepTogether(element3)) {
        return;
      }
      var style = getComputedStyle2(element3);
      var bottomPadding = parseFloat(getPropertyValue(style, "padding-bottom"));
      var bottomBorder = parseFloat(getPropertyValue(style, "border-bottom-width"));
      var saveAdjust = adjust;
      adjust += bottomPadding + bottomBorder;
      var isFirst = true;
      for (var el = element3.firstChild; el; el = el.nextSibling) {
        if (el.nodeType == 1) {
          isFirst = false;
          if (matches(el, forceBreak)) {
            breakAtElement(el);
            continue;
          }
          if (!pageHeight) {
            splitElement(el);
            continue;
          }
          if (!/^(?:static|relative)$/.test(getPropertyValue(getComputedStyle2(el), "position"))) {
            continue;
          }
          var fall = fallsOnMargin(el);
          if (fall == 1) {
            breakAtElement(el);
          } else if (fall) {
            if (keepTogether(el)) {
              breakAtElement(el);
            } else {
              splitElement(el);
            }
          } else {
            splitElement(el);
          }
        } else if (el.nodeType == 3 && pageHeight) {
          splitText(el, isFirst);
          isFirst = false;
        }
      }
      adjust = saveAdjust;
    }
    function firstInParent(el) {
      var p = el.parentNode, first = p.firstChild;
      if (el === first) {
        return true;
      }
      if (el === p.children[0]) {
        if (first.nodeType == 7 || first.nodeType == 8) {
          return true;
        }
        if (first.nodeType == 3) {
          return !/\S/.test(first.data);
        }
      }
      return false;
    }
    function breakAtElement(el) {
      if (el.nodeType == 1 && el !== copy && firstInParent(el)) {
        return breakAtElement(el.parentNode);
      }
      var table, colgroup, thead, grid, gridHead;
      table = closest(el, "table");
      colgroup = table && table.querySelector("colgroup");
      if (options3.repeatHeaders) {
        thead = table && table.querySelector("thead");
        grid = closest(el, ".k-grid");
        if (grid && grid.querySelector(".k-auto-scrollable")) {
          gridHead = grid.querySelector(".k-grid-header");
        }
      }
      var page = makePage();
      var range = doc.createRange();
      range.setStartBefore(copy);
      range.setEndBefore(el);
      page.appendChild(range.extractContents());
      copy.parentNode.insertBefore(page, copy);
      preventBulletOnListItem(el.parentNode);
      if (table) {
        table = closest(el, "table");
        if (options3.repeatHeaders && thead) {
          table.insertBefore(thead.cloneNode(true), table.firstChild);
        }
        if (colgroup) {
          table.insertBefore(colgroup.cloneNode(true), table.firstChild);
        }
      }
      if (options3.repeatHeaders && gridHead) {
        grid = closest(el, ".k-grid");
        grid.insertBefore(gridHead.cloneNode(true), grid.firstChild);
      }
    }
    function makePage() {
      var page = doc.createElement("KENDO-PDF-PAGE");
      setCSS(page, {
        display: "block",
        boxSizing: "content-box",
        width: pageWidth ? pageWidth + "px" : "auto",
        padding: margin.top + "px " + margin.right + "px " + margin.bottom + "px " + margin.left + "px",
        // allow absolutely positioned elements to be relative to current page
        position: "relative",
        // without the following we might affect layout of subsequent pages
        height: pageHeight ? pageHeight + "px" : "auto",
        overflow: pageHeight || pageWidth ? "hidden" : "visible",
        clear: "both"
      });
      if (options3 && options3.pageClassName) {
        page.className = options3.pageClassName;
      }
      pages.push(page);
      return page;
    }
    function fallsOnMargin(thing) {
      var box = thing.getBoundingClientRect();
      if (box.width === 0 || box.height === 0) {
        return 0;
      }
      var top = copy.getBoundingClientRect().top;
      var available = pageHeight - adjust;
      return box.height > available ? 3 : box.top - top > available ? 1 : box.bottom - top > available ? 2 : 0;
    }
    function splitText(node, isFirst) {
      if (!/\S/.test(node.data)) {
        return;
      }
      var len = node.data.length;
      var range = doc.createRange();
      range.selectNodeContents(node);
      var fall = fallsOnMargin(range);
      if (!fall) {
        return;
      }
      var nextnode = node;
      if (fall == 1) {
        if (isFirst) {
          breakAtElement(node.parentNode);
        } else {
          breakAtElement(node);
        }
      } else {
        (function findEOP(min, pos, max) {
          range.setEnd(node, pos);
          if (min == pos || pos == max) {
            return pos;
          }
          if (fallsOnMargin(range)) {
            return findEOP(min, min + pos >> 1, pos);
          } else {
            return findEOP(pos, pos + max >> 1, max);
          }
        })(0, len >> 1, len);
        if (!/\S/.test(range.toString()) && isFirst) {
          breakAtElement(node.parentNode);
        } else {
          nextnode = node.splitText(range.endOffset);
          var page = makePage();
          range.setStartBefore(copy);
          page.appendChild(range.extractContents());
          copy.parentNode.insertBefore(page, copy);
          preventBulletOnListItem(nextnode.parentNode);
        }
      }
      splitText(nextnode);
    }
    function preventBulletOnListItem(el) {
      var li = closest(el, "li");
      if (li) {
        li.setAttribute("kendo-no-bullet", "1");
        preventBulletOnListItem(li.parentNode);
      }
    }
  }
  return promise;
}
var parseBackgroundImage = /* @__PURE__ */ function() {
  var tok_linear_gradient = /^((-webkit-|-moz-|-o-|-ms-)?linear-gradient\s*)\(/;
  var tok_percent = /^([-0-9.]+%)/;
  var tok_length = /^([-0-9.]+px)/;
  var tok_keyword = /^(left|right|top|bottom|to|center)\W/;
  var tok_angle = /^([-0-9.]+(deg|grad|rad|turn)|0)/;
  var tok_whitespace = /^(\s+)/;
  var tok_popen = /^(\()/;
  var tok_pclose = /^(\))/;
  var tok_comma = /^(,)/;
  var tok_url = /^(url)\(/;
  var tok_content = /^(.*?)\)/;
  var cache1 = {}, cache2 = {};
  function parse3(input) {
    var orig = input;
    if (hasOwnProperty3(cache1, orig)) {
      return cache1[orig];
    }
    function skip_ws() {
      var m = tok_whitespace.exec(input);
      if (m) {
        input = input.substr(m[1].length);
      }
    }
    function read(token) {
      skip_ws();
      var m = token.exec(input);
      if (m) {
        input = input.substr(m[1].length);
        return m[1];
      }
    }
    function read_stop() {
      var color = parseColor(input, true);
      var length, percent;
      if (color) {
        var match = /^#[0-9a-f]+/i.exec(input) || /^rgba?\(.*?\)/i.exec(input) || /^..*?\b/.exec(input);
        input = input.substr(match[0].length);
        color = color.toRGB();
        if (!(length = read(tok_length))) {
          percent = read(tok_percent);
        }
        return { color, length, percent };
      }
    }
    function read_linear_gradient(propName) {
      var angle;
      var to1, to2;
      var stops = [];
      var reverse = false;
      if (read(tok_popen)) {
        angle = read(tok_angle);
        if (angle == "0") {
          angle = "0deg";
        }
        if (angle) {
          angle = parseAngle(angle);
          read(tok_comma);
        } else {
          to1 = read(tok_keyword);
          if (to1 == "to") {
            to1 = read(tok_keyword);
          } else if (to1 && /^-/.test(propName)) {
            reverse = true;
          }
          to2 = read(tok_keyword);
          read(tok_comma);
        }
        if (/-moz-/.test(propName) && angle == null && to1 == null) {
          var x = read(tok_percent), y = read(tok_percent);
          reverse = true;
          if (x == "0%") {
            to1 = "left";
          } else if (x == "100%") {
            to1 = "right";
          }
          if (y == "0%") {
            to2 = "top";
          } else if (y == "100%") {
            to2 = "bottom";
          }
          read(tok_comma);
        }
        while (input && !read(tok_pclose)) {
          var stop = read_stop();
          if (!stop) {
            break;
          }
          stops.push(stop);
          read(tok_comma);
        }
        return {
          type: "linear",
          angle,
          to: to1 && to2 ? to1 + " " + to2 : to1 ? to1 : to2 ? to2 : null,
          stops,
          reverse
        };
      }
    }
    function read_url() {
      if (read(tok_popen)) {
        var url = read(tok_content);
        url = url.replace(/^['"]+|["']+$/g, "");
        read(tok_pclose);
        return { type: "url", url };
      }
    }
    var tok;
    if (tok = read(tok_linear_gradient)) {
      tok = read_linear_gradient(tok);
    } else if (tok = read(tok_url)) {
      tok = read_url();
    }
    return cache1[orig] = tok || { type: "none" };
  }
  return function(input) {
    if (hasOwnProperty3(cache2, input)) {
      return cache2[input];
    }
    return cache2[input] = splitProperty(input).map(parse3);
  };
}();
var splitProperty = /* @__PURE__ */ function() {
  var cache = {};
  return function(input, separator) {
    if (!separator) {
      separator = /^\s*,\s*/;
    }
    var cacheKey = input + separator;
    if (hasOwnProperty3(cache, cacheKey)) {
      return cache[cacheKey];
    }
    var ret = [];
    var last2 = 0, pos = 0;
    var in_paren = 0;
    var in_string = false;
    var m;
    function looking_at(rx) {
      return m = rx.exec(input.substr(pos));
    }
    function trim(str) {
      return str.replace(/^\s+|\s+$/g, "");
    }
    while (pos < input.length) {
      if (!in_string && looking_at(/^[\(\[\{]/)) {
        in_paren++;
        pos++;
      } else if (!in_string && looking_at(/^[\)\]\}]/)) {
        in_paren--;
        pos++;
      } else if (!in_string && looking_at(/^[\"\']/)) {
        in_string = m[0];
        pos++;
      } else if (in_string == "'" && looking_at(/^\\\'/)) {
        pos += 2;
      } else if (in_string == '"' && looking_at(/^\\\"/)) {
        pos += 2;
      } else if (in_string == "'" && looking_at(/^\'/)) {
        in_string = false;
        pos++;
      } else if (in_string == '"' && looking_at(/^\"/)) {
        in_string = false;
        pos++;
      } else if (looking_at(separator)) {
        if (!in_string && !in_paren && pos > last2) {
          ret.push(trim(input.substring(last2, pos)));
          last2 = pos + m[0].length;
        }
        pos += m[0].length;
      } else {
        pos++;
      }
    }
    if (last2 < pos) {
      ret.push(trim(input.substring(last2, pos)));
    }
    return cache[cacheKey] = ret;
  };
}();
var getFontURL2 = /* @__PURE__ */ function(cache) {
  return function(el) {
    var url = cache[el];
    if (!url) {
      var m;
      if (m = /url\((['"]?)([^'")]*?)\1\)\s+format\((['"]?)truetype\3\)/.exec(el)) {
        url = cache[el] = m[2];
      } else if (m = /url\((['"]?)([^'")]*?\.ttf)\1\)/.exec(el)) {
        url = cache[el] = m[2];
      }
    }
    return url;
  };
}(/* @__PURE__ */ Object.create(null));
var getFontHeight = /* @__PURE__ */ function(cache) {
  return function(font) {
    var height = cache[font];
    if (height == null) {
      height = cache[font] = measureText("Mapq", { font }).height;
    }
    return height;
  };
}(/* @__PURE__ */ Object.create(null));
function getFontFaces(doc) {
  if (doc == null) {
    doc = document;
  }
  var result = {};
  for (var i = 0; i < doc.styleSheets.length; ++i) {
    doStylesheet(doc.styleSheets[i]);
  }
  return result;
  function doStylesheet(ss) {
    if (ss) {
      var rules = null;
      try {
        rules = ss.cssRules;
      } catch (ex) {
      }
      if (rules) {
        addRules(ss, rules);
      }
    }
  }
  function findFonts(rule) {
    var src = getPropertyValue(rule.style, "src");
    if (src) {
      return splitProperty(src).reduce(function(a, el) {
        var font2 = getFontURL2(el);
        if (font2) {
          a.push(font2);
        }
        return a;
      }, []);
    } else {
      var font = getFontURL2(rule.cssText);
      return font ? [font] : [];
    }
  }
  function addRules(styleSheet, rules) {
    for (var i2 = 0; i2 < rules.length; ++i2) {
      var r = rules[i2];
      switch (r.type) {
        case 3:
          doStylesheet(r.styleSheet);
          break;
        case 5:
          var style = r.style;
          var family = splitProperty(getPropertyValue(style, "font-family"));
          var bold = /^([56789]00|bold)$/i.test(getPropertyValue(style, "font-weight"));
          var italic = "italic" == getPropertyValue(style, "font-style");
          var src = findFonts(r);
          if (src.length > 0) {
            addRule(styleSheet, family, bold, italic, src[0]);
          }
      }
    }
  }
  function addRule(styleSheet, names, bold, italic, url) {
    if (!/^data:/i.test(url)) {
      if (!(/^[^\/:]+:\/\//.test(url) || /^\//.test(url))) {
        url = String(styleSheet.href).replace(/[^\/]*$/, "") + url;
      }
    }
    names.forEach(function(name2) {
      name2 = name2.replace(/^(['"]?)(.*?)\1$/, "$2");
      if (bold) {
        name2 += "|bold";
      }
      if (italic) {
        name2 += "|italic";
      }
      result[name2] = url;
    });
  }
}
function hasOwnProperty3(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
function getCounter(name2) {
  name2 = "_counter_" + name2;
  return nodeInfo[name2];
}
function getAllCounters(name2) {
  var values = [], p = nodeInfo;
  name2 = "_counter_" + name2;
  while (p) {
    if (hasOwnProperty3(p, name2)) {
      values.push(p[name2]);
    }
    p = Object.getPrototypeOf(p);
  }
  return values.reverse();
}
function incCounter(name2, inc) {
  var p = nodeInfo;
  name2 = "_counter_" + name2;
  while (p && !hasOwnProperty3(p, name2)) {
    p = Object.getPrototypeOf(p);
  }
  if (!p) {
    p = nodeInfo._root;
  }
  p[name2] = (p[name2] || 0) + (inc == null ? 1 : inc);
}
function resetCounter(name2, val) {
  name2 = "_counter_" + name2;
  nodeInfo[name2] = val == null ? 0 : val;
}
function doCounters(a, f, def) {
  for (var i = 0; i < a.length; ) {
    var name2 = a[i++];
    var val = parseFloat(a[i]);
    if (isNaN(val)) {
      f(name2, def);
    } else {
      f(name2, val);
      ++i;
    }
  }
}
function updateCounters(style) {
  var counterReset = getPropertyValue(style, "counter-reset");
  if (counterReset) {
    doCounters(splitProperty(counterReset, /^\s+/), resetCounter, 0);
  }
  var counterIncrement = getPropertyValue(style, "counter-increment");
  if (counterIncrement) {
    doCounters(splitProperty(counterIncrement, /^\s+/), incCounter, 1);
  }
}
function parseColor3(str, css) {
  var color = parseColor(str, true);
  if (color) {
    color = color.toRGB();
    if (css) {
      color = color.toCssRgba();
    } else if (color.a === 0) {
      color = null;
    }
  }
  return color;
}
function whenImagesAreActuallyLoaded(elements, callback) {
  var pending = 0;
  var done = false;
  elements.forEach(function(el) {
    var images = el.querySelectorAll("img");
    for (var i = 0; i < images.length; ++i) {
      var img = images[i];
      if (!img.complete) {
        pending++;
        img.onload = img.onerror = next;
      }
    }
  });
  if (!pending) {
    next();
  }
  function next() {
    if (!done && --pending <= 0) {
      callback();
      done = true;
    }
  }
}
function cacheImages(elements, callback) {
  var urls = [];
  function add(url) {
    if (!IMAGE_CACHE2[url]) {
      IMAGE_CACHE2[url] = true;
      urls.push(url);
    }
  }
  elements.forEach(function dive(element) {
    if (/^img$/i.test(element.tagName)) {
      add(element.src);
    }
    parseBackgroundImage(
      getPropertyValue(
        getComputedStyle2(element),
        "background-image"
      )
    ).forEach(function(bg) {
      if (bg.type == "url") {
        add(bg.url);
      }
    });
    if (element.children) {
      slice2(element.children).forEach(dive);
    }
  });
  var count = urls.length;
  function next() {
    if (--count <= 0) {
      whenImagesAreActuallyLoaded(elements, callback);
    }
  }
  if (count === 0) {
    next();
  }
  urls.forEach(function(url) {
    var img = IMAGE_CACHE2[url] = new window.Image();
    if (!/^data:/i.test(url)) {
      img.crossOrigin = "Anonymous";
    }
    img.src = url;
    if (img.complete) {
      next();
    } else {
      img.onload = next;
      img.onerror = function() {
        IMAGE_CACHE2[url] = null;
        next();
      };
    }
  });
}
function alphaNumeral(n) {
  var result = "";
  do {
    var r = n % 26;
    result = String.fromCharCode(97 + r) + result;
    n = Math.floor(n / 26);
  } while (n > 0);
  return result;
}
function pushNodeInfo(element, style, group) {
  nodeInfo = Object.create(nodeInfo);
  nodeInfo[element.tagName.toLowerCase()] = {
    element,
    style
  };
  var decoration = getPropertyValue(style, "text-decoration");
  if (decoration && decoration != "none") {
    var color = getPropertyValue(style, "text-decoration-color");
    decoration.split(/\s+/g).forEach(function(name2) {
      if (!nodeInfo[name2]) {
        nodeInfo[name2] = color;
        if (name2 == "underline") {
          var offset = getPropertyValue(style, "text-underline-offset");
          if (offset != "auto") {
            nodeInfo["underline-offset"] = parseFloat(offset);
          }
        }
      }
    });
  }
  if (createsStackingContext(style)) {
    nodeInfo._stackingContext = {
      element,
      group
    };
  }
}
function popNodeInfo() {
  nodeInfo = Object.getPrototypeOf(nodeInfo);
}
function updateClipbox(path) {
  if (nodeInfo._clipbox != null) {
    var box = path.bbox(nodeInfo._matrix);
    if (nodeInfo._clipbox) {
      nodeInfo._clipbox = rect_default.intersect(nodeInfo._clipbox, box);
    } else {
      nodeInfo._clipbox = box;
    }
  }
}
function emptyClipbox() {
  var cb = nodeInfo._clipbox;
  if (cb == null) {
    return true;
  }
  if (cb) {
    return cb.width() === 0 || cb.height() === 0;
  }
}
function createsStackingContext(style) {
  function prop(name2) {
    return getPropertyValue(style, name2);
  }
  if (prop("transform") != "none" || prop("position") != "static" || prop("z-index") != "auto" || prop("opacity") < 1) {
    return true;
  }
}
function getComputedStyle2(element, pseudoElt) {
  return window.getComputedStyle(element, pseudoElt || null);
}
function getPropertyValue(style, prop, defa) {
  var val = style.getPropertyValue(prop);
  if (val == null || val === "") {
    if (browser4.webkit) {
      val = style.getPropertyValue("-webkit-" + prop);
    } else if (browser4.mozilla) {
      val = style.getPropertyValue("-moz-" + prop);
    } else if (browser4.opera) {
      val = style.getPropertyValue("-o-" + prop);
    } else if (microsoft) {
      val = style.getPropertyValue("-ms-" + prop);
    }
  }
  if (arguments.length > 2 && (val == null || val === "")) {
    return defa;
  } else {
    return val;
  }
}
function pleaseSetPropertyValue(style, prop, value, important) {
  style.setProperty(prop, value, important);
  if (browser4.webkit) {
    style.setProperty("-webkit-" + prop, value, important);
  } else if (browser4.mozilla) {
    style.setProperty("-moz-" + prop, value, important);
  } else if (browser4.opera) {
    style.setProperty("-o-" + prop, value, important);
  } else if (microsoft) {
    style.setProperty("-ms-" + prop, value, important);
    prop = "ms" + prop.replace(/(^|-)([a-z])/g, function(s, p1, p2) {
      return p1 + p2.toUpperCase();
    });
    style[prop] = value;
  }
}
function getBorder(style, side) {
  side = "border-" + side;
  return {
    width: parseFloat(getPropertyValue(style, side + "-width")),
    style: getPropertyValue(style, side + "-style"),
    color: parseColor3(getPropertyValue(style, side + "-color"), true)
  };
}
function saveStyle(element, func) {
  var prev = element.style.cssText;
  var result = func();
  setStyle(element, prev);
  return result;
}
function getBorderRadius(style, side) {
  var r = getPropertyValue(style, "border-" + side + "-radius").split(/\s+/g).map(parseFloat);
  if (r.length == 1) {
    r.push(r[0]);
  }
  return sanitizeRadius({ x: r[0], y: r[1] });
}
function getContentBox(element) {
  var box = element.getBoundingClientRect();
  box = innerBox(box, "border-*-width", element);
  box = innerBox(box, "padding-*", element);
  return box;
}
function innerBox(box, prop, element) {
  var style, wt, wr, wb, wl;
  if (typeof prop == "string") {
    style = getComputedStyle2(element);
    wt = parseFloat(getPropertyValue(style, prop.replace("*", "top")));
    wr = parseFloat(getPropertyValue(style, prop.replace("*", "right")));
    wb = parseFloat(getPropertyValue(style, prop.replace("*", "bottom")));
    wl = parseFloat(getPropertyValue(style, prop.replace("*", "left")));
  } else if (typeof prop == "number") {
    wt = wr = wb = wl = prop;
  }
  return {
    top: box.top + wt,
    right: box.right - wr,
    bottom: box.bottom - wb,
    left: box.left + wl,
    width: box.right - box.left - wr - wl,
    height: box.bottom - box.top - wb - wt
  };
}
function getTransform(style) {
  var transform2 = getPropertyValue(style, "transform");
  if (transform2 == "none") {
    return null;
  }
  var matrix = /^\s*matrix\(\s*(.*?)\s*\)\s*$/.exec(transform2);
  if (matrix) {
    var origin = getPropertyValue(style, "transform-origin");
    matrix = matrix[1].split(/\s*,\s*/g).map(parseFloat);
    origin = origin.split(/\s+/g).map(parseFloat);
    return {
      matrix,
      origin
    };
  }
}
function radiansToDegrees(radians) {
  return 180 * radians / Math.PI % 360;
}
function parseAngle(angle) {
  var num = parseFloat(angle);
  if (/grad$/.test(angle)) {
    return Math.PI * num / 200;
  } else if (/rad$/.test(angle)) {
    return num;
  } else if (/turn$/.test(angle)) {
    return Math.PI * num * 2;
  } else if (/deg$/.test(angle)) {
    return Math.PI * num / 180;
  }
}
function setTransform(shape, m) {
  m = new matrix_default(m[0], m[1], m[2], m[3], m[4], m[5]);
  shape.transform(m);
  return m;
}
function setClipping2(shape, clipPath) {
  shape.clip(clipPath);
}
function addArcToPath(path, x, y, options2) {
  var points3 = new arc_default([x, y], options2).curvePoints(), i = 1;
  while (i < points3.length) {
    path.curveTo(points3[i++], points3[i++], points3[i++]);
  }
}
function sanitizeRadius(r) {
  if (r.x <= 0 || r.y <= 0) {
    r.x = r.y = 0;
  }
  return r;
}
function adjustBorderRadiusForBox(box, rTL, rTR, rBR, rBL) {
  var tl_x = Math.max(0, rTL.x), tl_y = Math.max(0, rTL.y);
  var tr_x = Math.max(0, rTR.x), tr_y = Math.max(0, rTR.y);
  var br_x = Math.max(0, rBR.x), br_y = Math.max(0, rBR.y);
  var bl_x = Math.max(0, rBL.x), bl_y = Math.max(0, rBL.y);
  var f = Math.min(
    box.width / (tl_x + tr_x),
    box.height / (tr_y + br_y),
    box.width / (br_x + bl_x),
    box.height / (bl_y + tl_y)
  );
  if (f < 1) {
    tl_x *= f;
    tl_y *= f;
    tr_x *= f;
    tr_y *= f;
    br_x *= f;
    br_y *= f;
    bl_x *= f;
    bl_y *= f;
  }
  return {
    tl: { x: tl_x, y: tl_y },
    tr: { x: tr_x, y: tr_y },
    br: { x: br_x, y: br_y },
    bl: { x: bl_x, y: bl_y }
  };
}
function elementRoundBox(element, box, type) {
  var style = getComputedStyle2(element);
  var rTL = getBorderRadius(style, "top-left");
  var rTR = getBorderRadius(style, "top-right");
  var rBL = getBorderRadius(style, "bottom-left");
  var rBR = getBorderRadius(style, "bottom-right");
  if (type == "padding" || type == "content") {
    var bt = getBorder(style, "top");
    var br = getBorder(style, "right");
    var bb = getBorder(style, "bottom");
    var bl = getBorder(style, "left");
    rTL.x -= bl.width;
    rTL.y -= bt.width;
    rTR.x -= br.width;
    rTR.y -= bt.width;
    rBR.x -= br.width;
    rBR.y -= bb.width;
    rBL.x -= bl.width;
    rBL.y -= bb.width;
    if (type == "content") {
      var pt = parseFloat(getPropertyValue(style, "padding-top"));
      var pr = parseFloat(getPropertyValue(style, "padding-right"));
      var pb = parseFloat(getPropertyValue(style, "padding-bottom"));
      var pl = parseFloat(getPropertyValue(style, "padding-left"));
      rTL.x -= pl;
      rTL.y -= pt;
      rTR.x -= pr;
      rTR.y -= pt;
      rBR.x -= pr;
      rBR.y -= pb;
      rBL.x -= pl;
      rBL.y -= pb;
    }
  }
  if (typeof type == "number") {
    rTL.x -= type;
    rTL.y -= type;
    rTR.x -= type;
    rTR.y -= type;
    rBR.x -= type;
    rBR.y -= type;
    rBL.x -= type;
    rBL.y -= type;
  }
  return roundBox(box, rTL, rTR, rBR, rBL);
}
function roundBox(box, rTL0, rTR0, rBR0, rBL0) {
  var tmp = adjustBorderRadiusForBox(box, rTL0, rTR0, rBR0, rBL0);
  var rTL = tmp.tl;
  var rTR = tmp.tr;
  var rBR = tmp.br;
  var rBL = tmp.bl;
  var path = new Path({ fill: null, stroke: null });
  path.moveTo(box.left, box.top + rTL.y);
  if (rTL.x) {
    addArcToPath(path, box.left + rTL.x, box.top + rTL.y, {
      startAngle: -180,
      endAngle: -90,
      radiusX: rTL.x,
      radiusY: rTL.y
    });
  }
  path.lineTo(box.right - rTR.x, box.top);
  if (rTR.x) {
    addArcToPath(path, box.right - rTR.x, box.top + rTR.y, {
      startAngle: -90,
      endAngle: 0,
      radiusX: rTR.x,
      radiusY: rTR.y
    });
  }
  path.lineTo(box.right, box.bottom - rBR.y);
  if (rBR.x) {
    addArcToPath(path, box.right - rBR.x, box.bottom - rBR.y, {
      startAngle: 0,
      endAngle: 90,
      radiusX: rBR.x,
      radiusY: rBR.y
    });
  }
  path.lineTo(box.left + rBL.x, box.bottom);
  if (rBL.x) {
    addArcToPath(path, box.left + rBL.x, box.bottom - rBL.y, {
      startAngle: 90,
      endAngle: 180,
      radiusX: rBL.x,
      radiusY: rBL.y
    });
  }
  return path.close();
}
function formatCounter(val, style) {
  var str = String(parseFloat(val));
  switch (style) {
    case "decimal-leading-zero":
      if (str.length < 2) {
        str = "0" + str;
      }
      return str;
    case "lower-roman":
      return arabicToRoman(val).toLowerCase();
    case "upper-roman":
      return arabicToRoman(val).toUpperCase();
    case "lower-latin":
    case "lower-alpha":
      return alphaNumeral(val - 1);
    case "upper-latin":
    case "upper-alpha":
      return alphaNumeral(val - 1).toUpperCase();
    default:
      return str;
  }
}
function evalPseudoElementContent(element, content) {
  function displayCounter(name2, style, separator) {
    if (!separator) {
      return formatCounter(getCounter(name2) || 0, style);
    }
    separator = separator.replace(/^\s*(["'])(.*)\1\s*$/, "$2");
    return getAllCounters(name2).map(function(val) {
      return formatCounter(val, style);
    }).join(separator);
  }
  var a = splitProperty(content, /^\s+/);
  var result = [], m;
  a.forEach(function(el) {
    var tmp;
    if (m = /^\s*(["'])(.*)\1\s*$/.exec(el)) {
      result.push(m[2].replace(/\\([0-9a-f]{4})/gi, function(s, p) {
        return String.fromCharCode(parseInt(p, 16));
      }));
    } else if (m = /^\s*counter\((.*?)\)\s*$/.exec(el)) {
      tmp = splitProperty(m[1]);
      result.push(displayCounter(tmp[0], tmp[1]));
    } else if (m = /^\s*counters\((.*?)\)\s*$/.exec(el)) {
      tmp = splitProperty(m[1]);
      result.push(displayCounter(tmp[0], tmp[2], tmp[1]));
    } else if (m = /^\s*attr\((.*?)\)\s*$/.exec(el)) {
      result.push(element.getAttribute(m[1]) || "");
    } else {
      result.push(el);
    }
  });
  return result.join("");
}
function getCssText(style) {
  if (style.cssText) {
    return style.cssText;
  }
  var result = [];
  for (var i = 0; i < style.length; ++i) {
    result.push(style[i] + ": " + getPropertyValue(style, style[i]));
  }
  return result.join(";\n");
}
function _renderWithPseudoElements(element, group) {
  if (element.tagName == KENDO_PSEUDO_ELEMENT) {
    _renderElement(element, group);
    return;
  }
  var fake = [];
  function pseudo(kind, place) {
    var style = getComputedStyle2(element, kind), content = style.content;
    updateCounters(style);
    if (content && content != "normal" && content != "none" && style.width != "0px") {
      var psel = element.ownerDocument.createElement(KENDO_PSEUDO_ELEMENT);
      setStyle(psel, getCssText(style));
      psel.textContent = evalPseudoElementContent(element, content);
      element.insertBefore(psel, place);
      fake.push(psel);
    }
  }
  pseudo(":before", element.firstChild);
  pseudo(":after", null);
  if (fake.length > 0) {
    var saveClass = element.className;
    element.className += " kendo-pdf-hide-pseudo-elements";
    _renderElement(element, group);
    element.className = saveClass;
    fake.forEach(function(el) {
      element.removeChild(el);
    });
  } else {
    _renderElement(element, group);
  }
}
function _renderElement(element, group) {
  var style = getComputedStyle2(element);
  var top = getBorder(style, "top");
  var right = getBorder(style, "right");
  var bottom = getBorder(style, "bottom");
  var left = getBorder(style, "left");
  var rTL0 = getBorderRadius(style, "top-left");
  var rTR0 = getBorderRadius(style, "top-right");
  var rBL0 = getBorderRadius(style, "bottom-left");
  var rBR0 = getBorderRadius(style, "bottom-right");
  var dir = getPropertyValue(style, "direction");
  var backgroundColor = getPropertyValue(style, "background-color");
  backgroundColor = parseColor3(backgroundColor);
  var backgroundImage = parseBackgroundImage(getPropertyValue(style, "background-image"));
  var backgroundRepeat = splitProperty(getPropertyValue(style, "background-repeat"));
  var backgroundPosition = splitProperty(getPropertyValue(style, "background-position"));
  var backgroundOrigin = splitProperty(getPropertyValue(style, "background-origin"));
  var backgroundSize = splitProperty(getPropertyValue(style, "background-size"));
  var textOverflow, saveTextOverflow;
  if (microsoft) {
    textOverflow = style.textOverflow;
    if (textOverflow == "ellipsis") {
      saveTextOverflow = element.style.textOverflow;
      element.style.textOverflow = "clip";
    }
  }
  if (browser4.msie && browser4.version < 10) {
    backgroundPosition = splitProperty(element.currentStyle.backgroundPosition);
  }
  var innerbox = innerBox(element.getBoundingClientRect(), "border-*-width", element);
  (function() {
    var clip = getPropertyValue(style, "clip");
    var m = /^\s*rect\((.*)\)\s*$/.exec(clip);
    if (m) {
      var a = m[1].split(/[ ,]+/g);
      var top2 = a[0] == "auto" ? innerbox.top : parseFloat(a[0]) + innerbox.top;
      var right2 = a[1] == "auto" ? innerbox.right : parseFloat(a[1]) + innerbox.left;
      var bottom2 = a[2] == "auto" ? innerbox.bottom : parseFloat(a[2]) + innerbox.top;
      var left2 = a[3] == "auto" ? innerbox.left : parseFloat(a[3]) + innerbox.left;
      var tmp = new group_default();
      var clipPath = new Path().moveTo(left2, top2).lineTo(right2, top2).lineTo(right2, bottom2).lineTo(left2, bottom2).close();
      setClipping2(tmp, clipPath);
      group.append(tmp);
      group = tmp;
      updateClipbox(clipPath);
    }
  })();
  var boxes, i, cells;
  var display = getPropertyValue(style, "display");
  if (display == "table-row") {
    boxes = [];
    for (i = 0, cells = element.children; i < cells.length; ++i) {
      boxes.push(cells[i].getBoundingClientRect());
    }
  } else {
    boxes = element.getClientRects();
    if (boxes.length == 1) {
      boxes = [element.getBoundingClientRect()];
    }
  }
  boxes = adjustBoxes(boxes);
  for (i = 0; i < boxes.length; ++i) {
    drawOneBox(boxes[i], i === 0, i == boxes.length - 1);
  }
  if (element.tagName == "A" && element.href && !/^#?$/.test(element.getAttribute("href"))) {
    if (!nodeInfo._avoidLinks || !matches(element, nodeInfo._avoidLinks)) {
      var r = document.createRange();
      r.selectNodeContents(element);
      slice2(r.getClientRects()).forEach(function(box) {
        var g = new group_default();
        g._pdfLink = {
          url: element.href,
          top: box.top,
          right: box.right,
          bottom: box.bottom,
          left: box.left
        };
        group.append(g);
      });
    }
  }
  if (boxes.length > 0 && display == "list-item" && !element.getAttribute("kendo-no-bullet")) {
    drawBullet(boxes[0]);
  }
  (function() {
    function clipit() {
      var clipPath = elementRoundBox(element, innerbox, "padding");
      var tmp = new group_default();
      setClipping2(tmp, clipPath);
      group.append(tmp);
      group = tmp;
      updateClipbox(clipPath);
    }
    if (isFormField(element)) {
      clipit();
    } else if (/^(hidden|auto|scroll)/.test(getPropertyValue(style, "overflow"))) {
      clipit();
    } else if (/^(hidden|auto|scroll)/.test(getPropertyValue(style, "overflow-x"))) {
      clipit();
    } else if (/^(hidden|auto|scroll)/.test(getPropertyValue(style, "overflow-y"))) {
      clipit();
    }
  })();
  if (!maybeRenderWidget(element, group) && !maybeRenderBullet(element, group)) {
    renderContents(element, group);
  }
  if (microsoft && textOverflow == "ellipsis") {
    element.style.textOverflow = saveTextOverflow;
  }
  return group;
  function adjustBoxes(boxes2) {
    if (/^td$/i.test(element.tagName)) {
      var table = nodeInfo.table;
      if (table && getPropertyValue(table.style, "border-collapse") == "collapse") {
        var tableBorderLeft = getBorder(table.style, "left").width;
        var tableBorderTop = getBorder(table.style, "top").width;
        if (tableBorderLeft === 0 && tableBorderTop === 0) {
          return boxes2;
        }
        var tableBox = table.element.getBoundingClientRect();
        var firstCell = table.element.rows[0].cells[0];
        var firstCellBox = firstCell.getBoundingClientRect();
        if (firstCellBox.top == tableBox.top || firstCellBox.left == tableBox.left) {
          return slice2(boxes2).map(function(box) {
            return {
              left: box.left + tableBorderLeft,
              top: box.top + tableBorderTop,
              right: box.right + tableBorderLeft,
              bottom: box.bottom + tableBorderTop,
              height: box.height,
              width: box.width
            };
          });
        }
      }
    }
    return boxes2;
  }
  function drawEdge(color, len, Wtop, Wleft, Wright, rl, rr, transform2) {
    if (Wtop <= 0) {
      return;
    }
    var path, edge = new group_default();
    setTransform(edge, transform2);
    group.append(edge);
    sanitizeRadius(rl);
    sanitizeRadius(rr);
    path = new Path({
      fill: { color },
      stroke: null
    });
    edge.append(path);
    path.moveTo(rl.x ? Math.max(rl.x, Wleft) : 0, 0).lineTo(len - (rr.x ? Math.max(rr.x, Wright) : 0), 0).lineTo(len - Math.max(rr.x, Wright), Wtop).lineTo(Math.max(rl.x, Wleft), Wtop).close();
    if (rl.x) {
      drawRoundCorner(Wleft, rl, [-1, 0, 0, 1, rl.x, 0]);
    }
    if (rr.x) {
      drawRoundCorner(Wright, rr, [1, 0, 0, 1, len - rr.x, 0]);
    }
    function drawRoundCorner(Wright2, r2, transform3) {
      var angle = Math.PI / 2 * Wright2 / (Wright2 + Wtop);
      var ri = {
        x: r2.x - Wright2,
        y: r2.y - Wtop
      };
      var path2 = new Path({
        fill: { color },
        stroke: null
      }).moveTo(0, 0);
      setTransform(path2, transform3);
      addArcToPath(path2, 0, r2.y, {
        startAngle: -90,
        endAngle: -radiansToDegrees(angle),
        radiusX: r2.x,
        radiusY: r2.y
      });
      if (ri.x > 0 && ri.y > 0) {
        path2.lineTo(ri.x * Math.cos(angle), r2.y - ri.y * Math.sin(angle));
        addArcToPath(path2, 0, r2.y, {
          startAngle: -radiansToDegrees(angle),
          endAngle: -90,
          radiusX: ri.x,
          radiusY: ri.y,
          anticlockwise: true
        });
      } else if (ri.x > 0) {
        path2.lineTo(ri.x, Wtop).lineTo(0, Wtop);
      } else {
        path2.lineTo(ri.x, Wtop).lineTo(ri.x, 0);
      }
      edge.append(path2.close());
    }
  }
  function drawBackground2(box) {
    var background = new group_default();
    setClipping2(background, roundBox(box, rTL0, rTR0, rBR0, rBL0));
    group.append(background);
    if (backgroundColor) {
      var path = new Path({
        fill: { color: backgroundColor.toCssRgba() },
        stroke: null
      });
      path.moveTo(box.left, box.top).lineTo(box.right, box.top).lineTo(box.right, box.bottom).lineTo(box.left, box.bottom).close();
      background.append(path);
    }
    for (var i2 = backgroundImage.length; --i2 >= 0; ) {
      drawOneBackground(
        background,
        box,
        backgroundImage[i2],
        backgroundRepeat[i2 % backgroundRepeat.length],
        backgroundPosition[i2 % backgroundPosition.length],
        backgroundOrigin[i2 % backgroundOrigin.length],
        backgroundSize[i2 % backgroundSize.length]
      );
    }
  }
  function drawOneBackground(group2, box, background, backgroundRepeat2, backgroundPosition2, backgroundOrigin2, backgroundSize2) {
    if (!background || background == "none") {
      return;
    }
    if (background.type == "url") {
      var img = IMAGE_CACHE2[background.url];
      if (img && img.width > 0 && img.height > 0) {
        drawBackgroundImage(group2, box, img.width, img.height, function(group3, rect) {
          group3.append(new image_default(background.url, rect));
        });
      }
    } else if (background.type == "linear") {
      drawBackgroundImage(group2, box, box.width, box.height, gradientRenderer(background));
    } else {
      return;
    }
    function drawBackgroundImage(group3, box2, img_width, img_height, renderBG) {
      var aspect_ratio = img_width / img_height, f;
      var orgBox = box2;
      if (backgroundOrigin2 == "content-box") {
        orgBox = innerBox(orgBox, "border-*-width", element);
        orgBox = innerBox(orgBox, "padding-*", element);
      } else if (backgroundOrigin2 == "padding-box") {
        orgBox = innerBox(orgBox, "border-*-width", element);
      }
      if (!/^\s*auto(\s+auto)?\s*$/.test(backgroundSize2)) {
        if (backgroundSize2 == "contain") {
          f = Math.min(
            orgBox.width / img_width,
            orgBox.height / img_height
          );
          img_width *= f;
          img_height *= f;
        } else if (backgroundSize2 == "cover") {
          f = Math.max(
            orgBox.width / img_width,
            orgBox.height / img_height
          );
          img_width *= f;
          img_height *= f;
        } else {
          var size = backgroundSize2.split(/\s+/g);
          if (/%$/.test(size[0])) {
            img_width = orgBox.width * parseFloat(size[0]) / 100;
          } else {
            img_width = parseFloat(size[0]);
          }
          if (size.length == 1 || size[1] == "auto") {
            img_height = img_width / aspect_ratio;
          } else if (/%$/.test(size[1])) {
            img_height = orgBox.height * parseFloat(size[1]) / 100;
          } else {
            img_height = parseFloat(size[1]);
          }
        }
      }
      var pos = String(backgroundPosition2);
      switch (pos) {
        case "bottom":
          pos = "50% 100%";
          break;
        case "top":
          pos = "50% 0";
          break;
        case "left":
          pos = "0 50%";
          break;
        case "right":
          pos = "100% 50%";
          break;
        case "center":
          pos = "50% 50%";
          break;
      }
      pos = pos.split(/\s+/);
      if (pos.length == 1) {
        pos[1] = "50%";
      }
      if (/%$/.test(pos[0])) {
        pos[0] = parseFloat(pos[0]) / 100 * (orgBox.width - img_width);
      } else {
        pos[0] = parseFloat(pos[0]);
      }
      if (/%$/.test(pos[1])) {
        pos[1] = parseFloat(pos[1]) / 100 * (orgBox.height - img_height);
      } else {
        pos[1] = parseFloat(pos[1]);
      }
      var rect = new rect_default([orgBox.left + pos[0], orgBox.top + pos[1]], [img_width, img_height]);
      function rewX() {
        while (rect.origin.x > box2.left) {
          rect.origin.x -= img_width;
        }
      }
      function rewY() {
        while (rect.origin.y > box2.top) {
          rect.origin.y -= img_height;
        }
      }
      function repeatX() {
        while (rect.origin.x < box2.right) {
          renderBG(group3, rect.clone());
          rect.origin.x += img_width;
        }
      }
      if (backgroundRepeat2 == "no-repeat") {
        renderBG(group3, rect);
      } else if (backgroundRepeat2 == "repeat-x") {
        rewX();
        repeatX();
      } else if (backgroundRepeat2 == "repeat-y") {
        rewY();
        while (rect.origin.y < box2.bottom) {
          renderBG(group3, rect.clone());
          rect.origin.y += img_height;
        }
      } else if (backgroundRepeat2 == "repeat") {
        rewX();
        rewY();
        var origin = rect.origin.clone();
        while (rect.origin.y < box2.bottom) {
          rect.origin.x = origin.x;
          repeatX();
          rect.origin.y += img_height;
        }
      }
    }
  }
  function drawBullet() {
    var listStyleType = getPropertyValue(style, "list-style-type");
    if (listStyleType == "none") {
      return;
    }
    var listStylePosition = getPropertyValue(style, "list-style-position");
    function _drawBullet(f) {
      saveStyle(element, function() {
        element.style.position = "relative";
        var bullet = element.ownerDocument.createElement(KENDO_PSEUDO_ELEMENT);
        bullet.style.position = "absolute";
        bullet.style.boxSizing = "border-box";
        if (listStylePosition == "outside") {
          bullet.style.width = "6em";
          bullet.style.left = "-6.8em";
          bullet.style.textAlign = "right";
        } else {
          bullet.style.left = "0px";
        }
        f(bullet);
        element.insertBefore(bullet, element.firstChild);
        renderElement(bullet, group);
        element.removeChild(bullet);
      });
    }
    function elementIndex(f) {
      var a = element.parentNode.children;
      var k = element.getAttribute("kendo-split-index");
      if (k != null) {
        return f(k | 0, a.length);
      }
      for (var i2 = 0; i2 < a.length; ++i2) {
        if (a[i2] === element) {
          return f(i2, a.length);
        }
      }
    }
    switch (listStyleType) {
      case "circle":
      case "disc":
      case "square":
        _drawBullet(function(bullet) {
          bullet.innerHTML = "&nbsp;";
          bullet.setAttribute(KENDO_BULLET_TYPE, listStyleType);
        });
        break;
      case "decimal":
      case "decimal-leading-zero":
        _drawBullet(function(bullet) {
          elementIndex(function(idx) {
            ++idx;
            if (listStyleType == "decimal-leading-zero" && idx < 10) {
              idx = "0" + idx;
            }
            bullet.innerHTML = idx + ".";
          });
        });
        break;
      case "lower-roman":
      case "upper-roman":
        _drawBullet(function(bullet) {
          elementIndex(function(idx) {
            idx = arabicToRoman(idx + 1);
            if (listStyleType == "upper-roman") {
              idx = idx.toUpperCase();
            }
            bullet.innerHTML = idx + ".";
          });
        });
        break;
      case "lower-latin":
      case "lower-alpha":
      case "upper-latin":
      case "upper-alpha":
        _drawBullet(function(bullet) {
          elementIndex(function(idx) {
            idx = alphaNumeral(idx);
            if (/^upper/i.test(listStyleType)) {
              idx = idx.toUpperCase();
            }
            bullet.innerHTML = idx + ".";
          });
        });
        break;
    }
  }
  function drawOneBox(box, isFirst, isLast) {
    if (box.width === 0 || box.height === 0) {
      return;
    }
    drawBackground2(box);
    var shouldDrawLeft = left.width > 0 && (isFirst && dir == "ltr" || isLast && dir == "rtl");
    var shouldDrawRight = right.width > 0 && (isLast && dir == "ltr" || isFirst && dir == "rtl");
    if (top.width === 0 && left.width === 0 && right.width === 0 && bottom.width === 0) {
      return;
    }
    if (top.color == right.color && top.color == bottom.color && top.color == left.color) {
      if (top.width == right.width && top.width == bottom.width && top.width == left.width) {
        if (shouldDrawLeft && shouldDrawRight) {
          box = innerBox(box, top.width / 2);
          var path = elementRoundBox(element, box, top.width / 2);
          path.options.stroke = {
            color: top.color,
            width: top.width
          };
          group.append(path);
          return;
        }
      }
    }
    if (rTL0.x === 0 && rTR0.x === 0 && rBR0.x === 0 && rBL0.x === 0) {
      if (top.width < 2 && left.width < 2 && right.width < 2 && bottom.width < 2) {
        if (top.width > 0) {
          group.append(
            new Path({
              stroke: { width: top.width, color: top.color }
            }).moveTo(box.left, box.top + top.width / 2).lineTo(box.right, box.top + top.width / 2)
          );
        }
        if (bottom.width > 0) {
          group.append(
            new Path({
              stroke: { width: bottom.width, color: bottom.color }
            }).moveTo(box.left, box.bottom - bottom.width / 2).lineTo(box.right, box.bottom - bottom.width / 2)
          );
        }
        if (shouldDrawLeft) {
          group.append(
            new Path({
              stroke: { width: left.width, color: left.color }
            }).moveTo(box.left + left.width / 2, box.top).lineTo(box.left + left.width / 2, box.bottom)
          );
        }
        if (shouldDrawRight) {
          group.append(
            new Path({
              stroke: { width: right.width, color: right.color }
            }).moveTo(box.right - right.width / 2, box.top).lineTo(box.right - right.width / 2, box.bottom)
          );
        }
        return;
      }
    }
    var tmp = adjustBorderRadiusForBox(box, rTL0, rTR0, rBR0, rBL0);
    var rTL = tmp.tl;
    var rTR = tmp.tr;
    var rBR = tmp.br;
    var rBL = tmp.bl;
    drawEdge(
      top.color,
      box.width,
      top.width,
      left.width,
      right.width,
      rTL,
      rTR,
      [1, 0, 0, 1, box.left, box.top]
    );
    drawEdge(
      bottom.color,
      box.width,
      bottom.width,
      right.width,
      left.width,
      rBR,
      rBL,
      [-1, 0, 0, -1, box.right, box.bottom]
    );
    function inv(p) {
      return { x: p.y, y: p.x };
    }
    drawEdge(
      left.color,
      box.height,
      left.width,
      bottom.width,
      top.width,
      inv(rBL),
      inv(rTL),
      [0, -1, 1, 0, box.left, box.bottom]
    );
    drawEdge(
      right.color,
      box.height,
      right.width,
      top.width,
      bottom.width,
      inv(rTR),
      inv(rBR),
      [0, 1, -1, 0, box.right, box.top]
    );
  }
}
function gradientRenderer(gradient) {
  return function(group, rect) {
    var width = rect.width(), height = rect.height();
    switch (gradient.type) {
      case "linear":
        var angle = gradient.angle != null ? gradient.angle : Math.PI;
        switch (gradient.to) {
          case "top":
            angle = 0;
            break;
          case "left":
            angle = -Math.PI / 2;
            break;
          case "bottom":
            angle = Math.PI;
            break;
          case "right":
            angle = Math.PI / 2;
            break;
          case "top left":
          case "left top":
            angle = -Math.atan2(height, width);
            break;
          case "top right":
          case "right top":
            angle = Math.atan2(height, width);
            break;
          case "bottom left":
          case "left bottom":
            angle = Math.PI + Math.atan2(height, width);
            break;
          case "bottom right":
          case "right bottom":
            angle = Math.PI - Math.atan2(height, width);
            break;
        }
        if (gradient.reverse) {
          angle -= Math.PI;
        }
        angle %= 2 * Math.PI;
        if (angle < 0) {
          angle += 2 * Math.PI;
        }
        var pxlen = Math.abs(width * Math.sin(angle)) + Math.abs(height * Math.cos(angle));
        var scaledAngle = Math.atan(width * Math.tan(angle) / height);
        var sin = Math.sin(scaledAngle), cos = Math.cos(scaledAngle);
        var len = Math.abs(sin) + Math.abs(cos);
        var x = len / 2 * sin;
        var y = len / 2 * cos;
        if (angle > Math.PI / 2 && angle <= 3 * Math.PI / 2) {
          x = -x;
          y = -y;
        }
        var implicit = [], right = 0;
        var stops = gradient.stops.map(function(s, i) {
          var offset = s.percent;
          if (offset) {
            offset = parseFloat(offset) / 100;
          } else if (s.length) {
            offset = parseFloat(s.length) / pxlen;
          } else if (i === 0) {
            offset = 0;
          } else if (i == gradient.stops.length - 1) {
            offset = 1;
          }
          var stop = {
            color: s.color.toCssRgba(),
            offset
          };
          if (offset != null) {
            right = offset;
            implicit.forEach(function(s2, i2) {
              var stop2 = s2.stop;
              stop2.offset = s2.left + (right - s2.left) * (i2 + 1) / (implicit.length + 1);
            });
            implicit = [];
          } else {
            implicit.push({ left: right, stop });
          }
          return stop;
        });
        var start = [0.5 - x, 0.5 + y];
        var end = [0.5 + x, 0.5 - y];
        group.append(
          Path.fromRect(rect).stroke(null).fill(new linear_gradient_default({
            start,
            end,
            stops,
            userSpace: false
          }))
        );
        break;
      case "radial":
        if (window.console && window.console.log) {
          window.console.log("Radial gradients are not yet supported in HTML renderer");
        }
        break;
    }
  };
}
function maybeRenderWidget(element, group) {
  var visual;
  if (element._kendoExportVisual) {
    var rect = element.getBoundingClientRect();
    var size = {
      width: rect.width,
      height: rect.height
    };
    visual = element._kendoExportVisual(size);
  } else if (window.kendo && window.kendo.jQuery && element.getAttribute(window.kendo.attr("role"))) {
    var widget = window.kendo.widgetInstance(window.kendo.jQuery(element));
    if (widget && (widget.exportDOMVisual || widget.exportVisual)) {
      if (widget.exportDOMVisual) {
        visual = widget.exportDOMVisual();
      } else {
        visual = widget.exportVisual();
      }
    }
  }
  if (!visual) {
    return false;
  }
  var wrap2 = new group_default();
  wrap2.children.push(visual);
  var bbox = element.getBoundingClientRect();
  wrap2.transform(transform().translate(bbox.left, bbox.top));
  group.append(wrap2);
  return true;
}
function maybeRenderBullet(element, group) {
  var bulletType = element.getAttribute(KENDO_BULLET_TYPE);
  if (!bulletType) {
    return false;
  }
  var box = element.getBoundingClientRect();
  var color = getComputedStyle2(element).color;
  if (bulletType === "square") {
    var rectSize = box.height / 5;
    group.append(new rect_default2(new rect_default([
      box.right - rectSize,
      box.top + box.height / 2.1
    ], [rectSize, rectSize])).fill(color).stroke(color));
  } else {
    var radius = box.height / 7;
    var center = [
      box.right - radius,
      box.top + (box.height + radius) / 2
    ];
    var circle = new circle_default2(new circle_default(center, radius));
    if (bulletType === "circle") {
      circle.stroke(color, 0.5);
    } else {
      circle.fill(color).stroke(null);
    }
    group.append(circle);
  }
  return true;
}
function renderImage(element, url, group) {
  var box = getContentBox(element);
  var rect = new rect_default([box.left, box.top], [box.width, box.height]);
  var image = new image_default(url, rect);
  setClipping2(image, elementRoundBox(element, box, "content"));
  group.append(image);
}
function zIndexSort(a, b) {
  var sa = getComputedStyle2(a);
  var sb = getComputedStyle2(b);
  var za = parseFloat(getPropertyValue(sa, "z-index"));
  var zb = parseFloat(getPropertyValue(sb, "z-index"));
  var pa = getPropertyValue(sa, "position");
  var pb = getPropertyValue(sb, "position");
  if (isNaN(za) && isNaN(zb)) {
    if (/static|absolute/.test(pa) && /static|absolute/.test(pb)) {
      return 0;
    }
    if (pa == "static") {
      return -1;
    }
    if (pb == "static") {
      return 1;
    }
    return 0;
  }
  if (isNaN(za)) {
    return zb === 0 ? 0 : zb > 0 ? -1 : 1;
  }
  if (isNaN(zb)) {
    return za === 0 ? 0 : za > 0 ? 1 : -1;
  }
  return parseFloat(za) - parseFloat(zb);
}
function isFormField(element) {
  return /^(?:textarea|select|input)$/i.test(element.tagName);
}
function getSelectedOption(element) {
  if (element.selectedOptions && element.selectedOptions.length > 0) {
    return element.selectedOptions[0];
  }
  return element.options[element.selectedIndex];
}
function renderCheckbox(element, group) {
  var style = getComputedStyle2(element);
  var color = getPropertyValue(style, "color");
  var box = element.getBoundingClientRect();
  if (element.type == "checkbox") {
    group.append(
      Path.fromRect(
        new rect_default(
          [box.left + 1, box.top + 1],
          [box.width - 2, box.height - 2]
        )
      ).stroke(color, 1)
    );
    if (element.checked) {
      group.append(
        new Path().stroke(color, 1.2).moveTo(
          box.left + 0.22 * box.width,
          box.top + 0.55 * box.height
        ).lineTo(
          box.left + 0.45 * box.width,
          box.top + 0.75 * box.height
        ).lineTo(
          box.left + 0.78 * box.width,
          box.top + 0.22 * box.width
        )
      );
    }
  } else {
    group.append(
      new circle_default2(
        new circle_default([
          (box.left + box.right) / 2,
          (box.top + box.bottom) / 2
        ], Math.min(box.width - 2, box.height - 2) / 2)
      ).stroke(color, 1)
    );
    if (element.checked) {
      group.append(
        new circle_default2(
          new circle_default([
            (box.left + box.right) / 2,
            (box.top + box.bottom) / 2
          ], Math.min(box.width - 8, box.height - 8) / 2)
        ).fill(color).stroke(null)
      );
    }
  }
}
function renderFormField(element, group) {
  var tag = element.tagName.toLowerCase();
  if (tag == "input" && (element.type == "checkbox" || element.type == "radio")) {
    return renderCheckbox(element, group);
  }
  var p = element.parentNode;
  var doc = element.ownerDocument;
  var el = doc.createElement(KENDO_PSEUDO_ELEMENT);
  var option;
  setStyle(el, getCssText(getComputedStyle2(element)));
  if (tag == "input") {
    el.style.whiteSpace = "pre";
  }
  if (tag == "select" || tag == "textarea") {
    el.style.overflow = "auto";
  }
  if (tag == "select") {
    if (element.multiple) {
      for (var i = 0; i < element.options.length; ++i) {
        option = doc.createElement(KENDO_PSEUDO_ELEMENT);
        setStyle(option, getCssText(getComputedStyle2(element.options[i])));
        option.style.display = "block";
        option.textContent = element.options[i].textContent;
        el.appendChild(option);
      }
    } else {
      option = getSelectedOption(element);
      if (option) {
        el.textContent = option.textContent;
      }
    }
  } else {
    el.textContent = element.value;
  }
  p.insertBefore(el, element);
  el.scrollLeft = element.scrollLeft;
  el.scrollTop = element.scrollTop;
  element.style.display = "none";
  renderContents(el, group);
  element.style.display = "";
  p.removeChild(el);
}
function serializeSVG(element) {
  var serializer = new window.XMLSerializer();
  var xml = serializer.serializeToString(element);
  if (browser4.mozilla && !(element.getAttribute("width") && element.getAttribute("height"))) {
    var doc = new window.DOMParser().parseFromString(xml, "image/svg+xml");
    var svg = doc.documentElement;
    var box = getContentBox(element);
    svg.setAttribute("width", box.width);
    svg.setAttribute("height", box.height);
    xml = serializer.serializeToString(svg);
  }
  return xml;
}
function renderContents(element, group) {
  if (nodeInfo._stackingContext.element === element) {
    nodeInfo._stackingContext.group = group;
  }
  switch (element.tagName.toLowerCase()) {
    case "img":
      renderImage(element, element.src, group);
      break;
    case "svg":
      var xml = serializeSVG(element);
      var dataURL = "data:image/svg+xml;base64," + encodeBase64(xml);
      renderImage(element, dataURL, group);
      break;
    case "canvas":
      try {
        renderImage(element, element.toDataURL("image/png"), group);
      } catch (ex) {
      }
      break;
    case "textarea":
    case "input":
    case "select":
      renderFormField(element, group);
      break;
    default:
      var children = [], floats = [], positioned = [];
      for (var i = element.firstChild; i; i = i.nextSibling) {
        switch (i.nodeType) {
          case 3:
            if (/\S/.test(i.data)) {
              renderText(element, i, group);
            }
            break;
          case 1:
            var style = getComputedStyle2(i);
            var floating = getPropertyValue(style, "float");
            var position = getPropertyValue(style, "position");
            if (position != "static") {
              positioned.push(i);
            } else if (floating != "none") {
              floats.push(i);
            } else {
              children.push(i);
            }
            break;
        }
      }
      mergeSort(children, zIndexSort).forEach(function(el) {
        renderElement(el, group);
      });
      mergeSort(floats, zIndexSort).forEach(function(el) {
        renderElement(el, group);
      });
      mergeSort(positioned, zIndexSort).forEach(function(el) {
        renderElement(el, group);
      });
  }
}
function renderText(element, node, group) {
  if (emptyClipbox()) {
    return;
  }
  var style = getComputedStyle2(element);
  if (parseFloat(getPropertyValue(style, "text-indent")) < -500) {
    return;
  }
  var text = node.data;
  var start = 0;
  var end = text.search(/\S\s*$/) + 1;
  if (!end) {
    return;
  }
  var fontSize = getPropertyValue(style, "font-size");
  var lineHeight = getPropertyValue(style, "line-height");
  var font = [
    getPropertyValue(style, "font-style"),
    getPropertyValue(style, "font-variant"),
    getPropertyValue(style, "font-weight"),
    fontSize,
    // no need for line height here; it breaks layout in FF
    getPropertyValue(style, "font-family")
  ].join(" ");
  fontSize = parseFloat(fontSize);
  lineHeight = parseFloat(lineHeight);
  if (fontSize === 0 || isNaN(fontSize)) {
    return;
  }
  var color = getPropertyValue(style, "color");
  var range = element.ownerDocument.createRange();
  var align2 = getPropertyValue(style, "text-align");
  var isJustified = align2 == "justify";
  var columnCount = getPropertyValue(style, "column-count", 1);
  var whiteSpace = getPropertyValue(style, "white-space");
  var textTransform = getPropertyValue(style, "text-transform");
  var estimateLineLength = element.getBoundingClientRect().width / fontSize * 5;
  if (estimateLineLength === 0) {
    estimateLineLength = 500;
  }
  var prevLineBottom = null;
  var underline = nodeInfo["underline"];
  var lineThrough = nodeInfo["line-through"];
  var overline = nodeInfo["overline"];
  var underlineOffset = nodeInfo["underline-offset"];
  if (underline) {
    forEachRect(decorateUnder);
  }
  while (!doChunk()) {
  }
  if (lineThrough || overline) {
    forEachRect(decorateOver);
  }
  return;
  function forEachRect(callback) {
    range.selectNode(node);
    var clientRects = slice2(range.getClientRects());
    forEachRect = function(cb) {
      return clientRects.forEach(cb);
    };
    forEachRect(callback);
  }
  function actuallyGetRangeBoundingRect(range2) {
    if (microsoft || browser4.chrome || browser4.safari) {
      var rectangles = range2.getClientRects(), box = {
        top: Infinity,
        right: -Infinity,
        bottom: -Infinity,
        left: Infinity
      }, done = false;
      for (var i = 0; i < rectangles.length; ++i) {
        var b = rectangles[i];
        if (b.width <= 1 || b.bottom === prevLineBottom) {
          continue;
        }
        box.left = Math.min(b.left, box.left);
        box.top = Math.min(b.top, box.top);
        box.right = Math.max(b.right, box.right);
        box.bottom = Math.max(b.bottom, box.bottom);
        done = true;
      }
      if (!done) {
        return range2.getBoundingClientRect();
      }
      box.width = box.right - box.left;
      box.height = box.bottom - box.top;
      return box;
    }
    return range2.getBoundingClientRect();
  }
  function doChunk() {
    var origStart = start;
    var box, pos = text.substr(start).search(/\S/);
    start += pos;
    if (pos < 0 || start >= end) {
      return true;
    }
    range.setStart(node, start);
    range.setEnd(node, start + 1);
    box = actuallyGetRangeBoundingRect(range);
    var found = false;
    if (isJustified || columnCount > 1) {
      pos = text.substr(start).search(/\s/);
      if (pos >= 0) {
        range.setEnd(node, start + pos);
        var r = actuallyGetRangeBoundingRect(range);
        if (r.bottom == box.bottom) {
          box = r;
          found = true;
          start += pos;
        }
      }
    }
    if (!found) {
      pos = function findEOL(min, eol, max) {
        range.setEnd(node, eol);
        var r2 = actuallyGetRangeBoundingRect(range);
        if (r2.bottom != box.bottom && min < eol) {
          return findEOL(min, min + eol >> 1, eol);
        } else if (r2.right != box.right) {
          box = r2;
          if (eol < max) {
            return findEOL(eol, eol + max >> 1, max);
          } else {
            return eol;
          }
        } else {
          return eol;
        }
      }(start, Math.min(end, start + estimateLineLength), end);
      if (pos == start) {
        return true;
      }
      start = pos;
      pos = range.toString().search(/\s+$/);
      if (pos === 0) {
        return false;
      }
      if (pos > 0) {
        range.setEnd(node, range.startOffset + pos);
        box = actuallyGetRangeBoundingRect(range);
      }
    }
    if (microsoft) {
      box = range.getClientRects()[0];
    }
    var str = range.toString();
    if (!/^(?:pre|pre-wrap)$/i.test(whiteSpace)) {
      str = str.replace(/\s+/g, " ");
    } else if (/\t/.test(str)) {
      var cc = 0;
      for (pos = origStart; pos < range.startOffset; ++pos) {
        var code = text.charCodeAt(pos);
        if (code == 9) {
          cc += 8 - cc % 8;
        } else if (code == 10 || code == 13) {
          cc = 0;
        } else {
          cc++;
        }
      }
      while ((pos = str.search("	")) >= 0) {
        var indent = "        ".substr(0, 8 - (cc + pos) % 8);
        str = str.substr(0, pos) + indent + str.substr(pos + 1);
      }
    }
    if (!found) {
      prevLineBottom = box.bottom;
    }
    drawText2(str, box);
  }
  function drawText2(str, box) {
    if (microsoft && !isNaN(lineHeight)) {
      var height = getFontHeight(font);
      var top = (box.top + box.bottom - height) / 2;
      box = {
        top,
        right: box.right,
        bottom: top + height,
        left: box.left,
        height,
        width: box.right - box.left
      };
    }
    switch (textTransform) {
      case "uppercase":
        str = str.toUpperCase();
        break;
      case "lowercase":
        str = str.toLowerCase();
        break;
      case "capitalize":
        str = str.replace(/(?:^|\s)\S/g, function(l) {
          return l.toUpperCase();
        });
        break;
    }
    var text2 = new TextRect(
      str,
      new rect_default(
        [box.left, box.top],
        [box.width, box.height]
      ),
      {
        font,
        fill: { color }
      }
    );
    group.append(text2);
  }
  function drawTextLine(lineWidth, textBox, color2, ypos) {
    if (color2) {
      var path = new Path({ stroke: {
        width: lineWidth,
        color: color2
      } });
      ypos -= lineWidth;
      path.moveTo(textBox.left, ypos).lineTo(textBox.right, ypos);
      group.append(path);
    }
  }
  function decorateOver(box) {
    var width = fontSize / 12;
    drawTextLine(width, box, lineThrough, box.bottom - box.height / 2.7);
    drawTextLine(width, box, overline, box.top);
  }
  function decorateUnder(box) {
    var width = fontSize / 12;
    var underlinePos = box.bottom;
    if (underlineOffset != null) {
      underlinePos += underlineOffset;
    } else {
      underlinePos += width;
    }
    drawTextLine(width, box, underline, underlinePos);
  }
}
function groupInStackingContext(element, group, zIndex) {
  var main;
  if (zIndex != "auto") {
    main = nodeInfo._stackingContext.group;
    zIndex = parseFloat(zIndex);
  } else {
    main = group;
    zIndex = 0;
  }
  var a = main.children;
  for (var i = 0; i < a.length; ++i) {
    if (a[i]._dom_zIndex != null && a[i]._dom_zIndex > zIndex) {
      break;
    }
  }
  var tmp = new group_default();
  main.insert(i, tmp);
  tmp._dom_zIndex = zIndex;
  if (main !== group) {
    if (nodeInfo._clipbox) {
      var m = nodeInfo._matrix.invert();
      var r = nodeInfo._clipbox.transformCopy(m);
      setClipping2(tmp, Path.fromRect(r));
    }
  }
  return tmp;
}
function renderElement(element, container) {
  var style = getComputedStyle2(element);
  updateCounters(style);
  if (/^(style|script|link|meta|iframe|col|colgroup)$/i.test(element.tagName)) {
    return;
  }
  if (nodeInfo._clipbox == null) {
    return;
  }
  var opacity = parseFloat(getPropertyValue(style, "opacity"));
  var visibility = getPropertyValue(style, "visibility");
  var display = getPropertyValue(style, "display");
  if (opacity === 0 || visibility == "hidden" || display == "none") {
    return;
  }
  var tr = getTransform(style);
  var group;
  var zIndex = getPropertyValue(style, "z-index");
  if ((tr || opacity < 1) && zIndex == "auto") {
    zIndex = 0;
  }
  group = groupInStackingContext(element, container, zIndex);
  if (opacity < 1) {
    group.opacity(opacity * group.opacity());
  }
  pushNodeInfo(element, style, group);
  if (!tr) {
    _renderWithPseudoElements(element, group);
  } else {
    saveStyle(element, function() {
      pleaseSetPropertyValue(element.style, "transform", "none", "important");
      pleaseSetPropertyValue(element.style, "transition", "none", "important");
      if (getPropertyValue(style, "position") == "static") {
        pleaseSetPropertyValue(element.style, "position", "relative", "important");
      }
      var bbox = element.getBoundingClientRect();
      var x = bbox.left + tr.origin[0];
      var y = bbox.top + tr.origin[1];
      var m = [1, 0, 0, 1, -x, -y];
      m = mmul2(m, tr.matrix);
      m = mmul2(m, [1, 0, 0, 1, x, y]);
      m = setTransform(group, m);
      nodeInfo._matrix = nodeInfo._matrix.multiplyCopy(m);
      _renderWithPseudoElements(element, group);
    });
  }
  popNodeInfo();
}
function mmul2(a, b) {
  var a1 = a[0], b1 = a[1], c1 = a[2], d1 = a[3], e1 = a[4], f1 = a[5];
  var a2 = b[0], b2 = b[1], c2 = b[2], d2 = b[3], e2 = b[4], f2 = b[5];
  return [
    a1 * a2 + b1 * c2,
    a1 * b2 + b1 * d2,
    c1 * a2 + d1 * c2,
    c1 * b2 + d1 * d2,
    e1 * a2 + f1 * c2 + e2,
    e1 * b2 + f1 * d2 + f2
  ];
}

export {
  class_default,
  logToConsole,
  support_default,
  throttle,
  named_colors_default,
  parseColor,
  color_default,
  geometry_exports,
  Path,
  MultiPath,
  image_default,
  group_default,
  surface_default4 as surface_default,
  exportImage,
  exportSVG,
  drawing_exports,
  Inflate,
  Deflate,
  exportPDF,
  drawDOM
};
//# sourceMappingURL=chunk-ZJJ2SPTS.js.map
