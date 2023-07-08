import { cli, run } from './dist/parser.es.js';

cli(process.argv)
  .then(({ file, debug }) => run(file, debug))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
