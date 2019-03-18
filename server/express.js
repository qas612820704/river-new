import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/ping', (req, res) => res.end('pong'));

app.get('/cambridge/english/:word', async (req, res) => {
  const word = req.params.word;

  const translateHtml = await fetch(`https://dictionary.cambridge.org/dictionary/english/${word}`)
    .then(res => res.text());


  res.end(translateHtml);
})

app.get('/cambridge/english/spellcheck/:word', async (req, res) => {
  const word = req.params.word;

  const spellcheckHtml = await fetch(`https://dictionary.cambridge.org/spellcheck/english/?q=${word}`)
    .then(res => res.text());

  res.end(spellcheckHtml);
})

export default app;