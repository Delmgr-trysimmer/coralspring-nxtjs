const fs = require('fs');
const content = fs.readFileSync('data/service-pages.ts', 'utf8');

const regex = /slug:\s*"([^"]+)"/g;
let match;
const slugs = [];

while ((match = regex.exec(content)) !== null) {
  slugs.push(`slug:\t${match[1]}`);
}

console.log(slugs.join('\n'));
