"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;
exports.locales = void 0;

var _assertString = _interopRequireDefault(require("./util/assertString"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;
var patterns = {
  AD: /^(AD\d{3}|\d{5})$/,
  AM: fourDigit,
  AR: fourDigit,
  AS: fiveDigit,
  AT: fourDigit,
  AU: fourDigit,
  AZ: /^(\d{6}|\d{4})$/,
  BA: fiveDigit,
  BD: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  BN: /^[A-Z]{2}[0-9]{4}$/,
  BR: /^([0-9]{5}|[0-9]{5}-[0-9]{3}|[0-9]{8})$/,
  BY: sixDigit,
  CA: /^([A-Z]{1}[0-9]{1}[A-Z]\s[0-9]{1}[A-Z]{1}|[A-Z]{1}[0-9]{1}[A-Z]\s[0-9]{1}[A-Z]{1}[0-9]{1})$/,
  CH: fourDigit,
  CN: sixDigit,
  CO: sixDigit,
  CU: fiveDigit,
  CY: fourDigit,
  CZ: /^[0-9]{3}\s[0-9]{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EC: sixDigit,
  EE: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FM: fiveDigit,
  FO: threeDigit,
  FR: fiveDigit,
  GB: /^([A-Z]{2}[0-9]{1}[A-Z]{1}\s[0-9]{1}[A-Z]{2}|[A-Z]{1}[0-9]{2}\s[0-9]{1}[A-Z]{2}|[A-Z]{1}[0-9]{1}[A-Z]{1}\s[0-9]{1}[A-Z]{2}|[A-Z]{1}[0-9]{1}\s[0-9]{1}[A-Z]{2}|[A-Z]{2}[0-9]{2}\s[0-9]{1}[A-Z]{2}|[A-Z]{2}[0-9]{1}\s[0-9]{1}[A-Z]{2})$/,
  GE: fourDigit,
  GF: fiveDigit,
  GG: /^([A-Z]{2}\d{2}\s\d{1}[A-Z]{2}|[A-Z]{2}\d{1}\s\d{1}[A-Z]{2})$/,
  GL: fourDigit,
  GP: fiveDigit,
  GR: /^\d{3}\s\d{2}$/,
  GU: /^(\d{5}|\d{5}-\d{4})$/,
  HR: fiveDigit,
  HU: fourDigit,
  IC: fiveDigit,
  ID: fiveDigit,
  IL: /^\d{7}$/,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JE: /^[A-Z]{2}[0-9]{1}\s\d{1}[A-Z]{2}$/,
  JP: /^\d{3}\-\d{4}$/,
  KG: sixDigit,
  KH: fiveDigit,
  KR: fiveDigit,
  KV: fiveDigit,
  KZ: sixDigit,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^\d{5}$/,
  LU: fourDigit,
  LV: /^\d{4}$/,
  MA: fiveDigit,
  MC: fiveDigit,
  MD: fourDigit,
  ME: fiveDigit,
  MG: threeDigit,
  MH: fiveDigit,
  MK: fourDigit,
  MN: /^(\d{5}|\d{6})$/,
  MP: fiveDigit,
  MQ: fiveDigit,
  MV: /^(\d{5}|\d{4})$/,
  MX: fiveDigit,
  MY: fiveDigit,
  NC: fiveDigit,
  NL: /^(\d{4}|\d{4}\s[A-Z]{2})$/,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  UA: fiveDigit,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};
var locales = Object.keys(patterns);
exports.locales = locales;

function _default(str, locale) {
  (0, _assertString.default)(str);

  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];

        if (pattern.test(str)) {
          return true;
        }
      }
    }

    return false;
  }

  throw new Error("Invalid locale '".concat(locale, "'"));
}