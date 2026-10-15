(function () {
  var header = document.querySelector("header");
  var button = document.querySelector(".nav-toggle");
  var icon = document.querySelector(".nav-toggle-icon");
  var nav = document.getElementById("site-nav");
  if (!header || !button || !nav) return;
  function setOpen(open) {
    header.classList.toggle("nav-open", open);
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "メニューを閉じる" : "メニュー");
    if (icon) icon.textContent = open ? "×" : "≡";
  }
  button.addEventListener("click", function () {
    setOpen(!header.classList.contains("nav-open"));
  });
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") setOpen(false);
  });
  window.matchMedia("(max-width: 767px)").addEventListener("change", function (event) {
    if (!event.matches) setOpen(false);
  });
})();
