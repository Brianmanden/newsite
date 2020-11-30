// --- contact ---
document.getElementById("contact-info").addEventListener('click', () => {
  window.open(
    "mailto:mail@kree8tive.dk?subject=Hi there ...&body=Hello%0A%0AI want to talk to you about...",
    "_blank"
  );
});

// --- carousel ---
var myCarousel = document.querySelector(".carousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5500,
  pause: "none",
});
