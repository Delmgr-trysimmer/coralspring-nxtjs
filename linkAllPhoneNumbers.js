const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'data/service-pages.ts',
  'data/blog-posts.ts'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Generic pattern for (954) XXX-XXXX
  // Group 1: 3 digits, Group 2: 4 digits
  const regex = /(?<!\[)\(954\)\s*([0-9]{3})-([0-9]{4})(?!\)\]\(tel:)/g;
  
  content = content.replace(regex, (match, p1, p2) => {
    changed = true;
    const cleanNumber = `954${p1}${p2}`;
    return `[${match}](tel:${cleanNumber})`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
