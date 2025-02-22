import { headerAppender } from "./header";
import axios from "axios";

const Card = (article) => {

  const card = document.createElement(`div`);
  const headline = document.createElement(`div`);
  const authorContainer = document.createElement(`div`);
  const imgContainer = document.createElement(`div`);
  const img = document.createElement(`img`);
  const authorName = document.createElement(`span`);

  card.classList.add(`card`);
  headline.classList.add(`headline`);
  authorContainer.classList.add(`author`);
  imgContainer.classList.add(`img-container`);
  
  headline.textContent = article.headline;
  img.src = article.authorPhoto;
  img.alt = `Author Photo`;
  authorName.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  imgContainer.appendChild(img);
  authorContainer.appendChild(authorName);

  card.addEventListener(`click`, e => {
    console.log(card.headline);
  })

  return card;

}
  
  
  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>


const cardAppender = (selector) => {
  
 axios.get(`http://localhost:5001/api/articles`)
 .then(resp => {

console.log(resp.data.articles)

  for(let i = 0; i < resp.data.articles.bootstrap.length; i++){
  document.querySelector(selector).appendChild(Card(resp.data.articles.bootstrap[i]));
  }
  for(let i = 0; i < resp.data.articles.javascript.length; i++){
    document.querySelector(selector).appendChild(Card(resp.data.articles.javascript[i]));
    }
  for(let i = 0; i < resp.data.articles.jquery.length; i++){
  document.querySelector(selector).appendChild(Card(resp.data.articles.jquery[i]));
  }
  for(let i = 0; i < resp.data.articles.node.length; i++){
    document.querySelector(selector).appendChild(Card(resp.data.articles.node[i]));
  }
  for(let i = 0; i < resp.data.articles.technology.length; i++){
    document.querySelector(selector).appendChild(Card(resp.data.articles.technology[i]));
    }

  
  console.log(resp.data.articles.bootstrap);
  console.log(`Its working in here`)
 })
 .catch(err => console.error(err))

}

  // TASK 6
  // ---------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.


export { Card, cardAppender }
