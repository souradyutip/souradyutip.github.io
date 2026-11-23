// Mobile menu toggle
(function () {
  var btn = document.querySelector(".menu-btn");
  var links = document.getElementById("nav-links");
  if (btn && links) {
    btn.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Project status badges (Ongoing / Completed / Upcoming), computed from years
  var now = new Date().getFullYear();
  document.querySelectorAll(".project[data-start]").forEach(function (card) {
    var start = parseInt(card.dataset.start, 10);
    var end = parseInt(card.dataset.end, 10);
    var badge = card.querySelector(".badge");
    if (!badge) return;
    if (start > now) { badge.textContent = "Upcoming"; badge.className = "badge upcoming"; }
    else if (end && end <= now) { badge.textContent = "Completed"; badge.className = "badge completed"; }
  });

  // Hide broken images gracefully
  document.querySelectorAll("img").forEach(function (img) {
    img.addEventListener("error", function () { img.style.visibility = "hidden"; });
  });
})();
