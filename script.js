let slideCenter = (element) => {
  setTimeout(() => {
    element.classList.add('slideCenter');
  }, 498);
};

let slideRight = (element) => {
  setTimeout(() => {
    element.classList.add('slideRight');
  }, 1);
};

let removeImg = (parent, element) => {
  setTimeout(() => {
    parent.removeChild(element);
  }, 503);
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

  if (count > 1) removeImg(imgContainer, img);
  count++;

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
let count = 1;
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
