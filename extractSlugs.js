const fs = require('fs');

const content = fs.readFileSync('data/blog-posts.ts', 'utf8');
const results = [];
const lines = content.split('\n');

let currentSlug = '';
let currentTitle = '';
let currentLine = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const slugMatch = line.match(/slug:\s*"([^"]+)"/);
  if (slugMatch) {
    currentSlug = slugMatch[1];
    currentLine = i + 1;
  }
  const titleMatch = line.match(/title:\s*"([^"]+)"/);
  if (titleMatch) {
    currentTitle = titleMatch[1];
    // assume slug comes before title
    if (currentSlug) {
      results.push({ slug: currentSlug, title: currentTitle, fileIdx: currentLine });
      currentSlug = '';
      currentTitle = '';
    }
  }
}

fs.writeFileSync('slugs.json', JSON.stringify(results, null, 2));
console.log('done');
