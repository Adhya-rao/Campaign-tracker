const express = require('express');
const Campaign = require('../models/Campaign');
const auth = require('../middleware/auth');

const router = express.Router();

router.use(auth);

router.get('/', async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.json(campaigns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findById(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });
    res.json(campaign);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const campaign = new Campaign({
    name: req.body.name,
    clientName: req.body.clientName,
    startDate: req.body.startDate,
    status: req.body.status,
  });

  try {
    const newCampaign = await campaign.save();
    res.status(201).json(newCampaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { name, clientName, status } = req.body;
    if (!name && !clientName && !status) {
      return res.status(400).json({ message: 'At least one field (name, clientName, status) must be provided' });
    }

    const updatedCampaign = await Campaign.findByIdAndUpdate(
      req.params.id,
      { name, clientName, status },
      { new: true, runValidators: true }
    );

    if (!updatedCampaign) return res.status(404).json({ message: 'Campaign not found' });

    res.json(updatedCampaign);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const campaign = await Campaign.findByIdAndDelete(req.params.id);
    if (!campaign) return res.status(404).json({ message: 'Campaign not found' });

    res.json({ message: 'Campaign deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

