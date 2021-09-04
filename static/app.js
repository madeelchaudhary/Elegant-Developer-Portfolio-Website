window.onscroll = function () {
  if (scrollY > 100) {
    document.querySelector("header").classList.add("header-scroll");
  } else {
    document.querySelector("header").classList.remove("header-scroll");
  }
};
document.querySelector(".nav-toggle").addEventListener("click", () => {
  document.querySelector("header").classList.toggle("nav-visible");
});

const navLinks = document.querySelectorAll(".nav-mobile a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("header").classList.toggle("nav-visible");
  });
});
