const articleService = require('../services/article');

const createArticle = async (req, res) => {
  try {
    const article = await articleService.createArticle(req.body.title);
    res.json(article);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const getArticles = async (req, res) => {
  try {
    const articles = await articleService.getArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const getArticle = async (req, res) => {
  try {
    const article = await articleService.getArticleById(req.params.id);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await articleService.updateArticle(req.params.id, req.body.title);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await articleService.deleteArticle(req.params.id);
    if (!article) {
      return res.status(404).json({ errors: ['Article not found'] });
    }
    res.json(article);
  } catch (error) {
    res.status(500).json({ errors: [error.message] });
  }
};

module.exports = {
  createArticle,
  getArticles,
  getArticle,
  updateArticle,
  deleteArticle
};

