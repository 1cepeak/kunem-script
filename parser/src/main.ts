import fs from 'node:fs';
import path from 'node:path';

import dictionary from './dictionaries.ts';
import { FILE_EXTENSION } from './constants.ts';

export async function loadFile(filePath: string): Promise<string> {
  if (!filePath.endsWith(FILE_EXTENSION)) {
    throw new Error('Given file is not a KunemScript file');
  }

  return (await fs.promises.readFile(filePath)).toString();
}

export function transform(loadedFile: string): string {
  let transformed: string[] = [];

  for (const row of loadedFile.split('\n')) {
    const transformedRow: string = Object.entries(dictionary)
      .reduce((acc, [key, value]) => acc.replaceAll(key, value), row);

    transformed.push(transformedRow);
  }

  return transformed.join('\n');
}

export async function cli(processArgs: string[]): Promise<{ file: string, debug: boolean }> {
  const args: string[] = processArgs.slice(2);
  const fileName: string = args[0];
  const debug: boolean = Boolean(args[1]);

  const file: string = await loadFile(path.resolve(fileName));

  return {
    file: transform(file),
    debug,
  };
}

export function run(file: string, debug: boolean): void {
  debug
    ? console.log(file)
    : eval(file);
}
