const main = document.querySelector("main");
const header = document.querySelector("header");

const posts = () => {
  return [
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21,
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4,
    },
    {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment:
        "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152,
    },
  ];
};

function render(data) {
  for (let i = 0; i < data.length; i++) {
    main.innerHTML += `
      <section class="post">
              <div class="container">
                  <section class="user-info">
                      <a href="#">
                          <img 
                          src="${data[i].avatar}" alt="${data[i].name}'s avatar"
                          class="avatar">
                      </a>
                      <article>
                          <a class="name" href="#">
                              ${data[i].name}
                          </a>
                          <p class="location">
                              ${data[i].location}
                          </p>
                      </article>
                  </section>
              </div>
  
              <img
              src="${data[i].post}"
              alt="portrait of ${data[i].name}"
              class="post-image">
  
              <div class="container">
                  <section class="post-body">
                      <div class="buttons">
                      <button class="like-btn" data-likes-plus="1"></button>
                      <button class="comment-btn"></button>
                      <button class="dm-btn"></button>
                      </div>
                      <div class="flex-container">
                          <a href="#" class="likes" data-current-likes="${data[i].likes}">
                              ${data[i].likes}
                          </a>
                          <p>likes</p>
                      </div>
                      <div class="flex-container">
                          <a href="#" class="username">${data[i].username}</a>
                          <p class="comment">${data[i].comment}</p>
                      </div>
                  </section>
              </div>
          </section>
     `;
  }
}

render(posts());