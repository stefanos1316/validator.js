import assertString from './util/assertString';

// common patterns
const threeDigit = /^\d{3}$/;
const fourDigit = /^\d{4}$/;
const fiveDigit = /^\d{5}$/;
const sixDigit = /^\d{6}$/;

const patterns = {
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
  NZ: fourDigit,
  PG: threeDigit,
  PH: fourDigit,
  PK: fiveDigit,
  PL: /^\d{2}\-\d{3}$/,
  PR: fiveDigit,
  PT: /^\d{4}\-\d{3}?$/,
  PW: fiveDigit,
  RE: fiveDigit,
  RO: sixDigit,
  RS: fiveDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s\d{2}$/,
  SG: sixDigit,
  SH: /^[A-Z]{4}\s\d{1}[A-Z]{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s\d{2}$/,
  SM: fiveDigit,
  SZ: /^[A-Z]{1}[0-9]{3}$/,
  TH: fiveDigit,
  TN: fourDigit,
  TR: fiveDigit,
  TW: /^(\d{3}|\d{5})$/,
  UA: fiveDigit,
  US: /^(\d{5}|\d{5}-\d{4})?$/,
  UZ: sixDigit,
  VI: fiveDigit,
  XY: fiveDigit,
  YT: fiveDigit,
  ZA: fourDigit,
  ZM: fiveDigit,
};

export const locales = Object.keys(patterns);

export default function (str, locale) {
  assertString(str);
  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (const key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        const pattern = patterns[key];
        if (pattern.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error(`Invalid locale '${locale}'`);
}
