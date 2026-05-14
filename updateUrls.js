const fs = require('fs');
const path = require('path');

const filesToUpdate = [
  'data/blog-posts.ts',
  'components/Services.tsx',
  'app/service/page.tsx',
  'components/Navbar.tsx',
  'components/Footer.tsx'
];

filesToUpdate.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Orthodontics => Orthodontist
    // Matches "/orthodontics" or "/orthodontics/" or "/orthodontics)" without mutating .mp4 or other words
    content = content.replace(/\/orthodontics(?=[/"\)])/g, '/orthodontist');
    
    // Dental Implants => Dental Implant
    content = content.replace(/\/dental-implants(?=[/"\)])/g, '/dental-implant');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
