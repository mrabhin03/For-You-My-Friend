document.body.style.overflow='hidden'
let timeoutId;
let timeoutId2;

function launchConfetti(obj) {

  obj.parentNode.remove();
  document.getElementById("VideoPlay").play();

  setTimeout(() => {
    sprinkles(200);
  }, 3000);

  setTimeout(()=>{
    changeImage(1)
    setEvents()
  },10000);

  setTimeout(() => {
    document.getElementById("audio").play()
    document.querySelector(".videoPlayer").classList.add("Disappear");
    document.body.style.overflow='auto'
    setTimeout(()=>{
      document.querySelector(".videoPlayer").remove();
       typeWriter();
    },1000)
  }, 11000);

}

function sprinkles(part){
  confetti({
    particleCount: part,
    spread: 80,
    ticks: 300, 
  });
}


const video = document.getElementById("VideoPlay");
const audio = document.getElementById("audio");
const startobj = document.getElementById("startButton");

let videoReady = false;
let audioReady = false;

function checkReady() {
  if (videoReady && audioReady) {
    setupStartButton();
  }
}

function setupStartButton() {
  startobj.innerHTML = 'Start';
  startobj.addEventListener('click', () => {
    launchConfetti(startobj)
  });
}

if (video.readyState >= 4) {
  videoReady = true;
} else {
  video.addEventListener('canplaythrough', () => {
    videoReady = true;
    checkReady();
  });
}

if (audio.readyState >= 4) {
  audioReady = true;
} else {
  audio.addEventListener('canplaythrough', () => {
    audioReady = true;
    checkReady();
  });
}

checkReady();


const imageContainer = document.getElementById('imageScroll');
const images = imageContainer.querySelectorAll('img');
const totalImages = images.length;
let currentIndex = -1;

const imageWidth = images[0].offsetWidth;

function changeImage(direction) {
  if(currentIndex==NaN){
    currentIndex=0
  }
  currentIndex += direction;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = totalImages - 1;
  }
  const scrollAmount = imageWidth * currentIndex;
  imageContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
  resetTimer();
}

function resetTimer() {
  clearTimeout(timeoutId);
  timeoutId = setTimeout(() => {
    changeImage(1);
  }, 6000);
}

function setEvents(){
  imageContainer.addEventListener('scroll', () => {
    const scrollLeft = imageContainer.scrollLeft;
    const newIndex = Math.round(scrollLeft / imageWidth);
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      document.getElementById('option').textContent = `${currentIndex + 1} / ${totalImages}`;
      resetTimer();
    }
  });
}



const text = "Thank you for being <b>my best friend</b>, standing by me, and supporting me through the toughest times of my life. <b>Your presence</b> means more than words can express.<br><br> <h3><i>Happy Birthday My Best Friend 💝</i></h3>";
const target = document.getElementById("typedText");
let i = 0;

function typeWriter() {
  let thistime=0;
  if (text.charAt(i) !== "<" && text.charAt(i) !== "/" && text.charAt(i) !== ">") {
    target.innerHTML = text.slice(0, i + 1);
    thistime=40;
  }
  i++;
  if (i <= text.length) {
    setTimeout(typeWriter, thistime); 
  }else{
    sprinkles(400)
  }
}




function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  const colors = ['#ff4b81', '#1bcaff', '#ffd700', '#7fff00', '#ff7f50'];
  balloon.style.background = `radial-gradient(circle at 30% 30%, ${colors[Math.floor(Math.random() * colors.length)]}, #000)`;

  balloon.style.animationDuration = `${6 + Math.random() * 4}s`;

  balloon.style.left = `${Math.random() * 100}%`;

  const size = 30 + Math.random() * 10;
  balloon.style.width = `${size}px`;
  balloon.style.height = `${size * 1.3}px`;

  document.getElementById('balloon-area').appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 8000);
}

setInterval(createBalloon, 200); 


 
