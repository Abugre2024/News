fetch(
  "https://newsapi.org/v2/everything?q=politics&apiKey=4e0515ea1a5c48ce814135321223403f&pageSize=20"
)
  .then(function (response) {
    // console.log(response.body);
    return response.json();
  })
  .then(function (data) {
    // console.table(data.articles);
    for (const article of data.articles) {
    //   console.log(article);
    const articleDiv = document.createElement('div');

    const articleH1 = document.createElement('h1');
    articleH1.textContent = article.title;
    articleDiv.appendChild(articleH1);

    const articleP = document.createElement('p');
    articleP.textContent = article.description;
    articleDiv.appendChild(articleP);

    const articleImg = document.createElement('img');
    articleImg.setAttribute('src', article.urlToImage);
    articleImg.setAttribute('alt', article.title);
    articleImg.classList.add('article-img');
    articleDiv.appendChild(articleImg);

    document.querySelector('#articles').appendChild(articleDiv);
    }
  });
