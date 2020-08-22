const Article = require('../models/article');

exports.getIndex = (req, res, next) => {
  res.render('index');
};

exports.getResults = async (req, res, next) => {
  const term = req.query['term'];

  Article.aggregate([
    {
      $match: { $text: { $search: term } },
    },
    {
      $project: { _id: 0, title: 1, authors: 1 },
    },
    {
      $unwind: '$authors',
    },
    {
      $group: {
        _id: '$authors',
        articles: { $addToSet: '$title' },
      },
    },
    {
      $project: { _id: 1, articles: 1, count: { $size: '$articles' } },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 10,
    },
  ])
    .then(professors => {
      professors = professors.map(professor => {
        const newArticles = [];
        for (a of professor.articles) {
          if (a.length > 85) {
            newArticles.push(a.slice(0, 80) + '...');
          } else {
            newArticles.push(a.slice());
          }
        }
        return {
          name: professor._id,
          count: professor.count,
          articles: newArticles,
        };
      });

      res.render('search', {
        term: term,
        professors: professors,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
