import { data } from "./data.js";

const homeNewsContainer = document.getElementById("news-container");
const articles = data.articles.sort(() => 0.5 - Math.random()).slice(0, 10);

articles.forEach((item) => {
  const article = document.createElement("article");
  article.className = "card";

  article.innerHTML = `
    <div class="card__tag card__tag--${item.category.toLowerCase()}">
      ${item.tag}
    </div>
    <h2 class="card__title">${item.title}</h2>
    <p class="card__desc">${item.description}</p>
    <footer class="card__footer">
      <span class="card__date">${item.date}</span>
      <span class="card__read">${item.readTime}</span>
    </footer>
  `;

  homeNewsContainer.appendChild(article);
});
