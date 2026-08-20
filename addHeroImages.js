const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'services.ts');
let content = fs.readFileSync(filePath, 'utf8');

const images = [
    '/images/projects/live/cliender.png',
    '/images/projects/live/hrms-portal.png',
    '/images/projects/live/mejora-tu-dolor.png',
    '/images/projects/live/padel-connect.png'
];

let imageIndex = 0;

content = content.replace(/id: "([^"]+)",\s*title: "([^"]+)",/g, (match, id, title) => {
    const img = images[imageIndex % images.length];
    imageIndex++;
    return `${match}\n    heroImage: "${img}",`;
});

fs.writeFileSync(filePath, content);
console.log("Updated services.ts with heroImages");
