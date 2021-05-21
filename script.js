const numPosts = 3
Array.from({ length: numPosts }, (_, i) => i + 1).reverse().forEach(async post => {
    // Fetch post
    const res = await fetch(`posts/${post}.json`);
    // Read it as text
    const json = await res.json();

    const template = document.getElementById("post-template");
    const newPost = template.content.cloneNode(true);
    
    newPost.querySelector(".posttime").innerHTML = json.posttime;
    newPost.querySelector(".post").innerHTML = json.post;
    
    // Add new post to document
    document.getElementById("root").appendChild(newPost);

});