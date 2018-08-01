const addPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: document.getElementById('title').value,
        body: document.getElementById('body').value
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
    })
}

const getPosts = () => {
  // GET request
  const url2 = 'https://jsonplaceholder.typicode.com/posts';

  fetch(url2)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    let i;
    for (i = 0; i < data.length; i++) {
      console.log(data.length)
      document.getElementById('post-list').innerHTML += `<div>
      <h4>${data[i].title}</h4>
      <p>${data[i].body}</p>
      </div>`
    }
  })
  .catch(error => {
    console.log(error);
  });
}
