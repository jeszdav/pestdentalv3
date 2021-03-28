$(document).ready(function () {
  var scrollLink = $(".scroll");

  // Smooth scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      1000
    );
  });

  //Hamburger menu

  const hamburger = document.querySelector(".hamburger");
  const closeBtn = document.querySelector(".closeBtn");
  const navUL = document.querySelector(".nav__ul");

  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("nav__ul__show");
    closeBtn.classList.toggle("closeBtn__show");
  });

  closeBtn.addEventListener("click", () => {
    navUL.classList.toggle("nav__ul__show");
    closeBtn.classList.toggle("closeBtn__show");
  });
});
