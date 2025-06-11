import {
  arc_gauge_default,
  circular_gauge_default,
  gaugeTheme,
  linear_gauge_default,
  radial_gauge_default
} from "./chunk-7OI3DNUN.js";
import {
  drawDOM,
  exportImage,
  exportSVG
} from "./chunk-ZJJ2SPTS.js";
import {
  IntlService
} from "./chunk-IENMZ6ZE.js";
import {
  ResizeSensorComponent
} from "./chunk-TCXXA5LR.js";
import {
  L10N_PREFIX,
  LocalizationService
} from "./chunk-632K3S7H.js";
import {
  validatePackage
} from "./chunk-D2DMRN4R.js";
import {
  NgIf,
  NgTemplateOutlet
} from "./chunk-STNL7G5M.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-DTS3OAND.js";
import "./chunk-BTNZXMHM.js";
import "./chunk-QEJIEICB.js";
import "./chunk-XWLXMCJQ.js";

// node_modules/@progress/kendo-angular-gauges/fesm2022/progress-kendo-angular-gauges.mjs
var _c0 = ["surface"];
var _c1 = ["label"];
function ArcGaugeComponent_div_2_ng_template_2_Template(rf, ctx) {
}
function ArcGaugeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5, 1);
    ɵɵtemplate(2, ArcGaugeComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.centerTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.centerTemplateContext);
  }
}
function CircularGaugeComponent_div_2_ng_template_2_Template(rf, ctx) {
}
function CircularGaugeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5, 1);
    ɵɵtemplate(2, CircularGaugeComponent_div_2_ng_template_2_Template, 0, 0, "ng-template", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.centerTemplate.templateRef)("ngTemplateOutletContext", ctx_r1.centerTemplateContext);
  }
}
var ArcCenterTemplateDirective = class _ArcCenterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function ArcCenterTemplateDirective_Factory(t) {
    return new (t || _ArcCenterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ArcCenterTemplateDirective,
    selectors: [["", "kendoArcGaugeCenterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcCenterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoArcGaugeCenterTemplate]",
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
function isObject(value) {
  return typeof value === "object";
}
function diffOptions(original, current) {
  if (Object.keys(original).length !== Object.keys(current).length) {
    return true;
  }
  for (const field in original) {
    if (field !== "value" && original.hasOwnProperty(field)) {
      const originalValue = original[field];
      const currentValue = current[field];
      const diff = isObject(originalValue) && isObject(currentValue) ? diffOptions(originalValue, currentValue) : originalValue !== currentValue;
      if (diff) {
        return true;
      }
    }
  }
}
function diffPointerOptions(original, current) {
  if (!original || !current) {
    return true;
  }
  original = [].concat(original);
  current = [].concat(current);
  if (original.length !== current.length) {
    return true;
  }
  for (let idx = 0; idx < original.length; idx++) {
    if (diffOptions(original[idx], current[idx])) {
      return true;
    }
  }
}
var ConfigurationService = class _ConfigurationService {
  options = {};
  hasChanges;
  valueChange;
  copyChanges(prefix, changes) {
    for (const propertyName in changes) {
      if (!changes.hasOwnProperty(propertyName)) {
        continue;
      }
      const value = changes[propertyName].currentValue;
      const optionName = (prefix ? prefix + "." : "") + propertyName;
      this.set(optionName, value);
    }
  }
  read() {
    this.hasChanges = false;
    this.valueChange = false;
    return this.options;
  }
  readValues() {
    this.valueChange = false;
    const pointers = [].concat(this.options.pointer);
    return pointers.map((pointer) => pointer.value);
  }
  readValue() {
    this.valueChange = false;
    return this.options.value;
  }
  set(field, value) {
    const {
      key,
      options
    } = this.optionContext(field);
    if (!this.hasChanges && (key === "value" || key === "pointer" && !diffPointerOptions(this.options.pointer, value))) {
      this.valueChange = true;
    } else {
      this.hasChanges = true;
      this.valueChange = false;
    }
    options[key] = value;
  }
  optionContext(field) {
    const parts = field.split(".");
    let options = this.options;
    let key = parts.shift();
    while (parts.length > 0) {
      options = options[key] = options[key] || {};
      key = parts.shift();
    }
    return {
      key,
      options
    };
  }
  static ɵfac = function ConfigurationService_Factory(t) {
    return new (t || _ConfigurationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfigurationService,
    factory: _ConfigurationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurationService, [{
    type: Injectable
  }], null, null);
})();
var CollectionChangesService = class _CollectionChangesService {
  hasChanges;
  static ɵfac = function CollectionChangesService_Factory(t) {
    return new (t || _CollectionChangesService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _CollectionChangesService,
    factory: _CollectionChangesService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionChangesService, [{
    type: Injectable
  }], null, null);
})();
var ThemeService = class _ThemeService {
  options;
  read() {
    if (!this.options) {
      this.load();
    }
    return this.options;
  }
  load() {
    if (typeof document === "undefined") {
      this.options = {};
      return;
    }
    const container = document.createElement("div");
    container.style.display = "none";
    container.className = "k-gauge";
    document.body.appendChild(container);
    try {
      this.options = gaugeTheme(container);
    } finally {
      document.body.removeChild(container);
    }
  }
  static ɵfac = function ThemeService_Factory(t) {
    return new (t || _ThemeService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ThemeService,
    factory: _ThemeService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var CollectionComponent = class _CollectionComponent {
  key;
  configurationService;
  collectionChangesService;
  children;
  subscription;
  constructor(key, configurationService, collectionChangesService) {
    this.key = key;
    this.configurationService = configurationService;
    this.collectionChangesService = collectionChangesService;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.configurationService.set(this.key, []);
  }
  ngAfterContentInit() {
    this.subscription = this.children.changes.subscribe(() => this.collectionChangesService.hasChanges = true);
  }
  ngAfterContentChecked() {
    if (this.collectionChangesService.hasChanges) {
      this.configurationService.set(this.key, this.readItems());
      this.collectionChangesService.hasChanges = false;
    }
  }
  readItems() {
    return this.children.map((child) => Object.assign({}, child.configurationService.read()));
  }
  static ɵfac = function CollectionComponent_Factory(t) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CollectionComponent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionComponent, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, null);
})();
var CollectionItemComponent = class _CollectionItemComponent {
  configurationService;
  collectionChangesService;
  constructor(configurationService, collectionChangesService) {
    this.configurationService = configurationService;
    this.collectionChangesService = collectionChangesService;
  }
  ngOnChanges(changes) {
    this.configurationService.copyChanges("", changes);
    this.collectionChangesService.hasChanges = true;
  }
  static ɵfac = function CollectionItemComponent_Factory(t) {
    return new (t || _CollectionItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CollectionItemComponent,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionItemComponent, [{
    type: Directive
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, null);
})();
var packageMetadata = {
  name: "@progress/kendo-angular-gauges",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1748538838,
  version: "19.1.0",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var inDocument = (element) => {
  let node = element;
  while (node && node !== document.body) {
    node = node.parentNode;
  }
  return Boolean(node);
};
var GaugeComponent = class _GaugeComponent {
  configurationService;
  themeService;
  intlService;
  localizationService;
  element;
  renderer;
  ngZone;
  /**
   * Specifies options for the Gauge area.
   */
  gaugeArea;
  /**
   * Specifies the output type.
   */
  renderAs;
  /**
   * The maximum number of times the Gauge resizes per second.
   * Defaults to `10`. To disable the automatic resizing, set `resizeRateLimit` to `0`.
   */
  resizeRateLimit = 10;
  /**
   * Specifies the scale options.
   */
  scale;
  /**
   * Specifies if the changes will be animated.
   */
  transitions;
  surfaceElement;
  resizeSensor;
  className = true;
  options;
  theme = null;
  instance;
  subscriptions;
  redrawTimeout;
  rtl = false;
  constructor(configurationService, themeService, intlService, localizationService, element, renderer, ngZone) {
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.intlService = intlService;
    this.localizationService = localizationService;
    this.element = element;
    this.renderer = renderer;
    this.ngZone = ngZone;
    validatePackage(packageMetadata);
  }
  ngOnInit() {
    this.setDirection();
    this.subscriptions = this.intlService.changes.subscribe(this.intlChange.bind(this));
    this.subscriptions.add(this.localizationService.changes.subscribe(this.rtlChange.bind(this)));
  }
  ngAfterViewChecked() {
    if (typeof document === "undefined") {
      return;
    }
    let updateMethod;
    if (!this.instance) {
      updateMethod = this.init;
    } else if (this.configurationService.hasChanges) {
      updateMethod = this.updateOptions;
    } else if (this.configurationService.valueChange) {
      updateMethod = this.setValues;
    }
    if (updateMethod) {
      clearTimeout(this.redrawTimeout);
      if (!this.instance && !inDocument(this.element.nativeElement)) {
        this.defer(() => {
          this.updateCall(updateMethod);
        });
      } else {
        this.updateCall(updateMethod);
      }
    }
  }
  updateCall(updateMethod) {
    this.updateDirection();
    updateMethod.call(this);
    this.updateSize();
  }
  updateOptions() {
    this.instance.setOptions(this.configurationService.read());
  }
  setValues() {
    this.instance.allValues(this.configurationService.readValues());
  }
  ngOnChanges(changes) {
    this.configurationService.copyChanges("", changes);
  }
  ngOnDestroy() {
    if (this.instance) {
      this.instance.destroy();
    }
    this.subscriptions.unsubscribe();
    clearTimeout(this.redrawTimeout);
  }
  /**
   * Exports the Gauge as an image. The export operation is asynchronous and returns a promise.
   *
   * @param {ImageExportOptions} options - The parameters for the exported image.
   * @returns {Promise<string>} - A promise that will be resolved with a PNG image that is encoded as a Data URI.
   */
  exportImage(options = {}) {
    return this.exportVisual().then((visual) => {
      return exportImage(visual, options);
    });
  }
  /**
   * Exports the Gauge as an SVG document. The export operation is asynchronous and returns a promise.
   *
   * @param {SVGExportOptions} options - The parameters for the exported file.
   * @returns {Promise<string>} - A promise that will be resolved with an SVG document that is encoded as a Data URI.
   */
  exportSVG(options = {}) {
    return this.exportVisual().then((visual) => {
      return exportSVG(visual, options);
    });
  }
  /**
   * Exports the Gauge as a Drawing `Scene`.
   *
   * @returns {Promise<Group>} - A promise that will be resolved with the export visual.
   */
  exportVisual() {
    return Promise.resolve(this.instance.exportVisual());
  }
  /**
   * @hidden
   */
  onResize() {
    if (this.autoResize) {
      this.resize();
    }
  }
  /**
   * Detects the size of the container and redraws the Gauge.
   * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
   */
  resize() {
    if (this.instance) {
      this.instance.resize();
    }
  }
  init() {
    if (!this.surfaceElement) {
      return;
    }
    this.createInstance(this.surfaceElement.nativeElement, this.configurationService.read(), this.themeService.read(), {
      intlService: this.intlService,
      rtl: this.rtl
    });
  }
  get autoResize() {
    return this.resizeRateLimit > 0;
  }
  updateSize() {
    this.resizeSensor.acceptSize();
  }
  intlChange() {
    if (this.instance) {
      this.deferredRedraw();
    }
  }
  rtlChange() {
    if (this.instance && this.rtl !== this.isRTL) {
      this.deferredRedraw();
    }
  }
  deferredRedraw() {
    this.defer(() => {
      this.updateDirection();
      this.instance.noTransitionsRedraw();
    });
  }
  defer(callback) {
    this.ngZone.runOutsideAngular(() => {
      clearTimeout(this.redrawTimeout);
      this.redrawTimeout = setTimeout(callback, 0);
    });
  }
  updateDirection() {
    const current = this.isRTL;
    if (this.rtl !== current) {
      this.setDirection();
      if (this.instance) {
        this.instance.setDirection(current);
      }
    }
  }
  setDirection() {
    this.rtl = this.isRTL;
    if (this.element) {
      this.renderer.setAttribute(this.element.nativeElement, "dir", this.rtl ? "rtl" : "ltr");
    }
  }
  get isRTL() {
    return Boolean(this.localizationService.rtl);
  }
  static ɵfac = function GaugeComponent_Factory(t) {
    return new (t || _GaugeComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _GaugeComponent,
    viewQuery: function GaugeComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
        ɵɵviewQuery(ResizeSensorComponent, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.surfaceElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resizeSensor = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function GaugeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-gauge", ctx.className);
      }
    },
    inputs: {
      gaugeArea: "gaugeArea",
      renderAs: "renderAs",
      resizeRateLimit: "resizeRateLimit",
      scale: "scale",
      transitions: "transitions"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeComponent, [{
    type: Directive
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    gaugeArea: [{
      type: Input
    }],
    renderAs: [{
      type: Input
    }],
    resizeRateLimit: [{
      type: Input
    }],
    scale: [{
      type: Input
    }],
    transitions: [{
      type: Input
    }],
    surfaceElement: [{
      type: ViewChild,
      args: ["surface", {
        static: true
      }]
    }],
    resizeSensor: [{
      type: ViewChild,
      args: [ResizeSensorComponent, {
        static: true
      }]
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-gauge"]
    }]
  });
})();
var SettingsComponent = class _SettingsComponent {
  key;
  configurationService;
  constructor(key, configurationService) {
    this.key = key;
    this.configurationService = configurationService;
  }
  ngOnChanges(changes) {
    this.configurationService.copyChanges(this.key, changes);
  }
  ngOnDestroy() {
    this.configurationService.set(this.key, null);
  }
  static ɵfac = function SettingsComponent_Factory(t) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SettingsComponent,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ConfigurationService
    }];
  }, null);
})();
var GaugeAreaComponent = class _GaugeAreaComponent extends SettingsComponent {
  key;
  configurationService;
  /**
   * The background of the Gauge area. Accepts valid CSS color strings, including hex and rgb.
   */
  background;
  /**
   * The border of the Gauge area.
   */
  border;
  /**
   * The height of the Gauge area.
   */
  height;
  /**
   * The margin of the Gauge area.
   */
  margin;
  /**
   * The width of the Gauge area.
   */
  width;
  // due to NG error: The directive GaugeAreaComponent inherits its constructor from SettingsComponent, but the latter has a constructor parameter 
  // that is not compatible with dependency injection. Either add an explicit constructor to ScaleComponent or change SettingsComponent's constructor 
  // to use parameters that are valid for DI.(-992016)
  constructor(key, configurationService) {
    super("gaugeArea", configurationService);
    this.key = key;
    this.configurationService = configurationService;
  }
  static ɵfac = function GaugeAreaComponent_Factory(t) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _GaugeAreaComponent,
    inputs: {
      background: "background",
      border: "border",
      height: "height",
      margin: "margin",
      width: "width"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugeAreaComponent, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    width: [{
      type: Input
    }]
  });
})();
var LabelsComponent = class _LabelsComponent extends SettingsComponent {
  key;
  configurationService;
  /**
   * The background of the labels.
   * Accepts valid CSS color strings, including hex and rgb.
   */
  background;
  /**
   * The border of the labels.
   */
  border;
  /**
   * The color of the labels.
   * Accepts valid CSS color strings, including hex and rgb.
   */
  color;
  /**
   * The font of the labels.
   */
  font;
  /**
   * The format that is used to display the labels.
   * Uses the IntlService [`format`]({% slug api_intl_intlservice %}#toc-format) method.
   */
  format;
  /**
   * The margin of the labels.
   */
  margin;
  /**
   * The padding of the labels.
   */
  padding;
  /**
   * The function which returns the label content.
   *
   * The available fields in the function argument are:
   *
   * - `value`&mdash;The value of the label.
   */
  content;
  /**
   * The visibility of the labels.
   */
  visible;
  // due to NG error: The directive LabelsComponent inherits its constructor from SettingsComponent, but the latter has a constructor parameter 
  // that is not compatible with dependency injection. Either add an explicit constructor to ScaleComponent or change SettingsComponent's constructor 
  // to use parameters that are valid for DI.(-992016)
  constructor(key, configurationService) {
    super("label", configurationService);
    this.key = key;
    this.configurationService = configurationService;
  }
  static ɵfac = function LabelsComponent_Factory(t) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LabelsComponent,
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      content: "content",
      visible: "visible"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LabelsComponent, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var RangeComponent = class _RangeComponent extends CollectionItemComponent {
  /**
   * The start position of the range.
   */
  from;
  /**
   * The end position of the range.
   */
  to;
  /**
   * The range opacity.
   */
  opacity;
  /**
   * The color of the range. Accepts valid CSS color strings, including hex and rgb.
   */
  color;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRangeComponent_BaseFactory;
    return function RangeComponent_Factory(t) {
      return (ɵRangeComponent_BaseFactory || (ɵRangeComponent_BaseFactory = ɵɵgetInheritedFactory(_RangeComponent)))(t || _RangeComponent);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _RangeComponent,
    inputs: {
      from: "from",
      to: "to",
      opacity: "opacity",
      color: "color"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RangeComponent, [{
    type: Directive
  }], null, {
    from: [{
      type: Input
    }],
    to: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    color: [{
      type: Input
    }]
  });
})();
var ScaleComponent = class _ScaleComponent extends SettingsComponent {
  key;
  configurationService;
  labels;
  majorTicks;
  minorTicks;
  min;
  max;
  minorUnit;
  majorUnit;
  reverse;
  rangeSize;
  rangePlaceholderColor;
  // due to NG error: The directive ScaleComponent inherits its constructor from SettingsComponent, but the latter has a constructor parameter 
  // that is not compatible with dependency injection. Either add an explicit constructor to ScaleComponent or change SettingsComponent's constructor 
  // to use parameters that are valid for DI.(-992016)
  constructor(key, configurationService) {
    super("scale", configurationService);
    this.key = key;
    this.configurationService = configurationService;
  }
  static ɵfac = function ScaleComponent_Factory(t) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _ScaleComponent,
    inputs: {
      labels: "labels",
      majorTicks: "majorTicks",
      minorTicks: "minorTicks",
      min: "min",
      max: "max",
      minorUnit: "minorUnit",
      majorUnit: "majorUnit",
      reverse: "reverse",
      rangeSize: "rangeSize",
      rangePlaceholderColor: "rangePlaceholderColor"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScaleComponent, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }, {
      type: ConfigurationService
    }];
  }, {
    labels: [{
      type: Input
    }],
    majorTicks: [{
      type: Input
    }],
    minorTicks: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    minorUnit: [{
      type: Input
    }],
    majorUnit: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    rangeSize: [{
      type: Input
    }],
    rangePlaceholderColor: [{
      type: Input
    }]
  });
})();
var ArcGaugeComponent = class _ArcGaugeComponent extends GaugeComponent {
  changeDetector;
  /**
   * The value of the gauge.
   */
  value;
  /**
   * The color of the value pointer. Accepts a valid CSS color string, including hex and rgb.
   */
  color;
  /**
   * The color ranges of the value pointer.
   */
  colors;
  /**
   * The opacity of the value pointer.
   */
  opacity;
  /**
   * The scale options of the ArcGauge.
   */
  scale;
  centerTemplate;
  labelElement;
  className = true;
  centerTemplateContext = {};
  constructor(changeDetector, configurationService, themeService, intlService, localizationService, element, renderer, ngZone) {
    super(configurationService, themeService, intlService, localizationService, element, renderer, ngZone);
    this.changeDetector = changeDetector;
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.element) {
      this.renderer.setStyle(this.element.nativeElement, "position", "relative");
    }
  }
  ngAfterViewChecked() {
    super.ngAfterViewChecked();
    if (this.labelElement && !this.centerTemplate) {
      this.changeDetector.detectChanges();
    } else if (!this.labelElement && this.centerTemplate) {
      this.updateCenterTemplate();
    }
  }
  /**
   * Exports the gauge as a Drawing `Scene`.
   *
   * @returns {Promise<Group>} - A promise that will be resolved with the export visual.
   */
  exportVisual() {
    return drawDOM(this.element.nativeElement);
  }
  /**
   * Detects the size of the container and redraws the Gauge.
   * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
   */
  resize() {
    super.resize();
    this.updateCenterTemplate();
  }
  createInstance(element, options, theme, context) {
    this.instance = new arc_gauge_default(element, options, theme, context);
    this.updateElements();
  }
  updateOptions() {
    super.updateOptions();
    this.updateElements();
  }
  setValues() {
    const value = this.configurationService.readValue();
    this.instance.value(value);
    this.updateCenterTemplate();
  }
  updateElements() {
    this.resizeSensor.acceptSize();
    this.updateCenterTemplate();
  }
  updateCenterTemplate() {
    if (!this.instance || !this.centerTemplate) {
      return;
    }
    this.centerTemplateContext.value = this.instance.value();
    this.centerTemplateContext.color = this.instance.currentColor();
    this.changeDetector.detectChanges();
    this.positionLabel();
  }
  positionLabel() {
    if (!this.labelElement) {
      return;
    }
    const element = this.labelElement.nativeElement;
    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const position = this.instance.centerLabelPosition(width, height);
    element.style.top = `${position.top}px`;
    element.style.left = `${position.left}px`;
  }
  static ɵfac = function ArcGaugeComponent_Factory(t) {
    return new (t || _ArcGaugeComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ArcGaugeComponent,
    selectors: [["kendo-arcgauge"]],
    contentQueries: function ArcGaugeComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ArcCenterTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centerTemplate = _t.first);
      }
    },
    viewQuery: function ArcGaugeComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.labelElement = _t.first);
      }
    },
    hostVars: 2,
    hostBindings: function ArcGaugeComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("k-arcgauge", ctx.className);
      }
    },
    inputs: {
      value: "value",
      color: "color",
      colors: "colors",
      opacity: "opacity",
      scale: "scale"
    },
    exportAs: ["kendoArcGauge"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.arcgauge"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 2,
    consts: [["surface", ""], ["label", ""], [1, "k-chart-surface"], ["class", "k-arcgauge-label", 4, "ngIf"], [3, "resize", "rateLimit"], [1, "k-arcgauge-label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ArcGaugeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "div", 2, 0);
        ɵɵtemplate(2, ArcGaugeComponent_div_2_Template, 3, 2, "div", 3);
        ɵɵelementStart(3, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function ArcGaugeComponent_Template_kendo_resize_sensor_resize_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.centerTemplate);
        ɵɵadvance();
        ɵɵproperty("rateLimit", ctx.resizeRateLimit);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, ResizeSensorComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcGaugeComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoArcGauge",
      providers: [ConfigurationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.arcgauge"
      }],
      selector: "kendo-arcgauge",
      template: `
    <div #surface class='k-chart-surface'></div>
    <div class="k-arcgauge-label" *ngIf="centerTemplate" #label>
        <ng-template [ngTemplateOutlet]="centerTemplate.templateRef" [ngTemplateOutletContext]="centerTemplateContext"></ng-template>
    </div>
    <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
  `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    value: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    colors: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    scale: [{
      type: Input
    }],
    centerTemplate: [{
      type: ContentChild,
      args: [ArcCenterTemplateDirective, {
        static: false
      }]
    }],
    labelElement: [{
      type: ViewChild,
      args: ["label", {
        static: false
      }]
    }],
    className: [{
      type: HostBinding,
      args: ["class.k-arcgauge"]
    }]
  });
})();
var ColorComponent = class _ColorComponent extends CollectionItemComponent {
  color;
  opacity;
  from;
  to;
  constructor(configurationService, collectionChangesService) {
    super(configurationService, collectionChangesService);
  }
  static ɵfac = function ColorComponent_Factory(t) {
    return new (t || _ColorComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorComponent,
    selectors: [["kendo-arcgauge-color"]],
    inputs: {
      color: "color",
      opacity: "opacity",
      from: "from",
      to: "to"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ColorComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorComponent, [{
    type: Component,
    args: [{
      providers: [ConfigurationService],
      selector: "kendo-arcgauge-color",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    color: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    from: [{
      type: Input
    }],
    to: [{
      type: Input
    }]
  });
})();
var ColorsComponent = class _ColorsComponent extends CollectionComponent {
  children;
  constructor(configurationService, collectionChangesService) {
    super("colors", configurationService, collectionChangesService);
  }
  static ɵfac = function ColorsComponent_Factory(t) {
    return new (t || _ColorsComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ColorsComponent,
    selectors: [["kendo-arcgauge-colors"]],
    contentQueries: function ColorsComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ColorComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionChangesService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ColorsComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ColorsComponent, [{
    type: Component,
    args: [{
      providers: [CollectionChangesService],
      selector: "kendo-arcgauge-colors",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [ColorComponent]
    }]
  });
})();
var ArcGaugeAreaComponent = class _ArcGaugeAreaComponent extends GaugeAreaComponent {
  configurationService;
  constructor(configurationService) {
    super("gaugeArea", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ArcGaugeAreaComponent_Factory(t) {
    return new (t || _ArcGaugeAreaComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ArcGaugeAreaComponent,
    selectors: [["kendo-arcgauge-area"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ArcGaugeAreaComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcGaugeAreaComponent, [{
    type: Component,
    args: [{
      selector: "kendo-arcgauge-area",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var RadialLabelsComponent = class _RadialLabelsComponent extends LabelsComponent {
  configurationService;
  position;
  constructor(configurationService) {
    super("scale.labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function RadialLabelsComponent_Factory(t) {
    return new (t || _RadialLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialLabelsComponent,
    selectors: [["kendo-radialgauge-scale-labels"]],
    inputs: {
      position: "position"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialLabelsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-radialgauge-scale-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    position: [{
      type: Input
    }]
  });
})();
var ArcLabelsComponent = class _ArcLabelsComponent extends RadialLabelsComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    configurationService.set(`${this.key}.visible`, true);
  }
  static ɵfac = function ArcLabelsComponent_Factory(t) {
    return new (t || _ArcLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ArcLabelsComponent,
    selectors: [["kendo-arcgauge-scale-labels"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ArcLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcLabelsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-arcgauge-scale-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var ArcScaleComponent = class _ArcScaleComponent extends ScaleComponent {
  configurationService;
  labels;
  rangeDistance;
  rangeLineCap;
  startAngle;
  endAngle;
  constructor(configurationService) {
    super("scale", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ArcScaleComponent_Factory(t) {
    return new (t || _ArcScaleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ArcScaleComponent,
    selectors: [["kendo-arcgauge-scale"]],
    inputs: {
      labels: "labels",
      rangeDistance: "rangeDistance",
      rangeLineCap: "rangeLineCap",
      startAngle: "startAngle",
      endAngle: "endAngle"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ArcScaleComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcScaleComponent, [{
    type: Component,
    args: [{
      selector: "kendo-arcgauge-scale",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    labels: [{
      type: Input
    }],
    rangeDistance: [{
      type: Input
    }],
    rangeLineCap: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    endAngle: [{
      type: Input
    }]
  });
})();
var CircularGaugeCenterTemplateDirective = class _CircularGaugeCenterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function CircularGaugeCenterTemplateDirective_Factory(t) {
    return new (t || _CircularGaugeCenterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _CircularGaugeCenterTemplateDirective,
    selectors: [["", "kendoCircularGaugeCenterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularGaugeCenterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoCircularGaugeCenterTemplate]",
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
var CircularGaugeComponent = class _CircularGaugeComponent extends ArcGaugeComponent {
  /**
   * The scale options of the gauge.
   */
  scale;
  centerTemplate;
  createInstance(element, options, theme, context) {
    this.instance = new circular_gauge_default(element, options, theme, context);
    this.updateElements();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCircularGaugeComponent_BaseFactory;
    return function CircularGaugeComponent_Factory(t) {
      return (ɵCircularGaugeComponent_BaseFactory || (ɵCircularGaugeComponent_BaseFactory = ɵɵgetInheritedFactory(_CircularGaugeComponent)))(t || _CircularGaugeComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CircularGaugeComponent,
    selectors: [["kendo-circulargauge"]],
    contentQueries: function CircularGaugeComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CircularGaugeCenterTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.centerTemplate = _t.first);
      }
    },
    inputs: {
      scale: "scale"
    },
    exportAs: ["kendoCircularGauge"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.circulargauge"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 2,
    consts: [["surface", ""], ["label", ""], [1, "k-chart-surface"], ["class", "k-arcgauge-label", 4, "ngIf"], [3, "resize", "rateLimit"], [1, "k-arcgauge-label"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function CircularGaugeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "div", 2, 0);
        ɵɵtemplate(2, CircularGaugeComponent_div_2_Template, 3, 2, "div", 3);
        ɵɵelementStart(3, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function CircularGaugeComponent_Template_kendo_resize_sensor_resize_3_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.centerTemplate);
        ɵɵadvance();
        ɵɵproperty("rateLimit", ctx.resizeRateLimit);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet, ResizeSensorComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularGaugeComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoCircularGauge",
      providers: [ConfigurationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.circulargauge"
      }],
      selector: "kendo-circulargauge",
      template: `
    <div #surface class='k-chart-surface'></div>
    <div class="k-arcgauge-label" *ngIf="centerTemplate" #label>
        <ng-template [ngTemplateOutlet]="centerTemplate.templateRef" [ngTemplateOutletContext]="centerTemplateContext"></ng-template>
    </div>
    <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
  `,
      standalone: true,
      imports: [NgIf, NgTemplateOutlet, ResizeSensorComponent]
    }]
  }], null, {
    scale: [{
      type: Input
    }],
    centerTemplate: [{
      type: ContentChild,
      args: [CircularGaugeCenterTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var CircularGaugeAreaComponent = class _CircularGaugeAreaComponent extends ArcGaugeAreaComponent {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCircularGaugeAreaComponent_BaseFactory;
    return function CircularGaugeAreaComponent_Factory(t) {
      return (ɵCircularGaugeAreaComponent_BaseFactory || (ɵCircularGaugeAreaComponent_BaseFactory = ɵɵgetInheritedFactory(_CircularGaugeAreaComponent)))(t || _CircularGaugeAreaComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CircularGaugeAreaComponent,
    selectors: [["kendo-circulargauge-area"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CircularGaugeAreaComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularGaugeAreaComponent, [{
    type: Component,
    args: [{
      selector: "kendo-circulargauge-area",
      template: "",
      standalone: true
    }]
  }], null, null);
})();
var CircularGaugeLabelsComponent = class _CircularGaugeLabelsComponent extends ArcLabelsComponent {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCircularGaugeLabelsComponent_BaseFactory;
    return function CircularGaugeLabelsComponent_Factory(t) {
      return (ɵCircularGaugeLabelsComponent_BaseFactory || (ɵCircularGaugeLabelsComponent_BaseFactory = ɵɵgetInheritedFactory(_CircularGaugeLabelsComponent)))(t || _CircularGaugeLabelsComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CircularGaugeLabelsComponent,
    selectors: [["kendo-circulargauge-scale-labels"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CircularGaugeLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularGaugeLabelsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-circulargauge-scale-labels",
      template: "",
      standalone: true
    }]
  }], null, null);
})();
var CircularGaugeScaleComponent = class _CircularGaugeScaleComponent extends ArcScaleComponent {
  /**
   * @hidden
   */
  endAngle;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCircularGaugeScaleComponent_BaseFactory;
    return function CircularGaugeScaleComponent_Factory(t) {
      return (ɵCircularGaugeScaleComponent_BaseFactory || (ɵCircularGaugeScaleComponent_BaseFactory = ɵɵgetInheritedFactory(_CircularGaugeScaleComponent)))(t || _CircularGaugeScaleComponent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _CircularGaugeScaleComponent,
    selectors: [["kendo-circulargauge-scale"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CircularGaugeScaleComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularGaugeScaleComponent, [{
    type: Component,
    args: [{
      selector: "kendo-circulargauge-scale",
      template: "",
      standalone: true
    }]
  }], null, null);
})();
var LinearGaugeAreaComponent = class _LinearGaugeAreaComponent extends GaugeAreaComponent {
  configurationService;
  constructor(configurationService) {
    super("gaugeArea", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function LinearGaugeAreaComponent_Factory(t) {
    return new (t || _LinearGaugeAreaComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearGaugeAreaComponent,
    selectors: [["kendo-lineargauge-area"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearGaugeAreaComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearGaugeAreaComponent, [{
    type: Component,
    args: [{
      selector: "kendo-lineargauge-area",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var LinearLabelsComponent = class _LinearLabelsComponent extends LabelsComponent {
  configurationService;
  constructor(configurationService) {
    super("scale.labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function LinearLabelsComponent_Factory(t) {
    return new (t || _LinearLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearLabelsComponent,
    selectors: [["kendo-lineargauge-scale-labels"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearLabelsComponent, [{
    type: Component,
    args: [{
      selector: "kendo-lineargauge-scale-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var LinearGaugeComponent = class _LinearGaugeComponent extends GaugeComponent {
  /**
   * The configuration of the pointers.
   */
  pointer;
  /**
   * The configuration of the scale.
   */
  scale;
  constructor(configurationService, themeService, intlService, localizationService, element, renderer, ngZone) {
    super(configurationService, themeService, intlService, localizationService, element, renderer, ngZone);
  }
  createInstance(element, options, theme, context) {
    this.instance = new linear_gauge_default(element, options, theme, context);
  }
  static ɵfac = function LinearGaugeComponent_Factory(t) {
    return new (t || _LinearGaugeComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearGaugeComponent,
    selectors: [["kendo-lineargauge"]],
    inputs: {
      pointer: "pointer",
      scale: "scale"
    },
    exportAs: ["kendoLinearGauge"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.lineargauge"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["surface", ""], [1, "k-chart-surface"], [3, "resize", "rateLimit"]],
    template: function LinearGaugeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "div", 1, 0);
        ɵɵelementStart(2, "kendo-resize-sensor", 2);
        ɵɵlistener("resize", function LinearGaugeComponent_Template_kendo_resize_sensor_resize_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("rateLimit", ctx.resizeRateLimit);
      }
    },
    dependencies: [ResizeSensorComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearGaugeComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoLinearGauge",
      providers: [ConfigurationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.lineargauge"
      }],
      selector: "kendo-lineargauge",
      template: `
    <div #surface class='k-chart-surface'></div>
    <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
  `,
      standalone: true,
      imports: [ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    pointer: [{
      type: Input
    }],
    scale: [{
      type: Input
    }]
  });
})();
var LinearPointerComponent = class _LinearPointerComponent extends CollectionItemComponent {
  border;
  color;
  margin;
  opacity;
  shape;
  size;
  value;
  constructor(configurationService, collectionChangesService) {
    super(configurationService, collectionChangesService);
  }
  static ɵfac = function LinearPointerComponent_Factory(t) {
    return new (t || _LinearPointerComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearPointerComponent,
    selectors: [["kendo-lineargauge-pointer"]],
    inputs: {
      border: "border",
      color: "color",
      margin: "margin",
      opacity: "opacity",
      shape: "shape",
      size: "size",
      value: "value"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearPointerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearPointerComponent, [{
    type: Component,
    args: [{
      providers: [ConfigurationService],
      selector: "kendo-lineargauge-pointer",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    border: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var LinearPointersComponent = class _LinearPointersComponent extends CollectionComponent {
  children;
  constructor(configurationService, collectionChangesService) {
    super("pointer", configurationService, collectionChangesService);
  }
  static ɵfac = function LinearPointersComponent_Factory(t) {
    return new (t || _LinearPointersComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearPointersComponent,
    selectors: [["kendo-lineargauge-pointers"]],
    contentQueries: function LinearPointersComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, LinearPointerComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionChangesService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearPointersComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearPointersComponent, [{
    type: Component,
    args: [{
      providers: [CollectionChangesService],
      selector: "kendo-lineargauge-pointers",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [LinearPointerComponent]
    }]
  });
})();
var LinearRangeComponent = class _LinearRangeComponent extends RangeComponent {
  constructor(configurationService, collectionChangesService) {
    super(configurationService, collectionChangesService);
  }
  static ɵfac = function LinearRangeComponent_Factory(t) {
    return new (t || _LinearRangeComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearRangeComponent,
    selectors: [["kendo-lineargauge-scale-range"]],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearRangeComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearRangeComponent, [{
    type: Component,
    args: [{
      providers: [ConfigurationService],
      selector: "kendo-lineargauge-scale-range",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, null);
})();
var LinearRangesComponent = class _LinearRangesComponent extends CollectionComponent {
  children;
  constructor(configurationService, collectionChangesService) {
    super("scale.ranges", configurationService, collectionChangesService);
  }
  static ɵfac = function LinearRangesComponent_Factory(t) {
    return new (t || _LinearRangesComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearRangesComponent,
    selectors: [["kendo-lineargauge-scale-ranges"]],
    contentQueries: function LinearRangesComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, LinearRangeComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionChangesService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearRangesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearRangesComponent, [{
    type: Component,
    args: [{
      providers: [CollectionChangesService],
      selector: "kendo-lineargauge-scale-ranges",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [LinearRangeComponent]
    }]
  });
})();
var LinearScaleComponent = class _LinearScaleComponent extends ScaleComponent {
  configurationService;
  line;
  ranges;
  mirror;
  vertical;
  constructor(configurationService) {
    super("scale", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function LinearScaleComponent_Factory(t) {
    return new (t || _LinearScaleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LinearScaleComponent,
    selectors: [["kendo-lineargauge-scale"]],
    inputs: {
      line: "line",
      ranges: "ranges",
      mirror: "mirror",
      vertical: "vertical"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LinearScaleComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearScaleComponent, [{
    type: Component,
    args: [{
      selector: "kendo-lineargauge-scale",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    line: [{
      type: Input
    }],
    ranges: [{
      type: Input
    }],
    mirror: [{
      type: Input
    }],
    vertical: [{
      type: Input
    }]
  });
})();
var RadialGaugeAreaComponent = class _RadialGaugeAreaComponent extends GaugeAreaComponent {
  configurationService;
  constructor(configurationService) {
    super("gaugeArea", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function RadialGaugeAreaComponent_Factory(t) {
    return new (t || _RadialGaugeAreaComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialGaugeAreaComponent,
    selectors: [["kendo-radialgauge-area"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialGaugeAreaComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialGaugeAreaComponent, [{
    type: Component,
    args: [{
      selector: "kendo-radialgauge-area",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var RadialPointerComponent = class _RadialPointerComponent extends CollectionItemComponent {
  cap;
  color;
  length;
  value;
  constructor(configurationService, collectionChangesService) {
    super(configurationService, collectionChangesService);
  }
  static ɵfac = function RadialPointerComponent_Factory(t) {
    return new (t || _RadialPointerComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialPointerComponent,
    selectors: [["kendo-radialgauge-pointer"]],
    inputs: {
      cap: "cap",
      color: "color",
      length: "length",
      value: "value"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialPointerComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialPointerComponent, [{
    type: Component,
    args: [{
      providers: [ConfigurationService],
      selector: "kendo-radialgauge-pointer",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    cap: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    length: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var RadialPointersComponent = class _RadialPointersComponent extends CollectionComponent {
  children;
  constructor(configurationService, collectionChangesService) {
    super("pointer", configurationService, collectionChangesService);
  }
  static ɵfac = function RadialPointersComponent_Factory(t) {
    return new (t || _RadialPointersComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialPointersComponent,
    selectors: [["kendo-radialgauge-pointers"]],
    contentQueries: function RadialPointersComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, RadialPointerComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionChangesService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialPointersComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialPointersComponent, [{
    type: Component,
    args: [{
      providers: [CollectionChangesService],
      selector: "kendo-radialgauge-pointers",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [RadialPointerComponent]
    }]
  });
})();
var RadialGaugeComponent = class _RadialGaugeComponent extends GaugeComponent {
  /**
   * The configuration of the pointers.
   */
  pointer;
  /**
   * The configuration of the scale.
   */
  scale;
  constructor(configurationService, themeService, intlService, localizationService, element, renderer, ngZone) {
    super(configurationService, themeService, intlService, localizationService, element, renderer, ngZone);
  }
  createInstance(element, options, theme, context) {
    this.instance = new radial_gauge_default(element, options, theme, context);
  }
  static ɵfac = function RadialGaugeComponent_Factory(t) {
    return new (t || _RadialGaugeComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialGaugeComponent,
    selectors: [["kendo-radialgauge"]],
    inputs: {
      pointer: "pointer",
      scale: "scale"
    },
    exportAs: ["kendoRadialGauge"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.radialgauge"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 3,
    vars: 1,
    consts: [["surface", ""], [1, "k-chart-surface"], [3, "resize", "rateLimit"]],
    template: function RadialGaugeComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "div", 1, 0);
        ɵɵelementStart(2, "kendo-resize-sensor", 2);
        ɵɵlistener("resize", function RadialGaugeComponent_Template_kendo_resize_sensor_resize_2_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("rateLimit", ctx.resizeRateLimit);
      }
    },
    dependencies: [ResizeSensorComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialGaugeComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoRadialGauge",
      providers: [ConfigurationService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.radialgauge"
      }],
      selector: "kendo-radialgauge",
      template: `
    <div #surface class='k-chart-surface'></div>
    <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
  `,
      standalone: true,
      imports: [ResizeSensorComponent]
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: NgZone
    }];
  }, {
    pointer: [{
      type: Input
    }],
    scale: [{
      type: Input
    }]
  });
})();
var RadialRangeComponent = class _RadialRangeComponent extends RangeComponent {
  constructor(configurationService, collectionChangesService) {
    super(configurationService, collectionChangesService);
  }
  static ɵfac = function RadialRangeComponent_Factory(t) {
    return new (t || _RadialRangeComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialRangeComponent,
    selectors: [["kendo-radialgauge-scale-range"]],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialRangeComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialRangeComponent, [{
    type: Component,
    args: [{
      providers: [ConfigurationService],
      selector: "kendo-radialgauge-scale-range",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, null);
})();
var RadialRangesComponent = class _RadialRangesComponent extends CollectionComponent {
  children;
  constructor(configurationService, collectionChangesService) {
    super("scale.ranges", configurationService, collectionChangesService);
  }
  static ɵfac = function RadialRangesComponent_Factory(t) {
    return new (t || _RadialRangesComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionChangesService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialRangesComponent,
    selectors: [["kendo-radialgauge-scale-ranges"]],
    contentQueries: function RadialRangesComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, RadialRangeComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionChangesService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialRangesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialRangesComponent, [{
    type: Component,
    args: [{
      providers: [CollectionChangesService],
      selector: "kendo-radialgauge-scale-ranges",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionChangesService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [RadialRangeComponent]
    }]
  });
})();
var RadialScaleComponent = class _RadialScaleComponent extends ScaleComponent {
  configurationService;
  labels;
  rangeDistance;
  ranges;
  startAngle;
  endAngle;
  constructor(configurationService) {
    super("scale", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function RadialScaleComponent_Factory(t) {
    return new (t || _RadialScaleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _RadialScaleComponent,
    selectors: [["kendo-radialgauge-scale"]],
    inputs: {
      labels: "labels",
      rangeDistance: "rangeDistance",
      ranges: "ranges",
      startAngle: "startAngle",
      endAngle: "endAngle"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function RadialScaleComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialScaleComponent, [{
    type: Component,
    args: [{
      selector: "kendo-radialgauge-scale",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    labels: [{
      type: Input
    }],
    rangeDistance: [{
      type: Input
    }],
    ranges: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    endAngle: [{
      type: Input
    }]
  });
})();
var KENDO_ARCGAUGE = [ArcGaugeComponent, ArcCenterTemplateDirective, ArcGaugeAreaComponent, ArcScaleComponent, ArcLabelsComponent, ColorsComponent, ColorComponent];
var KENDO_CIRCULARGAUGE = [CircularGaugeComponent, CircularGaugeCenterTemplateDirective, CircularGaugeAreaComponent, CircularGaugeScaleComponent, CircularGaugeLabelsComponent];
var KENDO_LINEARGAUGE = [LinearGaugeComponent, LinearGaugeAreaComponent, LinearScaleComponent, LinearLabelsComponent, LinearPointersComponent, LinearPointerComponent, LinearRangeComponent, LinearRangesComponent];
var KENDO_RADIALGAUGE = [RadialGaugeComponent, RadialGaugeAreaComponent, RadialScaleComponent, RadialLabelsComponent, RadialPointersComponent, RadialPointerComponent, RadialRangeComponent, RadialRangesComponent];
var KENDO_GAUGES = [...KENDO_ARCGAUGE, ...KENDO_CIRCULARGAUGE, ...KENDO_LINEARGAUGE, ...KENDO_RADIALGAUGE];
var ArcGaugeModule = class _ArcGaugeModule {
  static ɵfac = function ArcGaugeModule_Factory(t) {
    return new (t || _ArcGaugeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ArcGaugeModule,
    imports: [ArcGaugeComponent, ArcCenterTemplateDirective, ArcGaugeAreaComponent, ArcScaleComponent, ArcLabelsComponent, ColorsComponent, ColorComponent],
    exports: [ArcGaugeComponent, ArcCenterTemplateDirective, ArcGaugeAreaComponent, ArcScaleComponent, ArcLabelsComponent, ColorsComponent, ColorComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService],
    imports: [ArcGaugeComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArcGaugeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_ARCGAUGE],
      imports: [...KENDO_ARCGAUGE],
      providers: [ThemeService]
    }]
  }], null, null);
})();
var LinearGaugeModule = class _LinearGaugeModule {
  static ɵfac = function LinearGaugeModule_Factory(t) {
    return new (t || _LinearGaugeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _LinearGaugeModule,
    imports: [LinearGaugeComponent, LinearGaugeAreaComponent, LinearScaleComponent, LinearLabelsComponent, LinearPointersComponent, LinearPointerComponent, LinearRangeComponent, LinearRangesComponent],
    exports: [LinearGaugeComponent, LinearGaugeAreaComponent, LinearScaleComponent, LinearLabelsComponent, LinearPointersComponent, LinearPointerComponent, LinearRangeComponent, LinearRangesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService],
    imports: [LinearGaugeComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LinearGaugeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_LINEARGAUGE],
      imports: [...KENDO_LINEARGAUGE],
      providers: [ThemeService]
    }]
  }], null, null);
})();
var RadialGaugeModule = class _RadialGaugeModule {
  static ɵfac = function RadialGaugeModule_Factory(t) {
    return new (t || _RadialGaugeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _RadialGaugeModule,
    imports: [RadialGaugeComponent, RadialGaugeAreaComponent, RadialScaleComponent, RadialLabelsComponent, RadialPointersComponent, RadialPointerComponent, RadialRangeComponent, RadialRangesComponent],
    exports: [RadialGaugeComponent, RadialGaugeAreaComponent, RadialScaleComponent, RadialLabelsComponent, RadialPointersComponent, RadialPointerComponent, RadialRangeComponent, RadialRangesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService],
    imports: [RadialGaugeComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RadialGaugeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_RADIALGAUGE],
      imports: [...KENDO_RADIALGAUGE],
      providers: [ThemeService]
    }]
  }], null, null);
})();
var CircularGaugeModule = class _CircularGaugeModule {
  static ɵfac = function CircularGaugeModule_Factory(t) {
    return new (t || _CircularGaugeModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CircularGaugeModule,
    imports: [CircularGaugeComponent, CircularGaugeCenterTemplateDirective, CircularGaugeAreaComponent, CircularGaugeScaleComponent, CircularGaugeLabelsComponent],
    exports: [CircularGaugeComponent, CircularGaugeCenterTemplateDirective, CircularGaugeAreaComponent, CircularGaugeScaleComponent, CircularGaugeLabelsComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService],
    imports: [CircularGaugeComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CircularGaugeModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_CIRCULARGAUGE],
      imports: [...KENDO_CIRCULARGAUGE],
      providers: [ThemeService]
    }]
  }], null, null);
})();
var GaugesModule = class _GaugesModule {
  static ɵfac = function GaugesModule_Factory(t) {
    return new (t || _GaugesModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _GaugesModule,
    imports: [ArcGaugeComponent, ArcCenterTemplateDirective, ArcGaugeAreaComponent, ArcScaleComponent, ArcLabelsComponent, ColorsComponent, ColorComponent, CircularGaugeComponent, CircularGaugeCenterTemplateDirective, CircularGaugeAreaComponent, CircularGaugeScaleComponent, CircularGaugeLabelsComponent, LinearGaugeComponent, LinearGaugeAreaComponent, LinearScaleComponent, LinearLabelsComponent, LinearPointersComponent, LinearPointerComponent, LinearRangeComponent, LinearRangesComponent, RadialGaugeComponent, RadialGaugeAreaComponent, RadialScaleComponent, RadialLabelsComponent, RadialPointersComponent, RadialPointerComponent, RadialRangeComponent, RadialRangesComponent],
    exports: [ArcGaugeComponent, ArcCenterTemplateDirective, ArcGaugeAreaComponent, ArcScaleComponent, ArcLabelsComponent, ColorsComponent, ColorComponent, CircularGaugeComponent, CircularGaugeCenterTemplateDirective, CircularGaugeAreaComponent, CircularGaugeScaleComponent, CircularGaugeLabelsComponent, LinearGaugeComponent, LinearGaugeAreaComponent, LinearScaleComponent, LinearLabelsComponent, LinearPointersComponent, LinearPointerComponent, LinearRangeComponent, LinearRangesComponent, RadialGaugeComponent, RadialGaugeAreaComponent, RadialScaleComponent, RadialLabelsComponent, RadialPointersComponent, RadialPointerComponent, RadialRangeComponent, RadialRangesComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService],
    imports: [ArcGaugeComponent, CircularGaugeComponent, LinearGaugeComponent, RadialGaugeComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GaugesModule, [{
    type: NgModule,
    args: [{
      exports: [...KENDO_GAUGES],
      imports: [...KENDO_GAUGES],
      providers: [ThemeService]
    }]
  }], null, null);
})();
export {
  ArcCenterTemplateDirective,
  ArcGaugeAreaComponent,
  ArcGaugeComponent,
  ArcGaugeModule,
  ArcLabelsComponent,
  ArcScaleComponent,
  CircularGaugeAreaComponent,
  CircularGaugeCenterTemplateDirective,
  CircularGaugeComponent,
  CircularGaugeLabelsComponent,
  CircularGaugeModule,
  CircularGaugeScaleComponent,
  CollectionChangesService,
  CollectionComponent,
  CollectionItemComponent,
  ColorComponent,
  ColorsComponent,
  ConfigurationService,
  GaugeAreaComponent,
  GaugeComponent,
  GaugesModule,
  KENDO_ARCGAUGE,
  KENDO_CIRCULARGAUGE,
  KENDO_GAUGES,
  KENDO_LINEARGAUGE,
  KENDO_RADIALGAUGE,
  LabelsComponent,
  LinearGaugeAreaComponent,
  LinearGaugeComponent,
  LinearGaugeModule,
  LinearLabelsComponent,
  LinearPointerComponent,
  LinearPointersComponent,
  LinearRangeComponent,
  LinearRangesComponent,
  LinearScaleComponent,
  RadialGaugeAreaComponent,
  RadialGaugeComponent,
  RadialGaugeModule,
  RadialLabelsComponent,
  RadialPointerComponent,
  RadialPointersComponent,
  RadialRangeComponent,
  RadialRangesComponent,
  RadialScaleComponent,
  RangeComponent,
  ScaleComponent,
  SettingsComponent,
  ThemeService
};
//# sourceMappingURL=@progress_kendo-angular-gauges.js.map
