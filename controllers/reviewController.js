// routes/reviews.js
const express = require('express');
const router = express.Router();
const Review = require('../model/reviewModel');

// Submit a review
router.post('/reviews', async (req, res) => {
    try {
      const { name, pros, cons, rating } = req.body;
      const review = await Review.create({ name, pros, cons, rating });
      res.json(review);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error in creating review' });
    }
  });

// Retrieve reviews by company name

router.get('/search', async (req, res) => {
  try {
    const name = req.query.name;
    const reviews = await Review.findAll({
      where: {
        name
      },
      //attributes: ['pros', 'cons'] // Only fetch 'pros' and 'cons' fields
    });
    res.json(reviews);
  } catch (error) {
    console.error('Error searching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

  

module.exports = router;
