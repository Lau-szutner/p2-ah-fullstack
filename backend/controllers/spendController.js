import spendModel from '../models/spendModel.js';

export const getSpend = async (req, res) => {
  try {
    const spend = await spendModel.find();
    res.json(spend);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};

export const createSpend = async (req, res) => {
  try {
    const spend = new spendModel({ ...req.body });
    const newSpend = await spend.save();
    res.json(newSpend);
  } catch (error) {
    res.status(400).json({ json: error.message });
  }
};
