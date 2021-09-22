const toggle = document.getElementById("toggle");
const signUp = document.getElementById("signUp");
const close = document.getElementById("close");
const modal = document.getElementById("modal");

//toggle event listener
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

//signUp button
signUp.addEventListener("click", () => modal.classList.add("show-modal"));

//close button
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide modal on outside click
window.addEventListener("click", (e) =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
