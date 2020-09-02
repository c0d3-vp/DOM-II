// Your code goes here

// document.querySelector('.content-destintion > h2')
var tl = gsap.timeline({repeat:6, repeatDelay:1, yoyo:true});
tl.to(".content-destination > p", {duration: 0.2, className:"+=superShadow", top:"-=10px", ease:"power1.in", stagger: 0.3}, "start")

//mouseenter event listener with setTimeout
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.querySelector('.logo-heading');

mouseTarget.addEventListener('mouseenter', function(event) {
    let styles = event.target.style;
  styles.border = '5px dotted orange';
  styles.fontSize = "3em";
  styles.textAlign = "center";
  styles.color = "blue";

  setTimeout(function() {
  styles.border = '';
  styles.fontSize = '';
  styles.textAlign = '';
  styles.color = '';
  }, 10000);
}, false);

//mouseover event listener with setTimeout
let nav = document.querySelector(".nav");
nav.addEventListener("mouseover", function( event ) {   
  event.target.style.color = "orange";
  event.target.style.fontSize = "2.5em";

  setTimeout(function() {
    event.target.style.color = "";
  }, 10000);
  setTimeout(function() {
      event.target.style.fontSize = "";
  }, 10000);
}, false);

const body = document.querySelector('body')

body.addEventListener('keydown', function(event) {
    if(event.key === 'r') {
        changeStyles();
    }
})
function changeStyles() {
    body.style.color = 'green';
    body.style.backgroundColor = 'black';
}

//blur event listener
window.addEventListener('blur', function() {
    document.title = 'HEY! COME BACK!'
})

//focus event listener

window.addEventListener('focus', function() {
    document.title = 'Fun Bus Travel Agency'
})

//click event listener
const img = document.querySelector('img')
    img.addEventListener('click', function (event) {
      alert('You clicked on an image!!!')
    });

//dbl click event listener
const footer = document.querySelector('footer')
    footer.addEventListener('dblclick', function (event) {
        footer.style.color = 'yellow';
        footer.style.fontSize = '2em';
        footer.style.backgroundColor = 'white';
        footer.style.textAlign = 'center';
    })

//context menu disabled event listener
const noContext = document.querySelector('h4');

noContext.addEventListener('h4', function(event) {
  event.preventDefault();
});

const textContent = document.querySelector('.text-content');

//wheel event listener
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('.img-content');
  el.onwheel = zoom;

  //fullscreenchange event listener
  document.addEventListener('fullscreenchange', (event) => {
    if (document.fullscreenElement) {
      console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
    } else {
      console.log('Leaving full-screen mode.');
    }
  });

