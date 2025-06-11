import {
  caretAltDownIcon,
  moreVerticalIcon,
  xCircleIcon
} from "./chunk-2A7OSQWA.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-2RQ6XJGS.js";
import {
  EventsOutsideAngularDirective,
  KENDO_RESIZESENSOR,
  KENDO_TOGGLEBUTTONTABSTOP,
  Keys,
  MultiTabStop,
  ResizeBatchService,
  ResizeSensorComponent,
  TemplateContextDirective,
  ToggleButtonTabStopDirective,
  anyChanged,
  guid,
  hasObservers,
  isChanged,
  isDocumentAvailable,
  isFirefox,
  isPresent,
  isSafari
} from "./chunk-TCXXA5LR.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-632K3S7H.js";
import {
  validatePackage
} from "./chunk-D2DMRN4R.js";
import {
  AnimationBuilder,
  animate,
  query,
  sequence,
  stagger,
  style
} from "./chunk-PMNJ5QTY.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-STNL7G5M.js";
import {
  ApplicationRef,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver$1,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  forwardRef,
  isDevMode,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DTS3OAND.js";
import {
  Subject,
  Subscription,
  auditTime,
  filter,
  from,
  fromEvent,
  merge,
  take,
  tap
} from "./chunk-BTNZXMHM.js";

// node_modules/@progress/kendo-popup-common/dist/es/align-point.js
var align_point_default = {
  "bottom": "bottom",
  "center": "center",
  "middle": "middle",
  "left": "left",
  "right": "right",
  "top": "top"
};

// node_modules/@progress/kendo-popup-common/dist/es/align.js
var align = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var anchorHorizontal = anchorAlign.horizontal;
  var anchorVertical = anchorAlign.vertical;
  var elementHorizontal = elementAlign.horizontal;
  var elementVertical = elementAlign.vertical;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var top = anchorRect.top;
  var left = anchorRect.left;
  if (anchorVertical === align_point_default.bottom) {
    top += anchorRect.height;
  }
  if (anchorVertical === align_point_default.center || anchorVertical === align_point_default.middle) {
    top += Math.round(anchorRect.height / 2);
  }
  if (elementVertical === align_point_default.bottom) {
    top -= elementRect.height;
    verticalMargin *= -1;
  }
  if (elementVertical === align_point_default.center || elementVertical === align_point_default.middle) {
    top -= Math.round(elementRect.height / 2);
    verticalMargin *= -1;
  }
  if (anchorHorizontal === align_point_default.right) {
    left += anchorRect.width;
  }
  if (anchorHorizontal === align_point_default.center || anchorHorizontal === align_point_default.middle) {
    left += Math.round(anchorRect.width / 2);
  }
  if (elementHorizontal === align_point_default.right) {
    left -= elementRect.width;
    horizontalMargin *= -1;
  }
  if (elementHorizontal === align_point_default.center || elementHorizontal === align_point_default.middle) {
    left -= Math.round(elementRect.width / 2);
    horizontalMargin *= -1;
  }
  return {
    top: top + verticalMargin,
    left: left + horizontalMargin
  };
};
var align_default = align;

// node_modules/@progress/kendo-popup-common/dist/es/add-scroll.js
function addScroll(rect, scroll) {
  return {
    top: rect.top + scroll.y,
    left: rect.left + scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/owner-document.js
function ownerDocument(element) {
  return element.ownerDocument || element.document || element;
}

// node_modules/@progress/kendo-popup-common/dist/es/window.js
var getWindow = function(element) {
  return ownerDocument(element).defaultView;
};
var window_default = getWindow;

// node_modules/@progress/kendo-popup-common/dist/es/document.js
var getDocument = function(element) {
  return ownerDocument(element).documentElement;
};
var document_default = getDocument;

// node_modules/@progress/kendo-popup-common/dist/es/scrollbar-width.js
var cachedWidth = 0;
function scrollbarWidth() {
  if (!cachedWidth && typeof document !== "undefined") {
    var div = document.createElement("div");
    div.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block";
    div.innerHTML = "&nbsp;";
    document.body.appendChild(div);
    cachedWidth = div.offsetWidth - div.scrollWidth;
    document.body.removeChild(div);
  }
  return cachedWidth;
}

// node_modules/@progress/kendo-popup-common/dist/es/window-viewport.js
function windowViewport(element) {
  var win = window_default(element);
  var document2 = document_default(element);
  var result = {
    height: win.innerHeight,
    width: win.innerWidth
  };
  if (document2.scrollHeight - document2.clientHeight > 0) {
    result.width -= scrollbarWidth();
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/bounding-offset.js
var boundingOffset = function(element) {
  if (!element.getBoundingClientRect) {
    var viewport = windowViewport(element);
    return {
      bottom: viewport.height,
      left: 0,
      right: viewport.width,
      top: 0
    };
  }
  var ref = element.getBoundingClientRect();
  var bottom = ref.bottom;
  var left = ref.left;
  var right = ref.right;
  var top = ref.top;
  return {
    bottom,
    left,
    right,
    top
  };
};
var bounding_offset_default = boundingOffset;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent.js
var offsetParent = function(element) {
  var offsetParent2 = element.offsetParent;
  while (offsetParent2 && offsetParent2.style.position === "static") {
    offsetParent2 = offsetParent2.offsetParent;
  }
  return offsetParent2 || document_default(element);
};
var offset_parent_default = offsetParent;

// node_modules/@progress/kendo-popup-common/dist/es/offset.js
var rectOfHiddenElement = function(element) {
  var ref = element.style;
  var display = ref.display;
  var left = ref.left;
  var position2 = ref.position;
  element.style.display = "";
  element.style.left = "-10000px";
  element.style.position = "absolute";
  var rect = element.getBoundingClientRect();
  element.style.display = display;
  element.style.left = left;
  element.style.position = position2;
  return rect;
};
var offset = function(element) {
  var rect = element.getBoundingClientRect();
  var left = rect.left;
  var top = rect.top;
  if (!rect.height && !rect.width) {
    rect = rectOfHiddenElement(element);
  }
  return {
    top,
    left,
    height: rect.height,
    width: rect.width
  };
};
var offset_default = offset;

// node_modules/@progress/kendo-popup-common/dist/es/parents.js
function parents_default(element, until) {
  var result = [];
  var next = element.parentNode;
  while (next) {
    result.push(next);
    if (next === until) {
      break;
    }
    next = next.parentNode;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/scroll-position.js
function scrollPosition(element) {
  var documentElement = document_default(element);
  var win = window_default(element);
  return {
    x: win.pageXOffset || documentElement.scrollLeft || 0,
    y: win.pageYOffset || documentElement.scrollTop || 0
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/element-scroll-position.js
function element_scroll_position_default(element) {
  if (element === (element.ownerDocument || {}).body) {
    return scrollPosition(element);
  }
  return {
    x: element.scrollLeft,
    y: element.scrollTop
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/parent-scroll-position.js
function parentScrollPosition(element) {
  var parent = offset_parent_default(element);
  return parent ? element_scroll_position_default(parent) : { x: 0, y: 0 };
}

// node_modules/@progress/kendo-popup-common/dist/es/position.js
var position = function(element, parent) {
  var win = window_default(element);
  var elementStyles = win.getComputedStyle(element);
  var offset2 = offset_default(element);
  var parentElement = parent || offset_parent_default(element);
  var ownerDocument2 = element.ownerDocument;
  var useRelative = parentElement !== ownerDocument2.body && parentElement !== ownerDocument2.documentElement;
  var parentOffset = { top: 0, left: 0 };
  if (elementStyles.position !== "fixed" && useRelative) {
    var parentStyles = win.getComputedStyle(parentElement);
    parentOffset = offset_default(parentElement);
    parentOffset.top += parseInt(parentStyles.borderTopWidth, 10);
    parentOffset.left += parseInt(parentStyles.borderLeftWidth, 10);
  }
  return {
    top: offset2.top - parentOffset.top,
    left: offset2.left - parentOffset.left,
    height: offset2.height,
    width: offset2.width
  };
};
var position_default = position;

// node_modules/@progress/kendo-popup-common/dist/es/offset-parent-scroll-position.js
function offset_parent_scroll_position_default(offsetParentElement, element) {
  return (
    // eslint-disable-line no-arrow-condition
    offsetParentElement ? element_scroll_position_default(offsetParentElement) : parentScrollPosition(element)
  );
}

// node_modules/@progress/kendo-popup-common/dist/es/position-with-scroll.js
function position_with_scroll_default(element, parent, scale) {
  if (scale === void 0) scale = 1;
  var offsetParentElement = parent ? offset_parent_default(parent) : null;
  var ref = position_default(element, offsetParentElement);
  var top = ref.top;
  var left = ref.left;
  var height = ref.height;
  var width = ref.width;
  var ref$1 = offset_parent_scroll_position_default(offsetParentElement, element);
  var x = ref$1.x;
  var y = ref$1.y;
  var ownerDocument2 = element.ownerDocument;
  var positionScale = offsetParentElement === ownerDocument2.body || offsetParentElement === ownerDocument2.documentElement ? 1 : scale;
  return {
    top: top + y * positionScale,
    left: left + x * positionScale,
    height,
    width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/remove-scroll.js
function removeScroll(rect, scroll) {
  return {
    top: rect.top - scroll.y,
    left: rect.left - scroll.x,
    height: rect.height,
    width: rect.width
  };
}

// node_modules/@progress/kendo-popup-common/dist/es/collision.js
var collision_default = {
  "fit": "fit",
  "flip": "flip",
  "none": "none"
};

// node_modules/@progress/kendo-popup-common/dist/es/restrict-to-view.js
var fit = function(position2, size, viewPortSize) {
  var output = 0;
  if (position2 + size > viewPortSize) {
    output = viewPortSize - (position2 + size);
  }
  if (position2 < 0) {
    output = -position2;
  }
  return output;
};
var flip = function(ref) {
  var offset2 = ref.offset;
  var size = ref.size;
  var anchorSize = ref.anchorSize;
  var viewPortSize = ref.viewPortSize;
  var anchorAlignPoint = ref.anchorAlignPoint;
  var elementAlignPoint = ref.elementAlignPoint;
  var margin = ref.margin;
  var output = 0;
  var isPositionCentered = elementAlignPoint === align_point_default.center || elementAlignPoint === align_point_default.middle;
  var isOriginCentered = anchorAlignPoint === align_point_default.center || anchorAlignPoint === align_point_default.middle;
  var marginToAdd = 2 * margin;
  if (elementAlignPoint !== anchorAlignPoint && !isPositionCentered && !isOriginCentered) {
    var isBeforeAnchor = anchorAlignPoint === align_point_default.top || anchorAlignPoint === align_point_default.left;
    if (offset2 < 0 && isBeforeAnchor) {
      output = size + anchorSize + marginToAdd;
      if (offset2 + output + size > viewPortSize) {
        output = 0;
      }
    } else if (offset2 >= 0 && !isBeforeAnchor) {
      if (offset2 + size > viewPortSize) {
        output += -(anchorSize + size + marginToAdd);
      }
      if (offset2 + output < 0) {
        output = 0;
      }
    }
  }
  return output;
};
var restrictToView = function(options) {
  var anchorRect = options.anchorRect;
  var anchorAlign = options.anchorAlign;
  var elementRect = options.elementRect;
  var elementAlign = options.elementAlign;
  var collisions = options.collisions;
  var viewPort = options.viewPort;
  var margin = options.margin;
  if (margin === void 0) margin = {};
  var elementTop = elementRect.top;
  var elementLeft = elementRect.left;
  var elementHeight = elementRect.height;
  var elementWidth = elementRect.width;
  var viewPortHeight = viewPort.height;
  var viewPortWidth = viewPort.width;
  var horizontalMargin = margin.horizontal || 0;
  var verticalMargin = margin.vertical || 0;
  var left = 0;
  var top = 0;
  var isVerticalFit = collisions.vertical === collision_default.fit;
  var isHorizontalFit = collisions.horizontal === collision_default.fit;
  var isVerticalFlip = collisions.vertical === collision_default.flip;
  var isHorizontalFlip = collisions.horizontal === collision_default.flip;
  if (isVerticalFit) {
    top += fit(elementTop, elementHeight, viewPortHeight);
  }
  if (isHorizontalFit) {
    left += fit(elementLeft, elementWidth, viewPortWidth);
  }
  if (isVerticalFlip) {
    top += flip({
      margin: verticalMargin,
      offset: elementTop,
      size: elementHeight,
      anchorSize: anchorRect.height,
      viewPortSize: viewPortHeight,
      anchorAlignPoint: anchorAlign.vertical,
      elementAlignPoint: elementAlign.vertical
    });
  }
  if (isHorizontalFlip) {
    left += flip({
      margin: horizontalMargin,
      offset: elementLeft,
      size: elementWidth,
      anchorSize: anchorRect.width,
      viewPortSize: viewPortWidth,
      anchorAlignPoint: anchorAlign.horizontal,
      elementAlignPoint: elementAlign.horizontal
    });
  }
  var flippedVertical = isVerticalFlip && top !== 0;
  var flippedHorizontal = isHorizontalFlip && left !== 0;
  var fittedVertical = isVerticalFit && top !== 0;
  var fittedHorizontal = isHorizontalFit && left !== 0;
  return {
    flipped: flippedHorizontal || flippedVertical,
    fitted: fittedVertical || fittedHorizontal,
    flip: {
      horizontal: flippedHorizontal,
      vertical: flippedVertical
    },
    fit: {
      horizontal: fittedHorizontal,
      vertical: fittedVertical
    },
    offset: {
      left,
      top
    }
  };
};
var restrict_to_view_default = restrictToView;

// node_modules/@progress/kendo-popup-common/dist/es/siblings.js
function siblings_default(element) {
  var result = [];
  var sibling = element.parentNode.firstElementChild;
  while (sibling) {
    if (sibling !== element) {
      result.push(sibling);
    }
    sibling = sibling.nextElementSibling;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/sibling-container.js
function sibling_container_default(anchor, container) {
  var parentElements = parents_default(anchor);
  var containerElement = container;
  var siblingElements;
  var result;
  while (containerElement) {
    siblingElements = siblings_default(containerElement);
    result = parentElements.reduce(
      function(list, p) {
        return list.concat(siblingElements.filter(function(s) {
          return s === p;
        }));
      },
      []
    )[0];
    if (result) {
      break;
    }
    containerElement = containerElement.parentElement;
  }
  return result;
}

// node_modules/@progress/kendo-popup-common/dist/es/utils.js
function memoize(fun) {
  var result;
  var called = false;
  return function() {
    var args = [], len = arguments.length;
    while (len--) args[len] = arguments[len];
    if (called) {
      return result;
    }
    result = fun.apply(void 0, args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext = memoize(function(elementSource) {
  if (!canUseDOM()) {
    return false;
  }
  var currentDocument = elementSource ? elementSource.ownerDocument : document;
  if (!currentDocument || !currentDocument.body) {
    return false;
  }
  var top = 10;
  var parent = currentDocument.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  parent.innerHTML = '<div style="position: fixed; top: ' + top + 'px;">child</div>';
  currentDocument.body.appendChild(parent);
  var isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  currentDocument.body.removeChild(parent);
  return isDifferent;
});
var canUseDOM = function() {
  return Boolean(
    // from fbjs
    typeof window !== "undefined" && window.document && window.document.createElement
  );
};

// node_modules/@progress/kendo-angular-popup/fesm2022/progress-kendo-angular-popup.mjs
var _c0 = ["container"];
var _c1 = ["*"];
function PopupComponent_ng_template_4_Template(rf, ctx) {
}
var eitherRect = (rect, offset2) => {
  if (!rect) {
    return {
      height: 0,
      left: offset2.left,
      top: offset2.top,
      width: 0
    };
  }
  return rect;
};
var removeStackingOffset = (rect, stackingOffset) => {
  if (!stackingOffset) {
    return rect;
  }
  const result = {
    height: rect.height,
    left: rect.left - stackingOffset.left,
    top: rect.top - stackingOffset.top,
    width: rect.width
  };
  return result;
};
var isDifferentOffset = (oldOffset, newOffset) => {
  const {
    left: oldLeft,
    top: oldTop
  } = oldOffset;
  const {
    left: newLeft,
    top: newTop
  } = newOffset;
  return Math.abs(oldLeft - newLeft) >= 1 || Math.abs(oldTop - newTop) >= 1;
};
var isWindowAvailable = () => {
  return typeof window !== "undefined";
};
var OVERFLOW_REGEXP = /auto|scroll/;
var overflowElementStyle = (element) => {
  return `${element.style.overflow}${element.style.overflowX}${element.style.overflowY}`;
};
var overflowComputedStyle = (element) => {
  const styles = window.getComputedStyle(element);
  return `${styles.overflow}${styles.overflowX}${styles.overflowY}`;
};
var overflowStyle = (element) => {
  return overflowElementStyle(element) || overflowComputedStyle(element);
};
var scrollableParents = (element) => {
  const parentElements = [];
  if (!isDocumentAvailable() || !isWindowAvailable()) {
    return parentElements;
  }
  let parent = element.parentElement;
  while (parent) {
    if (OVERFLOW_REGEXP.test(overflowStyle(parent)) || parent.hasAttribute("data-scrollable")) {
      parentElements.push(parent);
    }
    parent = parent.parentElement;
  }
  parentElements.push(window);
  return parentElements;
};
var FRAME_DURATION = 1e3 / 60;
function memoize2(fun) {
  let result;
  let called = false;
  return (...args) => {
    if (called) {
      return result;
    }
    result = fun(...args);
    called = true;
    return result;
  };
}
var hasRelativeStackingContext2 = memoize2(() => {
  if (!isDocumentAvailable() && document.body !== null) {
    return false;
  }
  const top = 10;
  const parent = document.createElement("div");
  parent.style.transform = "matrix(10, 0, 0, 10, 0, 0)";
  const childElement = document.createElement("div");
  childElement.style.position = "fixed";
  childElement.style.top = `${top}px`;
  childElement.textContent = "child";
  parent.appendChild(childElement);
  document.body.appendChild(parent);
  const isDifferent = parent.children[0].getBoundingClientRect().top !== top;
  document.body.removeChild(parent);
  return isDifferent;
});
var zIndex2 = (anchor, container) => {
  if (!anchor || !isDocumentAvailable() || !isWindowAvailable()) {
    return null;
  }
  const sibling = sibling_container_default(anchor, container);
  if (!sibling) {
    return null;
  }
  const result = [anchor].concat(parents_default(anchor, sibling)).reduce((index, p) => {
    const zIndexStyle = p.style.zIndex || window.getComputedStyle(p).zIndex;
    const current = parseInt(zIndexStyle, 10);
    return current > index ? current : index;
  }, 0);
  return result ? result + 1 : null;
};
var scaleRect = (rect, scale) => {
  if (!rect || scale === 1) {
    return rect;
  }
  return {
    height: rect.height / scale,
    left: rect.left / scale,
    top: rect.top / scale,
    width: rect.width / scale
  };
};
var STYLES = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"];
var DOMService = class _DOMService {
  _dummy;
  addOffset(current, addition) {
    return {
      left: current.left + addition.left,
      top: current.top + addition.top
    };
  }
  addScroll(rect, scroll) {
    return addScroll(rect, scroll);
  }
  align(settings) {
    return align_default(settings);
  }
  boundingOffset(el) {
    return bounding_offset_default(el);
  }
  getFontStyles(el) {
    const window2 = this.getWindow();
    if (!window2 || !el) {
      return [];
    }
    const computedStyles = window2.getComputedStyle(el);
    return STYLES.map((key) => ({
      key,
      value: computedStyles[key]
    }));
  }
  getWindow() {
    return isWindowAvailable() ? window : null;
  }
  hasOffsetParent(el) {
    if (!el || !isDocumentAvailable()) {
      return false;
    }
    return !!this.nativeElement(el).offsetParent;
  }
  offset(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return offset_default(el);
  }
  offsetAtPoint(el, currentLocation) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    const element = this.nativeElement(el);
    const {
      left,
      top,
      transition
    } = element.style;
    element.style.transition = "none";
    element.style.left = `${currentLocation.left}px`;
    element.style.top = `${currentLocation.top}px`;
    const currentOffset = offset_default(element);
    element.style.left = left;
    element.style.top = top;
    this._dummy = element.offsetHeight;
    element.style.transition = transition;
    return currentOffset;
  }
  nativeElement(el) {
    if (!el || !isDocumentAvailable()) {
      return null;
    }
    return el.nativeElement || el;
  }
  position(element, popup, scale = 1) {
    if (!element || !popup) {
      return null;
    }
    return position_with_scroll_default(element, this.nativeElement(popup), scale);
  }
  removeScroll(rect, scroll) {
    return removeScroll(rect, scroll);
  }
  restrictToView(settings) {
    return restrict_to_view_default(settings);
  }
  scrollPosition(el) {
    return scrollPosition(this.nativeElement(el));
  }
  scrollableParents(el) {
    return scrollableParents(el);
  }
  stackingElementOffset(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return null;
    }
    return offset_default(relativeContextElement);
  }
  stackingElementScroll(el) {
    const relativeContextElement = this.getRelativeContextElement(el);
    if (!relativeContextElement) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: relativeContextElement.scrollLeft,
      y: relativeContextElement.scrollTop
    };
  }
  getRelativeContextElement(el) {
    if (!el || !hasRelativeStackingContext2()) {
      return null;
    }
    let parent = this.nativeElement(el).parentElement;
    while (parent) {
      if (window.getComputedStyle(parent).transform !== "none") {
        return parent;
      }
      parent = parent.parentElement;
    }
    return null;
  }
  useRelativePosition(el) {
    return !!this.getRelativeContextElement(el);
  }
  windowViewPort(el) {
    return windowViewport(this.nativeElement(el));
  }
  zIndex(anchor, container) {
    return zIndex2(anchor, this.nativeElement(container));
  }
  zoomLevel() {
    if (!isDocumentAvailable() || !isWindowAvailable()) {
      return 1;
    }
    return parseFloat((document.documentElement.clientWidth / window.innerWidth).toFixed(2)) || 1;
  }
  isZoomed() {
    return this.zoomLevel() > 1;
  }
  static ɵfac = function DOMService_Factory(t) {
    return new (t || _DOMService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _DOMService,
    factory: _DOMService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DOMService, [{
    type: Injectable
  }], null, null);
})();
var SCALE = new InjectionToken("Popup Document Scale");
var AlignService = class _AlignService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  alignElement(settings) {
    const {
      anchor,
      element,
      anchorAlign,
      elementAlign,
      margin,
      offset: offset2,
      positionMode
    } = settings;
    const scale = this.scale || 1;
    const fixedMode = positionMode === "fixed" || !this._dom.hasOffsetParent(element);
    const anchorRect = fixedMode ? this.absoluteRect(anchor, element, offset2, scale) : this.relativeRect(anchor, element, offset2, scale);
    const elementRect = scaleRect(this._dom.offset(element.nativeElement), scale);
    const result = this._dom.align({
      anchorAlign,
      anchorRect,
      elementAlign,
      elementRect,
      margin
    });
    return result;
  }
  absoluteRect(anchor, element, offset2, scale) {
    const scrollPos = this.elementScrollPosition(anchor, element);
    const rect = eitherRect(this._dom.offset(anchor), offset2);
    const stackScale = 2 * scale;
    const stackScroll = this._dom.stackingElementScroll(element);
    if (scale !== 1 && stackScroll) {
      stackScroll.x /= stackScale;
      stackScroll.y /= stackScale;
    }
    const stackOffset = this._dom.stackingElementOffset(element);
    if (scale !== 1 && stackOffset) {
      stackOffset.left /= stackScale;
      stackOffset.top /= stackScale;
    }
    return this._dom.removeScroll(this._dom.addScroll(removeStackingOffset(scaleRect(rect, scale), stackOffset), stackScroll), scrollPos);
  }
  elementScrollPosition(anchor, element) {
    return anchor ? {
      x: 0,
      y: 0
    } : this._dom.scrollPosition(element);
  }
  relativeRect(anchor, element, offset2, scale) {
    const rect = eitherRect(this._dom.position(anchor, element, scale), offset2);
    return scaleRect(rect, scale);
  }
  static ɵfac = function AlignService_Factory(t) {
    return new (t || _AlignService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AlignService,
    factory: _AlignService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlignService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var PositionService = class _PositionService {
  _dom;
  scale;
  constructor(_dom, scale = 1) {
    this._dom = _dom;
    this.scale = scale;
  }
  positionElement(settings) {
    const {
      anchor,
      currentLocation,
      element,
      anchorAlign,
      elementAlign,
      collisions,
      margin
    } = settings;
    const dom = this._dom;
    const scale = this.scale || 1;
    const elementOffset = dom.offsetAtPoint(element, currentLocation);
    const elementRect = scaleRect(elementOffset, scale);
    const anchorOffset = scaleRect(dom.offset(anchor), scale);
    const anchorRect = eitherRect(anchorOffset, currentLocation);
    const viewPort = settings.viewPort || dom.windowViewPort(element);
    viewPort.width = viewPort.width / scale;
    viewPort.height = viewPort.height / scale;
    const result = dom.restrictToView({
      anchorAlign,
      anchorRect,
      collisions,
      elementAlign,
      elementRect,
      margin,
      viewPort
    });
    const offset2 = dom.addOffset(currentLocation, result.offset);
    return {
      flip: result.flip,
      flipped: result.flipped,
      offset: offset2
    };
  }
  static ɵfac = function PositionService_Factory(t) {
    return new (t || _PositionService)(ɵɵinject(DOMService), ɵɵinject(SCALE, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PositionService,
    factory: _PositionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PositionService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [SCALE]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var ResizeService = class _ResizeService {
  _dom;
  _zone;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  subscribe(callback) {
    if (!isDocumentAvailable()) {
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.subscription = fromEvent(this._dom.getWindow(), "resize").pipe(auditTime(FRAME_DURATION)).subscribe(() => callback());
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isUnsubscribed() {
    return this.subscription && this.subscription.closed;
  }
  static ɵfac = function ResizeService_Factory(t) {
    return new (t || _ResizeService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ResizeService,
    factory: _ResizeService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var THRESHOLD_DIFF = 1;
var ScrollableService = class _ScrollableService {
  _dom;
  _zone;
  element;
  subscription;
  constructor(_dom, _zone) {
    this._dom = _dom;
    this._zone = _zone;
  }
  forElement(element) {
    this.unsubscribe();
    this.element = element;
    return this;
  }
  subscribe(callback) {
    if (!callback || !isDocumentAvailable() || !this.element) {
      return;
    }
    const parents = this._dom.scrollableParents(this.element);
    this._zone.runOutsideAngular(() => {
      const observables = parents.map((p) => fromEvent(p, "scroll").pipe(auditTime(FRAME_DURATION)));
      const subscriber = (e) => {
        const target = e.target;
        const isParent = parents.filter((p) => p === target).length > 0;
        const isDocument = target === document;
        const isWindow = target === window;
        if (isParent || isDocument || isWindow) {
          callback(this.isVisible(this.element, target));
        }
      };
      this.subscription = merge(...observables).subscribe(subscriber);
    });
  }
  unsubscribe() {
    if (!this.subscription) {
      return;
    }
    this.subscription.unsubscribe();
  }
  isVisible(elem, container) {
    const elemRect = this._dom.boundingOffset(elem);
    const containerRect = this._dom.boundingOffset(this._dom.nativeElement(container));
    if (THRESHOLD_DIFF < containerRect.top - elemRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.top - containerRect.bottom) {
      return false;
    }
    if (THRESHOLD_DIFF < elemRect.left - containerRect.right) {
      return false;
    }
    if (THRESHOLD_DIFF < containerRect.left - elemRect.right) {
      return false;
    }
    return true;
  }
  static ɵfac = function ScrollableService_Factory(t) {
    return new (t || _ScrollableService)(ɵɵinject(DOMService), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ScrollableService,
    factory: _ScrollableService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollableService, [{
    type: Injectable
  }], function() {
    return [{
      type: DOMService
    }, {
      type: NgZone
    }];
  }, null);
})();
var LEFT = "left";
var RIGHT = "right";
var DOWN = "down";
var UP = "up";
var DEFAULT_TYPE = "slide";
var DEFAULT_DURATION = 100;
var animationTypes = {};
animationTypes.expand = (direction) => {
  const scale = direction === UP || direction === DOWN ? "scaleY" : "scaleX";
  const startScale = 0;
  const endScale = 1;
  let origin;
  if (direction === DOWN) {
    origin = "top";
  } else if (direction === LEFT) {
    origin = RIGHT;
  } else if (direction === RIGHT) {
    origin = LEFT;
  } else {
    origin = "bottom";
  }
  return {
    start: {
      transform: `${scale}(${startScale})`,
      transformOrigin: origin
    },
    end: {
      transform: `${scale}(${endScale})`
    }
  };
};
animationTypes.slide = (direction) => {
  const translate = direction === LEFT || direction === RIGHT ? "translateX" : "translateY";
  const start = direction === RIGHT || direction === DOWN ? -100 : 100;
  const end = 0;
  return {
    start: {
      transform: `${translate}(${start}%)`
    },
    end: {
      transform: `${translate}(${end}%)`
    }
  };
};
animationTypes.fade = () => {
  return {
    start: {
      opacity: 0
    },
    end: {
      opacity: 1
    }
  };
};
animationTypes.zoom = () => {
  const start = 0;
  const end = 1;
  return {
    start: {
      transform: `scale(${start})`
    },
    end: {
      transform: `scale(${end})`
    }
  };
};
var AnimationService = class _AnimationService {
  animationBuilder;
  start = new EventEmitter();
  end = new EventEmitter();
  flip;
  player;
  constructor(animationBuilder) {
    this.animationBuilder = animationBuilder;
  }
  play(element, options, flip2) {
    if (!this.flip || this.flip.horizontal !== flip2.horizontal || this.flip.vertical !== flip2.vertical) {
      this.flip = flip2;
      const type = options.type || DEFAULT_TYPE;
      const statesFn = animationTypes[type];
      if (statesFn) {
        const direction = this.getDirection(flip2, options);
        const states = statesFn(direction);
        this.playStates(element, states, options);
      } else if (isDevMode()) {
        throw new Error(`Unsupported animation type: "${type}". The supported types are slide, expand, fade and zoom.`);
      }
    }
  }
  ngOnDestroy() {
    this.stopPlayer();
  }
  playStates(element, states, options) {
    this.stopPlayer();
    const duration = options.duration || DEFAULT_DURATION;
    const factory = this.animationBuilder.build([style(states.start), animate(`${duration}ms ease-in`, style(states.end))]);
    const player = this.player = factory.create(element);
    player.onDone(() => {
      this.end.emit();
      this.stopPlayer();
    });
    this.start.emit();
    player.play();
  }
  getDirection(flip2, options) {
    let direction = options.direction || DOWN;
    if (flip2.horizontal) {
      if (direction === LEFT) {
        direction = RIGHT;
      } else if (direction === RIGHT) {
        direction = LEFT;
      }
    }
    if (flip2.vertical) {
      if (direction === DOWN) {
        direction = UP;
      } else if (direction === UP) {
        direction = DOWN;
      }
    }
    return direction;
  }
  stopPlayer() {
    if (this.player) {
      this.player.destroy();
      this.player = null;
    }
  }
  static ɵfac = function AnimationService_Factory(t) {
    return new (t || _AnimationService)(ɵɵinject(AnimationBuilder));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _AnimationService,
    factory: _AnimationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationService, [{
    type: Injectable
  }], function() {
    return [{
      type: AnimationBuilder
    }];
  }, null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-popup",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1749539908,
  version: "19.1.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/?utm_medium=product&utm_source=kendoangular&utm_campaign=kendo-ui-angular-purchase-license-keys-warning"
};
var DEFAULT_OFFSET = {
  left: -1e4,
  top: 0
};
var ANIMATION_CONTAINER = "k-animation-container";
var ANIMATION_CONTAINER_FIXED = "k-animation-container-fixed";
var PopupComponent = class _PopupComponent {
  container;
  _alignService;
  domService;
  _positionService;
  _resizeService;
  _scrollableService;
  animationService;
  _renderer;
  _zone;
  /**
   * Controls the Popup animation. By default, the opening and closing animations
   * are enabled ([see example]({% slug animations_popup %})).
   */
  animate = true;
  /**
   * Specifies the element that will be used as an anchor. The Popup opens next to that element.
   * ([see example]({% slug alignmentpositioning_popup %}#toc-aligning-to-components)).
   */
  anchor;
  /**
   * Specifies the anchor pivot point
   * ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
   */
  anchorAlign = {
    horizontal: "left",
    vertical: "bottom"
  };
  /**
   * Configures the collision behavior of the Popup
   * ([see example]({% slug viewportboundarydetection_popup %})).
   */
  collision = {
    horizontal: "fit",
    vertical: "flip"
  };
  /**
   * Specifies the pivot point of the Popup
   * ([see example]({% slug alignmentpositioning_popup %}#toc-positioning)).
   */
  popupAlign = {
    horizontal: "left",
    vertical: "top"
  };
  /**
   * Controls whether the component will copy the `anchor` font styles.
   */
  copyAnchorStyles = false;
  /**
   * Specifies a list of CSS classes that will be added to the internal
   * animated element ([see example]({% slug appearance_popup %})).
   *
   * > To style the content of the Popup, use this property binding.
   */
  // eslint-disable-next-line @typescript-eslint/ban-types
  popupClass;
  /**
   * Specifies the position mode of the component. By default, the Popup uses fixed positioning.
   * To make the Popup acquire absolute positioning, set this option to `absolute`.
   *
   * > If you need to support mobile browsers with the zoom option,
   * use the `absolute` positioning of the Popup.
   *
   * @example
   * ```html
   * <style>
   *  .parent-content {
   *     position: relative;
   *     width: 200px;
   *     height: 200px;
   *     overflow: auto;
   *     margin: 200px auto;
   *     border: 1px solid red;
   *  }
   *  .content {
   *     position: relative;
   *     width: 100px;
   *     height: 100px;
   *     overflow: auto;
   *     margin: 300px;
   *     border: 1px solid blue;
   *  }
   *  .anchor {
   *     position: absolute;
   *     top: 200px;
   *     left: 200px;
   *  }
   * </style>
   * ```
   * ```ts
   * _@Component({
   * selector: 'my-app',
   * template: `
   *   <div class="example-config">
   *      Position mode:
   *      <label><input type="radio" value="fixed" [(ngModel)]="mode" /> Fixed</label>
   *      <label><input type="radio" value="absolute" [(ngModel)]="mode" /> Absolute</label>
   *   </div>
   *   <div class="example-config">
   *       Append to
   *       <label>
   *           <input type="radio" name="place" [value]="1" [(ngModel)]="checked" />
   *           Root component
   *       </label>
   *       <label>
   *           <input type="radio" name="place" [value]="2" [(ngModel)]="checked" />
   *           <span [style.color]="'red'">Red Container</span>
   *       </label>
   *       <label>
   *           <input type="radio" name="place" [value]="3" [(ngModel)]="checked" />
   *           <span [style.color]="'blue'">Blue Container</span>
   *       </label>
   *   </div>
   *   <div class="example">
   *     <div class="parent-content" [scrollLeft]="250" [scrollTop]="230">
   *         <div class="content" [scrollLeft]="170" [scrollTop]="165">
   *           <button #anchor class="anchor" (click)="show = !show">Toggle</button>
   *           <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 3">
   *             <ul>
   *                 <li>Item1</li>
   *                 <li>Item2</li>
   *                 <li>Item3</li>
   *             </ul>
   *           </kendo-popup>
   *           <span [style.position]="'absolute'" [style.top.px]="400" [style.left.px]="400">Bottom/Right</span>
   *         </div>
   *         <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 2">
   *           <ul>
   *               <li>Item1</li>
   *               <li>Item2</li>
   *               <li>Item3</li>
   *           </ul>
   *         </kendo-popup>
   *         <span [style.position]="'absolute'" [style.top.px]="600" [style.left.px]="600">Bottom/Right</span>
   *     </div>
   *     <kendo-popup [positionMode]="mode" [anchor]="anchor" (anchorViewportLeave)="show=false" *ngIf="show && checked === 1">
   *       <ul>
   *           <li>Item1</li>
   *           <li>Item2</li>
   *           <li>Item3</li>
   *       </ul>
   *     </kendo-popup>
   *   </div>
   * `
   * })
   * class AppComponent {
   *   public checked: number = 3;
   *   public mode: string = 'absolute';
   *   public show: boolean = true;
   * }
   * ```
   */
  positionMode = "fixed";
  /**
   * Specifies the absolute position of the element
   * ([see example]({% slug alignmentpositioning_popup %}#toc-aligning-to-absolute-points)).
   * The Popup opens next to that point. The Popup pivot point is defined by the `popupAlign` configuration option.
   * The boundary detection is applied by using the window viewport.
   */
  offset = DEFAULT_OFFSET;
  /**
   * Specifies the margin value that will be added to the popup dimensions in pixels and leaves a blank space
   * between the popup and the anchor ([see example]({% slug alignmentpositioning_popup %}#toc-adding-a-margin)).
   */
  margin;
  /**
   * Fires when the anchor is scrolled outside the screen boundaries.
   * ([see example]({% slug closing_popup %}#toc-after-leaving-the-viewport)).
   */
  anchorViewportLeave = new EventEmitter();
  /**
   * Fires after the component is closed.
   */
  close = new EventEmitter();
  /**
   * Fires after the component is opened and the opening animation ends.
   */
  open = new EventEmitter();
  /**
   * Fires after the component is opened and the Popup is positioned.
   */
  positionChange = new EventEmitter();
  /**
   * @hidden
   */
  contentContainer;
  /**
   * @hidden
   */
  resizeSensor;
  /**
   * @hidden
   */
  content;
  /**
   * @hidden
   */
  renderDefaultClass = true;
  resolvedPromise = Promise.resolve(null);
  _currentOffset;
  animationSubscriptions;
  repositionSubscription;
  initialCheck = true;
  constructor(container, _alignService, domService, _positionService, _resizeService, _scrollableService, animationService, _renderer, _zone) {
    this.container = container;
    this._alignService = _alignService;
    this.domService = domService;
    this._positionService = _positionService;
    this._resizeService = _resizeService;
    this._scrollableService = _scrollableService;
    this.animationService = animationService;
    this._renderer = _renderer;
    this._zone = _zone;
    validatePackage(packageMetadata);
    this._renderer.addClass(container.nativeElement, ANIMATION_CONTAINER);
    this.updateFixedClass();
  }
  ngOnInit() {
    this.reposition = this.reposition.bind(this);
    this._resizeService.subscribe(this.reposition);
    this.animationSubscriptions = this.animationService.start.subscribe(this.onAnimationStart.bind(this));
    this.animationSubscriptions.add(this.animationService.end.subscribe(this.onAnimationEnd.bind(this)));
    this._scrollableService.forElement(this.domService.nativeElement(this.anchor) || this.container.nativeElement).subscribe(this.onScroll.bind(this));
    this.currentOffset = DEFAULT_OFFSET;
    this.setZIndex();
    this.copyFontStyles();
    this.updateFixedClass();
    this.reposition();
  }
  ngOnChanges(changes) {
    if (changes.copyAnchorStyles) {
      this.copyFontStyles();
    }
    if (changes.positionMode) {
      this.updateFixedClass();
    }
  }
  ngAfterViewInit() {
    if (!this.animate) {
      this.resolvedPromise.then(() => {
        this.onAnimationEnd();
      });
    }
    this.reposition();
  }
  ngAfterViewChecked() {
    if (this.initialCheck) {
      this.initialCheck = false;
      return;
    }
    this._zone.runOutsideAngular(() => {
      this.unsubscribeReposition();
      this.repositionSubscription = from(this.resolvedPromise).subscribe(this.reposition);
    });
  }
  ngOnDestroy() {
    this.anchorViewportLeave.complete();
    this.positionChange.complete();
    this.close.emit();
    this.close.complete();
    this._resizeService.unsubscribe();
    this._scrollableService.unsubscribe();
    this.animationSubscriptions.unsubscribe();
    this.unsubscribeReposition();
  }
  /**
   * @hidden
   */
  onResize() {
    this.reposition();
  }
  onAnimationStart() {
    this._renderer.removeClass(this.container.nativeElement, "k-animation-container-shown");
  }
  onAnimationEnd() {
    this._renderer.addClass(this.container.nativeElement, "k-animation-container-shown");
    this.open.emit();
    this.open.complete();
  }
  get currentOffset() {
    return this._currentOffset;
  }
  set currentOffset(offset2) {
    this.setContainerStyle("left", `${offset2.left}px`);
    this.setContainerStyle("top", `${offset2.top}px`);
    this._currentOffset = offset2;
  }
  setZIndex() {
    if (this.anchor) {
      this.setContainerStyle("z-index", String(this.domService.zIndex(this.domService.nativeElement(this.anchor), this.container)));
    }
  }
  reposition() {
    if (!isDocumentAvailable()) {
      return;
    }
    const {
      flip: flip2,
      offset: offset2
    } = this.position();
    if (!this.currentOffset || isDifferentOffset(this.currentOffset, offset2)) {
      this.currentOffset = offset2;
      if (hasObservers(this.positionChange)) {
        this._zone.run(() => this.positionChange.emit({
          offset: offset2,
          flip: flip2
        }));
      }
    }
    if (this.animate) {
      this.animationService.play(this.contentContainer.nativeElement, this.animate, flip2);
    }
    this.resizeSensor.acceptSize();
  }
  position() {
    const alignedOffset = this._alignService.alignElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin,
      offset: this.offset,
      positionMode: this.positionMode
    });
    return this._positionService.positionElement({
      anchor: this.domService.nativeElement(this.anchor),
      anchorAlign: this.anchorAlign,
      collisions: this.collision,
      currentLocation: alignedOffset,
      element: this.container,
      elementAlign: this.popupAlign,
      margin: this.margin
    });
  }
  onScroll(isInViewPort) {
    const hasLeaveObservers = hasObservers(this.anchorViewportLeave);
    if (isInViewPort || !hasLeaveObservers) {
      this.reposition();
    } else if (hasLeaveObservers) {
      this._zone.run(() => {
        this.anchorViewportLeave.emit();
      });
    }
  }
  copyFontStyles() {
    if (!this.anchor || !this.copyAnchorStyles) {
      return;
    }
    this.domService.getFontStyles(this.domService.nativeElement(this.anchor)).forEach((s) => this.setContainerStyle(s.key, s.value));
  }
  updateFixedClass() {
    const action = this.positionMode === "fixed" ? "addClass" : "removeClass";
    this._renderer[action](this.container.nativeElement, ANIMATION_CONTAINER_FIXED);
  }
  setContainerStyle(name, value) {
    this._renderer.setStyle(this.container.nativeElement, name, value);
  }
  unsubscribeReposition() {
    if (this.repositionSubscription) {
      this.repositionSubscription.unsubscribe();
    }
  }
  static ɵfac = function PopupComponent_Factory(t) {
    return new (t || _PopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(AlignService), ɵɵdirectiveInject(DOMService), ɵɵdirectiveInject(PositionService), ɵɵdirectiveInject(ResizeService), ɵɵdirectiveInject(ScrollableService), ɵɵdirectiveInject(AnimationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PopupComponent,
    selectors: [["kendo-popup"]],
    viewQuery: function PopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
        ɵɵviewQuery(ResizeSensorComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
      }
    },
    inputs: {
      animate: "animate",
      anchor: "anchor",
      anchorAlign: "anchorAlign",
      collision: "collision",
      popupAlign: "popupAlign",
      copyAnchorStyles: "copyAnchorStyles",
      popupClass: "popupClass",
      positionMode: "positionMode",
      offset: "offset",
      margin: "margin"
    },
    outputs: {
      anchorViewportLeave: "anchorViewportLeave",
      close: "close",
      open: "open",
      positionChange: "positionChange"
    },
    exportAs: ["kendo-popup"],
    standalone: true,
    features: [ɵɵProvidersFeature([AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c1,
    decls: 6,
    vars: 6,
    consts: [["container", ""], [1, "k-child-animation-container"], [3, "ngClass"], [3, "ngTemplateOutlet", "ngIf"], [3, "resize", "rateLimit"]],
    template: function PopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 1)(1, "div", 2, 0);
        ɵɵprojection(3);
        ɵɵtemplate(4, PopupComponent_ng_template_4_Template, 0, 0, "ng-template", 3);
        ɵɵelementStart(5, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function PopupComponent_Template_kendo_resize_sensor_resize_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵclassProp("k-popup", ctx.renderDefaultClass);
        ɵɵproperty("ngClass", ctx.popupClass);
        ɵɵadvance(3);
        ɵɵproperty("ngTemplateOutlet", ctx.content)("ngIf", ctx.content);
        ɵɵadvance();
        ɵɵproperty("rateLimit", 100);
      }
    },
    dependencies: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendo-popup",
      providers: [AlignService, AnimationService, DOMService, PositionService, ResizeService, ScrollableService],
      selector: "kendo-popup",
      template: `
        <div class="k-child-animation-container">
            <div [class.k-popup]="renderDefaultClass" [ngClass]="popupClass" #container>
                <ng-content></ng-content>
                <ng-template [ngTemplateOutlet]="content" [ngIf]="content"></ng-template>
                <kendo-resize-sensor [rateLimit]="100" (resize)="onResize()">
                </kendo-resize-sensor>
            </div>
        </div>
     `,
      standalone: true,
      imports: [NgClass, NgTemplateOutlet, NgIf, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: AlignService
    }, {
      type: DOMService
    }, {
      type: PositionService
    }, {
      type: ResizeService
    }, {
      type: ScrollableService
    }, {
      type: AnimationService
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    animate: [{
      type: Input
    }],
    anchor: [{
      type: Input
    }],
    anchorAlign: [{
      type: Input
    }],
    collision: [{
      type: Input
    }],
    popupAlign: [{
      type: Input
    }],
    copyAnchorStyles: [{
      type: Input
    }],
    popupClass: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    anchorViewportLeave: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    positionChange: [{
      type: Output
    }],
    contentContainer: [{
      type: ViewChild,
      args: ["container", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }]
  });
})();
var removeElement = (element) => {
  if (element && element.parentNode) {
    element.parentNode.removeChild(element);
  }
};
var POPUP_CONTAINER = new InjectionToken("Popup Container");
var PopupService = class _PopupService {
  applicationRef;
  componentFactoryResolver;
  injector;
  container;
  /**
   * Gets the root view container into which the component will be injected.
   *
   * @returns {ComponentRef<any>}
   */
  get rootViewContainer() {
    const rootComponents = this.applicationRef.components || [];
    if (rootComponents[0]) {
      return rootComponents[0];
    }
    throw new Error(`
            View Container not found! Inject the POPUP_CONTAINER or define a specific ViewContainerRef via the appendTo option.
            See https://www.telerik.com/kendo-angular-ui/components/popup/api/POPUP_CONTAINER/ for more details.
        `);
  }
  /**
   * Sets or gets the HTML element of the root component container.
   *
   * @returns {HTMLElement}
   */
  get rootViewContainerNode() {
    return this.container ? this.container.nativeElement : this.getComponentRootNode(this.rootViewContainer);
  }
  constructor(applicationRef, componentFactoryResolver, injector, container) {
    this.applicationRef = applicationRef;
    this.componentFactoryResolver = componentFactoryResolver;
    this.injector = injector;
    this.container = container;
  }
  /**
   * Opens a Popup component. Created Popups are mounted
   * in the DOM directly in the root application component.
   *
   * @param {PopupSettings} options - The options which define the Popup.
   * @returns {ComponentRef<PopupComponent>} - A reference to the Popup object.
   *
   * @example
   *
   * ```ts-no-run
   * _@Component({
   *   selector: 'my-app',
   *   template: `
   *     <ng-template #template>
   *      Popup content
   *     </ng-template>
   *     <button #anchor kendoButton (click)="open(anchor, template)">Open</button>
   *   `
   * })
   * export class AppComponent {
   *     public popupRef: PopupRef;
   *
   *     constructor( private popupService: PopupService ) {}
   *
   *     public open(anchor: ElementRef, template: TemplateRef<any>): void {
   *         if (this.popupRef) {
   *              this.popupRef.close();
   *              this.popupRef = null;
   *              return;
   *         }
   *
   *         this.popupRef = this.popupService.open({
   *           anchor: anchor,
   *           content: template
   *         });
   *     }
   * }
   * ```
   */
  open(options = {}) {
    const {
      component,
      nodes
    } = this.contentFrom(options.content);
    const popupComponentRef = this.appendPopup(nodes, options.appendTo);
    const popupInstance = popupComponentRef.instance;
    this.projectComponentInputs(popupComponentRef, options);
    popupComponentRef.changeDetectorRef.detectChanges();
    if (component) {
      component.changeDetectorRef.detectChanges();
    }
    const popupElement = this.getComponentRootNode(popupComponentRef);
    return {
      close: () => {
        if (component) {
          component.destroy();
        }
        popupComponentRef.destroy();
        try {
          removeElement(popupElement);
        } catch {
        }
      },
      content: component,
      popup: popupComponentRef,
      popupAnchorViewportLeave: popupInstance.anchorViewportLeave,
      popupClose: popupInstance.close,
      popupElement,
      popupOpen: popupInstance.open,
      popupPositionChange: popupInstance.positionChange
    };
  }
  appendPopup(nodes, container) {
    const popupComponentRef = this.createComponent(PopupComponent, nodes, container);
    if (!container) {
      this.rootViewContainerNode.appendChild(this.getComponentRootNode(popupComponentRef));
    }
    return popupComponentRef;
  }
  /**
   * Gets the HTML element for a component reference.
   *
   * @param {ComponentRef<any>} componentRef
   * @returns {HTMLElement}
   */
  getComponentRootNode(componentRef) {
    return componentRef.location.nativeElement;
  }
  /**
   * Gets the `ComponentFactory` instance by its type.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  getComponentFactory(componentClass) {
    return this.componentFactoryResolver.resolveComponentFactory(componentClass);
  }
  /**
   * Creates a component reference from a `Component` type class.
   *
   * @param {*} componentClass
   * @param {*} nodes
   * @returns {ComponentRef<any>}
   */
  createComponent(componentClass, nodes, container) {
    const factory = this.getComponentFactory(componentClass);
    if (container) {
      return container.createComponent(factory, void 0, this.injector, nodes);
    } else {
      const component = factory.create(this.injector, nodes);
      this.applicationRef.attachView(component.hostView);
      return component;
    }
  }
  /**
   * Projects the inputs on the component.
   *
   * @param {ComponentRef<any>} component
   * @param {*} options
   * @returns {ComponentRef<any>}
   */
  projectComponentInputs(component, options) {
    Object.getOwnPropertyNames(options).filter((prop) => prop !== "content" || options.content instanceof TemplateRef).map((prop) => {
      component.instance[prop] = options[prop];
    });
    return component;
  }
  /**
   * Gets the component and the nodes to append from the `content` option.
   *
   * @param {*} content
   * @returns {any}
   */
  contentFrom(content) {
    if (!content || content instanceof TemplateRef) {
      return {
        component: null,
        nodes: [[]]
      };
    }
    const component = this.createComponent(content);
    const nodes = component ? [component.location.nativeElement] : [];
    return {
      component,
      nodes: [
        nodes
        // <ng-content>
      ]
    };
  }
  static ɵfac = function PopupService_Factory(t) {
    return new (t || _PopupService)(ɵɵinject(ApplicationRef), ɵɵinject(ComponentFactoryResolver$1), ɵɵinject(Injector), ɵɵinject(POPUP_CONTAINER, 8));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PopupService,
    factory: _PopupService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: ApplicationRef
    }, {
      type: ComponentFactoryResolver$1
    }, {
      type: Injector
    }, {
      type: ElementRef,
      decorators: [{
        type: Inject,
        args: [POPUP_CONTAINER]
      }, {
        type: Optional
      }]
    }];
  }, null);
})();
var KENDO_POPUP = [PopupComponent];
var PopupModule = class _PopupModule {
  static ɵfac = function PopupModule_Factory(t) {
    return new (t || _PopupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PopupModule,
    imports: [ResizeSensorComponent, PopupComponent],
    exports: [PopupComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [PopupService, ResizeBatchService],
    imports: [KENDO_RESIZESENSOR, KENDO_POPUP]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_POPUP],
      imports: [...KENDO_RESIZESENSOR, ...KENDO_POPUP],
      providers: [PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

// node_modules/@progress/kendo-angular-buttons/fesm2022/progress-kendo-angular-buttons.mjs
var _c02 = ["kendoButton", ""];
var _c12 = ["*"];
function ButtonComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ButtonComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 6);
    ɵɵelement(1, "img", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("src", ctx_r0.imageUrl, ɵɵsanitizeUrl);
  }
}
function ButtonComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.iconClass);
  }
}
function ButtonComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.arrowIcon.iconClass);
  }
}
function ButtonComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵelement(1, "kendo-icon-wrapper", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.arrowIcon.icon || "caret-alt-down")("svgIcon", ctx_r0.arrowIcon.svgIcon || ctx_r0.caretAltDownIcon);
  }
}
var _c2 = [[["", "kendoButton", ""]]];
var _c3 = ["[kendoButton]"];
function ChipComponent_kendo_icon_wrapper_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.icon)("svgIcon", ctx_r0.svgIcon);
  }
}
function ChipComponent_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 8);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("customFontClass", ctx_r0.customIconClass);
  }
}
function ChipComponent_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 10);
    ɵɵelement(2, "img", 11);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance(2);
    ɵɵpropertyInterpolate("src", ctx_r0.avatarSettings.imageSrc, ɵɵsanitizeUrl);
    ɵɵproperty("ngStyle", ctx_r0.avatarSettings.imageCssStyle);
    ɵɵattribute("alt", ctx_r0.avatarSettings.imageAltText);
  }
}
function ChipComponent_span_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span", 12);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.avatarSettings.initialsCssStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.avatarSettings.initials.substring(0, 2));
  }
}
function ChipComponent_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtemplate(1, ChipComponent_span_2_ng_container_1_Template, 3, 3, "ng-container", 5)(2, ChipComponent_span_2_ng_container_2_Template, 3, 2, "ng-container", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.avatarSettings.cssStyle);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.avatarSettings == null ? null : ctx_r0.avatarSettings.imageSrc);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.avatarSettings == null ? null : ctx_r0.avatarSettings.initials);
  }
}
function ChipComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 13);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.label, " ");
  }
}
function ChipComponent_ng_content_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!label"]);
  }
}
function ChipComponent_span_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 17);
    ɵɵlistener("click", function ChipComponent_span_6_span_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onMenuClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.defaultMenuIcon || ctx_r0.menuSvgIcon)("customFontClass", ctx_r0.menuIcon);
  }
}
function ChipComponent_span_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("click", function ChipComponent_span_6_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.onRemoveClick($event));
    });
    ɵɵelement(1, "kendo-icon-wrapper", 20);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("svgIcon", ctx_r0.removeSvgIcon || ctx_r0.defaultRemoveIcon)("customFontClass", ctx_r0.removeIcon);
  }
}
function ChipComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, ChipComponent_span_6_span_1_Template, 2, 2, "span", 15)(2, ChipComponent_span_6_span_2_Template, 2, 2, "span", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.hasMenu);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.removable);
  }
}
var _c4 = (a0, a1) => ({
  templateRef: a0,
  $implicit: a1
});
function ListComponent_li_1_ng_template_1_ng_template_1_Template(rf, ctx) {
}
function ListComponent_li_1_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_ng_template_1_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r4.disabled);
    ɵɵproperty("ngClass", dataItem_r4.cssClass);
    ɵɵadvance();
    ɵɵproperty("templateContext", ɵɵpureFunction2(4, _c4, ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef, dataItem_r4));
  }
}
function ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 9);
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("name", dataItem_r4.icon)("svgIcon", dataItem_r4.svgIcon)("customFontClass", dataItem_r4.iconClass);
  }
}
function ListComponent_li_1_ng_template_2_img_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 10);
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("src", dataItem_r4.imageUrl, ɵɵsanitizeUrl)("alt", dataItem_r4.imageAlt);
  }
}
function ListComponent_li_1_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 11);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext(2).$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getText(dataItem_r4), " ");
  }
}
function ListComponent_li_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtemplate(1, ListComponent_li_1_ng_template_2_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 6)(2, ListComponent_li_1_ng_template_2_img_2_Template, 1, 2, "img", 7)(3, ListComponent_li_1_ng_template_2_span_3_Template, 2, 1, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ɵɵnextContext().$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("k-disabled", dataItem_r4.disabled);
    ɵɵproperty("ngClass", dataItem_r4.cssClass);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r4.icon || dataItem_r4.iconClass || dataItem_r4.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", dataItem_r4.imageUrl);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.getText(dataItem_r4));
  }
}
function ListComponent_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 2);
    ɵɵlistener("click", function ListComponent_li_1_Template_li_click_0_listener($event) {
      const index_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      $event.stopImmediatePropagation();
      return ɵɵresetView(ctx_r2.onClick(index_r2));
    })("blur", function ListComponent_li_1_Template_li_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onBlur());
    });
    ɵɵtemplate(1, ListComponent_li_1_ng_template_1_Template, 2, 7, "ng-template", 3)(2, ListComponent_li_1_ng_template_2_Template, 4, 6, "ng-template", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const dataItem_r4 = ctx.$implicit;
    const index_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("index", index_r2);
    ɵɵattribute("aria-disabled", dataItem_r4.disabled ? true : false);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef);
    ɵɵadvance();
    ɵɵproperty("ngIf", !(ctx_r2.itemTemplate == null ? null : ctx_r2.itemTemplate.templateRef));
  }
}
var _c5 = ["button"];
var _c6 = ["buttonList"];
var _c7 = ["popupTemplate"];
var _c8 = ["container"];
function DropDownButtonComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 5, 3);
    ɵɵlistener("onItemClick", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick($event));
    })("keydown", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyDownHandler($event));
    })("keyup", function DropDownButtonComponent_ng_template_3_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r2.listId)("data", ctx_r2.data)("textField", ctx_r2.textField)("itemTemplate", ctx_r2.itemTemplate)("size", ctx_r2.size);
    ɵɵattribute("dir", ctx_r2.dir)("aria-labelledby", ctx_r2.buttonId);
  }
}
var _c9 = ["kendoDialItem", ""];
var _c10 = (a0, a1, a2) => ({
  $implicit: a0,
  index: a1,
  isFocused: a2
});
function DialItemComponent_0_ng_template_0_Template(rf, ctx) {
}
function DialItemComponent_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, DialItemComponent_0_ng_template_0_Template, 0, 0, "ng-template", 1);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.dialItemTemplate)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c10, ctx_r0.item, ctx_r0.index, ctx_r0.isFocused));
  }
}
function DialItemComponent_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.item.label);
  }
}
function DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r0.item.icon)("customFontClass", ctx_r0.item.iconClass)("svgIcon", ctx_r0.item.svgIcon);
  }
}
function DialItemComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, DialItemComponent_ng_container_1_span_1_Template, 2, 1, "span", 2)(2, DialItemComponent_ng_container_1_kendo_icon_wrapper_2_Template, 1, 3, "kendo-icon-wrapper", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.label);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.item.icon || ctx_r0.item.iconClass || ctx_r0.item.svgIcon);
  }
}
var _c11 = ["kendoDialList", ""];
function DialListComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "li", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("item", ctx_r2.dialItems[idx_r2])("index", idx_r2)("dialItemTemplate", ctx_r2.dialItemTemplate)("isFocused", ctx_r2.isFocused(idx_r2))("ngClass", item_r1.cssClass)("ngStyle", item_r1.cssStyle)("align", ctx_r2.align);
  }
}
var _c122 = (a0, a1, a2) => ({
  keydown: a0,
  click: a1,
  pointerdown: a2
});
var _c13 = (a0, a1) => ({
  keydown: a0,
  focusout: a1
});
function FloatingActionButtonComponent_2_ng_template_0_Template(rf, ctx) {
}
function FloatingActionButtonComponent_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FloatingActionButtonComponent_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fabTemplate == null ? null : ctx_r1.fabTemplate.templateRef);
  }
}
function FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-icon-wrapper", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("name", ctx_r1.icon)("customFontClass", ctx_r1.iconClass)("svgIcon", ctx_r1.svgIcon);
  }
}
function FloatingActionButtonComponent_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 8);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r1.text);
  }
}
function FloatingActionButtonComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FloatingActionButtonComponent_ng_container_3_kendo_icon_wrapper_1_Template, 1, 3, "kendo-icon-wrapper", 5)(2, FloatingActionButtonComponent_ng_container_3_span_2_Template, 2, 1, "span", 6);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.icon || ctx_r1.iconClass || ctx_r1.svgIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.text);
  }
}
function FloatingActionButtonComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 9);
    ɵɵlistener("click", function FloatingActionButtonComponent_ng_template_4_Template_ul_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.dialListId)("ngClass", ctx_r1.dialClass)("dialItems", ctx_r1.dialItems)("dialItemTemplate", ctx_r1.dialItemTemplate == null ? null : ctx_r1.dialItemTemplate.templateRef)("align", ctx_r1.align)("kendoEventsOutsideAngular", ɵɵpureFunction2(7, _c13, ctx_r1.keyDownHandler.bind(ctx_r1), ctx_r1.focusOutHandler.bind(ctx_r1)));
    ɵɵattribute("aria-labelledby", ctx_r1.id);
  }
}
function SplitButtonComponent_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.text, " ");
  }
}
function SplitButtonComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-button-list", 10);
    ɵɵlistener("onItemClick", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_onItemClick_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onItemClick($event));
    })("keydown", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keydown_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyDownHandler($event));
    })("keyup", function SplitButtonComponent_ng_template_8_Template_kendo_button_list_keyup_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.keyUpHandler($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r1.listId)("data", ctx_r1.data)("textField", ctx_r1.textField)("itemTemplate", ctx_r1.itemTemplate)("size", ctx_r1.size);
    ɵɵattribute("dir", ctx_r1.dir);
  }
}
var KendoButtonService = class _KendoButtonService {
  buttonClicked = new Subject();
  buttonClicked$ = this.buttonClicked.asObservable();
  click(button) {
    this.buttonClicked.next(button);
  }
  static ɵfac = function KendoButtonService_Factory(t) {
    return new (t || _KendoButtonService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _KendoButtonService,
    factory: _KendoButtonService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KendoButtonService, [{
    type: Injectable
  }], null, null);
})();
var packageMetadata2 = {
  name: "@progress/kendo-angular-buttons",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1749539933,
  version: "19.1.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var resolvedPromise = Promise.resolve(null);
var isPresent2 = (value) => value !== null && value !== void 0;
function isDocumentNode(container) {
  return container.nodeType === 9;
}
function closest(element, selector) {
  if (element.closest) {
    return element.closest(selector);
  }
  const matches = Element.prototype.matches ? (el, sel) => el.matches(sel) : (el, sel) => el.msMatchesSelector(sel);
  let node = element;
  while (node && !isDocumentNode(node)) {
    if (matches(node, selector)) {
      return node;
    }
    node = node.parentNode;
  }
}
var replaceMessagePlaceholder = (message, name, value) => message.replace(new RegExp(`{\\s*${name}\\s*}`, "g"), value);
var SIZES = {
  small: "sm",
  medium: "md",
  large: "lg"
};
var ROUNDNESS = {
  small: "sm",
  medium: "md",
  large: "lg",
  full: "full"
};
var getStylingClasses = (componentType, stylingOption, previousValue, newValue) => {
  switch (stylingOption) {
    case "size":
      return {
        toRemove: `k-${componentType}-${SIZES[previousValue]}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${SIZES[newValue]}` : ""
      };
    case "rounded":
      return {
        toRemove: `k-rounded-${ROUNDNESS[previousValue]}`,
        toAdd: newValue !== "none" ? `k-rounded-${ROUNDNESS[newValue]}` : ""
      };
    case "fillMode":
      return {
        toRemove: `k-${componentType}-${previousValue}`,
        toAdd: newValue !== "none" ? `k-${componentType}-${newValue}` : ""
      };
    default:
      break;
  }
};
var getThemeColorClasses = (componentType, prevFillMode, fillMode, previousValue, newValue) => {
  return {
    toRemove: `k-${componentType}-${prevFillMode}-${previousValue}`,
    toAdd: newValue !== "none" ? `k-${componentType}-${fillMode}-${newValue}` : ""
  };
};
var isObjectEmpty = (obj) => obj && Object.keys(obj).length === 0 && obj.constructor === Object;
var DEFAULT_ROUNDED$3 = "medium";
var DEFAULT_SIZE$2 = "medium";
var DEFAULT_THEME_COLOR$2 = "base";
var DEFAULT_FILL_MODE$3 = "solid";
var ButtonComponent = class _ButtonComponent {
  renderer;
  service;
  ngZone;
  /**
   * @hidden
   * @default false
   * required for DropDownButton arrow icon.
   */
  arrowIcon = false;
  /**
   * Adds visual styling to indicate when the Button is active.
   *
   * @default false
   */
  toggleable = false;
  /**
   * Backwards-compatible alias
   *
   * @hidden
   */
  get togglable() {
    return this.toggleable;
  }
  /**
   * @hidden
   */
  set togglable(value) {
    this.toggleable = value;
  }
  /**
   * Sets the selected state of the Button.
   * Use with the `toggleable` property.
   *
   * @default false
   */
  get selected() {
    return this._selected || false;
  }
  set selected(value) {
    this._selected = value;
  }
  /**
   * @hidden
   */
  set tabIndex(index) {
    this.element.tabIndex = index;
  }
  get tabIndex() {
    return this.element.tabIndex;
  }
  /**
   * Specifies a URL for an `img` element inside the Button.
   * The URL can be relative or absolute. If relative, it is evaluated with relation to the web page URL.
   */
  imageUrl;
  /**
   * Defines a CSS class, or multiple classes separated by spaces applied to a `span` element inside the Button. Use the `iconClass` to add custom icons.
   */
  set iconClass(value) {
    if (isDevMode() && value && (this.icon || this.svgIcon)) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._iconClass = value;
  }
  get iconClass() {
    return this._iconClass;
  }
  /**
   * Sets the name of an existing font icon in the Kendo UI theme.
   */
  set icon(name) {
    if (isDevMode() && name && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._icon = name;
  }
  get icon() {
    return this._icon;
  }
  /**
   * When `true`, disables the Button and prevents user interaction.
   *
   * @default false
   */
  set disabled(disabled) {
    if (disabled && isDocumentAvailable() && isFirefox(navigator.userAgent)) {
      this.blur();
    }
    this.isDisabled = disabled;
    this.renderer.setProperty(this.element, "disabled", disabled);
  }
  get disabled() {
    return this.isDisabled;
  }
  /**
   * Sets the padding of the Button.
   * See [Button Appearance]({% slug appearance_button %}#size).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$2;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the Button.
   * See [Button Appearance](slug:appearance_button#roundness).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$3;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the Button.
   * See [Button Appearance](slug:appearance_button#fill-mode).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$3;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets a predefined theme color for the Button.
   * The theme color applies as a background and border color and adjusts the text color.
   * See [Button Appearance](slug:appearance_button#theme-colors).
   *
   * @default 'base'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$2;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Sets an SVG icon to display inside the Button.
   */
  set svgIcon(icon) {
    if (isDevMode() && icon && this.iconClass) {
      throw new Error("Setting both icon/svgIcon and iconClass options at the same time is not supported.");
    }
    this._svgIcon = icon;
  }
  get svgIcon() {
    return this._svgIcon;
  }
  /**
   * Fires when the selected state of a toggleable button changes.
   * The event argument is the new selected state (`boolean`).
   */
  selectedChange = new EventEmitter();
  /**
   * Fires when the user clicks the Button.
   */
  click = new EventEmitter();
  element;
  isDisabled = false;
  caretAltDownIcon = caretAltDownIcon;
  _size = DEFAULT_SIZE$2;
  _rounded = DEFAULT_ROUNDED$3;
  _fillMode = DEFAULT_FILL_MODE$3;
  _themeColor = DEFAULT_THEME_COLOR$2;
  _focused = false;
  direction;
  _selected;
  subs = new Subscription();
  _iconClass;
  _icon;
  _svgIcon;
  set isFocused(isFocused) {
    this.toggleClass("k-focus", isFocused);
    this._focused = isFocused;
  }
  get isFocused() {
    return this._focused;
  }
  get classButton() {
    return true;
  }
  get isToggleable() {
    return this.toggleable;
  }
  get iconButtonClass() {
    const hasIcon = this.icon || this.iconClass || this.imageUrl || this.svgIcon;
    return hasIcon && !this.hasText;
  }
  get classDisabled() {
    return this.isDisabled;
  }
  get classActive() {
    return this.selected;
  }
  get getDirection() {
    return this.direction;
  }
  /**
   * @hidden
   */
  onFocus() {
    this.isFocused = true;
  }
  /**
   * @hidden
   */
  onBlur() {
    this.isFocused = false;
  }
  /**
   * @hidden
   */
  set primary(value) {
    this.themeColor = value ? "primary" : "base";
  }
  /**
   * @hidden
   */
  set look(value) {
    switch (value) {
      case "default":
        this.fillMode = "solid";
        break;
      default:
        this.fillMode = value;
        break;
    }
  }
  /**
   * Alias for ElementRef.nativeElement to workaround
   * ViewChild() selectors that used to return the host element before v11.
   *
   * @hidden
   */
  get nativeElement() {
    return this.element;
  }
  constructor(element, renderer, service, localization, ngZone) {
    this.renderer = renderer;
    this.service = service;
    this.ngZone = ngZone;
    validatePackage(packageMetadata2);
    this.direction = localization.rtl ? "rtl" : "ltr";
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.element = element.nativeElement;
  }
  ngOnInit() {
    if (!this.element.hasAttribute("role") && this.togglable) {
      this.toggleAriaPressed(this.toggleable);
    }
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(this.element, "click", this._onButtonClick.bind(this)));
      this.subs.add(this.renderer.listen(this.element, "mousedown", (event) => {
        const isBrowserSafari = isDocumentAvailable() && isSafari(navigator.userAgent);
        if (!this.isDisabled && isBrowserSafari) {
          event.preventDefault();
          this.element.focus();
        }
      }));
    });
  }
  ngOnChanges(change) {
    if (isChanged("togglable", change) || isChanged("toggleable", change)) {
      this.toggleAriaPressed(this.toggleable);
    }
  }
  ngAfterViewInit() {
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  /**
   * @hidden
   */
  get hasText() {
    return isDocumentAvailable() && this.element.textContent.trim().length > 0;
  }
  /**
   * Focuses the Button component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.focus();
      this.isFocused = true;
    }
  }
  /**
   * Removes focus from the Button component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.blur();
      this.isFocused = false;
    }
  }
  /**
   * @hidden
   */
  setAttribute(attribute, value) {
    this.renderer.setAttribute(this.element, attribute, value);
  }
  /**
   * @hidden
   */
  removeAttribute(attribute) {
    this.renderer.removeAttribute(this.element, attribute);
  }
  /**
   * @hidden
   *
   * Internal setter that triggers selectedChange
   */
  setSelected(value) {
    const changed = this.selected !== value;
    this.selected = value;
    this.setAttribute("aria-pressed", this.selected.toString());
    this.toggleClass("k-selected", this.selected);
    if (changed && hasObservers(this.selectedChange)) {
      this.ngZone.run(() => {
        this.selectedChange.emit(value);
      });
    }
  }
  toggleAriaPressed(shouldSet) {
    if (!isDocumentAvailable()) {
      return;
    }
    if (shouldSet) {
      this.setAttribute("aria-pressed", this.selected.toString());
    } else {
      this.removeAttribute("aria-pressed");
    }
  }
  toggleClass(className, add) {
    if (add) {
      this.renderer.addClass(this.element, className);
    } else {
      this.renderer.removeClass(this.element, className);
    }
  }
  _onButtonClick() {
    if (!this.disabled && this.service) {
      this.ngZone.run(() => {
        this.service.click(this);
      });
    }
    if (this.togglable && !this.service) {
      this.setSelected(!this.selected);
    }
  }
  handleClasses(value, input) {
    const elem = this.element;
    const classes = getStylingClasses("button", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("button", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
  static ɵfac = function ButtonComponent_Factory(t) {
    return new (t || _ButtonComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(KendoButtonService, 8), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ButtonComponent,
    selectors: [["button", "kendoButton", ""]],
    hostVars: 11,
    hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("focus", function ButtonComponent_focus_HostBindingHandler() {
          return ctx.onFocus();
        })("blur", function ButtonComponent_blur_HostBindingHandler() {
          return ctx.onBlur();
        });
      }
      if (rf & 2) {
        ɵɵattribute("dir", ctx.getDirection);
        ɵɵclassProp("k-button", ctx.classButton)("k-toggle-button", ctx.isToggleable)("k-icon-button", ctx.iconButtonClass)("k-disabled", ctx.classDisabled)("k-selected", ctx.classActive);
      }
    },
    inputs: {
      arrowIcon: "arrowIcon",
      toggleable: "toggleable",
      togglable: "togglable",
      selected: "selected",
      tabIndex: "tabIndex",
      imageUrl: "imageUrl",
      iconClass: "iconClass",
      icon: "icon",
      disabled: "disabled",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      svgIcon: "svgIcon",
      primary: "primary",
      look: "look"
    },
    outputs: {
      selectedChange: "selectedChange",
      click: "click"
    },
    exportAs: ["kendoButton"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.button"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    attrs: _c02,
    ngContentSelectors: _c12,
    decls: 7,
    vars: 5,
    consts: [["innerCssClass", "k-button-icon", 3, "name", "svgIcon", 4, "ngIf"], ["class", "k-button-icon k-icon", 4, "ngIf"], ["class", "k-button-icon", 3, "ngClass", 4, "ngIf"], [1, "k-button-text"], ["class", "k-button-arrow", 4, "ngIf"], ["innerCssClass", "k-button-icon", 3, "name", "svgIcon"], [1, "k-button-icon", "k-icon"], ["role", "presentation", 1, "k-image", 3, "src"], [1, "k-button-icon", 3, "ngClass"], [1, "k-button-arrow"], [3, "name", "svgIcon"]],
    template: function ButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, ButtonComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ButtonComponent_span_1_Template, 2, 1, "span", 1)(2, ButtonComponent_span_2_Template, 1, 1, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵprojection(4);
        ɵɵelementEnd();
        ɵɵtemplate(5, ButtonComponent_span_5_Template, 1, 1, "span", 2)(6, ButtonComponent_span_6_Template, 2, 2, "span", 4);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.imageUrl);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.iconClass);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.arrowIcon.iconClass);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.arrowIcon && !ctx.arrowIcon.iconClass);
      }
    },
    dependencies: [NgIf, IconWrapperComponent, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButton",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.button"
      }],
      selector: "button[kendoButton]",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            innerCssClass="k-button-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>
        <span *ngIf="imageUrl" class="k-button-icon k-icon">
            <img [src]="imageUrl" class="k-image" role="presentation" />
        </span>
        <span *ngIf="iconClass" class="k-button-icon" [ngClass]="iconClass"></span>
        <span class="k-button-text"><ng-content></ng-content></span>
        <span *ngIf="$any(arrowIcon).iconClass" class="k-button-icon" [ngClass]="$any(arrowIcon).iconClass"></span>
        <span *ngIf="arrowIcon && !$any(arrowIcon).iconClass" class="k-button-arrow">
            <kendo-icon-wrapper
                [name]="$any(arrowIcon).icon || 'caret-alt-down'"
                [svgIcon]="$any(arrowIcon).svgIcon || caretAltDownIcon"></kendo-icon-wrapper>
        </span>

    `,
      standalone: true,
      imports: [NgIf, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: KendoButtonService,
      decorators: [{
        type: Optional
      }]
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    toggleable: [{
      type: Input
    }],
    togglable: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    click: [{
      type: Output
    }],
    classButton: [{
      type: HostBinding,
      args: ["class.k-button"]
    }],
    isToggleable: [{
      type: HostBinding,
      args: ["class.k-toggle-button"]
    }],
    iconButtonClass: [{
      type: HostBinding,
      args: ["class.k-icon-button"]
    }],
    classDisabled: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    classActive: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    getDirection: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    onFocus: [{
      type: HostListener,
      args: ["focus"]
    }],
    onBlur: [{
      type: HostListener,
      args: ["blur"]
    }],
    primary: [{
      type: Input
    }],
    look: [{
      type: Input
    }]
  });
})();
var PreventableEvent = class {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * If the event is prevented by any of its subscribers, returns `true`.
   *
   * @returns `true` if the default action was prevented. Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
};
var tabindex = "tabindex";
var ButtonGroupComponent = class _ButtonGroupComponent {
  service;
  renderer;
  element;
  /**
   * To disable a specific button, set **only** its `disabled` property to `true`.
   * If you also set the ButtonGroup `disabled` property, it takes precedence over
   * the `disabled` properties of the underlying buttons and they are ignored.
   */
  disabled;
  /**
   * Sets the selection mode of the ButtonGroup.
   *
   * @default 'multiple'
   */
  selection = "multiple";
  /**
   * Sets the width of the ButtonGroup.
   * When set, the buttons resize automatically to fill the full width of the group wrapper and acquire the same width.
   */
  width;
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  set tabIndex(value) {
    this._tabIndex = value;
    this.currentTabIndex = value;
  }
  get tabIndex() {
    return this._tabIndex;
  }
  /**
   * When set to `true`, the component is a single tab-stop,
   * and focus moves through the inner buttons using the arrow keys.
   *
   * When set to `false`, the inner buttons are part of the natural tab sequence of the page.
   *
   * @default true
   */
  navigable = true;
  /**
   * Fires every time keyboard navigation occurs within the ButtonGroup.
   */
  navigate = new EventEmitter();
  buttons;
  _tabIndex = 0;
  currentTabIndex = 0;
  lastFocusedIndex = -1;
  direction;
  subs = new Subscription();
  wrapperClasses = true;
  get disabledClass() {
    return this.disabled;
  }
  get stretchedClass() {
    return !!this.width;
  }
  role = "group";
  get dir() {
    return this.direction;
  }
  get ariaDisabled() {
    return this.disabled;
  }
  get wrapperWidth() {
    return this.width;
  }
  get wrapperTabIndex() {
    if (this.disabled) {
      return void 0;
    }
    return this.navigable ? this.currentTabIndex : void 0;
  }
  constructor(service, localization, renderer, element) {
    this.service = service;
    this.renderer = renderer;
    this.element = element;
    validatePackage(packageMetadata2);
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
  }
  ngOnInit() {
    this.subs.add(this.service.buttonClicked$.subscribe((button) => {
      let newSelectionValue;
      if (this.isSelectionSingle()) {
        newSelectionValue = true;
        this.deactivate(this.buttons.filter((current) => current !== button));
      } else {
        if (this.navigable) {
          this.defocus(this.buttons.toArray());
        }
        newSelectionValue = !button.selected;
      }
      if (button.togglable) {
        button.setSelected(newSelectionValue);
      }
      if (this.navigable) {
        this.currentTabIndex = -1;
        this.renderer.setAttribute(button, tabindex, "0");
      }
    }));
    this.handleSubs("focus", () => this.navigable, this.focusHandler);
    this.handleSubs("keydown", () => this.navigable && !this.disabled, (event) => this.navigateFocus(event));
    this.handleSubs("focusout", (event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement, () => {
      this.lastFocusedIndex = this.buttons.toArray().findIndex((button) => button.tabIndex !== -1);
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    });
    this.subs.add(fromEvent(this.element.nativeElement, "focusout").pipe(filter((event) => this.navigable && event.relatedTarget && event.relatedTarget.parentNode !== this.element.nativeElement)).subscribe(() => {
      this.defocus(this.buttons.toArray());
      this.currentTabIndex = this.tabIndex;
    }));
  }
  ngOnChanges(changes) {
    if (isChanged("disabled", changes)) {
      this.buttons.forEach((button) => {
        if (isPresent2(this.disabled)) {
          button.disabled = this.disabled;
        }
      });
    }
    if (isChanged("navigable", changes)) {
      if (changes["navigable"].currentValue) {
        this.defocus(this.buttons.toArray());
        this.currentTabIndex = 0;
      } else {
        this.currentTabIndex = -1;
        this.buttons.forEach((button) => this.renderer.setAttribute(button, tabindex, "0"));
      }
    }
  }
  ngAfterContentInit() {
    if (!this.navigable) {
      return;
    }
    this.defocus(this.buttons.toArray());
  }
  ngAfterViewChecked() {
    if (this.buttons.length) {
      this.renderer.addClass(this.buttons.first.element, "k-group-start");
      this.renderer.addClass(this.buttons.last.element, "k-group-end");
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngAfterContentChecked() {
    this.verifySettings();
  }
  navigateFocus(event) {
    const navigationButtons = this.buttons.toArray().filter((button) => !button.disabled);
    const focusedIndex = navigationButtons.findIndex((current) => current.element.tabIndex !== -1);
    const firstIndex = 0;
    const lastIndex = navigationButtons.length - 1;
    const eventArgs = new PreventableEvent();
    if (event.keyCode === Keys.ArrowRight && focusedIndex < lastIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex + 1;
        }));
      }
    }
    if (event.keyCode === Keys.ArrowLeft && focusedIndex > firstIndex) {
      this.navigate.emit(eventArgs);
      if (!eventArgs.isDefaultPrevented()) {
        this.defocus(navigationButtons);
        this.focus(navigationButtons.filter((_current, index) => {
          return index === focusedIndex - 1;
        }));
      }
    }
  }
  deactivate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(false);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "-1");
      }
    });
  }
  activate(buttons) {
    buttons.forEach((button) => {
      button.setSelected(true);
      if (this.navigable) {
        this.renderer.setAttribute(button, tabindex, "0");
      }
      button.focus();
    });
  }
  defocus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "-1");
    });
  }
  focus(buttons) {
    buttons.forEach((button) => {
      this.renderer.setAttribute(button, tabindex, "0");
      button.focus();
    });
  }
  verifySettings() {
    if (isDevMode()) {
      if (this.isSelectionSingle() && this.buttons.filter((button) => button.selected).length > 1) {
        throw new Error("Having multiple selected buttons with single selection mode is not supported");
      }
    }
  }
  isSelectionSingle() {
    return this.selection === "single";
  }
  handleSubs(eventName, predicate, handler) {
    this.subs.add(fromEvent(this.element.nativeElement, eventName).pipe(filter(predicate)).subscribe(handler));
  }
  focusHandler = () => {
    this.currentTabIndex = -1;
    this.defocus(this.buttons.toArray());
    const firstFocusableIndex = this.buttons.toArray().findIndex((current) => !current.disabled);
    const index = this.lastFocusedIndex === -1 ? firstFocusableIndex : this.lastFocusedIndex;
    this.focus(this.buttons.filter((_current, i) => {
      return i === index;
    }));
  };
  static ɵfac = function ButtonGroupComponent_Factory(t) {
    return new (t || _ButtonGroupComponent)(ɵɵdirectiveInject(KendoButtonService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ButtonGroupComponent,
    selectors: [["kendo-buttongroup"]],
    contentQueries: function ButtonGroupComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ButtonComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttons = _t);
      }
    },
    hostVars: 12,
    hostBindings: function ButtonGroupComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("dir", ctx.dir)("aria-disabled", ctx.ariaDisabled)("tabindex", ctx.wrapperTabIndex);
        ɵɵstyleProp("width", ctx.wrapperWidth);
        ɵɵclassProp("k-button-group", ctx.wrapperClasses)("k-disabled", ctx.disabledClass)("k-button-group-stretched", ctx.stretchedClass);
      }
    },
    inputs: {
      disabled: "disabled",
      selection: "selection",
      width: "width",
      tabIndex: "tabIndex",
      navigable: "navigable"
    },
    outputs: {
      navigate: "navigate"
    },
    exportAs: ["kendoButtonGroup"],
    standalone: true,
    features: [ɵɵProvidersFeature([KendoButtonService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.buttongroup"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c3,
    decls: 1,
    vars: 0,
    template: function ButtonGroupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef(_c2);
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoButtonGroup",
      providers: [KendoButtonService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.buttongroup"
      }],
      selector: "kendo-buttongroup",
      template: `
        <ng-content select="[kendoButton]"></ng-content>
    `,
      standalone: true
    }]
  }], function() {
    return [{
      type: KendoButtonService
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    disabled: [{
      type: Input,
      args: ["disabled"]
    }],
    selection: [{
      type: Input,
      args: ["selection"]
    }],
    width: [{
      type: Input,
      args: ["width"]
    }],
    tabIndex: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    navigate: [{
      type: Output
    }],
    buttons: [{
      type: ContentChildren,
      args: [ButtonComponent]
    }],
    wrapperClasses: [{
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    stretchedClass: [{
      type: HostBinding,
      args: ["class.k-button-group-stretched"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    ariaDisabled: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }],
    wrapperWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    wrapperTabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var DEFAULT_SIZE$1 = "medium";
var DEFAULT_ROUNDED$2 = "medium";
var DEFAULT_THEME_COLOR$1 = "base";
var DEFAULT_FILL_MODE$2 = "solid";
var ChipComponent = class _ChipComponent {
  element;
  renderer;
  ngZone;
  localizationService;
  /**
   * Sets the label text of the Chip.
   */
  label;
  /**
   * Defines the name for an existing icon in a Kendo UI theme.
   * The icon is rendered inside the Chip by a `span.k-icon` element.
   */
  icon;
  /**
   * Defines an [`SVGIcon`](slug:api_icons_svgicon) to render inside the Chip using
   * a [`KendoSVGIcon`](slug:api_icons_svgiconcomponent) component.
   */
  svgIcon;
  /**
   * Defines a CSS class, or multiple classes separated by spaces,
   * applied to a `span` element. Use the `iconClass` to add custom icons.
   */
  iconClass;
  /**
   * Use these settings to render an avatar within the Chip.
   */
  avatarSettings;
  /**
   * Specifies the selected state of the Chip.
   * @default false
   */
  selected = false;
  /**
   * Specifies if the Chip is removable.
   * If set to `true`, the Chip renders a remove icon.
   * @default false
   */
  removable = false;
  /**
   * Specifies a custom remove font icon class to render when the Chip is removable.
   * [see example]({% slug icons %})
   */
  removeIcon;
  /**
   * Specifies a custom remove SVG icon to render when the Chip is removable.
   */
  removeSvgIcon;
  /**
   * @hidden
   *
   * Determines whether the Chip has a menu.
   */
  hasMenu = false;
  /**
   * @hidden
   *
   * Specifies a custom menu font icon class to render when the Chip has a menu.
   */
  menuIcon;
  /**
   * @hidden
   *
   * Specifies a custom menu SVG icon to render when the Chip has a menu.
   */
  menuSvgIcon;
  /**
   * If set to `true`, the Chip is disabled.
   * @default false
   */
  disabled = false;
  /**
   * Sets the padding of the Chip.
   * See [Chip Appearance]({% slug appearance_chip %}#size).
   *
   * @default 'medium'
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE$1;
    !this.sizeIsSet && (this.sizeIsSet = true);
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Sets the border radius of the Chip.
   * See [Chip Appearance](slug:appearance_chip#roundness).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$2;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Sets the background and border styles of the Chip.
   * See [Chip Appearance](slug:appearance_chip#fill-mode).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE$2;
    this.handleClasses(newFillMode, "fillMode");
    this._fillMode = newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Sets a predefined theme color for the Chip.
   * The theme color applies as a background and border color and adjusts the text color.
   * See [Chip Appearance](slug:appearance_chip#theme-colors).
   *
   * @default 'base'
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR$1;
    this.handleThemeColor(newThemeColor);
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Fires when the user clicks the remove icon of the Chip.
   */
  remove = new EventEmitter();
  /**
   * @hidden
   *
   * Fires when the user clicks the menu icon of the Chip.
   */
  menuToggle = new EventEmitter();
  /**
   * Fires when the user clicks the content of the Chip.
   */
  contentClick = new EventEmitter();
  tabIndex = 0;
  hostClass = true;
  get hasIconClass() {
    return Boolean(this.icon || this.iconClass || this.avatarSettings && !isObjectEmpty(this.avatarSettings));
  }
  get disabledClass() {
    return this.disabled;
  }
  get selectedClass() {
    return this.selected;
  }
  get focusedClass() {
    return this.focused;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * @hidden
   */
  defaultRemoveIcon = xCircleIcon;
  /**
   * @hidden
   */
  defaultMenuIcon = moreVerticalIcon;
  /**
   * @hidden
   */
  sizeIsSet = false;
  _size = "medium";
  _rounded = "medium";
  _fillMode = "solid";
  _themeColor = "base";
  focused = false;
  subs = new Subscription();
  constructor(element, renderer, ngZone, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    this.localizationService = localizationService;
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.subs.add(this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.renderer.setAttribute(this.element.nativeElement, "role", "button");
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(changes) {
    if (changes && changes["selected"]) {
      const hasAriaSelected = this.element.nativeElement.hasAttribute("aria-selected");
      if (!hasAriaSelected) {
        this.renderer.setAttribute(this.element.nativeElement, "aria-pressed", `${this.selected}`);
      }
    }
  }
  ngAfterViewInit() {
    const chip = this.element.nativeElement;
    const stylingOptions = ["size", "rounded", "fillMode"];
    stylingOptions.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers(chip);
  }
  /**
   * @hidden
   */
  get kendoIconClass() {
    this.verifyIconSettings([this.iconClass]);
    return `k-i-${this.icon}`;
  }
  /**
   * @hidden
   */
  get customIconClass() {
    this.verifyIconSettings([this.icon]);
    return this.iconClass;
  }
  /**
   * @hidden
   */
  get removeIconClass() {
    return this.removeIcon ? this.removeIcon : "k-i-x-circle";
  }
  /**
   * Focuses the Chip component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.focus();
    }
  }
  /**
   * Blurs the Chip component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.element.nativeElement.blur();
    }
  }
  /**
   * @hidden
   */
  onRemoveClick(e) {
    if (this.removable) {
      this.remove.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  /**
   * @hidden
   */
  onMenuClick(e) {
    if (this.hasMenu) {
      this.menuToggle.emit({
        sender: this,
        originalEvent: e
      });
    }
  }
  attachElementEventHandlers(chip) {
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chip, "focus", () => {
        this.renderer.addClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "blur", () => {
        this.renderer.removeClass(chip, "k-focus");
      }));
      this.subs.add(this.renderer.listen(chip, "click", (e) => {
        const isActionClicked = closest(e.target, ".k-chip-action");
        if (!isActionClicked) {
          this.ngZone.run(() => {
            this.contentClick.emit({
              sender: this,
              originalEvent: e
            });
          });
        }
      }));
      this.subs.add(this.renderer.listen(chip, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  /**
   * @hidden
   */
  verifyIconSettings(iconsToCheck) {
    if (isDevMode()) {
      if (iconsToCheck.filter((icon) => icon !== null && icon !== void 0).length > 0) {
        this.renderer.removeClass(this.element.nativeElement, "k-chip-has-icon");
        throw new Error("Invalid configuration: Having multiple icons is not supported. Only a single icon on a chip can be displayed.");
      }
    }
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip", input, this[input], value);
    if (input === "fillMode") {
      this.handleThemeColor(this.themeColor, this[input], value);
    }
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  handleThemeColor(value, prevFillMode, fillMode) {
    const elem = this.element.nativeElement;
    const removeFillMode = prevFillMode ? prevFillMode : this.fillMode;
    const addFillMode = fillMode ? fillMode : this.fillMode;
    const themeColorClass = getThemeColorClasses("chip", removeFillMode, addFillMode, this.themeColor, value);
    this.renderer.removeClass(elem, themeColorClass.toRemove);
    if (addFillMode !== "none" && fillMode !== "none") {
      if (themeColorClass.toAdd) {
        this.renderer.addClass(elem, themeColorClass.toAdd);
      }
    }
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    if (this.disabled) {
      return;
    }
    if (isEnterOrSpace) {
      this.ngZone.run(() => {
        this.contentClick.emit({
          sender: this,
          originalEvent: e
        });
      });
    } else if (isDeleteOrBackspace && this.removable) {
      this.ngZone.run(() => {
        this.remove.emit({
          sender: this,
          originalEvent: e
        });
      });
    }
  }
  static ɵfac = function ChipComponent_Factory(t) {
    return new (t || _ChipComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChipComponent,
    selectors: [["kendo-chip"]],
    hostVars: 13,
    hostBindings: function ChipComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("tabindex", ctx.tabIndex)("aria-disabled", ctx.disabledClass)("dir", ctx.direction);
        ɵɵclassProp("k-chip", ctx.hostClass)("k-chip-has-icon", ctx.hasIconClass)("k-disabled", ctx.disabledClass)("k-selected", ctx.selectedClass)("k-focus", ctx.focusedClass);
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      avatarSettings: "avatarSettings",
      selected: "selected",
      removable: "removable",
      removeIcon: "removeIcon",
      removeSvgIcon: "removeSvgIcon",
      hasMenu: "hasMenu",
      menuIcon: "menuIcon",
      menuSvgIcon: "menuSvgIcon",
      disabled: "disabled",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor"
    },
    outputs: {
      remove: "remove",
      menuToggle: "menuToggle",
      contentClick: "contentClick"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chip"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c12,
    decls: 7,
    vars: 6,
    consts: [["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass", 4, "ngIf"], ["class", "k-chip-avatar k-avatar k-avatar-sm k-avatar-solid k-avatar-solid-primary k-rounded-full", 3, "ngStyle", 4, "ngIf"], [1, "k-chip-content"], ["class", "k-chip-label", 4, "ngIf"], [4, "ngIf"], ["class", "k-chip-actions", 4, "ngIf"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "name", "svgIcon"], ["size", "small", "innerCssClass", "k-chip-icon", 3, "customFontClass"], [1, "k-chip-avatar", "k-avatar", "k-avatar-sm", "k-avatar-solid", "k-avatar-solid-primary", "k-rounded-full", 3, "ngStyle"], [1, "k-avatar-image"], [3, "src", "ngStyle"], [1, "k-avatar-text", 3, "ngStyle"], [1, "k-chip-label"], [1, "k-chip-actions"], ["class", "k-chip-action k-chip-more-action", 3, "click", 4, "ngIf"], ["class", "k-chip-action k-chip-remove-action", 3, "click", 4, "ngIf"], [1, "k-chip-action", "k-chip-more-action", 3, "click"], ["name", "more-vertical", "size", "small", 3, "svgIcon", "customFontClass"], [1, "k-chip-action", "k-chip-remove-action", 3, "click"], ["name", "x-circle", "size", "small", 3, "svgIcon", "customFontClass"]],
    template: function ChipComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, ChipComponent_kendo_icon_wrapper_0_Template, 1, 2, "kendo-icon-wrapper", 0)(1, ChipComponent_kendo_icon_wrapper_1_Template, 1, 1, "kendo-icon-wrapper", 1)(2, ChipComponent_span_2_Template, 3, 3, "span", 2);
        ɵɵelementStart(3, "span", 3);
        ɵɵtemplate(4, ChipComponent_span_4_Template, 2, 1, "span", 4)(5, ChipComponent_ng_content_5_Template, 1, 0, "ng-content", 5);
        ɵɵelementEnd();
        ɵɵtemplate(6, ChipComponent_span_6_Template, 3, 2, "span", 6);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.icon || ctx.svgIcon);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.iconClass);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.avatarSettings);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.label);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.label);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.hasMenu || ctx.removable);
      }
    },
    dependencies: [NgIf, NgStyle, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chip",
      template: `
        <kendo-icon-wrapper
            *ngIf="icon || svgIcon"
            size="small"
            innerCssClass="k-chip-icon"
            [name]="icon"
            [svgIcon]="svgIcon"></kendo-icon-wrapper>

        <kendo-icon-wrapper
            *ngIf="iconClass"
            size="small"
            innerCssClass="k-chip-icon"
            [customFontClass]="customIconClass"></kendo-icon-wrapper>
        <span
            *ngIf="avatarSettings"
            class="k-chip-avatar k-avatar k-avatar-sm k-avatar-solid k-avatar-solid-primary k-rounded-full"
            [ngStyle]="avatarSettings.cssStyle">
            <ng-container *ngIf="avatarSettings?.imageSrc">
                <span class="k-avatar-image">
                    <img src="{{ avatarSettings.imageSrc }}" [ngStyle]="avatarSettings.imageCssStyle" [attr.alt]="avatarSettings.imageAltText" />
                </span>
            </ng-container>

            <ng-container *ngIf="avatarSettings?.initials">
                <span class="k-avatar-text" [ngStyle]="avatarSettings.initialsCssStyle">{{ avatarSettings.initials.substring(0, 2) }}</span>
            </ng-container>
        </span>

        <span class="k-chip-content">
            <span class="k-chip-label" *ngIf="label">
                {{ label }}
            </span>
            <ng-content *ngIf="!label"></ng-content>
        </span>

        <span class="k-chip-actions" *ngIf="hasMenu || removable">
            <span class="k-chip-action k-chip-more-action"
                *ngIf="hasMenu"
                (click)="onMenuClick($event)">
                <kendo-icon-wrapper
                    name="more-vertical"
                    size="small"
                    [svgIcon]="defaultMenuIcon || menuSvgIcon"
                    [customFontClass]="menuIcon"></kendo-icon-wrapper>
            </span>
            <span class="k-chip-action k-chip-remove-action"
                *ngIf="removable"
                (click)="onRemoveClick($event)">
                <kendo-icon-wrapper
                    name="x-circle"
                    size="small"
                    [svgIcon]="removeSvgIcon || defaultRemoveIcon"
                    [customFontClass]="removeIcon"></kendo-icon-wrapper>
            </span>
        </span>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chip"
      }],
      standalone: true,
      imports: [NgIf, NgStyle, IconWrapperComponent, NgClass]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }, {
      type: LocalizationService
    }];
  }, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    avatarSettings: [{
      type: Input
    }],
    selected: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    removeIcon: [{
      type: Input
    }],
    removeSvgIcon: [{
      type: Input
    }],
    hasMenu: [{
      type: Input
    }],
    menuIcon: [{
      type: Input
    }],
    menuSvgIcon: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    remove: [{
      type: Output
    }],
    menuToggle: [{
      type: Output
    }],
    contentClick: [{
      type: Output
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip"]
    }],
    hasIconClass: [{
      type: HostBinding,
      args: ["class.k-chip-has-icon"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    selectedClass: [{
      type: HostBinding,
      args: ["class.k-selected"]
    }],
    focusedClass: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var ChipListComponent = class _ChipListComponent {
  localizationService;
  renderer;
  element;
  ngZone;
  hostClass = true;
  orientation = "horizontal";
  /**
   * @hidden
   */
  direction;
  /**
   * Sets the selection mode of the ChipList.
   *
   * @default 'none'
   */
  selection = "none";
  /**
   * Sets the gap between the Chips in the ChipList.
   * See [ChipList Appearance]({% slug appearance_chiplist %}#size).
   *
   * @default 'medium'
   */
  set size(size) {
    const sizeValue = size ? size : "medium";
    this.handleClasses(sizeValue, "size");
    this.chips?.forEach((chip) => this.setChipSize(chip, sizeValue));
    this._size = sizeValue;
  }
  get size() {
    return this._size;
  }
  /**
   * Fires when the ChipList selection changes.
   */
  selectedChange = new EventEmitter();
  /**
   * Fires when the user clicks the remove icon of a Chip in the ChipList.
   */
  remove = new EventEmitter();
  chips;
  get single() {
    return this.selection === "single";
  }
  get multiple() {
    return this.selection === "multiple";
  }
  /**
   * @hidden
   */
  role = "listbox";
  dynamicRTLSubscription;
  _size = "medium";
  subs = new Subscription();
  _navigable = true;
  /**
   * @hidden
   */
  onClick($event) {
    const target = $event.target;
    const isRemoveClicked = closest(target, ".k-chip-remove-action");
    const clickedChip = closest(target, ".k-chip");
    const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
    this.currentActiveIndex = this.chips.toArray().indexOf(chip);
    chip && chip.focus();
    if (chip && this.navigable) {
      this.chips.forEach((c) => {
        this.renderer.setAttribute(c.element.nativeElement, "tabindex", "-1");
      });
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
    }
    if (isRemoveClicked && clickedChip) {
      const removeEventArgs = {
        sender: this,
        originalEvent: $event,
        removedChip: chip
      };
      this.remove.emit(removeEventArgs);
    }
    if (this.selection !== "none" && clickedChip && !isRemoveClicked) {
      this.setSelection(chip);
    }
  }
  /**
   * By default, keyboard navigation is available through arrow keys and roving tabindex.
   * When set to `false`, all chips are part of the default tabbing sequence of the page.
   *
   * @default true
   */
  set navigable(value) {
    this._navigable = value;
    this.chips?.forEach((c) => this.renderer.setAttribute(c.element.nativeElement, "tabindex", value ? "-1" : "0"));
    this.chips?.first && this.renderer.setAttribute(this.chips.first.element.nativeElement, "tabindex", "0");
  }
  get navigable() {
    return this._navigable;
  }
  currentActiveIndex = 0;
  constructor(localizationService, renderer, element, ngZone) {
    this.localizationService = localizationService;
    this.renderer = renderer;
    this.element = element;
    this.ngZone = ngZone;
    validatePackage(packageMetadata2);
    this.direction = localizationService.rtl ? "rtl" : "ltr";
  }
  ngOnInit() {
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr");
  }
  ngAfterViewInit() {
    const stylingInputs = ["size"];
    stylingInputs.forEach((input) => {
      this.handleClasses(this[input], input);
    });
    this.attachElementEventHandlers();
    this.updateChips();
  }
  ngAfterContentInit() {
    this.subs.add(this.chips?.changes.subscribe(() => this.updateChips()));
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
    this.subs.unsubscribe();
  }
  selectedChips() {
    return this.chips.reduce((acc, cur, idx) => {
      return cur.selected ? acc.concat(idx) : acc;
    }, []);
  }
  /**
   * Updates the selection on click of a Chip. Emits events.
   */
  setSelection(chip) {
    if (this.selection === "single") {
      this.clearSelection(chip);
    }
    chip.selected = !chip.selected;
    const chipEl = chip.element.nativeElement;
    this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
    this.selectedChange.emit(this.selectedChips());
  }
  clearSelection(chip) {
    this.chips.forEach((c) => {
      if (chip !== c) {
        c.selected = false;
        this.renderer.setAttribute(c.element.nativeElement, "aria-selected", "false");
      }
    });
  }
  handleClasses(value, input) {
    const elem = this.element.nativeElement;
    const classes = getStylingClasses("chip-list", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  attachElementEventHandlers() {
    const chiplist = this.element.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      this.subs.add(this.renderer.listen(chiplist, "keydown", this.keyDownHandler.bind(this)));
    });
  }
  keyDownHandler(e) {
    const isEnterOrSpace = e.keyCode === Keys.Enter || e.keyCode === Keys.Space;
    const isDeleteOrBackspace = e.keyCode === Keys.Delete || e.keyCode === Keys.Backspace;
    const isLeftArrow = e.keyCode === Keys.ArrowLeft;
    const isRightArrow = e.keyCode === Keys.ArrowRight;
    if (isEnterOrSpace) {
      const target = e.target;
      const clickedChip = closest(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      this.currentActiveIndex = this.chips.toArray().findIndex((chip2) => clickedChip === chip2.element.nativeElement);
      if (this.selection !== "none" && clickedChip) {
        this.ngZone.run(() => {
          this.setSelection(chip);
        });
      }
    } else if (isDeleteOrBackspace) {
      const target = e.target;
      const clickedChip = closest(target, ".k-chip");
      const chip = this.chips.find((chip2) => clickedChip === chip2.element.nativeElement);
      if (clickedChip) {
        const removeEventArgs = {
          sender: this,
          originalEvent: e,
          removedChip: chip
        };
        this.ngZone.run(() => {
          this.remove.emit(removeEventArgs);
        });
      }
    } else if (isLeftArrow) {
      this.handleArrowKeys("left");
    } else if (isRightArrow) {
      this.handleArrowKeys("right");
    }
  }
  handleArrowKeys(direction) {
    if (!this.navigable) {
      return;
    }
    const directionDelta = direction === "left" ? -1 : 1;
    this.currentActiveIndex = this.currentActiveIndex + directionDelta;
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = 0;
    } else if (this.currentActiveIndex < 0) {
      this.currentActiveIndex = this.chips.length - 1;
    }
    this.chips.forEach((chip, idx) => {
      this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "-1");
      if (idx === this.currentActiveIndex) {
        this.renderer.setAttribute(chip.element.nativeElement, "tabindex", "0");
        chip.focus();
      }
    });
  }
  updateChips() {
    this.normalizeActiveIndex();
    this.chips.forEach((chip, idx) => {
      const chipEl = chip.element.nativeElement;
      this.renderer.removeAttribute(chipEl, "aria-pressed");
      this.renderer.setAttribute(chipEl, "aria-selected", `${chip.selected}`);
      this.role === "listbox" && this.renderer.setAttribute(chipEl, "role", "option");
      if (!this.navigable) {
        return;
      }
      this.renderer.setAttribute(chipEl, "tabindex", "-1");
      if (idx === this.currentActiveIndex) {
        this.renderer.setAttribute(chipEl, "tabindex", "0");
        if (isDocumentAvailable() && document.activeElement.closest(".k-chip-list")) {
          chip.focus();
        }
      }
      if (chip.removable) {
        this.renderer.setAttribute(chipEl, "aria-keyshortcuts", "Enter Delete");
      }
      this.setChipSize(chip, this.size);
    });
  }
  normalizeActiveIndex() {
    if (this.currentActiveIndex >= this.chips.length) {
      this.currentActiveIndex = Math.max(this.chips.length - 1, 0);
    }
  }
  setChipSize(chip, size) {
    const hasSize = chip.sizeIsSet;
    !hasSize && chip.size !== size && (chip.size = size);
    !hasSize && (chip.sizeIsSet = false);
  }
  static ɵfac = function ChipListComponent_Factory(t) {
    return new (t || _ChipListComponent)(ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChipListComponent,
    selectors: [["kendo-chiplist"], ["kendo-chip-list"]],
    contentQueries: function ChipListComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ChipComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chips = _t);
      }
    },
    hostVars: 10,
    hostBindings: function ChipListComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ChipListComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("aria-orientation", ctx.orientation)("dir", ctx.direction)("aria-multiselectable", ctx.multiple)("role", ctx.role);
        ɵɵclassProp("k-chip-list", ctx.hostClass)("k-selection-single", ctx.single)("k-selection-multiple", ctx.multiple);
      }
    },
    inputs: {
      selection: "selection",
      size: "size",
      role: "role",
      navigable: "navigable"
    },
    outputs: {
      selectedChange: "selectedChange",
      remove: "remove"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chiplist"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c12,
    decls: 1,
    vars: 0,
    template: function ChipListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chiplist, kendo-chip-list",
      template: `
        <ng-content></ng-content>
    `,
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chiplist"
      }],
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }, {
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-chip-list"]
    }],
    orientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    selection: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    selectedChange: [{
      type: Output
    }],
    remove: [{
      type: Output
    }],
    chips: [{
      type: ContentChildren,
      args: [ChipComponent]
    }],
    single: [{
      type: HostBinding,
      args: ["class.k-selection-single"]
    }],
    multiple: [{
      type: HostBinding,
      args: ["attr.aria-multiselectable"]
    }, {
      type: HostBinding,
      args: ["class.k-selection-multiple"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }, {
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    navigable: [{
      type: Input
    }]
  });
})();
var ButtonItemTemplateDirective = class _ButtonItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ButtonItemTemplateDirective_Factory(t) {
    return new (t || _ButtonItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ButtonItemTemplateDirective,
    selectors: [["", "kendoDropDownButtonItemTemplate", ""], ["", "kendoSplitButtonItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDropDownButtonItemTemplate],[kendoSplitButtonItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, null);
})();
var FocusService = class _FocusService {
  onFocus = new EventEmitter();
  focusedIndex;
  isFocused(index) {
    return index === this.focused;
  }
  focus(index) {
    if (this.isFocused(index)) {
      return;
    }
    this.focused = index;
    this.onFocus.emit(index);
  }
  resetFocus() {
    this.focused = -1;
  }
  get focused() {
    return this.focusedIndex;
  }
  set focused(index) {
    this.focusedIndex = index;
    this.onFocus.emit(index);
  }
  static ɵfac = function FocusService_Factory(t) {
    return new (t || _FocusService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FocusService,
    factory: _FocusService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusService, [{
    type: Injectable
  }], null, null);
})();
var KeyEvents;
(function(KeyEvents2) {
  KeyEvents2[KeyEvents2["keydown"] = 0] = "keydown";
  KeyEvents2[KeyEvents2["keypress"] = 1] = "keypress";
  KeyEvents2[KeyEvents2["keyup"] = 2] = "keyup";
})(KeyEvents || (KeyEvents = {}));
var NavigationAction;
(function(NavigationAction2) {
  NavigationAction2[NavigationAction2["Undefined"] = 0] = "Undefined";
  NavigationAction2[NavigationAction2["Open"] = 1] = "Open";
  NavigationAction2[NavigationAction2["Close"] = 2] = "Close";
  NavigationAction2[NavigationAction2["Enter"] = 3] = "Enter";
  NavigationAction2[NavigationAction2["EnterPress"] = 4] = "EnterPress";
  NavigationAction2[NavigationAction2["EnterUp"] = 5] = "EnterUp";
  NavigationAction2[NavigationAction2["Tab"] = 6] = "Tab";
  NavigationAction2[NavigationAction2["Esc"] = 7] = "Esc";
  NavigationAction2[NavigationAction2["Navigate"] = 8] = "Navigate";
})(NavigationAction || (NavigationAction = {}));
var NAVIGATION_CONFIG = new InjectionToken("navigation.config");
var NavigationService = class _NavigationService {
  navigate = new EventEmitter();
  open = new EventEmitter();
  close = new EventEmitter();
  enter = new EventEmitter();
  enterpress = new EventEmitter();
  enterup = new EventEmitter();
  tab = new EventEmitter();
  esc = new EventEmitter();
  useLeftRightArrows;
  constructor(config) {
    this.useLeftRightArrows = config.useLeftRightArrows;
  }
  process(args) {
    const keyCode = args.keyCode;
    const keyEvent = args.keyEvent;
    let index;
    let action = NavigationAction.Undefined;
    if (keyEvent === KeyEvents.keyup) {
      if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.EnterUp;
      }
    } else {
      if (args.altKey && keyCode === Keys.ArrowDown) {
        action = NavigationAction.Open;
      } else if (args.altKey && keyCode === Keys.ArrowUp) {
        action = NavigationAction.Close;
      } else if (this.isEnterOrSpace(keyCode)) {
        action = NavigationAction.Enter;
      } else if (keyCode === Keys.Escape) {
        action = NavigationAction.Esc;
      } else if (keyCode === Keys.Tab) {
        action = NavigationAction.Tab;
      } else if (keyCode === Keys.ArrowUp || this.useLeftRightArrows && keyCode === Keys.ArrowLeft) {
        const step = args.flipNavigation ? 1 : -1;
        const start = args.flipNavigation ? args.min : args.max;
        const end = args.flipNavigation ? args.max : args.min;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.ArrowDown || this.useLeftRightArrows && keyCode === Keys.ArrowRight) {
        const step = args.flipNavigation ? -1 : 1;
        const start = args.flipNavigation ? args.max : args.min;
        const end = args.flipNavigation ? args.min : args.max;
        index = this.next({
          current: args.current,
          start,
          end,
          step
        });
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.Home) {
        index = args.min;
        action = NavigationAction.Navigate;
      } else if (keyCode === Keys.End) {
        index = args.max;
        action = NavigationAction.Navigate;
      }
    }
    if (action !== NavigationAction.Undefined) {
      this[NavigationAction[action].toLowerCase()].emit({
        index,
        target: args.target,
        esc: action === NavigationAction.Esc
      });
    }
    return action;
  }
  isEnterOrSpace(keyCode) {
    return keyCode === Keys.Enter || keyCode === Keys.Space;
  }
  next(args) {
    if (!isPresent2(args.current)) {
      return args.start;
    } else {
      return args.current !== args.end ? args.current + args.step : args.end;
    }
  }
  static ɵfac = function NavigationService_Factory(t) {
    return new (t || _NavigationService)(ɵɵinject(NAVIGATION_CONFIG));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _NavigationService,
    factory: _NavigationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Inject,
        args: [NAVIGATION_CONFIG]
      }]
    }];
  }, null);
})();
var PopupContainerService = class _PopupContainerService {
  container;
  template;
  static ɵfac = function PopupContainerService_Factory(t) {
    return new (t || _PopupContainerService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PopupContainerService,
    factory: _PopupContainerService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PopupContainerService, [{
    type: Injectable
  }], null, null);
})();
var FocusableDirective = class _FocusableDirective {
  focusService;
  renderer;
  index;
  element;
  subs = new Subscription();
  constructor(focusService, elementRef, renderer) {
    this.focusService = focusService;
    this.renderer = renderer;
    this.element = elementRef.nativeElement;
    this.subscribeEvents();
  }
  ngOnInit() {
    if (this.index === this.focusService.focused) {
      this.renderer.addClass(this.element, "k-focus");
    } else {
      this.renderer.removeClass(this.element, "k-focus");
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subs.add(this.focusService.onFocus.subscribe((index) => {
      if (this.index === index) {
        this.renderer.addClass(this.element, "k-focus");
        this.renderer.setAttribute(this.element, "tabindex", "0");
        this.element.focus();
      } else {
        this.renderer.setAttribute(this.element, "tabindex", "-1");
        this.renderer.removeClass(this.element, "k-focus");
      }
    }));
  }
  static ɵfac = function FocusableDirective_Factory(t) {
    return new (t || _FocusableDirective)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FocusableDirective,
    selectors: [["", "kendoButtonFocusable", ""]],
    inputs: {
      index: "index"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusableDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoButtonFocusable]",
      standalone: true
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    index: [{
      type: Input
    }]
  });
})();
var ListComponent = class _ListComponent {
  data;
  textField;
  itemTemplate;
  onItemClick = new EventEmitter();
  onItemBlur = new EventEmitter();
  set size(size) {
    if (size) {
      this.sizeClass = `k-menu-group-${SIZES[size]}`;
    } else {
      this.sizeClass = "";
    }
  }
  sizeClass = "";
  constructor() {
    validatePackage(packageMetadata2);
  }
  getText(dataItem) {
    if (dataItem) {
      return this.textField ? dataItem[this.textField] : dataItem.text || dataItem;
    }
    return void 0;
  }
  getIconClasses(dataItem) {
    const icon = dataItem.icon ? "k-icon k-i-" + dataItem.icon : void 0;
    const classes = {};
    classes[icon || dataItem.iconClass] = true;
    return classes;
  }
  onClick(index) {
    this.onItemClick.emit(index);
  }
  onBlur() {
    this.onItemBlur.emit();
  }
  static ɵfac = function ListComponent_Factory(t) {
    return new (t || _ListComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ListComponent,
    selectors: [["kendo-button-list"]],
    inputs: {
      data: "data",
      textField: "textField",
      itemTemplate: "itemTemplate",
      size: "size"
    },
    outputs: {
      onItemClick: "onItemClick",
      onItemBlur: "onItemBlur"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 2,
    consts: [["role", "list", 1, "k-group", "k-menu-group", "k-reset", 3, "ngClass"], ["kendoButtonFocusable", "", "tabindex", "-1", "class", "k-item k-menu-item", "role", "listitem", 3, "index", "click", "blur", 4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "tabindex", "-1", "role", "listitem", 1, "k-item", "k-menu-item", 3, "click", "blur", "index"], [3, "ngIf"], [1, "k-link", "k-menu-link", 3, "ngClass"], [3, "templateContext"], [3, "name", "svgIcon", "customFontClass", 4, "ngIf"], ["class", "k-image", 3, "src", "alt", 4, "ngIf"], ["class", "k-menu-link-text", 4, "ngIf"], [3, "name", "svgIcon", "customFontClass"], [1, "k-image", 3, "src", "alt"], [1, "k-menu-link-text"]],
    template: function ListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ul", 0);
        ɵɵtemplate(1, ListComponent_li_1_Template, 3, 4, "li", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ctx.sizeClass);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.data);
      }
    },
    dependencies: [NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListComponent, [{
    type: Component,
    args: [{
      selector: "kendo-button-list",
      template: `
        <ul class="k-group k-menu-group k-reset" role="list" [ngClass]="sizeClass">
            <li kendoButtonFocusable
                *ngFor="let dataItem of data; let index = index;"
                [index]="index"
                tabindex="-1"
                class="k-item k-menu-item"
                role="listitem"
                [attr.aria-disabled]="dataItem.disabled ? true : false"
                (click)="$event.stopImmediatePropagation(); onClick(index);"
                (blur)="onBlur()">
                <ng-template [ngIf]="itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <ng-template
                            [templateContext]="{ templateRef: itemTemplate?.templateRef, $implicit: dataItem }"
                        ></ng-template>
                    </span>
                </ng-template>
                <ng-template [ngIf]="!itemTemplate?.templateRef">
                    <span
                        class="k-link k-menu-link"
                        [class.k-disabled]="dataItem.disabled"
                        [ngClass]="dataItem.cssClass">
                        <kendo-icon-wrapper
                            *ngIf="dataItem.icon || dataItem.iconClass || dataItem.svgIcon"
                            [name]="dataItem.icon"
                            [svgIcon]="dataItem.svgIcon"
                            [customFontClass]="dataItem.iconClass"
                        ></kendo-icon-wrapper>
                        <img
                            *ngIf="dataItem.imageUrl"
                            class="k-image"
                            [src]="dataItem.imageUrl"
                            [alt]="dataItem.imageAlt"
                        >
                        <span *ngIf="getText(dataItem)" class="k-menu-link-text">
                            {{ getText(dataItem) }}
                        </span>
                    </span>
                </ng-template>
            </li>
        </ul>
    `,
      standalone: true,
      imports: [NgClass, NgForOf, FocusableDirective, NgIf, TemplateContextDirective, IconWrapperComponent]
    }]
  }], function() {
    return [];
  }, {
    data: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    onItemClick: [{
      type: Output
    }],
    onItemBlur: [{
      type: Output
    }],
    size: [{
      type: Input
    }]
  });
})();
var ListButton = class _ListButton extends MultiTabStop {
  focusService;
  navigationService;
  wrapperRef;
  _zone;
  popupService;
  elRef;
  cdr;
  containerService;
  listId = guid();
  buttonId = guid();
  _data;
  _open = false;
  _disabled = false;
  _active = false;
  _popupSettings = {
    animate: true,
    popupClass: ""
  };
  _isFocused = false;
  _itemClick;
  _blur;
  wrapper;
  subs = new Subscription();
  direction;
  popupRef;
  popupSubs = new Subscription();
  button;
  buttonList;
  popupTemplate;
  container;
  /**
   * Sets the disabled state of the DropDownButton.
   * When `true`, the button is disabled and cannot be interacted with.
   */
  set disabled(value) {
    if (value && this.openState) {
      this.openState = false;
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   * Determines the order of focus when navigating with the keyboard.
   *
   * @default 0
   */
  tabIndex = 0;
  /**
   * The CSS classes applied to the main button.
   * Supports the same values as [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  buttonClass;
  /**
   * Fires when the popup is about to open.
   * This event is preventable. Canceling the event keeps the popup closed.
   */
  open = new EventEmitter();
  /**
   * Fires when the popup is about to close.
   * This event is preventable. Canceling the event keeps the popup open.
   */
  close = new EventEmitter();
  /**
   * Needed by the kendoToggleButtonTabStop directive
   *
   * @hidden
   */
  escape = new EventEmitter();
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  get appendTo() {
    const {
      appendTo
    } = this.popupSettings;
    if (!appendTo || appendTo === "root") {
      return void 0;
    }
    return appendTo === "component" ? this.containerService.container : appendTo;
  }
  /**
   * Configures the popup of the DropDownButton.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  isClosePrevented = false;
  constructor(focusService, navigationService, wrapperRef, _zone, popupService, elRef, localization, cdr, containerService) {
    super();
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapperRef = wrapperRef;
    this._zone = _zone;
    this.popupService = popupService;
    this.elRef = elRef;
    this.cdr = cdr;
    this.containerService = containerService;
    validatePackage(packageMetadata2);
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.wrapper = wrapperRef.nativeElement;
    this.subs.add(localization.changes.subscribe(({
      rtl
    }) => this.direction = rtl ? "rtl" : "ltr"));
    this.subscribeEvents();
  }
  ngOnChanges(changes) {
    if (isChanged("popupSettings", changes) && isPresent2(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  get popupClasses() {
    const popupClasses = ["k-menu-popup"];
    if (this._popupSettings.popupClass) {
      popupClasses.push(this._popupSettings.popupClass);
    }
    return popupClasses.join(" ");
  }
  get openState() {
    return this._open;
  }
  /**
   * @hidden
   */
  set openState(open) {
    if (this.disabled) {
      return;
    }
    this._open = open;
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this._open;
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (this._disabled) {
      return;
    }
    this._toggle(!this.openState, true);
    if (!this.isClosePrevented) {
      this.focusService.focus(this.openState ? 0 : -1);
    }
  }
  /**
   * @hidden
   */
  onItemClick(index) {
    this.emitItemClickHandler(index);
    this.togglePopupVisibility();
    if (isDocumentAvailable() && !this.isClosePrevented) {
      this.focusButton();
    }
  }
  ngOnDestroy() {
    this.openState = false;
    this.subs.unsubscribe();
    this.destroyPopup();
  }
  subscribeEvents() {
    if (!isDocumentAvailable()) {
      return;
    }
    this.subscribeListItemFocusEvent();
    this.subscribeComponentBlurredEvent();
    this.subscribeNavigationEvents();
  }
  subscribeListItemFocusEvent() {
    this.subs.add(this.focusService.onFocus.subscribe(() => {
      this._isFocused = true;
    }));
  }
  subscribeComponentBlurredEvent() {
    this._zone.runOutsideAngular(() => {
      this.subs.add(this.navigationService.tab.pipe(filter(() => this._isFocused), tap(() => this.focusButton())).subscribe(this.handleTab.bind(this)));
      this.subs.add(fromEvent(document, "click").pipe(filter((event) => !this.wrapperContains(event.target)), filter(() => this._isFocused)).subscribe(() => this._zone.run(() => this.blurWrapper())));
    });
  }
  subscribeNavigationEvents() {
    this.subs.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subs.add(this.navigationService.enterup.subscribe(this.onNavigationEnterUp.bind(this)));
    this.subs.add(this.navigationService.open.subscribe(this.onNavigationOpen.bind(this)));
    this.subs.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  /**
   * Toggles the visibility of the popup.
   * If the `toggle` method is used, the `open` and `close` events are not fired.
   *
   * @param open - The desired state of the popup.
   */
  toggle(open) {
    if (this.disabled) {
      return;
    }
    const value = open === void 0 ? !this.openState : open;
    this._toggle(value, false);
  }
  /**
   * @hidden
   */
  keyDownHandler(event, isHost) {
    this.keyHandler(event, null, isHost);
  }
  /**
   * @hidden
   */
  keyUpHandler(event) {
    this.keyHandler(event, KeyEvents.keyup);
  }
  /**
   * @hidden
   */
  keyHandler(event, keyEvent, isHost) {
    if (this._disabled) {
      return;
    }
    const eventData = event;
    if (!isHost) {
      eventData.stopImmediatePropagation();
    }
    const focused = this.focusService.focused || 0;
    const action = this.navigationService.process({
      altKey: eventData.altKey,
      current: focused,
      keyCode: eventData.keyCode,
      keyEvent,
      max: this._data ? this._data.length - 1 : 0,
      min: 0,
      target: event.target
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab && (action !== NavigationAction.Enter || action === NavigationAction.Enter && this.openState)) {
      if (!(event.keyCode === Keys.Space && action === NavigationAction.EnterUp)) {
        eventData.preventDefault();
      }
    }
  }
  emitItemClickHandler(index) {
    const dataItem = this._data[index];
    if (this._itemClick && !dataItem.disabled) {
      this._itemClick.emit(dataItem);
    }
    if (dataItem && dataItem.click && !dataItem.disabled) {
      dataItem.click(dataItem);
    }
    this.focusService.focus(index);
  }
  focusWrapper() {
    if (this.openState) {
      this.togglePopupVisibility();
      this.focusButton();
    }
  }
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  blurWrapper(emit = true) {
    if (!this._isFocused) {
      return;
    }
    if (this.openState) {
      this.togglePopupVisibility();
    }
    this._isFocused = false;
    if (emit) {
      this._blur.emit();
      this.cdr.markForCheck();
    }
  }
  focusButton() {
    if (this.button) {
      this.button.nativeElement.focus();
    }
  }
  handleTab() {
    this.blurWrapper();
  }
  onNavigationEnterUp(_args) {
    if (!this._disabled && !this.openState) {
      this._active = false;
    }
    if (this.openState) {
      const focused = this.focusService.focused;
      if (isPresent2(focused) && focused !== -1) {
        this.emitItemClickHandler(focused);
      }
    }
    this.togglePopupVisibility();
    if (!this.openState && isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  onNavigationOpen() {
    if (!this._disabled && !this.openState) {
      this.togglePopupVisibility();
    }
  }
  onNavigationClose(e) {
    if (this.openState && !this.isClosePrevented) {
      this.togglePopupVisibility();
      if (isDocumentAvailable()) {
        e?.esc && hasObservers(this.escape) && this.escape.emit();
        this.button.nativeElement.focus();
      }
    }
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  _toggle(open, emitEvent) {
    if (this.openState === open) {
      return;
    }
    const eventArgs = new PreventableEvent();
    if (emitEvent) {
      if (open && !this.openState) {
        this.open.emit(eventArgs);
      } else if (!open && this.openState) {
        this.close.emit(eventArgs);
      }
      if (eventArgs.isDefaultPrevented()) {
        this.isClosePrevented = true;
        return;
      }
    }
    this.openState = open;
    this.destroyPopup();
    if (this.openState) {
      this.createPopup();
    }
  }
  createPopup() {
    this.popupRef = this.popupService.open({
      anchor: this.elRef,
      anchorAlign: this.anchorAlign,
      animate: this.popupSettings.animate,
      appendTo: this.appendTo,
      content: this.containerService.template,
      popupAlign: this.popupAlign,
      popupClass: this.popupClasses
    });
    this.popupSubs = this.popupRef.popupAnchorViewportLeave.subscribe(() => {
      this.togglePopupVisibility();
    });
  }
  destroyPopup() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
      this.popupSubs.unsubscribe();
      this.isClosePrevented = false;
    }
  }
  static ɵfac = function ListButton_Factory(t) {
    return new (t || _ListButton)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ListButton,
    selectors: [["ng-component"]],
    viewQuery: function ListButton_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5, ElementRef);
        ɵɵviewQuery(_c6, 5);
        ɵɵviewQuery(_c7, 5);
        ɵɵviewQuery(_c8, 5, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.buttonList = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      disabled: "disabled",
      tabIndex: "tabIndex",
      buttonClass: "buttonClass",
      popupSettings: "popupSettings"
    },
    outputs: {
      open: "open",
      close: "close",
      escape: "escape"
    },
    features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    decls: 0,
    vars: 0,
    template: function ListButton_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ListButton, [{
    type: Component,
    args: [{
      template: ""
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }];
  }, {
    button: [{
      type: ViewChild,
      args: ["button", {
        read: ElementRef
      }]
    }],
    buttonList: [{
      type: ViewChild,
      args: ["buttonList"]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate"]
    }],
    container: [{
      type: ViewChild,
      args: ["container", {
        read: ViewContainerRef
      }]
    }],
    disabled: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    escape: [{
      type: Output
    }],
    popupSettings: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$2 = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER$2 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$2
};
var DEFAULT_FILL_MODE$1 = "solid";
var DropDownButtonComponent = class _DropDownButtonComponent extends ListButton {
  containerService;
  renderer;
  /**
   * Displays the default arrow icon or a custom one.
   * @default false
   */
  arrowIcon = false;
  /**
   * Specifies the name of an existing icon in the Kendo UI theme.
   */
  icon = "";
  /**
   * Specifies an [`SVGIcon`](slug:api_icons_svgicon) to render within the button.
   */
  svgIcon;
  /**
   * Specifies a list of CSS classes for styling the button with custom icons.
   */
  iconClass = "";
  /**
   * Specifies a URL for styling the button with a custom image.
   */
  imageUrl = "";
  /**
   * Sets the data item field that represents the item text.
   * If the data contains only primitive values, leave this undefined.
   */
  textField;
  /**
   * Sets or gets the data of the DropDownButton. Provide the data as an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    return this._data;
  }
  /**
   * Specifies the padding of the DropDownButton. See [DropDownButton Appearance](slug:appearance_dropdownbutton#size).
   * @default 'medium'
   */
  size = "medium";
  /**
   * Specifies the border radius of the DropDownButton. See [DropDownButton Appearance](slug:appearance_dropdownbutton#roundness).
   * @default 'medium'
   */
  rounded = "medium";
  /**
   * Specifies the background and border styles of the DropDownButton. See [DropDownButton Appearance](slug:appearance_dropdownbutton#fill-mode).
   * @default 'solid'
   */
  set fillMode(fillMode) {
    this._fillMode = fillMode === "clear" ? "flat" : fillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Specifies predefined theme colors for the DropDownButton. See [DropDownButton Appearance](slug:appearance_dropdownbutton#theme-colors).
   * @default 'base'
   */
  themeColor = "base";
  /**
   * Sets attributes for the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * Fires when the user clicks a drop-down list item.
   * The event data contains the data item bound to the clicked list item.
   */
  itemClick = new EventEmitter();
  /**
   * Fires when the DropDownButton is focused.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when the DropDownButton is blurred.
   */
  onBlur = new EventEmitter();
  get focused() {
    return this._isFocused && !this._disabled;
  }
  hostDisplayStyle = "inline-flex";
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  itemTemplate;
  _fillMode = DEFAULT_FILL_MODE$1;
  _buttonAttributes = null;
  documentMouseUpSub;
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space || event.keyCode === Keys.Enter) {
      this._active = true;
    }
    if (event.keyCode === Keys.Enter) {
      event.preventDefault();
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this.keyUpHandler(event);
    this._active = false;
  }
  /**
   * @hidden
   */
  mousedown(event) {
    if (this._disabled) {
      event.preventDefault();
    } else {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  mouseup(event) {
    if (this._disabled) {
      event.preventDefault();
    }
    this._active = false;
  }
  /**
   * @hidden
   */
  openPopup() {
    this._isFocused = true;
    this.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.openState) {
      this.blurWrapper();
    }
  }
  /**
   * Focuses the DropDownButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the DropDownButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService, renderer) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.containerService = containerService;
    this.renderer = renderer;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
    zone.runOutsideAngular(() => {
      this.documentMouseUpSub = this.renderer.listen("document", "mouseup", () => {
        if (this.active) {
          zone.run(() => this._active = false);
        }
      });
    });
  }
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.handleButtonAttributes(this.buttonAttributes);
    const arrowWrapper = this.button.nativeElement.querySelector(".k-button-arrow");
    if (arrowWrapper) {
      this.renderer.addClass(arrowWrapper, "k-menu-button-arrow");
    }
  }
  /**
   * @hidden
   */
  handleFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element) || this.popupRef && this.popupRef.popupElement.contains(element);
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button?.nativeElement;
    if (isPresent(this.buttonAttributes) && isPresent(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent(newButtonAttributes) && isPresent(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.documentMouseUpSub) {
      this.documentMouseUpSub();
    }
  }
  static ɵfac = function DropDownButtonComponent_Factory(t) {
    return new (t || _DropDownButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(PopupContainerService), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DropDownButtonComponent,
    selectors: [["kendo-dropdownbutton"]],
    contentQueries: function DropDownButtonComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function DropDownButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function DropDownButtonComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        })("keyup", function DropDownButtonComponent_keyup_HostBindingHandler($event) {
          return ctx.keyup($event);
        })("mousedown", function DropDownButtonComponent_mousedown_HostBindingHandler($event) {
          return ctx.mousedown($event);
        })("mouseup", function DropDownButtonComponent_mouseup_HostBindingHandler($event) {
          return ctx.mouseup($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
        ɵɵstyleProp("display", ctx.hostDisplayStyle);
        ɵɵclassProp("k-focus", ctx.focused);
      }
    },
    inputs: {
      arrowIcon: "arrowIcon",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      imageUrl: "imageUrl",
      textField: "textField",
      data: "data",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      buttonAttributes: "buttonAttributes"
    },
    outputs: {
      itemClick: "itemClick",
      onFocus: "focus",
      onBlur: "blur"
    },
    exportAs: ["kendoDropDownButton"],
    standalone: true,
    features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.dropdownbutton"
    }, PopupContainerService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c12,
    decls: 7,
    vars: 18,
    consts: [["button", ""], ["popupTemplate", ""], ["container", ""], ["buttonList", ""], ["kendoButton", "", "type", "button", 1, "k-menu-button", 3, "click", "focus", "blur", "id", "tabindex", "disabled", "icon", "svgIcon", "arrowIcon", "iconClass", "imageUrl", "ngClass", "size", "rounded", "fillMode", "themeColor"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]],
    template: function DropDownButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementStart(0, "button", 4, 0);
        ɵɵlistener("click", function DropDownButtonComponent_Template_button_click_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.openPopup());
        })("focus", function DropDownButtonComponent_Template_button_focus_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleFocus($event));
        })("blur", function DropDownButtonComponent_Template_button_blur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onButtonBlur());
        });
        ɵɵprojection(2);
        ɵɵelementEnd();
        ɵɵtemplate(3, DropDownButtonComponent_ng_template_3_Template, 2, 7, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵelementContainer(5, null, 2);
      }
      if (rf & 2) {
        ɵɵclassProp("k-active", ctx.active);
        ɵɵproperty("id", ctx.buttonId)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("arrowIcon", ctx.arrowIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.fillMode ? ctx.themeColor : null);
        ɵɵattribute("aria-disabled", ctx.disabled)("aria-expanded", ctx.openState)("aria-controls", ctx.listId);
      }
    },
    dependencies: [ButtonComponent, NgClass, ListComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoDropDownButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$2, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.dropdownbutton"
      }, PopupContainerService],
      selector: "kendo-dropdownbutton",
      template: `
        <button kendoButton #button
            type="button"
            [id]="buttonId"
            [tabindex]="componentTabIndex"
            class="k-menu-button"
            [class.k-active]="active"
            [disabled]="disabled"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [arrowIcon]="arrowIcon"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="fillMode ? themeColor : null"
            (click)="openPopup()"
            (focus)="handleFocus($event)"
            (blur)="onButtonBlur()"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="listId"
        >
            <ng-content></ng-content>
        </button>
        <ng-template #popupTemplate>
            <kendo-button-list
                #buttonList
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [attr.aria-labelledby]="buttonId"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [ButtonComponent, NgClass, ListComponent]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: PopupContainerService
    }, {
      type: Renderer2
    }];
  }, {
    arrowIcon: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    focused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    hostDisplayStyle: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }],
    mousedown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    mouseup: [{
      type: HostListener,
      args: ["mouseup", ["$event"]]
    }]
  });
})();
function getAnchorAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "bottom"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "top";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "top";
  }
  return align2;
}
function getPopupAlign(fabAlign, rtl) {
  const align2 = {
    horizontal: rtl ? "right" : "left",
    vertical: "top"
  };
  if (fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
  }
  if (fabAlign.vertical === "bottom") {
    align2.vertical = "bottom";
  }
  if (fabAlign.vertical === "bottom" && fabAlign.horizontal === "end") {
    align2.horizontal = rtl ? "left" : "right";
    align2.vertical = "bottom";
  }
  return align2;
}
function openAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }), stagger(gap, [animate(`${duration}ms ease-in`, style({
    opacity: "*",
    transform: "translateY(0)"
  }))])], {
    optional: true
  })]);
}
function closeAnimation(animationSettings) {
  const isBottom = animationSettings.align.vertical === "bottom";
  const duration = animationSettings.duration;
  const gap = animationSettings.gap;
  return sequence([query(`.k-fab-item`, [style({
    opacity: "*",
    transform: "translateY(0)"
  }), stagger(-gap, [animate(`${duration}ms ease-in`, style({
    opacity: 0,
    transform: `translateY(${isBottom ? "8px" : "-8px"})`
  }))])], {
    optional: true
  })]);
}
var DialItemTemplateDirective = class _DialItemTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DialItemTemplateDirective_Factory(t) {
    return new (t || _DialItemTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DialItemTemplateDirective,
    selectors: [["", "kendoDialItemTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoDialItemTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var FloatingActionButtonTemplateDirective = class _FloatingActionButtonTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function FloatingActionButtonTemplateDirective_Factory(t) {
    return new (t || _FloatingActionButtonTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _FloatingActionButtonTemplateDirective,
    selectors: [["", "kendoFloatingActionButtonTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoFloatingActionButtonTemplate]",
      standalone: true
    }]
  }], function() {
    return [{
      type: TemplateRef,
      decorators: [{
        type: Optional
      }]
    }];
  }, null);
})();
var DialItemComponent = class _DialItemComponent {
  element;
  renderer;
  localisationService;
  hostClass = true;
  role = "menuitem";
  get disabledClass() {
    return this.item.disabled;
  }
  get title() {
    const label = this.item.label;
    return label || this.itemTitle;
  }
  get indexAttr() {
    return this.index;
  }
  cssClass;
  cssStyle;
  isFocused;
  index;
  item;
  dialItemTemplate;
  align;
  constructor(element, renderer, localisationService) {
    this.element = element;
    this.renderer = renderer;
    this.localisationService = localisationService;
  }
  get iconClasses() {
    const classes = [];
    if (this.item.iconClass) {
      classes.push(`${this.item.iconClass}`);
    }
    if (this.item.icon) {
      classes.push(`k-fab-item-icon k-icon k-i-${this.item.icon}`);
    }
    return classes;
  }
  get itemTitle() {
    const icon = this.item.icon;
    const itemTitle = this.item.itemTitle;
    return icon && itemTitle ? itemTitle : icon;
  }
  ngAfterViewInit() {
    const element = this.element.nativeElement;
    const rtl = this.localisationService.rtl;
    const hAlign = this.align.horizontal;
    this.renderer.addClass(element, this.getTextDirectionClass(rtl, hAlign));
  }
  getTextDirectionClass(rtl, hAlign) {
    const dir = rtl ? "rtl" : "ltr";
    const align2 = hAlign === "end" ? "end" : "start";
    const directions = {
      rtl: {
        end: "k-text-left",
        start: "k-text-right"
      },
      ltr: {
        start: "k-text-left",
        end: "k-text-right"
      }
    };
    return directions[dir][align2];
  }
  static ɵfac = function DialItemComponent_Factory(t) {
    return new (t || _DialItemComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DialItemComponent,
    selectors: [["", "kendoDialItem", ""]],
    hostVars: 9,
    hostBindings: function DialItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("aria-disabled", ctx.disabledClass)("title", ctx.title)("aria-label", ctx.title)("data-fab-item-index", ctx.indexAttr);
        ɵɵclassProp("k-fab-item", ctx.hostClass)("k-disabled", ctx.disabledClass);
      }
    },
    inputs: {
      cssClass: "cssClass",
      cssStyle: "cssStyle",
      isFocused: "isFocused",
      index: "index",
      item: "item",
      dialItemTemplate: "dialItemTemplate",
      align: "align"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c9,
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "k-fab-item-text", 4, "ngIf"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], [1, "k-fab-item-text"], ["innerCssClass", "k-fab-item-icon", 3, "name", "customFontClass", "svgIcon"]],
    template: function DialItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, DialItemComponent_0_Template, 1, 6, null, 0)(1, DialItemComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.dialItemTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.dialItemTemplate);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialItemComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialItem]",
      template: `
        <ng-template *ngIf="dialItemTemplate"
            [ngTemplateOutlet]="dialItemTemplate"
            [ngTemplateOutletContext]="{ $implicit: item, index: index, isFocused: isFocused }"
        >
        </ng-template>

        <ng-container *ngIf="!dialItemTemplate">
            <span *ngIf="item.label" class="k-fab-item-text">{{ item.label }}</span>
            <kendo-icon-wrapper
                *ngIf="item.icon || item.iconClass || item.svgIcon"
                [name]="item.icon"
                innerCssClass="k-fab-item-icon"
                [customFontClass]="item.iconClass"
                [svgIcon]="item.svgIcon"></kendo-icon-wrapper>
        </ng-container>
    `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-item"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    disabledClass: [{
      type: HostBinding,
      args: ["attr.aria-disabled"]
    }, {
      type: HostBinding,
      args: ["class.k-disabled"]
    }],
    title: [{
      type: HostBinding,
      args: ["attr.title"]
    }, {
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    indexAttr: [{
      type: HostBinding,
      args: ["attr.data-fab-item-index"]
    }],
    cssClass: [{
      type: Input
    }],
    cssStyle: [{
      type: Input
    }],
    isFocused: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var DialListComponent = class _DialListComponent {
  focusService;
  cdr;
  hostClass = true;
  get bottomClass() {
    return this.align.vertical === "top" || this.align.vertical === "middle";
  }
  get topClass() {
    return this.align.vertical === "bottom";
  }
  dialItems;
  dialItemTemplate;
  align;
  subscriptions = new Subscription();
  constructor(focusService, cdr) {
    this.focusService = focusService;
    this.cdr = cdr;
    this.subscriptions.add(this.focusService.onFocus.subscribe(() => this.cdr.detectChanges()));
  }
  isFocused(index) {
    return this.focusService.isFocused(index);
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  static ɵfac = function DialListComponent_Factory(t) {
    return new (t || _DialListComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _DialListComponent,
    selectors: [["", "kendoDialList", ""]],
    hostVars: 6,
    hostBindings: function DialListComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-fab-items", ctx.hostClass)("k-fab-items-bottom", ctx.bottomClass)("k-fab-items-top", ctx.topClass);
      }
    },
    inputs: {
      dialItems: "dialItems",
      dialItemTemplate: "dialItemTemplate",
      align: "align"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    attrs: _c11,
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"], ["kendoButtonFocusable", "", "kendoDialItem", "", 3, "item", "index", "dialItemTemplate", "isFocused", "ngClass", "ngStyle", "align"]],
    template: function DialListComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, DialListComponent_ng_container_0_Template, 2, 7, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.dialItems);
      }
    },
    dependencies: [NgForOf, FocusableDirective, DialItemComponent, NgClass, NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DialListComponent, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[kendoDialList]",
      template: `
        <ng-container *ngFor='let item of dialItems; let idx = index'>
            <li
                kendoButtonFocusable
                kendoDialItem
                [item]="dialItems[idx]"
                [index]="idx"
                [dialItemTemplate]="dialItemTemplate"
                [isFocused]="isFocused(idx)"
                [ngClass]='item.cssClass'
                [ngStyle]='item.cssStyle'
                [align]="align"
            >
            </li>
        </ng-container>
    `,
      standalone: true,
      imports: [NgForOf, FocusableDirective, DialItemComponent, NgClass, NgStyle]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-fab-items"]
    }],
    bottomClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-bottom"]
    }],
    topClass: [{
      type: HostBinding,
      args: ["class.k-fab-items-top"]
    }],
    dialItems: [{
      type: Input
    }],
    dialItemTemplate: [{
      type: Input
    }],
    align: [{
      type: Input
    }]
  });
})();
var NAVIGATION_SETTINGS$1 = {
  useLeftRightArrows: false
};
var NAVIGATION_SETTINGS_PROVIDER$1 = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS$1
};
var SIZE_CLASSES = {
  small: "k-fab-sm",
  medium: "k-fab-md",
  large: "k-fab-lg"
};
var ROUNDED_CLASSES = {
  small: "k-rounded-sm",
  medium: "k-rounded-md",
  large: "k-rounded-lg",
  full: "k-rounded-full"
};
var FILLMODE_CLASS = "k-fab-solid";
var DEFAULT_DURATION2 = 180;
var DEFAULT_ITEM_GAP = 90;
var DEFAULT_OFFSET2 = "16px";
var DEFAULT_ROUNDED$1 = "full";
var DEFAULT_SIZE = "medium";
var DEFAULT_THEME_COLOR = "primary";
var FloatingActionButtonComponent = class _FloatingActionButtonComponent {
  renderer;
  element;
  focusService;
  navigationService;
  ngZone;
  popupService;
  builder;
  localizationService;
  get fixedClass() {
    return this.positionMode === "fixed";
  }
  get absoluteClass() {
    return this.positionMode === "absolute";
  }
  direction;
  button;
  popupTemplate;
  dialItemTemplate;
  fabTemplate;
  /**
   * Specifies the theme color of the FloatingActionButton ([see example](slug:appearance_floatingactionbutton#theme-colors)).
   * @default "primary"
   */
  set themeColor(themeColor) {
    const newThemeColor = themeColor ? themeColor : DEFAULT_THEME_COLOR;
    this.handleClasses(newThemeColor, "themeColor");
    this._themeColor = newThemeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the FloatingActionButton ([see example](slug:appearance_floatingactionbutton#size)).
   * @default "medium"
   */
  set size(size) {
    const newSize = size ? size : DEFAULT_SIZE;
    this.handleClasses(newSize, "size");
    this._size = newSize;
  }
  get size() {
    return this._size;
  }
  /**
   * Specifies the border radius of the FloatingActionButton ([see example](slug:appearance_floatingactionbutton#roundness)).
   *
   * @default "full"
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED$1;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Specifies whether the FloatingActionButton is disabled.
   * @default false
   */
  set disabled(disabled) {
    this._disabled = disabled;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Specifies the alignment of the FloatingActionButton ([see example](slug:positioning_floatingactionbutton#alignment)).
   * @default { horizontal: 'end', vertical: 'top' }
   */
  set align(align2) {
    this._align = Object.assign(this._align, align2);
  }
  get align() {
    return this._align;
  }
  /**
   * Specifies the offset position of the FloatingActionButton ([see example]({% slug positioning_floatingactionbutton %}#offset)).
   * @default { x: '16px', y: '16px' }
   */
  set offset(offset2) {
    this._offset = Object.assign(this._offset, offset2);
    this.offsetStyles();
  }
  get offset() {
    return this._offset;
  }
  /**
   * Specifies the position mode of the FloatingActionButton ([see example](slug:positioning_floatingactionbutton#position-mode)).
   * @default "fixed"
   */
  positionMode = "fixed";
  /**
   * Defines the name of an existing icon in a Kendo UI theme.
   */
  icon;
  /**
   * Defines an [`SVGIcon`](slug:api_icons_svgicon) to be rendered within the FloatingActionButton.
   */
  svgIcon;
  /**
   * Defines a CSS class or multiple classes for custom icons.
   */
  iconClass;
  /**
   * The CSS classes that will be rendered on the main button.
   * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  buttonClass;
  /**
   * The CSS classes that will be rendered on the dial items `ul` element.
   * Supports the type of values that are supported by [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  dialClass;
  /**
   * Specifies the text content of the FloatingActionButton.
   */
  text;
  /**
   * Specifies the animation settings of the FloatingActionButton dial items.
   * @default true
   */
  dialItemAnimation = true;
  /**
   * Specifies the [`tabIndex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the FloatingActionButton.
   * @default 0
   */
  tabIndex = 0;
  /**
   * Specifies the collection of dial items rendered in the FloatingActionButton popup.
   */
  dialItems = [];
  /**
   * Fires when the FloatingActionButton is blurred.
   */
  onBlur = new EventEmitter();
  /**
   * Fires when the FloatingActionButton is focused.
   */
  onFocus = new EventEmitter();
  /**
   * Fires when a dial item is clicked.
   */
  dialItemClick = new EventEmitter();
  /**
   * Fires when the popup is about to open. This event is preventable
   *  ([more information and example](slug:events_floatingactionbutton)).
   */
  open = new EventEmitter();
  /**
   * Fires when the popup is about to close. This event is preventable
   * ([more information and example](slug:events_floatingactionbutton)).
   */
  close = new EventEmitter();
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  /**
   * @hidden
   */
  id = `k-${guid()}`;
  /**
   * @hidden
   */
  dialListId = `k-dial-list-${guid()}`;
  _themeColor = DEFAULT_THEME_COLOR;
  _size = DEFAULT_SIZE;
  _rounded = DEFAULT_ROUNDED$1;
  _disabled = false;
  _align = {
    horizontal: "end",
    vertical: "bottom"
  };
  _offset = {
    x: DEFAULT_OFFSET2,
    y: DEFAULT_OFFSET2
  };
  subscriptions = new Subscription();
  popupMouseDownListener;
  rtl = false;
  animationEnd = new EventEmitter();
  popupRef;
  initialSetup = true;
  focusChangedProgrammatically = false;
  constructor(renderer, element, focusService, navigationService, ngZone, popupService, builder, localizationService) {
    this.renderer = renderer;
    this.element = element;
    this.focusService = focusService;
    this.navigationService = navigationService;
    this.ngZone = ngZone;
    this.popupService = popupService;
    this.builder = builder;
    this.localizationService = localizationService;
    validatePackage(packageMetadata2);
    this.subscribeNavigationEvents();
    this.subscriptions.add(this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    }));
  }
  ngAfterViewInit() {
    ["size", "rounded", "themeColor"].forEach((option) => this.handleClasses(this[option], option));
    this.renderer.addClass(this.element.nativeElement, this.alignClass());
    this.offsetStyles();
    this.initialSetup = false;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.isOpen && this.toggleDial(false);
  }
  /**
   * Indicates whether the FloatingActionButton is currently open.
   */
  get isOpen() {
    return isPresent2(this.popupRef);
  }
  /**
   * Focuses the FloatingActionButton.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.focus();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Blurs the FloatingActionButton.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.focusChangedProgrammatically = true;
      this.button.nativeElement.blur();
      this.focusChangedProgrammatically = false;
    }
  }
  /**
   * Toggles the visibility of the FloatingActionButton dial items popup.
   *
   * If you use the `toggleDial` method to open or close the dial items,
   * the `open` and `close` events do not fire ([more information and examples](slug:openstate_floatingactionbutton)).
   *
   * @param open - The state of dial items popup.
   */
  toggleDial(open) {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    const shouldOpen = isPresent2(open) ? open : !this.isOpen;
    if (this.disabled || shouldOpen === this.isOpen) {
      return;
    }
    if (shouldOpen) {
      setTimeout(() => this.openDial());
    } else {
      this.closeDial();
    }
  }
  /**
   * @hidden
   */
  get ariaExpanded() {
    return this.hasDialItems ? this.isOpen : void 0;
  }
  /**
   * @hidden
   */
  get ariaHasPopup() {
    return this.hasDialItems ? "menu" : void 0;
  }
  /**
   * @hidden
   */
  get ariaControls() {
    if (!this.hasDialItems) {
      return void 0;
    }
    return this.isOpen ? this.dialListId : void 0;
  }
  /**
   * @hidden
   */
  get iconClasses() {
    const classes = [];
    if (this.iconClass) {
      classes.push(`${this.iconClass}`);
    }
    if (this.icon) {
      classes.push(`k-fab-icon k-icon k-i-${this.icon}`);
    }
    return classes;
  }
  /**
   * @hidden
   */
  clickHandler() {
    if (this.disabled || !this.hasDialItems) {
      return;
    }
    this.ngZone.run(() => {
      const shouldOpen = !this.isOpen;
      this.toggleDialWithEvents(shouldOpen);
    });
  }
  /**
   * @hidden
   */
  pointerdownHandler(e) {
    if (this.isOpen) {
      e.preventDefault();
      this.focus();
    }
  }
  /**
   * @hidden
   */
  keyDownHandler(event) {
    if (this.disabled) {
      return;
    }
    const focused = this.focusService.focused || 0;
    const keyCode = event.keyCode;
    const action = this.navigationService.process({
      altKey: event.altKey,
      current: focused,
      keyCode,
      max: this.dialItems ? this.dialItems.length - 1 : 0,
      min: 0,
      flipNavigation: this.align.vertical === "bottom"
    });
    if (action !== NavigationAction.Undefined && action !== NavigationAction.Tab) {
      event.preventDefault();
    }
    if (action === NavigationAction.Tab && event.target.closest(`#${this.dialListId}`)) {
      this.focus();
    }
    if (action === NavigationAction.EnterUp && !this.hasDialItems) {
      this.button.nativeElement.click();
    } else if (action === NavigationAction.Open || action === NavigationAction.Close) {
      const toggleDial = action === NavigationAction.Open;
      this.ngZone.run(() => {
        this.toggleDialWithEvents(toggleDial);
      });
    }
  }
  /**
   * @hidden
   */
  onItemClick(event) {
    const item = closest(event.target, ".k-fab-item");
    if (!item) {
      return;
    }
    const index = parseInt(item.getAttribute("data-fab-item-index"));
    this.emitItemClick(index);
  }
  /**
   * @hidden
   */
  focusHandler() {
    if (!this.disabled && !this.focusChangedProgrammatically) {
      this.onFocus.emit();
    }
  }
  /**
   * @hidden
   */
  blurHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    if (focusInList) {
      return;
    }
    !this.focusChangedProgrammatically && this.onBlur.emit();
    this.toggleDialWithEvents(false);
  }
  /**
   * @hidden
   */
  focusOutHandler(e) {
    const focusInList = e.relatedTarget && e.relatedTarget.closest(`#${this.dialListId}`);
    const focusOnButton = e.relatedTarget === this.button.nativeElement;
    const shouldClose = !focusInList && !focusOnButton;
    if (shouldClose) {
      this.toggleDialWithEvents(false);
      !this.focusChangedProgrammatically && this.onBlur.emit();
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterPress() {
    this.ngZone.run(() => {
      if (this.isOpen) {
        const focusedIndex = this.focusService.focused;
        const focusedItem = this.dialItems[focusedIndex];
        if (focusedItem && focusedItem.disabled) {
          return;
        }
        if (isPresent2(focusedIndex) && focusedIndex !== -1) {
          this.onEnterPressed();
          return;
        }
      }
      if (!this.isOpen && isDocumentAvailable()) {
        this.toggleDialWithEvents(true);
        this.focus();
      }
    });
  }
  /**
   * @hidden
   */
  onNavigationClose() {
    if (this.isOpen) {
      this.ngZone.run(() => {
        this.toggleDialWithEvents(false);
        this.focus();
      });
    }
  }
  handleClasses(inputValue, input) {
    if (isPresent2(this.button) && (this[input] !== inputValue || this.initialSetup)) {
      const button = this.button.nativeElement;
      const classesToRemove = {
        themeColor: `${FILLMODE_CLASS}-${this.themeColor}`,
        size: SIZE_CLASSES[this.size],
        rounded: ROUNDED_CLASSES[this.rounded]
      };
      const classesToAdd = {
        themeColor: inputValue !== "none" ? `${FILLMODE_CLASS}-${inputValue}` : "",
        size: SIZE_CLASSES[inputValue],
        rounded: ROUNDED_CLASSES[inputValue]
      };
      this.renderer.removeClass(button, classesToRemove[input]);
      if (classesToAdd[input]) {
        this.renderer.addClass(button, classesToAdd[input]);
      }
    }
  }
  onEnterPressed() {
    const index = this.focusService.focused;
    this.emitItemClick(index);
  }
  emitItemClick(index) {
    const item = this.dialItems[index];
    if (item && !item.disabled) {
      const clickEventArgs = {
        item,
        index
      };
      this.dialItemClick.emit(clickEventArgs);
      this.toggleDialWithEvents(false);
      this.focusService.focused = index;
    }
    this.focus();
  }
  subscribeNavigationEvents() {
    this.subscriptions.add(this.navigationService.navigate.subscribe(this.onArrowKeyNavigate.bind(this)));
    this.subscriptions.add(this.navigationService.enter.subscribe(this.onNavigationEnterPress.bind(this)));
    this.subscriptions.add(merge(this.navigationService.close, this.navigationService.esc).subscribe(this.onNavigationClose.bind(this)));
  }
  onArrowKeyNavigate({
    index
  }) {
    this.focusService.focus(index);
  }
  alignClass() {
    return `k-pos-${this.align.vertical}-${this.align.horizontal}`;
  }
  toggleDialWithEvents(open) {
    if (open === this.isOpen) {
      return;
    }
    const event = new PreventableEvent();
    if (open) {
      this.open.emit(event);
    } else {
      this.close.emit(event);
    }
    if (event.isDefaultPrevented()) {
      return;
    }
    if (open) {
      this.openDial();
    } else {
      this.closeDial();
    }
  }
  openPopup() {
    if (this.isOpen) {
      return;
    }
    const isIconFab = this.icon && !this.text;
    const rtl = this.rtl;
    const align2 = this.align;
    this.popupRef = this.popupService.open({
      anchor: this.element.nativeElement,
      animate: false,
      content: this.popupTemplate,
      anchorAlign: getAnchorAlign(align2, rtl),
      popupAlign: getPopupAlign(align2, rtl),
      popupClass: "k-fab-popup k-popup-transparent"
    });
    const popupElement = this.popupRef.popupElement;
    this.renderer.setStyle(popupElement, "box-shadow", "none");
    if (isIconFab) {
      this.subscriptions.add(this.popupRef.popupOpen.subscribe(() => this.positionPopup()));
    }
    this.ngZone.runOutsideAngular(() => {
      this.popupMouseDownListener = this.renderer.listen(popupElement, "mousedown", (event) => {
        event.preventDefault();
      });
    });
    this.popupRef.popupAnchorViewportLeave.subscribe(() => this.toggleDialWithEvents(false));
  }
  closePopup() {
    if (this.isOpen) {
      if (this.popupMouseDownListener) {
        this.popupMouseDownListener();
      }
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  openDial() {
    this.openPopup();
    this.focusService.focus(0);
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(true);
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "true");
  }
  closeDial() {
    if (this.dialItemAnimation && this.isValidAnimation()) {
      this.playAnimation(false);
      this.animationEnd.pipe(take(1)).subscribe(() => this.closePopup());
    } else {
      this.closePopup();
    }
    this.renderer.setAttribute(this.button.nativeElement, "aria-expanded", "false");
    this.focusService.resetFocus();
  }
  isValidAnimation() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean") {
      return animation.duration !== 0;
    }
    return true;
  }
  positionPopup() {
    if (this.dialItemTemplate) {
      return;
    }
    if (!this.popupRef) {
      return;
    }
    const fab = this.element.nativeElement;
    const fabWidth = fab.getBoundingClientRect().width;
    const popupEl = this.popupRef.popupElement;
    const icon = popupEl.querySelector(".k-fab-item-icon");
    if (!icon) {
      return;
    }
    const iconWidth = icon.getBoundingClientRect().width;
    const left = fabWidth / 2 - iconWidth / 2;
    const popupLeft = popupEl.getBoundingClientRect().left;
    const isEndAlign = this.align.horizontal === "end";
    const leftValue = isEndAlign ? popupLeft - left : left + popupLeft;
    const rtlLeftValue = isEndAlign ? left + popupLeft : popupLeft - left;
    popupEl.style.left = this.rtl ? `${rtlLeftValue}px` : `${leftValue}px`;
  }
  offsetStyles() {
    const hostElement = this.element.nativeElement;
    this.renderer.setStyle(hostElement, this.horizontalPosition, this.horizontalOffset);
    this.renderer.setStyle(hostElement, this.verticalPosition, this.verticalOffset);
  }
  get hasDialItems() {
    return isPresent2(this.dialItems) && this.dialItems.length !== 0;
  }
  /**
   * Gets the CSS prop name of the selected vertical position (`top`/`bottom`);
   */
  get verticalPosition() {
    return {
      top: "top",
      middle: "top",
      bottom: "bottom"
    }[this.align.vertical];
  }
  /**
   * Gets the offset according to the selected vertical position.
   */
  get verticalOffset() {
    if (this.align.vertical === "middle") {
      return this.offset.y === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.y})`;
    }
    return this.offset.y;
  }
  /**
   * Gets the CSS prop name of the selected horizontal position (`left`/`right`);
   */
  get horizontalPosition() {
    const {
      horizontal
    } = this.align;
    return {
      end: this.rtl ? "left" : "right",
      center: "left",
      start: this.rtl ? "right" : "left"
    }[horizontal];
  }
  /**
   * Gets the offset according to the selected horizontal position.
   */
  get horizontalOffset() {
    if (this.align.horizontal === "center") {
      return this.offset.x === DEFAULT_OFFSET2 ? "50%" : `calc(50% + ${this.offset.x})`;
    }
    return this.offset.x;
  }
  playerFor(element, animation) {
    const factory = this.builder.build(animation);
    return factory.create(element);
  }
  playAnimation(open) {
    const durationSettings = this.durationSettings();
    const animationSettings = {
      duration: durationSettings.duration,
      gap: durationSettings.gap,
      align: this.align
    };
    const animation = open ? openAnimation(animationSettings) : closeAnimation(animationSettings);
    let player = this.playerFor(this.popupRef.popupElement, animation);
    player.play();
    player.onDone(() => {
      if (player) {
        this.animationEnd.emit();
        player.destroy();
        player = null;
      }
    });
  }
  durationSettings() {
    return {
      duration: this.animationDuration(),
      gap: this.animationGap()
    };
  }
  animationGap() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent2(animation.gap)) {
      return animation.gap;
    }
    return DEFAULT_ITEM_GAP;
  }
  animationDuration() {
    const animation = this.dialItemAnimation;
    if (typeof animation !== "boolean" && isPresent2(animation.duration)) {
      return animation.duration;
    }
    return DEFAULT_DURATION2;
  }
  static ɵfac = function FloatingActionButtonComponent_Factory(t) {
    return new (t || _FloatingActionButtonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(AnimationBuilder), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _FloatingActionButtonComponent,
    selectors: [["kendo-floatingactionbutton"]],
    contentQueries: function FloatingActionButtonComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DialItemTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, FloatingActionButtonTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dialItemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fabTemplate = _t.first);
      }
    },
    viewQuery: function FloatingActionButtonComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 7);
        ɵɵviewQuery(_c7, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.popupTemplate = _t.first);
      }
    },
    hostVars: 5,
    hostBindings: function FloatingActionButtonComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-pos-fixed", ctx.fixedClass)("k-pos-absolute", ctx.absoluteClass);
      }
    },
    inputs: {
      themeColor: "themeColor",
      size: "size",
      rounded: "rounded",
      disabled: "disabled",
      align: "align",
      offset: "offset",
      positionMode: "positionMode",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      buttonClass: "buttonClass",
      dialClass: "dialClass",
      text: "text",
      dialItemAnimation: "dialItemAnimation",
      tabIndex: "tabIndex",
      dialItems: "dialItems"
    },
    outputs: {
      onBlur: "blur",
      onFocus: "focus",
      dialItemClick: "dialItemClick",
      open: "open",
      close: "close"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.floatingactionbutton"
    }]), ɵɵStandaloneFeature],
    decls: 6,
    vars: 18,
    consts: [["button", ""], ["popupTemplate", ""], ["type", "button", 1, "k-fab", "k-fab-solid", 3, "focus", "blur", "tabIndex", "ngClass", "disabled", "kendoEventsOutsideAngular", "scope"], [4, "ngIf"], [3, "ngTemplateOutlet"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon", 4, "ngIf"], ["class", "k-fab-text", 4, "ngIf"], ["innerCssClass", "k-fab-icon", 3, "name", "customFontClass", "svgIcon"], [1, "k-fab-text"], ["kendoDialList", "", "role", "menu", 3, "click", "id", "ngClass", "dialItems", "dialItemTemplate", "align", "kendoEventsOutsideAngular"]],
    template: function FloatingActionButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "button", 2, 0);
        ɵɵlistener("focus", function FloatingActionButtonComponent_Template_button_focus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.focusHandler());
        })("blur", function FloatingActionButtonComponent_Template_button_blur_0_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.blurHandler($event));
        });
        ɵɵtemplate(2, FloatingActionButtonComponent_2_Template, 1, 1, null, 3)(3, FloatingActionButtonComponent_ng_container_3_Template, 3, 2, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵtemplate(4, FloatingActionButtonComponent_ng_template_4_Template, 1, 10, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        ɵɵclassProp("k-disabled", ctx.disabled);
        ɵɵproperty("tabIndex", ctx.componentTabIndex)("ngClass", ctx.buttonClass)("disabled", ctx.disabled)("kendoEventsOutsideAngular", ɵɵpureFunction3(14, _c122, ctx.keyDownHandler, ctx.clickHandler, ctx.pointerdownHandler))("scope", ctx);
        ɵɵattribute("id", ctx.id)("aria-disabled", ctx.disabled)("aria-expanded", ctx.ariaExpanded)("aria-haspopup", ctx.ariaHasPopup)("aria-controls", ctx.ariaControls);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.fabTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.fabTemplate);
      }
    },
    dependencies: [NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet, IconWrapperComponent, DialListComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-floatingactionbutton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.floatingactionbutton"
      }],
      template: `
        <button
            #button
            [attr.id]="id"
            [tabIndex]="componentTabIndex"
            type="button"
            class="k-fab k-fab-solid"
            [class.k-disabled]="disabled"
            [ngClass]="buttonClass"
            [disabled]="disabled"
            [attr.aria-disabled]="disabled"
            [attr.aria-expanded]="ariaExpanded"
            [attr.aria-haspopup]="ariaHasPopup"
            [attr.aria-controls]="ariaControls"
            (focus)="focusHandler()"
            (blur)="blurHandler($event)"
            [kendoEventsOutsideAngular]="{
                keydown: keyDownHandler,
                click: clickHandler,
                pointerdown: pointerdownHandler
            }"
            [scope]="this"
        >
            <ng-template *ngIf="fabTemplate"
                [ngTemplateOutlet]="fabTemplate?.templateRef"
            >
            </ng-template>

            <ng-container *ngIf="!fabTemplate">
                <kendo-icon-wrapper
                    *ngIf="icon || iconClass || svgIcon"
                    [name]="icon"
                    innerCssClass="k-fab-icon"
                    [customFontClass]="iconClass"
                    [svgIcon]="svgIcon"></kendo-icon-wrapper>
                <span *ngIf="text" class="k-fab-text">{{ text }}</span>
            </ng-container>
        </button>

        <ng-template #popupTemplate>
            <ul
                kendoDialList
                role="menu"
                [id]="dialListId"
                [ngClass]="dialClass"
                [dialItems]="dialItems"
                [dialItemTemplate]='dialItemTemplate?.templateRef'
                [align]="align"
                [attr.aria-labelledby]="id"
                (click)="onItemClick($event)"
                [kendoEventsOutsideAngular]="{
                    keydown: keyDownHandler.bind(this),
                    focusout: focusOutHandler.bind(this)
                }"
            >
            </ul>
        </ng-template>
    `,
      standalone: true,
      imports: [NgClass, EventsOutsideAngularDirective, NgIf, NgTemplateOutlet, IconWrapperComponent, DialListComponent]
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }, {
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: AnimationBuilder
    }, {
      type: LocalizationService
    }];
  }, {
    fixedClass: [{
      type: HostBinding,
      args: ["class.k-pos-fixed"]
    }],
    absoluteClass: [{
      type: HostBinding,
      args: ["class.k-pos-absolute"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    button: [{
      type: ViewChild,
      args: ["button", {
        static: true
      }]
    }],
    popupTemplate: [{
      type: ViewChild,
      args: ["popupTemplate", {
        static: true
      }]
    }],
    dialItemTemplate: [{
      type: ContentChild,
      args: [DialItemTemplateDirective, {
        static: false
      }]
    }],
    fabTemplate: [{
      type: ContentChild,
      args: [FloatingActionButtonTemplateDirective, {
        static: false
      }]
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    positionMode: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    buttonClass: [{
      type: Input
    }],
    dialClass: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    dialItemAnimation: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    dialItems: [{
      type: Input
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    dialItemClick: [{
      type: Output,
      args: ["dialItemClick"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }]
  });
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * Specifies the text for the SplitButton `aria-label`.
   *
   * The `aria-label` text consists of two parts: the SplitButton text and a localizable string.
   * For example, for a SplitButton with the text `'Reply'`, the default `aria-label` is `'Reply splitbutton'`.
   *
   * To reorder the SplitButton text and the localizable part, use the `splitButtonLabel` property with a
   * placeholder for the button text, such as `'splitbutton for {buttonText}'`. The `{buttonText}` placeholder
   * is replaced internally with the current SplitButton text. For instance, the resulting `aria-label` is
   * rendered as `'splitbutton for Reply'`.
   *
   * @example
   * ```ts
   * <kendo-splitbutton>
   *     <kendo-splitbutton-messages
   *         splitButtonLabel="splitbutton for {buttonText}">
   *     </kendo-splitbutton-messages>
   * </kendo-splitbutton>
   * ```
   */
  splitButtonLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(t) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(t || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["kendo-splitbutton-messages-base"]],
    inputs: {
      splitButtonLabel: "splitButtonLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-splitbutton-messages-base"
    }]
  }], null, {
    splitButtonLabel: [{
      type: Input
    }]
  });
})();
var SplitButtonCustomMessagesComponent = class _SplitButtonCustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function SplitButtonCustomMessagesComponent_Factory(t) {
    return new (t || _SplitButtonCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitButtonCustomMessagesComponent,
    selectors: [["kendo-splitbutton-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _SplitButtonCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SplitButtonCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SplitButtonCustomMessagesComponent)
      }],
      selector: "kendo-splitbutton-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var LocalizedSplitButtonMessagesDirective = class _LocalizedSplitButtonMessagesDirective extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedSplitButtonMessagesDirective_Factory(t) {
    return new (t || _LocalizedSplitButtonMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedSplitButtonMessagesDirective,
    selectors: [["", "kendoSplitButtonLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedSplitButtonMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedSplitButtonMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedSplitButtonMessagesDirective)
      }],
      selector: "[kendoSplitButtonLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var NAVIGATION_SETTINGS = {
  useLeftRightArrows: true
};
var NAVIGATION_SETTINGS_PROVIDER = {
  provide: NAVIGATION_CONFIG,
  useValue: NAVIGATION_SETTINGS
};
var DEFAULT_ROUNDED = "medium";
var DEFAULT_FILL_MODE = "solid";
var SplitButtonComponent = class _SplitButtonComponent extends ListButton {
  localization;
  renderer;
  /**
   * Sets the text displayed within the SplitButton.
   */
  text = "";
  /**
   * Specifies an icon to display next to the button text ([see example]({% slug databinding_splitbutton %}#arrays-of-complex-data)).
   */
  icon = "";
  /**
   * Specifies an `SVGIcon` to display next to the button text.
   */
  svgIcon;
  /**
   * Specifies a custom CSS class for the icon displayed next to the button text ([see example]({% slug databinding_splitbutton %}#arrays-of-complex-data)).
   */
  iconClass;
  /**
   * Specifies the `type` attribute of the main button.
   */
  type = "button";
  /**
   * Specifies the URL of an image to display next to the button text ([see example]({% slug databinding_splitbutton %}#arrays-of-complex-data)).
   */
  imageUrl = "";
  /**
   * Configures the padding of the SplitButton ([see example]({% slug api_buttons_splitbuttoncomponent %}#size)).
   *
   * @default 'medium'
   */
  size = "medium";
  /**
   * Configures the border radius of the SplitButton ([see example]({% slug api_buttons_splitbuttoncomponent %}#rounded)).
   *
   * @default 'medium'
   */
  set rounded(rounded) {
    const newRounded = rounded ? rounded : DEFAULT_ROUNDED;
    this.handleClasses(newRounded, "rounded");
    this._rounded = newRounded;
  }
  get rounded() {
    return this._rounded;
  }
  /**
   * Configures the background and border styles of the SplitButton ([see example]({% slug api_buttons_splitbuttoncomponent %}#fillMode)).
   *
   * @default 'solid'
   */
  set fillMode(fillMode) {
    const newFillMode = fillMode ? fillMode : DEFAULT_FILL_MODE;
    this._fillMode = fillMode === "clear" ? "flat" : newFillMode;
  }
  get fillMode() {
    return this._fillMode;
  }
  /**
   * Configures the theme color of the SplitButton. The theme color applies to the background, border, and text ([see example]({% slug api_buttons_splitbuttoncomponent %}#themeColor)).
   *
   * @default 'base'
   */
  themeColor = "base";
  /**
   * Disables the SplitButton when set to `true` ([see example]({% slug databinding_splitbutton %}#arrays-of-complex-data)).
   */
  set disabled(value) {
    if (this.isOpen) {
      this.toggle(false);
    }
    this._disabled = value;
  }
  get disabled() {
    return this._disabled;
  }
  /**
   * Configures the popup settings of the SplitButton.
   */
  set popupSettings(settings) {
    this._popupSettings = Object.assign({
      animate: true,
      popupClass: ""
    }, settings);
  }
  get popupSettings() {
    return this._popupSettings;
  }
  /**
   * Specifies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) of the component.
   */
  tabIndex = 0;
  /**
   * Configures the text field of the button-list popup.
   */
  textField;
  /**
   * Sets the data for the SplitButton. Provide the data as an array-like list.
   */
  set data(data) {
    this._data = data || [];
  }
  get data() {
    if (!this._data) {
      this.data = [];
    }
    return this._data;
  }
  /**
   * Specifies the CSS classes for the button that opens the popup.
   * Supports values compatible with [`ngClass`](link:site.data.urls.angular['ngclassapi']).
   */
  arrowButtonClass;
  /**
   * Specifies the name of the font icon displayed on the button that opens the popup.
   */
  arrowButtonIcon = "caret-alt-down";
  /**
   * Specifies the [`SVGIcon`](slug:api_icons_svgiconcomponent) displayed on the button that opens the popup.
   */
  arrowButtonSvgIcon = caretAltDownIcon;
  /**
   * Sets attributes for the main button.
   */
  set buttonAttributes(buttonAttributes) {
    const newButtonAttributes = buttonAttributes ? buttonAttributes : null;
    this.handleButtonAttributes(newButtonAttributes);
    this._buttonAttributes = newButtonAttributes;
  }
  get buttonAttributes() {
    return this._buttonAttributes;
  }
  /**
   * Emits an event when the main button is clicked.
   */
  buttonClick = new EventEmitter();
  /**
   * Emits an event when an item in the drop-down list is clicked. The event data contains the clicked item's data.
   */
  itemClick = new EventEmitter();
  /**
   * Emits an event when the SplitButton gains focus.
   */
  onFocus = new EventEmitter();
  /**
   * Emits an event when the SplitButton is blurred.
   */
  onBlur = new EventEmitter();
  /**
   * Emits an event before the popup opens. This event is preventable.
   */
  open = new EventEmitter();
  /**
   * Emits an event before the popup closes. This event is preventable.
   */
  close = new EventEmitter();
  /**
   * Specifies a template to customize the content of the items in the drop-down list.
   */
  itemTemplate;
  activeArrow = false;
  listId = guid();
  /**
   * @hidden
   */
  get hasContent() {
    return this.button?.nativeElement.childElementCount > 0;
  }
  /**
   * @hidden
   */
  get active() {
    return this._active;
  }
  /**
   * @hidden
   */
  get componentTabIndex() {
    return this.disabled ? -1 : this.tabIndex;
  }
  buttonText = "";
  arrowButtonClicked = false;
  _rounded = DEFAULT_ROUNDED;
  _fillMode = DEFAULT_FILL_MODE;
  _buttonAttributes = null;
  documentMouseUpSub;
  set isFocused(value) {
    this._isFocused = value;
  }
  get isFocused() {
    return this._isFocused && !this._disabled && isDocumentAvailable() && this.wrapperContains(document.activeElement);
  }
  get widgetClasses() {
    return true;
  }
  get dir() {
    return this.direction;
  }
  /**
   * @hidden
   */
  get ariaLabel() {
    const localizationMsg = this.localization.get("splitButtonLabel") || "";
    return replaceMessagePlaceholder(localizationMsg, "buttonText", this.buttonText);
  }
  /**
   * @hidden
   */
  onButtonFocus(event) {
    if (!this._disabled) {
      !this._isFocused && this.onFocus.emit();
      this._isFocused = true;
      this.focusService.resetFocus();
      const relatedTargetInList = event.relatedTarget && closest(event.relatedTarget, ".k-popup kendo-button-list");
      if (this.openState && !relatedTargetInList) {
        this.focusService.focus(0);
      }
    }
  }
  /**
   * @hidden
   */
  onArrowButtonClick() {
    this.togglePopupVisibility();
    this.arrowButtonClicked = false;
    if (!this.isOpen) {
      this.focus();
    }
  }
  /**
   * @hidden
   */
  toggleButtonActiveState(enable) {
    this._active = enable;
  }
  /**
   * @hidden
   */
  toggleArrowButtonActiveState(enable) {
    this.arrowButtonClicked = true;
    this.activeArrow = enable;
  }
  /**
   * @hidden
   */
  onButtonClick() {
    this.buttonClick.emit();
  }
  /**
   * @hidden
   */
  onButtonBlur() {
    if (!this.isOpen && !this.arrowButtonClicked) {
      this.blurWrapper();
    }
  }
  /**
   * @hidden
   */
  keydown(event) {
    this.keyDownHandler(event, true);
    if (event.keyCode === Keys.Space) {
      this._active = true;
    }
  }
  /**
   * @hidden
   */
  keyup(event) {
    this._active = false;
    if (event.keyCode !== Keys.Space) {
      this.keyUpHandler(event);
    }
  }
  /**
   * @hidden
   */
  ngAfterViewInit() {
    this.containerService.container = this.container;
    this.containerService.template = this.popupTemplate;
    this.updateButtonText();
    this.handleClasses(this.rounded, "rounded");
    this.handleButtonAttributes(this.buttonAttributes);
  }
  /**
   * @hidden
   */
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("text")) {
      this.updateButtonText();
    }
    if (anyChanged(["text", "icon", "svgIcon", "iconClass", "imageUrl"], changes)) {
      this.toggleButtonIconClass();
    }
    if (isChanged("popupSettings", changes) && isPresent2(this.popupRef)) {
      const popup = this.popupRef.popup.instance;
      const newSettings = changes["popupSettings"].currentValue;
      popup.popupClass = newSettings.popupClass;
      popup.animate = newSettings.animate;
      popup.popupAlign = this.popupAlign;
    }
  }
  /**
   * @hidden
   */
  ngOnDestroy() {
    if (this.documentMouseUpSub) {
      this.documentMouseUpSub();
    }
  }
  /**
   * @hidden
   */
  onNavigationEnterUp(args) {
    if (args.target !== this.button.nativeElement) {
      super.onNavigationEnterUp(args);
    }
  }
  /**
   * @hidden
   */
  togglePopupVisibility() {
    if (isDocumentAvailable() && this.wrapperContains(document.activeElement) && this.arrowButtonClicked) {
      this.button.nativeElement.focus();
    }
    super.togglePopupVisibility();
  }
  /**
   * @hidden
   */
  wrapperContains(element) {
    return this.wrapper === element || this.wrapper.contains(element);
  }
  /**
   * @hidden
   */
  get anchorAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "bottom"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get popupAlign() {
    const align2 = {
      horizontal: this.popupSettings.align || "left",
      vertical: "top"
    };
    if (this.direction === "rtl" && !isPresent2(this.popupSettings.align)) {
      align2.horizontal = "right";
    }
    return align2;
  }
  /**
   * @hidden
   */
  get isIconButton() {
    const hasIcon = this.icon || this.svgIcon || this.iconClass || this.imageUrl;
    const hasTextContent = isDocumentAvailable() && this.button?.nativeElement.textContent.trim().length > 0;
    return hasIcon && !hasTextContent;
  }
  /**
   * Focuses the SplitButton component.
   */
  focus() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.focus();
    }
  }
  /**
   * Blurs the SplitButton component.
   */
  blur() {
    if (isDocumentAvailable()) {
      this.button.nativeElement.blur();
      this.blurWrapper();
    }
  }
  constructor(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, renderer, containerService) {
    super(focusService, navigationService, wrapperRef, zone, popupService, elRef, localization, cdr, containerService);
    this.localization = localization;
    this.renderer = renderer;
    this._itemClick = this.itemClick;
    this._blur = this.onBlur;
    zone.runOutsideAngular(() => {
      this.documentMouseUpSub = this.renderer.listen("document", "mouseup", () => {
        if (this.active) {
          zone.run(() => this._active = false);
        }
        if (this.activeArrow) {
          zone.run(() => this.activeArrow = false);
        }
      });
    });
  }
  /**
   * Returns the current open state of the popup.
   */
  get isOpen() {
    return this.openState;
  }
  updateButtonText() {
    if (isDocumentAvailable()) {
      const innerText = this.wrapper.innerText.split("\n").join("").trim();
      setTimeout(() => this.buttonText = innerText, 0);
    }
  }
  handleClasses(value, input) {
    const elem = this.wrapperRef.nativeElement;
    const classes = getStylingClasses("button", input, this[input], value);
    if (classes.toRemove) {
      this.renderer.removeClass(elem, classes.toRemove);
    }
    if (classes.toAdd) {
      this.renderer.addClass(elem, classes.toAdd);
    }
  }
  toggleButtonIconClass() {
    this.button.nativeElement.classList[this.isIconButton ? "add" : "remove"]("k-button-icon");
  }
  handleButtonAttributes(newButtonAttributes) {
    const mainButton = this.button.nativeElement;
    if (isPresent2(this.buttonAttributes) && isPresent2(mainButton)) {
      for (const attr in this.buttonAttributes) {
        this.renderer.removeAttribute(mainButton, attr, this.buttonAttributes[attr]);
      }
    }
    if (isPresent2(newButtonAttributes) && isPresent2(mainButton)) {
      for (const attr in newButtonAttributes) {
        this.renderer.setAttribute(mainButton, attr, newButtonAttributes[attr]);
      }
    }
  }
  static ɵfac = function SplitButtonComponent_Factory(t) {
    return new (t || _SplitButtonComponent)(ɵɵdirectiveInject(FocusService), ɵɵdirectiveInject(NavigationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(PopupContainerService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SplitButtonComponent,
    selectors: [["kendo-splitbutton"]],
    contentQueries: function SplitButtonComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ButtonItemTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
      }
    },
    hostVars: 7,
    hostBindings: function SplitButtonComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown", function SplitButtonComponent_keydown_HostBindingHandler($event) {
          return ctx.keydown($event);
        })("keyup", function SplitButtonComponent_keyup_HostBindingHandler($event) {
          return ctx.keyup($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("dir", ctx.dir);
        ɵɵclassProp("k-focus", ctx.isFocused)("k-split-button", ctx.widgetClasses)("k-button-group", ctx.widgetClasses);
      }
    },
    inputs: {
      text: "text",
      icon: "icon",
      svgIcon: "svgIcon",
      iconClass: "iconClass",
      type: "type",
      imageUrl: "imageUrl",
      size: "size",
      rounded: "rounded",
      fillMode: "fillMode",
      themeColor: "themeColor",
      disabled: "disabled",
      popupSettings: "popupSettings",
      tabIndex: "tabIndex",
      textField: "textField",
      data: "data",
      arrowButtonClass: "arrowButtonClass",
      arrowButtonIcon: "arrowButtonIcon",
      arrowButtonSvgIcon: "arrowButtonSvgIcon",
      buttonAttributes: "buttonAttributes"
    },
    outputs: {
      buttonClick: "buttonClick",
      itemClick: "itemClick",
      onFocus: "focus",
      onBlur: "blur",
      open: "open",
      close: "close"
    },
    exportAs: ["kendoSplitButton"],
    standalone: true,
    features: [ɵɵProvidersFeature([FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.splitbutton"
    }, PopupContainerService, {
      provide: MultiTabStop,
      useExisting: forwardRef(() => _SplitButtonComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c12,
    decls: 12,
    vars: 30,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2022_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0 = goog.getMsg("{$interpolation}", {
          "interpolation": "�0�"
        }, {
          original_code: {
            "interpolation": "{{ '{buttonText} splitbutton' }}"
          }
        });
        i18n_0 = MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_BUTTONS_FESM2022_PROGRESS_KENDO_ANGULAR_BUTTONS_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label:${"�0�"}:INTERPOLATION:`;
      }
      return [["button", ""], ["arrowButton", ""], ["popupTemplate", ""], ["container", ""], ["splitButtonLabel", i18n_0], ["kendoSplitButtonLocalizedMessages", "", 6, "splitButtonLabel"], ["kendoButton", "", 3, "focus", "click", "blur", "mousedown", "mouseup", "type", "tabindex", "disabled", "size", "rounded", "fillMode", "themeColor", "icon", "svgIcon", "iconClass", "imageUrl", "ngClass"], ["class", "k-button-text", 4, "ngIf"], ["kendoButton", "", "type", "button", "aria-hidden", "true", 1, "k-split-button-arrow", 3, "click", "mousedown", "mouseup", "keydown.enter", "ngClass", "disabled", "icon", "svgIcon", "size", "rounded", "fillMode", "themeColor", "tabindex"], [1, "k-button-text"], [3, "onItemClick", "keydown", "keyup", "id", "data", "textField", "itemTemplate", "size"]];
    },
    template: function SplitButtonComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef();
        ɵɵelementContainerStart(0, 5);
        ɵɵi18nAttributes(1, 4);
        ɵɵelementContainerEnd();
        ɵɵelementStart(2, "button", 6, 0);
        ɵɵlistener("focus", function SplitButtonComponent_Template_button_focus_2_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onButtonFocus($event));
        })("click", function SplitButtonComponent_Template_button_click_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onButtonClick());
        })("blur", function SplitButtonComponent_Template_button_blur_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onButtonBlur());
        })("mousedown", function SplitButtonComponent_Template_button_mousedown_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggleButtonActiveState(true));
        })("mouseup", function SplitButtonComponent_Template_button_mouseup_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggleButtonActiveState(false));
        });
        ɵɵtemplate(4, SplitButtonComponent_span_4_Template, 2, 1, "span", 7);
        ɵɵprojection(5);
        ɵɵelementEnd();
        ɵɵelementStart(6, "button", 8, 1);
        ɵɵlistener("click", function SplitButtonComponent_Template_button_click_6_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onArrowButtonClick());
        })("mousedown", function SplitButtonComponent_Template_button_mousedown_6_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggleArrowButtonActiveState(true));
        })("mouseup", function SplitButtonComponent_Template_button_mouseup_6_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.toggleArrowButtonActiveState(false));
        })("keydown.enter", function SplitButtonComponent_Template_button_keydown_enter_6_listener($event) {
          ɵɵrestoreView(_r1);
          $event.stopImmediatePropagation();
          return ɵɵresetView($event.preventDefault());
        });
        ɵɵelementEnd();
        ɵɵtemplate(8, SplitButtonComponent_ng_template_8_Template, 1, 6, "ng-template", null, 2, ɵɵtemplateRefExtractor);
        ɵɵelementContainer(10, null, 3);
      }
      if (rf & 2) {
        ɵɵi18nExp("{buttonText} splitbutton");
        ɵɵi18nApply(1);
        ɵɵadvance(2);
        ɵɵclassProp("k-active", ctx.active);
        ɵɵproperty("type", ctx.type)("tabindex", ctx.componentTabIndex)("disabled", ctx.disabled)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("icon", ctx.icon)("svgIcon", ctx.svgIcon)("iconClass", ctx.iconClass)("imageUrl", ctx.imageUrl)("ngClass", ctx.buttonClass);
        ɵɵattribute("aria-expanded", ctx.openState)("aria-controls", ctx.listId)("aria-label", ctx.ariaLabel);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.text);
        ɵɵadvance(2);
        ɵɵclassProp("k-active", ctx.activeArrow);
        ɵɵproperty("ngClass", ctx.arrowButtonClass)("disabled", ctx.disabled)("icon", ctx.arrowButtonIcon)("svgIcon", ctx.arrowButtonSvgIcon)("size", ctx.size)("rounded", ctx.rounded)("fillMode", ctx.fillMode)("themeColor", ctx.themeColor)("tabindex", -1);
      }
    },
    dependencies: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, NgIf, ListComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoSplitButton",
      providers: [FocusService, NavigationService, NAVIGATION_SETTINGS_PROVIDER, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.splitbutton"
      }, PopupContainerService, {
        provide: MultiTabStop,
        useExisting: forwardRef(() => SplitButtonComponent)
      }],
      selector: "kendo-splitbutton",
      template: `
        <ng-container kendoSplitButtonLocalizedMessages
            i18n-splitButtonLabel="kendo.splitbutton.splitButtonLabel|The text for the SplitButton aria-label"
            splitButtonLabel="{{ '{buttonText} splitbutton' }}"
        >
        </ng-container>
        <button
            kendoButton
            #button
            [type]="type"
            [tabindex]="componentTabIndex"
            [disabled]="disabled"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [icon]="icon"
            [svgIcon]="svgIcon"
            [class.k-active]="active"
            [iconClass]="iconClass"
            [imageUrl]="imageUrl"
            [ngClass]="buttonClass"
            (focus)="onButtonFocus($event)"
            (click)="onButtonClick()"
            (blur)="onButtonBlur()"
            (mousedown)="toggleButtonActiveState(true)"
            (mouseup)="toggleButtonActiveState(false)"
            [attr.aria-expanded]="openState"
            [attr.aria-controls]="listId"
            [attr.aria-label]="ariaLabel"
        >
            <span *ngIf="text" class="k-button-text">
                {{ text }} </span><ng-content></ng-content>
        </button>
        <button kendoButton #arrowButton type="button"
            class="k-split-button-arrow"
            [class.k-active]="activeArrow"
            [ngClass]="arrowButtonClass"
            [disabled]="disabled"
            [icon]="arrowButtonIcon"
            [svgIcon]="arrowButtonSvgIcon"
            [size]="size"
            [rounded]="rounded"
            [fillMode]="fillMode"
            [themeColor]="themeColor"
            [tabindex]="-1"
            aria-hidden="true"
            (click)="onArrowButtonClick()"
            (mousedown)="toggleArrowButtonActiveState(true)"
            (mouseup)="toggleArrowButtonActiveState(false)"
            (keydown.enter)="$event.stopImmediatePropagation(); $event.preventDefault();"
        ></button>
        <ng-template #popupTemplate>
            <kendo-button-list
                [id]="listId"
                [data]="data"
                [textField]="textField"
                [itemTemplate]="itemTemplate"
                (onItemClick)="onItemClick($event)"
                (keydown)="keyDownHandler($event)"
                (keyup)="keyUpHandler($event)"
                [attr.dir]="dir"
                [size]="size"
            >
            </kendo-button-list>
        </ng-template>
        <ng-container #container></ng-container>
    `,
      standalone: true,
      imports: [LocalizedSplitButtonMessagesDirective, ButtonComponent, NgClass, NgIf, ListComponent]
    }]
  }], function() {
    return [{
      type: FocusService
    }, {
      type: NavigationService
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: PopupService
    }, {
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: PopupContainerService
    }];
  }, {
    text: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    svgIcon: [{
      type: Input
    }],
    iconClass: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    imageUrl: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    fillMode: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    textField: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    arrowButtonClass: [{
      type: Input
    }],
    arrowButtonIcon: [{
      type: Input
    }],
    arrowButtonSvgIcon: [{
      type: Input
    }],
    buttonAttributes: [{
      type: Input
    }],
    buttonClick: [{
      type: Output
    }],
    itemClick: [{
      type: Output
    }],
    onFocus: [{
      type: Output,
      args: ["focus"]
    }],
    onBlur: [{
      type: Output,
      args: ["blur"]
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: [ButtonItemTemplateDirective]
    }],
    isFocused: [{
      type: HostBinding,
      args: ["class.k-focus"]
    }],
    widgetClasses: [{
      type: HostBinding,
      args: ["class.k-split-button"]
    }, {
      type: HostBinding,
      args: ["class.k-button-group"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    keyup: [{
      type: HostListener,
      args: ["keyup", ["$event"]]
    }]
  });
})();
var KENDO_BUTTON = [ButtonComponent];
var KENDO_BUTTONGROUP = [ButtonComponent, ButtonGroupComponent];
var KENDO_DROPDOWNBUTTON = [DropDownButtonComponent, ButtonItemTemplateDirective];
var KENDO_CHIP = [ChipComponent];
var KENDO_CHIPLIST = [ChipComponent, ChipListComponent];
var KENDO_FLOATINGACTIONBUTTON = [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective];
var KENDO_SPLITBUTTON = [SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective];
var KENDO_BUTTONS = [...KENDO_BUTTON, ...KENDO_BUTTONGROUP, ...KENDO_DROPDOWNBUTTON, ...KENDO_CHIP, ...KENDO_CHIPLIST, ...KENDO_FLOATINGACTIONBUTTON, ...KENDO_SPLITBUTTON];
var ButtonGroupModule = class _ButtonGroupModule {
  static ɵfac = function ButtonGroupModule_Factory(t) {
    return new (t || _ButtonGroupModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ButtonGroupModule,
    imports: [ButtonComponent, ButtonGroupComponent],
    exports: [ButtonComponent, ButtonGroupComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonGroupModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BUTTONGROUP],
      imports: [...KENDO_BUTTONGROUP],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonModule = class _ButtonModule {
  static ɵfac = function ButtonModule_Factory(t) {
    return new (t || _ButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ButtonModule,
    imports: [ButtonComponent],
    exports: [ButtonComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ButtonComponent],
      exports: [ButtonComponent],
      providers: [IconsService]
    }]
  }], null, null);
})();
var ButtonsModule = class _ButtonsModule {
  static ɵfac = function ButtonsModule_Factory(t) {
    return new (t || _ButtonsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ButtonsModule,
    imports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, ToggleButtonTabStopDirective],
    exports: [ButtonComponent, ButtonComponent, ButtonGroupComponent, DropDownButtonComponent, ButtonItemTemplateDirective, ChipComponent, ChipComponent, ChipListComponent, FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective, SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, ToggleButtonTabStopDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [ButtonComponent, ButtonComponent, DropDownButtonComponent, ChipComponent, ChipComponent, FloatingActionButtonComponent, SplitButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_BUTTONS, ...KENDO_TOGGLEBUTTONTABSTOP],
      exports: [...KENDO_BUTTONS, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var SplitButtonModule = class _SplitButtonModule {
  static ɵfac = function SplitButtonModule_Factory(t) {
    return new (t || _SplitButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SplitButtonModule,
    imports: [SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, ToggleButtonTabStopDirective],
    exports: [SplitButtonComponent, SplitButtonCustomMessagesComponent, ToggleButtonTabStopDirective, ButtonItemTemplateDirective, ToggleButtonTabStopDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [SplitButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SplitButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SPLITBUTTON, ...KENDO_TOGGLEBUTTONTABSTOP],
      imports: [...KENDO_SPLITBUTTON, ...KENDO_TOGGLEBUTTONTABSTOP],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var DropDownButtonModule = class _DropDownButtonModule {
  static ɵfac = function DropDownButtonModule_Factory(t) {
    return new (t || _DropDownButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _DropDownButtonModule,
    imports: [DropDownButtonComponent, ButtonItemTemplateDirective],
    exports: [DropDownButtonComponent, ButtonItemTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [DropDownButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropDownButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_DROPDOWNBUTTON],
      imports: [...KENDO_DROPDOWNBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var ChipModule = class _ChipModule {
  static ɵfac = function ChipModule_Factory(t) {
    return new (t || _ChipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ChipModule,
    imports: [ChipComponent, ChipListComponent],
    exports: [ChipComponent, ChipListComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ChipComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CHIPLIST],
      imports: [...KENDO_CHIPLIST],
      providers: [IconsService]
    }]
  }], null, null);
})();
var FloatingActionButtonModule = class _FloatingActionButtonModule {
  static ɵfac = function FloatingActionButtonModule_Factory(t) {
    return new (t || _FloatingActionButtonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FloatingActionButtonModule,
    imports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective],
    exports: [FloatingActionButtonComponent, DialItemTemplateDirective, FloatingActionButtonTemplateDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, PopupService, ResizeBatchService],
    imports: [FloatingActionButtonComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FloatingActionButtonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_FLOATINGACTIONBUTTON],
      imports: [...KENDO_FLOATINGACTIONBUTTON],
      providers: [IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();

export {
  document_default,
  windowViewport,
  offset_default,
  scrollPosition,
  position_with_scroll_default,
  POPUP_CONTAINER,
  PopupService,
  ButtonComponent,
  PreventableEvent,
  ButtonGroupComponent,
  ChipComponent,
  ChipListComponent,
  ButtonItemTemplateDirective,
  FocusableDirective,
  ListComponent,
  DropDownButtonComponent,
  DialItemTemplateDirective,
  FloatingActionButtonTemplateDirective,
  FloatingActionButtonComponent,
  SplitButtonCustomMessagesComponent,
  LocalizedSplitButtonMessagesDirective,
  SplitButtonComponent,
  KENDO_BUTTON,
  KENDO_BUTTONGROUP,
  KENDO_DROPDOWNBUTTON,
  KENDO_CHIP,
  KENDO_CHIPLIST,
  KENDO_FLOATINGACTIONBUTTON,
  KENDO_SPLITBUTTON,
  KENDO_BUTTONS,
  ButtonGroupModule,
  ButtonModule,
  ButtonsModule,
  SplitButtonModule,
  DropDownButtonModule,
  ChipModule,
  FloatingActionButtonModule
};
//# sourceMappingURL=chunk-ZV3R3EPT.js.map
