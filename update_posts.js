const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'data', 'posts.json');
const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const authors = [
    "John Smith - Lead Technician",
    "Emma Davies - Customer Care Manager",
    "David Lee - Senior Paint Specialist",
    "Sarah Jenkins - Workshop Manager"
];

// Start date: today
let currentDate = new Date();

posts.forEach((post, index) => {
    // Assign a random author (or cycle through)
    post.author = authors[index % authors.length];

    // Stagger dates: subtract roughly 1-3 weeks for each consecutive post
    const daysToSubtract = Math.floor(Math.random() * 14) + 7; // 7 to 21 days
    currentDate.setDate(currentDate.getDate() - daysToSubtract);
    
    post.date = currentDate.toISOString().split('T')[0];
});

fs.writeFileSync(dataPath, JSON.stringify(posts, null, 4), 'utf8');
console.log('Successfully updated posts.json with staggered dates and realistic authors.');
