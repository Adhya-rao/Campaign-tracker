const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Active', 'Paused', 'Completed'],
    default: 'Active',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Campaign', campaignSchema, 'Campaigns');

