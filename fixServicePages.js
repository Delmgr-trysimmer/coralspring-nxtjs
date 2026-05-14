const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'data/service-pages.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Orthodontics => Orthodontist (links)
content = content.replace(/\/orthodontics(?=[/"\)])/g, '/orthodontist');

// Dental Implants => Dental Implant (links)
content = content.replace(/\/dental-implants(?=[/"\)])/g, '/dental-implant');

// Heading text: "Orthodontics" => "Orthodontist"
content = content.replace(/"Orthodontics"/g, '"Orthodontist"');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated service-pages.ts');
