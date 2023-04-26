console.log('script is running, luvata');
const span = document.getElementsByClassName('footer-copyright')[0].getElementsByTagName('span');
const a = document.getElementsByClassName('footer-links')[0].getElementsByTagName('a');
const callUs = document.getElementsByClassName('call-us-div')[0].getElementsByTagName('span');
var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
if(
isChromium !== null &&
typeof isChromium !== "undefined" &&
vendorName === "Google Inc.")
{
console.log('Chrome Browser');
for (let i = 0; i < span.length; i++) {
span[i].style.fontFamily = "tahomaBold,sans-serif";
}
for (let j = 0; j < a.length; j++) {
a[j].style.fontFamily ="tahomaBold,sans-serif";
}
for (let k = 0; k < callUs.length; k++) {
callUs[k].style.fontFamily ="tahomaBold,sans-serif";
}
}else{
console.log('another browser');
}

//Slider

const dots = document.querySelectorAll(".dots");
const allSlides = document.getElementsByClassName('all-slides')[0];
const firstContainerWidth = document.getElementsByClassName('first-content-area')[0].offsetWidth+4;
const imageDiv = document.getElementsByClassName('right-img-area')[0];
const textDiv = document.getElementsByClassName('text-div')[0];
const image = document.querySelectorAll('.right-images');
const imageList = [  'images/luvata.jpg',  'images/luvata-1.jpg',  'images/luvata-2.jpg',  'images/luvata-3.jpg',  'images/luvata-4.jpg',];
const headingP = document.querySelectorAll(".heading-p");
const contentP = document.querySelectorAll(".contents-paragraph");
//console.log(headingP);
//console.log(contentP);
let intervalId;
let currentIndex = 0;
let currentSlide = 0;
window.onload = function() {
  image.src=imageList[0];
  dots[0].setAttribute('id', 'active-dots');
  imageDiv.style.opacity=1;
  imageDiv.style.transform='translate3d(0, 0, 0)';
  autoSlide();
};

function dotsChange(index) {
  for (dotIndex = 0; dotIndex < dots.length; dotIndex++) {
    dots[dotIndex].removeAttribute('id');
  }
  dots[index].setAttribute('id', 'active-dots');
}

function setTimeoutFunctionDots() {
  //textDiv.style.transition = 'all 0s ease-in';
  //textDiv.style.opacity = 0;
  //textDiv.style.transition = 'all 0s ease-in';
  //textDiv.style.transform = 'translate3d(700px, 0, 0)';
  //console.log('textDiv');
}

function slider(index) {

  //Image Part
  if(index==1){
    image[1].classList.remove('image-none');
    image[1].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');
    image[4].classList.add('image-none');
    image[4].classList.remove('image-visible');

    headingP[1].classList.remove('image-none');
    headingP[1].classList.add('image-right');
    headingP[0].classList.add('image-none');
    headingP[0].classList.remove('image-visible');
    headingP[2].classList.add('image-none');
    headingP[2].classList.remove('image-visible');
    headingP[3].classList.add('image-none');
    headingP[3].classList.remove('image-visible');
    headingP[4].classList.add('image-none');
    headingP[4].classList.remove('image-visible');

    contentP[1].classList.remove('image-none');
    contentP[1].classList.add('image-right');
    contentP[0].classList.add('image-none');
    contentP[0].classList.remove('image-visible');
    contentP[2].classList.add('image-none');
    contentP[2].classList.remove('image-visible');
    contentP[3].classList.add('image-none');
    contentP[3].classList.remove('image-visible');
    contentP[4].classList.add('image-none');
    contentP[4].classList.remove('image-visible');

var thisTimeout = setTimeout(function() {
    image[1].classList.remove('image-right');
    image[1].classList.add('image-visible');
    headingP[1].classList.remove('image-right');
    headingP[1].classList.add('image-visible');
    contentP[1].classList.remove('image-right');
    contentP[1].classList.add('image-visible');
}, 50);
    currentSlide = 1;
  }
  else if(index==2){
    image[2].classList.remove('image-none');
    image[2].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');
    image[4].classList.add('image-none');
    image[4].classList.remove('image-visible');

    headingP[2].classList.remove('image-none');
    headingP[2].classList.add('image-right');
    headingP[0].classList.add('image-none');
    headingP[0].classList.remove('image-visible');
    headingP[1].classList.add('image-none');
    headingP[1].classList.remove('image-visible');
    headingP[3].classList.add('image-none');
    headingP[3].classList.remove('image-visible');
    headingP[4].classList.add('image-none');
    headingP[4].classList.remove('image-visible');

    contentP[2].classList.remove('image-none');
    contentP[2].classList.add('image-right');
    contentP[0].classList.add('image-none');
    contentP[0].classList.remove('image-visible');
    contentP[1].classList.add('image-none');
    contentP[1].classList.remove('image-visible');
    contentP[3].classList.add('image-none');
    contentP[3].classList.remove('image-visible');
    contentP[4].classList.add('image-none');
    contentP[4].classList.remove('image-visible');

var thisTimeout = setTimeout(function() {
    image[2].classList.remove('image-right');
    image[2].classList.add('image-visible');
    headingP[2].classList.remove('image-right');
    headingP[2].classList.add('image-visible');
    contentP[2].classList.remove('image-right');
    contentP[2].classList.add('image-visible');
}, 50);
    currentSlide = 2;
  }
  else if(index==3){
    image[3].classList.remove('image-none');
    image[3].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');
    image[4].classList.add('image-none');
    image[4].classList.remove('image-visible');

    headingP[3].classList.remove('image-none');
    headingP[3].classList.add('image-right');
    headingP[0].classList.add('image-none');
    headingP[0].classList.remove('image-visible');
    headingP[2].classList.add('image-none');
    headingP[2].classList.remove('image-visible');
    headingP[1].classList.add('image-none');
    headingP[1].classList.remove('image-visible');
    headingP[4].classList.add('image-none');
    headingP[4].classList.remove('image-visible');

    contentP[3].classList.remove('image-none');
    contentP[3].classList.add('image-right');
    contentP[0].classList.add('image-none');
    contentP[0].classList.remove('image-visible');
    contentP[2].classList.add('image-none');
    contentP[2].classList.remove('image-visible');
    contentP[1].classList.add('image-none');
    contentP[1].classList.remove('image-visible');
    contentP[4].classList.add('image-none');
    contentP[4].classList.remove('image-visible');

var thisTimeout = setTimeout(function() {
    image[3].classList.remove('image-right');
    image[3].classList.add('image-visible');
    headingP[3].classList.remove('image-right');
    headingP[3].classList.add('image-visible');
    contentP[3].classList.remove('image-right');
    contentP[3].classList.add('image-visible');
}, 50);
    currentSlide = 3;
  }
  else if(index==4){
    image[4].classList.remove('image-none');
    image[4].classList.add('image-right');
    image[0].classList.add('image-none');
    image[0].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');

    headingP[4].classList.remove('image-none');
    headingP[4].classList.add('image-right');
    headingP[0].classList.add('image-none');
    headingP[0].classList.remove('image-visible');
    headingP[2].classList.add('image-none');
    headingP[2].classList.remove('image-visible');
    headingP[3].classList.add('image-none');
    headingP[3].classList.remove('image-visible');
    headingP[1].classList.add('image-none');
    headingP[1].classList.remove('image-visible');

    contentP[4].classList.remove('image-none');
    contentP[4].classList.add('image-right');
    contentP[0].classList.add('image-none');
    contentP[0].classList.remove('image-visible');
    contentP[2].classList.add('image-none');
    contentP[2].classList.remove('image-visible');
    contentP[3].classList.add('image-none');
    contentP[3].classList.remove('image-visible');
    contentP[1].classList.add('image-none');
    contentP[1].classList.remove('image-visible');

var thisTimeout = setTimeout(function() {
    image[4].classList.remove('image-right');
    image[4].classList.add('image-visible');
    headingP[4].classList.remove('image-right');
    headingP[4].classList.add('image-visible');
    contentP[4].classList.remove('image-right');
    contentP[4].classList.add('image-visible');
}, 50);
    currentSlide = 4;
  }
  else if(index==0){
    image[0].classList.remove('image-none');
    image[0].classList.add('image-right');
    image[1].classList.add('image-none');
    image[1].classList.remove('image-visible');
    image[2].classList.add('image-none');
    image[2].classList.remove('image-visible');
    image[3].classList.add('image-none');
    image[3].classList.remove('image-visible');
    image[4].classList.add('image-none');
    image[4].classList.remove('image-visible');

    headingP[0].classList.remove('image-none');
    headingP[0].classList.add('image-right');
    headingP[1].classList.add('image-none');
    headingP[1].classList.remove('image-visible');
    headingP[2].classList.add('image-none');
    headingP[2].classList.remove('image-visible');
    headingP[3].classList.add('image-none');
    headingP[3].classList.remove('image-visible');
    headingP[4].classList.add('image-none');
    headingP[4].classList.remove('image-visible');

    contentP[0].classList.remove('image-none');
    contentP[0].classList.add('image-right');
    contentP[1].classList.add('image-none');
    contentP[1].classList.remove('image-visible');
    contentP[2].classList.add('image-none');
    contentP[2].classList.remove('image-visible');
    contentP[3].classList.add('image-none');
    contentP[3].classList.remove('image-visible');
    contentP[4].classList.add('image-none');
    contentP[4].classList.remove('image-visible');

var thisTimeout = setTimeout(function() {
    image[0].classList.remove('image-right');
    image[0].classList.add('image-visible');
    headingP[0].classList.remove('image-right');
    headingP[0].classList.add('image-visible');
    contentP[0].classList.remove('image-right');
    contentP[0].classList.add('image-visible');
}, 50);
    currentSlide = 0;
}
}

function clickHandler(index) {
  dotsChange(index);
  //setTimeoutFunctionDots();
  setTimeout(function() {
    slider(index);
  }, 1);
}

let myInterval;

function myStop() {
  clearInterval(myInterval);
}

let isHovered = false;

const contentArea = document.getElementsByClassName('first-content-area')[0];
contentArea.addEventListener("mouseover", mouseOver);
contentArea.addEventListener("mouseout", mouseOut);

function mouseOver() {
  isHovered = true;
  myStop();
}

function mouseOut() {
  isHovered = false;
  autoSlide();
}


function autoSlide() {
  if (isHovered) {
    return;
  }
   let currentIndex = currentSlide;
   myInterval = setInterval(() => {
   currentIndex = (currentIndex + 1) % image.length;
   clickHandler(currentIndex);
  }, 5000);
}


for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    clickHandler(i);
  });
}