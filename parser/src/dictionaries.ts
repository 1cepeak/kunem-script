import type { LexicalDictionary } from './types.ts';

// export const dictionary: string[] = [
//   'алло блять',
//   'я думал',
//   'ты че ёбнутый',
//   'ты че конченный',
//   'ты че ёбнулся',
//   'ты ебанутый',
//   'какой же ты конченный',
//   'намана',
//   'я в ахуе',
//   'да бля',
//   'инч',
//   'э',
//   'ебаный пинг блять',
//   'я посрал',
//   'как вы заебали',
//   'я не понимаю',
//   'сола',
//   'это бочка',
//   'ты видел',
//   'твоя мать',
//   'я твой рот ебал',
//   'ёбаный в рот',
// ];

export const variableDefinition: LexicalDictionary = {
  'микро челик': 'const',
  'челик': 'var',
  'чел': 'let',
};

export const functionDefinition: LexicalDictionary = {
  'я не понимаю': 'function',
  'понимаю': 'return',
};

export const nativeTypes: LexicalDictionary = {
  'твоя мать': 'true',
  'твой батя': 'false'
};

// export const modulesTokens: LexicalDictionary = {
//
// };

export const conditions: LexicalDictionary = {
  'ты че коченный': 'if',
  'намана': 'else',
};

export const consoleTokens: LexicalDictionary = {
  'да бля': 'console.log',
};

export const arrayMethods: LexicalDictionary = {
  'да завали ебало': 'filter',
  'как вы заебали': 'includes',
};

export default {
  ...variableDefinition,
  ...nativeTypes,
  ...functionDefinition,
  ...conditions,
  ...consoleTokens,
  ...arrayMethods,
};
