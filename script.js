let img = document.createElement('img');
img.classList.add('todolist');
img.src = './assets/todolist.gif';
let imgContainer = document.querySelector('.image-container');

imgContainer.appendChild(img);

function start() {
  setTimeout(function () {
    start();
  }, 3000);
}

start();
