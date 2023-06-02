let slideIndexMobile = 1;
showSlidesMobile(slideIndexMobile);

function nextSlideMobile() {
  showSlidesMobile((slideIndexMobile += 1));
}

function previousSlideMobile() {
  showSlidesMobile((slideIndexMobile -= 1));
}

function currentSlideMobile(k) {
  showSlidesMobile((slideIndexMobile = k));
}

function showSlidesMobile(k) {
  let slidesMobile = document.getElementsByClassName("item-mobile");

  if (k > slidesMobile.length) {
    slideIndexMobile = 1;
  }
  if (k < 1) {
    slideIndexMobile = slides.length;
  }

  for (let slideMobile of slidesMobile) {
    slideMobile.style.display = "none";
  }
  slidesMobile[slideIndexMobile - 1].style.display = "flex";
}
