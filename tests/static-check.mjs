import { readFileSync } from 'node:fs';
import { Script } from 'node:vm';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)];
if (!scripts.length) throw Error('Nenhum bloco script encontrado');
let checked = 0;
for (const [, attrs, code] of scripts) {
  if (/\bsrc\s*=/.test(attrs) || !code.trim()) continue;
  if (/\btype\s*=\s*["'](?:application\/json|importmap)["']/.test(attrs)) {
    JSON.parse(code);
  } else {
    new Script(code, { filename: `index.html:inline-script-${++checked}` });
  }
}
if (!checked) throw Error('Nenhum JavaScript inline validado');
for (const id of ['map', 'mapInfo', 'nucleusSummary']) {
  if (!new RegExp(`\\bid=["']${id}["']`).test(html)) throw Error(`Elemento essencial ausente: ${id}`);
}
const historical = JSON.parse(readFileSync(new URL('../historico-operacao.json', import.meta.url), 'utf8'));
if (!Array.isArray(historical.rows)) throw Error('Histórico: rows ausente');
if (historical.rows.length > 10000) throw Error('Histórico: quantidade de linhas excedida');
for (const [i, row] of historical.rows.entries()) {
  if (!Array.isArray(row) || row.length !== 14 || !/^20\d{2}-\d{2}$/.test(row[0]) || !['captador','liner','closer'].includes(row[1]) || typeof row[2] !== 'string' || row[2].length > 200 || !row.slice(3).every(v => typeof v === 'number' && Number.isFinite(v) && v >= 0)) {
    throw Error(`Histórico: linha ${i + 1} inválida`);
  }
}
console.log(`Validação estática OK: ${checked} script(s), elementos essenciais e ${historical.rows.length} linhas de histórico.`);
