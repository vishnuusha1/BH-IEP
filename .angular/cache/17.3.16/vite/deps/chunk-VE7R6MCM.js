import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-632K3S7H.js";
import {
  validatePackage
} from "./chunk-D2DMRN4R.js";
import {
  NgForOf
} from "./chunk-STNL7G5M.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostBinding,
  Input,
  NgModule,
  Renderer2,
  isDevMode,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-DTS3OAND.js";

// node_modules/@progress/kendo-angular-indicators/fesm2022/progress-kendo-angular-indicators.mjs
var _c0 = ["*"];
function LoaderComponent_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 2);
  }
}
var BadgeContainerComponent = class _BadgeContainerComponent {
  localizationService;
  hostClass = true;
  /**
   * @hidden
   */
  direction;
  dynamicRTLSubscription;
  rtl = false;
  constructor(localizationService) {
    this.localizationService = localizationService;
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  static ɵfac = function BadgeContainerComponent_Factory(t) {
    return new (t || _BadgeContainerComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BadgeContainerComponent,
    selectors: [["kendo-badge-container"]],
    hostVars: 3,
    hostBindings: function BadgeContainerComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-badge-container", ctx.hostClass);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.badge.component"
    }]), ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BadgeContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-badge-container",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.badge.component"
      }],
      template: `<ng-content></ng-content>`,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-badge-container"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }]
  });
})();
var packageMetadata = {
  name: "@progress/kendo-angular-indicators",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1749540044,
  version: "19.1.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var SIZE_CLASSES$1 = {
  "small": "k-badge-sm",
  "medium": "k-badge-md",
  "large": "k-badge-lg"
};
var ROUNDED_CLASSES = {
  "small": "k-rounded-sm",
  "medium": "k-rounded-md",
  "large": "k-rounded-lg",
  "full": "k-rounded-full"
};
var BadgeComponent = class _BadgeComponent {
  element;
  renderer;
  localizationService;
  hostClass = true;
  get cutoutBorderClass() {
    return this.cutoutBorder;
  }
  /**
   * @hidden
   */
  direction;
  /**
   * Specifies the alignment of the Badge ([see example]({% slug alignandposition_badge %}#toc-alignment)).
   *
   * The possible values are:
   * * `{ vertical: 'top', horizontal: 'end' }`
   * * `{ vertical: 'top', horizontal: 'start' }`
   * * `{ vertical: 'bottom', horizontal: 'start' }`
   * * `{ vertical: 'bottom', horizontal: 'end' }`
   *
   * @default "{ vertical: 'top', horizontal: 'end' }"
   */
  get align() {
    return this.badgeAlign;
  }
  set align(align) {
    this.badgeAlign = Object.assign(this.badgeAlign, align);
  }
  /**
   * Specifies the size of the Badge ([see example]({% slug appearance_badge %}#toc-size)).
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `none`
   *
   * @default medium
   */
  size = "medium";
  /**
   * Specifies the appearance fill style of the Badge ([see example]({% slug appearance_badge %}#toc-fill)).
   *
   * The possible values are:
   * * `solid`
   * * `outline`
   * * `none`
   *
   * @default solid
   */
  fill = "solid";
  /**
   * Specifies the theme color of the Badge.
   * The theme color will be applied as background and border color, while also amending the text color accordingly
   * ([see example]({% slug appearance_badge %}#toc-theme-color)).
   *
   * The possible values are:
   * * `primary`
   * * `secondary`
   * * `tertiary`
   * * `inherit`
   * * `info`
   * * `success`
   * * `warning`
   * * `error`
   * * `dark`
   * * `light`
   * * `inverse`
   * * `none`
   *
   * @default primary
   */
  themeColor = "primary";
  /**
   * Specifies the roundness of the Badge ([see example]({% slug appearance_badge %}#toc-rounded)).
   *
   * The possible values are:
   * * `small`
   * * `medium`
   * * `large`
   * * `full`
   * * `none`
   *
   * @default medium
   */
  rounded = "medium";
  /**
   * Specifies the position of the Badge relative to the edge of the parent container element ([see example]({% slug alignandposition_badge %}#toc-position)).
   *
   * The possible values are:
   * * `edge`
   * * `inside`
   * * `outside`
   *
   * @default edge
   */
  position = "edge";
  /**
   * Specifies whether or not to render additional `cutout` border around the Badge ([see example]({% slug appearance_badge %}#toc-cutout-border)).
   *
   * The possible values are:
   * * `true`
   * * `false`
   *
   * @default false
   */
  cutoutBorder = false;
  badgeClasses = [];
  badgeAlign = {
    vertical: "top",
    horizontal: "end"
  };
  dynamicRTLSubscription;
  rtl = false;
  constructor(element, renderer, localizationService) {
    this.element = element;
    this.renderer = renderer;
    this.localizationService = localizationService;
    validatePackage(packageMetadata);
    this.dynamicRTLSubscription = this.localizationService.changes.subscribe(({
      rtl
    }) => {
      this.rtl = rtl;
      this.direction = this.rtl ? "rtl" : "ltr";
    });
  }
  ngAfterViewInit() {
    if (!this.badgeClasses.length) {
      this.setBadgeClasses();
    }
  }
  ngOnChanges() {
    this.setBadgeClasses();
  }
  ngOnDestroy() {
    if (this.dynamicRTLSubscription) {
      this.dynamicRTLSubscription.unsubscribe();
    }
  }
  alignClass() {
    return `k-${this.badgeAlign.vertical}-${this.badgeAlign.horizontal}`;
  }
  positionClass() {
    return `k-badge-${this.position}`;
  }
  sizeClass() {
    if (this.size !== "none") {
      return SIZE_CLASSES$1[this.size];
    }
    return "";
  }
  roundedClass() {
    if (this.rounded !== "none") {
      return ROUNDED_CLASSES[this.rounded];
    }
    return "";
  }
  themeColorClass() {
    if (this.themeColor !== "none" && this.fill !== "none") {
      return `k-badge-${this.fill}-${this.themeColor}`;
    }
    return "";
  }
  fillClass() {
    if (this.fill !== "none") {
      return `k-badge-${this.fill}`;
    }
    return "";
  }
  setBadgeClasses() {
    const element = this.element.nativeElement;
    this.badgeClasses.forEach((className) => {
      this.renderer.removeClass(element, className);
    });
    this.badgeClasses = [this.themeColorClass(), this.fillClass(), this.sizeClass(), this.roundedClass(), this.alignClass(), this.positionClass()];
    this.badgeClasses.forEach((className) => {
      if (className) {
        this.renderer.addClass(element, className);
      }
    });
  }
  static ɵfac = function BadgeComponent_Factory(t) {
    return new (t || _BadgeComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BadgeComponent,
    selectors: [["kendo-badge"]],
    hostVars: 5,
    hostBindings: function BadgeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("dir", ctx.direction);
        ɵɵclassProp("k-badge", ctx.hostClass)("k-badge-border-cutout", ctx.cutoutBorderClass);
      }
    },
    inputs: {
      align: "align",
      size: "size",
      fill: "fill",
      themeColor: "themeColor",
      rounded: "rounded",
      position: "position",
      cutoutBorder: "cutoutBorder"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.badge.component"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function BadgeComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeComponent, [{
    type: Component,
    args: [{
      selector: "kendo-badge",
      providers: [LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.badge.component"
      }],
      template: `<ng-content></ng-content>`,
      standalone: true
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
      args: ["class.k-badge"]
    }],
    cutoutBorderClass: [{
      type: HostBinding,
      args: ["class.k-badge-border-cutout"]
    }],
    direction: [{
      type: HostBinding,
      args: ["attr.dir"]
    }],
    align: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    fill: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    rounded: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    cutoutBorder: [{
      type: Input
    }]
  });
})();
var SIZE_CLASSES = {
  "small": "k-loader-sm",
  "medium": "k-loader-md",
  "large": "k-loader-lg"
};
var SEGMENT_COUNT = {
  "pulsing": 2,
  "infinite-spinner": 3,
  "converging-spinner": 4
};
var TYPE_CLASSES = {
  "pulsing": "k-loader-pulsing-2",
  "infinite-spinner": "k-loader-spinner-3",
  "converging-spinner": "k-loader-spinner-4"
};
var LoaderComponent = class _LoaderComponent {
  element;
  renderer;
  hostClass = true;
  /**
   * Specifies the Loader animation type.
   *
   * The possible values are:
   * - `pulsing` (default)
   * - `infinite-spinner`
   * - `converging-spinner`
   */
  set type(type) {
    this.renderer.removeClass(this.loader, TYPE_CLASSES[this.type]);
    this.renderer.addClass(this.loader, TYPE_CLASSES[type]);
    this._type = type;
  }
  get type() {
    return this._type;
  }
  /**
   * Specifies the theme color of the Loader.
   *
   * The possible values are:
   * * `primary` (Default)&mdash;Applies coloring based on primary theme color.
   * * `secondary`&mdash;Applies coloring based on secondary theme color.
   * * `tertiary`&mdash; Applies coloring based on tertiary theme color.
   * * `info`&mdash;Applies coloring based on info theme color.
   * * `success`&mdash; Applies coloring based on success theme color.
   * * `warning`&mdash; Applies coloring based on warning theme color.
   * * `error`&mdash; Applies coloring based on error theme color.
   * * `dark`&mdash; Applies coloring based on dark theme color.
   * * `light`&mdash; Applies coloring based on light theme color.
   * * `inverse`&mdash; Applies coloring based on inverted theme color.
   *
   */
  set themeColor(themeColor) {
    this.renderer.removeClass(this.loader, `k-loader-${this.themeColor}`);
    this.renderer.addClass(this.loader, `k-loader-${themeColor}`);
    this._themeColor = themeColor;
  }
  get themeColor() {
    return this._themeColor;
  }
  /**
   * Specifies the size of the Loader.
   *
   * The possible values are:
   * * `small`
   * * `medium` (Default)
   * * `large`
   *
   */
  set size(size) {
    this.renderer.removeClass(this.loader, SIZE_CLASSES[this.size]);
    this.renderer.addClass(this.loader, SIZE_CLASSES[size]);
    this._size = size;
  }
  get size() {
    return this._size;
  }
  _type = "pulsing";
  _themeColor = "primary";
  _size = "medium";
  loader;
  constructor(element, renderer) {
    this.element = element;
    this.renderer = renderer;
    validatePackage(packageMetadata);
    this.loader = this.element.nativeElement;
  }
  ngAfterViewInit() {
    this.setLoaderClasses();
  }
  /**
   * @hidden
   */
  get segmentCount() {
    return new Array(SEGMENT_COUNT[this.type]);
  }
  setLoaderClasses() {
    this.renderer.addClass(this.loader, TYPE_CLASSES[this.type]);
    this.renderer.addClass(this.loader, `k-loader-${this.themeColor}`);
    this.renderer.addClass(this.loader, SIZE_CLASSES[this.size]);
  }
  static ɵfac = function LoaderComponent_Factory(t) {
    return new (t || _LoaderComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LoaderComponent,
    selectors: [["kendo-loader"]],
    hostVars: 2,
    hostBindings: function LoaderComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-loader", ctx.hostClass);
      }
    },
    inputs: {
      type: "type",
      themeColor: "themeColor",
      size: "size"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 2,
    vars: 1,
    consts: [[1, "k-loader-canvas"], ["class", "k-loader-segment", 4, "ngFor", "ngForOf"], [1, "k-loader-segment"]],
    template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, LoaderComponent_span_1_Template, 1, 0, "span", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.segmentCount);
      }
    },
    dependencies: [NgForOf],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderComponent, [{
    type: Component,
    args: [{
      selector: "kendo-loader",
      template: `
        <div class="k-loader-canvas">
            <span *ngFor="let segment of segmentCount" class="k-loader-segment"></span>
        </div>
    `,
      standalone: true,
      imports: [NgForOf]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    hostClass: [{
      type: HostBinding,
      args: ["class.k-loader"]
    }],
    type: [{
      type: Input
    }],
    themeColor: [{
      type: Input
    }],
    size: [{
      type: Input
    }]
  });
})();
var validAnimations = [false, "pulse", "wave"];
var validShapes = ["circle", "rectangle", "text"];
var ANIMATION_CLASSES = {
  pulse: "k-skeleton-pulse",
  wave: "k-skeleton-wave"
};
var SHAPE_CLASSES = {
  rectangle: "k-skeleton-rect",
  circle: "k-skeleton-circle",
  text: "k-skeleton-text"
};
var skeletonShapeError = (input) => `"${input}" is not a valid kendo-skeleton shape. Valid shapes are: ${validShapes.map((s) => `"${s}"`).join(" | ")}.`;
var skeletonAnimationError = (input) => `"${input}" is not a valid kendo-skeleton animation. Valid values are: 'pulse' | 'wave' | false.`;
var SkeletonComponent = class _SkeletonComponent {
  renderer;
  hostElement;
  /**
   * Specifies the animation settings of the Skeleton.
   *
   * The possible values are:
   * * `pulse` &mdash; (Default) Shows a pulse animation effect.
   * * `wave` &mdash; Shows a wave animation effect.
   * * `false` &mdash; Disables the animation. Note that it's a boolean, not a string.
   */
  set animation(animation) {
    if (isDevMode() && validAnimations.indexOf(animation) === -1) {
      throw new Error(skeletonAnimationError(animation));
    }
    if (this.animation) {
      this.renderer.removeClass(this.hostElement.nativeElement, ANIMATION_CLASSES[this.animation]);
    }
    if (animation) {
      this.renderer.addClass(this.hostElement.nativeElement, ANIMATION_CLASSES[animation]);
    }
    this._animation = animation;
  }
  get animation() {
    return this._animation;
  }
  /**
   * Specifies the shape of the Skeleton.
   *
   * The possible values are:
   * * `text` &mdash; (Default) Renders a line Skeleton.
   * * `circle` &mdash; Renders a circular Skeleton.
   * * `rectangle` &mdash; Renders a rectangular Skeleton.
   */
  set shape(shape) {
    if (isDevMode() && validShapes.indexOf(shape) === -1) {
      throw new Error(skeletonShapeError(shape));
    }
    this.renderer.removeClass(this.hostElement.nativeElement, SHAPE_CLASSES[this.shape]);
    this.renderer.addClass(this.hostElement.nativeElement, SHAPE_CLASSES[shape]);
    this._shape = shape;
  }
  get shape() {
    return this._shape;
  }
  /**
   * Specifies the width of the Skeleton component.
   * * Required for all Skeleton shapes.
   * * Can be set to a string, e.g. '100px', '3em', '50%'.
   * * Can be set to an integer number (will be read as width in pixels).
   */
  set width(width) {
    this.renderer.setStyle(this.hostElement.nativeElement, "width", typeof width === "string" ? width : width + "px");
  }
  /**
   * Specifies the height of the Skeleton component.
   * * Required for 'circle' and 'rectangle' shapes.
   * * Not required for 'text', as it is derived from the current CSS font-size.
   * * Can be set to a string, e.g. '100px', '3em', '50%'.
   * * Can be set to an integer number (will be read as height in pixels).
   */
  set height(height) {
    this.renderer.setStyle(this.hostElement.nativeElement, "height", typeof height === "string" ? height : height + "px");
  }
  _animation = "pulse";
  _shape = "text";
  constructor(renderer, hostElement) {
    this.renderer = renderer;
    this.hostElement = hostElement;
  }
  ngAfterViewInit() {
    const hostElement = this.hostElement.nativeElement;
    hostElement.classList.add("k-skeleton", SHAPE_CLASSES[this.shape]);
    if (this.animation) {
      hostElement.classList.add(ANIMATION_CLASSES[this.animation]);
    }
  }
  static ɵfac = function SkeletonComponent_Factory(t) {
    return new (t || _SkeletonComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SkeletonComponent,
    selectors: [["kendo-skeleton"]],
    inputs: {
      animation: "animation",
      shape: "shape",
      width: "width",
      height: "height"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SkeletonComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonComponent, [{
    type: Component,
    args: [{
      selector: "kendo-skeleton",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: ElementRef
    }];
  }, {
    animation: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    height: [{
      type: Input
    }]
  });
})();
var KENDO_BADGE = [BadgeComponent];
var KENDO_BADGECONTAINER = [BadgeComponent, BadgeContainerComponent];
var KENDO_LOADER = [LoaderComponent];
var KENDO_SKELETON = [SkeletonComponent];
var KENDO_INDICATORS = [...KENDO_BADGECONTAINER, ...KENDO_LOADER, ...KENDO_SKELETON];
var BadgeModule = class _BadgeModule {
  static ɵfac = function BadgeModule_Factory(t) {
    return new (t || _BadgeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _BadgeModule,
    imports: [BadgeComponent, BadgeContainerComponent],
    exports: [BadgeComponent, BadgeContainerComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BadgeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_BADGECONTAINER],
      imports: [...KENDO_BADGECONTAINER]
    }]
  }], null, null);
})();
var LoaderModule = class _LoaderModule {
  static ɵfac = function LoaderModule_Factory(t) {
    return new (t || _LoaderModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LoaderModule,
    imports: [LoaderComponent],
    exports: [LoaderComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoaderModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_LOADER],
      imports: [...KENDO_LOADER]
    }]
  }], null, null);
})();
var SkeletonModule = class _SkeletonModule {
  static ɵfac = function SkeletonModule_Factory(t) {
    return new (t || _SkeletonModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SkeletonModule,
    imports: [SkeletonComponent],
    exports: [SkeletonComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SkeletonModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_SKELETON],
      imports: [...KENDO_SKELETON]
    }]
  }], null, null);
})();
var IndicatorsModule = class _IndicatorsModule {
  static ɵfac = function IndicatorsModule_Factory(t) {
    return new (t || _IndicatorsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _IndicatorsModule,
    imports: [BadgeComponent, BadgeContainerComponent, LoaderComponent, SkeletonComponent],
    exports: [BadgeComponent, BadgeContainerComponent, LoaderComponent, SkeletonComponent]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IndicatorsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_INDICATORS],
      exports: [...KENDO_INDICATORS]
    }]
  }], null, null);
})();

export {
  BadgeContainerComponent,
  BadgeComponent,
  LoaderComponent,
  SkeletonComponent,
  KENDO_BADGE,
  KENDO_BADGECONTAINER,
  KENDO_LOADER,
  KENDO_SKELETON,
  KENDO_INDICATORS,
  BadgeModule,
  LoaderModule,
  SkeletonModule,
  IndicatorsModule
};
//# sourceMappingURL=chunk-VE7R6MCM.js.map
