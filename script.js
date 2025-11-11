const btn = document.getElementById("clickMe");
btn.addEventListener("click", () => {
  const p = document.getElementById("greeting");
  p.textContent = "Nice! You're learning JavaScript. 🚀";
  alert("Welcome to Web Development with JavaScript!");
});
