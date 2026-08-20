const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'headerMega.ts');
let content = fs.readFileSync(filePath, 'utf8');

// For About sub-links
content = content.replace(/href: "\/about#skills"/g, (match, offset, str) => {
    // Find the id: "something" before this href
    const prevText = str.substring(offset - 150, offset);
    const idMatch = prevText.match(/id:\s*"([^"]+)"/);
    if (idMatch) {
        return `href: "/about/${idMatch[1]}"`;
    }
    return match;
});
content = content.replace(/href: "\/about#experience"/g, 'href: "/about/experience"');

// For Insights sub-links
content = content.replace(/href: "\/blog"/g, (match, offset, str) => {
    // Exclude the main insights href
    const prevText = str.substring(offset - 100, offset);
    if (prevText.includes('trigger: "Insights"')) return match;

    const idMatch = prevText.match(/id:\s*"([^"]+)"/);
    if (idMatch) {
        return `href: "/blog/category/${idMatch[1]}"`;
    }
    return match;
});

// For Contact sub-links (inquiries)
content = content.replace(/href: contactSubjectHref\(CONTACT_SUBJECTS\[\d+\]\)/g, (match, offset, str) => {
    const prevText = str.substring(offset - 150, offset);
    const idMatch = prevText.match(/id:\s*"([^"]+)"/);
    if (idMatch) {
        return `href: "/contact/${idMatch[1]}"`;
    }
    return match;
});
content = content.replace(/href: "\/contact#form"/g, 'href: "/contact/project-brief"');

fs.writeFileSync(filePath, content);
console.log("Updated headerMega.ts");
