import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import VueI18NExtract from 'vue-i18n-extract';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_PATH = path.join(__dirname, `../../../../`);

const PARSER_DIST_PATH = path.join(ROOT_PATH, '/parser/dist');
const REGULATION_LOC_PATH = path.join(ROOT_PATH, '/src/regulation/locKeys.mjs');
const RAW_EN_LOCALE_PATH = path.join(ROOT_PATH, '/parser/dist/loc_strings/en.js');


export default async function() {
    const i18nReport = await VueI18NExtract.createI18NReport({
        vueFiles: path.join(ROOT_PATH, `/src/**/*.?(js|ts|vue)`),
        languageFiles: path.join(__dirname, `../../../dist/en.json`),
        output: false,
    });
    const keysToRemove = i18nReport.unusedKeys.map((e) => e.path);
    const enLocale = await import(RAW_EN_LOCALE_PATH).then((m) => m.default);
    const usedInCodeKeys = Object.keys(enLocale).filter((k) => !keysToRemove.includes(k));

    const { gameCharsLocKeys, gameSlostLocKeys } = await import(REGULATION_LOC_PATH);
    const dist = await importAllFiles(PARSER_DIST_PATH);

    return [ ...new Set([
        ...usedInCodeKeys,
        ...getUniqueStringValues(dist),
        ...Object.values(gameCharsLocKeys),
        ...Object.values(gameSlostLocKeys),
    ]) ];
}
async function importAllFiles(dir) {
    const files = fs.readdirSync(dir).map(async (file) => {
        const filePath = path.join(dir, file);

        if (path.extname(file) === '.js') {
            return await import(filePath).then((m) => m.default);
        }
    });

    return await Promise.all(files);
}
function getUniqueStringValues(obj) {
    const result = [];

    // Рекурсивная функция для обхода объекта
    function traverse(obj) {
        for (const key in obj) {
            if (typeof obj[key] === 'string' && obj[key].startsWith('TID_')) {
                if (!result.includes(obj[key])) {
                    result.push(obj[key]);
                }
            } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                traverse(obj[key]);
            }
        }
    }

    obj.forEach((item) => traverse(item));

    return result;
}
