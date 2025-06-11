import {
  Sankey,
  baseTheme,
  chartTheme,
  chart_default,
  createSankeyData,
  date_category_axis_default,
  date_value_axis_default,
  deepExtend,
  instance_observer_default,
  sankeyTheme,
  sparkline_default,
  stock_chart_default
} from "./chunk-7OI3DNUN.js";
import {
  exportImage,
  exportSVG
} from "./chunk-ZJJ2SPTS.js";
import {
  IntlService
} from "./chunk-IENMZ6ZE.js";
import {
  BreadCrumbComponent
} from "./chunk-G2IGECBX.js";
import {
  POPUP_CONTAINER,
  PopupService
} from "./chunk-ZV3R3EPT.js";
import {
  arrowLeftIcon,
  arrowRightIcon,
  homeIcon
} from "./chunk-2A7OSQWA.js";
import {
  IconWrapperComponent,
  IconsService
} from "./chunk-2RQ6XJGS.js";
import {
  PreventableEvent,
  ResizeBatchService,
  ResizeSensorComponent,
  WatermarkOverlayComponent,
  getter,
  isChanged,
  isDocumentAvailable,
  shouldShowValidationUI
} from "./chunk-TCXXA5LR.js";
import {
  ComponentMessages,
  L10N_PREFIX,
  LocalizationService
} from "./chunk-632K3S7H.js";
import {
  validatePackage
} from "./chunk-D2DMRN4R.js";
import "./chunk-PMNJ5QTY.js";
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
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  LOCALE_ID,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  SimpleChange,
  TemplateRef,
  ViewChild,
  ViewChildren,
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
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-DTS3OAND.js";
import {
  BehaviorSubject,
  Subject,
  Subscription,
  auditTime,
  combineLatest,
  tap
} from "./chunk-BTNZXMHM.js";
import "./chunk-QEJIEICB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-XWLXMCJQ.js";

// node_modules/@progress/kendo-angular-charts/fesm2022/progress-kendo-angular-charts.mjs
var _c0 = ["content"];
function CrosshairTooltipComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.style);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.value, " ");
  }
}
function CrosshairTooltipsContainerComponent_kendo_chart_crosshair_tooltip_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "kendo-chart-crosshair-tooltip", 1);
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("key", key_r1)("popupSettings", ctx_r1.popupSettings);
  }
}
function TooltipPopupComponent_ng_template_0_1_ng_template_0_Template(rf, ctx) {
}
function TooltipPopupComponent_ng_template_0_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TooltipPopupComponent_ng_template_0_1_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.seriesTooltipTemplateRef)("ngTemplateOutletContext", ctx_r0.seriesTooltipContext);
  }
}
function TooltipPopupComponent_ng_template_0_2_ng_template_0_Template(rf, ctx) {
}
function TooltipPopupComponent_ng_template_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TooltipPopupComponent_ng_template_0_2_ng_template_0_Template, 0, 0, "ng-template", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.seriesSharedTooltipTemplateRef)("ngTemplateOutletContext", ctx_r0.seriesSharedTooltipContext);
  }
}
function TooltipPopupComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3);
    ɵɵtemplate(1, TooltipPopupComponent_ng_template_0_1_Template, 1, 2, null, 4)(2, TooltipPopupComponent_ng_template_0_2_Template, 1, 2, null, 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.popupClasses)("ngStyle", ctx_r0.style);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r0.shared);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.shared);
  }
}
function TooltipPopupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
  }
  if (rf & 2) {
    const formattedValue_r2 = ctx.formattedValue;
    ɵɵproperty("innerHTML", formattedValue_r2, ɵɵsanitizeHtml);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵelement(1, "span", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const point_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵstyleProp("background-color", point_r3.series.color);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const point_r3 = ɵɵnextContext(2).$implicit;
    ɵɵadvance();
    ɵɵtextInterpolate(point_r3.series.name);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtext(1, " ");
    ɵɵelementContainerEnd();
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_td_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td");
    ɵɵtemplate(1, TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_1_Template, 2, 1, "ng-container", 4)(2, TooltipPopupComponent_ng_template_3_tr_4_td_2_ng_container_2_Template, 2, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const point_r3 = ɵɵnextContext().$implicit;
    ɵɵadvance();
    ɵɵproperty("ngIf", point_r3.series.name !== void 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", point_r3.series.name === void 0);
  }
}
function TooltipPopupComponent_ng_template_3_tr_4_ng_template_4_Template(rf, ctx) {
}
function TooltipPopupComponent_ng_template_3_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, TooltipPopupComponent_ng_template_3_tr_4_td_1_Template, 2, 2, "td", 4)(2, TooltipPopupComponent_ng_template_3_tr_4_td_2_Template, 3, 2, "td", 4);
    ɵɵelementStart(3, "td");
    ɵɵtemplate(4, TooltipPopupComponent_ng_template_3_tr_4_ng_template_4_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const point_r3 = ctx.$implicit;
    const ctx_r3 = ɵɵnextContext();
    const colorMarker_r5 = ctx_r3.colorMarker;
    const nameColumn_r6 = ctx_r3.nameColumn;
    ɵɵadvance();
    ɵɵproperty("ngIf", colorMarker_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", nameColumn_r6);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", point_r3.template)("ngTemplateOutletContext", point_r3);
  }
}
function TooltipPopupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "table")(1, "tr")(2, "th");
    ɵɵtext(3);
    ɵɵelementEnd()();
    ɵɵtemplate(4, TooltipPopupComponent_ng_template_3_tr_4_Template, 5, 4, "tr", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const points_r7 = ctx.points;
    const categoryText_r8 = ctx.categoryText;
    const colspan_r9 = ctx.colspan;
    ɵɵadvance(2);
    ɵɵattribute("colspan", colspan_r9);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", categoryText_r8, " ");
    ɵɵadvance();
    ɵɵproperty("ngForOf", points_r7);
  }
}
var _c1 = ["surface"];
function ChartComponent_div_3_2_ng_template_0_Template(rf, ctx) {
}
function ChartComponent_div_3_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ChartComponent_div_3_2_ng_template_0_Template, 0, 0, "ng-template", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.noDataTemplate.templateRef);
  }
}
function ChartComponent_div_3_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtext(0);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵtextInterpolate1(" ", ctx_r1.messageFor("noData"), " ");
  }
}
function ChartComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10)(1, "div", 11);
    ɵɵtemplate(2, ChartComponent_div_3_2_Template, 1, 1, null, 12)(3, ChartComponent_div_3_ng_template_3_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const noDataMessage_r3 = ɵɵreference(4);
    const ctx_r1 = ɵɵnextContext();
    ɵɵstyleProp("display", "none");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.noDataTemplate)("ngIfElse", noDataMessage_r3);
  }
}
function ChartComponent_div_7_ng_template_1_Template(rf, ctx) {
}
function ChartComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 14);
    ɵɵtemplate(1, ChartComponent_div_7_ng_template_1_Template, 0, 0, "ng-template", 13);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r1.donutCenterStyle);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.donutCenterTemplate.templateRef);
  }
}
function ChartComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 15);
  }
}
function StockChartComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
}
function SparklineComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 6);
  }
}
var _c2 = ["breadcrumb"];
function SankeyTooltipPopupComponent_ng_template_0_2_ng_template_0_Template(rf, ctx) {
}
function SankeyTooltipPopupComponent_ng_template_0_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SankeyTooltipPopupComponent_ng_template_0_2_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.nodeTooltipTemplateRef)("ngTemplateOutletContext", ctx_r0.nodeTooltipContext);
  }
}
function SankeyTooltipPopupComponent_ng_template_0_3_ng_template_0_Template(rf, ctx) {
}
function SankeyTooltipPopupComponent_ng_template_0_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, SankeyTooltipPopupComponent_ng_template_0_3_ng_template_0_Template, 0, 0, "ng-template", 6);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.linkTooltipTemplateRef)("ngTemplateOutletContext", ctx_r0.linkTooltipContext);
  }
}
function SankeyTooltipPopupComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 3)(1, "div", 4);
    ɵɵtemplate(2, SankeyTooltipPopupComponent_ng_template_0_2_Template, 1, 2, null, 5)(3, SankeyTooltipPopupComponent_ng_template_0_3_Template, 1, 2, null, 5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.style);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r0.isNode);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.isLink);
  }
}
function SankeyTooltipPopupComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "div", 8);
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "span", 7);
    ɵɵtext(5);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const color_r2 = ctx.color;
    const label_r3 = ctx.label;
    const value_r4 = ctx.value;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.tooltipStyle);
    ɵɵadvance();
    ɵɵproperty("color", color_r2);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.textStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(label_r3.text);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.textStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.formatUnits(value_r4));
  }
}
function SankeyTooltipPopupComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 7);
    ɵɵelement(1, "div", 8);
    ɵɵelementStart(2, "span", 7);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "kendo-icon-wrapper", 9)(5, "div", 8);
    ɵɵelementStart(6, "span", 7);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementStart(8, "span", 7);
    ɵɵtext(9);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const source_r5 = ctx.source;
    const target_r6 = ctx.target;
    const value_r7 = ctx.value;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.tooltipStyle);
    ɵɵadvance();
    ɵɵproperty("color", source_r5.color);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.textStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(source_r5.label == null ? null : source_r5.label.text);
    ɵɵadvance();
    ɵɵproperty("name", ctx_r0.arrowIcon.name)("svgIcon", ctx_r0.arrowIcon);
    ɵɵadvance();
    ɵɵproperty("color", target_r6.color);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.textStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(target_r6.label == null ? null : target_r6.label.text);
    ɵɵadvance();
    ɵɵproperty("ngStyle", ctx_r0.textStyle);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.formatUnits(value_r7));
  }
}
var _c3 = ["instance"];
function SankeyComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 5);
  }
}
var dateCategoryAxisFormats = date_category_axis_default.prototype.options.labels.dateFormats;
var dateValueAxisFormats = date_value_axis_default.prototype.options.labels.dateFormats;
var dateFormats = {
  milliseconds: "HH:mm:ss.SSS",
  seconds: {
    time: "medium"
  },
  minutes: {
    time: "short"
  },
  hours: {
    time: "short"
  },
  days: {
    skeleton: "Md"
  },
  weeks: {
    skeleton: "Md"
  },
  months: {
    skeleton: "yyMMM"
  },
  years: {
    skeleton: "y"
  }
};
Object.assign(dateCategoryAxisFormats, dateFormats);
Object.assign(dateValueAxisFormats, dateFormats);
var DonutCenterTemplateDirective = class _DonutCenterTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function DonutCenterTemplateDirective_Factory(t) {
    return new (t || _DonutCenterTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _DonutCenterTemplateDirective,
    selectors: [["", "kendoChartDonutCenterTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonutCenterTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoChartDonutCenterTemplate]",
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
var NoDataTemplateDirective = class _NoDataTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function NoDataTemplateDirective_Factory(t) {
    return new (t || _NoDataTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _NoDataTemplateDirective,
    selectors: [["", "kendoChartNoDataTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoChartNoDataTemplate]",
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
var ItemChange = class {
  sender;
  options;
  constructor(sender, options) {
    this.sender = sender;
    this.options = options;
  }
};
var CollectionService = class _CollectionService {
  onItemChange$;
  source;
  constructor() {
    this.source = new Subject();
    this.onItemChange$ = this.source.asObservable();
  }
  notify(change) {
    this.source.next(change);
  }
  static ɵfac = function CollectionService_Factory(t) {
    return new (t || _CollectionService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _CollectionService,
    factory: _CollectionService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollectionService, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var THROTTLE_MS = 1e3 / 60;
var Change = class {
  key;
  value;
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
};
var ConfigurationService = class _ConfigurationService {
  ngZone;
  onChange$;
  onFastChange$;
  store = {};
  source = new BehaviorSubject({});
  constructor(ngZone) {
    this.ngZone = ngZone;
    this.initSource();
  }
  initSource() {
    this.onFastChange$ = this.source.asObservable();
    this.onChange$ = this.onFastChange$.pipe(auditTime(THROTTLE_MS));
  }
  push(store) {
    this.store = store;
    this.next();
  }
  notify(change) {
    this.set(change.key, change.value);
    this.next();
  }
  set(field, value) {
    let store = this.store;
    const parts = field.split(".");
    let key = parts.shift();
    while (parts.length > 0) {
      store = store[key] = store[key] || {};
      key = parts.shift();
    }
    store[key] = value;
  }
  next() {
    this.ngZone.runOutsideAngular(() => {
      this.source.next(this.store);
    });
  }
  static ɵfac = function ConfigurationService_Factory(t) {
    return new (t || _ConfigurationService)(ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfigurationService,
    factory: _ConfigurationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurationService, [{
    type: Injectable
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
function copyChanges(changes, options) {
  for (const propertyName in changes) {
    if (!Object.hasOwnProperty.call(changes, propertyName)) {
      continue;
    }
    const value = changes[propertyName].currentValue;
    if (value === void 0) {
      delete options[propertyName];
    } else {
      options[propertyName] = value;
    }
  }
}
function toSimpleChanges(changes) {
  const result = {};
  for (const propertyName in changes) {
    if (!Object.hasOwnProperty.call(changes, propertyName)) {
      continue;
    }
    result[propertyName] = new SimpleChange(null, changes[propertyName], false);
  }
  return result;
}
var CollectionItemComponent = class _CollectionItemComponent {
  configurationService;
  collectionService;
  subscription;
  options = {};
  hidden = false;
  constructor(configurationService, collectionService) {
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.subscription = configurationService.onFastChange$.subscribe((store) => {
      this.options = store;
      this.notify();
    });
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    copyChanges(changes, store);
    this.configurationService.push(store);
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * item.notifyChanges({ visible: true });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  notify() {
    if (!this.collectionService) {
      return;
    }
    this.collectionService.notify(new ItemChange(this, this.options));
  }
  static ɵfac = function CollectionItemComponent_Factory(t) {
    return new (t || _CollectionItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
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
      type: CollectionService
    }];
  }, null);
})();
var SettingsComponent = class _SettingsComponent {
  configKey;
  configurationService;
  store = {};
  constructor(configKey, configurationService) {
    this.configKey = configKey;
    this.configurationService = configurationService;
    if (configKey === void 0) {
      throw new Error("Configuration key not set");
    }
  }
  ngOnDestroy() {
    this.store = void 0;
    this.notify();
  }
  ngOnChanges(changes) {
    copyChanges(changes, this.store);
    this.notify();
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * item.notifyChanges({ visible: true });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  markAsVisible() {
    this.store.visible = true;
    this.notify();
  }
  notify() {
    this.configurationService.notify(new Change(this.configKey, this.store));
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
var SeriesTooltipComponent = class _SeriesTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font of the tooltip.
   * @default '12px sans-serif'
   */
  font;
  format;
  padding;
  /**
   * If set to `true`, the Chart displays the series tooltip.
   * @default false
   */
  visible;
  seriesTooltipTemplate;
  constructor(configurationService) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  get seriesTooltipTemplateRef() {
    return this.seriesTooltipTemplate;
  }
  static ɵfac = function SeriesTooltipComponent_Factory(t) {
    return new (t || _SeriesTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesTooltipComponent,
    selectors: [["kendo-chart-series-item-tooltip"]],
    contentQueries: function SeriesTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, TemplateRef, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
      }
    },
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    seriesTooltipTemplate: [{
      type: ContentChild,
      args: [TemplateRef, {
        static: false
      }]
    }]
  });
})();
var SeriesDrilldownTemplateDirective = class _SeriesDrilldownTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function SeriesDrilldownTemplateDirective_Factory(t) {
    return new (t || _SeriesDrilldownTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SeriesDrilldownTemplateDirective,
    selectors: [["", "kendoChartDrilldownSeries", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDrilldownTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoChartDrilldownSeries]",
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
var toggle = (flag) => flag === void 0 ? false : !flag;
var SeriesItemComponent = class _SeriesItemComponent extends CollectionItemComponent {
  configurationService;
  collectionService;
  /**
   * The aggregate function for the date series.
   * The function is used when a category (year, month, or other) contains two or more points.
   * The Chart displays the return value of the function instead of the individual points.
   * The `aggregate` option is supported for categorical chart axis only.
   *
   * The supported values are:
   * - `"avg"`&mdash;The average of all values for the date period.
   * - `"count"`&mdash;The number of values for the date period.
   * - `"max"`&mdash;The highest value for the date period.
   * - `"min"`&mdash;The lowest value for the date period.
   * - `"sum"`&mdash;The sum of all values for the date period. Defaults to `0` if no data points are defined.
   * - `"sumOrNull"`&mdash;The sum of all values for the date period. Defaults to `null` if no data points are defined.
   * - `"first"`&mdash;The first value.
   * - function (values, series, dataItems, category)&mdash;A user-defined aggregate function. Returns a single value or a data item.
   * - object (compound aggregate)&mdash;Applicable to the Candlestick, Box Plot, and OHLC series. Specifies the aggregate for each data item field.
   *
   * @default 'max'
   */
  aggregate;
  /**
   * If set to `true`, the Chart automatically scales down to fit the content area.
   * Applicable for the Pie and Donut series. ([See example](slug:donut_seriestypes_charts#displaying-labels-in-angular-donut-chart)).
   * @default false
   */
  autoFit;
  /**
   * The name of the value axis.
   * The axis option is supported for Scatter plots. For more information on Scatter plots, refer to
   * [`xAxis`]({% slug api_charts_xaxis %}) and [`yAxis`]({% slug api_charts_yaxis %}).
   * @default 'primary'
   */
  axis;
  border;
  categoryAxis;
  /**
   * The data item field which contains the category name or date.
   * If the category is a date, the points are rendered in chronological order.
   * @default 'category'
   */
  categoryField;
  /**
   * The data field that contains the `close` value.
   * The `closeField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
   * @default 'close'
   */
  closeField;
  color;
  /**
  * The data item field which contains the series color.
  * The `colorField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type)
  * is set to `"bar"`, `"column"`, `"rangeBar"`, `"rangeColumn"`, `"bubble"`, `"donut"`, `"pie"`, `"candlestick"`,
  * `"ohlc"`, or `"waterfall"`.
  * @default 'color'
  */
  colorField;
  connectors;
  /**
   * The data item field which contains the current value.
   * The `currentField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bullet"` or `"verticalBullet"`.
   * @default 'current'
   */
  currentField;
  /**
   * The dash type of line Chart.
   * The `dashType` option is considered only if the [`series.type`]({% slug api_charts_series %}#toc-type) option is set to `"line"`.
   * @default 'solid'
   */
  dashType;
  data;
  downColor;
  /**
   * The data field which contains the color that is applied when the `open` value is greater than the `close` value.
   * The `downColorField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"candlestick"`.
   * @default 'downColor'
   */
  downColorField;
  drilldownField;
  /**
   * The `dynamicHeight` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"funnel"` or `"pyramid"`.
   * When set to `false`, all segments become with the same height.
   * Otherwise, the height of each segment is based on its value.
   * @default true
   */
  dynamicHeight;
  /**
   * The option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"funnel"`.
   * When set to `true`, the ratio of the bases of each segment is calculated based on the ratio of
   * `currentDataItem.value`/`nextDataItem.value`.
   * The last element is always created like a rectangle since there is no following element.
   * @default false
   */
  dynamicSlope;
  /**
   * The data item field which contains the [`series.errorBars`]({% slug api_charts_series %}#toc-errorbars) high value.
   * The `errorHighField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.
   * @default 'errorHigh'
   */
  errorHighField;
  /**
   * The data item field which contains the [`series.errorBars`]({% slug api_charts_series %}#toc-errorbars) low value.
   * The `errorLowField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, or `"area"`.
   * @default 'errorLow'
   */
  errorLowField;
  /**
   * The data item field which contains a Boolean value indicating whether the sector is exploded.
   * The `explodeField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"donut"` or `"pie"`.
   * @default 'explode'
   */
  explodeField;
  /**
   * The data item field which contains the series value.
   * @default 'value'
   */
  field;
  /**
   * The data item field which contains the series from value.
   * @default 'min'
   */
  fromField;
  /**
   * The distance between the categories expressed as a percentage of the bar width.
   * See the related spacing setting.
   * The `gap` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`,
   * `"radarColumn"`, or `"waterfall"`.
   * @default 1.5
   */
  gap;
  /**
   * The data field which contains the high value.
   * The `highField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
   * @default 'hight'
   */
  highField;
  holeSize;
  line;
  /**
   * The data field containing the low value.
   * The `lowField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"candlestick"` or `"ohlc"`.
   * @default 'low'
   */
  lowField;
  /**
   * The data item field which contains the series lower value.
   * The `lowerField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'lower'
   */
  lowerField;
  /**
   * The margin around each donut series (ring). A numeric value sets all margins.
   * @default 1
   */
  margin;
  /**
   * The maximum size of the Chart bubble series marker.
   * @default 100
   */
  maxSize;
  mean;
  /**
   * The data item field which contains the series mean value.
   * The `meanField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'mean'
   */
  meanField;
  median;
  /**
   * The data item field which contains the series median value.
   * The `medianField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'median'
   */
  medianField;
  /**
   * The minimum size of the Chart bubble series marker.
  * @default 5
   */
  minSize;
  missingValues;
  name;
  /**
   * Specifies the top-base/bottom-base ratio of the whole Funnel Chart. If the `neckRatio` is set to `3`,
   * it means the top base is three times smaller than the bottom base.
   * The `neckRatio` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"funnel"` and `dynamicSlope` is set to `false`.
   * @default 0.3
   */
  neckRatio;
  negativeColor;
  negativeValues;
  /**
   * The data item field which contains the series note text.
   * @default 'noteText'
   */
  noteTextField;
  /**
   * The opacity of the series. By default, the series are opaque.
   * @default 1
   */
  opacity;
  openField;
  /**
   * The data item field which contains the series outliers value.
   * The `outliersField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'outliers'
   */
  outliersField;
  overlay;
  padding;
  /**
   * The data item field which contains the series `q1` value.
   * The `q1Field` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'q1'
   */
  q1Field;
  /**
   * The data item field which contains the series `q3` value.
   * The `q3Field` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'q3'
   */
  q3Field;
  /**
   * The space in pixels between the different segments of the Funnel or Pyramid Chart.
   * The `segmentSpacing` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"funnel"` or `"pyramid"`.
   * @default 0
   */
  segmentSpacing;
  size;
  /**
   * The data field which contains the bubble size value.
   * @default 'size'
   */
  sizeField;
  /**
   * The distance between series points within a category. Expressed as a percentage of the bar width.
   * See the related `gap` setting.
   * The spacing option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`, or
   * `"radarColumn"`.
   * @default 0.4
   */
  spacing;
  /**
   * A Boolean value which indicates if the series have to be stacked.
   * A string value is interpreted as [`series.stack.group`]({% slug api_charts_seriesstack %}#toc-group).
   *
   * The `stack` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`,
   * `"verticalLine"`, `"verticalArea"`, `"radarLine"`, `"radarArea"`, and `"radarColumn"`.
   * If not overridden, the stack settings of the first series are inherited as a default value by the rest of the series.
   * @default false
   */
  stack;
  /**
   * The start angle (in degrees) of the first Donut or Pie segment.
   * Angles increase clockwise with zero to the left. Negative values are acceptable.
   * @default 90
   */
  startAngle;
  /**
   * The `style` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to
   * `"line"`, `"scatterLine"`, `"radarLine"`, or `"polarLine"`.
   * @default 'normal'
   */
  style;
  /**
   * The data item field which contains the summary type for the Waterfall series.
   * The value (if any) of a data item marked as a summary point will be discarded.
   *
   * Summary columns are optional and can be one of two types:
   *
   * `"runningTotal"`&mdash;Displays the sum of all items since the last `"runningTotal"` point.
   * `"total"`&mdash;Displays the sum of all previous items.
   * @default 'summary'
   */
  summaryField;
  target;
  /**
   * The data item field which contains the series to value.
   * @default 'max'
   */
  toField;
  /**
   * The type of the series.
   * @default 'column'
   */
  type;
  /**
   * The data item field which contains the series upper value.
   * The `upperField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"boxPlot"`.
   * @default 'upper'
   */
  upperField;
  /**
   * Sets the visible property of a Chart series.
   * @default true
   */
  visible;
  /**
   * A value which indicates whether to show the point category (for Funnel, Pyramid, Donut, and Pie series)
   * or the series name (for other available series types) in the legend.
   * @default true
   */
  visibleInLegend;
  visibleInLegendField;
  visual;
  width;
  whiskers;
  /**
   * The name of the X axis.
   * The [`xAxis`]({% slug api_charts_xaxis %}) option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or `"polar"` series.
   * For the Polar series, the [`xAxis`]({% slug api_charts_xaxis %}) range is expressed in degrees.
   * @default 'primary'
   */
  xAxis;
  /**
   * The data item field which contains the [`series.errorBars`]({% slug api_charts_series %}#toc-errorbars) xAxis low value.
   * The `xErrorLowField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"scatter"`, `"scatterLine"`, or
   * `"bubble"`.
   * @default 'xErrorHigh'
   */
  xErrorHighField;
  /**
   * The data item field containing the x value.
   * The `xField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or
   * `"polar"` series.
   * @default 'xErrorLow'
   */
  xErrorLowField;
  /**
   * The data item field containing the x value.
   * The `xField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bubble"`, `"scatter"`, `"scatterLine"`, or
   * `"polar"` series.
   * @default 'x'
   */
  xField;
  /**
   * The name of the Y axis to use.
   * Available for the Bubble, Scatter, Scatter Line, and Polar series.
   * @default 'primary'
   */
  yAxis;
  /**
    * The data item field which contains the [`series.errorBars`]({% slug api_charts_series %}#toc-errorbars) yAxis high value.
    * The `yErrorHighField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"scatter"`, `"scatterLine"`, or
    * `"bubble"`.
    * @default 'yErrorHigh'
    */
  yErrorHighField;
  /**
   * The data item field which contains the [`series.errorBars`]({% slug api_charts_series %}#toc-errorbars) yAxis low value.
   * The `yErrorLowField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"scatter"`, `"scatterLine"`, or
   * `"bubble"`.
   * @default 'yErrorLow'
   */
  yErrorLowField;
  /**
   * The data item field containing the y value.
   * The `yField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bubble"`, `"scatter"`, or `"scatterLine"`.
   * @default 'y'
   */
  yField;
  zIndex;
  /**
   * The configuration options of the trendline series.
   *
   * The `trendline` option is supported  when [`series.type`]({% slug api_charts_series %}#toc-type) is set to
   * "`linearTrendline`", "`exponentialTrendline`", "`logarithmicTrendline`", "`powerTrendline`", "`polynomialTrendline`" or "`movingAverageTrendline`".
   */
  trendline;
  for;
  /**
   * The configuration options of the series legend item.
   */
  legendItem;
  /**
   * The configuration options of the series pattern.
   */
  pattern;
  /**
   * The data item field which contains the series pattern.
   * The `patternField` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"pie"`, `"donut"`, `"funnel"`, `"heatmap"`, or `"pyramid"`.
   */
  patternField;
  // These options are also available as child components
  errorBars;
  extremes;
  highlight;
  labels;
  markers;
  notes;
  outliers;
  tooltip;
  seriesTooltip;
  drilldownTemplate;
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  /**
   * Toggles the series visibility and updates the parent Chart
   * without animated transitions.
   */
  toggleVisibility() {
    this.options.visible = toggle(this.options.visible);
    this.notify();
  }
  /**
   * Toggles the visibility of a point with the given index.
   * Applicable for the Pie, Donut, Funnel and Pyramid series.
   *
   * @param pointIndex - The zero-based index of the point to toggle.
   */
  togglePointVisibility(pointIndex) {
    const pv = this.options.pointVisibility = this.options.pointVisibility || {};
    pv[pointIndex] = toggle(pv[pointIndex]);
    this.notify();
  }
  get seriesTooltipTemplateRef() {
    if (this.seriesTooltip) {
      return this.seriesTooltip.seriesTooltipTemplateRef;
    }
  }
  static ɵfac = function SeriesItemComponent_Factory(t) {
    return new (t || _SeriesItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesItemComponent,
    selectors: [["kendo-chart-series-item"]],
    contentQueries: function SeriesItemComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SeriesTooltipComponent, 5);
        ɵɵcontentQuery(dirIndex, SeriesDrilldownTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltip = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.drilldownTemplate = _t.first);
      }
    },
    inputs: {
      aggregate: "aggregate",
      autoFit: "autoFit",
      axis: "axis",
      border: "border",
      categoryAxis: "categoryAxis",
      categoryField: "categoryField",
      closeField: "closeField",
      color: "color",
      colorField: "colorField",
      connectors: "connectors",
      currentField: "currentField",
      dashType: "dashType",
      data: "data",
      downColor: "downColor",
      downColorField: "downColorField",
      drilldownField: "drilldownField",
      dynamicHeight: "dynamicHeight",
      dynamicSlope: "dynamicSlope",
      errorHighField: "errorHighField",
      errorLowField: "errorLowField",
      explodeField: "explodeField",
      field: "field",
      fromField: "fromField",
      gap: "gap",
      highField: "highField",
      holeSize: "holeSize",
      line: "line",
      lowField: "lowField",
      lowerField: "lowerField",
      margin: "margin",
      maxSize: "maxSize",
      mean: "mean",
      meanField: "meanField",
      median: "median",
      medianField: "medianField",
      minSize: "minSize",
      missingValues: "missingValues",
      name: "name",
      neckRatio: "neckRatio",
      negativeColor: "negativeColor",
      negativeValues: "negativeValues",
      noteTextField: "noteTextField",
      opacity: "opacity",
      openField: "openField",
      outliersField: "outliersField",
      overlay: "overlay",
      padding: "padding",
      q1Field: "q1Field",
      q3Field: "q3Field",
      segmentSpacing: "segmentSpacing",
      size: "size",
      sizeField: "sizeField",
      spacing: "spacing",
      stack: "stack",
      startAngle: "startAngle",
      style: "style",
      summaryField: "summaryField",
      target: "target",
      toField: "toField",
      type: "type",
      upperField: "upperField",
      visible: "visible",
      visibleInLegend: "visibleInLegend",
      visibleInLegendField: "visibleInLegendField",
      visual: "visual",
      width: "width",
      whiskers: "whiskers",
      xAxis: "xAxis",
      xErrorHighField: "xErrorHighField",
      xErrorLowField: "xErrorLowField",
      xField: "xField",
      yAxis: "yAxis",
      yErrorHighField: "yErrorHighField",
      yErrorLowField: "yErrorLowField",
      yField: "yField",
      zIndex: "zIndex",
      trendline: "trendline",
      for: "for",
      legendItem: "legendItem",
      pattern: "pattern",
      patternField: "patternField",
      errorBars: "errorBars",
      extremes: "extremes",
      highlight: "highlight",
      labels: "labels",
      markers: "markers",
      notes: "notes",
      outliers: "outliers",
      tooltip: "tooltip"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-series-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    aggregate: [{
      type: Input
    }],
    autoFit: [{
      type: Input
    }],
    axis: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    categoryAxis: [{
      type: Input
    }],
    categoryField: [{
      type: Input
    }],
    closeField: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    colorField: [{
      type: Input
    }],
    connectors: [{
      type: Input
    }],
    currentField: [{
      type: Input
    }],
    dashType: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    downColor: [{
      type: Input
    }],
    downColorField: [{
      type: Input
    }],
    drilldownField: [{
      type: Input
    }],
    dynamicHeight: [{
      type: Input
    }],
    dynamicSlope: [{
      type: Input
    }],
    errorHighField: [{
      type: Input
    }],
    errorLowField: [{
      type: Input
    }],
    explodeField: [{
      type: Input
    }],
    field: [{
      type: Input
    }],
    fromField: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    highField: [{
      type: Input
    }],
    holeSize: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    lowField: [{
      type: Input
    }],
    lowerField: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    maxSize: [{
      type: Input
    }],
    mean: [{
      type: Input
    }],
    meanField: [{
      type: Input
    }],
    median: [{
      type: Input
    }],
    medianField: [{
      type: Input
    }],
    minSize: [{
      type: Input
    }],
    missingValues: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    neckRatio: [{
      type: Input
    }],
    negativeColor: [{
      type: Input
    }],
    negativeValues: [{
      type: Input
    }],
    noteTextField: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    openField: [{
      type: Input
    }],
    outliersField: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    q1Field: [{
      type: Input
    }],
    q3Field: [{
      type: Input
    }],
    segmentSpacing: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    sizeField: [{
      type: Input
    }],
    spacing: [{
      type: Input
    }],
    stack: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    summaryField: [{
      type: Input
    }],
    target: [{
      type: Input
    }],
    toField: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    upperField: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visibleInLegend: [{
      type: Input
    }],
    visibleInLegendField: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    whiskers: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    xErrorHighField: [{
      type: Input
    }],
    xErrorLowField: [{
      type: Input
    }],
    xField: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    yErrorHighField: [{
      type: Input
    }],
    yErrorLowField: [{
      type: Input
    }],
    yField: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    trendline: [{
      type: Input
    }],
    for: [{
      type: Input
    }],
    legendItem: [{
      type: Input
    }],
    pattern: [{
      type: Input
    }],
    patternField: [{
      type: Input
    }],
    errorBars: [{
      type: Input
    }],
    extremes: [{
      type: Input
    }],
    highlight: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    markers: [{
      type: Input
    }],
    notes: [{
      type: Input
    }],
    outliers: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    seriesTooltip: [{
      type: ContentChild,
      args: [SeriesTooltipComponent, {
        static: false
      }]
    }],
    drilldownTemplate: [{
      type: ContentChild,
      args: [SeriesDrilldownTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var POSITION_MODE = "absolute";
var COLLISION = {
  horizontal: "fit",
  vertical: "fit"
};
var BaseTooltip = class _BaseTooltip {
  popupService;
  localizationService;
  animate;
  style = {};
  templateRef;
  popupRef = null;
  popupSettings;
  constructor(popupService, localizationService) {
    this.popupService = popupService;
    this.localizationService = localizationService;
  }
  get active() {
    return this.popupRef !== null;
  }
  show(e) {
    const align = e.anchor.align;
    const offset = this.position(e.anchor.point);
    this.style = e.style;
    if (!this.popupRef) {
      this.popupRef = this.popupService.open(Object.assign({
        offset,
        popupAlign: align,
        animate: this.animate,
        content: this.templateRef,
        collision: COLLISION,
        positionMode: POSITION_MODE
      }, this.popupSettings));
      if (this.localizationService.rtl) {
        this.popupRef.popupElement.setAttribute("dir", "rtl");
      }
      this.onInit();
    } else {
      const popup = this.popupRef.popup.instance;
      popup.offset = offset;
      popup.popupAlign = align;
    }
  }
  onInit() {
  }
  hide() {
    if (this.popupRef) {
      this.popupRef.close();
      this.popupRef = null;
    }
  }
  ngOnDestroy() {
    this.hide();
  }
  position(offset) {
    if (!this.popupSettings || !this.popupSettings.appendTo) {
      return offset;
    }
    const appendTo = this.popupSettings.appendTo.element.nativeElement;
    const bbox = appendTo.getBoundingClientRect();
    const {
      scrollLeft,
      scrollTop
    } = this.scrollOffset(appendTo);
    return {
      left: offset.left - bbox.left - scrollLeft,
      top: offset.top - bbox.top - scrollTop
    };
  }
  scrollOffset(element) {
    if (!element) {
      return null;
    }
    let scrollLeft = element.scrollLeft;
    let scrollTop = element.scrollTop;
    let parent = element.parentElement;
    while (parent) {
      scrollLeft += parent.scrollLeft;
      scrollTop += parent.scrollTop;
      parent = parent.parentElement;
    }
    return {
      scrollLeft,
      scrollTop
    };
  }
  static ɵfac = function BaseTooltip_Factory(t) {
    return new (t || _BaseTooltip)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BaseTooltip,
    inputs: {
      popupSettings: "popupSettings"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseTooltip, [{
    type: Directive
  }], function() {
    return [{
      type: PopupService
    }, {
      type: LocalizationService
    }];
  }, {
    popupSettings: [{
      type: Input
    }]
  });
})();
function bodyFactory() {
  if (isDocumentAvailable()) {
    return new ElementRef(document.body);
  }
}
var CrosshairTooltipComponent = class _CrosshairTooltipComponent extends BaseTooltip {
  renderer;
  templateRef;
  key;
  value;
  animate = false;
  constructor(popupService, localizationService, renderer) {
    super(popupService, localizationService);
    this.renderer = renderer;
  }
  onInit() {
    if (this.popupRef?.popupElement) {
      this.renderer.addClass(this.popupRef.popupElement, "k-chart-tooltip-wrapper");
    }
  }
  show(e) {
    super.show(e);
    this.value = e.value;
    this.popupRef.popup.changeDetectorRef.detectChanges();
  }
  static ɵfac = function CrosshairTooltipComponent_Factory(t) {
    return new (t || _CrosshairTooltipComponent)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CrosshairTooltipComponent,
    selectors: [["kendo-chart-crosshair-tooltip"]],
    viewQuery: function CrosshairTooltipComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    inputs: {
      key: "key"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([PopupService, {
      provide: POPUP_CONTAINER,
      useFactory: bodyFactory
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [1, "k-chart-tooltip", "k-chart-crosshair-tooltip", 3, "ngStyle"]],
    template: function CrosshairTooltipComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, CrosshairTooltipComponent_ng_template_0_Template, 2, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
    },
    dependencies: [NgStyle],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrosshairTooltipComponent, [{
    type: Component,
    args: [{
      providers: [PopupService, {
        provide: POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: "kendo-chart-crosshair-tooltip",
      template: `
        <ng-template #content>
            <div class="k-chart-tooltip k-chart-crosshair-tooltip" [ngStyle]="style">
                {{ value }}
            </div>
        </ng-template>
    `,
      standalone: true,
      imports: [NgStyle]
    }]
  }], function() {
    return [{
      type: PopupService
    }, {
      type: LocalizationService
    }, {
      type: Renderer2
    }];
  }, {
    templateRef: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    key: [{
      type: Input
    }]
  });
})();
var AXES = ["categoryAxis", "valueAxis", "xAxis", "yAxis"];
var CrosshairTooltipsContainerComponent = class _CrosshairTooltipsContainerComponent {
  popupSettings;
  crossahairTooltipComponents;
  tooltipKeys = [];
  tooltipsMap = {};
  show(e) {
    const tooltipComponents = this.crossahairTooltipComponents.toArray();
    const axisName = e.axisName;
    const axisIndex = e.axisIndex;
    for (let idx = 0; idx < tooltipComponents.length; idx++) {
      if (tooltipComponents[idx].key === axisName + axisIndex) {
        tooltipComponents[idx].show(e);
        break;
      }
    }
  }
  hide() {
    const tooltipComponents = this.crossahairTooltipComponents.toArray();
    for (let idx = 0; idx < tooltipComponents.length; idx++) {
      tooltipComponents[idx].hide();
    }
  }
  get active() {
    return this.tooltipKeys.length > 0;
  }
  createCrosshairTooltips(options) {
    const newMap = this.mapTooltips(options);
    const map = this.tooltipsMap;
    for (const key in map) {
      if (!newMap[key]) {
        this.removeTooltip(key);
        delete map[key];
      }
    }
    for (const key in newMap) {
      if (!map[key] && key !== "constructor" && key !== "__proto__" && key !== "prototype") {
        map[key] = newMap[key];
        this.tooltipKeys.push(key);
      }
    }
  }
  removeTooltip(key) {
    const keys = this.tooltipKeys;
    for (let idx = 0; idx < keys.length; idx++) {
      if (keys[idx] === key) {
        keys.splice(idx, 1);
        break;
      }
    }
  }
  mapTooltips(options) {
    const map = {};
    for (let idx = 0; idx < AXES.length; idx++) {
      const tooltips = this.axesCrosshairTooltipOptions(options, AXES[idx]);
      for (let tooltipIdx = 0; tooltipIdx < tooltips.length; tooltipIdx++) {
        const tooltip = tooltips[tooltipIdx];
        map[tooltip.name + tooltip.index] = tooltip;
      }
    }
    return map;
  }
  axesCrosshairTooltipOptions(options, name) {
    const result = [];
    if (options[name]) {
      const axes = [].concat(options[name]);
      for (let idx = 0; idx < axes.length; idx++) {
        const tooltip = (axes[idx].crosshair || {}).tooltip;
        if (tooltip && tooltip.visible) {
          result.push({
            index: idx,
            name
          });
        }
      }
    }
    return result;
  }
  static ɵfac = function CrosshairTooltipsContainerComponent_Factory(t) {
    return new (t || _CrosshairTooltipsContainerComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CrosshairTooltipsContainerComponent,
    selectors: [["kendo-chart-crosshair-tooltips-container"]],
    viewQuery: function CrosshairTooltipsContainerComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(CrosshairTooltipComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.crossahairTooltipComponents = _t);
      }
    },
    inputs: {
      popupSettings: "popupSettings"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "key", "popupSettings", 4, "ngFor", "ngForOf"], [3, "key", "popupSettings"]],
    template: function CrosshairTooltipsContainerComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, CrosshairTooltipsContainerComponent_kendo_chart_crosshair_tooltip_0_Template, 1, 2, "kendo-chart-crosshair-tooltip", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.tooltipKeys);
      }
    },
    dependencies: [NgForOf, CrosshairTooltipComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CrosshairTooltipsContainerComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chart-crosshair-tooltips-container",
      template: `
        <kendo-chart-crosshair-tooltip *ngFor="let key of tooltipKeys" [key]="key" [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltip>
    `,
      standalone: true,
      imports: [NgForOf, CrosshairTooltipComponent]
    }]
  }], null, {
    popupSettings: [{
      type: Input
    }],
    crossahairTooltipComponents: [{
      type: ViewChildren,
      args: [CrosshairTooltipComponent]
    }]
  });
})();
var SeriesTooltipTemplateDirective = class _SeriesTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function SeriesTooltipTemplateDirective_Factory(t) {
    return new (t || _SeriesTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SeriesTooltipTemplateDirective,
    selectors: [["", "kendoChartSeriesTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoChartSeriesTooltipTemplate]",
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
var SharedTooltipTemplateDirective = class _SharedTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function SharedTooltipTemplateDirective_Factory(t) {
    return new (t || _SharedTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SharedTooltipTemplateDirective,
    selectors: [["", "kendoChartSharedTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoChartSharedTooltipTemplate]",
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
var TooltipTemplatePoint = class {
  /**
   * The point value.
   */
  value;
  /**
   * The point category. Available only for the Categorical series.
   */
  category;
  /**
   * The point category index. Available only for the Categorical series.
   */
  categoryIndex;
  /**
   * The point series options.
   */
  series;
  /**
   * The point `dataItem`.
   */
  dataItem;
  /**
   * The point value represented as a percentage value. Available only for the Donut, Pie, and 100% Stacked charts.
   */
  percentage;
  /**
   * The sum of point values since the last `"runningTotal"` summary point. Available for the Waterfall series.
   */
  runningTotal;
  /**
   * The sum of all previous series values. Available for the Waterfall series.
   */
  total;
  /**
   * The low value of the point error bar. Available for the Categorical series with error bars.
   */
  low;
  /**
   * The high value of the point error bar. Available for the Categorical series with error bars.
   */
  high;
  /**
   * The x low value of the point error bar. Available for the Scatter series with error bars.
   */
  xLow;
  /**
   * The x high value of the point error bar. Available for the Scatter series with error bars.
   */
  xHigh;
  /**
   * The y low value of the point error bar. Available for the Scatter series with error bars.
   */
  yLow;
  /**
   * The y low value of the point error bar. Available for the Scatter series with error bars.
   */
  yHigh;
  /**
   * @hidden
   */
  template;
  /**
   * @hidden
   */
  point;
  /**
   * @hidden
   */
  format;
  /**
   * @hidden
   */
  constructor(point, format, template) {
    this.value = point.value;
    this.category = point.category;
    this.categoryIndex = point.categoryIx;
    this.series = point.series;
    this.dataItem = point.dataItem;
    this.percentage = point.percentage;
    this.runningTotal = point.runningTotal;
    this.total = point.total;
    this.low = point.low;
    this.high = point.high;
    this.xLow = point.xLow;
    this.xHigh = point.xHigh;
    this.yLow = point.yLow;
    this.yHigh = point.yHigh;
    this.template = template;
    this.point = point;
    this.format = format;
  }
  /**
   * @hidden
   */
  get formattedValue() {
    return this.format ? this.point.formatValue(this.format) : String(this.value);
  }
};
function hasParent(element, parent) {
  let current = element;
  while (current && current !== parent) {
    current = current.parentNode;
  }
  return current ? true : false;
}
var TooltipTemplateService = class _TooltipTemplateService {
  seriesTemplates;
  template;
  sharedTemplate;
  setTemplate(template) {
    this.template = template;
  }
  getTemplate(seriesIndex) {
    if (this.seriesTemplates && this.seriesTemplates[seriesIndex]) {
      return this.seriesTemplates[seriesIndex];
    }
    return this.template;
  }
  setSeriesTemplates(seriesTemplates) {
    this.seriesTemplates = seriesTemplates;
  }
  setSharedTemplate(sharedTemplate) {
    this.sharedTemplate = sharedTemplate;
  }
  getSharedTemplate() {
    return this.sharedTemplate;
  }
  static ɵfac = function TooltipTemplateService_Factory(t) {
    return new (t || _TooltipTemplateService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TooltipTemplateService,
    factory: _TooltipTemplateService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipTemplateService, [{
    type: Injectable
  }], null, null);
})();
var SHARED_TOOLTIP_CLASS = "k-chart-shared-tooltip";
var TOOLTIP_CLASS = "k-chart-tooltip";
var TooltipPopupComponent = class _TooltipPopupComponent extends BaseTooltip {
  popupService;
  templateService;
  localizationService;
  ngZone;
  seriesTooltipTemplateRef;
  seriesSharedTooltipTemplateRef;
  seriesTooltipContext = {};
  seriesSharedTooltipContext = {};
  shared;
  defaultSeriesTooltipTemplate;
  defaultSharedTooltipTemplate;
  templateRef;
  animate = true;
  classNames;
  wrapperClass = "k-chart-tooltip-wrapper";
  leave = new EventEmitter();
  popupClasses = {};
  mouseleaveSubscription;
  constructor(popupService, templateService, localizationService, ngZone) {
    super(popupService, localizationService);
    this.popupService = popupService;
    this.templateService = templateService;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
  }
  show(e) {
    this.shared = e.shared;
    this.popupClasses = Object.assign({
      [SHARED_TOOLTIP_CLASS]: e.shared,
      [TOOLTIP_CLASS]: true,
      [e.className]: !!e.className
    }, this.classNames);
    if (!e.shared) {
      this.seriesTooltipContext = new TooltipTemplatePoint(e.point, e.format);
      this.seriesTooltipTemplateRef = this.pointTemplateRef(e.point);
    } else {
      this.seriesSharedTooltipTemplateRef = this.templateService.getSharedTemplate() || this.defaultSharedTooltipTemplate.templateRef;
      this.seriesSharedTooltipContext = this.sharedTemplateContext(e);
    }
    super.show(e);
  }
  containsElement(element) {
    if (this.popupRef) {
      return hasParent(element, this.popupRef.popupElement);
    }
  }
  sharedTemplateContext(e) {
    const points = e.points;
    const nameColumn = points.filter((point) => typeof point.series.name !== "undefined").length > 0;
    const colorMarker = e.series.length > 1;
    let colspan = 1;
    if (nameColumn) {
      colspan++;
    }
    if (colorMarker) {
      colspan++;
    }
    return {
      category: e.category,
      categoryText: e.categoryText,
      colorMarker,
      colspan,
      nameColumn,
      points: this.wrapPoints(e.points, e.format)
    };
  }
  pointTemplateRef(point) {
    return this.templateService.getTemplate(point.series.index) || this.defaultSeriesTooltipTemplate.templateRef;
  }
  wrapPoints(points, format) {
    const result = [];
    for (let idx = 0; idx < points.length; idx++) {
      const point = points[idx];
      const template = this.pointTemplateRef(point);
      const pointFormat = ((point.options || {}).tooltip || {}).format || format;
      result.push(new TooltipTemplatePoint(point, pointFormat, template));
    }
    return result;
  }
  onInit() {
    this.ngZone.runOutsideAngular(() => {
      this.mouseleaveSubscription = this.popupRef.popupElement.addEventListener("mouseleave", (args) => {
        this.leave.emit(args);
      });
    });
    this.popupRef.popupElement.className += ` ${this.wrapperClass}`;
  }
  hide() {
    if (this.mouseleaveSubscription) {
      this.mouseleaveSubscription();
      this.mouseleaveSubscription = null;
    }
    super.hide();
  }
  static ɵfac = function TooltipPopupComponent_Factory(t) {
    return new (t || _TooltipPopupComponent)(ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TooltipPopupComponent,
    selectors: [["kendo-chart-tooltip-popup"]],
    viewQuery: function TooltipPopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(SeriesTooltipTemplateDirective, 5);
        ɵɵviewQuery(SharedTooltipTemplateDirective, 5);
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultSeriesTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultSharedTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    inputs: {
      animate: "animate",
      classNames: "classNames",
      wrapperClass: "wrapperClass"
    },
    outputs: {
      leave: "leave"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([PopupService, {
      provide: POPUP_CONTAINER,
      useFactory: bodyFactory
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 0,
    consts: [["content", ""], ["kendoChartSeriesTooltipTemplate", ""], ["kendoChartSharedTooltipTemplate", ""], [3, "ngClass", "ngStyle"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "innerHTML"], [4, "ngFor", "ngForOf"], [1, "k-chart-shared-tooltip-marker"]],
    template: function TooltipPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TooltipPopupComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, TooltipPopupComponent_ng_template_2_Template, 1, 1, "ng-template", 1)(3, TooltipPopupComponent_ng_template_3_Template, 5, 3, "ng-template", 2);
      }
    },
    dependencies: [NgClass, NgStyle, NgIf, NgTemplateOutlet, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, NgForOf],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipPopupComponent, [{
    type: Component,
    args: [{
      providers: [PopupService, {
        provide: POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: "kendo-chart-tooltip-popup",
      template: `
    <ng-template #content>
        <div [ngClass]="popupClasses" [ngStyle]="style">
          <ng-template [ngTemplateOutlet]="seriesTooltipTemplateRef" *ngIf="!shared"
                    [ngTemplateOutletContext]="seriesTooltipContext">
          </ng-template>
          <ng-template [ngTemplateOutlet]="seriesSharedTooltipTemplateRef" *ngIf="shared"
                    [ngTemplateOutletContext]="seriesSharedTooltipContext">
          </ng-template>
        </div>
    </ng-template>

    <ng-template kendoChartSeriesTooltipTemplate let-formattedValue="formattedValue">
        <span [innerHTML]="formattedValue"></span>
    </ng-template>
    <ng-template kendoChartSharedTooltipTemplate let-points="points" let-categoryText="categoryText" let-colspan="colspan" let-colorMarker="colorMarker" let-nameColumn="nameColumn" >
        <table>
            <tr><th [attr.colspan]='colspan'> {{ categoryText }} </th></tr>
            <tr *ngFor="let point of points">
                <td *ngIf="colorMarker"><span class='k-chart-shared-tooltip-marker' [style.background-color]='point.series.color'></span></td>
                <td *ngIf="nameColumn">
                    <ng-container *ngIf="point.series.name !== undefined">{{ point.series.name }}</ng-container>
                    <ng-container *ngIf="point.series.name === undefined">&nbsp;</ng-container>
                </td>
                <td>
                  <ng-template [ngTemplateOutlet]="point.template"
                            [ngTemplateOutletContext]="point">
                  </ng-template>
                </td>
            </tr>
        </table>
    </ng-template>
    `,
      standalone: true,
      imports: [NgClass, NgStyle, NgIf, NgTemplateOutlet, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, NgForOf]
    }]
  }], function() {
    return [{
      type: PopupService
    }, {
      type: TooltipTemplateService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }];
  }, {
    defaultSeriesTooltipTemplate: [{
      type: ViewChild,
      args: [SeriesTooltipTemplateDirective, {
        static: false
      }]
    }],
    defaultSharedTooltipTemplate: [{
      type: ViewChild,
      args: [SharedTooltipTemplateDirective, {
        static: false
      }]
    }],
    templateRef: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    animate: [{
      type: Input
    }],
    classNames: [{
      type: Input
    }],
    wrapperClass: [{
      type: Input
    }],
    leave: [{
      type: Output
    }]
  });
})();
var ChartInstanceObserver = class extends instance_observer_default {
  handlerMap = {
    hideTooltip: "onHideTooltip",
    legendItemClick: "onLegendItemClick",
    render: "onRender",
    showTooltip: "onShowTooltip",
    init: "onInit"
  };
  constructor(instance) {
    super(instance);
  }
};
var chartDefaultTheme = () => Object.assign({}, baseTheme(), {
  axisDefaults: {
    crosshair: {
      color: "rgba(0, 0, 0, 0.5)"
    },
    labels: {
      color: "rgb(101, 101, 101)",
      font: "12px serif"
    },
    line: {
      color: "rgba(0, 0, 0, 0.08)"
    },
    majorGridLines: {
      color: "rgba(0, 0, 0, 0.08)"
    },
    minorGridLines: {
      color: "rgba(0, 0, 0, 0.04)"
    },
    notes: {
      icon: {
        background: "rgba(0, 0, 0, 0.5)",
        border: {
          color: "rgba(0, 0, 0, 0.5)"
        }
      },
      line: {
        color: "rgba(0, 0, 0, 0.5)"
      },
      label: {
        font: "14px serif"
      }
    },
    title: {
      color: "rgb(101, 101, 101)",
      font: "14px serif"
    }
  },
  chartArea: {
    background: "rgb(255, 255, 255)"
  },
  legend: {
    inactiveItems: {
      labels: {
        color: "rgba(102, 102, 102, 0.5)"
      },
      markers: {
        color: "rgba(102, 102, 102, 0.5)"
      }
    },
    labels: {
      color: "rgb(101, 101, 101)",
      font: "14px serif"
    }
  },
  seriesDefaults: {
    boxPlot: {
      downColor: "rgba(0, 0, 0, 0.08)",
      mean: {
        color: "rgb(246, 246, 246)"
      },
      median: {
        color: "rgb(246, 246, 246)"
      },
      whiskers: {
        color: "rgb(255, 99, 88)"
      }
    },
    bullet: {
      target: {
        color: "rgb(101, 101, 101)"
      }
    },
    candlestick: {
      downColor: "rgb(101, 101, 101)",
      line: {
        color: "rgb(101, 101, 101)"
      }
    },
    errorBars: {
      color: "rgba(0, 0, 0, 0.5)"
    },
    horizontalWaterfall: {
      line: {
        color: "rgba(0, 0, 0, 0.08)"
      }
    },
    icon: {
      border: {
        color: "rgba(0, 0, 0, 0.08)"
      }
    },
    labels: {
      background: "rgb(255, 255, 255)",
      color: "rgb(101, 101, 101)",
      opacity: 0.8,
      font: "12px serif"
    },
    notes: {
      icon: {
        background: "rgba(0, 0, 0, 0.5)",
        border: {
          color: "rgba(0, 0, 0, 0.5)"
        }
      },
      line: {
        color: "rgba(0, 0, 0, 0.5)"
      },
      label: {
        font: "14px serif"
      }
    },
    overlay: {
      gradient: "none"
    },
    verticalBoxPlot: {
      downColor: "rgba(0, 0, 0, 0.08)",
      mean: {
        color: "rgb(246, 246, 246)"
      },
      median: {
        color: "rgb(246, 246, 246)"
      },
      whiskers: {
        color: "rgb(255, 99, 88)"
      }
    },
    verticalBullet: {
      target: {
        color: "rgb(101, 101, 101)"
      }
    },
    waterfall: {
      line: {
        color: "rgba(0, 0, 0, 0.08)"
      }
    },
    area: {
      opacity: 0.8
    }
  },
  title: {
    color: "rgb(101, 101, 101)",
    font: "16px serif"
  },
  seriesColors: ["rgb(255, 99, 88)", "rgb(255, 210, 70)", "rgb(120, 210, 55)", "rgb(40, 180, 200)", "rgb(45, 115, 245)", "rgb(170, 70, 190)"]
});
var ThemeService = class _ThemeService extends ConfigurationService {
  loaded = false;
  element;
  loadTheme() {
    if (this.loaded || !isDocumentAvailable()) {
      return;
    }
    this.createElement();
    this.readTheme();
    this.destroyElement();
    this.loaded = true;
    this.next();
  }
  reset() {
    this.store = {};
    this.loaded = false;
    this.loadTheme();
  }
  readTheme() {
    let theme = {};
    try {
      theme = chartTheme(this.element);
    } catch {
      theme = {};
    }
    const available = Boolean(theme.chartArea && theme.chartArea.background);
    const result = available ? deepExtend(baseTheme(), theme) : chartDefaultTheme();
    this.push(result);
  }
  createElement() {
    const container = this.element = document.createElement("div");
    container.className = "k-chart";
    container.style.display = "none";
    document.body.appendChild(container);
  }
  destroyElement() {
    if (this.element) {
      document.body.removeChild(this.element);
      this.element = void 0;
    }
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵThemeService_BaseFactory;
    return function ThemeService_Factory(t) {
      return (ɵThemeService_BaseFactory || (ɵThemeService_BaseFactory = ɵɵgetInheritedFactory(_ThemeService)))(t || _ThemeService);
    };
  })();
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
var BaseEvent = class _BaseEvent {
  /**
   * The `ChartComponent` that triggered the event.
   */
  sender;
  /**
   * @hidden
   */
  constructor(sender) {
    this.sender = sender;
  }
  static ɵfac = function BaseEvent_Factory(t) {
    ɵɵinvalidFactory();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _BaseEvent
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseEvent, [{
    type: Directive
  }], function() {
    return [{
      type: void 0
    }];
  }, null);
})();
var AxisLabelClickEvent = class extends BaseEvent {
  /**
   * The axis options to which the label belongs.
   */
  axis;
  /**
   * The original data item that is used to generate the label.
   * Available only for category axes which are populated from the `categoryField` of the series.
   */
  dataItem;
  /**
   * The label sequential or category index.
   */
  index;
  /**
   * The label text.
   */
  text;
  /**
   * The label value or category name.
   */
  value;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.dataItem = e.dataItem;
    this.index = e.index;
    this.text = e.text;
    this.value = e.value;
  }
};
var PreventableEvent2 = class _PreventableEvent extends BaseEvent {
  prevented = false;
  /**
   * Prevents the default action for a specified event.
   * In this way, the source component suppresses
   * the built-in behavior that follows the event.
   */
  preventDefault() {
    this.prevented = true;
  }
  /**
   * Returns `true` if the event was prevented
   * by any of its subscribers.
   *
   * @returns `true` if the default action was prevented.
   * Otherwise, returns `false`.
   */
  isDefaultPrevented() {
    return this.prevented;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵPreventableEvent_BaseFactory;
    return function PreventableEvent_Factory(t) {
      return (ɵPreventableEvent_BaseFactory || (ɵPreventableEvent_BaseFactory = ɵɵgetInheritedFactory(_PreventableEvent)))(t || _PreventableEvent);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _PreventableEvent,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PreventableEvent2, [{
    type: Directive
  }], null, null);
})();
var DragEvent = class extends PreventableEvent2 {
  /**
   * A dictionary which contains the range (min and max values) of named axes.
   * The axis name is used as a key.
   */
  axisRanges;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
};
var DragEndEvent = class extends BaseEvent {
  /**
   * A dictionary which contains the range (min and max values) of named axes.
   * The axis name is used as a key.
   */
  axisRanges;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
};
var DragStartEvent = class extends PreventableEvent2 {
  /**
   * A dictionary which contains the range (min and max values) of named axes.
   * The axis name is used as a key.
   */
  axisRanges;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
};
var LegendEvent = class extends PreventableEvent2 {
  /**
   * An object which contains the series options.
   */
  series;
  /**
   * The index of the series in the parent Chart.
   */
  seriesIndex;
  /**
   * The point index in the series.
   * Applicable only for the Pie, Donut, Funnel and Pyramid series.
   */
  pointIndex;
  /**
   * The text of the legend item.
   */
  text;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.series = e.series;
    this.seriesIndex = e.seriesIndex;
    this.pointIndex = e.pointIndex;
    this.text = e.text;
  }
};
var LegendItemHoverEvent = class extends LegendEvent {
  /**
   * If called, the series highlight is not shown as a result of hovering over the legend item.
   */
  preventDefault() {
    super.preventDefault();
  }
};
var LegendItemLeaveEvent = class extends LegendEvent {
  /**
   * @hidden
   */
  preventDefault() {
  }
  /**
   * @hidden
   */
  isDefaultPrevented() {
    return false;
  }
};
var NoteEvent = class extends BaseEvent {
  /**
   * The data point category. Available only for the Categorical charts (Bar, Line, Area, and similar).
   */
  category;
  /**
   * The data item of the point note.
   */
  dataItem;
  /**
   * An object containing the note series options.
   */
  series;
  /**
   * The note value.
   */
  value;
  /**
   * The note visual element.
   */
  visual;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.dataItem = e.dataItem;
    this.series = e.series;
    this.value = e.value;
    this.visual = e.visual;
  }
};
var NoteClickEvent = class extends NoteEvent {
};
var NoteHoverEvent = class extends NoteEvent {
};
var NoteLeaveEvent = class extends NoteEvent {
};
var PaneRenderEvent = class extends BaseEvent {
  /**
   * The chart pane.
   */
  pane;
  /**
   * The pane index.
   */
  index;
  /**
   * The pane name.
   */
  name;
  /**
   * @hidden
   */
  constructor(args, sender) {
    super(sender);
    Object.assign(this, args);
  }
};
var PlotAreaClickEvent = class extends BaseEvent {
  /**
   * The data point category. Available only for the Categorical charts (Bar, Line, Area, and similar).
   */
  category;
  /**
   * The original browser event that triggered the click action.
   */
  originalEvent;
  /**
   * The data point value. Available only for the Categorical charts (Bar, Line, Area, and similar).
   */
  value;
  /**
   * The X axis value or array of values for multi-axis charts.
   */
  x;
  /**
   * The Y axis value or array of values for multi-axis charts.
   */
  y;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.originalEvent = e.originalEvent;
    this.value = e.value;
    this.x = e.x;
    this.y = e.y;
  }
};
var PlotAreaHoverEvent = class extends BaseEvent {
  /**
   * The data point category. Available only for the Categorical charts (Bar, Line, Area, and similar).
   */
  category;
  /**
   * The original browser event that triggered the click action.
   */
  originalEvent;
  /**
   * The data point value. Available only for the Categorical charts (Bar, Line, Area, and similar).
   */
  value;
  /**
   * The X axis value or array of values for multi-axis charts.
   */
  x;
  /**
   * The Y axis value or array of values for multi-axis charts.
   */
  y;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.originalEvent = e.originalEvent;
    this.value = e.value;
    this.x = e.x;
    this.y = e.y;
  }
};
var PlotAreaLeaveEvent = class extends BaseEvent {
};
var RenderEvent = class extends BaseEvent {
  /**
   * @hidden
   */
  constructor(_e, sender) {
    super(sender);
  }
};
var SelectEvent = class extends PreventableEvent2 {
  /**
   * The target axis options.
   */
  axis;
  /**
   * The lower boundary of the selected range.
   */
  from;
  /**
   * The upper boundary of the selected range.
   */
  to;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.from = e.from;
    this.to = e.to;
  }
};
var SelectEndEvent = class extends BaseEvent {
  /**
   * The target axis options.
   */
  axis;
  /**
   * The lower boundary of the selected range.
   */
  from;
  /**
   * The upper boundary of the selected range.
   */
  to;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.from = e.from;
    this.to = e.to;
  }
};
var SelectStartEvent = class extends PreventableEvent2 {
  /**
   * The target axis options.
   */
  axis;
  /**
   * The lower boundary of the selected range.
   */
  from;
  /**
   * The upper boundary of the selected range.
   */
  to;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axis = e.axis;
    this.from = e.from;
    this.to = e.to;
  }
};
var SeriesClickEvent = class extends BaseEvent {
  /**
   * The data point category.
   */
  category;
  /**
   * The original data item.
   */
  dataItem;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * The point value represented as a percentage value.
   * Available only for the Donut, Pie, and 100% stacked charts.
   */
  percentage;
  /**
   * The clicked series point.
   */
  point;
  /**
   * The clicked point series options.
   */
  series;
  /**
   * The cumulative point value on the stack. Available only for the stackable series.
   */
  stackValue;
  /**
   * The data point value.
   */
  value;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.dataItem = e.dataItem;
    this.originalEvent = e.originalEvent;
    this.percentage = e.percentage;
    this.point = e.point;
    this.series = e.series;
    this.stackValue = e.stackValue;
    this.value = e.value;
  }
};
var SeriesEvent = class extends PreventableEvent2 {
  /**
   * The data point category.
   */
  category;
  /**
   * The original data item.
   */
  dataItem;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * The point value represented as a percentage value. Available only for the Donut, Pie, and 100% stacked charts.
   */
  percentage;
  /**
   * The hovered series point.
   */
  point;
  /**
   * The hovered point series options.
   */
  series;
  /**
   * The cumulative point value on the stack. Available only for the stackable series.
   */
  stackValue;
  /**
   * The data point value.
   */
  value;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.category = e.category;
    this.dataItem = e.dataItem;
    this.originalEvent = e.originalEvent;
    this.percentage = e.percentage;
    this.point = e.point;
    this.series = e.series;
    this.stackValue = e.stackValue;
    this.value = e.value;
  }
};
var SeriesHoverEvent = class extends SeriesEvent {
};
var SeriesOverEvent = class extends SeriesEvent {
};
var SeriesLeaveEvent = class extends SeriesEvent {
};
var ZoomEvent = class extends PreventableEvent2 {
  /**
   * A dictionary which contains the range (min and max values) of named axes.
   * The axis name is used as a key.
   *
   * > The dictionary includes only the affected axis ranges.
   * If an axis is locked or its range is not modified, the axis will not be listed.
   */
  axisRanges;
  /**
   * A number that indicates the zoom amount and direction.
   * A negative value indicates a zoom-in action.
   * A positive value indicates a zoom-out action.
   */
  delta;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.delta = e.delta;
    this.originalEvent = e.originalEvent;
  }
};
var ZoomEndEvent = class extends BaseEvent {
  /**
   * A dictionary which contains the range (min and max values) of named axes.
   * The axis name is used as a key.
   *
   * > The dictionary includes only the affected axis ranges.
   * If an axis is locked or its range is not modified, the axis will not be listed.
   */
  axisRanges;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
};
var ZoomStartEvent = class extends PreventableEvent2 {
  /**
   * A dictionary which contains the range (min and max values) of named axes.
   * The axis name is used as a key.
   */
  axisRanges;
  /**
   * The original user event that triggered the drag action.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.axisRanges = e.axisRanges;
    this.originalEvent = e.originalEvent;
  }
};
var EVENT_MAP$2 = {
  axisLabelClick: AxisLabelClickEvent,
  drag: DragEvent,
  dragEnd: DragEndEvent,
  dragStart: DragStartEvent,
  legendItemHover: LegendItemHoverEvent,
  legendItemLeave: LegendItemLeaveEvent,
  noteClick: NoteClickEvent,
  noteHover: NoteHoverEvent,
  noteLeave: NoteLeaveEvent,
  paneRender: PaneRenderEvent,
  plotAreaClick: PlotAreaClickEvent,
  plotAreaHover: PlotAreaHoverEvent,
  plotAreaLeave: PlotAreaLeaveEvent,
  render: RenderEvent,
  select: SelectEvent,
  selectEnd: SelectEndEvent,
  selectStart: SelectStartEvent,
  seriesClick: SeriesClickEvent,
  seriesHover: SeriesHoverEvent,
  seriesOver: SeriesOverEvent,
  seriesLeave: SeriesLeaveEvent,
  zoom: ZoomEvent,
  zoomEnd: ZoomEndEvent,
  zoomStart: ZoomStartEvent
};
var InstanceEventService$1 = class InstanceEventService {
  create(name, args, sender) {
    if (EVENT_MAP$2[name]) {
      return new EVENT_MAP$2[name](args, sender);
    }
  }
};
var LegendItemClickEvent = class extends LegendEvent {
  /**
   * If called, the series visibility is not toggled as a result of clicking the legend item.
   */
  preventDefault() {
    super.preventDefault();
  }
};
var packageMetadata = {
  name: "@progress/kendo-angular-charts",
  productName: "Kendo UI for Angular",
  productCode: "KENDOUIANGULAR",
  productCodes: ["KENDOUIANGULAR"],
  publishDate: 1749540283,
  version: "19.1.1",
  licensingDocsUrl: "https://www.telerik.com/kendo-angular-ui/my-license/"
};
var CollectionComponent = class _CollectionComponent {
  configKey;
  configurationService;
  collectionService;
  children;
  subscription;
  items = [];
  constructor(configKey, configurationService, collectionService) {
    this.configKey = configKey;
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.subscription = collectionService.onItemChange$.subscribe((changes) => this.processChanges(changes));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngAfterContentInit() {
    this.readItems();
    this.children.changes.subscribe(() => this.readItems());
  }
  processChanges(changes) {
    if (!this.children) {
      return;
    }
    const index = this.children.toArray().filter((s) => !s.hidden).indexOf(changes.sender);
    if (index < 0) {
      return;
    }
    this.items[index] = changes.options;
    this.change();
  }
  readItems() {
    this.items = this.children.filter((s) => !s.hidden).map((s) => s.options);
    this.change();
  }
  change() {
    this.configurationService.notify(new Change(this.configKey, this.items.length === 0 ? void 0 : this.items));
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
      type: CollectionService
    }];
  }, null);
})();
var SeriesComponent = class _SeriesComponent extends CollectionComponent {
  configurationService;
  collectionService;
  tooltipTemplateService;
  viewContainer;
  children;
  constructor(configurationService, collectionService, tooltipTemplateService, viewContainer) {
    super("series", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.tooltipTemplateService = tooltipTemplateService;
    this.viewContainer = viewContainer;
  }
  ngAfterContentChecked() {
    this.readTooltipTemplates();
  }
  readTooltipTemplates() {
    const templates = this.children.map((item) => item.seriesTooltipTemplateRef);
    this.tooltipTemplateService.setSeriesTemplates(templates);
  }
  static ɵfac = function SeriesComponent_Factory(t) {
    return new (t || _SeriesComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesComponent,
    selectors: [["kendo-chart-series"]],
    contentQueries: function SeriesComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SeriesItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-series",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: TooltipTemplateService
    }, {
      type: ViewContainerRef
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [SeriesItemComponent, {
        descendants: true
      }]
    }]
  });
})();
var DrilldownEvent = class extends PreventableEvent2 {
  /**
   * The drilldown field value.
   */
  value;
  /**
   * The clicked series point.
   */
  point;
  /**
   * The clicked point series options.
   */
  series;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.value = e.value;
    this.point = e.point;
    this.series = e.series;
  }
};
function hasObservers(emitter) {
  return emitter.observers.length > 0;
}
var ChartMessages = class _ChartMessages extends ComponentMessages {
  /**
   * The message to display when no series are defined, or all series are empty.
   */
  noData;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChartMessages_BaseFactory;
    return function ChartMessages_Factory(t) {
      return (ɵChartMessages_BaseFactory || (ɵChartMessages_BaseFactory = ɵɵgetInheritedFactory(_ChartMessages)))(t || _ChartMessages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _ChartMessages,
    selectors: [["", "kendoChartMessages", ""]],
    inputs: {
      noData: "noData"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartMessages, [{
    type: Directive,
    args: [{
      selector: "[kendoChartMessages]"
    }]
  }], null, {
    noData: [{
      type: Input
    }]
  });
})();
var LocalizedChartMessagesDirective = class _LocalizedChartMessagesDirective extends ChartMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  static ɵfac = function LocalizedChartMessagesDirective_Factory(t) {
    return new (t || _LocalizedChartMessagesDirective)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _LocalizedChartMessagesDirective,
    selectors: [["", "kendoChartLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ChartMessages,
      useExisting: forwardRef(() => _LocalizedChartMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedChartMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: ChartMessages,
        useExisting: forwardRef(() => LocalizedChartMessagesDirective)
      }],
      selector: "[kendoChartLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var ChartComponent = class _ChartComponent {
  configurationService;
  themeService;
  element;
  intl;
  localizationService;
  ngZone;
  instanceEventService;
  changeDetector;
  renderer;
  /**
   * Specifies if the Chart can be panned.
   * Panning is not available for the `Donut`, `Pie`, `Funnel`, `Pyramid`, `Polar`, and `Radar` series.
   * @default false
   */
  pannable;
  renderAs;
  seriesColors;
  subtitle;
  title;
  noData = true;
  /**
   * If set to `true`, the Chart plays animations when it displays the series.
   * By default, animations are enabled.
   * @default true
   */
  transitions;
  zoomable;
  axisDefaults;
  categoryAxis;
  chartArea;
  legend;
  panes;
  paneDefaults;
  plotArea;
  series;
  seriesDefaults;
  tooltip;
  valueAxis;
  xAxis;
  yAxis;
  /**
   * Fires when the user clicks an axis label ([see example](slug:events_chart)).
   */
  axisLabelClick = new EventEmitter();
  /**
   * Fires as long as the user is dragging the Chart with the mouse or through swipe gestures.
   */
  drag = new EventEmitter();
  /**
   * Fires when the user stops dragging the Chart.
   */
  dragEnd = new EventEmitter();
  /**
   * Fires when the user starts dragging the Chart.
   */
  dragStart = new EventEmitter();
  /**
   * Fires when the user hovers over a legend item ([see example](slug:events_chart)).
   */
  legendItemHover = new EventEmitter();
  /**
   * Fires when the cursor leaves a legend item.
   */
  legendItemLeave = new EventEmitter();
  /**
   * Fires when the user clicks a note.
   */
  noteClick = new EventEmitter();
  /**
   * Fires when the user hovers over a note.
   */
  noteHover = new EventEmitter();
  /**
   * Fires when the cursor leaves a note.
   */
  noteLeave = new EventEmitter();
  /**
   * Fires when a pane is rendered because the Chart is rendered, performs panning or zooming, or is exported with different options.
   * The event is used to render custom visuals in the panes.
   */
  paneRender = new EventEmitter();
  /**
   * Fires when the user clicks the plot area ([see example](slug:events_chart)).
   * The `click` event is triggered by the `tap` and `contextmenu` events.
   * To distinguish between the original events, inspect the `e.originalEvent.type` field.
   */
  plotAreaClick = new EventEmitter();
  /**
   * Fires when the user hovers the plot area ([see example](slug:events_chart)).
   */
  plotAreaHover = new EventEmitter();
  /**
   * Fires when the cursor leaves the plot area.
   */
  plotAreaLeave = new EventEmitter();
  /**
   * Fires when the Chart is ready to render on screen ([see example](slug:events_chart)).
   * For example, you can use it to remove loading indicators.
   * Any changes made to the options are ignored.
   */
  render = new EventEmitter();
  /**
   * Fires when the user modifies the selection.
   *
   * The range units include a generic axis category index (0-based) and a date axis represented by a date instance.
   */
  select = new EventEmitter();
  /**
   * Fires when the user completes the modification of the selection.
   *
   * The range units include a generic axis category index (0-based) and a date axis represented by a date instance.
   */
  selectEnd = new EventEmitter();
  /**
   * Fires when the user starts modifying the axis selection.
   *
   * The range units include a generic axis category index (0-based) and a date axis represented by a date instance.
   */
  selectStart = new EventEmitter();
  /**
   * Fires when the user clicks the Chart series.
   *
   * The `click` event will be triggered by the `tap` and `contextmenu` events ([see example](slug:events_chart)).
   * To distinguish between the original events, inspect the `e.originalEvent.type` field.
   */
  seriesClick = new EventEmitter();
  /**
   * Fires when the user when the user wants to drill down on a specific point.
   */
  drilldown = new EventEmitter();
  /**
   * Fires when the user hovers the Chart series ([see example](slug:events_chart)).
   */
  seriesHover = new EventEmitter();
  /**
   * Fires when the cursor enters a series.
   */
  seriesOver = new EventEmitter();
  /**
   * Fires when the cursor leaves a series.
   */
  seriesLeave = new EventEmitter();
  /**
   * Fires as long as the user is zooming the Chart by using the mousewheel operation.
   */
  zoom = new EventEmitter();
  /**
   * Fires when the user stops zooming the Chart.
   */
  zoomEnd = new EventEmitter();
  /**
   * Fires when the user uses the mousewheel to zoom the Chart.
   */
  zoomStart = new EventEmitter();
  /**
   * Fires when a legend item is clicked before the selected series visibility is toggled.
   * Can be prevented.
   */
  legendItemClick = new EventEmitter();
  /**
   * Fires when the drill-down level has changed.
   */
  drilldownLevelChange = new EventEmitter();
  /**
   * Limits the automatic resizing of the Chart. Sets the maximum number of times per second
   * that the component redraws its content when the size of its container changes.
   * Defaults to `10`. To disable the automatic resizing, set it to `0`.
   *
   * @default 10
   */
  resizeRateLimit = 10;
  /**
   * The settings for the tooltip popup.
   */
  popupSettings;
  /**
   * Gets or sets the current drill-down level for [Drilldown Charts](slug:drilldown_chart_charts).
   *
   * To return to a previous level, set the value to a number less than the current level.
   * To return to the root chart, set the value to 0.
   *
   * Setting the value to a number greater than the current level will have no effect.
   */
  get drilldownLevel() {
    return this.drilldownState.length;
  }
  set drilldownLevel(level) {
    const currentLevel = this.drilldownState.length;
    if (currentLevel <= level || !this.seriesComponents) {
      return;
    }
    this.drilldownState.slice(level, currentLevel).forEach((view) => {
      const hiddenSeries = view.hiddenSeries;
      hiddenSeries?.forEach((series) => {
        series.hidden = false;
      });
      view.destroy();
    });
    this.drilldownState.length = level;
    this.drilldownLevelChange.emit(level);
  }
  /**
   * The Drawing `Surface` of the Chart.
   */
  surface;
  seriesCollectionComponent;
  seriesComponents;
  donutCenterTemplate;
  noDataTemplate;
  tooltipInstance;
  crossahirTooltips;
  surfaceElement;
  /**
   * @hidden
   */
  donutCenterStyle;
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localizationService.get(key);
  }
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  instance;
  options;
  theme = null;
  optionsChange;
  suppressTransitions = false;
  resizeTimeout;
  redrawTimeout;
  domSubscriptions;
  destroyed;
  subscriptions;
  rtl = false;
  hostClasses = ["k-chart", "k-widget"];
  drilldownState = [];
  constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.element = element;
    this.intl = intl;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.instanceEventService = instanceEventService;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.themeService.loadTheme();
    this.refreshWait();
  }
  ngOnInit() {
    if (this.element) {
      this.hostClasses.forEach((name) => {
        this.renderer.addClass(this.element.nativeElement, name);
      });
      this.renderer.setStyle(this.element.nativeElement, "position", "relative");
    }
  }
  ngAfterViewInit() {
    if (this.canRender) {
      this.ngZone.runOutsideAngular(() => {
        const chartMouseleave = this.renderer.listen(this.surfaceElement.nativeElement, "mouseleave", this.chartMouseleave.bind(this));
        this.domSubscriptions = () => {
          chartMouseleave();
        };
      });
    }
    this.setDirection();
    this.subscriptions = this.intl.changes.subscribe(this.intlChange.bind(this));
    this.subscriptions.add(this.localizationService.changes.subscribe(this.rtlChange.bind(this)));
  }
  onDrilldown(e) {
    const seriesComponent = this.seriesComponents.find((sc) => sc.name === e.series.name);
    const seriesCollection = this.seriesCollectionComponent.first;
    if (!seriesComponent?.drilldownTemplate || !seriesCollection) {
      return;
    }
    const args = new DrilldownEvent(e, this);
    this.run(() => this.drilldown.emit(args));
    if (args.isDefaultPrevented()) {
      return;
    }
    const hiddenSeries = [];
    this.seriesComponents.forEach((series) => {
      if (!series.hidden) {
        series.hidden = true;
        hiddenSeries.push(series);
      }
    });
    const view = seriesCollection.viewContainer.createEmbeddedView(seriesComponent.drilldownTemplate.templateRef, {
      drilldownValue: e.value,
      point: e.point,
      series: e.series
    });
    view.hiddenSeries = hiddenSeries;
    view.markForCheck();
    this.drilldownState.push(view);
    this.drilldownLevelChange.emit(this.drilldownLevel);
  }
  ngAfterViewChecked() {
    if (this.instance && this.autoResize) {
      this.ngZone.runOutsideAngular(() => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
          this.resize();
        }, 0);
      });
    }
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    copyChanges(changes, store);
    store.popupSettings = null;
    this.configurationService.push(store);
  }
  /**
   * Updates the component fields with the specified values and refreshes the Chart.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * chart.notifyChanges({ title: { text: 'New Title' } });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  ngOnDestroy() {
    this.destroyed = true;
    if (this.optionsChange) {
      this.optionsChange.unsubscribe();
    }
    if (this.domSubscriptions) {
      this.domSubscriptions();
      this.domSubscriptions = null;
    }
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    clearTimeout(this.resizeTimeout);
    clearTimeout(this.redrawTimeout);
  }
  createInstance(element, observer) {
    this.instance = new chart_default(element, this.options, this.theme, {
      intlService: this.intl,
      observer,
      rtl: this.rtl,
      sender: this
    });
  }
  /**
   * Exports the Chart as an image. The export operation is asynchronous and returns a promise.
   *
   * @param {ImageExportOptions} options - The parameters for the exported image.
   * @returns {Promise<string>} - A promise that will be resolved with a PNG image encoded as a Data URI.
   */
  exportImage(options = {}) {
    return exportImage(this.exportVisual(options), options);
  }
  /**
   * Exports the Chart as an SVG document. The export operation is asynchronous and returns a promise.
   *
   * @param options - The parameters for the exported file.
   * @returns - A promise that will be resolved with an SVG document that is encoded as a Data URI.
   */
  exportSVG(options = {}) {
    return exportSVG(this.exportVisual(options), options);
  }
  /**
   * Exports the Chart as a Drawing `Scene`.
   *
   * @param options - The parameters for the export operation.
   * @returns - The root Group of the scene.
   */
  exportVisual(options = {}) {
    return this.instance.exportVisual(options);
  }
  /**
   * Returns the axis with the specified name.
   *
   * @param {string} name - The axis name.
   * @returns {ChartAxis} - The axis with a corresponding name.
   */
  findAxisByName(name) {
    if (this.instance) {
      return this.instance.findAxisByName(name);
    }
  }
  /**
   * Returns the pane at the specified index.
   *
   * @param {number} index - The pane index.
   * @returns {ChartPane} - The pane at the specified index.
   */
  findPaneByIndex(index) {
    if (this.instance) {
      return this.instance.findPaneByIndex(index);
    }
  }
  /**
   * Returns the pane with the specified name.
   *
   * @param {string} name - The name of the pane.
   * @returns {ChartPane} - The pane with the provided name.
   */
  findPaneByName(name) {
    if (this.instance) {
      return this.instance.findPaneByName(name);
    }
  }
  /**
   * Returns the plot area of the Chart.
   * @returns {ChartPlotArea} - The plot area of the Chart.
   */
  getPlotArea() {
    if (this.instance) {
      return this.instance.plotArea();
    }
  }
  /**
   * Highlights the series points or the segments of a Pie, Donut, Funnel or Pyramid charts.
   *
   * See [Series Highlight]({% slug serieshighlight_chart_charts %}) for more details (with an [example](slug:serieshighlight_chart_charts#toc-toggling-the-highlight-with-code)).
   * @param show - A Boolean value that indicates whether the highlight is shown or hidden.
   * @param filter - A string that represents the series or category name, an object with the series and category name, or a function which will be called for each point. The function should return `true` for the points for which the highlight is toggled.
   */
  toggleHighlight(show, filter) {
    if (this.instance) {
      this.instance.toggleHighlight(show, filter);
    }
  }
  /**
   * Hides the tooltip of the Chart.
   */
  hideTooltip() {
    if (this.instance) {
      this.instance.hideTooltip();
    }
  }
  /**
   * Shows the Chart tooltip of a specific point or the shared tooltip of a specific category.
   *
   * @param filter - The category for a shared tooltip or a function which will be called for each point until the function returns `true`.
   */
  showTooltip(filter) {
    if (this.instance) {
      this.instance.showTooltip(filter);
    }
  }
  init() {
    if (!this.canRender) {
      return;
    }
    const element = this.surfaceElement.nativeElement;
    const instanceObserver = new ChartInstanceObserver(this);
    this.createInstance(element, instanceObserver);
  }
  /**
   * Detects the size of the container and redraws the Chart.
   * Resizing is automatic unless you set the `resizeRateLimit` option to `0`.
   */
  resize() {
    if (this.instance) {
      this.instance.resize();
    }
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
   * Reloads the Chart appearance settings from the current [Kendo UI Theme]({% slug themesandstyles %}).
   *
   * Call this method after loading a different theme stylesheet.
   */
  reloadTheme() {
    if (!this.instance) {
      return;
    }
    this.themeService.reset();
    this.instance.destroy();
    this.instance = null;
  }
  onLegendItemClick(e) {
    this.run(() => {
      const args = new LegendItemClickEvent(e, this);
      this.legendItemClick.emit(args);
      if (!args.isDefaultPrevented()) {
        const series = this.seriesComponents.toArray()[e.series.index];
        if (!series) {
          return;
        }
        if (e.pointIndex !== void 0) {
          series.togglePointVisibility(e.pointIndex);
        } else {
          series.toggleVisibility();
        }
        this.suppressTransitions = true;
      }
    }, hasObservers(this.legendItemClick), this.seriesComponents.length > 0);
  }
  onInit(e) {
    this.instance = e.sender;
  }
  onRender(e) {
    const donutCenterStyle = this.getDonutCenterStyle();
    this.run(() => {
      const args = new RenderEvent(e, this);
      this.surface = e.sender.surface;
      this.render.emit(args);
      this.donutCenterStyle = donutCenterStyle;
    }, hasObservers(this.render), this.donutCenterStyle !== donutCenterStyle);
  }
  onShowTooltip(e) {
    this.run(() => {
      if (!e.crosshair) {
        this.tooltipInstance.show(e);
      } else {
        this.crossahirTooltips.show(e);
      }
    }, !e.crosshair, true);
  }
  onHideTooltip(e) {
    if (!e.crosshair) {
      if (this.tooltipInstance.active) {
        this.tooltipInstance.hide();
        this.detectChanges();
      }
    } else if (this.crossahirTooltips.active) {
      this.crossahirTooltips.hide();
      this.detectChanges();
    }
  }
  trigger(name, e) {
    if (name === "resize") {
      return;
    }
    if (name === "drilldown") {
      this.onDrilldown(e);
      return;
    }
    const emitter = this.activeEmitter(name);
    if (emitter) {
      const args = this.instanceEventService.create(name, e, this);
      this.run(() => {
        emitter.emit(args);
      });
      return args.isDefaultPrevented && args.isDefaultPrevented();
    }
  }
  requiresHandlers(names) {
    for (let idx = 0; idx < names.length; idx++) {
      if (this.activeEmitter(names[idx])) {
        return true;
      }
    }
    return false;
  }
  refresh() {
    clearTimeout(this.redrawTimeout);
    this.updateDirection();
    this.crossahirTooltips.createCrosshairTooltips(this.options);
    this.setChartAreaSize();
    if (!this.instance) {
      this.init();
      return;
    }
    const transitions = this.options.transitions;
    if (this.suppressTransitions) {
      this.options.transitions = false;
    }
    this.updateOptions();
    if (this.suppressTransitions) {
      this.options.transitions = transitions;
      this.suppressTransitions = false;
    }
  }
  setChartAreaSize() {
    if (!this.element) {
      return;
    }
    const element = this.element.nativeElement;
    const chartArea = this.options.chartArea || {};
    if (chartArea.width) {
      element.style.width = `${chartArea.width}px`;
    }
    if (chartArea.height) {
      element.style.height = `${chartArea.height}px`;
    }
  }
  updateOptions() {
    this.instance.setOptions(this.options);
  }
  /**
   * @hidden
   */
  tooltipMouseleave(e) {
    const relatedTarget = e.relatedTarget;
    const chartElement = this.element.nativeElement;
    if (this.instance && (!relatedTarget || !hasParent(relatedTarget, chartElement))) {
      this.instance.hideElements();
    }
  }
  /**
   * @hidden
   */
  chartMouseleave(e) {
    const relatedTarget = e.relatedTarget;
    const chartElement = this.element.nativeElement;
    if (this.instance && (!relatedTarget || !(this.tooltipInstance.containsElement(relatedTarget) || hasParent(relatedTarget, chartElement))) && !this.instance.handlingTap) {
      this.instance.hideElements();
    }
  }
  get canRender() {
    return isDocumentAvailable() && Boolean(this.surfaceElement);
  }
  get autoResize() {
    return this.resizeRateLimit > 0;
  }
  activeEmitter(name) {
    const emitter = this[name];
    if (emitter && emitter.emit && hasObservers(emitter)) {
      return emitter;
    }
  }
  getDonutCenterStyle() {
    if (!this.instance || !this.options || !this.options.series) {
      return;
    }
    const firstSeries = this.options.series[0];
    const charts = this.instance._plotArea.charts;
    if (!firstSeries || firstSeries.type !== "donut" || !charts || charts[0].points.length === 0) {
      return;
    }
    const firstPoint = charts[0].points[0];
    const center = firstPoint.box.center();
    const radius = firstPoint.sector.innerRadius;
    const top = center.y - radius;
    const left = center.x - radius;
    const size = radius * 2;
    return {
      height: size + "px",
      left: left + "px",
      top: top + "px",
      width: size + "px"
    };
  }
  refreshWait() {
    this.ngZone.runOutsideAngular(() => {
      this.optionsChange = combineLatest(this.configurationService.onChange$, this.themeService.onChange$).pipe(tap((result) => {
        this.options = result[0];
        this.theme = result[1];
      }), auditTime(THROTTLE_MS)).subscribe(() => {
        this.refresh();
      });
    });
  }
  run(callback, inZone = true, detectChanges) {
    if (inZone) {
      if (detectChanges) {
        this.changeDetector.markForCheck();
      }
      this.ngZone.run(callback);
    } else {
      callback();
      if (detectChanges) {
        this.detectChanges();
      }
    }
  }
  detectChanges() {
    if (!this.destroyed) {
      this.changeDetector.detectChanges();
    }
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
    this.ngZone.runOutsideAngular(() => {
      clearTimeout(this.redrawTimeout);
      this.redrawTimeout = setTimeout(() => {
        this.updateDirection();
        this.instance.noTransitionsRedraw();
      }, 0);
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
  static ɵfac = function ChartComponent_Factory(t) {
    return new (t || _ChartComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(InstanceEventService$1), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChartComponent,
    selectors: [["kendo-chart"]],
    contentQueries: function ChartComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, DonutCenterTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, NoDataTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, SeriesComponent, 4);
        ɵɵcontentQuery(dirIndex, SeriesItemComponent, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.donutCenterTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noDataTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesCollectionComponent = _t);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesComponents = _t);
      }
    },
    viewQuery: function ChartComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(TooltipPopupComponent, 7);
        ɵɵviewQuery(CrosshairTooltipsContainerComponent, 7);
        ɵɵviewQuery(_c1, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipInstance = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.crossahirTooltips = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.surfaceElement = _t.first);
      }
    },
    inputs: {
      pannable: "pannable",
      renderAs: "renderAs",
      seriesColors: "seriesColors",
      subtitle: "subtitle",
      title: "title",
      noData: "noData",
      transitions: "transitions",
      zoomable: "zoomable",
      axisDefaults: "axisDefaults",
      categoryAxis: "categoryAxis",
      chartArea: "chartArea",
      legend: "legend",
      panes: "panes",
      paneDefaults: "paneDefaults",
      plotArea: "plotArea",
      series: "series",
      seriesDefaults: "seriesDefaults",
      tooltip: "tooltip",
      valueAxis: "valueAxis",
      xAxis: "xAxis",
      yAxis: "yAxis",
      resizeRateLimit: "resizeRateLimit",
      popupSettings: "popupSettings",
      drilldownLevel: "drilldownLevel"
    },
    outputs: {
      axisLabelClick: "axisLabelClick",
      drag: "drag",
      dragEnd: "dragEnd",
      dragStart: "dragStart",
      legendItemHover: "legendItemHover",
      legendItemLeave: "legendItemLeave",
      noteClick: "noteClick",
      noteHover: "noteHover",
      noteLeave: "noteLeave",
      paneRender: "paneRender",
      plotAreaClick: "plotAreaClick",
      plotAreaHover: "plotAreaHover",
      plotAreaLeave: "plotAreaLeave",
      render: "render",
      select: "select",
      selectEnd: "selectEnd",
      selectStart: "selectStart",
      seriesClick: "seriesClick",
      drilldown: "drilldown",
      seriesHover: "seriesHover",
      seriesOver: "seriesOver",
      seriesLeave: "seriesLeave",
      zoom: "zoom",
      zoomEnd: "zoomEnd",
      zoomStart: "zoomStart",
      legendItemClick: "legendItemClick",
      drilldownLevelChange: "drilldownLevelChange"
    },
    exportAs: ["kendoChart"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, TooltipTemplateService, InstanceEventService$1, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chart"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 9,
    vars: 6,
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_CHARTS_FESM2022_PROGRESS_KENDO_ANGULAR_CHARTS_MJS_0 = goog.getMsg("No data available");
        i18n_0 = MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_CHARTS_FESM2022_PROGRESS_KENDO_ANGULAR_CHARTS_MJS_0;
      } else {
        i18n_0 = $localize`:kendo.chart.noData|The message to display when no series are defined, or all series are empty:No data available`;
      }
      return [["surface", ""], ["noDataMessage", ""], ["kendoChartLocalizedMessages", "", "noData", i18n_0], [1, "k-chart-surface"], ["class", "k-chart-overlay", 3, "display", 4, "ngIf"], [3, "popupSettings"], [3, "leave", "popupSettings"], [3, "resize", "rateLimit"], ["class", "k-chart-donut-center", 3, "ngStyle", 4, "ngIf"], ["kendoWatermarkOverlay", "", 4, "ngIf"], [1, "k-chart-overlay"], [1, "k-no-data"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], [1, "k-chart-donut-center", 3, "ngStyle"], ["kendoWatermarkOverlay", ""]];
    },
    template: function ChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementContainer(0, 2);
        ɵɵelementStart(1, "div", 3, 0);
        ɵɵtemplate(3, ChartComponent_div_3_Template, 5, 4, "div", 4);
        ɵɵelementEnd();
        ɵɵelement(4, "kendo-chart-crosshair-tooltips-container", 5);
        ɵɵelementStart(5, "kendo-chart-tooltip-popup", 6);
        ɵɵlistener("leave", function ChartComponent_Template_kendo_chart_tooltip_popup_leave_5_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.tooltipMouseleave($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(6, "kendo-resize-sensor", 7);
        ɵɵlistener("resize", function ChartComponent_Template_kendo_resize_sensor_resize_6_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
        ɵɵtemplate(7, ChartComponent_div_7_Template, 2, 2, "div", 8)(8, ChartComponent_div_8_Template, 1, 0, "div", 9);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.noData);
        ɵɵadvance();
        ɵɵproperty("popupSettings", ctx.popupSettings);
        ɵɵadvance();
        ɵɵproperty("popupSettings", ctx.popupSettings);
        ɵɵadvance();
        ɵɵproperty("rateLimit", ctx.resizeRateLimit);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.donutCenterStyle && ctx.donutCenterTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showLicenseWatermark);
      }
    },
    dependencies: [LocalizedChartMessagesDirective, CrosshairTooltipsContainerComponent, TooltipPopupComponent, ResizeSensorComponent, NgIf, NgStyle, NgTemplateOutlet, WatermarkOverlayComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoChart",
      providers: [ConfigurationService, TooltipTemplateService, InstanceEventService$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chart"
      }],
      selector: "kendo-chart",
      template: `
    <ng-container
        kendoChartLocalizedMessages
        i18n-noData="kendo.chart.noData|The message to display when no series are defined, or all series are empty"
        noData="No data available"
    ></ng-container>
    <div #surface class="k-chart-surface">
        <div *ngIf="noData" class='k-chart-overlay' [style.display]="'none'">
            <div class='k-no-data'>
                <ng-template *ngIf="noDataTemplate; else noDataMessage" [ngTemplateOutlet]="noDataTemplate.templateRef"></ng-template>
                <ng-template #noDataMessage>
                    {{ messageFor('noData') }}
                </ng-template>
            </div>
        </div>
    </div>
    <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
    </kendo-chart-crosshair-tooltips-container>
    <kendo-chart-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
    </kendo-chart-tooltip-popup>
    <kendo-resize-sensor (resize)="onResize()" [rateLimit]="resizeRateLimit"></kendo-resize-sensor>
    <div class="k-chart-donut-center" [ngStyle]="donutCenterStyle" *ngIf="donutCenterStyle && donutCenterTemplate">
      <ng-template [ngTemplateOutlet]="donutCenterTemplate.templateRef"></ng-template>
    </div>

    <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
  `,
      standalone: true,
      imports: [LocalizedChartMessagesDirective, CrosshairTooltipsContainerComponent, TooltipPopupComponent, ResizeSensorComponent, NgIf, NgStyle, NgTemplateOutlet, WatermarkOverlayComponent]
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: ElementRef
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: InstanceEventService$1
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }];
  }, {
    pannable: [{
      type: Input
    }],
    renderAs: [{
      type: Input
    }],
    seriesColors: [{
      type: Input
    }],
    subtitle: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    noData: [{
      type: Input
    }],
    transitions: [{
      type: Input
    }],
    zoomable: [{
      type: Input
    }],
    axisDefaults: [{
      type: Input
    }],
    categoryAxis: [{
      type: Input
    }],
    chartArea: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    panes: [{
      type: Input
    }],
    paneDefaults: [{
      type: Input
    }],
    plotArea: [{
      type: Input
    }],
    series: [{
      type: Input
    }],
    seriesDefaults: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    valueAxis: [{
      type: Input
    }],
    xAxis: [{
      type: Input
    }],
    yAxis: [{
      type: Input
    }],
    axisLabelClick: [{
      type: Output
    }],
    drag: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    legendItemHover: [{
      type: Output
    }],
    legendItemLeave: [{
      type: Output
    }],
    noteClick: [{
      type: Output
    }],
    noteHover: [{
      type: Output
    }],
    noteLeave: [{
      type: Output
    }],
    paneRender: [{
      type: Output
    }],
    plotAreaClick: [{
      type: Output
    }],
    plotAreaHover: [{
      type: Output
    }],
    plotAreaLeave: [{
      type: Output
    }],
    render: [{
      type: Output
    }],
    select: [{
      type: Output
    }],
    selectEnd: [{
      type: Output
    }],
    selectStart: [{
      type: Output
    }],
    seriesClick: [{
      type: Output
    }],
    drilldown: [{
      type: Output
    }],
    seriesHover: [{
      type: Output
    }],
    seriesOver: [{
      type: Output
    }],
    seriesLeave: [{
      type: Output
    }],
    zoom: [{
      type: Output
    }],
    zoomEnd: [{
      type: Output
    }],
    zoomStart: [{
      type: Output
    }],
    legendItemClick: [{
      type: Output
    }],
    drilldownLevelChange: [{
      type: Output
    }],
    resizeRateLimit: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    drilldownLevel: [{
      type: Input
    }],
    seriesCollectionComponent: [{
      type: ContentChildren,
      args: [SeriesComponent]
    }],
    seriesComponents: [{
      type: ContentChildren,
      args: [SeriesItemComponent, {
        descendants: true
      }]
    }],
    donutCenterTemplate: [{
      type: ContentChild,
      args: [DonutCenterTemplateDirective, {
        static: false
      }]
    }],
    noDataTemplate: [{
      type: ContentChild,
      args: [NoDataTemplateDirective, {
        static: false
      }]
    }],
    tooltipInstance: [{
      type: ViewChild,
      args: [TooltipPopupComponent, {
        static: true
      }]
    }],
    crossahirTooltips: [{
      type: ViewChild,
      args: [CrosshairTooltipsContainerComponent, {
        static: true
      }]
    }],
    surfaceElement: [{
      type: ViewChild,
      args: ["surface", {
        static: true
      }]
    }]
  });
})();
var ChartCustomMessagesComponent = class _ChartCustomMessagesComponent extends ChartMessages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function ChartCustomMessagesComponent_Factory(t) {
    return new (t || _ChartCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChartCustomMessagesComponent,
    selectors: [["kendo-chart-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: ChartMessages,
      useExisting: forwardRef(() => _ChartCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ChartCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: ChartMessages,
        useExisting: forwardRef(() => ChartCustomMessagesComponent)
      }],
      selector: "kendo-chart-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var WeekStartDay;
(function(WeekStartDay2) {
  WeekStartDay2[WeekStartDay2["Sunday"] = 0] = "Sunday";
  WeekStartDay2[WeekStartDay2["Monday"] = 1] = "Monday";
  WeekStartDay2[WeekStartDay2["Tuesday"] = 2] = "Tuesday";
  WeekStartDay2[WeekStartDay2["Wednesday"] = 3] = "Wednesday";
  WeekStartDay2[WeekStartDay2["Thursday"] = 4] = "Thursday";
  WeekStartDay2[WeekStartDay2["Friday"] = 5] = "Friday";
  WeekStartDay2[WeekStartDay2["Saturday"] = 6] = "Saturday";
})(WeekStartDay || (WeekStartDay = {}));
var XAxisItemComponent = class _XAxisItemComponent extends CollectionItemComponent {
  configurationService;
  collectionService;
  intl;
  axisCrossingValue;
  background;
  baseUnit;
  categories;
  color;
  line;
  majorGridLines;
  majorTicks;
  majorUnit;
  max;
  min;
  minorGridLines;
  minorTicks;
  minorUnit;
  name;
  narrowRange;
  pane;
  plotBands;
  reverse;
  startAngle;
  /**
   * The axis type.
   *
   * The options are `numeric` for a numeric axis, `date` for a specialized axis for displaying chronological data, and `log` for a logarithmic axis.
   *
   * If the series X value is of the `date` type, the Chart automatically switches to a date axis.
   * To avoid this behavior, set the `type`.
   * @default 'numeric'
   */
  type;
  /**
   * If set to `true`, the Chart displays the X axis. By default, the X axis is visible.
   * @default true
   */
  visible;
  weekStartDay;
  // These options are also available as child components
  crosshair;
  labels;
  notes;
  title;
  intlSubscription;
  constructor(configurationService, collectionService, intl, localeId) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.intl = intl;
    intl.localeId = localeId;
    this.notifyChanges({
      weekStartDay: intl.firstDay(intl.localeId)
    });
    this.intlSubscription = intl.changes.subscribe(() => {
      this.notifyChanges({
        weekStartDay: intl.firstDay(intl.localeId)
      });
    });
  }
  ngOnDestroy() {
    if (this.intlSubscription) {
      this.intlSubscription.unsubscribe();
    }
  }
  static ɵfac = function XAxisItemComponent_Factory(t) {
    return new (t || _XAxisItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LOCALE_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisItemComponent,
    selectors: [["kendo-chart-x-axis-item"]],
    inputs: {
      axisCrossingValue: "axisCrossingValue",
      background: "background",
      baseUnit: "baseUnit",
      categories: "categories",
      color: "color",
      line: "line",
      majorGridLines: "majorGridLines",
      majorTicks: "majorTicks",
      majorUnit: "majorUnit",
      max: "max",
      min: "min",
      minorGridLines: "minorGridLines",
      minorTicks: "minorTicks",
      minorUnit: "minorUnit",
      name: "name",
      narrowRange: "narrowRange",
      pane: "pane",
      plotBands: "plotBands",
      reverse: "reverse",
      startAngle: "startAngle",
      type: "type",
      visible: "visible",
      weekStartDay: "weekStartDay",
      crosshair: "crosshair",
      labels: "labels",
      notes: "notes",
      title: "title"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-x-axis-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: IntlService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, {
    axisCrossingValue: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    baseUnit: [{
      type: Input
    }],
    categories: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    majorGridLines: [{
      type: Input
    }],
    majorTicks: [{
      type: Input
    }],
    majorUnit: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    minorGridLines: [{
      type: Input
    }],
    minorTicks: [{
      type: Input
    }],
    minorUnit: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    narrowRange: [{
      type: Input
    }],
    pane: [{
      type: Input
    }],
    plotBands: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    weekStartDay: [{
      type: Input
    }],
    crosshair: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    notes: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var XAxisComponent = class _XAxisComponent extends CollectionComponent {
  configurationService;
  collectionService;
  children;
  constructor(configurationService, collectionService) {
    super("xAxis", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function XAxisComponent_Factory(t) {
    return new (t || _XAxisComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisComponent,
    selectors: [["kendo-chart-x-axis"]],
    contentQueries: function XAxisComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, XAxisItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-x-axis",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [XAxisItemComponent]
    }]
  });
})();
var XAxisCrosshairComponent = class _XAxisCrosshairComponent extends SettingsComponent {
  configurationService;
  color;
  /**
   * The opacity of the crosshair. By default, the crosshair is opaque.
   * @default 1
   */
  opacity;
  /**
   * If set to `true`, the Chart displays the X-axis crosshair of the Scatter Chart.
   * @default false
   */
  visible;
  /**
   * The width of the crosshair in pixels.
   * @default 1
   */
  width;
  // These options are also available as child components
  tooltip;
  constructor(configurationService) {
    super("crosshair", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function XAxisCrosshairComponent_Factory(t) {
    return new (t || _XAxisCrosshairComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisCrosshairComponent,
    selectors: [["kendo-chart-x-axis-item-crosshair"]],
    inputs: {
      color: "color",
      opacity: "opacity",
      visible: "visible",
      width: "width",
      tooltip: "tooltip"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisCrosshairComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisCrosshairComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-crosshair",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }]
  });
})();
var XAxisCrosshairTooltipComponent = class _XAxisCrosshairTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font of the tooltip.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the tooltip. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the value.
   * @default '{0}'
   */
  format;
  /**
   * The padding of the crosshair tooltip. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the crosshair tooltip of the Scatter chart X axis.
   * By default, the crosshair tooltip of the Scatter chart X axis is not visible.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("crosshair.tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function XAxisCrosshairTooltipComponent_Factory(t) {
    return new (t || _XAxisCrosshairTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisCrosshairTooltipComponent,
    selectors: [["kendo-chart-x-axis-item-crosshair-tooltip"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisCrosshairTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisCrosshairTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-crosshair-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var XAxisLabelsComponent = class _XAxisLabelsComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  culture;
  dateFormats;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  format;
  margin;
  mirror;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the axis labels. By default, labels are positioned next to the axis.
   * @default 'onAxis'
   */
  position;
  /**
   * The rotation angle of the labels. By default, the labels are not rotated. Can be set to `"auto"`.
   * In this case, the labels are rotated only if the slot size is not sufficient for the entire labels.
   * @default 0
   */
  rotation;
  /**
   * The number of labels to skip.
   * @default 1
   */
  skip;
  /**
   * The label rendering step&mdash;renders every n<sup>th</sup> label. By default, every label is rendered.
   * @default 1
   */
  step;
  /**
   * If set to `true`, the Chart displays the X-axis labels. By default, the X-axis labels are visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function XAxisLabelsComponent_Factory(t) {
    return new (t || _XAxisLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisLabelsComponent,
    selectors: [["kendo-chart-x-axis-item-labels"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      culture: "culture",
      dateFormats: "dateFormats",
      font: "font",
      format: "format",
      margin: "margin",
      mirror: "mirror",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      skip: "skip",
      step: "step",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    culture: [{
      type: Input
    }],
    dateFormats: [{
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
    mirror: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var XAxisNotesComponent = class _XAxisNotesComponent extends SettingsComponent {
  configurationService;
  data;
  line;
  position;
  visual;
  // These options are also available as child components
  icon;
  label;
  constructor(configurationService) {
    super("notes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function XAxisNotesComponent_Factory(t) {
    return new (t || _XAxisNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisNotesComponent,
    selectors: [["kendo-chart-x-axis-item-notes"]],
    inputs: {
      data: "data",
      line: "line",
      position: "position",
      visual: "visual",
      icon: "icon",
      label: "label"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-notes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }]
  });
})();
var XAxisNotesIconComponent = class _XAxisNotesIconComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  size;
  /**
   * The shape of the notes icon.
   * @default 'circle'
   */
  type;
  /**
   * The visibility of the notes icon.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.icon", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function XAxisNotesIconComponent_Factory(t) {
    return new (t || _XAxisNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisNotesIconComponent,
    selectors: [["kendo-chart-x-axis-item-notes-icon"]],
    inputs: {
      background: "background",
      border: "border",
      size: "size",
      type: "type",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var XAxisNotesLabelComponent = class _XAxisNotesLabelComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the label.
   * @default '12px sans-serif''
   */
  font;
  /**
   * The format for displaying the notes label. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the axis value.
   * @default '{0}'
   */
  format;
  /**
   * The position of the labels.
   * @default 'inside'
   */
  position;
  /**
   * The rotation angle of the label. By default, the label is not rotated.
   * @default 0
   */
  rotation;
  /**
   * If set to `true`, the Chart displays the X-axis notes label.
   * By default, the X-axis notes label is visible.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.label", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function XAxisNotesLabelComponent_Factory(t) {
    return new (t || _XAxisNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisNotesLabelComponent,
    selectors: [["kendo-chart-x-axis-item-notes-label"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      position: "position",
      rotation: "rotation",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var XAxisTitleComponent = class _XAxisTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default 'bold 16px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   * @default 5
   */
  padding;
  /**
   * The position of the title.
   * @default 'center'
   */
  position;
  /**
   * The rotation angle of the title. By default, the title is not rotated.
   * @default 0
   */
  rotation;
  text;
  /**
   * If set to `true`, the Chart displays the X axis title of the Scatter Chart.
   * By default, the X-axis title of the Scatter Chart is visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function XAxisTitleComponent_Factory(t) {
    return new (t || _XAxisTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _XAxisTitleComponent,
    selectors: [["kendo-chart-x-axis-item-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      text: "text",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function XAxisTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(XAxisTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-x-axis-item-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var YAxisItemComponent = class _YAxisItemComponent extends CollectionItemComponent {
  configurationService;
  collectionService;
  axisCrossingValue;
  background;
  baseUnit;
  categories;
  color;
  line;
  majorGridLines;
  majorTicks;
  majorUnit;
  max;
  min;
  minorGridLines;
  minorTicks;
  minorUnit;
  name;
  /**
   * If set to `true`, the Chart prevents the automatic axis range from snapping to zero.
   * Setting it to `false` forces the automatic axis range to snap to zero.
   * @default false
   */
  narrowRange;
  pane;
  plotBands;
  /**
   * If set to `true`, the value axis direction is reversed.
   * By default, the values increase from left to right and from bottom to top.
   * @default false
   */
  reverse;
  /**
   * The axis type.
   *
   * The options are `numeric` for a numeric axis, `date` for a specialized axis for displaying chronological data, and `log` for a logarithmic axis.
   *
   * If the series Y value is of the `date` type, the Chart automatically switches to a date axis.
   * To avoid this behavior, set the `type`.
   * @default 'numeric'
   */
  type;
  /**
   * If set to `true`, the Chart displays the Y axis. By default, the Y axis is visible.
   * @default true
   */
  visible;
  // These options are also available as child components
  crosshair;
  labels;
  notes;
  title;
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function YAxisItemComponent_Factory(t) {
    return new (t || _YAxisItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisItemComponent,
    selectors: [["kendo-chart-y-axis-item"]],
    inputs: {
      axisCrossingValue: "axisCrossingValue",
      background: "background",
      baseUnit: "baseUnit",
      categories: "categories",
      color: "color",
      line: "line",
      majorGridLines: "majorGridLines",
      majorTicks: "majorTicks",
      majorUnit: "majorUnit",
      max: "max",
      min: "min",
      minorGridLines: "minorGridLines",
      minorTicks: "minorTicks",
      minorUnit: "minorUnit",
      name: "name",
      narrowRange: "narrowRange",
      pane: "pane",
      plotBands: "plotBands",
      reverse: "reverse",
      type: "type",
      visible: "visible",
      crosshair: "crosshair",
      labels: "labels",
      notes: "notes",
      title: "title"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-y-axis-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    axisCrossingValue: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    baseUnit: [{
      type: Input
    }],
    categories: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    majorGridLines: [{
      type: Input
    }],
    majorTicks: [{
      type: Input
    }],
    majorUnit: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    minorGridLines: [{
      type: Input
    }],
    minorTicks: [{
      type: Input
    }],
    minorUnit: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    narrowRange: [{
      type: Input
    }],
    pane: [{
      type: Input
    }],
    plotBands: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    crosshair: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    notes: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var YAxisComponent = class _YAxisComponent extends CollectionComponent {
  configurationService;
  collectionService;
  children;
  constructor(configurationService, collectionService) {
    super("yAxis", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function YAxisComponent_Factory(t) {
    return new (t || _YAxisComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisComponent,
    selectors: [["kendo-chart-y-axis"]],
    contentQueries: function YAxisComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, YAxisItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-y-axis",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [YAxisItemComponent]
    }]
  });
})();
var YAxisCrosshairComponent = class _YAxisCrosshairComponent extends SettingsComponent {
  configurationService;
  color;
  opacity;
  visible;
  width;
  // These options are also available as child components.
  tooltip;
  constructor(configurationService) {
    super("crosshair", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function YAxisCrosshairComponent_Factory(t) {
    return new (t || _YAxisCrosshairComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisCrosshairComponent,
    selectors: [["kendo-chart-y-axis-item-crosshair"]],
    inputs: {
      color: "color",
      opacity: "opacity",
      visible: "visible",
      width: "width",
      tooltip: "tooltip"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisCrosshairComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisCrosshairComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-crosshair",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }]
  });
})();
var YAxisCrosshairTooltipComponent = class _YAxisCrosshairTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  font;
  format;
  padding;
  visible;
  constructor(configurationService) {
    super("crosshair.tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function YAxisCrosshairTooltipComponent_Factory(t) {
    return new (t || _YAxisCrosshairTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisCrosshairTooltipComponent,
    selectors: [["kendo-chart-y-axis-item-crosshair-tooltip"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisCrosshairTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisCrosshairTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-crosshair-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var YAxisLabelsComponent = class _YAxisLabelsComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  culture;
  dateFormats;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * If set to `true`, the Chart mirrors the axis labels and ticks. If the labels are normally on the
   * left side of the axis, the mirroring of the axis renders them to the right.
   * @default false
   */
  mirror;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the axis labels. By default, labels are positioned next to the axis.
   * @default 'onAxis'
   */
  position;
  /**
   * The rotation angle of the labels. By default, the labels are not rotated.
   * @default 0
   */
  rotation;
  /**
   * The number of labels to skip.
   * @default 0
   */
  skip;
  /**
   * The label rendering step&mdash;renders every `n`<sup>th</sup> label. By default, every label is rendered.
   * @default 1
   */
  step;
  /**
   * If set to `true`, the Chart displays the Y-axis labels. By default, the Y-axis labels are visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function YAxisLabelsComponent_Factory(t) {
    return new (t || _YAxisLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisLabelsComponent,
    selectors: [["kendo-chart-y-axis-item-labels"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      culture: "culture",
      dateFormats: "dateFormats",
      font: "font",
      format: "format",
      margin: "margin",
      mirror: "mirror",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      skip: "skip",
      step: "step",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    culture: [{
      type: Input
    }],
    dateFormats: [{
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
    mirror: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var YAxisNotesComponent = class _YAxisNotesComponent extends SettingsComponent {
  configurationService;
  data;
  line;
  position;
  visual;
  // These options are also available as child components
  icon;
  label;
  constructor(configurationService) {
    super("notes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function YAxisNotesComponent_Factory(t) {
    return new (t || _YAxisNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisNotesComponent,
    selectors: [["kendo-chart-y-axis-item-notes"]],
    inputs: {
      data: "data",
      line: "line",
      position: "position",
      visual: "visual",
      icon: "icon",
      label: "label"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-notes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }]
  });
})();
var YAxisNotesIconComponent = class _YAxisNotesIconComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  size;
  /**
   * The shape of the notes icon.
   * @default 'circle'
   */
  type;
  /**
   * The visibility of the notes icon.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.icon", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function YAxisNotesIconComponent_Factory(t) {
    return new (t || _YAxisNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisNotesIconComponent,
    selectors: [["kendo-chart-y-axis-item-notes-icon"]],
    inputs: {
      background: "background",
      border: "border",
      size: "size",
      type: "type",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var YAxisNotesLabelComponent = class _YAxisNotesLabelComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the label.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the notes label. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the axis value.
   * @default '{0}'
   */
  format;
  /**
   * The position of the labels.
   * @default 'inside'
   */
  position;
  /**
   * The rotation angle of the label. By default, the label is not rotated.
   * @default 0
   */
  rotation;
  /**
   * If set to `true`, the Chart displays the Y-axis notes label.
   * By default, the Y-axis notes label is visible.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.label", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function YAxisNotesLabelComponent_Factory(t) {
    return new (t || _YAxisNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisNotesLabelComponent,
    selectors: [["kendo-chart-y-axis-item-notes-label"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      position: "position",
      rotation: "rotation",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var YAxisTitleComponent = class _YAxisTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default 'bold 16px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the title.
   * @default 'center'
   */
  position;
  /**
   * The rotation angle of the title. By default, the title is not rotated.
   * @default 0
   */
  rotation;
  text;
  /**
   * If set to `true`, the Chart displays the Scatter Chart Y-axis title.
   * By default, the Scatter Chart Y-axis title is visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function YAxisTitleComponent_Factory(t) {
    return new (t || _YAxisTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _YAxisTitleComponent,
    selectors: [["kendo-chart-y-axis-item-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      text: "text",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function YAxisTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(YAxisTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-y-axis-item-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var ZoomableComponent = class _ZoomableComponent extends SettingsComponent {
  configurationService;
  mousewheel;
  selection;
  constructor(configurationService) {
    super("zoomable", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ZoomableComponent_Factory(t) {
    return new (t || _ZoomableComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ZoomableComponent,
    selectors: [["kendo-chart-zoomable"]],
    inputs: {
      mousewheel: "mousewheel",
      selection: "selection"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ZoomableComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZoomableComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-zoomable",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    mousewheel: [{
      type: Input
    }],
    selection: [{
      type: Input
    }]
  });
})();
var NavigatorFilterEvent = class extends BaseEvent {
  /**
   * The start of the navigator range.
   */
  from;
  /**
   * The end of the navigator range.
   */
  to;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(sender);
    this.from = e.from;
    this.to = e.to;
  }
};
var RootConfigurationService = class _RootConfigurationService extends ConfigurationService {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵRootConfigurationService_BaseFactory;
    return function RootConfigurationService_Factory(t) {
      return (ɵRootConfigurationService_BaseFactory || (ɵRootConfigurationService_BaseFactory = ɵɵgetInheritedFactory(_RootConfigurationService)))(t || _RootConfigurationService);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _RootConfigurationService,
    factory: _RootConfigurationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RootConfigurationService, [{
    type: Injectable
  }], null, null);
})();
var EVENT_MAP$1 = {
  navigatorFilter: NavigatorFilterEvent
};
var StockInstanceEventService = class extends InstanceEventService$1 {
  create(name, args, sender) {
    if (EVENT_MAP$1[name]) {
      return new EVENT_MAP$1[name](args, sender);
    }
    return super.create(name, args, sender);
  }
};
var NAVIGATOR_DEFAULTS = {
  autoBindElements: true,
  liveDrag: false,
  partialRedraw: true
};
var StockChartComponent = class _StockChartComponent extends ChartComponent {
  configurationService;
  themeService;
  element;
  intl;
  localizationService;
  ngZone;
  instanceEventService;
  changeDetector;
  renderer;
  /**
   * The configuration options for the data navigator.
   */
  navigator;
  /**
   * @hidden
   */
  pannable;
  /**
   * @hidden
   */
  zoomable;
  /**
   * @hidden
   */
  drilldown = new EventEmitter();
  /**
   * @hidden
   */
  drilldownLevelChange = new EventEmitter();
  /**
   * @hidden
   */
  get drilldownLevel() {
    return this.drilldownState.length;
  }
  /**
   * Fires when the navigator range is changed.
   */
  navigatorFilter = new EventEmitter();
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  redrawSlaves = false;
  hostClasses = ["k-chart", "k-stockchart"];
  constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
    super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.element = element;
    this.intl = intl;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.instanceEventService = instanceEventService;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
  }
  /**
   * If called, the navigator pane is not redrawn the next time the StockChart options are updated.
   * The method is useful if you need to update only the main series data for the selected period.
   */
  skipNavigatorRedraw() {
    this.redrawSlaves = true;
  }
  createInstance(element, observer) {
    this.applyNavigatorDefaults();
    if (this.isDevMode() && (this.options.zoomable || this.options.pannable)) {
      throw new Error("The pannable and zoomable options are not supported by the StockChart component.");
    }
    this.instance = new stock_chart_default(element, this.options, this.theme, {
      intlService: this.intl,
      observer,
      rtl: this.rtl,
      sender: this
    });
  }
  updateOptions() {
    this.applyNavigatorDefaults();
    if (this.redrawSlaves) {
      this.instance.applyOptions(this.options);
      this.instance.bindCategories();
      this.instance.navigator.redrawSlaves();
    } else {
      this.instance.setOptions(this.options);
    }
    this.redrawSlaves = false;
  }
  applyNavigatorDefaults() {
    this.options.navigator = Object.assign({}, this.options.navigator, NAVIGATOR_DEFAULTS);
  }
  isDevMode() {
    return isDevMode();
  }
  static ɵfac = function StockChartComponent_Factory(t) {
    return new (t || _StockChartComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(StockInstanceEventService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _StockChartComponent,
    selectors: [["kendo-stockchart"]],
    inputs: {
      navigator: "navigator",
      pannable: "pannable",
      zoomable: "zoomable",
      drilldownLevel: "drilldownLevel"
    },
    outputs: {
      drilldown: "drilldown",
      drilldownLevelChange: "drilldownLevelChange",
      navigatorFilter: "navigatorFilter"
    },
    exportAs: ["kendoStockChart"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, TooltipTemplateService, {
      provide: RootConfigurationService,
      useExisting: ConfigurationService
    }, StockInstanceEventService, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chart"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 3,
    consts: [["surface", ""], [1, "k-chart-surface"], [3, "popupSettings"], [3, "leave", "popupSettings"], [3, "resize"], ["kendoWatermarkOverlay", "", 4, "ngIf"], ["kendoWatermarkOverlay", ""]],
    template: function StockChartComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "div", 1, 0)(2, "kendo-chart-crosshair-tooltips-container", 2);
        ɵɵelementStart(3, "kendo-chart-tooltip-popup", 3);
        ɵɵlistener("leave", function StockChartComponent_Template_kendo_chart_tooltip_popup_leave_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.tooltipMouseleave($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(4, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function StockChartComponent_Template_kendo_resize_sensor_resize_4_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
        ɵɵtemplate(5, StockChartComponent_div_5_Template, 1, 0, "div", 5);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("popupSettings", ctx.popupSettings);
        ɵɵadvance();
        ɵɵproperty("popupSettings", ctx.popupSettings);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showLicenseWatermark);
      }
    },
    dependencies: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, ResizeSensorComponent, NgIf, WatermarkOverlayComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockChartComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoStockChart",
      providers: [ConfigurationService, TooltipTemplateService, {
        provide: RootConfigurationService,
        useExisting: ConfigurationService
      }, StockInstanceEventService, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chart"
      }],
      selector: "kendo-stockchart",
      template: `
        <div #surface class="k-chart-surface"></div>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `,
      standalone: true,
      imports: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, ResizeSensorComponent, NgIf, WatermarkOverlayComponent]
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: ElementRef
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: StockInstanceEventService
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }];
  }, {
    navigator: [{
      type: Input
    }],
    pannable: [{
      type: Input
    }],
    zoomable: [{
      type: Input
    }],
    drilldown: [{
      type: Output
    }],
    drilldownLevelChange: [{
      type: Output
    }],
    drilldownLevel: [{
      type: Input
    }],
    navigatorFilter: [{
      type: Output
    }]
  });
})();
var PREFIX = new InjectionToken("configuration prefix");
var PrefixConfigurationService = class _PrefixConfigurationService extends ConfigurationService {
  rootService;
  prefix;
  constructor(rootService, prefix, ngZone) {
    super(ngZone);
    this.rootService = rootService;
    this.prefix = prefix;
  }
  push(store) {
    this.rootService.notify(new Change(this.prefix, store));
  }
  notify(change) {
    change.key = this.prefix + (change.key ? `.${change.key}` : "");
    this.rootService.notify(change);
  }
  static ɵfac = function PrefixConfigurationService_Factory(t) {
    return new (t || _PrefixConfigurationService)(ɵɵinject(RootConfigurationService), ɵɵinject(PREFIX), ɵɵinject(NgZone));
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PrefixConfigurationService,
    factory: _PrefixConfigurationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrefixConfigurationService, [{
    type: Injectable
  }], function() {
    return [{
      type: RootConfigurationService,
      decorators: [{
        type: Inject,
        args: [RootConfigurationService]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [PREFIX]
      }]
    }, {
      type: NgZone
    }];
  }, null);
})();
var NavigatorComponent = class _NavigatorComponent extends SettingsComponent {
  configurationService;
  position;
  visible;
  // These options are also available as child components
  categoryAxis;
  hint;
  pane;
  select;
  series;
  constructor(configurationService) {
    super("", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorComponent_Factory(t) {
    return new (t || _NavigatorComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorComponent,
    selectors: [["kendo-chart-navigator"]],
    inputs: {
      position: "position",
      visible: "visible",
      categoryAxis: "categoryAxis",
      hint: "hint",
      pane: "pane",
      select: "select",
      series: "series"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: PREFIX,
      useValue: "navigator"
    }, {
      provide: ConfigurationService,
      useClass: PrefixConfigurationService
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: PREFIX,
        useValue: "navigator"
      }, {
        provide: ConfigurationService,
        useClass: PrefixConfigurationService
      }],
      selector: "kendo-chart-navigator",
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
    }],
    visible: [{
      type: Input
    }],
    categoryAxis: [{
      type: Input
    }],
    hint: [{
      type: Input
    }],
    pane: [{
      type: Input
    }],
    select: [{
      type: Input
    }],
    series: [{
      type: Input
    }]
  });
})();
var CategoryAxisItemComponent = class _CategoryAxisItemComponent extends CollectionItemComponent {
  configurationService;
  collectionService;
  intl;
  autoBaseUnitSteps;
  axisCrossingValue;
  background;
  baseUnit;
  baseUnitStep;
  categories;
  color;
  justified;
  line;
  majorGridLines;
  majorTicks;
  max;
  /**
   * The maximum number of groups (categories) to display when
   * [`categoryAxis.baseUnit`]({% slug api_charts_categoryaxis %}#toc-baseunit) is set to `"fit"` or
   * [`categoryAxis.baseUnitStep`]({% slug api_charts_categoryaxis %}#toc-baseunitstep) is set to `"auto"`.
   * @default 10
   */
  maxDateGroups;
  maxDivisions;
  min;
  minorGridLines;
  minorTicks;
  /**
   * The unique axis name. Used to associate a series with a category axis,
   * which utilizes the [`series.categoryAxis`]({% slug api_charts_series %}#toc-categoryaxis) option.
   * @default 'primary'
   */
  name;
  pane;
  plotBands;
  /**
   * If set to `true`, the category axis direction is reversed.
   * By default, categories are listed from left to right and from bottom to top.
   * @default false
   */
  reverse;
  /**
   * If set to `true`, the Chart rounds the first and last date to the nearest base unit.
   * @default true
   */
  roundToBaseUnit;
  /**
   * The angle (degrees) of the first category on the axis.
   * Angles increase clockwise with zero to the left. Negative values are acceptable.
   * @default 90
   */
  startAngle;
  /**
   * The category axis type.
   * The supported values include `category` for a discrete category axis and `date` for a specialized axis for displaying chronological data.
   * @default 'category'
   */
  type;
  /**
   * If set to `true`, the Chart displays the category axis. By default, the category axis is visible.
   * @default true
   */
  visible;
  /**
   * The week start day when the `baseUnit` is set to `"weeks"`.
   * @default 'Sunday'
   */
  weekStartDay;
  // These options are also available as child components
  crosshair;
  labels;
  notes;
  select;
  title;
  rangeLabels;
  intlSubscription;
  constructor(configurationService, collectionService, intl, localeId) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.intl = intl;
    intl.localeId = localeId;
    this.notifyChanges({
      weekStartDay: intl.firstDay(intl.localeId)
    });
    this.intlSubscription = intl.changes.subscribe(() => {
      this.notifyChanges({
        weekStartDay: intl.firstDay(intl.localeId)
      });
    });
  }
  ngOnDestroy() {
    if (this.intlSubscription) {
      this.intlSubscription.unsubscribe();
    }
  }
  static ɵfac = function CategoryAxisItemComponent_Factory(t) {
    return new (t || _CategoryAxisItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LOCALE_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisItemComponent,
    selectors: [["kendo-chart-category-axis-item"]],
    inputs: {
      autoBaseUnitSteps: "autoBaseUnitSteps",
      axisCrossingValue: "axisCrossingValue",
      background: "background",
      baseUnit: "baseUnit",
      baseUnitStep: "baseUnitStep",
      categories: "categories",
      color: "color",
      justified: "justified",
      line: "line",
      majorGridLines: "majorGridLines",
      majorTicks: "majorTicks",
      max: "max",
      maxDateGroups: "maxDateGroups",
      maxDivisions: "maxDivisions",
      min: "min",
      minorGridLines: "minorGridLines",
      minorTicks: "minorTicks",
      name: "name",
      pane: "pane",
      plotBands: "plotBands",
      reverse: "reverse",
      roundToBaseUnit: "roundToBaseUnit",
      startAngle: "startAngle",
      type: "type",
      visible: "visible",
      weekStartDay: "weekStartDay",
      crosshair: "crosshair",
      labels: "labels",
      notes: "notes",
      select: "select",
      title: "title",
      rangeLabels: "rangeLabels"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-category-axis-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: IntlService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, {
    autoBaseUnitSteps: [{
      type: Input
    }],
    axisCrossingValue: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    baseUnit: [{
      type: Input
    }],
    baseUnitStep: [{
      type: Input
    }],
    categories: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    justified: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    majorGridLines: [{
      type: Input
    }],
    majorTicks: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    maxDateGroups: [{
      type: Input
    }],
    maxDivisions: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    minorGridLines: [{
      type: Input
    }],
    minorTicks: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    pane: [{
      type: Input
    }],
    plotBands: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    roundToBaseUnit: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    weekStartDay: [{
      type: Input
    }],
    crosshair: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    notes: [{
      type: Input
    }],
    select: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    rangeLabels: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisComponent = class _NavigatorCategoryAxisComponent extends CategoryAxisItemComponent {
  configurationService;
  constructor(configurationService, intl, localeId) {
    super(configurationService, null, intl, localeId);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LOCALE_ID));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisComponent,
    selectors: [["kendo-chart-navigator-category-axis"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: PREFIX,
      useValue: "navigator.categoryAxis"
    }, {
      provide: ConfigurationService,
      useClass: PrefixConfigurationService
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: PREFIX,
        useValue: "navigator.categoryAxis"
      }, {
        provide: ConfigurationService,
        useClass: PrefixConfigurationService
      }],
      selector: "kendo-chart-navigator-category-axis",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: IntlService
    }, {
      type: void 0,
      decorators: [{
        type: Inject,
        args: [LOCALE_ID]
      }]
    }];
  }, null);
})();
var CategoryAxisCrosshairComponent = class _CategoryAxisCrosshairComponent extends SettingsComponent {
  configurationService;
  color;
  /**
   * The dash type of the crosshair.
   * @default 'solid'
   */
  dashType;
  /**
   * The opacity of the crosshair. By default, the crosshair is opaque.
   * @default 1
   */
  opacity;
  /**
   * If set to `true`, the Chart displays the category axis crosshair.
   * By default, the category axis crosshair is not visible.
   * @default false
   */
  visible;
  /**
   * The width of the crosshair in pixels.
   * @default 1
   */
  width;
  // These options are also available as child components
  tooltip;
  constructor(configurationService) {
    super("crosshair", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function CategoryAxisCrosshairComponent_Factory(t) {
    return new (t || _CategoryAxisCrosshairComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisCrosshairComponent,
    selectors: [["kendo-chart-category-axis-item-crosshair"]],
    inputs: {
      color: "color",
      dashType: "dashType",
      opacity: "opacity",
      visible: "visible",
      width: "width",
      tooltip: "tooltip"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisCrosshairComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisCrosshairComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-crosshair",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: Input
    }],
    dashType: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisCrosshairComponent = class _NavigatorCategoryAxisCrosshairComponent extends CategoryAxisCrosshairComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisCrosshairComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisCrosshairComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisCrosshairComponent,
    selectors: [["kendo-chart-navigator-category-axis-crosshair"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisCrosshairComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisCrosshairComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-crosshair",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisCrosshairTooltipComponent = class _CategoryAxisCrosshairTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The tooltip font.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format used to display the tooltip. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The padding of the crosshair tooltip. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the category axis crosshair tooltip.
   * By default, the category axis crosshair tooltip is not visible.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("crosshair.tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function CategoryAxisCrosshairTooltipComponent_Factory(t) {
    return new (t || _CategoryAxisCrosshairTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisCrosshairTooltipComponent,
    selectors: [["kendo-chart-category-axis-item-crosshair-tooltip"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisCrosshairTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisCrosshairTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-crosshair-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisCrosshairTooltipComponent = class _NavigatorCategoryAxisCrosshairTooltipComponent extends CategoryAxisCrosshairTooltipComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisCrosshairTooltipComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisCrosshairTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisCrosshairTooltipComponent,
    selectors: [["kendo-chart-navigator-category-axis-crosshair-tooltip"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisCrosshairTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisCrosshairTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-crosshair-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisLabelsComponent = class _CategoryAxisLabelsComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  culture;
  dateFormats;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * If set to `true`, the Chart mirrors the axis labels and ticks. If the labels are normally on the
   * left side of the axis, the mirroring of the axis renders them to the right.
   * @default false
   */
  mirror;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the axis labels. By default, labels are positioned next to the axis.
   * When `position` is set to `end`, the labels are placed at the end of the crossing axis, usually at the top or right end of the Chart unless the crossing axis has been reversed.
   * Alternatively, when the `position` property is set to `start`, the axis labels will be positioned at the beginning of the crossing axis, typically located at the left or bottom end of the Chart, unless the crossing axis has been reversed.
   * @default 'onAxis'
   */
  position;
  /**
   * The rotation angle of the labels. By default, the labels are not rotated.
   * If the axis is horizontal, can be set to `"auto"`.
   * In this case, the labels are rotated
   * only if the slot size is not sufficient for the entire labels.
   * @default 0
   */
  rotation;
  /**
   * The number of labels to skip. By default, no labels are skipped.
   * @default 0
   */
  skip;
  /**
   * The rendering step of the label&mdash;renders every n<sup>th</sup> label. By default, every label is rendered.
   * @default 1
   */
  step;
  /**
   * If set to `true`, the Chart displays the category axis labels.
   * By default, the category axis labels are visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function CategoryAxisLabelsComponent_Factory(t) {
    return new (t || _CategoryAxisLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisLabelsComponent,
    selectors: [["kendo-chart-category-axis-item-labels"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      culture: "culture",
      dateFormats: "dateFormats",
      font: "font",
      format: "format",
      margin: "margin",
      mirror: "mirror",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      skip: "skip",
      step: "step",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    culture: [{
      type: Input
    }],
    dateFormats: [{
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
    mirror: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisLabelsComponent = class _NavigatorCategoryAxisLabelsComponent extends CategoryAxisLabelsComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisLabelsComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisLabelsComponent,
    selectors: [["kendo-chart-navigator-category-axis-labels"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisNotesComponent = class _CategoryAxisNotesComponent extends SettingsComponent {
  configurationService;
  data;
  line;
  position;
  visual;
  // These options are also available as child components
  icon;
  label;
  constructor(configurationService) {
    super("notes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function CategoryAxisNotesComponent_Factory(t) {
    return new (t || _CategoryAxisNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisNotesComponent,
    selectors: [["kendo-chart-category-axis-item-notes"]],
    inputs: {
      data: "data",
      line: "line",
      position: "position",
      visual: "visual",
      icon: "icon",
      label: "label"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-notes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisNotesComponent = class _NavigatorCategoryAxisNotesComponent extends CategoryAxisNotesComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisNotesComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisNotesComponent,
    selectors: [["kendo-chart-navigator-category-axis-notes"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-notes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisNotesIconComponent = class _CategoryAxisNotesIconComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  size;
  type;
  visible;
  constructor(configurationService) {
    super("notes.icon", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function CategoryAxisNotesIconComponent_Factory(t) {
    return new (t || _CategoryAxisNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisNotesIconComponent,
    selectors: [["kendo-chart-category-axis-item-notes-icon"]],
    inputs: {
      background: "background",
      border: "border",
      size: "size",
      type: "type",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisNotesIconComponent = class _NavigatorCategoryAxisNotesIconComponent extends CategoryAxisNotesIconComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisNotesIconComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisNotesIconComponent,
    selectors: [["kendo-chart-navigator-category-axis-notes-icon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisNotesLabelComponent = class _CategoryAxisNotesLabelComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the label.
   * @default '12px, sans-serif'
   */
  font;
  /**
   * The format for displaying the notes label. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The position of the label.
   * @default "inside"
   */
  position;
  /**
   * The rotation angle of the label. By default, the label is not rotated.
   * @default 0
   */
  rotation;
  /**
   * If set to `true`, the Chart displays the category notes label.
   * By default, the category notes label is visible.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.label", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function CategoryAxisNotesLabelComponent_Factory(t) {
    return new (t || _CategoryAxisNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisNotesLabelComponent,
    selectors: [["kendo-chart-category-axis-item-notes-label"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      position: "position",
      rotation: "rotation",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisNotesLabelComponent = class _NavigatorCategoryAxisNotesLabelComponent extends CategoryAxisNotesLabelComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisNotesLabelComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisNotesLabelComponent,
    selectors: [["kendo-chart-navigator-category-axis-notes-label"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisSelectComponent = class _CategoryAxisSelectComponent extends SettingsComponent {
  configurationService;
  from;
  max;
  min;
  mousewheel;
  to;
  constructor(configurationService) {
    super("select", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function CategoryAxisSelectComponent_Factory(t) {
    return new (t || _CategoryAxisSelectComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisSelectComponent,
    selectors: [["kendo-chart-category-axis-item-select"]],
    inputs: {
      from: "from",
      max: "max",
      min: "min",
      mousewheel: "mousewheel",
      to: "to"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisSelectComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisSelectComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-select",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    from: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    mousewheel: [{
      type: Input
    }],
    to: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisSelectComponent = class _NavigatorCategoryAxisSelectComponent extends CategoryAxisSelectComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisSelectComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisSelectComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisSelectComponent,
    selectors: [["kendo-chart-navigator-category-axis-select"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisSelectComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisSelectComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-select",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var CategoryAxisTitleComponent = class _CategoryAxisTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default 'bold 16px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the title.
   * @default 'center'
   */
  position;
  /**
   * The rotation angle of the title. By default, the title is not rotated.
   * @default 0
   */
  rotation;
  text;
  /**
   * If set to `true`, the Chart displays the category axis title.
   * By default, the category axis title is visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function CategoryAxisTitleComponent_Factory(t) {
    return new (t || _CategoryAxisTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisTitleComponent,
    selectors: [["kendo-chart-category-axis-item-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      text: "text",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var NavigatorCategoryAxisTitleComponent = class _NavigatorCategoryAxisTitleComponent extends CategoryAxisTitleComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorCategoryAxisTitleComponent_Factory(t) {
    return new (t || _NavigatorCategoryAxisTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorCategoryAxisTitleComponent,
    selectors: [["kendo-chart-navigator-category-axis-title"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorCategoryAxisTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorCategoryAxisTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-category-axis-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var NavigatorHintComponent = class _NavigatorHintComponent extends SettingsComponent {
  configurationService;
  content;
  format;
  visible;
  constructor(configurationService) {
    super("hint", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorHintComponent_Factory(t) {
    return new (t || _NavigatorHintComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorHintComponent,
    selectors: [["kendo-chart-navigator-hint"]],
    inputs: {
      content: "content",
      format: "format",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorHintComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorHintComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-hint",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    content: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var PaneComponent = class _PaneComponent extends CollectionItemComponent {
  configurationService;
  collectionService;
  background;
  border;
  clip;
  height;
  /**
   * The margin of the pane. A numeric value sets all margins.
   * @default 0
   */
  margin;
  name;
  /**
   * The padding of the pane. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  title;
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function PaneComponent_Factory(t) {
    return new (t || _PaneComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PaneComponent,
    selectors: [["kendo-chart-pane"], ["kendo-chart-panes-item"]],
    inputs: {
      background: "background",
      border: "border",
      clip: "clip",
      height: "height",
      margin: "margin",
      name: "name",
      padding: "padding",
      title: "title"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PaneComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaneComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-pane, kendo-chart-panes-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    clip: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var NavigatorPaneComponent = class _NavigatorPaneComponent extends PaneComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService, null);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorPaneComponent_Factory(t) {
    return new (t || _NavigatorPaneComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorPaneComponent,
    selectors: [["kendo-chart-navigator-pane"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: PREFIX,
      useValue: "navigator.pane"
    }, {
      provide: ConfigurationService,
      useClass: PrefixConfigurationService
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorPaneComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorPaneComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [{
        provide: PREFIX,
        useValue: "navigator.pane"
      }, {
        provide: ConfigurationService,
        useClass: PrefixConfigurationService
      }],
      selector: "kendo-chart-navigator-pane",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var PanesTitleComponent = class _PanesTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default '700 18px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The position of the title.
   *
   * The positioning of the axis title can be set to `left` for left positioning, `right` for right positioning (both applicable to the horizontal axis), or `center` for positioning in the center.
   * @default 'center'
   */
  position;
  text;
  /**
   * If set to `true`, the Chart displays the pane title.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function PanesTitleComponent_Factory(t) {
    return new (t || _PanesTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanesTitleComponent,
    selectors: [["kendo-chart-pane-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      position: "position",
      text: "text",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PanesTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanesTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-pane-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var NavigatorPaneTitleComponent = class _NavigatorPaneTitleComponent extends PanesTitleComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorPaneTitleComponent_Factory(t) {
    return new (t || _NavigatorPaneTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorPaneTitleComponent,
    selectors: [["kendo-chart-navigator-pane-title"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorPaneTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorPaneTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-pane-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var NavigatorSelectComponent = class _NavigatorSelectComponent extends SettingsComponent {
  configurationService;
  from;
  to;
  mousewheel;
  constructor(configurationService) {
    super("select", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSelectComponent_Factory(t) {
    return new (t || _NavigatorSelectComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSelectComponent,
    selectors: [["kendo-chart-navigator-select"]],
    inputs: {
      from: "from",
      to: "to",
      mousewheel: "mousewheel"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSelectComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSelectComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-select",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    from: [{
      type: Input
    }],
    to: [{
      type: Input
    }],
    mousewheel: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesItemComponent = class _NavigatorSeriesItemComponent extends SeriesItemComponent {
  configurationService;
  collectionService;
  /**
   * @hidden
   */
  drilldownField;
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function NavigatorSeriesItemComponent_Factory(t) {
    return new (t || _NavigatorSeriesItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesItemComponent,
    selectors: [["kendo-chart-navigator-series-item"]],
    inputs: {
      drilldownField: "drilldownField"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-navigator-series-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    drilldownField: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesComponent = class _NavigatorSeriesComponent extends SeriesComponent {
  configurationService;
  collectionService;
  tooltipTemplateService;
  viewContainer;
  children;
  constructor(configurationService, collectionService, tooltipTemplateService, viewContainer) {
    super(configurationService, collectionService, tooltipTemplateService, viewContainer);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
    this.tooltipTemplateService = tooltipTemplateService;
    this.viewContainer = viewContainer;
  }
  readTooltipTemplates() {
  }
  static ɵfac = function NavigatorSeriesComponent_Factory(t) {
    return new (t || _NavigatorSeriesComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService), ɵɵdirectiveInject(TooltipTemplateService), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesComponent,
    selectors: [["kendo-chart-navigator-series"]],
    contentQueries: function NavigatorSeriesComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, NavigatorSeriesItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-navigator-series",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }, {
      type: TooltipTemplateService
    }, {
      type: ViewContainerRef
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [NavigatorSeriesItemComponent]
    }]
  });
})();
var SeriesErrorBarsComponent = class _SeriesErrorBarsComponent extends SettingsComponent {
  configurationService;
  color;
  /**
  * If set to `false`, the caps of the error bars are not displayed. By default, the caps are visible.
  * @default true
  */
  endCaps;
  line;
  value;
  visual;
  xValue;
  yValue;
  constructor(configurationService) {
    super("errorBars", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesErrorBarsComponent_Factory(t) {
    return new (t || _SeriesErrorBarsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesErrorBarsComponent,
    selectors: [["kendo-chart-series-item-error-bars"]],
    inputs: {
      color: "color",
      endCaps: "endCaps",
      line: "line",
      value: "value",
      visual: "visual",
      xValue: "xValue",
      yValue: "yValue"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesErrorBarsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesErrorBarsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-error-bars",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: Input
    }],
    endCaps: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    xValue: [{
      type: Input
    }],
    yValue: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesErrorBarsComponent = class _NavigatorSeriesErrorBarsComponent extends SeriesErrorBarsComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesErrorBarsComponent_Factory(t) {
    return new (t || _NavigatorSeriesErrorBarsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesErrorBarsComponent,
    selectors: [["kendo-chart-navigator-series-item-error-bars"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesErrorBarsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesErrorBarsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-error-bars",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesExtremesComponent = class _SeriesExtremesComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  rotation;
  /**
  * The extremes size in pixels.
  * @default 6
  */
  size;
  /**
  * The shape of the series extremes.
  * @default 'circle'
  */
  type;
  constructor(configurationService) {
    super("extremes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesExtremesComponent_Factory(t) {
    return new (t || _SeriesExtremesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesExtremesComponent,
    selectors: [["kendo-chart-series-item-extremes"]],
    inputs: {
      background: "background",
      border: "border",
      rotation: "rotation",
      size: "size",
      type: "type"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesExtremesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesExtremesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-extremes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesExtremesComponent = class _NavigatorSeriesExtremesComponent extends SeriesExtremesComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesExtremesComponent_Factory(t) {
    return new (t || _NavigatorSeriesExtremesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesExtremesComponent,
    selectors: [["kendo-chart-navigator-series-item-extremes"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesExtremesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesExtremesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-extremes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesHighlightComponent = class _SeriesHighlightComponent extends SettingsComponent {
  configurationService;
  border;
  color;
  line;
  markers;
  opacity;
  toggle;
  /**
  * If set to `true`, the Chart highlights the series when the user hovers over it with the mouse.
  * @default true
  */
  visible;
  visual;
  constructor(configurationService) {
    super("highlight", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesHighlightComponent_Factory(t) {
    return new (t || _SeriesHighlightComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesHighlightComponent,
    selectors: [["kendo-chart-series-item-highlight"]],
    inputs: {
      border: "border",
      color: "color",
      line: "line",
      markers: "markers",
      opacity: "opacity",
      toggle: "toggle",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesHighlightComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesHighlightComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-highlight",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    border: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    markers: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    toggle: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesHighlightComponent = class _NavigatorSeriesHighlightComponent extends SeriesHighlightComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesHighlightComponent_Factory(t) {
    return new (t || _NavigatorSeriesHighlightComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesHighlightComponent,
    selectors: [["kendo-chart-navigator-series-item-highlight"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesHighlightComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesHighlightComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-highlight",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesLabelsComponent = class _SeriesLabelsComponent extends SettingsComponent {
  configurationService;
  align;
  background;
  border;
  color;
  content;
  ariaContent;
  /**
   * The distance between the labels when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"donut"` or `"pie"`.
   * @default 35
   */
  distance;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format of the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of the `IntlService`.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the labels. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * Bar and Column series always apply full padding and ignore this setting.
   * @default 0
   */
  padding;
  /**
   * The position of the labels.
   */
  position;
  rotation;
  /**
   * If set to `true`, the Chart displays the series labels.
   * @default false
   */
  visible;
  visual;
  // These options are also available as child components
  from;
  to;
  constructor(configurationService) {
    super("labels", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesLabelsComponent_Factory(t) {
    return new (t || _SeriesLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesLabelsComponent,
    selectors: [["kendo-chart-series-item-labels"]],
    inputs: {
      align: "align",
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      ariaContent: "ariaContent",
      distance: "distance",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      visible: "visible",
      visual: "visual",
      from: "from",
      to: "to"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    content: [{
      type: Input
    }],
    ariaContent: [{
      type: Input
    }],
    distance: [{
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
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
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
var NavigatorSeriesLabelsComponent = class _NavigatorSeriesLabelsComponent extends SeriesLabelsComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function NavigatorSeriesLabelsComponent_Factory(t) {
    return new (t || _NavigatorSeriesLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesLabelsComponent,
    selectors: [["kendo-chart-navigator-series-item-labels"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesLabelsFromComponent = class _SeriesLabelsFromComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the `from` labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format of the `from` labels. Uses the `IntlService` [`format`]({% slug api_intl_intlservice %}#toc-format) method.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the `from` labels. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the `from` labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  position;
  /**
   * If set to `true`, the Chart displays the series `from` labels.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("labels.from", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesLabelsFromComponent_Factory(t) {
    return new (t || _SeriesLabelsFromComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesLabelsFromComponent,
    selectors: [["kendo-chart-series-item-labels-from"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      position: "position",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesLabelsFromComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesLabelsFromComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-labels-from",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
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
    position: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesLabelsFromComponent = class _NavigatorSeriesLabelsFromComponent extends SeriesLabelsFromComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function NavigatorSeriesLabelsFromComponent_Factory(t) {
    return new (t || _NavigatorSeriesLabelsFromComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesLabelsFromComponent,
    selectors: [["kendo-chart-navigator-series-item-labels-from"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesLabelsFromComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesLabelsFromComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-labels-from",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesLabelsToComponent = class _SeriesLabelsToComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the `to` labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format of the `to` labels. Uses [IntlService format]({% slug api_intl_intlservice %}#toc-format).
   * @default '{0}'
   */
  format;
  /**
   * The margin of the `to` labels. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the `to` labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  position;
  /**
   * If set to `true`, the Chart displays the series `to` labels.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("labels.to", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesLabelsToComponent_Factory(t) {
    return new (t || _SeriesLabelsToComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesLabelsToComponent,
    selectors: [["kendo-chart-series-item-labels-to"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      position: "position",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesLabelsToComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesLabelsToComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-labels-to",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
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
    position: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesLabelsToComponent = class _NavigatorSeriesLabelsToComponent extends SeriesLabelsToComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function NavigatorSeriesLabelsToComponent_Factory(t) {
    return new (t || _NavigatorSeriesLabelsToComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesLabelsToComponent,
    selectors: [["kendo-chart-navigator-series-item-labels-to"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesLabelsToComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesLabelsToComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-labels-to",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesMarkersComponent = class _SeriesMarkersComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  rotation;
  /**
   * The marker size in pixels.
   * @default 6
   */
  size;
  /**
   * The shape of the series markers.
   * @default 'cirlce'
   */
  type;
  /**
   * If set to `true`, the Chart displays the series markers.
   * @default true
   */
  visible;
  visual;
  from;
  to;
  constructor(configurationService) {
    super("markers", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesMarkersComponent_Factory(t) {
    return new (t || _SeriesMarkersComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesMarkersComponent,
    selectors: [["kendo-chart-series-item-markers"]],
    inputs: {
      background: "background",
      border: "border",
      rotation: "rotation",
      size: "size",
      type: "type",
      visible: "visible",
      visual: "visual",
      from: "from",
      to: "to"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesMarkersComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesMarkersComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-markers",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
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
var NavigatorSeriesMarkersComponent = class _NavigatorSeriesMarkersComponent extends SeriesMarkersComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesMarkersComponent_Factory(t) {
    return new (t || _NavigatorSeriesMarkersComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesMarkersComponent,
    selectors: [["kendo-chart-navigator-series-item-markers"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesMarkersComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesMarkersComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-markers",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesNotesComponent = class _SeriesNotesComponent extends SettingsComponent {
  configurationService;
  line;
  position;
  visual;
  // These options are also available as child components
  icon;
  label;
  constructor(configurationService) {
    super("notes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesNotesComponent_Factory(t) {
    return new (t || _SeriesNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesNotesComponent,
    selectors: [["kendo-chart-series-item-notes"]],
    inputs: {
      line: "line",
      position: "position",
      visual: "visual",
      icon: "icon",
      label: "label"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-notes",
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
    position: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesNotesComponent = class _NavigatorSeriesNotesComponent extends SeriesNotesComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesNotesComponent_Factory(t) {
    return new (t || _NavigatorSeriesNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesNotesComponent,
    selectors: [["kendo-chart-navigator-series-item-notes"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-notes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesNotesIconComponent = class _SeriesNotesIconComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  size;
  /**
   * The icon shape.
   *
   * @default 'circle'
   */
  type;
  /**
   * The visibility of the notes icon.
   *
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.icon", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesNotesIconComponent_Factory(t) {
    return new (t || _SeriesNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesNotesIconComponent,
    selectors: [["kendo-chart-series-item-notes-icon"]],
    inputs: {
      background: "background",
      border: "border",
      size: "size",
      type: "type",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesNotesIconComponent = class _NavigatorSeriesNotesIconComponent extends SeriesNotesIconComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesNotesIconComponent_Factory(t) {
    return new (t || _NavigatorSeriesNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesNotesIconComponent,
    selectors: [["kendo-chart-navigator-series-item-notes-icon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesNotesLabelComponent = class _SeriesNotesLabelComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the label.
   *
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the notes label. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the axis value.
   *
   * @default '{0}'
   */
  format;
  /**
   * The position of the labels.
   *
   * @default 'inside'
   */
  position;
  /**
   * The rotation angle of the label.
   *
   * @default 0
   */
  rotation;
  /**
   * If set to `true`, the Chart displays the series notes label.
   *
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.label", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesNotesLabelComponent_Factory(t) {
    return new (t || _SeriesNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesNotesLabelComponent,
    selectors: [["kendo-chart-series-item-notes-label"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      position: "position",
      rotation: "rotation",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesNotesLabelComponent = class _NavigatorSeriesNotesLabelComponent extends SeriesNotesLabelComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesNotesLabelComponent_Factory(t) {
    return new (t || _NavigatorSeriesNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesNotesLabelComponent,
    selectors: [["kendo-chart-navigator-series-item-notes-label"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SeriesOutliersComponent = class _SeriesOutliersComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  rotation;
  /**
   * The marker size in pixels.
   *
   * @default 6
   */
  size;
  /**
   * The outliers shape.
   *
   * @default 'circle'
   */
  type;
  constructor(configurationService) {
    super("outliers", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesOutliersComponent_Factory(t) {
    return new (t || _SeriesOutliersComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesOutliersComponent,
    selectors: [["kendo-chart-series-item-outliers"]],
    inputs: {
      background: "background",
      border: "border",
      rotation: "rotation",
      size: "size",
      type: "type"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesOutliersComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesOutliersComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-outliers",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var NavigatorSeriesOutliersComponent = class _NavigatorSeriesOutliersComponent extends SeriesOutliersComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesOutliersComponent_Factory(t) {
    return new (t || _NavigatorSeriesOutliersComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesOutliersComponent,
    selectors: [["kendo-chart-navigator-series-item-outliers"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesOutliersComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesOutliersComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-outliers",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var NavigatorSeriesTooltipComponent = class _NavigatorSeriesTooltipComponent extends SeriesTooltipComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function NavigatorSeriesTooltipComponent_Factory(t) {
    return new (t || _NavigatorSeriesTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _NavigatorSeriesTooltipComponent,
    selectors: [["kendo-chart-navigator-series-item-tooltip"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function NavigatorSeriesTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigatorSeriesTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-navigator-series-item-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var SparklineComponent = class _SparklineComponent extends ChartComponent {
  configurationService;
  themeService;
  element;
  intl;
  localizationService;
  ngZone;
  instanceEventService;
  changeDetector;
  renderer;
  /**
   * The default series type.
   */
  type;
  /**
   * The data for the default Sparkline series.
   * Discarded if series are supplied.
   */
  data;
  /**
   * @hidden
   */
  drilldown = new EventEmitter();
  /**
   * @hidden
   */
  drilldownLevelChange = new EventEmitter();
  /**
   * @hidden
   */
  noData = false;
  /**
   * @hidden
   */
  get drilldownLevel() {
    return this.drilldownState.length;
  }
  /**
   * @hidden
   */
  tooltipWrapperClass = "k-sparkline-tooltip-wrapper";
  /**
   * @hidden
   */
  tooltipContentClasses = {
    "k-sparkline-tooltip": true
  };
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  hostClasses = ["k-sparkline", "k-widget"];
  constructor(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer) {
    super(configurationService, themeService, element, intl, localizationService, ngZone, instanceEventService, changeDetector, renderer);
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.element = element;
    this.intl = intl;
    this.localizationService = localizationService;
    this.ngZone = ngZone;
    this.instanceEventService = instanceEventService;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
  }
  createInstance(element, observer) {
    this.instance = new sparkline_default(element, sparkline_default.normalizeOptions(this.options), this.theme, {
      intlService: this.intl,
      observer,
      rtl: this.rtl,
      sender: this
    });
  }
  updateOptions() {
    this.instance.setOptions(sparkline_default.normalizeOptions(this.options));
  }
  static ɵfac = function SparklineComponent_Factory(t) {
    return new (t || _SparklineComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(ThemeService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(InstanceEventService$1), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SparklineComponent,
    selectors: [["kendo-sparkline"]],
    inputs: {
      type: "type",
      data: "data",
      noData: "noData",
      drilldownLevel: "drilldownLevel"
    },
    outputs: {
      drilldown: "drilldown",
      drilldownLevelChange: "drilldownLevelChange"
    },
    exportAs: ["kendoSparkline"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, TooltipTemplateService, InstanceEventService$1, LocalizationService, {
      provide: L10N_PREFIX,
      useValue: "kendo.chart"
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 6,
    vars: 6,
    consts: [["surface", ""], [1, "k-chart-surface"], [3, "popupSettings"], [3, "leave", "animate", "wrapperClass", "classNames", "popupSettings"], [3, "resize"], ["kendoWatermarkOverlay", "", 4, "ngIf"], ["kendoWatermarkOverlay", ""]],
    template: function SparklineComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelement(0, "span", 1, 0)(2, "kendo-chart-crosshair-tooltips-container", 2);
        ɵɵelementStart(3, "kendo-chart-tooltip-popup", 3);
        ɵɵlistener("leave", function SparklineComponent_Template_kendo_chart_tooltip_popup_leave_3_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.tooltipMouseleave($event));
        });
        ɵɵelementEnd();
        ɵɵelementStart(4, "kendo-resize-sensor", 4);
        ɵɵlistener("resize", function SparklineComponent_Template_kendo_resize_sensor_resize_4_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onResize());
        });
        ɵɵelementEnd();
        ɵɵtemplate(5, SparklineComponent_div_5_Template, 1, 0, "div", 5);
      }
      if (rf & 2) {
        ɵɵadvance(2);
        ɵɵproperty("popupSettings", ctx.popupSettings);
        ɵɵadvance();
        ɵɵproperty("animate", false)("wrapperClass", ctx.tooltipWrapperClass)("classNames", ctx.tooltipContentClasses)("popupSettings", ctx.popupSettings);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.showLicenseWatermark);
      }
    },
    dependencies: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, ResizeSensorComponent, NgIf, WatermarkOverlayComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SparklineComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoSparkline",
      providers: [ConfigurationService, TooltipTemplateService, InstanceEventService$1, LocalizationService, {
        provide: L10N_PREFIX,
        useValue: "kendo.chart"
      }],
      selector: "kendo-sparkline",
      template: `
        <span #surface class="k-chart-surface"></span>
        <kendo-chart-crosshair-tooltips-container [popupSettings]="popupSettings">
        </kendo-chart-crosshair-tooltips-container>
        <kendo-chart-tooltip-popup [animate]="false" [wrapperClass]="tooltipWrapperClass"
            [classNames]="tooltipContentClasses" (leave)="tooltipMouseleave($event)" [popupSettings]="popupSettings">
        </kendo-chart-tooltip-popup>
        <kendo-resize-sensor (resize)="onResize()"></kendo-resize-sensor>

        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `,
      standalone: true,
      imports: [CrosshairTooltipsContainerComponent, TooltipPopupComponent, ResizeSensorComponent, NgIf, WatermarkOverlayComponent]
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: ThemeService
    }, {
      type: ElementRef
    }, {
      type: IntlService
    }, {
      type: LocalizationService
    }, {
      type: NgZone
    }, {
      type: InstanceEventService$1
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }];
  }, {
    type: [{
      type: Input
    }],
    data: [{
      type: Input
    }],
    drilldown: [{
      type: Output
    }],
    drilldownLevelChange: [{
      type: Output
    }],
    noData: [{
      type: Input
    }],
    drilldownLevel: [{
      type: Input
    }]
  });
})();
var AxisDefaultsComponent = class _AxisDefaultsComponent extends SettingsComponent {
  configurationService;
  background;
  color;
  line;
  majorGridLines;
  majorTicks;
  minorGridLines;
  minorTicks;
  /**
   * If set to `true`, the Chart prevents the axis range from snapping to zero.
   * Setting it to `false`, forces the axis range to snap to zero.
   * @default false
   */
  narrowRange;
  pane;
  plotBands;
  /**
   * If set to `true`, the axis direction is reversed. By default, categories are listed from left to
   * right and from bottom to top.
   * @default false
   */
  reverse;
  /**
   * The angle (degrees) of the first category on the axis.
   * Angles increase clockwise with zero to the left. Negative values are acceptable.
   * @default 90
   */
  startAngle;
  /**
   * If set to `true`, the Chart displays the axis.
   * @default true
   */
  visible;
  // These options are also available as child components
  crosshair;
  labels;
  title;
  constructor(configurationService) {
    super("axisDefaults", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function AxisDefaultsComponent_Factory(t) {
    return new (t || _AxisDefaultsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AxisDefaultsComponent,
    selectors: [["kendo-chart-axis-defaults"]],
    inputs: {
      background: "background",
      color: "color",
      line: "line",
      majorGridLines: "majorGridLines",
      majorTicks: "majorTicks",
      minorGridLines: "minorGridLines",
      minorTicks: "minorTicks",
      narrowRange: "narrowRange",
      pane: "pane",
      plotBands: "plotBands",
      reverse: "reverse",
      startAngle: "startAngle",
      visible: "visible",
      crosshair: "crosshair",
      labels: "labels",
      title: "title"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function AxisDefaultsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxisDefaultsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-axis-defaults",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    majorGridLines: [{
      type: Input
    }],
    majorTicks: [{
      type: Input
    }],
    minorGridLines: [{
      type: Input
    }],
    minorTicks: [{
      type: Input
    }],
    narrowRange: [{
      type: Input
    }],
    pane: [{
      type: Input
    }],
    plotBands: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    startAngle: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    crosshair: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var AxisDefaultsCrosshairComponent = class _AxisDefaultsCrosshairComponent extends SettingsComponent {
  configurationService;
  color;
  /**
   * The dash type of the crosshair.
   * @default 'solid'
   */
  dashType;
  /**
   * The opacity of the crosshair. By default, the crosshair is opaque.
   * @default 1
   */
  opacity;
  /**
   * If set to `true`, the Chart displays the axis crosshair.
   * By default, the axis crosshair is not visible.
   * @default false
   */
  visible;
  /**
   * The width of the crosshair in pixels.
   * @default 1
   */
  width;
  // These options are also available as child components.
  tooltip;
  constructor(configurationService) {
    super("axisDefaults.crosshair", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function AxisDefaultsCrosshairComponent_Factory(t) {
    return new (t || _AxisDefaultsCrosshairComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AxisDefaultsCrosshairComponent,
    selectors: [["kendo-chart-axis-defaults-crosshair"]],
    inputs: {
      color: "color",
      dashType: "dashType",
      opacity: "opacity",
      visible: "visible",
      width: "width",
      tooltip: "tooltip"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function AxisDefaultsCrosshairComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxisDefaultsCrosshairComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-axis-defaults-crosshair",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: Input
    }],
    dashType: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }]
  });
})();
var AxisDefaultsCrosshairTooltipComponent = class _AxisDefaultsCrosshairTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The tooltip font.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the tooltip. Uses the [`format`](slug:api_intl_intlservice#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The padding of the crosshair tooltip. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the axis crosshair tooltip.
   * By default, the axis crosshair tooltip is not visible.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("axisDefaults.crosshair.tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function AxisDefaultsCrosshairTooltipComponent_Factory(t) {
    return new (t || _AxisDefaultsCrosshairTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AxisDefaultsCrosshairTooltipComponent,
    selectors: [["kendo-chart-axis-defaults-crosshair-tooltip"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function AxisDefaultsCrosshairTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxisDefaultsCrosshairTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-axis-defaults-crosshair-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var AxisDefaultsLabelsComponent = class _AxisDefaultsLabelsComponent extends SettingsComponent {
  configurationService;
  content;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * If set to `true`, the Chart mirrors the axis labels and ticks.
   * If the labels are normally on the left side of the axis,
   * the mirroring of the axis renders them to the right.
   * @default false
   */
  mirror;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The rotation angle of the labels. By default, the labels are not rotated.
   * If the axis is horizontal, can be set to `"auto"`.
   * In this case, the labels are rotated only if the slot size is not sufficient for the entire labels.
   * @default 0
   */
  rotation;
  /**
   * The number of labels to skip. By default, no labels are skipped.
   * @default 0
   */
  skip;
  /**
   * The label-rendering step&mdash;renders every n<sup>th</sup> label. By default, every label is rendered.
   * @default 1
   */
  step;
  /**
   * If set to `true`, the Chart displays the axis labels. By default, the axis labels are visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("axisDefaults.labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function AxisDefaultsLabelsComponent_Factory(t) {
    return new (t || _AxisDefaultsLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AxisDefaultsLabelsComponent,
    selectors: [["kendo-chart-axis-defaults-labels"]],
    inputs: {
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      mirror: "mirror",
      padding: "padding",
      rotation: "rotation",
      skip: "skip",
      step: "step",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function AxisDefaultsLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxisDefaultsLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-axis-defaults-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    content: [{
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
    mirror: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var AxisDefaultsTitleComponent = class _AxisDefaultsTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default 'bold 16px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the title.
   * @default 'center'
   */
  position;
  /**
   * The rotation angle of the title. By default, the title is not rotated.
   * @default 0
   */
  rotation;
  text;
  /**
   * If set to `true`, the Chart displays the axis title. By default, the axis title is visible.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("axisDefaults.title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function AxisDefaultsTitleComponent_Factory(t) {
    return new (t || _AxisDefaultsTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _AxisDefaultsTitleComponent,
    selectors: [["kendo-chart-axis-defaults-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      text: "text",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function AxisDefaultsTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AxisDefaultsTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-axis-defaults-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var CategoryAxisComponent = class _CategoryAxisComponent extends CollectionComponent {
  configurationService;
  collectionService;
  children;
  constructor(configurationService, collectionService) {
    super("categoryAxis", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function CategoryAxisComponent_Factory(t) {
    return new (t || _CategoryAxisComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisComponent,
    selectors: [["kendo-chart-category-axis"]],
    contentQueries: function CategoryAxisComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, CategoryAxisItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-category-axis",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [CategoryAxisItemComponent]
    }]
  });
})();
var CategoryAxisRangeLabelsComponent = class _CategoryAxisRangeLabelsComponent extends CategoryAxisLabelsComponent {
  configurationService;
  constructor(configurationService) {
    super(configurationService);
    this.configurationService = configurationService;
    this.configKey = "rangeLabels";
    this.markAsVisible();
  }
  static ɵfac = function CategoryAxisRangeLabelsComponent_Factory(t) {
    return new (t || _CategoryAxisRangeLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _CategoryAxisRangeLabelsComponent,
    selectors: [["kendo-chart-category-axis-item-range-labels"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function CategoryAxisRangeLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryAxisRangeLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-category-axis-item-range-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, null);
})();
var ChartAreaComponent = class _ChartAreaComponent extends SettingsComponent {
  configurationService;
  /**
   * The background color of the Chart area. Accepts a valid CSS color string, including hex and rgb.
   * @default 'white'
   */
  background;
  border;
  /**
   * The height of the Chart area.
   * @default 400
   */
  height;
  /**
   * The margin of the Chart area. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The background opacity of the Chart area. By default, the background is opaque.
   * @default 1
   */
  opacity;
  /**
   * The width of the Chart area.
   * @default 600
   */
  width;
  constructor(configurationService) {
    super("chartArea", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ChartAreaComponent_Factory(t) {
    return new (t || _ChartAreaComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChartAreaComponent,
    selectors: [["kendo-chart-area"]],
    inputs: {
      background: "background",
      border: "border",
      height: "height",
      margin: "margin",
      opacity: "opacity",
      width: "width"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ChartAreaComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartAreaComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-area",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    opacity: [{
      type: Input
    }],
    width: [{
      type: Input
    }]
  });
})();
var LegendComponent = class _LegendComponent extends SettingsComponent {
  configurationService;
  /**
   * The legend is horizontally aligned when [`legend.position`]({% slug api_charts_legend %}#toc-position) is set to `"top"` or `"bottom"`.
   * The legend is vertically aligned when [`legend.position`]({% slug api_charts_legend %}#toc-position) is set to `"left"` or `"right"`.
   * @default 'center'
   */
  align;
  /**
   * The background color of the legend. Accepts a valid CSS color string, including hex and rgb.
   * @default 'white'
   */
  background;
  border;
  height;
  labels;
  /**
   * The margin of the Chart legend. A numeric value sets all paddings.
   * @default 5
   */
  margin;
  /**
   * The X offset of the Chart legend. The offset is relative to the default position of the legend.
   * For example, a value of `20` moves the legend 20 pixels to the right of its initial position.
   * Negative values move the legend to the left of its current position.
   * @default 0
   */
  offsetX;
  /**
   * The Y offset of the chart legend. The offset is relative to the current position of the legend.
   * For example, a value of `20` moves the legend 20 pixels down from its initial position.
   * Negative values move the legend upwards from its current position.
   * @default 0
   */
  offsetY;
  /**
   * The orientation of the legend items.
   * @default 'vertical'
   */
  orientation;
  /**
   * The padding of the Chart legend. A numeric value sets all paddings.
   * @default 5
   */
  padding;
  /**
   * The positions of the Chart legend.
   * Setting the legend position to `custom` allows you to position the legend using the [`legend.offsetX`](slug:api_charts_legend#toc-offsetx) and [`legend.offsetY`](slug:api_charts_legend#toc-offsety) options.
   * @default 'right'
   */
  position;
  /**
   * If set to `true`, the legend items are reversed.
   * @default false
   */
  reverse;
  /**
   * If set to `true`, the Chart displays the legend. By default, the Chart legend is visible.
   * @default true
   */
  visible;
  width;
  markers;
  spacing;
  // These options are also available as child components
  inactiveItems;
  item;
  title;
  focusHighlight;
  constructor(configurationService) {
    super("legend", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function LegendComponent_Factory(t) {
    return new (t || _LegendComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LegendComponent,
    selectors: [["kendo-chart-legend"]],
    inputs: {
      align: "align",
      background: "background",
      border: "border",
      height: "height",
      labels: "labels",
      margin: "margin",
      offsetX: "offsetX",
      offsetY: "offsetY",
      orientation: "orientation",
      padding: "padding",
      position: "position",
      reverse: "reverse",
      visible: "visible",
      width: "width",
      markers: "markers",
      spacing: "spacing",
      inactiveItems: "inactiveItems",
      item: "item",
      title: "title",
      focusHighlight: "focusHighlight"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LegendComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegendComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-legend",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    offsetY: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    markers: [{
      type: Input
    }],
    spacing: [{
      type: Input
    }],
    inactiveItems: [{
      type: Input
    }],
    item: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    focusHighlight: [{
      type: Input
    }]
  });
})();
var LegendInactiveItemsComponent = class _LegendInactiveItemsComponent extends SettingsComponent {
  configurationService;
  labels;
  constructor(configurationService) {
    super("legend.inactiveItems", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function LegendInactiveItemsComponent_Factory(t) {
    return new (t || _LegendInactiveItemsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LegendInactiveItemsComponent,
    selectors: [["kendo-chart-legend-inactive-items"]],
    inputs: {
      labels: "labels"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LegendInactiveItemsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegendInactiveItemsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-legend-inactive-items",
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
    }]
  });
})();
var LegendItemComponent = class _LegendItemComponent extends SettingsComponent {
  configurationService;
  cursor;
  type;
  line;
  area;
  markers;
  highlight;
  visual;
  constructor(configurationService) {
    super("legend.item", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function LegendItemComponent_Factory(t) {
    return new (t || _LegendItemComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _LegendItemComponent,
    selectors: [["kendo-chart-legend-item"]],
    inputs: {
      cursor: "cursor",
      type: "type",
      line: "line",
      area: "area",
      markers: "markers",
      highlight: "highlight",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function LegendItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LegendItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-legend-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    cursor: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    area: [{
      type: Input
    }],
    markers: [{
      type: Input
    }],
    highlight: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var PaneDefaultsComponent = class _PaneDefaultsComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  clip;
  height;
  /**
   * The margin of the pane. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * The padding of the pane. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  title;
  constructor(configurationService) {
    super("paneDefaults", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function PaneDefaultsComponent_Factory(t) {
    return new (t || _PaneDefaultsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PaneDefaultsComponent,
    selectors: [["kendo-chart-pane-defaults"]],
    inputs: {
      background: "background",
      border: "border",
      clip: "clip",
      height: "height",
      margin: "margin",
      padding: "padding",
      title: "title"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PaneDefaultsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaneDefaultsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-pane-defaults",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    clip: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var PaneDefaultsTitleComponent = class _PaneDefaultsTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default '16px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The position of the title.
   *
   * The positioning of the axis title can be set to `left` for left positioning, `right` for right positioning (both applicable to the horizontal axis), or `center` for positioning in the center.
   * @default 'center'
   */
  position;
  /**
   * If set to `true`, the Chart displays the pane title.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("paneDefaults.title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function PaneDefaultsTitleComponent_Factory(t) {
    return new (t || _PaneDefaultsTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PaneDefaultsTitleComponent,
    selectors: [["kendo-chart-pane-defaults-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      position: "position",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PaneDefaultsTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaneDefaultsTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-pane-defaults-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var PanesComponent = class _PanesComponent extends CollectionComponent {
  configurationService;
  collectionService;
  children;
  constructor(configurationService, collectionService) {
    super("panes", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function PanesComponent_Factory(t) {
    return new (t || _PanesComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanesComponent,
    selectors: [["kendo-chart-panes"]],
    contentQueries: function PanesComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PaneComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PanesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-panes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [PaneComponent]
    }]
  });
})();
var PlotAreaComponent = class _PlotAreaComponent extends SettingsComponent {
  configurationService;
  /**
   * The background color of the Chart plot area.
   * Accepts a valid CSS color string, including HEX and RGB.
   * @default 'white'
   */
  background;
  border;
  /**
   * The margin of the plot area. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The background opacity of the plot area. By default, the background is opaque.
   * @default 1
   */
  opacity;
  /**
   * The padding of the plot area. A numeric value sets all paddings.
   * The default padding for the Pie, Donut, Radar, and Polar Charts is proportional of the Chart size.
   * @default 5
   */
  padding;
  constructor(configurationService) {
    super("plotArea", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function PlotAreaComponent_Factory(t) {
    return new (t || _PlotAreaComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PlotAreaComponent,
    selectors: [["kendo-chart-plot-area"]],
    inputs: {
      background: "background",
      border: "border",
      margin: "margin",
      opacity: "opacity",
      padding: "padding"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function PlotAreaComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotAreaComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-plot-area",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    padding: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsComponent = class _SeriesDefaultsComponent extends SettingsComponent {
  configurationService;
  border;
  /**
   * The distance between category clusters.
   * @default 1.5
   */
  gap;
  highlight;
  overlay;
  /**
   * The space between the Chart series as a proportion of the series width.
   * The `spacing` option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"candlestick"`, `"ohlc"`,
   * and `"waterfall"`.
   * @default 0.4
   */
  spacing;
  /**
   * A Boolean value which indicates if the series has to be stacked.
   * The stack option is supported when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"bar"`, `"column"`, `"line"`, `"area"`,
   * `"verticalLine"`, `"verticalArea"`, `"radarLine"`, `"radarArea"`, and `"radarColumn"`.
   * @default false
   */
  stack;
  type;
  visual;
  // These options are also available as child components
  labels;
  notes;
  tooltip;
  focusHighlight;
  constructor(configurationService) {
    super("seriesDefaults", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesDefaultsComponent_Factory(t) {
    return new (t || _SeriesDefaultsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsComponent,
    selectors: [["kendo-chart-series-defaults"]],
    inputs: {
      border: "border",
      gap: "gap",
      highlight: "highlight",
      overlay: "overlay",
      spacing: "spacing",
      stack: "stack",
      type: "type",
      visual: "visual",
      labels: "labels",
      notes: "notes",
      tooltip: "tooltip",
      focusHighlight: "focusHighlight"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    border: [{
      type: Input
    }],
    gap: [{
      type: Input
    }],
    highlight: [{
      type: Input
    }],
    overlay: [{
      type: Input
    }],
    spacing: [{
      type: Input
    }],
    stack: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    notes: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    focusHighlight: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsLabelsComponent = class _SeriesDefaultsLabelsComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format of the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the series labels.
   * @default false
   */
  visible;
  visual;
  // These options are also available as child components
  from;
  to;
  constructor(configurationService) {
    super("seriesDefaults.labels", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesDefaultsLabelsComponent_Factory(t) {
    return new (t || _SeriesDefaultsLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsLabelsComponent,
    selectors: [["kendo-chart-series-defaults-labels"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      visible: "visible",
      visual: "visual",
      from: "from",
      to: "to"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
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
    visible: [{
      type: Input
    }],
    visual: [{
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
var SeriesDefaultsLabelsFromComponent = class _SeriesDefaultsLabelsFromComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the from labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format of the `from` labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) of `IntlService`.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the `from` labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * The padding of the `from` labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the series `from` labels.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("seriesDefaults.labels.from", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesDefaultsLabelsFromComponent_Factory(t) {
    return new (t || _SeriesDefaultsLabelsFromComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsLabelsFromComponent,
    selectors: [["kendo-chart-series-defaults-labels-from"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsLabelsFromComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsLabelsFromComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-labels-from",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
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
    visible: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsLabelsToComponent = class _SeriesDefaultsLabelsToComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the `to` labels.
   * @default '12px sans-serif"'
   */
  font;
  /**
   * The format of the `to` labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the `to` labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  /**
   * The padding of the `to` labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the `to` labels of the series.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("seriesDefaults.labels.to", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesDefaultsLabelsToComponent_Factory(t) {
    return new (t || _SeriesDefaultsLabelsToComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsLabelsToComponent,
    selectors: [["kendo-chart-series-defaults-labels-to"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsLabelsToComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsLabelsToComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-labels-to",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
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
    visible: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsNotesComponent = class _SeriesDefaultsNotesComponent extends SettingsComponent {
  configurationService;
  line;
  visual;
  // These options are also available as child components
  icon;
  label;
  constructor(configurationService) {
    super("seriesDefaults.notes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesDefaultsNotesComponent_Factory(t) {
    return new (t || _SeriesDefaultsNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsNotesComponent,
    selectors: [["kendo-chart-series-defaults-notes"]],
    inputs: {
      line: "line",
      visual: "visual",
      icon: "icon",
      label: "label"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-notes",
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
    visual: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsNotesIconComponent = class _SeriesDefaultsNotesIconComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  size;
  /**
   * The shape of the notes icon.
   * @default 'circle'
   */
  type;
  /**
   * The visibility of the notes icon.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("seriesDefaults.notes.icon", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesDefaultsNotesIconComponent_Factory(t) {
    return new (t || _SeriesDefaultsNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsNotesIconComponent,
    selectors: [["kendo-chart-series-defaults-notes-icon"]],
    inputs: {
      background: "background",
      border: "border",
      size: "size",
      type: "type",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsNotesLabelComponent = class _SeriesDefaultsNotesLabelComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the label.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the notes label. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
   * Contains one placeholder (`"{0}"`) which represents the axis value.
   * @default '{0}'
   */
  format;
  /**
   * The position of the labels.
   * @default 'inside'
   */
  position;
  /**
   * The rotation angle of the label. By default, the label is not rotated.
   * @default 0
   */
  rotation;
  /**
   * If set to `true`, the Chart displays the [`seriesDefaults`]({% slug api_charts_seriesdefaults %}) notes label.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("seriesDefaults.notes.label", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesDefaultsNotesLabelComponent_Factory(t) {
    return new (t || _SeriesDefaultsNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsNotesLabelComponent,
    selectors: [["kendo-chart-series-defaults-notes-label"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      position: "position",
      rotation: "rotation",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var SeriesDefaultsTooltipComponent = class _SeriesDefaultsTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The tooltip font.
   * @default '12px sans serif'
   */
  font;
  format;
  /**
   * The padding of the tooltip. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * If set to `true`, the Chart displays the series tooltip.
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("seriesDefaults.tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SeriesDefaultsTooltipComponent_Factory(t) {
    return new (t || _SeriesDefaultsTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesDefaultsTooltipComponent,
    selectors: [["kendo-chart-series-defaults-tooltip"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesDefaultsTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesDefaultsTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-defaults-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var SeriesTrendlineComponent = class _SeriesTrendlineComponent extends SettingsComponent {
  configurationService;
  period;
  order;
  // These options are also available as child components
  forecast;
  constructor(configurationService) {
    super("trendline", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesTrendlineComponent_Factory(t) {
    return new (t || _SeriesTrendlineComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesTrendlineComponent,
    selectors: [["kendo-chart-series-item-trendline"]],
    inputs: {
      period: "period",
      order: "order",
      forecast: "forecast"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesTrendlineComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesTrendlineComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-trendline",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    period: [{
      type: Input
    }],
    order: [{
      type: Input
    }],
    forecast: [{
      type: Input
    }]
  });
})();
var SeriesTrendlineForecastComponent = class _SeriesTrendlineForecastComponent extends SettingsComponent {
  configurationService;
  before;
  after;
  /**
   * The series trendline forecast settings.
   *
   * The `forecast` option is supported  when [`series.type`]({% slug api_charts_series %}#toc-type) is set to `"linearTrendline"` and the parent series are either date series, `"scatter"` or `"scatterLine"` series.
   */
  forecast;
  constructor(configurationService) {
    super("forecast", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SeriesTrendlineForecastComponent_Factory(t) {
    return new (t || _SeriesTrendlineForecastComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SeriesTrendlineForecastComponent,
    selectors: [["kendo-chart-series-item-trendline-forecast"]],
    inputs: {
      before: "before",
      after: "after",
      forecast: "forecast"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SeriesTrendlineForecastComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SeriesTrendlineForecastComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-series-item-trendline-forecast",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    before: [{
      type: Input
    }],
    after: [{
      type: Input
    }],
    forecast: [{
      type: Input
    }]
  });
})();
var SubtitleComponent = class _SubtitleComponent extends SettingsComponent {
  configurationService;
  align;
  /**
   * The background color of the subtitle. Accepts a valid CSS color string, including HEX and RGB.
   *
   * @default 'white'
   */
  background;
  border;
  color;
  /**
   * The font of the subtitle.
   *
   * @default '12px sans-serif'
   */
  font;
  margin;
  /**
   * The padding of the subtitle. A numeric value sets all paddings.
   *
   * @default 5
   */
  padding;
  /**
   * The position of the subtitle.
   *
   * @default 'top'
   */
  position;
  text;
  /**
   * If set to `true`, the Chart displays the subtitle.
   *
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("subtitle", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SubtitleComponent_Factory(t) {
    return new (t || _SubtitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SubtitleComponent,
    selectors: [["kendo-chart-subtitle"]],
    inputs: {
      align: "align",
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      text: "text",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SubtitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubtitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-subtitle",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: Input
    }],
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var TitleComponent = class _TitleComponent extends SettingsComponent {
  configurationService;
  /**
   * The alignment of the title.
   * The alignment options for text include `center` for middle alignment, `left` for left alignment, and `right` for right alignment, allowing for flexible positioning of the title.
   *
   * @default 'center'
   */
  align;
  /**
   * The background color of the title. Accepts a valid CSS color string, including HEX and RGB.
   *
   * @default 'white'
   */
  background;
  border;
  color;
  /**
   * The font of the title.
   *
   * @default '16px sans-serif'
   */
  font;
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   *
   * @default 5
   */
  padding;
  /**
   * The position of the title.
   * The positioning options for titles include `bottom` for positioning at the bottom and `top` for positioning at the top, providing flexibility in title placement.
   *
   * @default 'top'
   */
  position;
  text;
  description;
  /**
   * If set to `true`, the Chart displays the title.
   *
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function TitleComponent_Factory(t) {
    return new (t || _TitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TitleComponent,
    selectors: [["kendo-chart-title"]],
    inputs: {
      align: "align",
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      text: "text",
      description: "description",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: Input
    }],
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var TooltipComponent = class _TooltipComponent extends SettingsComponent {
  configurationService;
  templateService;
  background;
  border;
  color;
  /**
   * The font of the tooltip.
   * @default '12px sans-serif'
   */
  font;
  format;
  /**
   * The opacity of the tooltip.
   * @default 1
   */
  opacity;
  padding;
  /**
   * If set to `true`, the Chart displays a single tooltip for every category.
   * @default false
   */
  shared;
  /**
   * If set to `true`, the Chart displays the series tooltip.
   * @default false
   */
  visible;
  seriesTooltipTemplate;
  sharedTooltipTemplate;
  constructor(configurationService, templateService) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
    this.templateService = templateService;
    this.markAsVisible();
  }
  ngAfterContentChecked() {
    this.templateService.setTemplate(this.seriesTooltipTemplate ? this.seriesTooltipTemplate.templateRef : null);
    this.templateService.setSharedTemplate(this.sharedTooltipTemplate ? this.sharedTooltipTemplate.templateRef : null);
  }
  static ɵfac = function TooltipComponent_Factory(t) {
    return new (t || _TooltipComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(TooltipTemplateService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TooltipComponent,
    selectors: [["kendo-chart-tooltip"]],
    contentQueries: function TooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SeriesTooltipTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, SharedTooltipTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.seriesTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.sharedTooltipTemplate = _t.first);
      }
    },
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      opacity: "opacity",
      padding: "padding",
      shared: "shared",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function TooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-chart-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: TooltipTemplateService
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
    opacity: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    shared: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    seriesTooltipTemplate: [{
      type: ContentChild,
      args: [SeriesTooltipTemplateDirective, {
        static: false
      }]
    }],
    sharedTooltipTemplate: [{
      type: ContentChild,
      args: [SharedTooltipTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var ValueAxisItemComponent = class _ValueAxisItemComponent extends CollectionItemComponent {
  configurationService;
  collectionService;
  axisCrossingValue;
  background;
  color;
  line;
  majorGridLines;
  majorTicks;
  majorUnit;
  /**
   * The maximum value of the axis.
   * @default 1
   */
  max;
  /**
   * The minimum value of the axis.
   * @default 0
   */
  min;
  minorGridLines;
  minorTicks;
  minorUnit;
  /**
   * The unique axis name. Used to associate a series with a value axis by using the [`series.axis`]({% slug api_charts_series %}#toc-axis) option.
   * @default 'primary'
   */
  name;
  /**
   * If set to `true`, the Chart prevents the automatic axis range from snapping to zero.
   * Setting it to `false` forces the automatic axis range to snap to zero.
   * @default true
   */
  narrowRange;
  pane;
  plotBands;
  /**
   * If set to `true`, the value axis direction is reversed.
   * By default, the categories are listed from left to right and from bottom to top.
   *
   * Radar and Polar Charts do not support reverse value axes.
   * @default false
   */
  reverse;
  /**
   * The axis type.
   *
   * The "numeric" value refers to a numeric axis, while "log" represents a logarithmic axis.
   * @default 'numeric'
   *
   */
  type;
  /**
   * If set to `true`, the Chart displays the value axis. By default, the value axis is visible.
   * @default true
   */
  visible;
  // These options are also available as child components
  crosshair;
  labels;
  notes;
  title;
  constructor(configurationService, collectionService) {
    super(configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function ValueAxisItemComponent_Factory(t) {
    return new (t || _ValueAxisItemComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisItemComponent,
    selectors: [["kendo-chart-value-axis-item"]],
    inputs: {
      axisCrossingValue: "axisCrossingValue",
      background: "background",
      color: "color",
      line: "line",
      majorGridLines: "majorGridLines",
      majorTicks: "majorTicks",
      majorUnit: "majorUnit",
      max: "max",
      min: "min",
      minorGridLines: "minorGridLines",
      minorTicks: "minorTicks",
      minorUnit: "minorUnit",
      name: "name",
      narrowRange: "narrowRange",
      pane: "pane",
      plotBands: "plotBands",
      reverse: "reverse",
      type: "type",
      visible: "visible",
      crosshair: "crosshair",
      labels: "labels",
      notes: "notes",
      title: "title"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisItemComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisItemComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [ConfigurationService],
      selector: "kendo-chart-value-axis-item",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    axisCrossingValue: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    majorGridLines: [{
      type: Input
    }],
    majorTicks: [{
      type: Input
    }],
    majorUnit: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    min: [{
      type: Input
    }],
    minorGridLines: [{
      type: Input
    }],
    minorTicks: [{
      type: Input
    }],
    minorUnit: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    narrowRange: [{
      type: Input
    }],
    pane: [{
      type: Input
    }],
    plotBands: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    crosshair: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    notes: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var ValueAxisComponent = class _ValueAxisComponent extends CollectionComponent {
  configurationService;
  collectionService;
  children;
  constructor(configurationService, collectionService) {
    super("valueAxis", configurationService, collectionService);
    this.configurationService = configurationService;
    this.collectionService = collectionService;
  }
  static ɵfac = function ValueAxisComponent_Factory(t) {
    return new (t || _ValueAxisComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(CollectionService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisComponent,
    selectors: [["kendo-chart-value-axis"]],
    contentQueries: function ValueAxisComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, ValueAxisItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
      }
    },
    standalone: true,
    features: [ɵɵProvidersFeature([CollectionService]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [CollectionService],
      selector: "kendo-chart-value-axis",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: CollectionService
    }];
  }, {
    children: [{
      type: ContentChildren,
      args: [ValueAxisItemComponent]
    }]
  });
})();
var ValueAxisCrosshairComponent = class _ValueAxisCrosshairComponent extends SettingsComponent {
  configurationService;
  color;
  /**
   * The opacity of the crosshair.
   *
   * @default 1
   */
  opacity;
  /**
   * If set to `true`, the Chart displays the value axis crosshair.
   *
   * @default false
   */
  visible;
  /**
   * The width of the crosshair in pixels.
   *
   * @default 1
   */
  width;
  // These options are also available as child components
  tooltip;
  constructor(configurationService) {
    super("crosshair", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function ValueAxisCrosshairComponent_Factory(t) {
    return new (t || _ValueAxisCrosshairComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisCrosshairComponent,
    selectors: [["kendo-chart-value-axis-item-crosshair"]],
    inputs: {
      color: "color",
      opacity: "opacity",
      visible: "visible",
      width: "width",
      tooltip: "tooltip"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisCrosshairComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisCrosshairComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-crosshair",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    color: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }]
  });
})();
var ValueAxisCrosshairTooltipComponent = class _ValueAxisCrosshairTooltipComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font of the tooltip.
   *
   * @default '12px sans-serif'
   */
  font;
  /**
  * The format for displaying the tooltip. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of `IntlService`.
  * Contains one placeholder (`"{0}"`) which represents the value.
  *
  * @default '{0}'
  */
  format;
  padding;
  /**
   * If set to `true`, the chart displays the value axis crosshair tooltip.
   *
   * @default false
   */
  visible;
  constructor(configurationService) {
    super("crosshair.tooltip", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function ValueAxisCrosshairTooltipComponent_Factory(t) {
    return new (t || _ValueAxisCrosshairTooltipComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisCrosshairTooltipComponent,
    selectors: [["kendo-chart-value-axis-item-crosshair-tooltip"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      format: "format",
      padding: "padding",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisCrosshairTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisCrosshairTooltipComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-crosshair-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    padding: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var ValueAxisLabelsComponent = class _ValueAxisLabelsComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the labels.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format for displaying the labels. Uses the [`format`]({% slug api_intl_intlservice %}#toc-format) method of IntlService.
   * Contains one placeholder (`"{0}"`) which represents the category value.
   * @default '{0}'
   */
  format;
  /**
   * The margin of the labels. A numeric value sets all margins.
   * @default 0
   */
  margin;
  mirror;
  /**
   * The padding of the labels. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the axis labels. By default, labels are positioned next to the axis.
   * When `position` is set to `end`, the labels are placed at the end of the crossing axis, usually at the top or right end of the Chart unless the crossing axis has been reversed.
   * Alternatively, when the `position` property is set to `start`, the axis labels will be positioned at the beginning of the crossing axis, typically located at the left or bottom end of the Chart, unless the crossing axis has been reversed.
   * @default 'onAxis'
   */
  position;
  /**
   * The rotation angle (in degrees) of the labels. By default, the labels are not rotated. Angles
   * increase clockwise and zero is to the left. Negative values are acceptable. Can be set to `"auto"` if
   * the axis is horizontal. In this case, the labels will be rotated only if the slot size is not
   * sufficient for the entire labels.
   * @default 0
   */
  rotation;
  /**
   * The number of labels to skip. By default, no labels are skipped.
   * @default 0
   */
  skip;
  /**
   * The label rendering step.
   * Every n<sup>th</sup> label is rendered where `n` is the step.
   * @default 1
   */
  step;
  /**
   * If set to `true`, the Chart displays the value axis labels.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ValueAxisLabelsComponent_Factory(t) {
    return new (t || _ValueAxisLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisLabelsComponent,
    selectors: [["kendo-chart-value-axis-item-labels"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      margin: "margin",
      mirror: "mirror",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      skip: "skip",
      step: "step",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
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
    mirror: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    skip: [{
      type: Input
    }],
    step: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var ValueAxisNotesComponent = class _ValueAxisNotesComponent extends SettingsComponent {
  configurationService;
  data;
  line;
  position;
  visual;
  // These options are also available as child components
  icon;
  label;
  constructor(configurationService) {
    super("notes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ValueAxisNotesComponent_Factory(t) {
    return new (t || _ValueAxisNotesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisNotesComponent,
    selectors: [["kendo-chart-value-axis-item-notes"]],
    inputs: {
      data: "data",
      line: "line",
      position: "position",
      visual: "visual",
      icon: "icon",
      label: "label"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisNotesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisNotesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-notes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    data: [{
      type: Input
    }],
    line: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    visual: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    label: [{
      type: Input
    }]
  });
})();
var ValueAxisNotesIconComponent = class _ValueAxisNotesIconComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  size;
  /**
   * The shape of the notes icon.
   * @default 'circle'
   */
  type;
  /**
   * The visibility of the notes icon.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.icon", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ValueAxisNotesIconComponent_Factory(t) {
    return new (t || _ValueAxisNotesIconComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisNotesIconComponent,
    selectors: [["kendo-chart-value-axis-item-notes-icon"]],
    inputs: {
      background: "background",
      border: "border",
      size: "size",
      type: "type",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisNotesIconComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisNotesIconComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-notes-icon",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var ValueAxisNotesLabelComponent = class _ValueAxisNotesLabelComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  content;
  /**
   * The font style of the label.
   * @default '12px sans-serif'
   */
  font;
  /**
   * The format used to display the notes label. Uses the IntlService [`format`]({% slug api_intl_intlservice %}#toc-format) method.
   * Contains one placeholder (`"{0}"`) which represents the axis value.
   * @default '{0}'
   */
  format;
  /**
   * The position of the labels.
   * @default 'inside'
   */
  position;
  /**
   * The rotation angle of the label. By default, the label is not rotated.
   * @default 0
   */
  rotation;
  /**
   * If set to `true`, the Chart displays the value axis notes label.
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("notes.label", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ValueAxisNotesLabelComponent_Factory(t) {
    return new (t || _ValueAxisNotesLabelComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisNotesLabelComponent,
    selectors: [["kendo-chart-value-axis-item-notes-label"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      content: "content",
      font: "font",
      format: "format",
      position: "position",
      rotation: "rotation",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisNotesLabelComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisNotesLabelComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-notes-label",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    content: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    format: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var ValueAxisTitleComponent = class _ValueAxisTitleComponent extends SettingsComponent {
  configurationService;
  background;
  border;
  color;
  /**
   * The font style of the title.
   * @default '16px sans-serif'
   */
  font;
  /**
   * The margin of the title. A numeric value sets all margins.
   * @default 5
   */
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   * @default 0
   */
  padding;
  /**
   * The position of the title.
   * @default 'center'
   */
  position;
  /**
   * The rotation angle of the title. By default, the title is not rotated.
   * @default 0
   */
  rotation;
  text;
  /**
   * If set to `true`, the Chart displays the value axis title.
   * @default true
   */
  visible;
  visual;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function ValueAxisTitleComponent_Factory(t) {
    return new (t || _ValueAxisTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ValueAxisTitleComponent,
    selectors: [["kendo-chart-value-axis-item-title"]],
    inputs: {
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      rotation: "rotation",
      text: "text",
      visible: "visible",
      visual: "visual"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function ValueAxisTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ValueAxisTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-chart-value-axis-item-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    rotation: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    visual: [{
      type: Input
    }]
  });
})();
var ChartBreadcrumbComponent = class _ChartBreadcrumbComponent {
  /**
   * The Chart instance to link to.
   */
  chart;
  /**
   * The definition of the breadcrumb root item.
   *
   * The default value is `{ icon: 'home', svgIcon: homeIcon, title: 'Home' }`.
   * (homeIcon is imported from '@progress/kendo-svg-icons')
   */
  rootItem = {
    icon: "home",
    svgIcon: homeIcon,
    title: "Home"
  };
  /**
   * @hidden
   */
  items;
  breadcrumb;
  subscription = new Subscription();
  ngOnInit() {
    this.items = [this.rootItem];
    if (this.chart) {
      this.subscription.add(this.chart.drilldown.subscribe(this.onDrilldown.bind(this)));
      this.subscription.add(this.chart.drilldownLevelChange.subscribe(this.onDrilldownLevelChange.bind(this)));
    } else if (isDevMode()) {
      throw new Error('Chart Breadcrumb: No Chart instance supplied. Please add a reference using the "chart" attribute. For example: \n<kendo-chart-breadcrumb [chart]="instance" />\n<kendo-chart #instance>');
    }
  }
  ngOnChanges(changes) {
    const rootItemChange = changes["rootItem"];
    if (rootItemChange && this.items) {
      this.items[0] = rootItemChange.currentValue;
    }
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
  /**
   * @hidden
   */
  onItemClick(target) {
    this.chart.drilldownLevel = this.items.findIndex((item) => item === target);
  }
  onDrilldown(e) {
    this.items = [...this.items, {
      text: e.point.category.toString()
    }];
  }
  onDrilldownLevelChange(level) {
    this.items = this.items.slice(0, level + 1);
  }
  static ɵfac = function ChartBreadcrumbComponent_Factory(t) {
    return new (t || _ChartBreadcrumbComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _ChartBreadcrumbComponent,
    selectors: [["kendo-chart-breadcrumb"]],
    viewQuery: function ChartBreadcrumbComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.breadcrumb = _t.first);
      }
    },
    inputs: {
      chart: "chart",
      rootItem: "rootItem"
    },
    exportAs: ["kendoChartBreadcrumb"],
    standalone: true,
    features: [ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "itemClick", "items"]],
    template: function ChartBreadcrumbComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "kendo-breadcrumb", 0);
        ɵɵlistener("itemClick", function ChartBreadcrumbComponent_Template_kendo_breadcrumb_itemClick_0_listener($event) {
          return ctx.onItemClick($event);
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("items", ctx.items);
      }
    },
    dependencies: [BreadCrumbComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartBreadcrumbComponent, [{
    type: Component,
    args: [{
      exportAs: "kendoChartBreadcrumb",
      selector: "kendo-chart-breadcrumb",
      template: `
        <kendo-breadcrumb [items]="items" (itemClick)="onItemClick($event)">
        </kendo-breadcrumb>
    `,
      standalone: true,
      imports: [BreadCrumbComponent]
    }]
  }], null, {
    chart: [{
      type: Input
    }],
    rootItem: [{
      type: Input
    }],
    breadcrumb: [{
      type: ViewChild,
      args: ["breadcrumb", {
        static: true
      }]
    }]
  });
})();
var SankeyThemeService = class _SankeyThemeService extends ThemeService {
  readTheme() {
    const theme = sankeyTheme(this.element);
    this.push(theme);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵSankeyThemeService_BaseFactory;
    return function SankeyThemeService_Factory(t) {
      return (ɵSankeyThemeService_BaseFactory || (ɵSankeyThemeService_BaseFactory = ɵɵgetInheritedFactory(_SankeyThemeService)))(t || _SankeyThemeService);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _SankeyThemeService,
    factory: _SankeyThemeService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyThemeService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var SankeyBaseEvent = class extends PreventableEvent {
  /**
   * The `SankeyComponent` that triggered the event.
   */
  sender;
  /**
   * The original DOM event.
   */
  originalEvent;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super();
    this.sender = sender;
    this.originalEvent = e.originalEvent;
  }
};
var SankeyNodeEvent = class extends SankeyBaseEvent {
  /**
   * The dataItem of the related element.
   */
  dataItem;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(e, sender);
    this.dataItem = e.dataItem;
  }
};
var SankeyLinkEvent = class extends SankeyBaseEvent {
  /**
   * The dataItem of the related element.
   */
  dataItem;
  /**
   * @hidden
   */
  constructor(e, sender) {
    super(e, sender);
    this.dataItem = e.dataItem;
  }
};
var EVENT_MAP = {
  nodeEnter: SankeyNodeEvent,
  nodeLeave: SankeyNodeEvent,
  linkEnter: SankeyLinkEvent,
  linkLeave: SankeyLinkEvent,
  nodeClick: SankeyNodeEvent,
  linkClick: SankeyLinkEvent
};
var InstanceEventService2 = class {
  create(name, args, sender) {
    return new EVENT_MAP[name](args, sender);
  }
};
var SankeyLinkTooltipTemplateContext = class {
  /**
   * The link source data item.
   */
  source;
  /**
   * The link target data item.
   */
  target;
  /**
   * The link value.
   */
  value;
  /**
   * @hidden
   */
  constructor(e) {
    const dataItem = e.dataItem;
    this.source = dataItem.source;
    this.target = dataItem.target;
    this.value = dataItem.value;
  }
};
var SankeyLinkTooltipTemplateDirective = class _SankeyLinkTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function SankeyLinkTooltipTemplateDirective_Factory(t) {
    return new (t || _SankeyLinkTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SankeyLinkTooltipTemplateDirective,
    selectors: [["", "kendoSankeyLinkTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyLinkTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSankeyLinkTooltipTemplate]",
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
var SankeyNodeTooltipTemplateContext = class {
  /**
   * The node color.
   */
  color;
  /**
   * The node label data.
   */
  label;
  /**
   * The node value.
   */
  value;
  /**
   * @hidden
   */
  constructor(e) {
    const dataItem = e.dataItem;
    this.label = dataItem.label;
    this.color = dataItem.color;
    this.value = e.nodeValue;
  }
};
var SankeyNodeTooltipTemplateDirective = class _SankeyNodeTooltipTemplateDirective {
  templateRef;
  constructor(templateRef) {
    this.templateRef = templateRef;
  }
  static ɵfac = function SankeyNodeTooltipTemplateDirective_Factory(t) {
    return new (t || _SankeyNodeTooltipTemplateDirective)(ɵɵdirectiveInject(TemplateRef, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SankeyNodeTooltipTemplateDirective,
    selectors: [["", "kendoSankeyNodeTooltipTemplate", ""]],
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyNodeTooltipTemplateDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSankeyNodeTooltipTemplate]",
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
var SankeyTooltipTemplateService = class _SankeyTooltipTemplateService {
  nodeTemplate;
  linkTemplate;
  static ɵfac = function SankeyTooltipTemplateService_Factory(t) {
    return new (t || _SankeyTooltipTemplateService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _SankeyTooltipTemplateService,
    factory: _SankeyTooltipTemplateService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyTooltipTemplateService, [{
    type: Injectable
  }], null, null);
})();
var SquareSymbol = class _SquareSymbol {
  color;
  size = 15;
  display = "inline-flex";
  marginLeft = 3;
  static ɵfac = function SquareSymbol_Factory(t) {
    return new (t || _SquareSymbol)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SquareSymbol,
    selectors: [["", "squareSymbol", ""]],
    hostVars: 10,
    hostBindings: function SquareSymbol_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("background-color", ctx.color)("width", ctx.size, "px")("height", ctx.size, "px")("display", ctx.display)("margin-left", ctx.marginLeft, "px");
      }
    },
    inputs: {
      color: "color",
      size: "size"
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SquareSymbol, [{
    type: Directive,
    args: [{
      selector: "[squareSymbol]",
      standalone: true
    }]
  }], null, {
    color: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.backgroundColor"]
    }],
    size: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["style.width.px"]
    }, {
      type: HostBinding,
      args: ["style.height.px"]
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }],
    marginLeft: [{
      type: HostBinding,
      args: ["style.marginLeft.px"]
    }]
  });
})();
var DEFAULT_OFFSET = 12;
var SankeyTooltipPopupComponent = class _SankeyTooltipPopupComponent extends BaseTooltip {
  element;
  popupService;
  templateService;
  localizationService;
  intlService;
  ngZone;
  renderer;
  nodeTooltipTemplateRef;
  linkTooltipTemplateRef;
  nodeTooltipContext;
  linkTooltipContext;
  defaultNodeTooltipTemplate;
  defaultLinkTooltipTemplate;
  templateRef;
  animate = false;
  wrapperClass = "k-chart-tooltip-wrapper";
  tooltipUnitFormat;
  offset;
  isNode;
  isLink;
  arrowIcon = arrowRightIcon;
  // TODO: Move to themes
  textStyle = {
    margin: "0 3px"
  };
  tooltipStyle = {
    display: "flex",
    alignItems: "center"
  };
  subscriptions;
  rtl = false;
  constructor(element, popupService, templateService, localizationService, intlService, ngZone, renderer) {
    super(popupService, localizationService);
    this.element = element;
    this.popupService = popupService;
    this.templateService = templateService;
    this.localizationService = localizationService;
    this.intlService = intlService;
    this.ngZone = ngZone;
    this.renderer = renderer;
  }
  onInit() {
    this.popupRef.popupElement.className += ` ${this.wrapperClass}`;
  }
  ngAfterViewInit() {
    this.setDirection();
    this.subscriptions = this.localizationService.changes.subscribe(this.rtlChange.bind(this));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
  show(e) {
    this.isNode = e.targetType === "node";
    this.isLink = e.targetType === "link";
    this.nodeTooltipTemplateRef = this.templateService.nodeTemplate || this.defaultNodeTooltipTemplate.templateRef;
    this.nodeTooltipContext = new SankeyNodeTooltipTemplateContext(e);
    this.linkTooltipTemplateRef = this.templateService.linkTemplate || this.defaultLinkTooltipTemplate.templateRef;
    this.linkTooltipContext = new SankeyLinkTooltipTemplateContext(e);
    super.show({
      style: {
        position: "static"
        // Override k-tooltip positioning
      },
      anchor: {
        align: e.tooltipData.popupAlign,
        point: this.tooltipAnchor(e)
      }
    });
  }
  tooltipAnchor(e) {
    const element = this.element.nativeElement;
    const size = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const anchor = __spreadValues({}, e.tooltipData.popupOffset);
    const popupAlign = e.tooltipData.popupAlign;
    const offset = this.offset || DEFAULT_OFFSET;
    anchor.left += popupAlign.horizontal === "left" ? offset : -1 * offset;
    if (popupAlign.horizontal === "right") {
      anchor.left -= size.width;
    }
    if (popupAlign.vertical === "bottom") {
      anchor.top -= size.height + offset;
    } else {
      anchor.top += offset;
    }
    return anchor;
  }
  formatUnits(value) {
    return this.intlService.format(this.tooltipUnitFormat, value ?? 0);
  }
  rtlChange() {
    this.arrowIcon = this.rtl ? arrowLeftIcon : arrowRightIcon;
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
  static ɵfac = function SankeyTooltipPopupComponent_Factory(t) {
    return new (t || _SankeyTooltipPopupComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(PopupService), ɵɵdirectiveInject(SankeyTooltipTemplateService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(IntlService), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(Renderer2));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyTooltipPopupComponent,
    selectors: [["kendo-sankey-tooltip-popup"]],
    viewQuery: function SankeyTooltipPopupComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(SankeyNodeTooltipTemplateDirective, 5);
        ɵɵviewQuery(SankeyLinkTooltipTemplateDirective, 5);
        ɵɵviewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultNodeTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.defaultLinkTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templateRef = _t.first);
      }
    },
    inputs: {
      animate: "animate",
      wrapperClass: "wrapperClass",
      tooltipUnitFormat: "tooltipUnitFormat",
      offset: "offset"
    },
    standalone: true,
    features: [ɵɵProvidersFeature([PopupService, {
      provide: POPUP_CONTAINER,
      useFactory: bodyFactory
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 4,
    vars: 0,
    consts: [["content", ""], ["kendoSankeyNodeTooltipTemplate", ""], ["kendoSankeyLinkTooltipTemplate", ""], [1, "k-tooltip", "k-sankey-tooltip", "k-chart-tooltip", "k-chart-shared-tooltip", 3, "ngStyle"], [1, "k-tooltip-content"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngStyle"], ["squareSymbol", "", 3, "color"], [3, "name", "svgIcon"]],
    template: function SankeyTooltipPopupComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, SankeyTooltipPopupComponent_ng_template_0_Template, 4, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(2, SankeyTooltipPopupComponent_ng_template_2_Template, 6, 6, "ng-template", 1)(3, SankeyTooltipPopupComponent_ng_template_3_Template, 10, 11, "ng-template", 2);
      }
    },
    dependencies: [NgStyle, NgIf, NgTemplateOutlet, SankeyNodeTooltipTemplateDirective, SquareSymbol, SankeyLinkTooltipTemplateDirective, IconWrapperComponent],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyTooltipPopupComponent, [{
    type: Component,
    args: [{
      providers: [PopupService, {
        provide: POPUP_CONTAINER,
        useFactory: bodyFactory
      }],
      selector: "kendo-sankey-tooltip-popup",
      template: `
        <ng-template #content>
            <div class="k-tooltip k-sankey-tooltip k-chart-tooltip k-chart-shared-tooltip" [ngStyle]="style">
                <div class="k-tooltip-content">
                    <ng-template
                        [ngTemplateOutlet]="nodeTooltipTemplateRef"
                        *ngIf="isNode"
                        [ngTemplateOutletContext]="nodeTooltipContext"
                    >
                    </ng-template>
                    <ng-template
                        [ngTemplateOutlet]="linkTooltipTemplateRef"
                        *ngIf="isLink"
                        [ngTemplateOutletContext]="linkTooltipContext"
                    >
                    </ng-template>
                </div>
            </div>
        </ng-template>

        <ng-template kendoSankeyNodeTooltipTemplate let-color="color" let-label="label" let-value="value">
            <div [ngStyle]="tooltipStyle">
                <div squareSymbol [color]="color"></div>
                <span [ngStyle]="textStyle">{{ label.text }}</span>
                <span [ngStyle]="textStyle">{{ formatUnits(value) }}</span>
            </div>
        </ng-template>

        <ng-template kendoSankeyLinkTooltipTemplate let-source="source" let-target="target" let-value="value">
            <div [ngStyle]="tooltipStyle">
                <div squareSymbol [color]="source.color"></div>
                <span [ngStyle]="textStyle">{{ source.label?.text }}</span>
                <kendo-icon-wrapper [name]="arrowIcon.name" [svgIcon]="arrowIcon"></kendo-icon-wrapper>
                <div squareSymbol [color]="target.color"></div>
                <span [ngStyle]="textStyle">{{ target.label?.text }}</span>
                <span [ngStyle]="textStyle">{{ formatUnits(value) }}</span>
            </div>
        </ng-template>
    `,
      standalone: true,
      imports: [NgStyle, NgIf, NgTemplateOutlet, SankeyNodeTooltipTemplateDirective, SquareSymbol, SankeyLinkTooltipTemplateDirective, IconWrapperComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: PopupService
    }, {
      type: SankeyTooltipTemplateService
    }, {
      type: LocalizationService
    }, {
      type: IntlService
    }, {
      type: NgZone
    }, {
      type: Renderer2
    }];
  }, {
    defaultNodeTooltipTemplate: [{
      type: ViewChild,
      args: [SankeyNodeTooltipTemplateDirective, {
        static: false
      }]
    }],
    defaultLinkTooltipTemplate: [{
      type: ViewChild,
      args: [SankeyLinkTooltipTemplateDirective, {
        static: false
      }]
    }],
    templateRef: [{
      type: ViewChild,
      args: ["content", {
        static: true
      }]
    }],
    animate: [{
      type: Input
    }],
    wrapperClass: [{
      type: Input
    }],
    tooltipUnitFormat: [{
      type: Input
    }],
    offset: [{
      type: Input
    }]
  });
})();
var Messages = class _Messages extends ComponentMessages {
  /**
   * The format string to use when displaying node and link values in the tooltip.
   */
  tooltipUnitFormat;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵMessages_BaseFactory;
    return function Messages_Factory(t) {
      return (ɵMessages_BaseFactory || (ɵMessages_BaseFactory = ɵɵgetInheritedFactory(_Messages)))(t || _Messages);
    };
  })();
  static ɵdir = ɵɵdefineDirective({
    type: _Messages,
    selectors: [["", "kendoSankeyMessages", ""]],
    inputs: {
      tooltipUnitFormat: "tooltipUnitFormat"
    },
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Messages, [{
    type: Directive,
    args: [{
      selector: "[kendoSankeyMessages]"
    }]
  }], null, {
    tooltipUnitFormat: [{
      type: Input
    }]
  });
})();
var LocalizedMessagesDirective = class _LocalizedMessagesDirective extends Messages {
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
    selectors: [["", "kendoSankeyLocalizedMessages", ""]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _LocalizedMessagesDirective)
    }]), ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LocalizedMessagesDirective, [{
    type: Directive,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => LocalizedMessagesDirective)
      }],
      selector: "[kendoSankeyLocalizedMessages]",
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SankeyComponent = class _SankeyComponent {
  element;
  configurationService;
  themeService;
  localizationService;
  instanceEventService;
  ngZone;
  changeDetector;
  renderer;
  intlService;
  /**
   * The data of the Sankey component containing the `links` and `nodes`.
   */
  data;
  /**
   * The default configuration for links.
   * These settings will be applied to all links unless overridden by individual data items.
   */
  links;
  /**
   * The default configuration for nodes.
   * These settings will be applied to all nodes unless overridden by individual data items.
   */
  nodes;
  /**
   * The default configuration for labels.
   * These settings will be applied to all labels unless overridden by individual data items.
   */
  labels;
  /**
   * The title configuration of the Sankey component.
   */
  title;
  /**
   * The legend configuration of the Sankey component.
   */
  legend;
  /**
   * The configuration of the Sankey tooltip.
   */
  tooltip;
  /**
   * If set to `true`, the Sankey component will not perform automatic layout.
   */
  disableAutoLayout;
  /**
   * If set to `false`, the Sankey keyboard navigation will be disabled.
   * By default, navigation is enabled.
   *
   * @default true
   */
  navigable = true;
  /**
   * The settings for the tooltip popup.
   */
  popupSettings;
  /**
   * Fires when the mouse pointer enters a node. Similar to the `mouseenter` event.
   */
  nodeEnter = new EventEmitter();
  /**
   * Fires when the mouse pointer leaves a node. Similar to the `mouseleave` event.
   */
  nodeLeave = new EventEmitter();
  /**
   * Fires when a node is clicked.
   */
  nodeClick = new EventEmitter();
  /**
   * Fires when the mouse pointer enters a link. Similar to the `mouseenter` event,
   */
  linkEnter = new EventEmitter();
  /**
   * Fires when the mouse pointer leaves a link. Similar to the `mouseleave` event.
   */
  linkLeave = new EventEmitter();
  /**
   * Fires when a link is clicked.
   */
  linkClick = new EventEmitter();
  tooltipInstance;
  instanceElement;
  /**
   * @hidden
   */
  showLicenseWatermark = false;
  instance;
  options;
  theme;
  optionsChange;
  redrawTimeout;
  destroyed;
  subscriptions;
  rtl = false;
  hostClasses = ["k-chart", "k-sankey"];
  constructor(element, configurationService, themeService, localizationService, instanceEventService, ngZone, changeDetector, renderer, intlService) {
    this.element = element;
    this.configurationService = configurationService;
    this.themeService = themeService;
    this.localizationService = localizationService;
    this.instanceEventService = instanceEventService;
    this.ngZone = ngZone;
    this.changeDetector = changeDetector;
    this.renderer = renderer;
    this.intlService = intlService;
    const isValid = validatePackage(packageMetadata);
    this.showLicenseWatermark = shouldShowValidationUI(isValid);
    this.themeService.loadTheme();
    this.refreshWait();
  }
  ngOnInit() {
    if (this.element) {
      this.hostClasses.forEach((name) => {
        this.renderer.addClass(this.element.nativeElement, name);
      });
    }
  }
  ngAfterViewInit() {
    this.setDirection();
    this.subscriptions = this.intlService.changes.subscribe(this.intlChange.bind(this));
    this.subscriptions.add(this.localizationService.changes.subscribe(this.rtlChange.bind(this)));
  }
  ngOnChanges(changes) {
    const store = this.configurationService.store;
    copyChanges(changes, store);
    store.popupSettings = null;
    this.configurationService.push(store);
  }
  /**
   * Updates the component fields with the specified values and refreshes the widget.
   *
   * Use this method when the configuration values cannot be set through the template.
   *
   * @example
   * ```ts-no-run
   * sankey.notifyChanges({ title: { text: 'New Title' } });
   * ```
   *
   * @param changes An object containing the updated input fields.
   */
  notifyChanges(changes) {
    this.ngOnChanges(toSimpleChanges(changes));
  }
  ngOnDestroy() {
    this.destroyed = true;
    if (this.optionsChange) {
      this.optionsChange.unsubscribe();
    }
    if (this.instance) {
      this.instance.destroy();
      this.instance = null;
    }
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
    clearTimeout(this.redrawTimeout);
  }
  /**
   * @hidden
   */
  messageFor(key) {
    return this.localizationService.get(key);
  }
  createInstance(element) {
    this.instance = new Sankey(element, this.instanceOptions, this.theme);
    ["nodeEnter", "nodeLeave", "nodeClick", "linkEnter", "linkLeave", "linkClick"].forEach((eventName) => this.instance.bind(eventName, (e) => this.trigger(eventName, e)));
    this.instance.bind("tooltipShow", (e) => this.onShowTooltip(e));
    this.instance.bind("tooltipHide", () => this.onHideTooltip());
    this.hostClasses.forEach((name) => {
      this.renderer.removeClass(this.instanceElement.nativeElement, name);
    });
  }
  /**
   * Exports the Sankey diagram as an image. The export operation is asynchronous and returns a promise.
   *
   * @param {ImageExportOptions} options - The parameters for the exported image.
   * @returns {Promise<string>} - A promise that will be resolved with a PNG image encoded as a Data URI.
   */
  exportImage(options = {}) {
    return exportImage(this.exportVisual(options), options);
  }
  /**
   * Exports the Sankey diagram as an SVG document. The export operation is asynchronous and returns a promise.
   *
   * @param options - The parameters for the exported file.
   * @returns - A promise that will be resolved with an SVG document that is encoded as a Data URI.
   */
  exportSVG(options = {}) {
    return exportSVG(this.exportVisual(options), options);
  }
  /**
   * Exports the visual of the Sankey component to a drawing group.
   *
   * @param options - The parameters for the export operation.
   * @returns - The root Group of the scene.
   */
  exportVisual(options = {}) {
    return this.instance.exportVisual(options);
  }
  init() {
    if (!this.canRender) {
      return;
    }
    const element = this.instanceElement.nativeElement;
    this.createInstance(element);
  }
  /**
   * Reloads the Sankey appearance settings from the current [Kendo UI Theme]({% slug themesandstyles %}).
   *
   * Call this method after loading a different theme stylesheet.
   */
  reloadTheme() {
    if (!this.instance) {
      return;
    }
    this.themeService.reset();
    this.instance.destroy();
    this.instance = null;
  }
  onShowTooltip(e) {
    this.run(() => {
      this.tooltipInstance.show(e);
    }, true, true);
  }
  onHideTooltip() {
    if (this.tooltipInstance.active) {
      this.tooltipInstance.hide();
      this.detectChanges();
    }
  }
  trigger(name, e) {
    const emitter = this.activeEmitter(name);
    if (emitter) {
      const args = this.instanceEventService.create(name, e, this);
      this.run(() => {
        emitter.emit(args);
      });
      return args.isDefaultPrevented && args.isDefaultPrevented();
    }
  }
  requiresHandlers(names) {
    for (let idx = 0; idx < names.length; idx++) {
      if (this.activeEmitter(names[idx])) {
        return true;
      }
    }
    return false;
  }
  refresh() {
    clearTimeout(this.redrawTimeout);
    if (!this.instance) {
      this.init();
      return;
    }
    this.updateOptions();
  }
  updateOptions() {
    this.instance.setOptions(this.instanceOptions);
  }
  get canRender() {
    return isDocumentAvailable() && Boolean(this.instanceElement);
  }
  get instanceOptions() {
    return __spreadProps(__spreadValues({}, this.options), {
      rtl: this.rtl,
      disableKeyboardNavigation: !this.navigable
    });
  }
  activeEmitter(name) {
    const emitter = this[name];
    if (emitter && emitter.emit && hasObservers(emitter)) {
      return emitter;
    }
  }
  refreshWait() {
    this.ngZone.runOutsideAngular(() => {
      this.optionsChange = combineLatest([this.configurationService.onChange$, this.themeService.onChange$]).pipe(tap((result) => {
        this.options = result[0];
        this.theme = result[1];
      }), auditTime(THROTTLE_MS)).subscribe(() => {
        this.refresh();
      });
    });
  }
  run(callback, inZone = true, detectChanges) {
    if (inZone) {
      if (detectChanges) {
        this.changeDetector.markForCheck();
      }
      this.ngZone.run(callback);
    } else {
      callback();
      if (detectChanges) {
        this.detectChanges();
      }
    }
  }
  detectChanges() {
    if (!this.destroyed) {
      this.changeDetector.detectChanges();
    }
  }
  intlChange() {
    if (this.instance) {
      this.refresh();
    }
  }
  rtlChange() {
    if (this.instance && this.rtl !== this.isRTL) {
      this.refresh();
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
  static ɵfac = function SankeyComponent_Factory(t) {
    return new (t || _SankeyComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(SankeyThemeService), ɵɵdirectiveInject(LocalizationService), ɵɵdirectiveInject(InstanceEventService2), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(IntlService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyComponent,
    selectors: [["kendo-sankey"]],
    viewQuery: function SankeyComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(SankeyTooltipPopupComponent, 7);
        ɵɵviewQuery(_c3, 7);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipInstance = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.instanceElement = _t.first);
      }
    },
    inputs: {
      data: "data",
      links: "links",
      nodes: "nodes",
      labels: "labels",
      title: "title",
      legend: "legend",
      tooltip: "tooltip",
      disableAutoLayout: "disableAutoLayout",
      navigable: "navigable",
      popupSettings: "popupSettings"
    },
    outputs: {
      nodeEnter: "nodeEnter",
      nodeLeave: "nodeLeave",
      nodeClick: "nodeClick",
      linkEnter: "linkEnter",
      linkLeave: "linkLeave",
      linkClick: "linkClick"
    },
    exportAs: ["kendoSankey"],
    standalone: true,
    features: [ɵɵProvidersFeature([ConfigurationService, LocalizationService, InstanceEventService2, SankeyTooltipTemplateService, {
      provide: L10N_PREFIX,
      useValue: "kendo.sankey"
    }]), ɵɵNgOnChangesFeature, ɵɵStandaloneFeature],
    decls: 5,
    vars: 3,
    consts: () => {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        const MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_CHARTS_FESM2022_PROGRESS_KENDO_ANGULAR_CHARTS_MJS_1 = goog.getMsg("({0} units)");
        i18n_1 = MSG__USERS_VISHNU_DESKTOP_PROJECTS_BH_IEP_NODE_MODULES__PROGRESS_KENDO_ANGULAR_CHARTS_FESM2022_PROGRESS_KENDO_ANGULAR_CHARTS_MJS_1;
      } else {
        i18n_1 = $localize`:kendo.sankey.tooltipUnitFormat|The format string to use when displaying node and link values in the tooltip:({0} units)`;
      }
      return [["instance", ""], ["kendoSankeyLocalizedMessages", "", "tooltipUnitFormat", i18n_1], [1, "k-chart-surface"], [3, "popupSettings", "tooltipUnitFormat"], ["kendoWatermarkOverlay", "", 4, "ngIf"], ["kendoWatermarkOverlay", ""]];
    },
    template: function SankeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementContainer(0, 1);
        ɵɵelement(1, "div", 2, 0)(3, "kendo-sankey-tooltip-popup", 3);
        ɵɵtemplate(4, SankeyComponent_div_4_Template, 1, 0, "div", 4);
      }
      if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("popupSettings", ctx.popupSettings)("tooltipUnitFormat", ctx.messageFor("tooltipUnitFormat"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showLicenseWatermark);
      }
    },
    dependencies: [LocalizedMessagesDirective, SankeyTooltipPopupComponent, NgIf, WatermarkOverlayComponent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      exportAs: "kendoSankey",
      providers: [ConfigurationService, LocalizationService, InstanceEventService2, SankeyTooltipTemplateService, {
        provide: L10N_PREFIX,
        useValue: "kendo.sankey"
      }],
      selector: "kendo-sankey",
      template: `
        <ng-container
            kendoSankeyLocalizedMessages
            i18n-tooltipUnitFormat="kendo.sankey.tooltipUnitFormat|The format string to use when displaying node and link values in the tooltip"
            tooltipUnitFormat="({0} units)"
        ></ng-container>
        <div #instance class="k-chart-surface"></div>
        <kendo-sankey-tooltip-popup
            [popupSettings]="popupSettings"
            [tooltipUnitFormat]="messageFor('tooltipUnitFormat')"
        >
        </kendo-sankey-tooltip-popup>
        <div kendoWatermarkOverlay *ngIf="showLicenseWatermark"></div>
    `,
      standalone: true,
      imports: [LocalizedMessagesDirective, SankeyTooltipPopupComponent, NgIf, WatermarkOverlayComponent]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ConfigurationService
    }, {
      type: SankeyThemeService
    }, {
      type: LocalizationService
    }, {
      type: InstanceEventService2
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }, {
      type: Renderer2
    }, {
      type: IntlService
    }];
  }, {
    data: [{
      type: Input
    }],
    links: [{
      type: Input
    }],
    nodes: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    title: [{
      type: Input
    }],
    legend: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    disableAutoLayout: [{
      type: Input
    }],
    navigable: [{
      type: Input
    }],
    popupSettings: [{
      type: Input
    }],
    nodeEnter: [{
      type: Output
    }],
    nodeLeave: [{
      type: Output
    }],
    nodeClick: [{
      type: Output
    }],
    linkEnter: [{
      type: Output
    }],
    linkLeave: [{
      type: Output
    }],
    linkClick: [{
      type: Output
    }],
    tooltipInstance: [{
      type: ViewChild,
      args: [SankeyTooltipPopupComponent, {
        static: true
      }]
    }],
    instanceElement: [{
      type: ViewChild,
      args: ["instance", {
        static: true
      }]
    }]
  });
})();
var SankeyFlatBindingDataBoundEvent = class {
  /**
   * The original data passed to the directive.
   */
  originalData;
  /**
   * The newly created [`SankeyData`]({% slug api_charts_sankeydata %}).
   *
   * Changes to this object will be passed to the Sankey diagram.
   */
  data;
  /**
   * @hidden
   */
  constructor(data) {
    this.data = data;
  }
};
var SankeyFlatBindingDirective = class _SankeyFlatBindingDirective {
  sankey;
  /**
   * The data which will be displayed by the Sankey diagram.
   */
  data;
  /**
   * Represents the fields which identify the nodes.
   */
  dimensionFields = [];
  /**
   * Represents the unique field which represents the link value between nodes.
   */
  valueField;
  /**
   * Fires when the flat data has been converted to `SankeyData`.
   *
   * To customize the created nodes and links, modify the data.
   */
  dataBound = new EventEmitter();
  constructor(sankey) {
    this.sankey = sankey;
  }
  ngOnChanges(changes) {
    if (!isChanged("data", changes, false)) {
      return;
    }
    if (this.dimensionFields?.length === 0) {
      throw new Error("kendoSankeyFlatBinding: dimensionFields is required");
    }
    if (!this.valueField) {
      throw new Error("kendoSankeyFlatBinding: valueField is required");
    }
    const dimensions = this.dimensionFields.map((field) => ({
      value: getter(field)
    }));
    const measure = {
      value: getter(this.valueField)
    };
    const data = createSankeyData(this.data, dimensions, measure);
    this.dataBound.emit(new SankeyFlatBindingDataBoundEvent(data));
    this.sankey.notifyChanges({
      data
    });
  }
  static ɵfac = function SankeyFlatBindingDirective_Factory(t) {
    return new (t || _SankeyFlatBindingDirective)(ɵɵdirectiveInject(SankeyComponent));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SankeyFlatBindingDirective,
    selectors: [["", "kendoSankeyFlatBinding", ""]],
    inputs: {
      data: [InputFlags.None, "kendoSankeyFlatBinding", "data"],
      dimensionFields: "dimensionFields",
      valueField: "valueField"
    },
    outputs: {
      dataBound: "dataBound"
    },
    standalone: true,
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyFlatBindingDirective, [{
    type: Directive,
    args: [{
      selector: "[kendoSankeyFlatBinding]",
      standalone: true
    }]
  }], function() {
    return [{
      type: SankeyComponent
    }];
  }, {
    data: [{
      type: Input,
      args: ["kendoSankeyFlatBinding"]
    }],
    dimensionFields: [{
      type: Input
    }],
    valueField: [{
      type: Input
    }],
    dataBound: [{
      type: Output
    }]
  });
})();
var SankeyLabelsComponent = class _SankeyLabelsComponent extends SettingsComponent {
  configurationService;
  visible;
  font;
  color;
  align;
  position;
  padding;
  margin;
  border;
  offset;
  stroke;
  constructor(configurationService) {
    super("labels", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SankeyLabelsComponent_Factory(t) {
    return new (t || _SankeyLabelsComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyLabelsComponent,
    selectors: [["kendo-sankey-labels"]],
    inputs: {
      visible: "visible",
      font: "font",
      color: "color",
      align: "align",
      position: "position",
      padding: "padding",
      margin: "margin",
      border: "border",
      offset: "offset",
      stroke: "stroke"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyLabelsComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyLabelsComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-sankey-labels",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    visible: [{
      type: Input
    }],
    font: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    stroke: [{
      type: Input
    }]
  });
})();
var SankeyLegendComponent = class _SankeyLegendComponent extends SettingsComponent {
  configurationService;
  /**
   * The legend is horizontally aligned when [`legend.position`]({% slug api_charts_sankeylegend %}#toc-position) is set to `"top"` or `"bottom"`.
   * The legend is vertically aligned when [`legend.position`]({% slug api_charts_sankeylegend %}#toc-position) is set to `"left"` or `"right"`.
   * @default 'center'
   */
  align;
  /**
   * The background color of the legend. Accepts a valid CSS color string, including hex and rgb.
   * @default 'white'
   */
  background;
  border;
  height;
  labels;
  /**
   * The margin of the Sankey legend. A numeric value sets all paddings.
   * @default 5
   */
  margin;
  /**
   * The X offset of the Sankey legend. The offset is relative to the default position of the legend.
   * For example, a value of `20` moves the legend 20 pixels to the right of its initial position.
   * Negative values move the legend to the left of its current position.
   * @default 0
   */
  offsetX;
  /**
   * The Y offset of the Sankey legend. The offset is relative to the current position of the legend.
   * For example, a value of `20` moves the legend 20 pixels down from its initial position.
   * Negative values move the legend upwards from its current position.
   * @default 0
   */
  offsetY;
  /**
   * The orientation of the legend items.
   * @default 'vertical'
   */
  orientation;
  /**
   * The padding of the Sankey legend. A numeric value sets all paddings.
   * @default 5
   */
  padding;
  /**
   * The position of the Sankey legend.
   * Setting the legend position to `custom` allows you to position the legend using the [`legend.offsetX`](slug:api_charts_sankeylegend#toc-offsetx) and [`legend.offsetY`](slug:api_charts_sankeylegend#toc-offsety) options.
   * @default 'right'
   */
  position;
  /**
   * If set to `true`, the legend items are reversed.
   * @default false
   */
  reverse;
  /**
   * If set to `true`, the Sankey displays the legend. By default, the Sankey legend is visible.
   * @default true
   */
  visible;
  width;
  markers;
  spacing;
  title;
  constructor(configurationService) {
    super("legend", configurationService);
    this.configurationService = configurationService;
    this.markAsVisible();
  }
  static ɵfac = function SankeyLegendComponent_Factory(t) {
    return new (t || _SankeyLegendComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyLegendComponent,
    selectors: [["kendo-sankey-legend"]],
    inputs: {
      align: "align",
      background: "background",
      border: "border",
      height: "height",
      labels: "labels",
      margin: "margin",
      offsetX: "offsetX",
      offsetY: "offsetY",
      orientation: "orientation",
      padding: "padding",
      position: "position",
      reverse: "reverse",
      visible: "visible",
      width: "width",
      markers: "markers",
      spacing: "spacing",
      title: "title"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyLegendComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyLegendComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-sankey-legend",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: Input
    }],
    background: [{
      type: Input
    }],
    border: [{
      type: Input
    }],
    height: [{
      type: Input
    }],
    labels: [{
      type: Input
    }],
    margin: [{
      type: Input
    }],
    offsetX: [{
      type: Input
    }],
    offsetY: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    reverse: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    markers: [{
      type: Input
    }],
    spacing: [{
      type: Input
    }],
    title: [{
      type: Input
    }]
  });
})();
var SankeyLinksComponent = class _SankeyLinksComponent extends SettingsComponent {
  configurationService;
  colorType;
  color;
  opacity;
  highlight;
  focusHighlight;
  constructor(configurationService) {
    super("links", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SankeyLinksComponent_Factory(t) {
    return new (t || _SankeyLinksComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyLinksComponent,
    selectors: [["kendo-sankey-links"]],
    inputs: {
      colorType: "colorType",
      color: "color",
      opacity: "opacity",
      highlight: "highlight",
      focusHighlight: "focusHighlight"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyLinksComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyLinksComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-sankey-links",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    colorType: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    highlight: [{
      type: Input
    }],
    focusHighlight: [{
      type: Input
    }]
  });
})();
var SankeyCustomMessagesComponent = class _SankeyCustomMessagesComponent extends Messages {
  service;
  constructor(service) {
    super();
    this.service = service;
  }
  get override() {
    return true;
  }
  static ɵfac = function SankeyCustomMessagesComponent_Factory(t) {
    return new (t || _SankeyCustomMessagesComponent)(ɵɵdirectiveInject(LocalizationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyCustomMessagesComponent,
    selectors: [["kendo-sankey-messages"]],
    standalone: true,
    features: [ɵɵProvidersFeature([{
      provide: Messages,
      useExisting: forwardRef(() => _SankeyCustomMessagesComponent)
    }]), ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyCustomMessagesComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyCustomMessagesComponent, [{
    type: Component,
    args: [{
      providers: [{
        provide: Messages,
        useExisting: forwardRef(() => SankeyCustomMessagesComponent)
      }],
      selector: "kendo-sankey-messages",
      template: ``,
      standalone: true
    }]
  }], function() {
    return [{
      type: LocalizationService
    }];
  }, null);
})();
var SankeyNodesComponent = class _SankeyNodesComponent extends SettingsComponent {
  configurationService;
  /**
   * The color type of the link.
   * The supported values are:
   * * `static`&mdash;The link color is static. The color is determined by the link's `color` option.
   * * `source`&mdash;The link color is the same as the source node color.
   * * `target`&mdash;The link color is the same as the target node color.
   *
   * @default 'static'
   */
  colorType;
  color;
  opacity;
  offset;
  padding;
  width;
  align;
  focusHighlight;
  constructor(configurationService) {
    super("nodes", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SankeyNodesComponent_Factory(t) {
    return new (t || _SankeyNodesComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyNodesComponent,
    selectors: [["kendo-sankey-nodes"]],
    inputs: {
      colorType: "colorType",
      color: "color",
      opacity: "opacity",
      offset: "offset",
      padding: "padding",
      width: "width",
      align: "align",
      focusHighlight: "focusHighlight"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyNodesComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyNodesComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-sankey-nodes",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    colorType: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    opacity: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    focusHighlight: [{
      type: Input
    }]
  });
})();
var SankeyTitleComponent = class _SankeyTitleComponent extends SettingsComponent {
  configurationService;
  /**
   * The alignment of the title.
   * The alignment options for text include `center` for middle alignment, `left` for left alignment, and `right` for right alignment, allowing for flexible positioning of the title.
   *
   * @default 'center'
   */
  align;
  /**
   * The background color of the title. Accepts a valid CSS color string, including HEX and RGB.
   *
   * @default 'white'
   */
  background;
  border;
  color;
  /**
   * The font of the title.
   *
   * @default '16px sans-serif'
   */
  font;
  margin;
  /**
   * The padding of the title. A numeric value sets all paddings.
   *
   * @default 5
   */
  padding;
  /**
   * The position of the title.
   * The positioning options for titles include `bottom` for positioning at the bottom and `top` for positioning at the top, providing flexibility in title placement.
   *
   * @default 'top'
   */
  position;
  text;
  description;
  /**
   * If set to `true`, the Sankey displays the title.
   *
   * @default true
   */
  visible;
  constructor(configurationService) {
    super("title", configurationService);
    this.configurationService = configurationService;
  }
  static ɵfac = function SankeyTitleComponent_Factory(t) {
    return new (t || _SankeyTitleComponent)(ɵɵdirectiveInject(ConfigurationService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyTitleComponent,
    selectors: [["kendo-sankey-title"]],
    inputs: {
      align: "align",
      background: "background",
      border: "border",
      color: "color",
      font: "font",
      margin: "margin",
      padding: "padding",
      position: "position",
      text: "text",
      description: "description",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyTitleComponent_Template(rf, ctx) {
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyTitleComponent, [{
    type: Component,
    args: [{
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "kendo-sankey-title",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }];
  }, {
    align: [{
      type: Input
    }],
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
    margin: [{
      type: Input
    }],
    padding: [{
      type: Input
    }],
    position: [{
      type: Input
    }],
    text: [{
      type: Input
    }],
    description: [{
      type: Input
    }],
    visible: [{
      type: Input
    }]
  });
})();
var SankeyTooltipComponent = class _SankeyTooltipComponent extends SettingsComponent {
  configurationService;
  templateService;
  /**
   * Indicates whether the tooltip will follow the mouse pointer.
   *
   * @default false
   */
  followPointer;
  /**
   * Represents the delay of the tooltip displaying.
   * The delay is measured in milliseconds.
   *
   * @default 100
   */
  delay;
  /**
   * The distance between the tooltip and the mouse pointer in pixels.
   * @default 12
   */
  offset;
  /**
   * If set to `true`, the Sankey displays the link and node tooltips.
   * @default false
   */
  visible;
  linkTooltipTemplate;
  nodeTooltipTemplate;
  constructor(configurationService, templateService) {
    super("tooltip", configurationService);
    this.configurationService = configurationService;
    this.templateService = templateService;
    this.markAsVisible();
  }
  ngAfterContentChecked() {
    this.templateService.linkTemplate = this.linkTooltipTemplate?.templateRef;
    this.templateService.nodeTemplate = this.nodeTooltipTemplate?.templateRef;
  }
  static ɵfac = function SankeyTooltipComponent_Factory(t) {
    return new (t || _SankeyTooltipComponent)(ɵɵdirectiveInject(ConfigurationService), ɵɵdirectiveInject(SankeyTooltipTemplateService));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SankeyTooltipComponent,
    selectors: [["kendo-sankey-tooltip"]],
    contentQueries: function SankeyTooltipComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, SankeyLinkTooltipTemplateDirective, 5);
        ɵɵcontentQuery(dirIndex, SankeyNodeTooltipTemplateDirective, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.linkTooltipTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nodeTooltipTemplate = _t.first);
      }
    },
    inputs: {
      followPointer: "followPointer",
      delay: "delay",
      offset: "offset",
      visible: "visible"
    },
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 0,
    vars: 0,
    template: function SankeyTooltipComponent_Template(rf, ctx) {
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyTooltipComponent, [{
    type: Component,
    args: [{
      selector: "kendo-sankey-tooltip",
      template: "",
      standalone: true
    }]
  }], function() {
    return [{
      type: ConfigurationService
    }, {
      type: SankeyTooltipTemplateService
    }];
  }, {
    followPointer: [{
      type: Input
    }],
    delay: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    linkTooltipTemplate: [{
      type: ContentChild,
      args: [SankeyLinkTooltipTemplateDirective, {
        static: false
      }]
    }],
    nodeTooltipTemplate: [{
      type: ContentChild,
      args: [SankeyNodeTooltipTemplateDirective, {
        static: false
      }]
    }]
  });
})();
var KENDO_CHART = [ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent];
var KENDO_SPARKLINE = [SparklineComponent];
var KENDO_STOCKCHART = [StockChartComponent, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent];
var KENDO_SANKEY = [SankeyComponent, SankeyTooltipPopupComponent, SankeyLinkTooltipTemplateDirective, SankeyNodeTooltipTemplateDirective, SankeyCustomMessagesComponent, LocalizedMessagesDirective, SankeyTitleComponent, SankeyLegendComponent, SankeyTooltipComponent, SankeyLinksComponent, SankeyNodesComponent, SankeyLabelsComponent, SankeyFlatBindingDirective];
var KENDO_CHARTS = [...KENDO_CHART, ...KENDO_SPARKLINE, ...KENDO_STOCKCHART, ...KENDO_SANKEY];
var ChartModule = class _ChartModule {
  static ɵfac = function ChartModule_Factory(t) {
    return new (t || _ChartModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ChartModule,
    imports: [ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent],
    exports: [ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService, PopupService, ThemeService],
    imports: [ChartComponent, ChartBreadcrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_CHART],
      exports: [...KENDO_CHART],
      providers: [IconsService, ResizeBatchService, PopupService, ThemeService]
    }]
  }], null, null);
})();
var StockChartModule = class _StockChartModule {
  static ɵfac = function StockChartModule_Factory(t) {
    return new (t || _StockChartModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _StockChartModule,
    imports: [StockChartComponent, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent],
    exports: [StockChartComponent, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService, IconsService, PopupService, ResizeBatchService],
    imports: [StockChartComponent, ChartBreadcrumbComponent, ChartComponent, ChartBreadcrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StockChartModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_STOCKCHART, ...KENDO_CHART],
      exports: [...KENDO_STOCKCHART, ...KENDO_CHART],
      providers: [ThemeService, IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var SparklineModule = class _SparklineModule {
  static ɵfac = function SparklineModule_Factory(t) {
    return new (t || _SparklineModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SparklineModule,
    imports: [SparklineComponent, ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent],
    exports: [SparklineComponent, ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [ThemeService, IconsService, PopupService, ResizeBatchService],
    imports: [KENDO_SPARKLINE, ChartComponent, ChartBreadcrumbComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SparklineModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SPARKLINE, ...KENDO_CHART],
      exports: [...KENDO_SPARKLINE, ...KENDO_CHART],
      providers: [ThemeService, IconsService, PopupService, ResizeBatchService]
    }]
  }], null, null);
})();
var ChartsModule = class _ChartsModule {
  static ɵfac = function ChartsModule_Factory(t) {
    return new (t || _ChartsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ChartsModule,
    imports: [ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, SparklineComponent, StockChartComponent, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, SankeyComponent, SankeyTooltipPopupComponent, SankeyLinkTooltipTemplateDirective, SankeyNodeTooltipTemplateDirective, SankeyCustomMessagesComponent, LocalizedMessagesDirective, SankeyTitleComponent, SankeyLegendComponent, SankeyTooltipComponent, SankeyLinksComponent, SankeyNodesComponent, SankeyLabelsComponent, SankeyFlatBindingDirective],
    exports: [ChartComponent, DonutCenterTemplateDirective, NoDataTemplateDirective, XAxisComponent, XAxisCrosshairComponent, XAxisCrosshairTooltipComponent, XAxisItemComponent, XAxisLabelsComponent, XAxisNotesComponent, XAxisNotesIconComponent, XAxisNotesLabelComponent, XAxisTitleComponent, YAxisComponent, YAxisCrosshairComponent, YAxisCrosshairTooltipComponent, YAxisItemComponent, YAxisLabelsComponent, YAxisNotesComponent, YAxisNotesIconComponent, YAxisNotesLabelComponent, YAxisTitleComponent, ZoomableComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, ChartCustomMessagesComponent, LocalizedChartMessagesDirective, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, SparklineComponent, StockChartComponent, NavigatorComponent, NavigatorCategoryAxisComponent, NavigatorCategoryAxisCrosshairComponent, NavigatorCategoryAxisCrosshairTooltipComponent, NavigatorCategoryAxisLabelsComponent, NavigatorCategoryAxisNotesComponent, NavigatorCategoryAxisNotesIconComponent, NavigatorCategoryAxisNotesLabelComponent, NavigatorCategoryAxisSelectComponent, NavigatorCategoryAxisTitleComponent, NavigatorHintComponent, NavigatorPaneComponent, NavigatorPaneTitleComponent, NavigatorSelectComponent, NavigatorSeriesComponent, NavigatorSeriesItemComponent, NavigatorSeriesErrorBarsComponent, NavigatorSeriesExtremesComponent, NavigatorSeriesHighlightComponent, NavigatorSeriesLabelsComponent, NavigatorSeriesLabelsFromComponent, NavigatorSeriesLabelsToComponent, NavigatorSeriesMarkersComponent, NavigatorSeriesNotesComponent, NavigatorSeriesNotesIconComponent, NavigatorSeriesNotesLabelComponent, NavigatorSeriesOutliersComponent, NavigatorSeriesTooltipComponent, TooltipPopupComponent, SeriesTooltipTemplateDirective, SharedTooltipTemplateDirective, CrosshairTooltipsContainerComponent, CrosshairTooltipComponent, AxisDefaultsComponent, AxisDefaultsCrosshairComponent, AxisDefaultsCrosshairTooltipComponent, AxisDefaultsLabelsComponent, AxisDefaultsTitleComponent, CategoryAxisComponent, CategoryAxisCrosshairComponent, CategoryAxisCrosshairTooltipComponent, CategoryAxisItemComponent, CategoryAxisLabelsComponent, CategoryAxisRangeLabelsComponent, CategoryAxisNotesComponent, CategoryAxisNotesIconComponent, CategoryAxisNotesLabelComponent, CategoryAxisSelectComponent, CategoryAxisTitleComponent, ChartAreaComponent, ChartBreadcrumbComponent, LegendComponent, LegendInactiveItemsComponent, LegendItemComponent, PaneComponent, PaneDefaultsComponent, PaneDefaultsTitleComponent, PanesComponent, PanesTitleComponent, PlotAreaComponent, SeriesComponent, SeriesDefaultsComponent, SeriesDefaultsLabelsComponent, SeriesDefaultsLabelsFromComponent, SeriesDefaultsLabelsToComponent, SeriesDefaultsNotesComponent, SeriesDefaultsNotesIconComponent, SeriesDefaultsNotesLabelComponent, SeriesDefaultsTooltipComponent, SeriesDrilldownTemplateDirective, SeriesErrorBarsComponent, SeriesExtremesComponent, SeriesHighlightComponent, SeriesItemComponent, SeriesLabelsComponent, SeriesLabelsFromComponent, SeriesLabelsToComponent, SeriesMarkersComponent, SeriesNotesComponent, SeriesNotesIconComponent, SeriesNotesLabelComponent, SeriesOutliersComponent, SeriesTooltipComponent, SeriesTrendlineComponent, SeriesTrendlineForecastComponent, SubtitleComponent, TitleComponent, TooltipComponent, ValueAxisComponent, ValueAxisCrosshairComponent, ValueAxisCrosshairTooltipComponent, ValueAxisItemComponent, ValueAxisLabelsComponent, ValueAxisNotesComponent, ValueAxisNotesIconComponent, ValueAxisNotesLabelComponent, ValueAxisTitleComponent, SankeyComponent, SankeyTooltipPopupComponent, SankeyLinkTooltipTemplateDirective, SankeyNodeTooltipTemplateDirective, SankeyCustomMessagesComponent, LocalizedMessagesDirective, SankeyTitleComponent, SankeyLegendComponent, SankeyTooltipComponent, SankeyLinksComponent, SankeyNodesComponent, SankeyLabelsComponent, SankeyFlatBindingDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService, PopupService, ThemeService],
    imports: [ChartComponent, ChartBreadcrumbComponent, SparklineComponent, StockChartComponent, ChartBreadcrumbComponent, SankeyComponent, SankeyTooltipPopupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChartsModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_CHARTS],
      exports: [...KENDO_CHARTS],
      providers: [IconsService, ResizeBatchService, PopupService, ThemeService]
    }]
  }], null, null);
})();
var SankeyModule = class _SankeyModule {
  static ɵfac = function SankeyModule_Factory(t) {
    return new (t || _SankeyModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SankeyModule,
    imports: [SankeyComponent, SankeyTooltipPopupComponent, SankeyLinkTooltipTemplateDirective, SankeyNodeTooltipTemplateDirective, SankeyCustomMessagesComponent, LocalizedMessagesDirective, SankeyTitleComponent, SankeyLegendComponent, SankeyTooltipComponent, SankeyLinksComponent, SankeyNodesComponent, SankeyLabelsComponent, SankeyFlatBindingDirective],
    exports: [SankeyComponent, SankeyTooltipPopupComponent, SankeyLinkTooltipTemplateDirective, SankeyNodeTooltipTemplateDirective, SankeyCustomMessagesComponent, LocalizedMessagesDirective, SankeyTitleComponent, SankeyLegendComponent, SankeyTooltipComponent, SankeyLinksComponent, SankeyNodesComponent, SankeyLabelsComponent, SankeyFlatBindingDirective]
  });
  static ɵinj = ɵɵdefineInjector({
    providers: [IconsService, ResizeBatchService, PopupService, ThemeService],
    imports: [SankeyComponent, SankeyTooltipPopupComponent]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SankeyModule, [{
    type: NgModule,
    args: [{
      imports: [...KENDO_SANKEY],
      exports: [...KENDO_SANKEY],
      providers: [IconsService, ResizeBatchService, PopupService, ThemeService]
    }]
  }], null, null);
})();
export {
  AxisDefaultsComponent,
  AxisDefaultsCrosshairComponent,
  AxisDefaultsCrosshairTooltipComponent,
  AxisDefaultsLabelsComponent,
  AxisDefaultsTitleComponent,
  AxisLabelClickEvent,
  CategoryAxisComponent,
  CategoryAxisCrosshairComponent,
  CategoryAxisCrosshairTooltipComponent,
  CategoryAxisItemComponent,
  CategoryAxisLabelsComponent,
  CategoryAxisNotesComponent,
  CategoryAxisNotesIconComponent,
  CategoryAxisNotesLabelComponent,
  CategoryAxisRangeLabelsComponent,
  CategoryAxisSelectComponent,
  CategoryAxisTitleComponent,
  ChartAreaComponent,
  ChartBreadcrumbComponent,
  ChartComponent,
  ChartCustomMessagesComponent,
  ChartModule,
  ChartsModule,
  CollectionService,
  ConfigurationService,
  CrosshairTooltipComponent,
  CrosshairTooltipsContainerComponent,
  DonutCenterTemplateDirective,
  DragEndEvent,
  DragEvent,
  DragStartEvent,
  DrilldownEvent,
  InstanceEventService2 as InstanceEventService,
  KENDO_CHART,
  KENDO_CHARTS,
  KENDO_SANKEY,
  KENDO_SPARKLINE,
  KENDO_STOCKCHART,
  LegendComponent,
  LegendInactiveItemsComponent,
  LegendItemClickEvent,
  LegendItemComponent,
  LegendItemHoverEvent,
  LegendItemLeaveEvent,
  LocalizedChartMessagesDirective,
  LocalizedMessagesDirective,
  NavigatorCategoryAxisComponent,
  NavigatorCategoryAxisCrosshairComponent,
  NavigatorCategoryAxisCrosshairTooltipComponent,
  NavigatorCategoryAxisLabelsComponent,
  NavigatorCategoryAxisNotesComponent,
  NavigatorCategoryAxisNotesIconComponent,
  NavigatorCategoryAxisNotesLabelComponent,
  NavigatorCategoryAxisSelectComponent,
  NavigatorCategoryAxisTitleComponent,
  NavigatorComponent,
  NavigatorFilterEvent,
  NavigatorHintComponent,
  NavigatorPaneComponent,
  NavigatorPaneTitleComponent,
  NavigatorSelectComponent,
  NavigatorSeriesComponent,
  NavigatorSeriesErrorBarsComponent,
  NavigatorSeriesExtremesComponent,
  NavigatorSeriesHighlightComponent,
  NavigatorSeriesItemComponent,
  NavigatorSeriesLabelsComponent,
  NavigatorSeriesLabelsFromComponent,
  NavigatorSeriesLabelsToComponent,
  NavigatorSeriesMarkersComponent,
  NavigatorSeriesNotesComponent,
  NavigatorSeriesNotesIconComponent,
  NavigatorSeriesNotesLabelComponent,
  NavigatorSeriesOutliersComponent,
  NavigatorSeriesTooltipComponent,
  NoDataTemplateDirective,
  NoteClickEvent,
  NoteHoverEvent,
  PaneComponent,
  PaneDefaultsComponent,
  PaneDefaultsTitleComponent,
  PaneRenderEvent,
  PanesComponent,
  PanesTitleComponent,
  PlotAreaClickEvent,
  PlotAreaComponent,
  PlotAreaHoverEvent,
  RenderEvent,
  SankeyBaseEvent,
  SankeyComponent,
  SankeyCustomMessagesComponent,
  SankeyFlatBindingDataBoundEvent,
  SankeyFlatBindingDirective,
  SankeyLabelsComponent,
  SankeyLegendComponent,
  SankeyLinkEvent,
  SankeyLinkTooltipTemplateDirective,
  SankeyLinksComponent,
  SankeyModule,
  SankeyNodeEvent,
  SankeyNodeTooltipTemplateDirective,
  SankeyNodesComponent,
  SankeyTitleComponent,
  SankeyTooltipComponent,
  SankeyTooltipPopupComponent,
  SelectEndEvent,
  SelectEvent,
  SelectStartEvent,
  SeriesClickEvent,
  SeriesComponent,
  SeriesDefaultsComponent,
  SeriesDefaultsLabelsComponent,
  SeriesDefaultsLabelsFromComponent,
  SeriesDefaultsLabelsToComponent,
  SeriesDefaultsNotesComponent,
  SeriesDefaultsNotesIconComponent,
  SeriesDefaultsNotesLabelComponent,
  SeriesDefaultsTooltipComponent,
  SeriesDrilldownTemplateDirective,
  SeriesErrorBarsComponent,
  SeriesExtremesComponent,
  SeriesHighlightComponent,
  SeriesHoverEvent,
  SeriesItemComponent,
  SeriesLabelsComponent,
  SeriesLabelsFromComponent,
  SeriesLabelsToComponent,
  SeriesMarkersComponent,
  SeriesNotesComponent,
  SeriesNotesIconComponent,
  SeriesNotesLabelComponent,
  SeriesOutliersComponent,
  SeriesTooltipComponent,
  SeriesTooltipTemplateDirective,
  SeriesTrendlineComponent,
  SeriesTrendlineForecastComponent,
  SharedTooltipTemplateDirective,
  SparklineComponent,
  SparklineModule,
  StockChartComponent,
  StockChartModule,
  SubtitleComponent,
  ThemeService,
  TitleComponent,
  TooltipComponent,
  TooltipPopupComponent,
  TooltipTemplateService,
  ValueAxisComponent,
  ValueAxisCrosshairComponent,
  ValueAxisCrosshairTooltipComponent,
  ValueAxisItemComponent,
  ValueAxisLabelsComponent,
  ValueAxisNotesComponent,
  ValueAxisNotesIconComponent,
  ValueAxisNotesLabelComponent,
  ValueAxisTitleComponent,
  WeekStartDay,
  XAxisComponent,
  XAxisCrosshairComponent,
  XAxisCrosshairTooltipComponent,
  XAxisItemComponent,
  XAxisLabelsComponent,
  XAxisNotesComponent,
  XAxisNotesIconComponent,
  XAxisNotesLabelComponent,
  XAxisTitleComponent,
  YAxisComponent,
  YAxisCrosshairComponent,
  YAxisCrosshairTooltipComponent,
  YAxisItemComponent,
  YAxisLabelsComponent,
  YAxisNotesComponent,
  YAxisNotesIconComponent,
  YAxisNotesLabelComponent,
  YAxisTitleComponent,
  ZoomEndEvent,
  ZoomEvent,
  ZoomStartEvent,
  ZoomableComponent
};
//# sourceMappingURL=@progress_kendo-angular-charts.js.map
