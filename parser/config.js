import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { walkDir } from './modules/dirUtils.js';
import program from './modules/program.js';

const PRETTIER_PRINT_WIDTH = 120; // чтоб массивы выстраивались в одну линию
const PRETTIER_TAB_WIDTH = 4;
const ROOT_DIR = dirname(fileURLToPath(import.meta.url));

export default Object.freeze({
    runnersPath: join(ROOT_DIR, './runners'),
    pathRaw: join(ROOT_DIR, './raw'),
    pathSave: join(ROOT_DIR, './dist'),
    ignoreFiles: [ 'credits' ],
    get files() {
        const files = program.args
            .map((f) => join(ROOT_DIR, f));

        if (files.length) {
            return files;
        }
        return walkDir(this.pathRaw)
            .filter((e) => (e !== undefined && e.endsWith('.csv')));
    },
    saveFile: {
        js: {
            opts: {
                parser: 'babel',
                trailingComma: 'all',
                printWidth: PRETTIER_PRINT_WIDTH,
                tabWidth: PRETTIER_TAB_WIDTH,
            },
            formatting(content, runnerName = null) {
                runnerName = (!runnerName || runnerName === 'Runner') ? 'default' : `${runnerName}.js`;

                return `
                // generated by ${runnerName} runner

                export default ${JSON.stringify(content)}
            `;
            },
        },
        json: {
            opts: {
                parser: 'json',
                trailingComma: 'es6',
                printWidth: PRETTIER_PRINT_WIDTH,
                tabWidth: PRETTIER_TAB_WIDTH,
            },
            formatting(content) {
                return JSON.stringify(content);
            },
        },
    },
});
