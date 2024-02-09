const myLink = document.getElementById("mylink");
const paragraphEL = document.getElementById("paragraph");

myLink.addEventListener("click", (e) => {
  if (paragraphEL.style.display === "block") {
    myLink.innerHTML = "ReadMore";
    paragraphEL.style.display = "none";
  } else {
    myLink.innerHTML = "ReadLess";
    paragraphEL.style.display = "block";
  }
});
