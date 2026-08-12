
const postsContainer = document.getElementById("posts");


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())

.then(posts => {
    console.log(posts);

    posts.forEach(post=>{
        postsContainer.innerHTML +=`
        <div class="card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </div>
        `;
    });
})

.catch(error=>{
    console.log(error);
})