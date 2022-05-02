let playstatus = true;
let right = document.getElementById('right');
let left = document.getElementById('left');
let btnpress = true;

function notPressed() {
  btnpress = true;
}

function pressed() {
  btnpress = false;

  let notp = setTimeout(notPressed, 5000);
}

clearInterval(interval);

right.addEventListener('mouseenter', () => {
  right.style.transform = 'scale(0.9)';
  left.style.transform = 'scale(0.9)';
  right.addEventListener('mouseleave', () => {
    left.style.transform = 'scale(1)';
    right.style.transform = 'scale(1)';
  });
});

left.addEventListener('mouseenter', () => {
  right.style.transform = 'scale(0.9)';
  left.style.transform = 'scale(0.9)';
  left.addEventListener('mouseleave', () => {
    left.style.transform = 'scale(1)';
    right.style.transform = 'scale(1)';
  });
});

left.addEventListener('click', () => {
  playstatus === true ? (playstatus = false) : (playstatus = true);
  if (playstatus) {
    right.style.filter = 'none';
    left.style.filter = 'none';
  } else {
    right.style.filter = 'drop-shadow(0px 0px 5px white)';
    left.style.filter = 'drop-shadow(0px 0px 5px white)';
  }
});

right.addEventListener('click', () => {
  playstatus === true ? (playstatus = false) : (playstatus = true);
  if (playstatus) {
    right.style.filter = 'none';
    left.style.filter = 'none';
  } else {
    right.style.filter = 'drop-shadow(0px 0px 5px white)';
    left.style.filter = 'drop-shadow(0px 0px 5px white)';
  }
});

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
let removeBottomDisplay = (index) => {
  document.querySelector(`.slider-${index}`).classList.remove('selected');
};

let addBottomDisplay = (index) => {
  document.querySelector(`.slider-${index}`).classList.add('selected');
  console.log(document.querySelector(`.slider-${index}`));
};

let bottomDisplayControl = (remove, add) => {
  removeBottomDisplay(remove);
  addBottomDisplay(add);
};

let checkImage = (img) => {
  if (img.classList.contains('todolist')) {
    bottomDisplayControl('one', 'two');
    imageAnimation(img, imgContainer, './assets/tictactoe.gif', 'tictactoe');
  } else if (img.classList.contains('tictactoe')) {
    bottomDisplayControl('two', 'three');
    imageAnimation(img, imgContainer, './assets/sketch.gif', 'sketch');
  } else if (img.classList.contains('sketch')) {
    bottomDisplayControl('three', 'four');
    imageAnimation(img, imgContainer, './assets/restaurant.gif', 'restaurant');
  } else if (img.classList.contains('restaurant')) {
    bottomDisplayControl('four', 'five');
    imageAnimation(img, imgContainer, './assets/sign-up.gif', 'sign');
  } else if (img.classList.contains('sign')) {
    bottomDisplayControl('five', 'six');
    imageAnimation(img, imgContainer, './assets/Library.gif', 'library');
  } else if (img.classList.contains('library')) {
    bottomDisplayControl('six', 'seven');
    imageAnimation(img, imgContainer, './assets/dashboard.gif', 'dashboard');
  } else if (img.classList.contains('dashboard')) {
    bottomDisplayControl('seven', 'eight');
    imageAnimation(img, imgContainer, './assets/calculator.gif', 'calculator');
  } else if (img.classList.contains('calculator')) {
    bottomDisplayControl('eight', 'nine');
    imageAnimation(img, imgContainer, './assets/landing-page.gif', 'landing');
  } else if (img.classList.contains('landing')) {
    bottomDisplayControl('nine', 'one');
    imageAnimation(img, imgContainer, './assets/todolist.gif', 'todolist');
  }
};
let count = 1;
let imgContainer = document.querySelector('.image-container');
let img = document.createElement('img');
imageAnimation(img, imgContainer, './assets/todolist.gif', 'todolist');
addBottomDisplay('one');

function start() {
  let imgContainer = document.querySelector('.image-container');
  let img = document.querySelector('img');
  if (playstatus && btnpress) checkImage(img);
  setTimeout(function () {
    start();
  }, 5000);
}

document
  .querySelector('.arrow-right-container')
  .addEventListener('click', () => {
    pressed();
    let imgContainer = document.querySelector('.image-container');
    let img = document.querySelector('img');
    checkImage(img);
  });

start();
