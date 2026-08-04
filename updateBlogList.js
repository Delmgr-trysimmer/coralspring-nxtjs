const fs = require('fs');

const slugs = JSON.parse(fs.readFileSync('slugs.json', 'utf8'));

let markdown = '# Blog Post Index\n\n';
markdown += '| Idx | Title | Slug | fileIdx |\n';
markdown += '|---|---|---|---|\n';

slugs.forEach((blog, idx) => {
  markdown += `| ${idx} | ${blog.title} | ${blog.slug} | ${blog.fileIdx} |\n`;
});

fs.writeFileSync('blog-list.md', markdown, 'utf8');
console.log('Successfully updated blog-list.md');
