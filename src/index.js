import './styles.css';

const blog_div = document.getElementById('blog-posts');

const getBlogPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => posts.slice(0, 3));
}

getBlogPosts().then(posts => {
    const blog_post = posts.map(post => {
        return `
            <div class="blog-post">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;
    });
    blog_div.innerHTML = blog_post.join('');
}
);

