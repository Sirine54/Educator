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
