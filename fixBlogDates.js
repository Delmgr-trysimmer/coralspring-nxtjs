const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data/blog-posts.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Replace all publishedAt: "2026- with publishedAt: "2025-
const countBefore = (content.match(/publishedAt:\s*"2026-/g) || []).length;
content = content.replace(/publishedAt:\s*"2026-/g, 'publishedAt: "2025-');
const countAfter = (content.match(/publishedAt:\s*"2026-/g) || []).length;

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Updated ${countBefore} dates from 2026 to 2025.`);
console.log(`Remaining 2026 dates: ${countAfter}`);
