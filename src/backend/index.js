const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/scrape', async (req, res) => {
  try {
    
    const comics = [
      { title: 'Koomiks 1', image: 'https://featureassets.gocomics.com/assets/6c9dbcc01d49013ea1f2005056a9545d' },
      { title: 'Koomiks 2', image: 'https://featureassets.gocomics.com/assets/d53de8d01d2c013ea1e3005056a9545d?optimizer=image&width=1400&quality=85' },
      { title: 'Koomiks 3', image: 'https://featureassets.gocomics.com/assets/00add6a01d3a013ea1e9005056a9545d?optimizer=image&width=1400&quality=85' },
      { title: 'Koomiks 4', image: 'https://featureassets.gocomics.com/assets/a34d4ab017c5013ea0c4005056a9545d?optimizer=image&width=1400&quality=85' },
    ];

    res.json({ comics });
  } catch (error) {
    console.error('Scraping error:', error);
    res.status(500).json({ error: 'Scraping failed', details: error.toString() });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
