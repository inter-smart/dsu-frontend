const fs = require('fs');
const files = ['hero', 'centres-of-excellence', 'academic-programs', 'research-innovation', 'industry-collaboration', 'partners', 'statistics', 'leadership', 'legacy', 'student-success', 'campus-life', 'international-collaboration', 'latest-news', 'announcements', 'events', 'cta', 'seo'];

let indexContent = '';

files.forEach(file => {
  const camelCase = file.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  const content = `export const ${camelCase} = { data: { id: 1, documentId: '${file}-1', attributes: { title: '${camelCase}' } } };\n`;
  fs.writeFileSync(`src/data/home/${file}.js`, content);
  indexContent += `export { ${camelCase} } from './${file}';\n`;
});

fs.writeFileSync('src/data/home/index.js', indexContent);
