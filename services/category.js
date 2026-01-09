const Category = require('../models/category');

const createCategory = async (name, description) => {
  const category = new Category({ name: name });
  if (description) category.description = description;
  return await category.save();
};

const getCategoryById = async (id) => {
  return await Category.findById(id);
};

const getCategories = async () => {
  return await Category.find({});
};

const updateCategory = async (id, name, description) => {
  const category = await getCategoryById(id);
  if (!category) return null;
  if (name) category.name = name;
  if (description !== undefined) category.description = description;
  await category.save();
  return category;
};

const deleteCategory = async (id) => {
  const category = await getCategoryById(id);
  if (!category) return null;
  await category.deleteOne();
  return category;
};

module.exports = {
  createCategory,
  getCategoryById,
  getCategories,
  updateCategory,
  deleteCategory
};

