const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');
const path = require('path');

// Define the output file path
const outputPath = path.join(__dirname, 'sitemap.xml');

// Create generator
const generator = SitemapGenerator('http://127.0.0.1:8080', { // Use IPv4
  stripQuerystring: false,
  filepath: outputPath,
  maxEntriesPerFile: 50000, // adjust as necessary
  lastMod: true
});

// Register event listeners
generator.on('error', (error) => {
  console.error('Error occurred:', error);
});

generator.on('done', () => {
  console.log('Sitemap generation completed.');
  fs.readFile(outputPath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading sitemap file:', err);
      return;
    }
    console.log('Generated Sitemap:\n', data);
  });
});

generator.on('add', (url) => {
  console.log('Added URL:', url);
});

// Start the generator
generator.start();
