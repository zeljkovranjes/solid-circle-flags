import { Country } from './countries'

export type Language =
  | 'aa' // Afar
  | 'ab' // Abkhazian
  | 'af' // Afrikaans
  | 'ak' // Akan
  | 'am' // Amharic
  | 'an' // Aragonese
  | 'ar' // Arabic
  | 'as' // Assamese
  | 'av' // Avaric
  | 'ay' // Aymara
  | 'az' // Azerbaijani
  | 'ba' // Bashkir
  | 'be' // Belarusian
  | 'bg' // Bulgarian
  | 'bi' // Bislama
  | 'bm' // Bambara
  | 'bn' // Bengali
  | 'bo' // Tibetan
  | 'br' // Breton
  | 'bs' // Bosnian
  | 'ca' // Catalan
  | 'ce' // Chechen
  | 'ceb' // Cebuano
  | 'ch' // Chamorro
  | 'chm' // Mari
  | 'ckb' // Central Kurdish
  | 'co' // Corsican
  | 'cs' // Czech
  | 'cv' // Chuvash
  | 'cy' // Welsh
  | 'da' // Danish
  | 'de' // German
  | 'dv' // Divehi
  | 'dz' // Dzongkha
  | 'ee' // Ewe
  | 'el' // Greek
  | 'en' // English
  | 'en-au' // English (Australia)
  | 'en-ca' // English (Canada)
  | 'en-gh' // English (Ghana)
  | 'en-hk' // English (Hong Kong)
  | 'en-ie' // English (Ireland)
  | 'en-in' // English (India)
  | 'en-ke' // English (Kenya)
  | 'en-ng' // English (Nigeria)
  | 'en-nz' // English (New Zealand)
  | 'en-ph' // English (Philippines)
  | 'en-sg' // English (Singapore)
  | 'en-tz' // English (Tanzania)
  | 'en-us' // English (United States)
  | 'en-za' // English (South Africa)
  | 'eo' // Esperanto
  | 'es' // Spanish
  | 'es-mx' // Spanish (Mexico)
  | 'et' // Estonian
  | 'eu' // Basque
  | 'fa' // Persian
  | 'fi' // Finnish
  | 'fil' // Filipino
  | 'fj' // Fijian
  | 'fo' // Faroese
  | 'fr' // French
  | 'fy' // Frisian
  | 'ga' // Irish
  | 'gd' // Scottish Gaelic
  | 'gl' // Galician
  | 'gn' // Guaraní
  | 'gu' // Gujarati
  | 'gv' // Manx
  | 'ha' // Hausa
  | 'haw' // Hawaiian
  | 'he' // Hebrew
  | 'hi' // Hindi
  | 'hmn' // Hmong
  | 'ho' // Hiri Motu
  | 'hr' // Croatian
  | 'ht' // Haitian Creole
  | 'hu' // Hungarian
  | 'hy' // Armenian
  | 'ia' // Interlingua
  | 'id' // Indonesian
  | 'ie' // Interlingue
  | 'ig' // Igbo
  | 'ilo' // Ilokano
  | 'interslavic' // Interslavic
  | 'io' // Ido
  | 'is' // Icelandic
  | 'it' // Italian
  | 'ja' // Japanese
  | 'jv' // Javanese
  | 'ka' // Georgian
  | 'kg' // Kikongo
  | 'ki' // Kikuyu
  | 'kk' // Kazakh
  | 'kl' // Kalaallisut
  | 'km' // Khmer
  | 'kn' // Kannada
  | 'ko' // Korean
  | 'kr' // Kanuri
  | 'kri' // Krio
  | 'ks' // Kashmiri
  | 'ku' // Kurdish
  | 'kv' // Komi
  | 'kw' // Cornish
  | 'ky' // Kyrgyz
  | 'la' // Latin
  | 'lb' // Luxembourgish
  | 'lg' // Ganda
  | 'ln' // Lingala
  | 'lo' // Lao
  | 'lt' // Lithuanian
  | 'lu' // Luba-Katanga
  | 'lus' // Lushai
  | 'lv' // Latvian
  | 'mg' // Malagasy
  | 'mh' // Marshallese
  | 'mi' // Maori
  | 'mk' // Macedonian
  | 'ml' // Malayalam
  | 'mn' // Mongolian
  | 'mni' // Manipuri
  | 'mr' // Marathi
  | 'mrj' // Western Mari
  | 'ms' // Malay
  | 'mt' // Maltese
  | 'my' // Burmese
  | 'na' // Nauru
  | 'nb' // Norwegian Bokmål
  | 'nd' // North Ndebele
  | 'ne' // Nepali
  | 'nl' // Dutch
  | 'nn' // Norwegian Nynorsk
  | 'no' // Norwegian
  | 'non' // Old Norse
  | 'nr' // South Ndebele
  | 'ny' // Chichewa
  | 'oc' // Occitan
  | 'om' // Oromo
  | 'or' // Odia
  | 'os' // Ossetian
  | 'oto' // Otomi
  | 'pa' // Punjabi
  | 'pap' // Papiamento
  | 'pl' // Polish
  | 'pms' // Piedmontese
  | 'ps' // Pashto
  | 'pt' // Portuguese
  | 'pt-br' // Portuguese (Brazil)
  | 'qu' // Quechua
  | 'rm' // Romansh
  | 'rn' // Rundi
  | 'ro' // Romanian
  | 'ru' // Russian
  | 'rw' // Kinyarwanda
  | 'sc' // Sardinian
  | 'sd' // Sindhi
  | 'se' // Northern Sami
  | 'sg' // Sango
  | 'si' // Sinhala
  | 'sk' // Slovak
  | 'sl' // Slovenian
  | 'sm' // Samoan
  | 'sn' // Shona
  | 'so' // Somali
  | 'sq' // Albanian
  | 'sr' // Serbian
  | 'ss' // Swazi
  | 'st' // Southern Sotho
  | 'su' // Sundanese
  | 'sv' // Swedish
  | 'sw' // Swahili
  | 'ta' // Tamil
  | 'te' // Telugu
  | 'tg' // Tajik
  | 'th' // Thai
  | 'ti' // Tigrinya
  | 'tk' // Turkmen
  | 'tl' // Tagalog
  | 'tn' // Tswana
  | 'to' // Tonga
  | 'tr' // Turkish
  | 'tt' // Tatar
  | 'ty' // Tahitian
  | 'udm' // Udmurt
  | 'ug' // Uighur
  | 'uk' // Ukrainian
  | 'ur' // Urdu
  | 'uz' // Uzbek
  | 'vi' // Vietnamese
  | 'vo' // Volapük
  | 'xh' // Xhosa
  | 'yi' // Yiddish
  | 'yo' // Yoruba
  | 'yua' // Yucatec Maya
  | 'zh' // Chinese
  | 'zu' // Zulu

export type MappableLanguage =
  | 'aa'
  | 'ab'
  | 'af'
  | 'ak'
  | 'am'
  | 'an'
  | 'as'
  | 'av'
  | 'ay'
  | 'az'
  | 'ba'
  | 'be'
  | 'bg'
  | 'bi'
  | 'bm'
  | 'bn'
  | 'bo'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ce'
  | 'ceb'
  | 'ch'
  | 'chm'
  | 'ckb'
  | 'co'
  | 'cs'
  | 'cv'
  | 'cy'
  | 'da'
  | 'de'
  | 'dv'
  | 'dz'
  | 'ee'
  | 'el'
  | 'en'
  | 'es'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fil'
  | 'fj'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'gv'
  | 'ha'
  | 'haw'
  | 'he'
  | 'hi'
  | 'hmn'
  | 'ho'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'id'
  | 'ig'
  | 'ilo'
  | 'is'
  | 'it'
  | 'ja'
  | 'jv'
  | 'ka'
  | 'kg'
  | 'ki'
  | 'kk'
  | 'kl'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kr'
  | 'kri'
  | 'ks'
  | 'ku'
  | 'kv'
  | 'kw'
  | 'ky'
  | 'lb'
  | 'lg'
  | 'ln'
  | 'lo'
  | 'lt'
  | 'lu'
  | 'lus'
  | 'lv'
  | 'mg'
  | 'mh'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mni'
  | 'mrj'
  | 'ms'
  | 'mt'
  | 'my'
  | 'na'
  | 'nb'
  | 'nd'
  | 'ne'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nr'
  | 'ny'
  | 'oc'
  | 'om'
  | 'or'
  | 'os'
  | 'oto'
  | 'pa'
  | 'pap'
  | 'pl'
  | 'pms'
  | 'ps'
  | 'pt-br'
  | 'pt'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sc'
  | 'sd'
  | 'se'
  | 'sg'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sm'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'ss'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tn'
  | 'to'
  | 'tr'
  | 'tt'
  | 'ty'
  | 'udm'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 'vi'
  | 'xh'
  | 'yo'
  | 'yua'
  | 'zh'
  | 'zu'

export const languageToCountryMap: Record<MappableLanguage, Country> = {
  aa: 'et-af',
  ab: 'ge-ab',
  af: 'za',
  ak: 'gh',
  am: 'et',
  an: 'es-ar',
  as: 'in-as',
  av: 'ru-da',
  ay: 'bo',
  az: 'az',
  ba: 'ru-ba',
  be: 'by',
  bg: 'bg',
  bi: 'vu',
  bm: 'ml',
  bn: 'bd',
  bo: 'tibet',
  br: 'fr-bre',
  bs: 'ba',
  ca: 'es-ct',
  ce: 'ru-ce',
  ceb: 'ph',
  ch: 'gu',
  chm: 'ru',
  ckb: 'iq-kr',
  co: 'fr-20r',
  cs: 'cz',
  cv: 'ru-cu',
  cy: 'gb-wls',
  da: 'dk',
  de: 'de',
  dv: 'mv',
  dz: 'bt',
  ee: 'gh',
  el: 'gr',
  en: 'us',
  es: 'es',
  et: 'ee',
  eu: 'es-pv',
  fa: 'ir',
  fi: 'fi',
  fil: 'ph',
  fj: 'fj',
  fo: 'fo',
  fr: 'fr',
  fy: 'nl-fr',
  ga: 'ie',
  gd: 'gb-sct',
  gl: 'es-ga',
  gn: 'py',
  gu: 'in-gj',
  gv: 'im',
  ha: 'ng',
  haw: 'us-hi',
  he: 'il',
  hi: 'in',
  hmn: 'hmong',
  ho: 'pg',
  hr: 'hr',
  ht: 'ht',
  hu: 'hu',
  hy: 'am',
  id: 'id',
  ig: 'ng',
  ilo: 'ph',
  is: 'is',
  it: 'it',
  ja: 'jp',
  jv: 'id-jt',
  ka: 'ge',
  kg: 'cd',
  ki: 'ke',
  kk: 'kz',
  kl: 'gl',
  km: 'kh',
  kn: 'in-ka',
  ko: 'kr',
  kr: 'ng',
  kri: 'sl',
  ks: 'in',
  ku: 'iq-kr',
  kv: 'ru-ko',
  kw: 'gb-con',
  ky: 'kg',
  lb: 'lu',
  lg: 'ug',
  ln: 'cd',
  lo: 'la',
  lt: 'lt',
  lu: 'cd',
  lus: 'in-mz',
  lv: 'lv',
  mg: 'mg',
  mh: 'mh',
  mi: 'maori',
  mk: 'mk',
  ml: 'malayali',
  mn: 'mn',
  mni: 'in-mn',
  mrj: 'ru',
  ms: 'my',
  mt: 'mt',
  my: 'mm',
  na: 'nr',
  nb: 'no',
  nd: 'zw',
  ne: 'np',
  nl: 'nl',
  nn: 'no',
  no: 'no',
  nr: 'za',
  ny: 'mw',
  oc: 'occitania',
  om: 'et',
  or: 'in-or',
  os: 'ru',
  oto: 'mx',
  pa: 'in',
  pap: 'cw',
  pl: 'pl',
  pms: 'it-21',
  ps: 'af',
  'pt-br': 'br',
  pt: 'pt',
  qu: 'pe',
  rm: 'ch-gr',
  rn: 'bi',
  ro: 'ro',
  ru: 'ru',
  rw: 'rw',
  sc: 'it-82',
  sd: 'pk-sd',
  se: 'no',
  sg: 'cf',
  si: 'lk',
  sk: 'sk',
  sl: 'si',
  sm: 'ws',
  sn: 'zw',
  so: 'so',
  sq: 'al',
  sr: 'rs',
  ss: 'sz',
  st: 'ls',
  su: 'id-jb',
  sv: 'se',
  sw: 'tz',
  ta: 'in-tn',
  te: 'in-tg',
  tg: 'tj',
  th: 'th',
  ti: 'er',
  tk: 'tm',
  tl: 'ph',
  tn: 'bw',
  to: 'to',
  tr: 'tr',
  tt: 'ru-ta',
  ty: 'pf',
  udm: 'ru-ud',
  ug: 'cn-xj',
  uk: 'ua',
  ur: 'pk',
  uz: 'uz',
  vi: 'vn',
  xh: 'za',
  yo: 'yorubaland',
  yua: 'mx',
  zh: 'cn',
  zu: 'za',
}

export function mappableLanguageToCountry(language: MappableLanguage): Country | undefined {
  return languageToCountryMap[language]
}
