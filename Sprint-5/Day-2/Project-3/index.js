// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.
const images = document.querySelectorAll('img');
images.forEach((image) => {
  image.addEventListener('mouseenter', () => {
    image.classList.add('grayscale');
  });
  image.addEventListener('mouseleave', () => {
    image.classList.remove('grayscale');
  });
});

/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
- Not: keyboard eventlerini document'e değil window'a ekleyin. 
*/
window.addEventListener('keydown', (e) => {
  console.log('Basılan klavye tuşu: ', e.key);
  const body = document.body;
  function clearThemes() {
    body.classList.remove('theme1');
    body.classList.remove('theme2');
    body.classList.remove('theme3');
  }
  if (e.key === '1') {
    clearThemes();
    body.classList.add('theme1');
  } else if (e.key === '2') {
    clearThemes();
    body.classList.add('theme2');
  } else if (e.key === '3') {
    clearThemes();
    body.classList.add('theme3');
  } else if (e.key === 'Escape') {
    clearThemes();
  }
});

/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/
const input = document.querySelector('form input');
const button = document.querySelector('form button');
input.addEventListener('input', () => {
  input.value = input.value.toUpperCase();
  if (input.value.length > 5) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/
const form = document.querySelector('form');
const submitResult = document.querySelector('#submitResult');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitResult.textContent = `${input.value} başarı ile kaydedildi...`;
  input.value = '';
  button.disabled = true;
});
