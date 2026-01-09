const categoryService = require('../services/category');

const createCategory = async (req, res) => {
  try {
    const category = await categoryService.createCategory(req.body.name, req.body.description);
    res.json(category);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const getCategory = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ errors: ['Category not found'] });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.id, req.body.name, req.body.description);
    if (!category) {
      return res.status(404).json({ errors: ['Category not found'] });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const category = await categoryService.deleteCategory(req.params.id);
    if (!category) {
      return res.status(404).json({ errors: ['Category not found'] });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory
};

