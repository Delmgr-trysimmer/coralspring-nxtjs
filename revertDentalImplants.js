const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'data/blog-posts.ts',
  'data/service-pages.ts',
  'components/Services.tsx',
  'app/service/page.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace "/dental-implant" with "/dental-implants" 
    // but only if it's not already "/dental-implants"
    // Regex matches /dental-implant followed by something NOT "s"
    content = content.replace(/\/dental-implant(?!s)[/"\)]/g, (match) => {
        return match.replace('/dental-implant', '/dental-implants');
    });

    // Also handle exact matches if they end at the regex boundary
    content = content.replace(/\"\/dental-implant\"/g, '"/dental-implants"');
    content = content.replace(/\'\/dental-implant\'/g, "'/dental-implants'");
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
