document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarIcon = navbarToggler.querySelector(".navbar-toggler-icon i");
  const navbarCollapse = document.querySelector("#navbarSupportedContent");

  navbarCollapse.addEventListener("shown.bs.collapse", function () {
    navbarIcon.classList.remove("fa-bars");
    navbarIcon.classList.add("fa-times");
  });

  navbarCollapse.addEventListener("hidden.bs.collapse", function () {
    navbarIcon.classList.remove("fa-times");
    navbarIcon.classList.add("fa-bars");
  });
});
