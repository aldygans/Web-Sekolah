const burgerMenu = document.querySelector("#burgerMenu");
const navbarMenu = document.querySelector("#navbarMenu");

burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("burger-active");
  navbarMenu.classList.toggle("hidden");
});

const image = document.querySelector(".image");

let MulaiImage = false,
  ImagePageX,
  ImageScrollKiri;

image.addEventListener(
  "mousedown",
  (ImageDown = (e) => {
    MulaiImage = true;
    ImagePageX = e.pageX;
    ImageScrollKiri = image.scrollLeft;
  })
);

image.addEventListener(
  "mousemove",
  (imageMove = (e) => {
    if (!MulaiImage) return;
    e.preventDefault();
    let posisi = e.pageX - ImagePageX;
    image.scrollLeft = ImageScrollKiri - posisi;
  })
);
69;

image.addEventListener(
  "mouseup",
  (imageUp = () => {
    MulaiImage = false;
  })
);
