/////////////// CHANGE STYLE WHILE SCROLLING ////////////////

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("nav-scroll", window.scrollY > 0);
});

////////////////// READ MORE ///////////////////

const readMoreContainer = document.querySelector(".categories-left");

readMoreContainer.addEventListener("click", () => {
  const current = event.target;
  console.log(current);

  const isReadMoreBtn = current.className.includes("btn-more");

  if (!isReadMoreBtn) return;

  const currentText = event.target.parentNode.querySelector(".read-more");
  currentText.classList.toggle("read-more-show");

  current.textContent = current.textContent.includes("Read More")
    ? "read less"
    : "Read more";
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
const menuOpen = document.getElementById('open-menu-btn');
const menuClose = document.getElementById('close-menu-btn');

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