const createPost = (name, message, imageURL) => {
    // Create the post elements
    const img = document.createElement('img');
    img.setAttribute("alt", name);
    img.src = imageURL;
    img.classList.add("post__img");
    const postName = document.createElement('h2');
    postName.innerHTML = name;
    const postMessage = document.createElement('p');
    postMessage.innerHTML = message;

    // Create the div and append the elements 
    const post = document.createElement('div');
    post.classList.add("posts__post");
    post.appendChild(img);
    post.appendChild(postName);
    post.appendChild(postMessage);

    return post;
}

let i = 0;
const posts = document.querySelector("#front-page__posts");
while (i < 826){
    i++;
    const characterName = "Character " + i;
    const characterMessage = "Esta es mi publicacion numero " + i + ". Esto es una prueba de generacion de relleno por medio de funciones y ciclos";
    const characterURL = `https://rickandmortyapi.com/api/character/avatar/${i}.jpeg`;
    const post = createPost(characterName, characterMessage, characterURL);
    posts.appendChild(post);
}