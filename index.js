const main = document.querySelector("main");
const header = document.querySelector("header");

const posts = [
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

for (let i = 0; i < posts.length; i++) {
  main.innerHTML += `
    <section class="post">
            <div class="container">
                <section class="user-info">
                    <a href="#">
                        <img 
                        src="${posts[i].avatar}" alt="${posts[i].name}'s avatar"
                        class="avatar">
                    </a>
                    <article>
                        <a class="name" href="#">
                            ${posts[i].name}
                        </a>
                        <p class="location">
                            ${posts[i].location}
                        </p>
                    </article>
                </section>
            </div>

            <img
            src="${posts[i].post}"
            alt="portrait of ${posts[i].name}"
            class="post-image">

            <div class="container">
                <section class="post-body">
                    <div class="buttons">
                    <button class="like-btn" value="likeBtn"></button>
                    <button class="comment-btn"></button>
                    <button class="dm-btn"></button>
                    </div>
                    <div class="flex-container">
                        <a href="#" class="likes" value="likesCount">
                            ${posts[i].likes}
                        </a>
                        <p>likes</p>
                    </div>
                    <div class="flex-container">
                        <a href="#" class="username">${posts[i].username}</a>
                        <p class="comment">${posts[i].comment}</p>
                    </div>
                </section>
            </div>
        </section>
   `;
}

// event listners -incomplete

main.addEventListener("click", (e) => {
  if (e.target.value === "likeBtn") {
  }
});
