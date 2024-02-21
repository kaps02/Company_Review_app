// models/Review.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database,js');

const Review = sequelize.define('Review', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pros: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  cons: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

// Sync the model with the database
(async () => {
    try {
        await sequelize.sync(); // Sync all defined models
        console.log('Models synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing models:', error);
    }
})();

module.exports = Review;
