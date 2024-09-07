document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("togglenav").addEventListener("click", function () {
    var nav = document.getElementById("mainNav");
    if (nav.classList.contains("show")) {
      nav.classList.remove("show");
      nav.classList.add("hide");
    } else {
      nav.classList.remove("hide");
      nav.classList.add("show");
    }
  });
});
