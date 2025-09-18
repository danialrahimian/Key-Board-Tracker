document.addEventListener("keydown", (e) => {
  const keyelement = document.querySelector(`.${e.code}`);
  keyelement.style.color = "red";
});
document.addEventListener("keyup", (e) => {
  const keyelement = document.querySelector(`.${e.code}`);
  keyelement.style.color = "white";
});
