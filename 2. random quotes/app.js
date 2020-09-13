const btn = document.querySelector('.generateQuote');
const quote = document.querySelector('.quote');
const quoteAuthor = document.querySelector('.quote-author');

const quotes = [
  {
    quote: 'I think the perfection of love is that it’s not perfect.',
    author: 'Taylor Swift',
  },
  {
    quote:
      'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.',
    author: 'Helen Keller',
  },
  {
    quote: 'Life without love is like a tree without blossoms or fruit.',
    author: 'Khalil Gibran',
  },
  {
    quote:
      'Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.',
    author: 'Maya Angelou',
  },
  {
    quote:
      'To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.',
    author: 'Victor Hugo',
  },
  {
    quote: 'You are my heart, my life, my one and only thought.',
    author: 'Arthur Conan Doyle',
  },
  {
    quote:
      'To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.',
    author: 'Victor Hugo',
  },
  {
    quote:
      'When I tell you I love you, I don’t say it out of habit. I say it to remind you that you’re the best thing that ever happened to me.',
    author: 'Onyebuchi Princewill',
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  const randomQuote = quotes[randomIndex].quote;
  const randomAuthor = quotes[randomIndex].author;

  quote.textContent = randomQuote;
  quoteAuthor.textContent = randomAuthor;
}

btn.addEventListener('click', getRandomQuote);
