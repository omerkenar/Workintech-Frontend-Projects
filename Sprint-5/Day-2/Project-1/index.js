// Kodlar Buraya
const thumbnails = document.querySelectorAll('.main-navigation img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('mouseenter', (e) => {
    console.log(e.target.src);
    document.getElementById('main-image').src = e.target.src;
  });
});
