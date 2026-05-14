const fs = require('fs');

function getSlugs(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /slug:\s*"([^"]+)"/g;
  let match;
  const slugs = [];
  while ((match = regex.exec(content)) !== null) {
    slugs.push(match[1]);
  }
  return slugs;
}

const serviceSlugs = getSlugs('data/service-pages.ts');
const blogSlugs = getSlugs('data/blog-posts.ts');

const allSlugs = [...serviceSlugs, ...blogSlugs];
const counts = {};
const duplicates = [];

allSlugs.forEach(slug => {
  counts[slug] = (counts[slug] || 0) + 1;
  if (counts[slug] === 2) {
    duplicates.push(slug);
  }
});

if (duplicates.length > 0) {
  console.log('DUPLICATE SLUGS FOUND:');
  duplicates.forEach(slug => {
    console.log(`- ${slug} (${counts[slug]} occurrences)`);
  });
} else {
  console.log('No duplicate slugs found.');
}
