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
                        <label class="like-btn"
                        for="${post.username}""></label>
                        <input type="checkbox" id="${post.username}" >
                        <button class="comment-btn"></button>
                        <button class="dm-btn"></button>
                      </div>
                      <div class="flex-container">
                          <a href="#" class="likes">
                              ${post.likes}
                          </a>
                          <p>likes</p>
                      </div>
                      <div class="comments-section">
                          <div class="comment">
                            <a href="#" class="username">${post.username}</a>
                            <p >${post.comment}</p>
                          </div>
                      </div>
                  </section>
              </div>
          </section>
     `;
  }
  main.innerHTML = postsTags;
}

main.addEventListener('click', (e) => {
        
    if (e.target.classList[0] === 'like-btn') {
        let likeLabel = e.target;
        let likeBtn = likeLabel.nextElementSibling;
        let buttonsEl = likeBtn.parentElement;
        let likesContainer = buttonsEl.nextElementSibling;
        let likesEl = likesContainer.children[0];
        let likesElNum = parseInt( likesEl.textContent )
        
        if (!likeBtn.checked) {
            likesEl.textContent = likesElNum + 1;
            likeLabel.style.background = 'url(images/icon-heart-clicked.svg)';
        } else if (likeBtn.checked) {
            likesEl.textContent = likesElNum - 1;
            likeLabel.style.background = 'url(images/icon-heart.svg)';
        }
    }
    // add input and accept comments on comment button click //

    // if (e.target.classList[0] === 'comment-btn') {
    //     let commentBtn = e.target;
    //     let buttonsEl = commentBtn.parentElement;
    //     let commentsContainer = buttonsEl.nextElementSibling.nextElementSibling;
        

    // }
    
})
