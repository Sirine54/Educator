/////////////// CHANGE STYLE WHILE SCROLLING ////////////////

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav-scroll", window.scrollY > 0);
});



////////////////// QUESTION FREQUENT ///////////////////

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change the icon

    const icon = faq.querySelector(".faq-icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});


////////////////// S/H MENU  ///////////////////


const menu=document.querySelector('.list');
const menuOpen = document.querySelector('#open-menu-btn');
const menuClose = document.querySelector('#close-menu-btn');

menuOpen.addEventListener('click',()=>{
  menu.style.display="flex";
  menuClose.style.display="inline-block";
  menuOpen.style.display="none"
})

menuClose.addEventListener('click',()=>{
  menu.style.display="none";
  menuOpen.style.display="inline-block";
  menuClose.style.display="none"
})











//////////////////////About Countup ////////////////////

let counts = document.querySelectorAll('.countUp');
let interval = 5000;

counts.forEach((count)=>{
  let startValue = 0;
  let endValue= parseInt(count.getAttribute("data-val"));
let duration = Math.floor(interval/endValue);
let counter=setInterval(function(){
  startValue+=1;
  count.textContent=startValue;
  if(startValue == endValue){
    clearInterval(counter);
  }
},duration)
})


var btnMore=document.querySelector('.btn-more');
var moreText = document.querySelector('.read-more')

var dots=document.querySelector('.dots');

btnMore.addEventListener('click',()=>{


  if(dots.style.display === "none"){
    dots.style.display="inline";
    btnMore.innerHTML="Read More"
    moreText.style.display="none"
  }else{
    dots.style.display="none";
    btnMore.innerHTML="Read Less";
    moreText.style.display="inline"
  }


})








////////////////// READ MORE ///////////////////

// const readMoreContainer = document.querySelector(".categories-left");

// readMoreContainer.addEventListener("click", () => {
//   const current = event.target;
//   console.log(current);

//   const isReadMoreBtn = current.className.includes("btn-more");

//   if (!isReadMoreBtn) return;

//   const currentText = event.target.parentNode.querySelector(".read-more");
//   currentText.classList.toggle("read-more-show");

//   current.textContent = current.textContent.includes("Read More")
//     ? "read less"
//     : "Read more";
// });
