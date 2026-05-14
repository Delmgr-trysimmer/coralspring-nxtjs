const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'data/service-pages.ts',
  'data/blog-posts.ts'
];

const patterns = [
  { text: '(954) 757-5353', tel: '9547575353' },
  { text: '(954) 266-8755', tel: '9542668755' }
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  patterns.forEach(p => {
    // Escape parentheses for regex
    const escapedText = p.text.replace(/\(/g, '\\(').replace(/\)/g, '\\)');
    
    // Find plain text occurrences that are NOT already part of a markdown link
    // Specifically, look for text that starts with (954) and is not preceded by [
    // and not followed by ](tel:
    const regex = new RegExp(`(?<!\\[)${escapedText}(?!\\]\\(tel:)`, 'g');
    
    content = content.replace(regex, `[${p.text}](tel:${p.tel})`);
    changed = true;
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
