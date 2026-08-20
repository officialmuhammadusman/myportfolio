const fs = require('fs');
const path = require('path');

const servicesPath = path.join(__dirname, 'src', 'data', 'services.ts');
const headerPath = path.join(__dirname, 'src', 'data', 'headerMega.ts');

let servicesContent = fs.readFileSync(servicesPath, 'utf8');
const headerContent = fs.readFileSync(headerPath, 'utf8');

// Simple regex to map ids to their imageSrc in headerMega.ts
const imageMap = {};
const regex = /id:\s*"([^"]+)",\s*imageSrc:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(headerContent)) !== null) {
  imageMap[match[1]] = match[2];
}

servicesContent = servicesContent.replace(/id:\s*"([^"]+)",[\s\S]*?heroImage:\s*"([^"]*)",/g, (match, id, oldHeroImage) => {
    // If we have an Unsplash/Google image from headerMega, use it!
    // Otherwise keep the old one or assign a random unsplash
    let newImage = imageMap[id];
    if (!newImage) {
      newImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600&h=900"; // Generic high-res coding
    } else {
        // Change w=200&h=200 to high res
        newImage = newImage.replace("w=200&h=200", "w=1600&h=900");
    }
    return match.replace(oldHeroImage, newImage);
});

fs.writeFileSync(servicesPath, servicesContent);
console.log("Updated services.ts with high-res Unsplash Hero Images");
