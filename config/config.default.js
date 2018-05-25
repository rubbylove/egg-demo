
exports.keys = 'rubby'

exports.view = {
  defaultViewEngine: 'nunjucks',
  mapping: {
    '.nj': 'nunjucks'
  }
}

exports.news = {
  pageSize: 5,
  serverUrl: 'https://hacker-news.firebaseio.com/v0',
};

exports.ruby = {
  name: 'ruby',
  age: 1000
}

exports.middleware = [
  'ruby'
]