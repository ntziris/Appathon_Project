const Article = require('../models/article');
const article = require('../models/article');

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
      $project: { title: 1, authors: 1 },
    },
    {
      $unwind: '$authors',
    },
    {
      $group: {
        _id: '$authors',
        articles: { $addToSet: '$title' },
        count: { $sum: 1 },
      },
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
            newArticles.push(a.slice(0,80) + '...');
          } else {
            newArticles.push(a.slice());
          }
        }
        return {
          name: professor._id,
          count: professor.count,
          articles: newArticles
        };
      });

      console.log(professors);
      res.render('search', {
        term: term,
        professors: professors
      });
    })
    .catch(err => {
      console.log(err);
    });

  // for ({ _id: name, count: count } of topProfessors) {
  //   let articlesByProfessor = search.aggregate([
  //   {
  //       $match : { authors : name }
  //   },
  //   {
  //       $project: {authors: 0}
  //   }
  //   ]).toArray().map(({title}) => title);
  //   let professor = {
  //     name: name,
  //     coung: count,
  //     articles: articlesByProfessor,
  //   };
  //   topProfessorsWithArticles.push(professor);
  // }

  // console.log(topProfessorsWithArticles);
};
