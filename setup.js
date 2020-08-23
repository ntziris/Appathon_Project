const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const prompt = require('prompt-sync')({ sigint: true });
const csv = require('fast-csv');
const JSONStream = require('JSONStream');

const Article = require('./models/article');

const configPath = path.join(
  path.dirname(process.mainModule.filename),
  'config',
  'databaseUrl.js'
);

const dataPath = path.join(path.dirname(process.mainModule.filename), 'data');

const csvPath = path.join(dataPath, 'metadata.csv');

const processRow = row => {
  let hasFullText = false;
  let fullTextPath = dataPath;
  if (
    row.pmc_json_files &&
    fs.existsSync(path.join(dataPath, row.pmc_json_files.split(';')[0]))
  ) {
    fullTextPath = path.join(dataPath, row.pmc_json_files.split(';')[0]);
    hasFullText = true;
  } else if (
    row.pdf_json_files &&
    fs.existsSync(path.join(dataPath, row.pdf_json_files.split(';')[0]))
  ) {
    fullTextPath = path.join(dataPath, row.pdf_json_files.split(';')[0]);
    hasFullText = true;
  } else if (row.authors && row.title) {
    const article = new Article({
      title: row.title,
      abstract: row.abstract,
      authors: row.authors.split('; '),
    })
      .save()
      .then(result => {
        // console.log(
        //   `The article with title: ${row.title} has been added to the database.`
        // );
      })
      .catch(error => {
        console.log(error);
      });
  }

  if (hasFullText && row.authors && row.title) {
    let fullText = '';
    fs.createReadStream(fullTextPath)
      .pipe(JSONStream.parse('body_text..text'))
      .on('data', data => {
        fullText += data + ' ';
      })
      .on('end', () => {
        const article = new Article({
          title: row.title,
          abstract: row.abstract,
          text: fullText,
          authors: row.authors.split('; '),
        })
          .save()
          .then(result => {
            // console.log(
            //   `The article with title: ${row.title} has been added to the database.`
            // );
          })
          .catch(error => {
            console.log(error);
          });
      });
  }
};

console.log('Configuring your MongoDb connection');
console.log('-----------------------------------');
let mongoUrl;
let host = prompt('MongoDb host (localhost): ');
host = host ? host : 'localhost';
let port = prompt('MongoDb port (27017): ');
port = port ? port : 27017;
let requiresAuth = prompt('Is authentication required yes/(no): ');
requiresAuth = requiresAuth ? requiresAuth : 'no';
if (requiresAuth == 'yes') {
  let user = prompt('MongoDb user: ');
  user = user ? user : '';
  let pass = prompt('MongoDb pass: ');
  pass = pass ? pass : '';
  mongoUrl = `mongodb://${user}:${pass}@${host}:${port}/appathon`;
} else {
  mongoUrl = `mongodb://${host}:${port}/appathon`;
}
console.log(mongoUrl);
mongoose
  .connect(mongoUrl, { useUnifiedTopology: false, useNewUrlParser: true })
  .then(result => {
    console.log('Connected to MongoDb');
    fs.writeFileSync(configPath, "module.exports = '" + mongoUrl + "';");
    fs.createReadStream(csvPath)
      .pipe(csv.parse({ headers: true }))
      .on('error', error => console.log(error))
      .on('data', row => {
        // console.log(row.authors);
        processRow(row);
      })
      .on('end', rowCount => {
        mongoose.connection
          .collection('articles')
          .createIndex(
            { title: 'text', abstract: 'text', text: 'text' },
            () => {
              console.log('Database is ready!');
              console.log('Setup completed. Thank you !');
              process.exit();
            }
          );
      });
  })
  .catch(err => {
    console.log('Cannot connect to the database');
    console.log(err);
    process.exit();
  });
