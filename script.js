// let img = document.createElement('img');
// img.classList.add('todolist');
// img.src = './assets/todolist.gif';
// let imgContainer = document.querySelector('.image-container');
// imgContainer.appendChild(img);

let slideCenter = (element) => {
  setTimeout(() => {
    element.classList.add('slideCenter');
  }, 400);
};

let slideRight = (element) => {
  setTimeout(() => {
    element.classList.add('slideRight');
  }, 2);
};

let removeImg = (parent, element) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, 501);
};

let createNewImage = (item, source, classname) => {
  setTimeout(() => {
    item.classList.add(classname);
    item.src = source;
    imgContainer.appendChild(item);
  }, 2);
};

let imageAnimation = (img, imgContainer, source, classname) => {
  slideRight(img);
  removeImg(imgContainer, img);
  let newImg = document.createElement('img');
  createNewImage(newImg, source, classname);
  slideCenter(newImg);
};

let checkImage = (img) => {
  if (img.classList.contains('todolist')) {
    imageAnimation(img, imgContainer, './assets/tictactoe.gif', 'tictactoe');
  } else if (img.classList.contains('tictactoe')) {
    imageAnimation(img, imgContainer, './assets/sketch.gif', 'sketch');
  } else if (img.classList.contains('sketch')) {
    imageAnimation(img, imgContainer, './assets/restaurant.gif', 'restaurant');
  } else if (img.classList.contains('restaurant')) {
    imageAnimation(img, imgContainer, './assets/sign-up.gif', 'sign');
  } else if (img.classList.contains('sign')) {
    imageAnimation(img, imgContainer, './assets/Library.gif', 'library');
  } else if (img.classList.contains('library')) {
    imageAnimation(img, imgContainer, './assets/dashboard.gif', 'dashboard');
  } else if (img.classList.contains('dashboard')) {
    imageAnimation(img, imgContainer, './assets/calculator.gif', 'calculator');
  } else if (img.classList.contains('calculator')) {
    imageAnimation(img, imgContainer, './assets/todolist.gif', 'todolist');
  }
};
let imgContainer = document.querySelector('.image-container');
let img = document.createElement('img');
imageAnimation(img, imgContainer, './assets/todolist.gif', 'todolist');

function start() {
  let imgContainer = document.querySelector('.image-container');
  let img = document.querySelector('img');

  checkImage(img);
  setTimeout(function () {
    start();
  }, 10000);
}

start();
