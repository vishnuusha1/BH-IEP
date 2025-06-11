import {
  __assign,
  __makeTemplateObject,
  __spreadArray
} from "./chunk-QEJIEICB.js";

// node_modules/@progress/kendo-data-query/dist/es/utils.js
var isPresent = function(value2) {
  return value2 !== null && value2 !== void 0;
};
var isBlank = function(value2) {
  return value2 === null || value2 === void 0;
};
var isArray = function(value2) {
  return Array.isArray(value2);
};
var isFunction = function(value2) {
  return typeof value2 === "function";
};
var isString = function(value2) {
  return typeof value2 === "string";
};
var isNullOrEmptyString = function(value2) {
  return isBlank(value2) || value2.trim().length === 0;
};
var isNotNullOrEmptyString = function(value2) {
  return !isNullOrEmptyString(value2);
};
var isNumeric = function(value2) {
  return !isNaN(value2 - parseFloat(value2));
};
var isDate = function(value2) {
  return value2 && value2.getTime;
};

// node_modules/@progress/kendo-data-query/dist/es/filtering/filter-descriptor.interface.js
var isCompositeFilterDescriptor = function(source) {
  return isPresent(source.filters);
};

// node_modules/@progress/kendo-data-query/dist/es/funcs.js
var ifElse = function(predicate, right, left) {
  return function(value2) {
    return predicate(value2) ? right(value2) : left(value2);
  };
};
var compose = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  return function(data) {
    return args.reduceRight(function(acc, curr) {
      return curr(acc);
    }, data);
  };
};
var constant = function(x) {
  return function() {
    return x;
  };
};
var identity = function(x) {
  return x;
};

// node_modules/@progress/kendo-data-query/dist/es/filter-serialization.common.js
var wrapIf = function(predicate) {
  return function(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    return predicate() ? "".concat(str[0]).concat(args[0]).concat(str[1]) : args[0];
  };
};
var toUTC = function(date) {
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};
var quote = function(_a) {
  var field = _a.field, value2 = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
  return {
    value: "'".concat(value2.replace(/'/g, "''"), "'"),
    field,
    ignoreCase,
    operator
  };
};
var encodeValue = function(_a) {
  var field = _a.field, value2 = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
  return {
    value: "".concat(encodeURIComponent(value2)),
    field,
    ignoreCase,
    operator
  };
};
var toLower = function(_a) {
  var field = _a.field, value2 = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
  return {
    field: wrapIf(function() {
      return ignoreCase;
    })(templateObject_1 || (templateObject_1 = __makeTemplateObject(["tolower(", ")"], ["tolower(", ")"])), field),
    value: value2,
    ignoreCase,
    operator
  };
};
var normalizeField = function(_a) {
  var field = _a.field, value2 = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
  return {
    value: value2,
    field: field.replace(/\./g, "/"),
    ignoreCase,
    operator
  };
};
var isStringValue = function(x) {
  return isString(x.value);
};
var isDateValue = function(x) {
  return isDate(x.value);
};
var serializeFilters = function(map2, join3) {
  return function(filter2) {
    var brackets = wrapIf(function() {
      return filter2.filters.length > 1;
    });
    return brackets(templateObject_2 || (templateObject_2 = __makeTemplateObject(["(", ")"], ["(", ")"])), filter2.filters.map(map2).join(join3(filter2)));
  };
};
var templateObject_1;
var templateObject_2;

// node_modules/@progress/kendo-data-query/dist/es/filtering/filter.operators.js
var operatorMap = function(key) {
  return {
    "!=": "neq",
    "<": "lt",
    "<=": "lte",
    "==": "eq",
    ">": "gt",
    ">=": "gte",
    equal: "eq",
    equals: "eq",
    equalto: "eq",
    ge: "gte",
    greater: "gt",
    greaterthan: "gt",
    greaterthanequal: "gte",
    isempty: "isempty",
    isequalto: "eq",
    isgreaterthan: "gt",
    isgreaterthanorequalto: "gte",
    islessthan: "lt",
    islessthanorequalto: "lte",
    isnotempty: "isnotempty",
    isnotequalto: "neq",
    isnull: "isnull",
    le: "lte",
    less: "lt",
    lessthan: "lt",
    lessthanequal: "lte",
    ne: "neq",
    notequal: "neq",
    notequals: "neq",
    notequalto: "neq",
    notsubstringof: "doesnotcontain"
  }[key.toLowerCase()] || key;
};
var normalizeOperator = function(descriptor) {
  if (descriptor.filters) {
    descriptor.filters = descriptor.filters.map(function(filter2) {
      var result = Object.assign({}, filter2);
      if (!isCompositeFilterDescriptor(filter2) && isString(filter2.operator)) {
        result.operator = operatorMap(filter2.operator);
      }
      if (isCompositeFilterDescriptor(filter2)) {
        normalizeOperator(result);
      }
      return result;
    });
  }
};
var normalizeDescriptor = function(descriptor) {
  if (!isCompositeFilterDescriptor(descriptor)) {
    return {
      filters: isArray(descriptor) ? descriptor : [descriptor],
      logic: "and"
    };
  }
  return Object.assign({}, descriptor);
};
var normalizeFilters = function(descriptor) {
  if (isPresent(descriptor)) {
    descriptor = normalizeDescriptor(descriptor);
    normalizeOperator(descriptor);
  }
  return descriptor;
};

// node_modules/@progress/kendo-data-query/dist/es/odata-filtering.operators.js
var formatDate = function(_a) {
  var utcDates = _a.utcDates;
  return function(_a2) {
    var field = _a2.field, value2 = _a2.value, ignoreCase = _a2.ignoreCase, operator = _a2.operator;
    return {
      value: (!utcDates ? toUTC(value2) : value2).toISOString(),
      field,
      ignoreCase,
      operator
    };
  };
};
var fnFormatter = function(_a) {
  var operator = _a.operator;
  return function(_a2) {
    var field = _a2.field, value2 = _a2.value;
    return "".concat(operator, "(").concat(field, ",").concat(value2, ")");
  };
};
var singleOperatorFormatter = function(_a) {
  var operator = _a.operator;
  return function(_a2) {
    var field = _a2.field, value2 = _a2.value;
    return "".concat(field, " ").concat(operator, " ").concat(value2);
  };
};
var stringFormat = function(formatter) {
  return compose(formatter, encodeValue, quote, toLower, normalizeField);
};
var stringFnOperator = function(settings) {
  return stringFormat(fnFormatter(settings));
};
var stringOperator = function(settings) {
  return stringFormat(singleOperatorFormatter(settings));
};
var numericOperator = function(settings) {
  return compose(singleOperatorFormatter(settings), normalizeField);
};
var dateOperator = function(settings) {
  return compose(singleOperatorFormatter(settings), normalizeField, formatDate(settings));
};
var ifDate = function(settings) {
  return ifElse(isDateValue, dateOperator(settings), numericOperator(settings));
};
var typedOperator = function(settings) {
  return ifElse(isStringValue, stringOperator(settings), ifDate(settings));
};
var appendEqual = function(str) {
  return "".concat(str, " eq -1");
};
var nonValueExpression = function(formatter) {
  return compose(formatter, normalizeField);
};
var filterOperators = function(operator, settings) {
  return {
    contains: stringFnOperator(__assign(__assign({}, settings), { operator: "contains" })),
    doesnotcontain: compose(appendEqual, stringFnOperator(__assign(__assign({}, settings), { operator: "indexof" }))),
    endswith: stringFnOperator(__assign(__assign({}, settings), { operator: "endswith" })),
    eq: typedOperator(__assign(__assign({}, settings), { operator: "eq" })),
    gt: typedOperator(__assign(__assign({}, settings), { operator: "gt" })),
    gte: typedOperator(__assign(__assign({}, settings), { operator: "ge" })),
    isempty: nonValueExpression(function(_a) {
      var field = _a.field;
      return "".concat(field, " eq ''");
    }),
    isnotempty: nonValueExpression(function(_a) {
      var field = _a.field;
      return "".concat(field, " ne ''");
    }),
    isnotnull: nonValueExpression(function(_a) {
      var field = _a.field;
      return "".concat(field, " ne null");
    }),
    isnull: nonValueExpression(function(_a) {
      var field = _a.field;
      return "".concat(field, " eq null");
    }),
    lt: typedOperator(__assign(__assign({}, settings), { operator: "lt" })),
    lte: typedOperator(__assign(__assign({}, settings), { operator: "le" })),
    neq: typedOperator(__assign(__assign({}, settings), { operator: "ne" })),
    startswith: stringFnOperator(__assign(__assign({}, settings), { operator: "startswith" }))
  }[operator];
};
var join = function(x) {
  return " ".concat(x.logic, " ");
};
var serialize = function(settings) {
  return function(x) {
    return filterOperators(x.operator, settings)(x);
  };
};
var serializeAll = function(settings) {
  return serializeFilters(function(filter2) {
    return ifElse(isCompositeFilterDescriptor, serializeAll(settings), serialize(settings))(filter2);
  }, join);
};
var serializeFilter = function(filter2, settings) {
  if (settings === void 0) {
    settings = {};
  }
  if (filter2.filters && filter2.filters.length) {
    return "$filter=" + serializeAll(settings)(normalizeFilters(filter2));
  }
  return "";
};

// node_modules/@progress/kendo-data-query/dist/es/odata.operators.js
var serializeSort = function(orderby) {
  var str = orderby.filter(function(sort2) {
    return isPresent(sort2.dir);
  }).map(function(sort2) {
    var order = sort2.field.replace(/\./g, "/");
    return sort2.dir === "desc" ? order + " desc" : order;
  }).join(",");
  return str ? "$orderby=".concat(str) : str;
};
var emptyString = constant("");
var concat = function(a) {
  return function(b) {
    return a + b;
  };
};
var serializeKey = function(strings, val) {
  return ifElse(isPresent, concat(strings[0]), emptyString)(val);
};
var rules = function(settings, state) {
  return function(key) {
    return {
      "filter": serializeFilter(state.filter || {}, settings),
      "skip": serializeKey(templateObject_12 || (templateObject_12 = __makeTemplateObject(["$skip=", ""], ["$skip=", ""])), state.skip),
      "sort": serializeSort(state.sort || []),
      "take": serializeKey(templateObject_22 || (templateObject_22 = __makeTemplateObject(["$top=", ""], ["$top=", ""])), state.take)
    }[key];
  };
};
var toODataString = function(state, settings) {
  if (settings === void 0) {
    settings = {};
  }
  return Object.keys(state).map(rules(settings, state)).filter(isNotNullOrEmptyString).join("&");
};
var templateObject_12;
var templateObject_22;

// node_modules/@progress/kendo-data-query/dist/es/accessor.js
var getterCache = {};
var FIELD_REGEX = /\[(?:(\d+)|['"](.*?)['"])\]|((?:(?!\[.*?\]|\.).)+)/g;
getterCache["undefined"] = function(obj) {
  return obj;
};
var getter = function(field, safe) {
  var key = field + safe;
  if (getterCache[key]) {
    return getterCache[key];
  }
  var fields = [];
  field.replace(FIELD_REGEX, function(_, index, indexAccessor, field2) {
    fields.push(isPresent(index) ? index : indexAccessor || field2);
    return void 0;
  });
  getterCache[key] = function(obj) {
    var result = obj;
    for (var idx = 0; idx < fields.length; idx++) {
      result = result[fields[idx]];
      if (!isPresent(result) && safe) {
        return result;
      }
    }
    return result;
  };
  return getterCache[key];
};

// node_modules/@progress/kendo-data-query/dist/es/mvc/operators.js
var toQueryString = function(values) {
  return values.reduce(function(acc, _a) {
    var key = _a[0], value2 = _a[1];
    return __spreadArray(__spreadArray([], acc, true), ["".concat(key, "=").concat(value2)], false);
  }, []);
};
var toObject = function(values) {
  return values.reduce(function(acc, _a) {
    var _b;
    var key = _a[0], value2 = _a[1];
    return __assign(__assign({}, acc), (_b = {}, _b[key] = value2, _b));
  }, {});
};
var pairwise = function(key) {
  return function(value2) {
    return [key, value2];
  };
};
var empty = function() {
  return null;
};
var isNotEmptyArray = function(value2) {
  return isPresent(value2) && isArray(value2) && value2.length > 0;
};
var has = function(accessor) {
  return function(value2) {
    return isPresent(accessor(value2));
  };
};
var isNotEmpty = function(accessor) {
  return function(value2) {
    return isNotEmptyArray(accessor(value2));
  };
};
var runOrEmpty = function(predicate, fn) {
  return ifElse(predicate, fn, empty);
};
var calcPage = function(_a) {
  var skip3 = _a.skip, take3 = _a.take;
  return Math.floor((skip3 || 0) / take3) + 1;
};
var formatDescriptors = function(accessor, formatter) {
  return function(state) {
    return accessor(state).map(formatter).join("~");
  };
};
var removeAfter = function(what) {
  return function(str) {
    return str.slice(0, str.indexOf(what));
  };
};
var replace = function(patterns) {
  return compose.apply(void 0, patterns.map(function(_a) {
    var left = _a[0], right = _a[1];
    return function(s) {
      return s.replace(new RegExp(left, "g"), right);
    };
  }));
};
var sanitizeDateLiterals = replace([['"', ""], [":", "-"]]);
var removeAfterDot = removeAfter(".");
var directionFormatter = function(_a) {
  var field = _a.field, _b = _a.dir, dir = _b === void 0 ? "asc" : _b;
  return "".concat(field, "-").concat(dir);
};
var aggregateFormatter = function(_a) {
  var field = _a.field, aggregate = _a.aggregate;
  return "".concat(field, "-").concat(aggregate);
};
var take = getter("take");
var aggregates = getter("aggregates");
var skip = getter("skip");
var group = getter("group");
var sort = getter("sort", true);
var formatSort = formatDescriptors(sort, directionFormatter);
var formatGroup = formatDescriptors(group, directionFormatter);
var formatAggregates = formatDescriptors(aggregates, aggregateFormatter);
var prefixDateValue = function(value2) {
  return "datetime'".concat(value2, "'");
};
var formatDateValue = compose(prefixDateValue, removeAfterDot, sanitizeDateLiterals, JSON.stringify, toUTC);
var formatDate2 = function(_a) {
  var field = _a.field, value2 = _a.value, ignoreCase = _a.ignoreCase, operator = _a.operator;
  return {
    value: formatDateValue(value2),
    field,
    ignoreCase,
    operator
  };
};
var normalizeSort = function(state) {
  return Object.assign({}, state, {
    sort: (sort(state) || []).filter(function(_a) {
      var dir = _a.dir;
      return isNotNullOrEmptyString(dir);
    })
  });
};
var transformSkip = compose(pairwise("page"), calcPage);
var transformTake = compose(pairwise("pageSize"), take);
var transformGroup = compose(pairwise("group"), formatGroup);
var transformSort = compose(pairwise("sort"), formatSort);
var transformAggregates = compose(pairwise("aggregate"), formatAggregates);
var serializePage = runOrEmpty(has(skip), transformSkip);
var serializePageSize = runOrEmpty(has(take), transformTake);
var serializeGroup = runOrEmpty(isNotEmpty(group), transformGroup);
var serializeAggregates = runOrEmpty(has(aggregates), transformAggregates);
var serializeSort2 = compose(runOrEmpty(isNotEmpty(sort), transformSort), normalizeSort);
var hasField = function(_a) {
  var field = _a.field;
  return isNotNullOrEmptyString(field);
};
var filterFormatter = function(_a) {
  var field = _a.field, operator = _a.operator, value2 = _a.value;
  return "".concat(field, "~").concat(operator, "~").concat(value2);
};
var dateFormatter = ifElse(isDateValue, compose(filterFormatter, formatDate2), filterFormatter);
var typedFormatter = function(encode) {
  return runOrEmpty(hasField, ifElse(isStringValue, compose(filterFormatter, quote, encode ? encodeValue : identity), dateFormatter));
};
var join2 = function(_a) {
  var logic2 = _a.logic;
  return "~".concat(logic2, "~");
};
var serialize2 = function(encode) {
  return serializeFilters(function(filter2) {
    return ifElse(isCompositeFilterDescriptor, serialize2(encode), typedFormatter(encode))(filter2);
  }, join2);
};
var serializeFilter2 = function(_a, encode) {
  var filter2 = _a.filter;
  if (filter2 && filter2.filters) {
    var filters = serialize2(encode)(filter2);
    if (filters.length) {
      return ["filter", filters];
    }
  }
  return null;
};
var rules2 = function(state, encode) {
  if (encode === void 0) {
    encode = true;
  }
  return function(key) {
    return {
      "aggregates": serializeAggregates(state),
      "filter": serializeFilter2(state, encode),
      "group": serializeGroup(state),
      "skip": serializePage(state),
      "sort": serializeSort2(state),
      "take": serializePageSize(state)
    }[key];
  };
};
var toDataSourceRequestString = function(state) {
  return toQueryString(Object.keys(state).map(rules2(state)).filter(isPresent)).join("&");
};
var toDataSourceRequest = function(state) {
  return toObject(Object.keys(state).map(rules2(state, false)).filter(isPresent));
};

// node_modules/@progress/kendo-data-query/dist/es/mvc/deserialization.js
var set = function(field, target, value2) {
  target[field] = value2;
  return target;
};
var toCamelCase = function(str) {
  return str.replace(/(^[A-Z])/g, function(_, g1) {
    return g1.toLowerCase();
  });
};
var prop = function(fieldName) {
  return function(obj) {
    var value2 = obj[fieldName];
    if (isPresent(value2)) {
      return value2;
    }
    return obj[toCamelCase(fieldName)];
  };
};
var member = prop("Member");
var aggregateMethodName = prop("AggregateMethodName");
var value = prop("Value");
var convert = function(mapper) {
  return function(values) {
    return Object.keys(values).reduce(mapper.bind(null, values), {});
  };
};
var translateAggregate = convert(function(source, acc, field) {
  return set(field.toLowerCase(), acc, source[field]);
});
var translateAggregates = convert(function(source, acc, field) {
  return set(field, acc, translateAggregate(source[field]));
});
var valueOrDefault = function(value2, defaultValue) {
  return isPresent(value2) ? value2 : defaultValue;
};
var normalizeGroup = function(group2) {
  return {
    aggregates: group2.Aggregates || group2.aggregates,
    field: group2.Member || group2.member || group2.field,
    hasSubgroups: group2.HasSubgroups || group2.hasSubgroups || false,
    items: group2.Items || group2.items,
    value: valueOrDefault(group2.Key, valueOrDefault(group2.key, group2.value))
  };
};
var translateGroup = compose(function(_a) {
  var field = _a.field, hasSubgroups = _a.hasSubgroups, value2 = _a.value, aggregates2 = _a.aggregates, items = _a.items;
  return {
    aggregates: translateAggregates(aggregates2),
    field,
    items: hasSubgroups ? items.map(translateGroup) : items,
    value: value2
  };
}, normalizeGroup);
var translateDataSourceResultGroups = function(data) {
  return data.map(translateGroup);
};
var translateAggregateResults = function(data) {
  return (data || []).reduce(function(acc, x) {
    return set(member(x), acc, set(aggregateMethodName(x).toLowerCase(), acc[member(x)] || {}, value(x)));
  }, {});
};

// node_modules/@progress/kendo-data-query/dist/es/sorting/sort-array.operator.js
var compare = function(a, b) {
  if (isBlank(a)) {
    return a === b ? 0 : -1;
  }
  if (isBlank(b)) {
    return 1;
  }
  if (a.localeCompare) {
    return a.localeCompare(b);
  }
  return a > b ? 1 : a < b ? -1 : 0;
};
var compareDesc = function(a, b) {
  return compare(b, a);
};
var descriptorAsFunc = function(descriptor) {
  if (typeof descriptor.compare === "function") {
    return descriptor.compare;
  }
  var prop2 = getter(descriptor.field, true);
  return function(a, b) {
    return (descriptor.dir === "asc" ? compare : compareDesc)(prop2(a), prop2(b));
  };
};
var initial = function(_a, _b) {
  return 0;
};
var composeSortDescriptors = function(descriptors) {
  return descriptors.filter(function(x) {
    return isPresent(x.dir) || isPresent(x.compare);
  }).map(function(descriptor) {
    return descriptorAsFunc(descriptor);
  }).reduce(function(acc, curr) {
    return function(a, b) {
      return acc(a, b) || curr(a, b);
    };
  }, initial);
};

// node_modules/@progress/kendo-data-query/dist/es/transducers.js
var valueToString = function(value2) {
  value2 = isPresent(value2) && value2.getTime ? value2.getTime() : value2;
  return value2 + "";
};
var groupCombinator = function(field) {
  var prop2 = getter(field, true);
  var position = 0;
  return function(agg, value2) {
    agg[field] = agg[field] || {};
    var groupValue = prop2(value2);
    var key = valueToString(groupValue);
    var values = agg[field][key] || { __position: position++, aggregates: {}, items: [], value: groupValue };
    values.items.push(value2);
    agg[field][key] = values;
    return agg;
  };
};
var expandAggregates = function(result) {
  if (result === void 0) {
    result = {};
  }
  Object.keys(result).forEach(function(field) {
    var aggregates2 = result[field];
    Object.keys(aggregates2).forEach(function(aggregate) {
      aggregates2[aggregate] = aggregates2[aggregate].result();
    });
  });
  return result;
};
var aggregatesFuncs = function(name) {
  return {
    average: function() {
      var value2 = 0;
      var count2 = 0;
      return {
        calc: function(curr) {
          if (isNumeric(curr)) {
            value2 += curr;
            count2++;
          } else {
            value2 = curr;
          }
        },
        result: function() {
          return isNumeric(value2) ? value2 / count2 : value2;
        }
      };
    },
    count: function() {
      var state = 0;
      return {
        calc: function() {
          return state++;
        },
        result: function() {
          return state;
        }
      };
    },
    max: function() {
      var state = Number.NEGATIVE_INFINITY;
      return {
        calc: function(value2) {
          state = isNumeric(state) || isDate(state) ? state : value2;
          if (state < value2 && (isNumeric(value2) || isDate(value2))) {
            state = value2;
          }
        },
        result: function() {
          return state;
        }
      };
    },
    min: function() {
      var state = Number.POSITIVE_INFINITY;
      return {
        calc: function(value2) {
          state = isNumeric(state) || isDate(state) ? state : value2;
          if (state > value2 && (isNumeric(value2) || isDate(value2))) {
            state = value2;
          }
        },
        result: function() {
          return state;
        }
      };
    },
    sum: function() {
      var state = 0;
      return {
        calc: function(value2) {
          value2 = isPresent(value2) ? value2 : 0;
          state += value2;
        },
        result: function() {
          return state;
        }
      };
    }
  }[name]();
};
var aggregatesCombinator = function(descriptors) {
  var functions = descriptors.map(function(descriptor) {
    var fieldAccessor = getter(descriptor.field, true);
    var aggregateName = (descriptor.aggregate || "").toLowerCase();
    var aggregateAccessor = getter(aggregateName, true);
    return function(state, value2) {
      var fieldAggregates = state[descriptor.field] || {};
      var aggregateFunction = aggregateAccessor(fieldAggregates) || aggregatesFuncs(aggregateName);
      aggregateFunction.calc(fieldAccessor(value2));
      fieldAggregates[descriptor.aggregate] = aggregateFunction;
      state[descriptor.field] = fieldAggregates;
      return state;
    };
  });
  return function(state, value2) {
    return functions.reduce(function(agg, calc) {
      return calc(agg, value2);
    }, state);
  };
};
var concat2 = function(arr, value2) {
  arr.push(value2);
  return arr;
};
var map = function(transform) {
  return function(reduce) {
    return function(acc, curr, index) {
      return reduce(acc, transform(curr, index));
    };
  };
};
var filter = function(predicate) {
  return function(reduce) {
    return function(acc, curr) {
      return predicate(curr) ? reduce(acc, curr) : acc;
    };
  };
};
var isTransformerResult = function(source) {
  return isPresent(source.__value);
};
var reduced = function(x) {
  if (isTransformerResult(x)) {
    return x;
  }
  return {
    __value: x,
    reduced: true
  };
};
var take2 = function(count2) {
  return function(reduce) {
    return function(acc, curr) {
      return count2-- > 0 ? reduce(acc, curr) : reduced(acc);
    };
  };
};
var skip2 = function(count2) {
  return function(reduce) {
    return function(acc, curr) {
      return count2-- <= 0 ? reduce(acc, curr) : acc;
    };
  };
};
var exec = function(transform, initialValue, data) {
  var result = initialValue;
  for (var idx = 0, length_1 = data.length; idx < length_1; idx++) {
    result = transform(result, data[idx], idx);
    if (isTransformerResult(result)) {
      result = result.__value;
      break;
    }
  }
  return result;
};

// node_modules/@progress/kendo-data-query/dist/es/grouping/aggregate.operators.js
var identity2 = map(function(x) {
  return x;
});
var aggregateBy = function(data, descriptors, transformers) {
  if (descriptors === void 0) {
    descriptors = [];
  }
  if (transformers === void 0) {
    transformers = identity2;
  }
  var initialValue = {};
  if (!descriptors.length) {
    return initialValue;
  }
  var result = exec(transformers(aggregatesCombinator(descriptors)), initialValue, data);
  return expandAggregates(result);
};

// node_modules/@progress/kendo-data-query/dist/es/filtering/filter-no-eval.js
var logic = {
  "or": {
    concat: function(acc, fn) {
      return function(a) {
        return acc(a) || fn(a);
      };
    },
    identity: function() {
      return false;
    }
  },
  "and": {
    concat: function(acc, fn) {
      return function(a) {
        return acc(a) && fn(a);
      };
    },
    identity: function() {
      return true;
    }
  }
};
var operatorsMap = {
  contains: function(a, b) {
    return (a || "").indexOf(b) >= 0;
  },
  doesnotcontain: function(a, b) {
    return (a || "").indexOf(b) === -1;
  },
  doesnotendwith: function(a, b) {
    return (a || "").indexOf(b, (a || "").length - (b || "").length) < 0;
  },
  doesnotstartwith: function(a, b) {
    return (a || "").lastIndexOf(b, 0) === -1;
  },
  endswith: function(a, b) {
    return (a || "").indexOf(b, (a || "").length - (b || "").length) >= 0;
  },
  eq: function(a, b) {
    return a === b;
  },
  gt: function(a, b) {
    return a > b;
  },
  gte: function(a, b) {
    return a >= b;
  },
  isempty: function(a) {
    return a === "";
  },
  isnotempty: function(a) {
    return a !== "";
  },
  isnotnull: function(a) {
    return isPresent(a);
  },
  isnull: function(a) {
    return isBlank(a);
  },
  lt: function(a, b) {
    return a < b;
  },
  lte: function(a, b) {
    return a <= b;
  },
  neq: function(a, b) {
    return a != b;
  },
  startswith: function(a, b) {
    return (a || "").lastIndexOf(b, 0) === 0;
  }
};
var dateRegExp = /^\/Date\((.*?)\)\/$/;
var convertValue = function(value2, ignoreCase) {
  if (value2 != null && isString(value2)) {
    var date = dateRegExp.exec(value2);
    if (date) {
      return (/* @__PURE__ */ new Date(+date[1])).getTime();
    } else if (ignoreCase) {
      return value2.toLowerCase();
    }
  } else if (value2 != null && isDate(value2)) {
    return value2.getTime();
  }
  return value2;
};
var typedGetter = function(prop2, value2, ignoreCase) {
  if (!isPresent(value2)) {
    return prop2;
  }
  var acc = prop2;
  if (isString(value2)) {
    var date = dateRegExp.exec(value2);
    if (date) {
      value2 = /* @__PURE__ */ new Date(+date[1]);
    } else {
      acc = function(a) {
        var x = prop2(a);
        if (x === null) {
          return x;
        }
        var stringValue = typeof x === "string" ? x : x + "";
        return ignoreCase ? stringValue.toLowerCase() : stringValue;
      };
    }
  }
  if (isDate(value2)) {
    return function(a) {
      var x = acc(a);
      return isDate(x) ? x.getTime() : x;
    };
  }
  return acc;
};
var transformFilter = function(_a) {
  var field = _a.field, ignoreCase = _a.ignoreCase, value2 = _a.value, operator = _a.operator;
  field = !isPresent(field) ? function(a) {
    return a;
  } : field;
  ignoreCase = isPresent(ignoreCase) ? ignoreCase : true;
  var itemProp = typedGetter(isFunction(field) ? field : getter(field, true), value2, ignoreCase);
  value2 = convertValue(value2, ignoreCase);
  var op = isFunction(operator) ? operator : operatorsMap[operator];
  return function(a) {
    return op(itemProp(a), value2, ignoreCase);
  };
};
var transformCompositeFilter = function(filter2) {
  var combiner = logic[filter2.logic];
  return filter2.filters.filter(isPresent).map(function(x) {
    return isCompositeFilterDescriptor(x) ? transformCompositeFilter(x) : transformFilter(x);
  }).reduce(combiner.concat, combiner.identity);
};

// node_modules/@progress/kendo-data-query/dist/es/filtering/filter-expression.factory.js
var compileFilter = function(descriptor) {
  if (!descriptor || descriptor.filters.length === 0) {
    return function() {
      return true;
    };
  }
  return transformCompositeFilter(descriptor);
};
var filterBy = function(data, descriptor) {
  if (!isPresent(descriptor) || isCompositeFilterDescriptor(descriptor) && descriptor.filters.length === 0) {
    return data;
  }
  return data.filter(compileFilter(normalizeFilters(descriptor)));
};

// node_modules/@progress/kendo-data-query/dist/es/grouping/group.operators.js
var normalizeGroups = function(descriptors) {
  descriptors = isArray(descriptors) ? descriptors : [descriptors];
  return descriptors.map(function(x) {
    return Object.assign({ dir: "asc" }, x);
  });
};
var identity3 = map(function(x) {
  return x;
});
var groupBy = function(data, descriptors, transformers, originalData) {
  if (descriptors === void 0) {
    descriptors = [];
  }
  if (transformers === void 0) {
    transformers = identity3;
  }
  if (originalData === void 0) {
    originalData = data;
  }
  descriptors = normalizeGroups(descriptors);
  if (!descriptors.length) {
    return data;
  }
  var descriptor = descriptors[0];
  var initialValue = {};
  var view = exec(transformers(groupCombinator(descriptor.field)), initialValue, data);
  var result = [];
  Object.keys(view).forEach(function(field) {
    Object.keys(view[field]).forEach(function(value2) {
      var group2 = view[field][value2];
      var aggregateResult = {};
      var filteredData = originalData;
      if (isPresent(descriptor.aggregates)) {
        filteredData = filterBy(originalData, {
          field: descriptor.field,
          ignoreCase: false,
          operator: "eq",
          value: group2.value
        });
        aggregateResult = aggregateBy(filteredData, descriptor.aggregates);
      }
      result[group2.__position] = {
        aggregates: aggregateResult,
        field,
        items: descriptors.length > 1 ? groupBy(group2.items, descriptors.slice(1), identity3, filteredData) : group2.items,
        value: group2.value
      };
    });
  });
  return result;
};

// node_modules/@progress/kendo-data-query/dist/es/array.operators.js
var orderBy = function(data, descriptors) {
  if (descriptors.some(function(x) {
    return isPresent(x.dir) || isPresent(x.compare);
  })) {
    data = data.slice(0);
    var comparer = composeSortDescriptors(descriptors);
    data.sort(comparer);
  }
  return data;
};
var defaultComparer = function(a, b) {
  return a === b;
};
var normalizeComparer = function(comparer) {
  if (isString(comparer)) {
    var accessor_1 = getter(comparer);
    comparer = function(a, b) {
      return accessor_1(a) === accessor_1(b);
    };
  }
  return comparer;
};
var _distinct = function(data, comparer) {
  return data.filter(function(x, idx, xs) {
    return xs.findIndex(comparer.bind(null, x)) === idx;
  });
};
var distinct = function(data, comparer) {
  if (comparer === void 0) {
    comparer = defaultComparer;
  }
  return _distinct(data, normalizeComparer(comparer));
};
var count = function(data, predicate) {
  var counter = 0;
  for (var idx = 0, length_1 = data.length; idx < length_1; idx++) {
    if (predicate(data[idx])) {
      counter++;
    }
  }
  return counter;
};
var limit = function(data, predicate) {
  if (predicate) {
    return data.filter(predicate);
  }
  return data;
};
var process = function(data, state) {
  var skipCount = state.skip, takeCount = state.take, filterDescriptor = state.filter, sort2 = state.sort, group2 = state.group;
  var sortDescriptors = __spreadArray(__spreadArray([], normalizeGroups(group2 || []), true), sort2 || [], true);
  if (sortDescriptors.length) {
    data = orderBy(data, sortDescriptors);
  }
  var hasFilters = isPresent(filterDescriptor) && filter.length;
  var hasGroups = isPresent(group2) && group2.length;
  if (!hasFilters && !hasGroups) {
    return {
      data: takeCount ? data.slice(skipCount, skipCount + takeCount) : data,
      total: data.length
    };
  }
  var total;
  var transformers = [];
  var predicate;
  if (hasFilters) {
    predicate = compileFilter(normalizeFilters(filterDescriptor));
    total = count(data, predicate);
    transformers.push(filter(predicate));
  } else {
    total = data.length;
  }
  if (isPresent(skipCount) && isPresent(takeCount)) {
    transformers.push(skip2(skipCount));
    transformers.push(take2(takeCount));
  }
  if (transformers.length) {
    var transform = compose.apply(void 0, transformers);
    var result = hasGroups ? groupBy(data, group2, transform, limit(data, predicate)) : exec(transform(concat2), [], data);
    return { data: result, total };
  }
  return {
    data: hasGroups ? groupBy(data, group2) : data,
    total
  };
};

// node_modules/@progress/kendo-data-query/dist/es/filtering/operators.enum.js
var FilterOperator;
(function(FilterOperator2) {
  FilterOperator2["Contains"] = "contains";
  FilterOperator2["DoesNotContain"] = "doesnotcontain";
  FilterOperator2["DoesNotEndWith"] = "doesnotendwith";
  FilterOperator2["DoesNotStartWith"] = "doesnotstartwith";
  FilterOperator2["EndsWith"] = "endswith";
  FilterOperator2["EqualTo"] = "eq";
  FilterOperator2["GreaterThan"] = "gt";
  FilterOperator2["GreaterThanOrEqual"] = "gte";
  FilterOperator2["IsEmpty"] = "isempty";
  FilterOperator2["IsNotEmpty"] = "isnotempty";
  FilterOperator2["IsNotNull"] = "isnotnull";
  FilterOperator2["IsNull"] = "isnull";
  FilterOperator2["LessThan"] = "lt";
  FilterOperator2["LessThanOrEqual"] = "lte";
  FilterOperator2["NotEqualTo"] = "neq";
  FilterOperator2["StartsWith"] = "startswith";
})(FilterOperator || (FilterOperator = {}));

export {
  isCompositeFilterDescriptor,
  normalizeFilters,
  toODataString,
  getter,
  toDataSourceRequestString,
  toDataSourceRequest,
  translateDataSourceResultGroups,
  translateAggregateResults,
  composeSortDescriptors,
  aggregateBy,
  compileFilter,
  filterBy,
  normalizeGroups,
  groupBy,
  orderBy,
  distinct,
  process,
  FilterOperator
};
//# sourceMappingURL=chunk-Z36VZMCP.js.map
