// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const comments = [
  {
    id: 1,
    text: 'This is a comment'
  },
  {
    id: 2,
    text: 'This is another comment'
  }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});