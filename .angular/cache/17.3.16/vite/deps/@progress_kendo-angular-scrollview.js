import {
  chevronLeftIcon,
  chevronRightIcon
} from "./chunk-2A7OSQWA.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-2RQ6XJGS.js";
import {
  DraggableDirective,
  Keys
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
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-PMNJ5QTY.js";
import "./chunk-RETLQKIM.js";
import "./chunk-6QM5PHEX.js";
import {
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-STNL7G5M.js";
import {
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  TemplateRef,
  ViewChild,
  forwardRef,
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
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵi18nApply,
  ɵɵi18nAttributes,
  ɵɵi18nExp,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DTS3OAND.js";
import {
  Subscription
} from "./chunk-BTNZXMHM.js";
import "./chunk-QEJIEICB.js";
import "./chunk-XWLXMCJQ.js";

// node_modules/@progress/kendo-angular-scrollview/fesm2022/progress-kendo-angular-scrollview.mjs
function ScrollViewPagerComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 2);
    ɵɵlistener("click", function ScrollViewPagerComponent_span_1_Template_span_click_0_listener() {
      const i_r2 = ɵɵrestoreView(_r1).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.indexChange(i_r2));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.itemClass(i_r2));
    ɵɵattribute("aria-label", ctx_r2.pagerButtonLabel(i_r2 + 1));
  }
}
var _c0 = ["itemWrapper"];
var _c1 = ["prevButton"];
var _c2 = ["nextButton"];
var _c3 = (a0) => ({
  item: a0
});
var _c4 = (a0) => ({
  "height": a0
});
function ScrollViewComponent_div_5_ng_template_1_Template(rf, ctx) {
}
function ScrollViewComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 9);
    ɵɵtemplate(1, ScrollViewComponent_div_5_ng_template_1_Template, 0, 0, "ng-template", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r3.inlineListItemStyles(i_r3));
    ɵɵattribute("aria-hidden", i_r3 !== 1);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r3.itemTemplateRef)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c3, item_r2));
  }
}
function ScrollViewComponent_div_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 15, 1);
    ɵɵlistener("click", function ScrollViewComponent_div_6_span_1_Template_span_click_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.leftArrowClick());
    });
    ɵɵelement(2, "kendo-icon-wrapper", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-controls", ctx_r3.scrollviewId);
    ɵɵadvance(2);
    ɵɵproperty("name", ctx_r3.prevButtonArrowIcon)("svgIcon", ctx_r3.prevButtonArrowSVGIcon);
  }
}
function ScrollViewComponent_div_6_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 17, 2);
    ɵɵlistener("click", function ScrollViewComponent_div_6_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.rightArrowClick());
    });
    ɵɵelement(2, "kendo-icon-wrapper", 16);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵattribute("aria-controls", ctx_r3.scrollviewId);
    ɵɵadvance(2);
    ɵɵproperty("name", ctx_r3.nextButtonArrowIcon)("svgIcon", ctx_r3.nextButtonArrowSVGIcon);
  }
}
function ScrollViewComponent_div_6_kendo_scrollview_pager_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "kendo-scrollview-pager", 18);
    ɵɵlistener("pagerIndexChange", function ScrollViewComponent_div_6_kendo_scrollview_pager_3_Template_kendo_scrollview_pager_pagerIndexChange_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r3 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r3.pageChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵproperty("data", ctx_r3.data)("activeIndex", ctx_r3.activeIndex);
  }
}
function ScrollViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 11);
    ɵɵtemplate(1, ScrollViewComponent_div_6_span_1_Template, 3, 3, "span", 12)(2, ScrollViewComponent_div_6_span_2_Template, 3, 3, "span", 13)(3, ScrollViewComponent_div_6_kendo_scrollview_pager_3_Template, 1, 2, "kendo-scrollview-pager", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c4, ctx_r3.height));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.arrows && ctx_r3.displayLeftArrow());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.arrows && ctx_r3.displayRightArrow());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.pageable);
  }
}
var Dir;
(function(Dir2) {
  Dir2[Dir2["Next"] = 1] = "Next";
  Dir2[Dir2["Prev"] = -1] = "Prev";
})(Dir || (Dir = {}));
var packageMetadata = {
  name: "@progress/kendo-angular-scrollview",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1749540401,
  version: "19.1.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var iterator = getIterator();
function getIterator() {
  if (typeof Symbol === "function" && Symbol.iterator) {
    return Symbol.iterator;
  }
  const keys = Object.getOwnPropertyNames(Map.prototype);
  const proto = Map.prototype;
  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    if (key !== "entries" && key !== "size" && proto[key] === proto.entries) {
      return key;
    }
  }
}
var EMPTY_OBJ = {};
var DataResultIterator = class {
  source;
  index;
  endless;
  pageIndex;
  rtl = false;
  constructor(source, index, endless, pageIndex, rtl) {
    this.source = source ? source : [];
    this.index = index ? index : 0;
    this.endless = endless;
    this.pageIndex = pageIndex;
    this.rtl = rtl;
  }
  get data() {
    const itemCount = this.total;
    let result;
    if (this.endless) {
      result = [this.source[(this.index - 1 + itemCount) % itemCount], this.source[this.index % itemCount], this.source[(this.index + 1 + itemCount) % itemCount]];
    } else {
      const data = [EMPTY_OBJ, ...this.source, EMPTY_OBJ];
      result = data.slice(this.index, this.index + 3);
    }
    if (this.pageIndex !== null) {
      const isForward = this.pageIndex > this.index;
      result[isForward ? 2 : 0] = this.source[this.pageIndex];
    }
    return this.rtl ? result.reverse() : result;
  }
  get total() {
    return this.source.length;
  }
  canMoveNext() {
    return this.endless || this.index < this.total - 1;
  }
  canMovePrev() {
    return this.endless || this.index > 0;
  }
  [iterator]() {
    return this.data[iterator]();
  }
};
var DataCollection = class {
  accessor;
  constructor(accessor) {
    this.accessor = accessor;
  }
  get length() {
    return this.accessor().data.length;
  }
  get total() {
    return this.accessor().total;
  }
  item(index) {
    return this.accessor().data[index];
  }
  canMoveNext() {
    return this.accessor().canMoveNext();
  }
  canMovePrev() {
    return this.accessor().canMovePrev();
  }
  [Symbol.iterator]() {
    return this.accessor()[Symbol.iterator]();
  }
};
var ScrollViewPagerComponent = class _ScrollViewPagerComponent {
  localization;
  activeIndex;
  data;
  pagerIndexChange = new EventEmitter();
  constructor(localization) {
    this.localization = localization;
  }
  itemClass(idx2) {
    return {
      "k-primary": idx2 === this.activeIndex
    };
  }
  indexChange(selectedIndex) {
    this.pagerIndexChange.emit(selectedIndex);
  }
  pagerButtonLabel(itemIndex) {
    const localizationMsg = this.localization.get("pagerButtonLabel") || "";
    return this.replaceMessagePlaceholder(localizationMsg, "itemIndex", itemIndex.toString());
  }
  replaceMessagePlaceholder(message, name, value) {
    return message.replace(new RegExp(`{\\s*${name}\\s*}`, "g"), value);
  }
  static ɵfac = function ScrollViewPagerComponent_Factory(t) {
    return new (t || _ScrollViewPagerComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollViewPagerComponent,
    selectors: [["kendo-scrollview-pager"]],
    inputs: {
      activeIndex: "activeIndex",
      data: "data"
    },
    outputs: {
      pagerIndexChange: "pagerIndexChange"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "k-scrollview-nav"], ["role", "button", "class", "k-link", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "button", 1, "k-link", 3, "click", "ngClass"]],
    template: function ScrollViewPagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, ScrollViewPagerComponent_span_1_Template, 1, 2, "span", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.data);
      }
    },
    dependencies: [NgForOf, NgClass],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewPagerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-scrollview-pager",
      template: `
      <div class="k-scrollview-nav">
        <span [attr.aria-label]="pagerButtonLabel(i + 1)" role="button" class="k-link" *ngFor="let item of data; let i = index"
            [ngClass]="itemClass(i)"
            (click)="indexChange(i)">
        </span>
      </div>
    `,
      standalone: true,
      imports: [NgForOf, NgClass]
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    activeIndex: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    pagerIndexChange: [{
      type: Output
    }]
  });
})();
var ScrollViewMessages = class _ScrollViewMessages extends ComponentMessages {
  /**
   * The label of the buttons in the ScrollView pager. By default they follow the pattern 'Item {itemIndex}'.
   * The default label text when the current item is 1 will be 'Item 1'.
   */
  pagerButtonLabel;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵScrollViewMessages_BaseFactory;
    return function ScrollViewMessages_Factory(t) {
      return (ɵScrollViewMessages_BaseFactory || (ɵScrollViewMessages_BaseFactory = ɵɵgetInheritedFactory(_ScrollViewMessages)))(t || _ScrollViewMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ScrollViewMessages,
    selectors: [["kendo-scrollview-messages-base"]],
    inputs: {
      pagerButtonLabel: "pagerButtonLabel"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewMessages, [{
    type: Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: "kendo-scrollview-messages-base"
    }]
  }], null, {
    pagerButtonLabel: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends ScrollViewMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedMessagesDirective_Factory(t) {
    return new (t || _LocalizedMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedMessagesDirective,
    selectors: [["", "kendoScrollViewLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ScrollViewMessages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ScrollViewMessages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: "[kendoScrollViewLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var idx = 0;
var ScrollViewComponent = class _ScrollViewComponent {
  element;
  localization;
  ngZone;
  renderer;
  /**
   * @hidden
   */
  chevronLeftIcon = chevronLeftIcon;
  /**
   * @hidden
   */
  chevronRightIcon = chevronRightIcon;
  /**
   * Provides the data source for the ScrollView ([see example]({% slug datasources_scrollview %})).
   */
  data = [];
  /**
   * Represents the current item index ([see example]({% slug activeitems_scrollview %})).
   */
  set activeIndex(value) {
    this.index = this._activeIndex = value;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  /**
   * Sets the width of the ScrollView ([see example]({% slug dimensions_scrollview %})).
   * By default, the width is not set and you have to explicitly define the `width` value.
   */
  width;
  /**
   * Sets the height of the ScrollView ([see example]({% slug dimensions_scrollview %})).
   * By default, the height is not set and you have to explicitly define the `height` value.
   */
  height;
  /**
   * Enables or disables the endless scrolling mode in which the data source items are endlessly looped
   * ([see example]({% slug endlessscrolling_scrollview %})). By default, `endless` is set to `false`
   * and the endless scrolling mode is disabled.
   */
  endless = false;
  /**
   * Sets `pagerOverlay` to one of three possible values: `dark`, `light` or `none`.
   * By default, the pager overlay is set to `none`.
   */
  pagerOverlay = "none";
  /**
   * Enables or disables the built-in animations ([see example]({% slug animations_scrollview %})).
   * By default, `animate` is set to `true` and animations are enabled.
   */
  animate = true;
  /**
   * Enables or disables the built-in pager ([see example]({% slug paging_scrollview %})).
   * By default, `pageable` is set to `false` and paging is disabled.
   */
  pageable = false;
  /**
   * Enables or disables the built-in navigation arrows ([see example]({% slug arrows_scrollview %})).
   * By default, `arrows` is set to `false` and arrows are disabled.
   */
  arrows = false;
  /**
   * Fires after the current item is changed.
   */
  itemChanged = new EventEmitter();
  /**
   * Fires after the activeIndex has changed. Allows for two-way binding of the activeIndex property.
   */
  activeIndexChange = new EventEmitter();
  itemTemplateRef;
  itemWrapper;
  prevButton;
  nextButton;
  scrollViewClass = true;
  scrollViewRole = "application";
  scrollViewRoleDescription = "carousel";
  get scrollViewLightOverlayClass() {
    return this.pagerOverlay === "light";
  }
  get scrollViewDarkOverlayClass() {
    return this.pagerOverlay === "dark";
  }
  get hostWidth() {
    return this.width;
  }
  get hostHeight() {
    return this.height;
  }
  tabIndex = 0;
  ariaLive = "assertive";
  get dir() {
    return this.direction;
  }
  touchAction = "pan-y pinch-zoom";
  animationState = null;
  view = new DataCollection(() => new DataResultIterator(this.data, this.activeIndex, this.endless, this.pageIndex, this.isRTL));
  /**
   * @hidden
   */
  scrollviewId;
  isDataSourceEmpty = false;
  subs = new Subscription();
  _activeIndex = 0;
  index = 0;
  initialTouchCoordinate;
  pageIndex = null;
  transforms = ["translateX(-100%)", "translateX(0%)", "translateX(100%)"];
  get direction() {
    return this.localization.rtl ? "rtl" : "ltr";
  }
  constructor(element, localization, ngZone, renderer) {
    this.element = element;
    this.localization = localization;
    this.ngZone = ngZone;
    this.renderer = renderer;
    validatePackage(packageMetadata);
  }
  ngOnInit() {
    this.subs.add(this.renderer.listen(this.element.nativeElement, "keydown", (event) => this.keyDown(event)));
    if (this.arrows) {
      this.scrollviewId = `k-scrollview-wrap-${++idx}`;
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  ngOnChanges(_) {
    if (this.data && this.data.length === 0) {
      this.activeIndex = Math.max(Math.min(this.activeIndex, this.view.total - 1), 0);
    }
  }
  /**
   * Navigates the ScrollView to the previous item.
   */
  prev() {
    this.navigate(Dir.Prev);
  }
  /**
   * Navigates the ScrollView to the next item.
   */
  next() {
    this.navigate(Dir.Next);
  }
  /**
   * @hidden
   */
  transitionEndHandler(e) {
    this.animationState = null;
    if (e.toState === "left" || e.toState === "right") {
      if (this.pageIndex !== null) {
        this.activeIndex = this.pageIndex;
        this.pageIndex = null;
      }
      this.activeIndex = this.index;
      this.activeIndexChange.emit(this.activeIndex);
      this.itemChanged.emit({
        index: this.activeIndex,
        item: this.view.item(1)
      });
    }
  }
  /**
   * @hidden
   */
  handlePress(e) {
    this.initialTouchCoordinate = e.pageX;
  }
  /**
   * @hidden
   */
  handleDrag(e) {
    const deltaX = e.pageX - this.initialTouchCoordinate;
    if (!this.animationState && !this.isDragForbidden(deltaX) && this.draggedInsideBounds(deltaX)) {
      this.renderer.setStyle(this.itemWrapper.nativeElement, "transform", `translateX(${deltaX}px)`);
    }
  }
  /**
   * @hidden
   */
  handleRelease(e) {
    const deltaX = e.pageX - this.initialTouchCoordinate;
    if (this.isDragForbidden(deltaX)) {
      return;
    }
    this.ngZone.run(() => {
      if (this.draggedEnoughToNavigate(deltaX)) {
        if (this.isRTL) {
          this.changeIndex(deltaX < 0 ? Dir.Prev : Dir.Next);
        } else {
          this.changeIndex(deltaX > 0 ? Dir.Prev : Dir.Next);
        }
        if (!this.animate) {
          this.renderer.removeStyle(this.itemWrapper.nativeElement, "transform");
          this.activeIndexChange.emit(this.activeIndex);
          this.itemChanged.emit({
            index: this.activeIndex,
            item: this.view.item(1)
          });
        }
      } else {
        if (this.animate && deltaX) {
          this.animationState = "center";
        } else {
          this.renderer.removeStyle(this.itemWrapper.nativeElement, "transform");
        }
      }
    });
  }
  /**
   * @hidden
   */
  pageChange(idx2) {
    if (!this.animationState && this.activeIndex !== idx2) {
      if (this.animate) {
        this.pageIndex = idx2;
        if (this.isRTL) {
          this.animationState = this.pageIndex > this.index ? "right" : "left";
        } else {
          this.animationState = this.pageIndex > this.index ? "left" : "right";
        }
      } else {
        this.activeIndex = idx2;
      }
    }
  }
  /**
   * @hidden
   */
  inlineListItemStyles(idx2) {
    return {
      "height": this.height,
      "transform": this.transforms[idx2],
      "width": "100%",
      "position": "absolute",
      "top": "0",
      "left": "0"
    };
  }
  /**
   * @hidden
   */
  displayLeftArrow() {
    let isNotBorderItem;
    if (this.isRTL) {
      isNotBorderItem = this.activeIndex + 1 < this.view.total;
    } else {
      isNotBorderItem = this.activeIndex > 0;
    }
    return (this.endless || isNotBorderItem) && this.view.total > 0;
  }
  /**
   * @hidden
   */
  leftArrowClick() {
    if (this.isRTL) {
      this.next();
    } else {
      this.prev();
    }
  }
  /**
   * @hidden
   */
  displayRightArrow() {
    let isNotBorderItem;
    if (this.isRTL) {
      isNotBorderItem = this.activeIndex > 0;
    } else {
      isNotBorderItem = this.activeIndex + 1 < this.view.total;
    }
    return (this.endless || isNotBorderItem) && this.view.total > 0;
  }
  /**
   * @hidden
   */
  rightArrowClick() {
    if (this.isRTL) {
      this.prev();
    } else {
      this.next();
    }
  }
  draggedInsideBounds(deltaX) {
    return Math.abs(deltaX) <= this.element.nativeElement.offsetWidth;
  }
  draggedEnoughToNavigate(deltaX) {
    return Math.abs(deltaX) > this.element.nativeElement.offsetWidth / 2;
  }
  isDragForbidden(deltaX) {
    let pastEnd;
    if (this.isRTL) {
      pastEnd = deltaX < 0 && deltaX !== 0;
    } else {
      pastEnd = deltaX > 0 && deltaX !== 0;
    }
    const isEndReached = this.activeIndex === 0 && pastEnd || this.activeIndex === this.view.total - 1 && !pastEnd;
    return !this.endless && isEndReached;
  }
  keyDown(e) {
    const keyCode = e.keyCode;
    if (keyCode === Keys.ArrowLeft) {
      if (this.isRTL) {
        this.next();
        return;
      }
      this.prev();
    } else if (keyCode === Keys.ArrowRight) {
      if (this.isRTL) {
        this.prev();
        return;
      }
      this.next();
    }
    if (this.arrows && keyCode === Keys.Space || keyCode === Keys.Enter) {
      const prevButton = this.prevButton?.nativeElement;
      const nextButton = this.nextButton?.nativeElement;
      const activeElement = document.activeElement;
      const isPrevButtonFocused = activeElement === prevButton;
      const isNextButtonFocused = activeElement === nextButton;
      if (isPrevButtonFocused) {
        if (this.isRTL) {
          this.next();
          return;
        }
        this.prev();
      } else if (isNextButtonFocused) {
        if (this.isRTL) {
          this.prev();
          return;
        }
        this.next();
      }
    }
  }
  navigate(direction) {
    if (this.isDataSourceEmpty || this.animationState) {
      return;
    }
    this.changeIndex(direction);
    if (!this.animate) {
      this.activeIndexChange.emit(this.activeIndex);
      this.itemChanged.emit({
        index: this.activeIndex,
        item: this.view.item(1)
      });
    }
  }
  changeIndex(direction) {
    if (direction === Dir.Next && this.view.canMoveNext()) {
      this.index = (this.index + 1) % this.view.total;
      if (this.animate) {
        this.animationState = this.isRTL ? "right" : "left";
      } else {
        this.activeIndex = this.index;
      }
    } else if (direction === Dir.Prev && this.view.canMovePrev()) {
      this.index = this.index === 0 ? this.view.total - 1 : this.index - 1;
      if (this.animate) {
        this.animationState = this.isRTL ? "left" : "right";
      } else {
        this.activeIndex = this.index;
      }
    }
  }
  get isRTL() {
    return this.direction === "rtl";
  }
  get prevButtonArrowIcon() {
    return this.direction === "ltr" ? "chevron-left" : "chevron-right";
  }
  get nextButtonArrowIcon() {
    return this.direction === "ltr" ? "chevron-right" : "chevron-left";
  }
  get prevButtonArrowSVGIcon() {
    return this.direction === "ltr" ? this.chevronLeftIcon : this.chevronRightIcon;
  }
  get nextButtonArrowSVGIcon() {
    return this.direction === "ltr" ? this.chevronRightIcon : this.chevronLeftIcon;
  }
  static ɵfac = function ScrollViewComponent_Factory(t) {
    return new (t || _ScrollViewComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ScrollViewComponent,
    selectors: [["kendo-scrollview"]],
    contentQueries: function ScrollViewComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplateRef = _t.first);
      }
    },
    viewQuery: function ScrollViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
        ɵɵviewQuery(_c2, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemWrapper = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.prevButton = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextButton = _t.first);
      }
    },
    hostVars: 17,
    hostBindings: function ScrollViewComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.scrollViewRole)("aria-roledescription", ctx.scrollViewRoleDescription)("tabindex", ctx.tabIndex)("aria-live", ctx.ariaLive)("dir", ctx.dir);
        ɵɵstyleProp("width", ctx.hostWidth)("height", ctx.hostHeight)("touch-action", ctx.touchAction);
        ɵɵclassProp("k-scrollview", ctx.scrollViewClass)("k-scrollview-light", ctx.scrollViewLightOverlayClass)("k-scrollview-dark", ctx.scrollViewDarkOverlayClass);
      }
    },
    inputs: {
      data: "data",
      activeIndex: "activeIndex",
      width: "width",
      height: "height",
      endless: "endless",
      pagerOverlay: "pagerOverlay",
      animate: "animate",
      pageable: "pageable",
      arrows: "arrows"
    },
    outputs: {
      itemChanged: "itemChanged",
      activeIndexChange: "activeIndexChange"
    },
    exportAs: ["kendoScrollView"],
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.scrollview"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 8,
    vars: 5,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_SCROLLVIEW_FESM2022_PROGRESS_KENDO_ANGULAR_SCROLLVIEW_MJS_0 = goog.getMsg("{$interpolation}", {
          "interpolation": "�0�"
        }, {
          original_code: {
            "interpolation": "{{ 'Item {itemIndex}' }}"
          }
        });
        i18n_0 = MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_SCROLLVIEW_FESM2022_PROGRESS_KENDO_ANGULAR_SCROLLVIEW_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.scrollview.pagerButtonLabel|The label for the buttons inside the ScrollView Pager:${"�0�"}:INTERPOLATION:`;
      }
      return [["itemWrapper", ""], ["prevButton", ""], ["nextButton", ""], ["pagerButtonLabel", i18n_0], ["kendoScrollViewLocalizedMessages", "", 6, "pagerButtonLabel"], ["role", "list", "kendoDraggable", "", 1, "k-scrollview-wrap", "k-scrollview-animate", 3, "kendoDrag", "kendoPress", "kendoRelease", "id"], ["class", "k-scrollview-view", "role", "listitem", "aria-roledescription", "slide", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["class", "k-scrollview-elements", 3, "ngStyle", 4, "ngIf"], ["aria-live", "polite", 1, "k-sr-only"], ["role", "listitem", "aria-roledescription", "slide", 1, "k-scrollview-view", 3, "ngStyle"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "k-scrollview-elements", 3, "ngStyle"], ["class", "k-scrollview-prev", "role", "button", "aria-label", "previous", 3, "click", 4, "ngIf"], ["class", "k-scrollview-next", "role", "button", "aria-label", "next", 3, "click", 4, "ngIf"], ["class", "k-scrollview-nav-wrap", 3, "data", "activeIndex", "pagerIndexChange", 4, "ngIf"], ["role", "button", "aria-label", "previous", 1, "k-scrollview-prev", 3, "click"], ["size", "xxxlarge", 3, "name", "svgIcon"], ["role", "button", "aria-label", "next", 1, "k-scrollview-next", 3, "click"], [1, "k-scrollview-nav-wrap", 3, "pagerIndexChange", "data", "activeIndex"]];
    },
    template: function ScrollViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainerStart(0, 4);
        ɵɵi18nAttributes(1, 3);
        ɵɵelementContainerStart(2);
        ɵɵelementStart(3, "div", 5, 0);
        ɵɵlistener("@animateTo.done", function ScrollViewComponent_Template_div_animation_animateTo_done_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.transitionEndHandler($event));
        })("kendoDrag", function ScrollViewComponent_Template_div_kendoDrag_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleDrag($event));
        })("kendoPress", function ScrollViewComponent_Template_div_kendoPress_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handlePress($event));
        })("kendoRelease", function ScrollViewComponent_Template_div_kendoRelease_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.handleRelease($event));
        });
        ɵɵtemplate(5, ScrollViewComponent_div_5_Template, 2, 6, "div", 6);
        ɵɵelementEnd();
        ɵɵtemplate(6, ScrollViewComponent_div_6_Template, 4, 6, "div", 7);
        ɵɵelement(7, "div", 8);
        ɵɵelementContainerEnd()();
      }
      if (rf & 2) {
        ɵɵi18nExp("Item {itemIndex}");
        ɵɵi18nApply(1);
        ɵɵadvance(3);
        ɵɵproperty("id", ctx.scrollviewId)("@animateTo", ctx.animationState);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.view);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.isDataSourceEmpty && (ctx.pageable || ctx.arrows));
      }
    },
    dependencies: [LocalizedMessagesDirective, DraggableDirective, NgForOf, NgStyle, NgTemplateOutlet, NgIf, IconWrapperComponent, ScrollViewPagerComponent],
    encapsulation: 2,
    data: {
      animation: [trigger("animateTo", [state("center, left, right", style({
        transform: "translateX(0)"
      })), transition("* => right", [animate("300ms ease-out", style({
        transform: "translateX(100%)"
      }))]), transition("* => left", [animate("300ms ease-out", style({
        transform: "translateX(-100%)"
      }))]), transition("* => center", [animate("300ms ease-out")])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewComponent, [{
    type: Component,
    args: [{
      animations: [trigger("animateTo", [state("center, left, right", style({
        transform: "translateX(0)"
      })), transition("* => right", [animate("300ms ease-out", style({
        transform: "translateX(100%)"
      }))]), transition("* => left", [animate("300ms ease-out", style({
        transform: "translateX(-100%)"
      }))]), transition("* => center", [animate("300ms ease-out")])])],
      exportAs: "kendoScrollView",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.scrollview"
      }],
      selector: "kendo-scrollview",
      template: `

        <ng-container kendoScrollViewLocalizedMessages
            i18n-pagerButtonLabel="kendo.scrollview.pagerButtonLabel|The label for the buttons inside the ScrollView Pager"
            pagerButtonLabel="{{ 'Item {itemIndex}' }}">
        <ng-container>

        <div class="k-scrollview-wrap k-scrollview-animate"
            #itemWrapper
            role="list"
            [id]="scrollviewId"
            [@animateTo]="animationState"
            (@animateTo.done)="transitionEndHandler($event)"
            kendoDraggable
            (kendoDrag)="handleDrag($event)"
            (kendoPress)="handlePress($event)"
            (kendoRelease)="handleRelease($event)"
        >
            <div class="k-scrollview-view"
                *ngFor="let item of view;let i=index"
                role="listitem"
                aria-roledescription="slide"
                [ngStyle]="inlineListItemStyles(i)"
                [attr.aria-hidden]="i !== 1"
            >
                <ng-template
                    [ngTemplateOutlet]="itemTemplateRef"
                    [ngTemplateOutletContext]="{ item: item }">
                </ng-template>
            </div>
      </div>
        <div class='k-scrollview-elements'
            [ngStyle]="{'height': height}"
            *ngIf="!isDataSourceEmpty && (pageable||arrows)">

            <span
                #prevButton
                class="k-scrollview-prev"
                role="button"
                [attr.aria-controls]="scrollviewId"
                aria-label="previous"
                *ngIf="arrows && displayLeftArrow()"
                (click)="leftArrowClick()">
                <kendo-icon-wrapper
                    size="xxxlarge"
                    [name]="prevButtonArrowIcon"
                    [svgIcon]="prevButtonArrowSVGIcon"
                    >
                </kendo-icon-wrapper>
            </span>
            <span
                #nextButton
                class="k-scrollview-next"
                role="button"
                [attr.aria-controls]="scrollviewId"
                aria-label="next"
                *ngIf="arrows && displayRightArrow()"
                (click)="rightArrowClick()">
                <kendo-icon-wrapper
                    size="xxxlarge"
                    [name]="nextButtonArrowIcon"
                    [svgIcon]="nextButtonArrowSVGIcon"
                    >
                </kendo-icon-wrapper>
            </span>
            <kendo-scrollview-pager
                class='k-scrollview-nav-wrap'
                *ngIf="pageable"
                (pagerIndexChange)="pageChange($event)"
                [data]="data"
                [activeIndex]="activeIndex">
            </kendo-scrollview-pager>
        </div>
        <div class="k-sr-only" aria-live="polite"></div>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, DraggableDirective, NgForOf, NgStyle, NgTemplateOutlet, NgIf, IconWrapperComponent, ScrollViewPagerComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    data: [{
      type: Input
    }],
    activeIndex: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    endless: [{
      type: Input
    }],
    pagerOverlay: [{
      type: Input
    }],
    animate: [{
      type: Input
    }],
    pageable: [{
      type: Input
    }],
    arrows: [{
      type: Input
    }],
    itemChanged: [{
      type: Output
    }],
    activeIndexChange: [{
      type: Output
    }],
    itemTemplateRef: [{
      type: ContentChild,
      args: [TemplateRef]
    }],
    itemWrapper: [{
      type: ViewChild,
      args: ["itemWrapper"]
    }],
    prevButton: [{
      type: ViewChild,
      args: ["prevButton"]
    }],
    nextButton: [{
      type: ViewChild,
      args: ["nextButton"]
    }],
    scrollViewClass: [{
      type: HostBinding,
      args: ["class.k-scrollview"]
    }],
    scrollViewRole: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    scrollViewRoleDescription: [{
      type: HostBinding,
      args: ["attr.aria-roledescription"]
    }],
    scrollViewLightOverlayClass: [{
      type: HostBinding,
      args: ["class.k-scrollview-light"]
    }],
    scrollViewDarkOverlayClass: [{
      type: HostBinding,
      args: ["class.k-scrollview-dark"]
    }],
    hostWidth: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    hostHeight: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    tabIndex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaLive: [{
      type: HostBinding,
      args: ["attr.aria-live"]
    }],
    dir: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    touchAction: [{
      type: HostBinding,
      args: ["style.touch-action"]
    }]
  });
})();
var CustomMessagesComponent = class _CustomMessagesComponent extends ScrollViewMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function CustomMessagesComponent_Factory(t) {
    return new (t || _CustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CustomMessagesComponent,
    selectors: [["kendo-scrollview-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ScrollViewMessages,
      useExisting: forwardRef(() => _CustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ScrollViewMessages,
        useExisting: forwardRef(() => CustomMessagesComponent)
      }],
      selector: "kendo-scrollview-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var KENDO_SCROLLVIEW = [ScrollViewComponent, CustomMessagesComponent];
var ScrollViewModule = class _ScrollViewModule {
  static ɵfac = function ScrollViewModule_Factory(t) {
    return new (t || _ScrollViewModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ScrollViewModule,
    imports: [ScrollViewComponent, CustomMessagesComponent],
    exports: [ScrollViewComponent, CustomMessagesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService],
    imports: [ScrollViewComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScrollViewModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SCROLLVIEW],
      exports: [...KENDO_SCROLLVIEW],
      providers: [IconsService]
    }]
  }], null, null);
})();
export {
  CustomMessagesComponent,
  KENDO_SCROLLVIEW,
  ScrollViewComponent,
  ScrollViewModule,
  ScrollViewPagerComponent
};
//# sourceMappingURL=@progress_kendo-angular-scrollview.js.map
