import {posts} from './postsData.js'
const main = document.querySelector("main");

render(posts());

function render(data) {
  let postsTags = ''
  for (let post of data) {
    postsTags += `
      <section class="post">
              <div class="container">
                  <section class="user-info">
                      <a href="#">
                          <img 
                          src="${post.avatar}"
                          alt="${post.name}'s avatar"
                          class="avatar"
                          loading="lazy">
                      </a>
                      <article>
                          <a class="name" href="#">
                              ${post.name}
                          </a>
                          <p class="location">
                              ${post.location}
                          </p>
                      </article>
                  </section>
              </div>
  
              <img
              src="${post.post}"
              alt="portrait of ${post.name}"
              class="post-image"
              loading="lazy">
  
              <div class="container">
                  <section class="post-body">
                      <div class="buttons">
                      <button class="like-btn"></button>
                      <button class="comment-btn"></button>
                      <button class="dm-btn"></button>
                      </div>
                      <div class="flex-container">
                          <a href="#" class="likes">
                              ${post.likes}
                          </a>
                          <p>likes</p>
                      </div>
                      <div class="flex-container">
                          <a href="#" class="username">${post.username}</a>
                          <p class="comment">${post.comment}</p>
                      </div>
                  </section>
              </div>
          </section>
     `;
  }
  main.innerHTML = postsTags;
}
