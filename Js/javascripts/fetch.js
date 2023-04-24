// gọi api từ một  url phía backend truyền lên
var postApi = 'https://jsonplaceholder.typicode.com/posts'

// resonse
fetch(postApi)
    .then(function(response){
        return response.json();
        // JSON.parse: JSON -> javascripts
    })
    .then(function(posts){
        console.log(posts);
        var htmls = posts.map(function(post){
            return `<li>
            <h2>title: ${post.title} </h2>
            <h2> body: ${post.body} </h2>
            </li>`
        });
        var html = htmls.join('');
        document.getElementById('post-block').innerHTML = html;

    });